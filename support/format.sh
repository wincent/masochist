#!/bin/bash

DIRECTORY=$(cd $(dirname "$BASH_SOURCE"); pwd)

cd "$DIRECTORY/.."

if [ $# -eq 0 ]; then
	bun prettier --log-level warn --write '**/*.{graphql,js,json,md,mjs,ts,yml}'
else
	bun prettier --log-level warn --write "$@"
fi
