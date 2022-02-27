import {RIGHTWARDS_ARROW} from './Grammar';

import type {ItemSet} from './Grammar';

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
      for (let i = 0; i <= rhs.length; i++) {
        if (i === dot) {
          output += ` ${MIDDLE_DOT}`;
        }
        if (i !== rhs.length) {
          output += ` ${rhs[i]}`;
        }
      }
      output += '\n';
    }

    if (i < itemSets.length - 1) {
      output += '\n';
    }
  }

  return output;
}
