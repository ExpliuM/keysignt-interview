// import { ErrorNode, ParserRuleContext, RuleNode, TerminalNode } from "antlr4";
// // import { ProgramContext } from "./GrammarParser";
// // import GrammarVisitor from "./GrammarVisitor";
// import { getTypeIndex } from "../GrammerHelpers";

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
//     console.log("visitProgram",programContext.Statement_list.length);
//     if (programContext.Statement_list.length > 0) {
      
//       // console.log("visitProgram", "ImportStatement");
//       // const Statement = this.visitTerminal(programContext.ImportStatement(0));
//       // return Statement;
//     }

//     return "";
//   }

//   visitImportStatement(terminalNode: TerminalNode): string {
//     const importStatement = terminalNode.getText();

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
