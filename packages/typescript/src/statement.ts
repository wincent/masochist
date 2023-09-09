import {
  getAugmentedGrammar,
  getItemSets,
  getParseTable,
  itemSetsToTransitionTable,
  parseDSL,
} from '@masochist/parser';
import Bun from 'bun';
import path from 'path';

const grammarDeclaration = await Bun.file(
  path.join(import.meta.dir, '..', 'src', 'statement.grammar'),
).text();

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
