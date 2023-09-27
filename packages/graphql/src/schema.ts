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
  validateGrammar,
} from '@masochist/parser';
import Bun from 'bun';
import path from 'path';

const grammarDeclaration = await Bun.file(
  path.join(import.meta.dir, '..', 'src', 'schema.grammar'),
).text();

export const unaugmentedGrammar = validateGrammar(parseDSL(grammarDeclaration));
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
