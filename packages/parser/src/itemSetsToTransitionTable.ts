import getAugmentedGrammar from './getAugmentedGrammar';

import type {Grammar, ItemSet} from './types';

export type TransitionTable = Array<{[symbol: string]: number | undefined}>;

/**
 * The transition table is a key ingredient in the formation of the parse
 * table (see `getParseTable()`). Specifically:
 *
 * - Non-terminals in the transition table end up becoming "gotos" in the parse
 *   table.
 * - Terminals in the transition table become "shift" actions in the parse
 *   table.
 */
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
