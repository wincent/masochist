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
  path.join(import.meta.dir, '..', 'src', 'expression.grammar'),
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
