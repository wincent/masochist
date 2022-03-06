import {RIGHTWARDS_ARROW} from './Constants';

import type {TransitionTable} from './itemSetsToTransitionTable';

/**
 * Debugging helper.
 */
export default function stringifyTransitionTable(
  table: TransitionTable,
): string {
  const lines: Array<string> = [];
  table.forEach((transitions, i) => {
    const mappings = [];
    for (const [symbol, target] of Object.entries(transitions)) {
      if (typeof target === 'number') {
        mappings.push(`  ${symbol} ${RIGHTWARDS_ARROW} ${target}`);
      }
    }
    if (mappings.length) {
      lines.push(`${i}:\n` + `${mappings.sort().join('\n')}`);
    }
  });

  return lines.join('\n');
}
