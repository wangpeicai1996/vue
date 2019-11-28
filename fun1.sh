#!/bin/bash
hello()
{
	echo "hello"
	return 10
}

function world()
{
	var=hello
	echo $var
}

world
