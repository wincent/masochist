/**
 * @flow strict
 */

import stableStringify from './stableStringify';

const functions = new Map();

function nullthrows(object) {
  if (object == null) {
    throw new Error('Unexpected null-ish object');
  }
  return object;
}

export default function memoize<TArgs: Iterable<mixed>, TReturn>(
  fn: (...TArgs) => TReturn,
): (...TArgs) => TReturn {
  return function(...args: TArgs): TReturn {
    if (!functions.has(fn)) {
      functions.set(fn, {});
    }
    const results: {[string]: TReturn} = nullthrows(functions.get(fn));
    const key = stableStringify(args) || 'undefined';
    if (!(key in results)) {
      results[key] = fn(...args);
    }
    return results[key];
  };
}
