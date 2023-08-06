%{
#include <stdio.h>
#define YYDEBUG 1
int yylex(void);
void yyerror(const char *s);
%}

%token IMPORT PATH EOS
%%
program:    statement										{ printf("RULE: program: statement\n"); }
statement:  importStatement							{ printf("RULE: statement: importStatement\n"); }
						| statement EOS							{ printf("RULE: statement: statement EOS\n"); }
						| EOS												{ printf("RULE: statement: EOS\n"); }
						| /* empty */ 							{ printf("RULE: statement: EMPTYSTATEMENT\n"); }
importStatement: IMPORT PATH {
	 printf("RULE: importStatement: IMPORT PATH, IMPORT=%s, PATH=%s \n",$1, $2); 
}
%%
extern FILE *yyin;


