import getAugmentedGrammar from './getAugmentedGrammar';

import type {ItemSet} from '.';
import type {Grammar} from './Grammar';

export type TransitionTable = Array<{[symbol: string]: number | undefined}>;

export default function itemSetsToTransitionTable(
  itemSets: Array<ItemSet>,
  grammar: Grammar,
): TransitionTable {
  const table: TransitionTable = [];
  const terminals = [...grammar.tokens].sort();
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
