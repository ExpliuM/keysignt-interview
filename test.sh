#!/bin/bash
for i in `seq 1 5`; do
	echo "\\------------------------ test"$i" ------------------------\\"
	./coding-challenge <tests/$i.in >tests/$i.out 2>&1
	diff -s tests/$i.res tests/$i.out
done
