// import { ErrorNode, RuleNode, TerminalNode } from "antlr4";

// import _ = require("lodash");
// import { getNewImportStatmentLexer } from "./../../GrammerHelpers";
// import { ProgramContext } from "./../GrammarParser";
// import GrammarVisitor from "./../GrammarVisitor";

// class CustomVisitor implements GrammarVisitor<string> {
//   visit(ruleNode: RuleNode): string {
//     console.log("visit", "text", ruleNode.getText());
//     return "";
//   }

//   visitChildren(ruleNode: RuleNode): string {
//     console.log("visitChildren", ruleNode.getText());
//     return "";
//   }

//   visitErrorNode(errorNode: ErrorNode): string {
//     console.log("visitErrorNode");
//     return "";
//   }

//   visitProgram(programContext: ProgramContext): string {

//     console.log("visitProgram");

//     // console.log("visitProgram","Statment_list.length", programContext.Statment_list.length);
//     // console.log("visitProgram","Code.length", programContext.);
//     // console.log("visitProgram", programContext.WhiteSpace_list.length);
//     // console.log("visitProgram", programContext.getText());
//     // console.log("visitProgram", programContext.Code_list.length);
//     // console.log("visitProgram", programContext.ImportStatment_list.length);
//     // console.log("visitProgram", programContext.ImportStatment_list.length);
    
//     // _.forEach(
//     //   programContext.ImportStatment_list,
//     //   (ImportStatment: TerminalNode) => {
//     //     const Statement = this.visitImportStatment(ImportStatment);
//     //     return Statement;
//     //   }
//     // );

//     return "";
//   }

//   visitImportStatment(terminalNode: TerminalNode): string {
//     const importStatement = terminalNode.getText();
//     console.log("importStatement", importStatement);

//     const lexer = getNewImportStatmentLexer(importStatement);
//     const tokens = lexer.getAllTokens();
//     console.log("tokens[0].text", tokens[2].text);
//     console.log("tokens[0] symbolicNames", lexer.symbolicNames[tokens[2].type]);
//     console.log(
//       "visitTerminal",
//       "text",
//       terminalNode.getText(),
//       terminalNode.symbol.type
//     );
//     return "";
//   }

//   visitTerminal(terminalNode: TerminalNode): string {
//     console.log(
//       "visitTerminal",
//       "text",
//       terminalNode.getText(),
//       terminalNode.symbol.type
//     );
//     return "";
//   }
// }

// export default CustomVisitor;
