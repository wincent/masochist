/**
 * Generates the lexer implementation and writes it to src/lex.ts.
 *
 * Run this with `make lexer`.
 */

import {print} from '@masochist/codegen';
import path from 'path';
import {promises as fs} from 'fs';

import definition from '../definition';
import build from '../build';

import type {Stats} from '../build';

async function main() {
  const stats: Stats = {};
  const ast = build(definition, stats);
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
