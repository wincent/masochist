import {ACCEPT} from './NFA';
import {equalEdges} from './equalEdges';
import getStartStates from './getStartStates';
import setFlag from './setFlag';
import testFlag from './testFlag';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

/**
 * Mutates an NFA to remove all epsilon transitions.
 *
 * As a convenience, returns the mutated NFA.
 */
export default function removeEpsilons(nfa: NFA): NFA {
  const states = getStartStates(nfa);
  if (states.length !== 1) {
    throw new Error(
      `removeEpsilons(): Expected exactly 1 start state, got ${states.length}`,
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

        // If any target was an accept node, source must become an accept node.
        if (targets.some((target) => testFlag(target.flags, ACCEPT))) {
          source.flags = setFlag(source.flags, ACCEPT);
        }

        // If any target had labels, they must be copied to the source node.
        targets.forEach(({labels}) => {
          if (labels) {
            if (!source.labels) {
              source.labels = new Set();
            }
            for (const label of labels) {
              source.labels.add(label);
            }
          }
        });
      }
    }

    // (Highly inefficient) check for dupes. Will optimize this if it
    // becomes necessary to do so.
    for (let i = edges.length - 1; i >= 0; i--) {
      const a = edges[i];
      for (let j = edges.length - 1; j >= 0; j--) {
        if (i === j) {
          continue;
        }
        const b = edges[j];
        if (equalEdges(a, b)) {
          edges.splice(Math.max(i, j), 1);
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
  const seen = new Set<NFA>([nfa]);

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
