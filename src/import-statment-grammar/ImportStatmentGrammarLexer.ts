// Generated from ImportStatmentGrammar.g4 by ANTLR 4.13.0
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
export default class ImportStatmentGrammarLexer extends Lexer {
	public static readonly Import = 1;
	public static readonly FullPath = 2;
	public static readonly WhiteSpace = 3;
	public static readonly NewLine = 4;
	public static readonly UnexpectedCharacter = 5;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'import'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Import", 
                                                             "FullPath", 
                                                             "WhiteSpace", 
                                                             "NewLine", 
                                                             "UnexpectedCharacter" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"Import", "FullPath", "Path", "FileName", "FileExt", "FileSep", "DirSep", 
		"DirName", "ParentDir", "CurrentDir", "Underscore", "Digits", "Letters", 
		"WhiteSpace", "NewLine", "UnexpectedCharacter",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, ImportStatmentGrammarLexer._ATN, ImportStatmentGrammarLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "ImportStatmentGrammar.g4"; }

	public get literalNames(): (string | null)[] { return ImportStatmentGrammarLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return ImportStatmentGrammarLexer.symbolicNames; }
	public get ruleNames(): string[] { return ImportStatmentGrammarLexer.ruleNames; }

	public get serializedATN(): number[] { return ImportStatmentGrammarLexer._serializedATN; }

	public get channelNames(): string[] { return ImportStatmentGrammarLexer.channelNames; }

	public get modeNames(): string[] { return ImportStatmentGrammarLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,5,118,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,
	0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,46,8,1,10,1,12,1,49,9,1,1,2,3,
	2,52,8,2,1,2,1,2,1,2,5,2,57,8,2,10,2,12,2,60,9,2,1,3,4,3,63,8,3,11,3,12,
	3,64,1,4,4,4,68,8,4,11,4,12,4,69,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,4,
	7,81,8,7,11,7,12,7,82,3,7,85,8,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,4,11,
	95,8,11,11,11,12,11,96,1,12,4,12,100,8,12,11,12,12,12,101,1,13,1,13,1,13,
	1,13,1,14,1,14,3,14,110,8,14,1,14,3,14,113,8,14,1,14,1,14,1,15,1,15,0,0,
	16,1,1,3,2,5,0,7,0,9,0,11,0,13,0,15,0,17,0,19,0,21,0,23,0,25,0,27,3,29,
	4,31,5,1,0,4,4,0,48,57,65,90,95,95,97,122,1,0,48,57,2,0,65,90,97,122,2,
	0,9,9,32,32,120,0,1,1,0,0,0,0,3,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
	1,0,0,0,1,33,1,0,0,0,3,40,1,0,0,0,5,51,1,0,0,0,7,62,1,0,0,0,9,67,1,0,0,
	0,11,71,1,0,0,0,13,73,1,0,0,0,15,84,1,0,0,0,17,86,1,0,0,0,19,89,1,0,0,0,
	21,91,1,0,0,0,23,94,1,0,0,0,25,99,1,0,0,0,27,103,1,0,0,0,29,112,1,0,0,0,
	31,116,1,0,0,0,33,34,5,105,0,0,34,35,5,109,0,0,35,36,5,112,0,0,36,37,5,
	111,0,0,37,38,5,114,0,0,38,39,5,116,0,0,39,2,1,0,0,0,40,41,3,5,2,0,41,47,
	3,7,3,0,42,43,3,11,5,0,43,44,3,9,4,0,44,46,1,0,0,0,45,42,1,0,0,0,46,49,
	1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,4,1,0,0,0,49,47,1,0,0,0,50,52,3,
	13,6,0,51,50,1,0,0,0,51,52,1,0,0,0,52,58,1,0,0,0,53,54,3,15,7,0,54,55,3,
	13,6,0,55,57,1,0,0,0,56,53,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,
	0,0,0,59,6,1,0,0,0,60,58,1,0,0,0,61,63,7,0,0,0,62,61,1,0,0,0,63,64,1,0,
	0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,8,1,0,0,0,66,68,7,0,0,0,67,66,1,0,0,
	0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,10,1,0,0,0,71,72,5,46,0,
	0,72,12,1,0,0,0,73,74,5,47,0,0,74,14,1,0,0,0,75,85,3,19,9,0,76,85,3,17,
	8,0,77,81,3,25,12,0,78,81,3,23,11,0,79,81,3,21,10,0,80,77,1,0,0,0,80,78,
	1,0,0,0,80,79,1,0,0,0,81,82,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,
	0,0,0,84,75,1,0,0,0,84,76,1,0,0,0,84,80,1,0,0,0,85,16,1,0,0,0,86,87,5,46,
	0,0,87,88,5,46,0,0,88,18,1,0,0,0,89,90,5,46,0,0,90,20,1,0,0,0,91,92,5,95,
	0,0,92,22,1,0,0,0,93,95,7,1,0,0,94,93,1,0,0,0,95,96,1,0,0,0,96,94,1,0,0,
	0,96,97,1,0,0,0,97,24,1,0,0,0,98,100,7,2,0,0,99,98,1,0,0,0,100,101,1,0,
	0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,26,1,0,0,0,103,104,7,3,0,0,104,105,
	1,0,0,0,105,106,6,13,0,0,106,28,1,0,0,0,107,109,5,13,0,0,108,110,5,10,0,
	0,109,108,1,0,0,0,109,110,1,0,0,0,110,113,1,0,0,0,111,113,5,10,0,0,112,
	107,1,0,0,0,112,111,1,0,0,0,113,114,1,0,0,0,114,115,6,14,0,0,115,30,1,0,
	0,0,116,117,9,0,0,0,117,32,1,0,0,0,13,0,47,51,58,64,69,80,82,84,96,101,
	109,112,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ImportStatmentGrammarLexer.__ATN) {
			ImportStatmentGrammarLexer.__ATN = new ATNDeserializer().deserialize(ImportStatmentGrammarLexer._serializedATN);
		}

		return ImportStatmentGrammarLexer.__ATN;
	}


	static DecisionsToDFA = ImportStatmentGrammarLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}