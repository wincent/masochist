import {Queue} from '@masochist/common';
import ConditionTree from '../ConditionTree';
import {Interval} from '../IntervalTree';
import {ACCEPT, NONE, START} from './NFA';
import getAcceptStates from './getAcceptStates';
import getStartStates from './getStartStates';
import setFlag from './setFlag';
import visitNFA from './visitNFA';

import type {CharCode} from '../ConditionTree';
import type {NFA, Transition} from './NFA';

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

  /** Map of DFA state ids to NFA states. */
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

    // Group edges by condition.
    const conditions = new ConditionTree();

    ids[next.id].forEach((nfa) => {
      nfa.edges.forEach((edge) => {
        if (edge.on === null) {
          throw new Error('NFAToDFA(): Unexpected epsilon transition');
        }
        conditions.add(edge);
      });
    });

    // The current DFA state is an aggregate of one or more NFA states. For that
    // aggregate, look at each batch of outgoing edges (grouped by equivalent
    // conditions), and create a new DFA state representing the aggregate of all
    // the target states.
    for (const [on, to] of conditions.entries()) {
      const targets = Array.from(to).sort(({id: a}, {id: b}) => a - b);
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

      // Because we've grouped edges by condition, they all have the same
      // `on`; we just have to transform it from an `Interval` back into a
      // `Transition` object.
      next.edges.push({
        on: intervalToTransition(on),
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

  // Merge adjacent conditions that lead to the same state; eg. if "Atom:a",
  // "Range:c-e", and "Atom:f" all lead to the same state, we consolidate those
  // edges into a single edge on "Range:a-f".
  visitNFA(dfa, null, (node) => {
    const edgesByTarget = new Map<NFA, ConditionTree>();
    for (const edge of node.edges) {
      if (!edgesByTarget.has(edge.to)) {
        edgesByTarget.set(edge.to, new ConditionTree());
      }
      const conditions = edgesByTarget.get(edge.to)!;
      conditions.add(edge);
    }

    node.edges = [];

    // Because of the way we constructed the DFA, we know that there will never
    // be any overlap. So, with a simple iteration we can scan through merging
    // adjacent conditions.
    for (const [to, conditions] of edgesByTarget.entries()) {
      const merged: Array<Interval<CharCode>> = [];
      for (const interval of conditions.keys()) {
        if (
          merged.length &&
          merged[merged.length - 1].high.value + 1 === interval.low.value
        ) {
          const previous = merged.pop()!;
          merged.push(new Interval(previous.low, interval.high));
        } else {
          merged.push(interval);
        }
      }
      for (const interval of merged) {
        node.edges.push({
          on: intervalToTransition(interval),
          to,
        });
      }
    }
  });

  return dfa;
}

function intervalToTransition(interval: Interval<CharCode>): Transition {
  const low = interval.low.value;
  const high = interval.high.value;
  if (low === high) {
    return {
      kind: 'Atom',
      value: String.fromCharCode(low),
    };
  } else if (low === 0x0000 && high === 0xffff) {
    return {
      kind: 'Anything',
    };
  } else {
    return {
      kind: 'Range',
      from: String.fromCharCode(low),
      to: String.fromCharCode(high),
    };
  }
}
