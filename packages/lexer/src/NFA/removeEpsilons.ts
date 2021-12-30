import {ACCEPT, START} from './NFA';
import {equalEdges} from './regExpToNFA';
import testFlag from './testFlag';
import visitNFA from './visitNFA';

import type {Flags, NFA} from './NFA';

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
        const targets = Array.from(epsilonClosure(edge.to));

        // Remove epsilon transition.
        edges.splice(i, 1);

        // Copy non-epsilon edges from targets to source.
        source.edges.push(
          ...targets.flatMap((target) => {
            return target.edges
              .filter((targetEdge) => {
                if (targetEdge.on === null) {
                  return false;
                }

                // Remove dupes (highly inefficient).
                return !source.edges.some((sourceEdge) => {
                  // BUG:(?) we always return false
                  // which means some() always returns false
                  // which means filter() filters nothing
                  return equalEdges(sourceEdge, targetEdge);
                });
              })
              .map(({on, to}) => {
                return {on, to};
              });
          }),
        );

        // If any target was an accept node, source must become an accept node.
        if (targets.some((target) => testFlag(target.flags, ACCEPT))) {
          source.flags = setFlag(source.flags, ACCEPT);
        }

        // If source was a start node, targets must become a start node.
        if (testFlag(source.flags, START)) {
          targets.forEach((target) => {
            target.flags = setFlag(target.flags, START);
          });
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

function setFlag(flags: Flags, set: Flags): Flags {
  return (flags | set) as Flags;
}
