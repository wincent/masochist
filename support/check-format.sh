#!/bin/bash

DIRECTORY=$(cd $(dirname "$BASH_SOURCE"); pwd)

cd "$DIRECTORY/.."

if [ $# -eq 0 ]; then
	bun prettier --log-level warn --check '**/*.{graphql,json,md,ts,yml}'
else
	bun prettier --log-level warn --check "$@"
fi
