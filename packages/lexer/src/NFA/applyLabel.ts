import {ACCEPT} from './NFA';
import testFlag from './testFlag';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

/**
 * Applies a label to all edges that transition to accept states.
 *
 * Mutates the supplied `nfa`, and returns the mutated machine as a convenience.
 */
export default function applyLabel(label: string, nfa: NFA): NFA {
  return visitNFA(nfa, ({edges}) => {
    for (const edge of edges) {
      if (testFlag(edge.to.flags, ACCEPT)) {
        if (!edge.labels) {
          edge.labels = new Set();
        }
        edge.labels.add(label);
      }
    }
  });
}
