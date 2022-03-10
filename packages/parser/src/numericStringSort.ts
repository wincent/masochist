const COLLATOR = new Intl.Collator([], {numeric: true});

/**
 * For use in our debugging functions (it's slow!). Sorts string in a
 * number-aware way, for readability:
 *
 *    r0: ...
 *    r9: ...
 *    r10: ...
 *
 * Note: Just like `Array.prototype.sort`, this function mutates the supplied
 * array in-place, but also returns it as a convenience.
 */
export default function numericStringSort(strings: Array<string>): Array<string> {
  return strings.sort((a, b) => COLLATOR.compare(a, b));
}
