import {EPSILON, RIGHTWARDS_ARROW} from './Constants';

import type {ItemSet} from './types';

const MIDDLE_DOT = '\xb7';

/**
 * Debugging helper.
 */
export default function stringifyItemSets(itemSets: Array<ItemSet>): string {
  let output = '';

  for (let i = 0; i < itemSets.length; i++) {
    const itemSet = itemSets[i];
    output += `I${i}:\n`;

    for (const {lhs, rhs, dot} of itemSet.items) {
      output += `  ${lhs}`;
      output += ` ${RIGHTWARDS_ARROW}`;
      if (rhs.length) {
        for (let i = 0; i <= rhs.length; i++) {
          if (i === dot) {
            output += ` ${MIDDLE_DOT}`;
          }
          if (rhs[i]) {
            output += ` ${rhs[i]}`;
          }
        }
      } else {
        // We display an EPSILON here for readablity only; there is no actual
        // symbol in the grammar.
        output += ` ${EPSILON} ${MIDDLE_DOT}`;
      }
      output += '\n';
    }

    if (i < itemSets.length - 1) {
      output += '\n';
    }
  }

  return output;
}
