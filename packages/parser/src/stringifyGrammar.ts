import {EPSILON, RIGHTWARDS_ARROW} from './Constants';

import type {Grammar} from './types';

/**
 * Debugging helper.
 */
export default function stringifyGrammar(grammar: Grammar): string {
  let output =
    [...grammar.tokens]
      .sort()
      .map((token) => `%token ${token}`)
      .join('\n') + '\n\n';

  output += grammar.rules
    .map(({lhs, rhs, action}, i) => {
      const production = rhs.length ? rhs.join(' ') : EPSILON;
      const rule = `r${i}: ${lhs} ${RIGHTWARDS_ARROW} ${production}`;
      if (action) {
        return `${rule} ${action}`;
      } else {
        return rule;
      }
    })
    .join('\n');

  return output + '\n';
}
