/**
 * Regex that matches the zero-width string at the boundary between digit and
 * non-digit characters; eg.
 *
 *     f o o 1 2 3 b a r 4 5 6
 *          ^     ^     ^
 */
const BOUNDARY = /(?<=\D)(?=\d)|(?<=\d)(?=\D)/g;

const COLLATOR = new Intl.Collator([], {numeric: true});

/**
 * For use in our debugging functions (it's slow!). Sorts string in a
 * number-aware way, for readability:
 *
 *    r0: ...
 *    r9: ...
 *    r10: ...
 *
 * Note: I should just replace this whole thing with the following, and I will
 * do that in another commit... It's just that I tried it this way first, it
 * didn't seem to work because I was testing it wrong, and then I rolled my own.
 * Sigh.
 *
 *    const collator = new Intl.Collator([], {numeric: true});
 *    strings.sort((a, b) => collator.compare(a, b));
 *
 * Note: Just like `Array.prototype.sort`, this function mutates the supplied
 * array in-place, but also returns it as a convenience.
 */
export default function numericStringSort(strings: Array<string>): Array<string> {
  return strings.sort((a, b) => {
    const aSplit = a.split(BOUNDARY);
    const bSplit = b.split(BOUNDARY);

    for (let i = 0, max = Math.max(aSplit.length, bSplit.length); i < max; i++) {
      if (i >= aSplit.length) {
        // Strings were equal up to this point, but `b` is longer than `a`.
        return 1;
      }
      if (i >= bSplit.length) {
        // Strings were equal up to this point, but `a` is longer than `b`.
        return -1;
      }

      const comparison = COLLATOR.compare(aSplit[i], bSplit[i]);
      if (comparison) {
        return comparison;
      }
    }
    return 0;
  });
}
