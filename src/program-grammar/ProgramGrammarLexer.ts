// Generated from ProgramGrammar.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class ProgramGrammarLexer extends Lexer {
	public static readonly ImportStatement = 1;
	public static readonly Import = 2;
	public static readonly SemiColon = 3;
	public static readonly Code = 4;
	public static readonly FullPath = 5;
	public static readonly WhiteSpace = 6;
	public static readonly NewLine = 7;
	public static readonly UnexpectedCharacter = 8;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'import'", 
                                                            "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ImportStatement", 
                                                             "Import", "SemiColon", 
                                                             "Code", "FullPath", 
                                                             "WhiteSpace", 
                                                             "NewLine", 
                                                             "UnexpectedCharacter" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"ImportStatement", "Import", "SemiColon", "Code", "FullPath", "Path", 
		"FileName", "FileExt", "FileSep", "DirSep", "DirName", "ParentDir", "CurrentDir", 
		"Underscore", "Digits", "Letters", "WhiteSpace", "NewLine", "UnexpectedCharacter",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, ProgramGrammarLexer._ATN, ProgramGrammarLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "ProgramGrammar.g4"; }

	public get literalNames(): (string | null)[] { return ProgramGrammarLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return ProgramGrammarLexer.symbolicNames; }
	public get ruleNames(): string[] { return ProgramGrammarLexer.ruleNames; }

	public get serializedATN(): number[] { return ProgramGrammarLexer._serializedATN; }

	public get channelNames(): string[] { return ProgramGrammarLexer.channelNames; }

	public get modeNames(): string[] { return ProgramGrammarLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,8,139,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,
	2,17,7,17,2,18,7,18,1,0,1,0,1,0,4,0,43,8,0,11,0,12,0,44,1,0,1,0,1,0,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,4,3,61,8,3,11,3,12,3,62,1,4,1,4,
	1,4,1,4,1,4,5,4,70,8,4,10,4,12,4,73,9,4,1,5,1,5,1,5,5,5,78,8,5,10,5,12,
	5,81,9,5,1,6,4,6,84,8,6,11,6,12,6,85,1,7,4,7,89,8,7,11,7,12,7,90,1,8,1,
	8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,4,10,102,8,10,11,10,12,10,103,3,10,106,
	8,10,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,4,14,116,8,14,11,14,12,14,
	117,1,15,4,15,121,8,15,11,15,12,15,122,1,16,1,16,1,16,1,16,1,17,1,17,3,
	17,131,8,17,1,17,3,17,134,8,17,1,17,1,17,1,18,1,18,0,0,19,1,1,3,2,5,3,7,
	4,9,5,11,0,13,0,15,0,17,0,19,0,21,0,23,0,25,0,27,0,29,0,31,0,33,6,35,7,
	37,8,1,0,4,4,0,48,57,65,90,95,95,97,122,1,0,48,57,2,0,65,90,97,122,2,0,
	9,9,32,32,144,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
	0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,49,1,0,0,0,5,56,
	1,0,0,0,7,60,1,0,0,0,9,64,1,0,0,0,11,79,1,0,0,0,13,83,1,0,0,0,15,88,1,0,
	0,0,17,92,1,0,0,0,19,94,1,0,0,0,21,105,1,0,0,0,23,107,1,0,0,0,25,110,1,
	0,0,0,27,112,1,0,0,0,29,115,1,0,0,0,31,120,1,0,0,0,33,124,1,0,0,0,35,133,
	1,0,0,0,37,137,1,0,0,0,39,42,3,3,1,0,40,43,3,33,16,0,41,43,3,35,17,0,42,
	40,1,0,0,0,42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,46,
	1,0,0,0,46,47,3,9,4,0,47,48,3,5,2,0,48,2,1,0,0,0,49,50,5,105,0,0,50,51,
	5,109,0,0,51,52,5,112,0,0,52,53,5,111,0,0,53,54,5,114,0,0,54,55,5,116,0,
	0,55,4,1,0,0,0,56,57,5,59,0,0,57,6,1,0,0,0,58,61,3,31,15,0,59,61,3,29,14,
	0,60,58,1,0,0,0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,
	63,8,1,0,0,0,64,65,3,11,5,0,65,71,3,13,6,0,66,67,3,17,8,0,67,68,3,15,7,
	0,68,70,1,0,0,0,69,66,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,
	72,10,1,0,0,0,73,71,1,0,0,0,74,75,3,21,10,0,75,76,3,19,9,0,76,78,1,0,0,
	0,77,74,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,12,1,0,0,0,
	81,79,1,0,0,0,82,84,7,0,0,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,
	86,1,0,0,0,86,14,1,0,0,0,87,89,7,0,0,0,88,87,1,0,0,0,89,90,1,0,0,0,90,88,
	1,0,0,0,90,91,1,0,0,0,91,16,1,0,0,0,92,93,5,46,0,0,93,18,1,0,0,0,94,95,
	5,47,0,0,95,20,1,0,0,0,96,106,3,25,12,0,97,106,3,23,11,0,98,102,3,31,15,
	0,99,102,3,29,14,0,100,102,3,27,13,0,101,98,1,0,0,0,101,99,1,0,0,0,101,
	100,1,0,0,0,102,103,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,106,1,0,
	0,0,105,96,1,0,0,0,105,97,1,0,0,0,105,101,1,0,0,0,106,22,1,0,0,0,107,108,
	5,46,0,0,108,109,5,46,0,0,109,24,1,0,0,0,110,111,5,46,0,0,111,26,1,0,0,
	0,112,113,5,95,0,0,113,28,1,0,0,0,114,116,7,1,0,0,115,114,1,0,0,0,116,117,
	1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,30,1,0,0,0,119,121,7,2,0,0,
	120,119,1,0,0,0,121,122,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,32,
	1,0,0,0,124,125,7,3,0,0,125,126,1,0,0,0,126,127,6,16,0,0,127,34,1,0,0,0,
	128,130,5,13,0,0,129,131,5,10,0,0,130,129,1,0,0,0,130,131,1,0,0,0,131,134,
	1,0,0,0,132,134,5,10,0,0,133,128,1,0,0,0,133,132,1,0,0,0,134,135,1,0,0,
	0,135,136,6,17,0,0,136,36,1,0,0,0,137,138,9,0,0,0,138,38,1,0,0,0,16,0,42,
	44,60,62,71,79,85,90,101,103,105,117,122,130,133,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ProgramGrammarLexer.__ATN) {
			ProgramGrammarLexer.__ATN = new ATNDeserializer().deserialize(ProgramGrammarLexer._serializedATN);
		}

		return ProgramGrammarLexer.__ATN;
	}


	static DecisionsToDFA = ProgramGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}