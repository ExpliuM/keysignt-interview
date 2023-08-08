// import { ErrorNode, ParserRuleContext, TerminalNode } from "antlr4";
// import GrammarListener from "../GrammarListener";
// import { ProgramContext } from "../GrammarParser";

// export class CustomListener implements GrammarListener {
//   // Assuming a parser rule with name: `functionDeclaration`
//   enterProgram(programContext: ProgramContext) {
//     console.log("enterProgram");
//   }


//   enterFullPathRule(node: TerminalNode): void {
//     console.log("enterFullPathRule", "text",node.getText());
//   }

//   visitTerminal(node: TerminalNode): void {
//     console.log("visitTerminal", "text",node.getText());
//   }

//   visitErrorNode(node: ErrorNode): void {
//     console.log("visitErrorNode");
//   }

//   enterEveryRule(ctx: ParserRuleContext): void {
//     console.log("enterEveryRule", "text",ctx.getText());
//   }
  
//   exitEveryRule(ctx: ParserRuleContext): void {
//     console.log("exitEveryRule", "text",ctx.getText());
//   }
// }

// export default CustomListener;
