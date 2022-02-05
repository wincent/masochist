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

async function main() {
  const ast = build(definition);
  const source = print(ast);

  // TODO: write only if different, for the sake of Make...
  await fs.writeFile(
    path.join(__dirname, '..', '..', 'src', 'lex.ts'),
    source,
    'utf8',
  );
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
