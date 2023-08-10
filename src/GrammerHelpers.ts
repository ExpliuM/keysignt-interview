import { CharStream, CommonTokenStream } from "antlr4";

import ImportStatementLexer from "./import-statement-grammar/ImportStatementGrammarLexer";
import ProgramGrammarLexer from "./program-grammar/ProgramGrammarLexer";
// import Parser from "./program-grammar/GrammarParser";

export function getNewImportStatementLexer(input: string): ProgramGrammarLexer {
  const chars = new CharStream(input);
  return new ImportStatementLexer(chars);
}

export function getNewLexer(input: string): ProgramGrammarLexer {
  const chars = new CharStream(input);
  return new ProgramGrammarLexer(chars);
}

export function getTypeIndex(type: String, lexer: ProgramGrammarLexer): Number {
  const array = Object.values(lexer.symbolicNames);
  return array.findIndex((elem) => elem === type);
}

export default { getNewImportStatementLexer, getNewLexer, getTypeIndex };
