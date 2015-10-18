/**
 * @flow
 */

const functions = new Map();

export default function memoize(fn) {
  return function() {
    if (!functions.has(fn)) {
      functions.set(fn, {});
    }
    const results = functions.get(fn);
    const key = JSON.stringify(Array.prototype.slice.call(arguments));
    if (!(key in results)) {
      results[key] = fn.apply(null, arguments);
    }
    return results[key];
  };
}
