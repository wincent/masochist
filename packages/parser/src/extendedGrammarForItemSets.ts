import {invariant} from '@masochist/common';

import type {Grammar, ItemSet} from './types';

/**
 * Turns a rule like:
 *
 *     A -> B C
 *
 * into a rule with start and end states annotated:
 *
 *      A   ->   B     C
 *     0 4      0 2   2 7
 *
 * In this example, the rule is in item set 0, and transitions on A to 4, on B
 * to 2, and from C (in item set 2) to 7.
 */
export default function extendedGrammarForItemSets(
  itemSets: Array<ItemSet>,
  grammar: Grammar,
): Grammar {
  const rules = [];
  const tokens = new Set<string>();
  const originalTokens = grammar.tokens;
  for (let i = 0; i < itemSets.length; i++) {
    const itemSet = itemSets[i];
    for (const item of itemSet.items) {
      if (item.dot === 0) {
        const target = item.rhs.length ? itemSet.transitions[item.lhs] : i;
        const lhs = `${i}/${item.lhs}/${target ?? '$'}`;
        let current = i;
        const rhs = item.rhs.map((symbol) => {
          invariant(symbol !== null);
          const target = itemSets[current].transitions[symbol];
          const annotated = `${current}/${symbol}/${target}`;
          if (originalTokens.has(symbol)) {
            tokens.add(annotated);
          }
          current = target;
          return annotated;
        });

        rules.push({lhs, rhs});
      }
    }
  }

  return {
    rules,
    tokens,
  };
}
