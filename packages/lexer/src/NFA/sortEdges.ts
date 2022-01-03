import transitionToKey from './transitionToKey';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

/**
 * Sorts the edges in the given NFA so that they are always ordered
 * consistently. This is just to make things look nicer in tests, or when humans
 * are otherwise inspecting the generated machine.
 *
 * Edges are mutated in-place; for convenience, the mutated NFA is returned.
 */
export default function sortEdges(nfa: NFA): NFA {
  visitNFA(nfa, ({edges}) => {
    // Not efficient because we're repeating the `transitionToKey()` call over
    // and over, but our NFAs are small, so this is fine.
    edges.sort((a, b) => {
      const aKey = transitionToKey(a.on);
      const bKey = transitionToKey(b.on);
      if (aKey < bKey) {
        return -1;
      } else if (aKey > bKey) {
        return 1;
      } else {
        return 0;
      }
    });
  });

  return nfa;
}
