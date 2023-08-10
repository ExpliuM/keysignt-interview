import * as fs from "fs";
import * as path from "path";

import { getNewImportStatementLexer, getNewLexer } from "./GrammerHelpers";
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

  return discoveredImports;
}

export function getImports(codeFileFull: string) {
  const pathSet = new Set<string>();

  if (!fs.existsSync(codeFileFull)) {
    console.warn("Could not find " + codeFileFull + " file");
  }

  const codeFilePath = getFilePath(codeFileFull);

  const input = fs.readFileSync(codeFileFull, "utf-8");

  const lexer = getNewLexer(input);
  const tokens = lexer.getAllTokens();

  const ImportStatementTokens = tokens.filter(
    (token) => lexer.symbolicNames[token.type] === "ImportStatement"
  );

  ImportStatementTokens.forEach(
    (importStatementToken, ImportStatementTokenIndex) => {
      const lexer = getNewImportStatementLexer(importStatementToken.text);
      const tokens = lexer.getAllTokens();

      const importStatementPathsTokens = tokens.filter(
        (token) => lexer.symbolicNames[token.type] === "FullPath"
      );

      importStatementPathsTokens.forEach((importStatementPathsToken) => {
        pathSet.add(
          path.resolve(codeFilePath + "/" + importStatementPathsToken.text)
        );
      });
    }
  );

  return pathSet;
}

export default { getImports };
