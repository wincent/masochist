/**
 * Generates the lexer implementation and writes it to src/lex.ts.
 *
 * TODO: generate `src/lexDocument.ts` and `src/lexSchema.ts` instead.
 *
 * Run this with `make graphql` from the repository root.
 */

import {print} from '@masochist/codegen';
import {build} from '@masochist/lexer';
import Bun from 'bun';
import path from 'path';

import lexer from '../lexer';

import type {Stats} from '@masochist/lexer';

async function main() {
  const stats: Stats = {};
  const ast = await build(lexer, stats, {buildCommand: 'make graphql'});
  const source = print(ast);
  const file = path.join(import.meta.dir, '..', '..', 'src', 'lex.ts');

  // We write only if different, for the sake of Make...
  let current;
  try {
    current = await Bun.file(file).text();
  } catch {
    // Doesn't exist.
  }
  if (current !== source) {
    await Bun.write(file, source);
  }

  console.table(stats);
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
