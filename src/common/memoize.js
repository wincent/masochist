import nullthrows from '@wincent/nullthrows';
import stableStringify from '@wincent/stable-stringify';

const functions = new Map();

export default function memoize(fn) {
  return function (...args) {
    if (!functions.has(fn)) {
      functions.set(fn, {});
    }
    const results = nullthrows(functions.get(fn));
    const key = stableStringify(args) || 'undefined';
    if (!(key in results)) {
      results[key] = fn(...args);
    }
    return results[key];
  };
}
