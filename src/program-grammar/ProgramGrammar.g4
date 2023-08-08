grammar ProgramGrammar;

options {
    language=TypeScript;
}

ImportStatment
    : Import (WhiteSpace | NewLine)+ FullPath SemiColon
    ;

Import
    : 'import'
    ;
    
SemiColon                  
    : ';'
    ;

Code
    : ( Letters | Digits )+
    ;

FullPath 
    : Path FileName (FileSep FileExt)*
    ;

fragment Path 
    : ( DirName DirSep )*
    ;

fragment FileName
    : [a-zA-Z0-9_]+
    ;
    
fragment FileExt
    : [a-zA-Z0-9_]+
    ;
    
fragment FileSep 
    : '.'
    ;

fragment DirSep 
    : '/'
    ;

fragment DirName 
    : ( CurrentDir | ParentDir | ( Letters | Digits | Underscore )+ )
    ;

fragment ParentDir
    : '..'
    ;
    
fragment CurrentDir
    : '.'
    ;

fragment Underscore
    : '_'
    ;
    
fragment Digits
    : [0-9]+
    ;

fragment Letters
    : [a-zA-Z]+
    ;

WhiteSpace 
    : ( ' ' | '\t') -> channel(HIDDEN)
    ;
    
NewLine
    : ( '\r' '\n'? | '\n' ) -> channel(HIDDEN)
    ;

UnexpectedCharacter
    : .
    ;

