/**
 * Generates the parser implementations and writes them to
 * "src/parseDocument.ts" and "src/parseSchema.ts".
 *
 * Run this with `make graphql` from the repository root.
 */

import {print} from '@masochist/codegen';
import {build} from '@masochist/parser';
import Bun from 'bun';
import path from 'path';

import {grammar as documentGrammar, table as documentTable} from '../document';
import {grammar as schemaGrammar, table as schemaTable} from '../schema';

import type {Stats} from '@masochist/parser';

async function main() {
  for (
    const [grammar, table, filename] of [
      [documentGrammar, documentTable, 'parseDocument.ts'] as const,
      [schemaGrammar, schemaTable, 'parseSchema.ts'] as const,
    ]
  ) {
    console.log(`Building: ${filename}`);

    const stats: Stats = {};
    const ast = build(grammar, table, stats, {
      buildCommand: 'make graphql',
      name: filename.replace('.ts', ''),
    });
    const source = print(ast);
    const file = path.join(import.meta.dir, '..', '..', 'src', filename);

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
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
