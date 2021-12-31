import {ACCEPT, NONE, START} from './NFA';
import acceptStates from './acceptStates';
import setFlag from './setFlag';
import startStates from './startStates';
import visitNFA from './visitNFA';

import type {Edge, NFA, Transition} from './NFA';

/**
 * Turns an NFA into a DFA by removing all non-determinism.
 *
 * For simplicity, we assume the supplied `nfa` has already been passed through
 * `removeEpsilons()`.
 *
 * The returned DFA should be passed through `minimizeDFA()` before use.
 */
export default function NFAToDFA(nfa: NFA): NFA {
  const states = startStates(nfa);
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

  // TODO: if this works, use real queue (which I already have elsewhere in this
  // project, on the "main" branch)
  const queue = [dfa];

  while (queue.length) {
    // Grab next DFA state to process.
    const next = queue.shift()!;

    // Group edges by condition; using a string representation of each condition
    // seeing as JS doesn't have proper record types with referential
    // transparency.
    const conditions: {[key: string]: Array<Edge>} = {};

    ids[next.id].forEach((nfa) => {
      nfa.edges.forEach((edge) => {
        const key = transitionToString(edge.on);
        if (!conditions[key]) {
          conditions[key] = [];
        }
        conditions[key].push(edge);
      });
    });

    for (const edges of Object.values(conditions)) {
      const targets = Array.from(
        new Set(
          edges.map((edge) => {
            return edge.to;
          }),
        ),
      ).sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          throw new Error('NFAToDFA(): Duplicate id');
        }
      });
      const key = targets.map((target) => target.id).join('.');
      if (!reverseIds[key]) {
        const node = {
          id: nextID++,
          flags: NONE,
          edges: [],
        };
        ids[node.id] = targets;
        reverseIds[key] = node;
        queue.push(node);
      }
      const node = reverseIds[key];
      next.edges.push({
        on: edges[0].on,
        to: node,
      });
    }
  }

  // Mark as ACCEPT any state in the DFA that corresponds to an ACCEPT state
  // from the original NFA.
  const accepted = new Set(acceptStates(nfa));
  visitNFA(dfa, (node) => {
    if (ids[node.id].some((nfa) => accepted.has(nfa))) {
      node.flags = setFlag(node.flags, ACCEPT);
    }
  });

  return dfa;
}

function transitionToString(transition: Transition): string {
  if (transition === null) {
    throw new Error('transitionToString(): Unexpected epsilon transition');
  } else if (transition.kind === 'Anything') {
    return 'Anything';
  } else if (transition.kind === 'Atom') {
    return `Atom:${transition.value}`;
  } else {
    return `Range:${transition.from}-${transition.to}`;
  }
}
