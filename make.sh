#!/bin/bash
rm  y.tab.c y.tab.h
# lex coding-challenge.l
# yacc -d coding-challenge.y
# c99 lex.yy.c y.tab.c -ly -ll -o coding-challenge -D YYDEBUG -D YYERROR_VERBOSE
flex coding-challenge.l
bison -d coding-challenge.y
cpp lex.yy.c y.tab.c -ly -ll -o coding-challenge -D YYDEBUG -D YYERROR_VERBOSE
chmod +x coding-challenge