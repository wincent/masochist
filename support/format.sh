#!/bin/bash

DIRECTORY=$(cd $(dirname "$BASH_SOURCE"); pwd)

cd "$DIRECTORY/.."

if [ $# -eq 0 ]; then
  bun dprint fmt
else
  bun dprint fmt "$@"
fi