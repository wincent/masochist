import {RIGHTWARDS_ARROW} from './Constants';

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
      if (action) {
        return `r${i}: ${lhs} ${RIGHTWARDS_ARROW} ${rhs.join(' ')} {${action}}`;
      } else {
        return `r${i}: ${lhs} ${RIGHTWARDS_ARROW} ${rhs.join(' ')}`;
      }
    })
    .join('\n');

  return output + '\n';
}
