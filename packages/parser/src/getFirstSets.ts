import groupRulesByLHS from './groupRulesByLHS';

import type {Grammar} from './types';

type FirstSets = {
  [nonTerminal: string]: Set<string>;
};

/**
 * `first['A']` is the set of terminals which can appear as the first element of
 * any rule (or chain of rules) matching non-terminal `A`.
 */
export default function getFirstSets(grammar: Grammar): FirstSets {
  const tokens = grammar.tokens;
  const rules = groupRulesByLHS(grammar);

  const sets: FirstSets = {};

  function first(symbol: string): Set<string> {
    if (tokens.has(symbol)) {
      return new Set([symbol]);
    }

    if (!sets[symbol]) {
      const set = (sets[symbol] = new Set());
      for (const [rhs] of rules[symbol]) {
        for (const symbol of first(rhs)) {
          set.add(symbol);
        }
      }
    }

    return sets[symbol];
  }

  const seen = new Set<string>();

  function visit(lhs: string) {
    first(lhs);
    seen.add(lhs);

    for (const rhs of rules[lhs]) {
      for (const symbol of rhs) {
        if (!seen.has(symbol) && !tokens.has(symbol)) {
          first(symbol);
          visit(symbol);
        }
      }
    }
  }

  const startSymbol = Object.keys(rules)[0];

  visit(startSymbol);

  return sets;
}
