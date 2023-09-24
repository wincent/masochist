import visitNFA from './visitNFA';

import type {NFA} from './NFA';

/**
 * Sorts the edges in the given NFA so that they are always ordered
 * consistently, in char-code order. This is partly to make things look nicer
 * and more consistent in tests, or when humans are otherwise inspecting the
 * generated machine, but also because we want our generated lexers to match
 * what you would write by hand (and if you were comparing numerical ranges by
 * hand, you would probably write the comparisons in ascending order).
 *
 * Edges are mutated in-place; for convenience, the mutated NFA is returned.
 */
export default function sortEdges(nfa: NFA): NFA {
  visitNFA(nfa, null, ({edges}) => {
    edges.sort((a, b) => {
      // Epsilon transitions go first.
      if (a.on === null && b.on === null) {
        return a.to.id - b.to.id;
      } else if (a.on === null) {
        return -1;
      } else if (b.on === null) {
        return 1;
      }

      // Then sort by low char code.
      const aLow = a.on.kind === 'Anything'
        ? 0x0000
        : a.on.kind === 'Atom'
        ? a.on.value
        : a.on.from;
      const bLow = b.on.kind === 'Anything'
        ? 0x0000
        : b.on.kind === 'Atom'
        ? b.on.value
        : b.on.from;
      if (aLow < bLow) {
        return -1;
      } else if (aLow > bLow) {
        return 1;
      }

      // Then sort by high char code.
      const aHigh = a.on.kind === 'Anything'
        ? 0xffff
        : a.on.kind === 'Atom'
        ? a.on.value
        : a.on.to;
      const bHigh = b.on.kind === 'Anything'
        ? 0xffff
        : b.on.kind === 'Atom'
        ? b.on.value
        : b.on.to;
      if (aHigh < bHigh) {
        return -1;
      } else if (aHigh > bHigh) {
        return 1;
      }

      // Last resort: tie-break by target state id.
      return a.to.id - b.to.id;
    });
  });

  return nfa;
}
