import numericStringSort from './numericStringSort';

import type {SymbolSets} from './types';

/**
 * Debugging helper.
 */
export default function stringifySymbolSets(sets: SymbolSets): string {
  const width = Object.keys(sets).reduce((width, lhs) => {
    return Math.max(width, lhs.length);
  }, 0);
  const entries = Object.entries(sets).map(([lhs, symbols]) => {
    return `${lhs.padEnd(width, ' ')} : {${Array.from(symbols)
      .sort()
      .map((symbol) => String(symbol))
      .join(', ')}}`;
  });
  return numericStringSort(entries).join('\n');
}
