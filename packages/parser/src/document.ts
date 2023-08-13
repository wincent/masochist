/**
 * Language contructs (such as a grammar, parse table etc) for parsing GraphQL
 * documents containing operation definitions (queries, mutations,
 * subscriptions, fragments).
 *
 * See the separate "schema.ts" for language constructs for parsing schema
 * definitions (schemas, types, directives etc).
 */

import fs from 'fs';
import path from 'path';

import getAugmentedGrammar from './getAugmentedGrammar';
import getItemSets from './getItemSets';
import getParseTable from './getParseTable';
import itemSetsToTransitionTable from './itemSetsToTransitionTable';
import parseDSL from './parseDSL';

const grammarDeclaration = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'document.grammar'),
  'utf8',
);

// Numerous tests rely on the unaugmented grammar.
export const unaugmentedGrammar = parseDSL(grammarDeclaration);

export const grammar = getAugmentedGrammar(unaugmentedGrammar);
export const itemSets = getItemSets(unaugmentedGrammar);
export const transitionTable = itemSetsToTransitionTable(
  itemSets,
  unaugmentedGrammar,
);
export const table = getParseTable(
  itemSets,
  transitionTable,
  unaugmentedGrammar,
);