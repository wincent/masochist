/**
 * Generates the lexer implementation and writes it to src/lex.ts.
 *
 * Run this with `make graphql` from the repository root.
 */

import {print} from '@masochist/codegen';
import {build} from '@masochist/lexer';
import path from 'path';
import {promises as fs} from 'fs';

import lexer from '../lexer';

import type {Stats} from '@masochist/lexer';

async function main() {
  const stats: Stats = {};
  const ast = build(lexer, stats, {buildCommand: 'make graphql'});
  const source = print(ast);
  const file = path.join(__dirname, '..', '..', 'src', 'lex.ts');

  // We write only if different, for the sake of Make...
  let current;
  try {
    current = await fs.readFile(file, 'utf8');
  } catch {
    // Doesn't exist.
  }
  if (current !== source) {
    await fs.writeFile(file, source, 'utf8');
  }

  console.table(stats);
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
