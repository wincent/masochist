import {Queue} from '@masochist/common';
import {ACCEPT, NONE, START} from './NFA';
import getAcceptStates from './getAcceptStates';
import getStartStates from './getStartStates';
import setFlag from './setFlag';
import transitionToKey from './transitionToKey';
import visitNFA from './visitNFA';

import type {Edge, NFA} from './NFA';

/**
 * Turns an NFA into a DFA by removing all non-determinism.
 *
 * For simplicity, we assume the supplied `nfa` has already been passed through
 * `removeEpsilons()`.
 *
 * The returned DFA should be passed through `minimizeDFA()` before use.
 */
export default function NFAToDFA(nfa: NFA): NFA {
  const states = getStartStates(nfa);
  if (states.length !== 1) {
    throw new Error(
      `NFAToDFA(): Expected exactly 1 start state, got ${states.length}`,
    );
  }
  const start = states[0];

  let nextID = 0;

  // Map of DFA state ids to NFA states.
  const ids: {[key: number]: Array<NFA>} = {};

  // Map of NFA state ids (stringfied tuple; eg. "1.2.3") to DFA state.
  const reverseIds: {[key: string]: NFA} = {};

  const dfa: NFA = {
    id: nextID++,
    flags: START,
    edges: [],
  };
  ids[dfa.id] = [start];
  reverseIds[start.id] = dfa;

  const queue = new Queue<NFA>();
  queue.enqueue(dfa);

  while (!queue.isEmpty()) {
    // Grab next DFA state to process.
    const next = queue.dequeue()!;

    // Group edges by condition; using a string representation of each condition
    // seeing as JS doesn't have proper record types with referential
    // transparency.
    const conditions: {[key: string]: Array<Edge>} = {};

    ids[next.id].forEach((nfa) => {
      nfa.edges.forEach((edge) => {
        if (edge.on === null) {
          throw new Error('NFAToDFA(): Unexpected epsilon transition');
        }
        const key = transitionToKey(edge.on);
        if (!conditions[key]) {
          conditions[key] = [];
        }
        conditions[key].push(edge);
      });
    });

    for (const edges of Object.values(conditions)) {
      const targets = Array.from(new Set(edges.map(({to}) => to))).sort(
        ({id: a}, {id: b}) => a - b,
      );
      const key = targets.map(({id}) => id).join('.');
      if (!reverseIds[key]) {
        const labels = new Set(
          targets.flatMap(({labels}) => Array.from(labels ?? [])),
        );
        const node = labels.size
          ? {
              id: nextID++,
              flags: NONE,
              edges: [],
              labels,
            }
          : {
              id: nextID++,
              flags: NONE,
              edges: [],
            };
        ids[node.id] = targets;
        reverseIds[key] = node;
        queue.enqueue(node);
      }
      const node = reverseIds[key];

      // Because we've grouped edges by condition, they all have the same `on`,
      // and we can just grab the first.
      const {on} = edges[0];

      next.edges.push({
        on,
        to: node,
      });
    }
  }

  // Mark as ACCEPT any state in the DFA that corresponds to an ACCEPT state
  // from the original NFA.
  const accepted = new Set(getAcceptStates(nfa));
  visitNFA(dfa, (node) => {
    if (ids[node.id].some((nfa) => accepted.has(nfa))) {
      node.flags = setFlag(node.flags, ACCEPT);
    }
  });

  return dfa;
}
