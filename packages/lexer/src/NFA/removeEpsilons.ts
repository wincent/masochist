import {ACCEPT, START} from './NFA';
import getStartStates from './getStartStates';
import {equalEdges} from './regExpToNFA';
import setFlag from './setFlag';
import testFlag from './testFlag';
import visitNFA from './visitNFA';

import type {Flags, NFA} from './NFA';

/**
 * Mutates an NFA to remove all epsilon transitions.
 *
 * As a convenience, returns the mutated NFA.
 */
export default function removeEpsilons(nfa: NFA): NFA {
  const states = getStartStates(nfa);
  if (states.length !== 1) {
    throw new Error(
      `NFAToDFA(): Expected exactly 1 start state, got ${states.length}`,
    );
  }

  visitNFA(nfa, (source: NFA) => {
    const {edges} = source;

    // In reverse order, so we can mutate as we go.
    for (let i = edges.length - 1; i >= 0; i--) {
      const edge = edges[i];
      if (edge.on === null) {
        const targets = Array.from(epsilonClosure(edge.to));

        // Remove epsilon transition.
        edges.splice(i, 1);

        // Copy non-epsilon edges from targets to source.
        source.edges.push(
          ...targets.flatMap((target) => {
            return target.edges
              .filter((targetEdge) => targetEdge.on !== null)
              .map(({on, to}) => ({on, to}));
          }),
        );

        // (Highly inefficient) check for dupes. In practice we never see dupes
        // given the automata in this project; if we ever do, I'll add
        // de-duping logic.
        for (let i = 0; i < source.edges.length; i++) {
          for (let j = 0; j < source.edges.length; j++) {
            if (i !== j && equalEdges(source.edges[i], source.edges[j])) {
              throw new Error(
                'removeEpsilons(): Unexpected duplicate edges found',
              );
            }
          }
        }

        // If any target was an accept node, source must become an accept node.
        if (targets.some((target) => testFlag(target.flags, ACCEPT))) {
          source.flags = setFlag(source.flags, ACCEPT);
        }
      }
    }
  });
  return nfa;
}

/**
 * Returns the set of all nodes reachable via epsilon transitions from starting
 * node `nfa`.
 */
function epsilonClosure(nfa: NFA): Set<NFA> {
  const reachable = new Set<NFA>([nfa]);
  const seen = new Set<NFA>();

  function visit(node: NFA) {
    node.edges.forEach(({on, to}) => {
      const canVisit = !seen.has(to);
      seen.add(to);
      if (on === null) {
        reachable.add(to);
        if (canVisit) {
          visit(to);
        }
      }
    });
  }

  visit(nfa);

  return reachable;
}
