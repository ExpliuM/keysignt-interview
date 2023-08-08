import { CharStream, CommonTokenStream } from "antlr4";

import ImportStatmentLexer from "./import-statment-grammar/ImportStatmentGrammarLexer";
import ProgramGrammarLexer from "./program-grammar/ProgramGrammarLexer";
// import Parser from "./program-grammar/GrammarParser";

export function getNewImportStatmentLexer(input: string): ProgramGrammarLexer {
  const chars = new CharStream(input);
  return new ImportStatmentLexer(chars);
}

export function getNewLexer(input: string): ProgramGrammarLexer {
  const chars = new CharStream(input);
  return new ProgramGrammarLexer(chars);
}

export function getTypeIndex(type: String, lexer: ProgramGrammarLexer): Number {
  const array = Object.values(lexer.symbolicNames);
  return array.findIndex((elem) => elem === type);
}

export default { getNewImportStatmentLexer, getNewLexer, getTypeIndex };
