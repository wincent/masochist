/**
 * @flow
 */

import stableStringify from './stableStringify';

const functions = new Map();

export default function memoize(fn: () => any): () => any {
  return async function() {
    if (!functions.has(fn)) {
      functions.set(fn, {});
    }
    const results: Object = (functions.get(fn): any);
    const key = stableStringify(Array.prototype.slice.call(arguments));
    if (!(key in results)) {
      results[key] = await fn.apply(null, arguments);
    }
    return results[key];
  };
}
