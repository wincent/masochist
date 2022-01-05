import {ACCEPT} from './NFA';
import testFlag from './testFlag';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

export default function removeDeadStates(nfa: NFA): NFA {
  const aliveStates: Set<number> = new Set();
  // Pass 1: Mark nodes that lead to ACCEPT states as alive.
  visitNFA(
    nfa,
    (node) => {
      // Pre-order callback: if we are an ACCEPT state, we must be alive.
      if (testFlag(node.flags, ACCEPT)) {
        aliveStates.add(node.id);
      }
    },
    (node) => {
      // Post-order callback: if any edge leads to an alive node, we must be
      // alive too.
      for (const edge of node.edges) {
        if (aliveStates.has(edge.to.id)) {
          aliveStates.add(node.id);
        }
      }
    },
  );

  // Pass 2: Remove edges to anything that isn't alive.
  visitNFA(nfa, (node) => {
    if (!node.edges.every(({to: {id}}) => aliveStates.has(id))) {
      node.edges.splice(
        0,
        node.edges.length,
        ...node.edges.filter(({to: {id}}) => aliveStates.has(id)),
      );
    }
  });

  return nfa;
}
