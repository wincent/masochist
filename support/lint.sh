#!/bin/bash

DIRECTORY=$(cd $(dirname "$BASH_SOURCE"); pwd)

cd "$DIRECTORY/.."

cp tsconfig-lint.json tsconfig-dynamic.json

yarn tsc --build --force
STATUS=$?

cp tsconfig-empty.json tsconfig-dynamic.json

exit $STATUS
