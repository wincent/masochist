/**
 * Generates the parser implementation and writes it to src/parse.ts.
 *
 * Run this with `make parser`.
 */

import {print} from '@masochist/codegen';
import path from 'path';
import {promises as fs} from 'fs';

import {grammar as documentGrammar, table as documentTable} from '../document';
import build from '../build';
import {grammar as schemaGrammar, table as schemaTable} from '../schema';

import type {Stats} from '../build';

async function main() {
  for (const [grammar, table, filename] of [
    // TODO: later, rename parse.ts to parseDocument.ts
    [documentGrammar, documentTable, 'parse.ts'] as const,
    [schemaGrammar, schemaTable, 'parseSchema.ts'] as const,
  ]) {
    console.log(`Building: ${filename}`);

    const stats: Stats = {};
    const ast = build(grammar, table, stats);
    const source = print(ast);
    const file = path.join(__dirname, '..', '..', 'src', filename);

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
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
