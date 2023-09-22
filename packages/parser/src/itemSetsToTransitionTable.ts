import getAugmentedGrammar from './getAugmentedGrammar';

import type {Grammar, ItemSet} from './types';

export type TransitionTable = Array<{[symbol: string]: number | undefined}>;

export default function itemSetsToTransitionTable(
  itemSets: Array<ItemSet>,
  grammar: Grammar,
): TransitionTable {
  const table: TransitionTable = [];
  const terminals = [...grammar.tokens.keys()].sort();
  const augmentedGrammar = getAugmentedGrammar(grammar);
  const nonTerminals = augmentedGrammar.rules.map(({lhs}) => lhs).sort();

  for (const itemSet of itemSets) {
    const entries: {[symbol: string]: number | undefined} = {};
    for (const symbol of [...nonTerminals, ...terminals]) {
      const target = itemSet.transitions[symbol];
      if (target !== undefined) {
        entries[symbol] = target;
      }
    }
    table.push(entries);
  }

  return table;
}
