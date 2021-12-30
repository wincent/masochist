import {ACCEPT, START, testFlag} from './regExpToNFA';
import visitNFA from './visitNFA';

import type {Flags, NFA} from './regExpToNFA';

/**
 * Mutates an NFA to remove all epsilon transitions.
 *
 * As a convenience, returns the mutated NFA.
 */
export default function removeEpsilons(nfa: NFA): NFA {
  visitNFA(nfa, (source: NFA) => {
    const {edges} = source;

    // In reverse order, so we can mutate as we go.
    for (let i = edges.length - 1; i >= 0; i--) {
      const edge = edges[i];
      if (edge.on === null) {
        const target = edge.to;

        // Remove epsilon transition.
        edges.splice(i, 1);

        // Copy edges from target to source.
        source.edges.push(
          ...target.edges.map(({on, to}) => {
            return {on, to};
          }),
        );

        // If target was an accept node, source must become an accept node.
        if (testFlag(target.flags, ACCEPT)) {
          source.flags = setFlag(source.flags, ACCEPT);
        }

        // If source was a start node, target must become a start node.
        if (testFlag(source.flags, START)) {
          target.flags = setFlag(target.flags, START);
        }
      }
    }
  });
  return nfa;
}

function setFlag(flags: Flags, set: Flags): Flags {
  return (flags | set) as Flags;
}
