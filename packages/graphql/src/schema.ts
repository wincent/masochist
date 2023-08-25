/**
 * Language contructs (such as a grammar, parse table etc) for parsing GraphQL
 * schema definition documents containing type system definitions (schemas,
 * types, directives etc).
 *
 * See the separate "document.ts" for language constructs for parsing GraphQL
 * documents containing operation definitions (queries, mutations,
 * subscriptions, fragments).
 */

import {
  getAugmentedGrammar,
  getItemSets,
  getParseTable,
  itemSetsToTransitionTable,
  parseDSL,
} from '@masochist/parser';
import fs from 'fs';
import path from 'path';

const grammarDeclaration = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'schema.grammar'),
  'utf8',
);

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
