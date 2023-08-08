import * as fs from "fs";
import * as path from "path";

import { getNewImportStatmentLexer, getNewLexer } from "./GrammerHelpers";
import { getFilePath } from "./fileHelpers";

function getImportsRecursively(fileFullPath: string) {
  // const importsHash: { [key: string]: Set<string> } = {};

  const discoveredImports = new Set();
  const importsToDiscover: string[] = [fileFullPath];

  function getImportsRecursivelyAux() {
    while (importsToDiscover.length > 0) {
      // Lets discover next file
      const currentFileFullPath = importsToDiscover.pop();
      if (currentFileFullPath) {
        // Adding current file to already discovered set
        discoveredImports.add(currentFileFullPath);
        // getting all the current file imports
        const currentFileImports = getImports(currentFileFullPath);
        // importsHash[currentFileFullPath] = currentFileImports;

        currentFileImports.forEach((importedFileFullPath) => {
          // if we havent discovered it yet, then lets discover it
          if (!discoveredImports.has(importedFileFullPath)) {
            importsToDiscover.push(importedFileFullPath);
          }
        });
      }
    }
  }

  getImportsRecursivelyAux();

  // printHash(importsHash, resolvedCodeFilePath, 0);
  return discoveredImports;
}

export function getImports(codeFileFull: string) {
  const codeFilePath = getFilePath(codeFileFull);

  const input = fs.readFileSync(codeFileFull, "utf-8");

  const lexer = getNewLexer(input);
  const tokens = lexer.getAllTokens();

  const ImportStatmentTokens = tokens.filter(
    (token) => lexer.symbolicNames[token.type] === "ImportStatment"
  );

  const pathSet = new Set<string>();
  ImportStatmentTokens.forEach(
    (importStatmentToken, ImportStatmentTokenIndex) => {
      const lexer = getNewImportStatmentLexer(importStatmentToken.text);
      const tokens = lexer.getAllTokens();

      const importStatmentPathsTokens = tokens.filter(
        (token) => lexer.symbolicNames[token.type] === "FullPath"
      );

      importStatmentPathsTokens.forEach((importStatmentPathsToken) => {
        pathSet.add(
          path.resolve(codeFilePath + "/" + importStatmentPathsToken.text)
        );
      });
    }
  );

  return pathSet;
}

export default { getImports };
