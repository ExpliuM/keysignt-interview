import { getImports } from "./Imports";
import { getFilePath, getFilename, getRelativePath } from "./fileHelpers";

export function buildDependencyHash(fileFullPath: string) {
  const importsHash: { [key: string]: Set<string> } = {};

  const discoveredImports = new Set();
  const importsToDiscover: string[] = [fileFullPath];

  function buildDependencyHashAux() {
    while (importsToDiscover.length > 0) {
      // Lets discover next file
      const currentFileFullPath = importsToDiscover.pop();
      if (currentFileFullPath) {
        // Adding current file to already discovered set
        discoveredImports.add(currentFileFullPath);
        // getting all the current file imports
        const currentFileImports = getImports(currentFileFullPath);
        importsHash[currentFileFullPath] = currentFileImports;

        currentFileImports.forEach((importedFileFullPath) => {
          // if we havent discovered it yet, then lets discover it
          if (!discoveredImports.has(importedFileFullPath)) {
            importsToDiscover.push(importedFileFullPath);
          }
        });
      }
    }
  }

  buildDependencyHashAux();

  return importsHash;
}

export function buildDependencyHashOutput(
  hash: { [key: string]: Set<string> },
  codeFileFullPath: string,
  depth = 0
) {
  let outputString = "";
  const visited = new Set<string>();

  function buildDependencyHashOutputAux(currFileFullPath: string, depth = 0) {
    visited.add(currFileFullPath);

    hash[currFileFullPath]?.forEach((libFileFullPath) => {
      const libFilename = getFilename(libFileFullPath);

      outputString = outputString.concat(
        "\t".repeat(depth) + libFilename + "\n"
      );
      if (!visited.has(libFileFullPath)) {
        buildDependencyHashOutputAux(libFileFullPath, depth + 1);
      }
    });
  }

  const codeFileName = getFilename(codeFileFullPath);
  const codeFilePath = getFilePath(codeFileFullPath);

  outputString = outputString.concat(codeFileName + "\n");
  buildDependencyHashOutputAux(codeFileFullPath, 1);
  return outputString;
}

export default {
  getImports,
  buildDependencyHash,
  buildDependencyHashOutput,
};
