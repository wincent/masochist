import {EPSILON, RIGHTWARDS_ARROW} from './Constants';
import numericStringSort from './numericStringSort';

import type {Grammar} from './types';

/**
 * Debugging helper.
 */
export default function stringifyGrammar(grammar: Grammar): string {
  let output =
    numericStringSort([...grammar.tokens])
      .map((token) => `%token ${token}`)
      .join('\n') + '\n\n';

  const [startRule, ...otherRules] = grammar.rules.map(
    ({lhs, rhs, action}, i) => {
      const production = rhs.length ? rhs.join(' ') : EPSILON;
      const rule = `r${i}: ${lhs} ${RIGHTWARDS_ARROW} ${production}`;
      if (action) {
        return `${rule} ${action}`;
      } else {
        return rule;
      }
    },
  );

  output += [startRule, ...numericStringSort(otherRules)].join('\n');

  return output + '\n';
}
