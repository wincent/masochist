#!/bin/bash

DIRECTORY=$(cd $(dirname "$BASH_SOURCE"); pwd)

cd "$DIRECTORY/.."

cp tsconfig-lint.json tsconfig-dynamic.json

trap "cp tsconfig-empty.json tsconfig-dynamic.json" EXIT

yarn tsc --build --force
