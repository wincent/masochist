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
  path.join(__dirname, '..', 'src', 'statement.grammar'),
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
