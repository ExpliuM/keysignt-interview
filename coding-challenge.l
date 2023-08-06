%{
/* Definitions section */
#include <stdio.h>
#include <string.h>

// #include "y.tab.h"

#define YYDEBUG 1
#define YYERROR_VERBOSE 1

int yylex(void);
void yyerror(const char *s);

void infoPrint(const char* info);
void printError(const char* baseMessage);
void printToken(const char* token);

char* string_buf;
size_t string_size;

%}

	/* Macros Section */
%option yylineno
%option noyywrap

	/* Match identifier - rules */
	/* Saved words */
import 				(import)
path					((\.{0,2}\/)([^\/; $]+))
	/* Other identifier */
semicolon 		(;)
crlf					("\r\n")
crlforlf			(\n|{crlf})
crlforlforcr	({crlforlf}|\r)
letter				([a-zA-Z])
whitespaces		([ \t]*)
anything			(.)

%%

	/* New line */
{crlforlforcr}*										{ yylineno++; }
{semicolon}												{ yylval = atoi(yytext); printToken("EOS"); return EOS; }
{path}														{ yylval = atoi(yytext); printToken("PATH"); return PATH; }
{import}													{ yylval = atoi(yytext); printToken("IMPORT"); return IMPORT; }
	/* Remove white spaces */
{whitespaces}											; { printToken("WHITESPACES"); }
<<EOF>>														; { printToken("EOF"); return 0; }
{anything}												; { printError("invalid character"); yyerror("invalid character"); }
%%

// void infoPrint(const char* info) {
// 	printf("%s\n", info);
// }

void printError(const char* baseMessage) {
	printf("yylineno=%d %s yytext=%s strlen(yytext)=%lu\n",yylineno ,baseMessage, yytext, strlen(yytext));
}

void printToken(const char* token) {
	printf("yylineno=%d token=%s yytext=%s strlen(yytext)=%lu\n", yylineno, token, yytext, strlen(yytext));
}