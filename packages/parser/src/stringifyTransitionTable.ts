import {RIGHTWARDS_ARROW} from './Constants';

import type {TransitionTable} from './itemSetsToTransitionTable';
import type {Grammar} from './types';

/**
 * Debugging helper.
 */
export default function stringifyTransitionTable(
  table: TransitionTable,
  grammar: Grammar,
): string {
  const lines: Array<string> = [];
  table.forEach((transitions, i) => {
    const terminals = [];
    const nonTerminals = [];

    for (const [symbol, target] of Object.entries(transitions)) {
      if (typeof target === 'number') {
        const line = `  ${symbol} ${RIGHTWARDS_ARROW} ${target}`;
        if (grammar.tokens.has(symbol)) {
          terminals.push(line);
        } else {
          nonTerminals.push(line);
        }
      }
    }
    const mappings = [...terminals.sort(), ...nonTerminals.sort()];
    if (mappings.length) {
      lines.push(`${i}:\n` + `${mappings.join('\n')}`);
    }
  });

  return lines.join('\n');
}
