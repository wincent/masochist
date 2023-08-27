/**
 * Generates the parser implementations and writes them to
 * "src/parseExpression.ts" and "src/parseStatement.ts".
 *
 * Run this with `make typescript` from the repository root.
 */

import {print} from '@masochist/codegen';
import {build} from '@masochist/parser';
import path from 'path';
import {promises as fs} from 'fs';

import {
  grammar as expressionGrammar,
  table as expressionTable,
} from '../expression';
import {
  grammar as statementGrammar,
  table as statementTable,
} from '../statement';

import type {Stats} from '@masochist/parser';

async function main() {
  for (const [grammar, table, filename] of [
    [expressionGrammar, expressionTable, 'parseExpression.ts'] as const,
    [statementGrammar, statementTable, 'parseStatement.ts'] as const,
  ]) {
    console.log(`Building: ${filename}`);

    const stats: Stats = {};
    const ast = build(grammar, table, stats, {
      buildCommand: 'make graphql',
      name: filename.replace(/\.ts/, ''),
    });
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
