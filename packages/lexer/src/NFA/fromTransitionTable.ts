import {Queue} from '@masochist/common';
import {ACCEPT, NONE, START} from './NFA';
import invariant from '../invariant';
import keyToTransition from './keyToTransition';

import type {NFA} from './NFA';
import type {TransitionTable} from './toTransitionTable';

export default function fromTransitionTable({
  acceptStates,
  startStates,
  transitions,
}: TransitionTable): NFA {
  const states: Array<NFA> = [];
  const queue = new Queue<number>(startStates);

  function getState(id: number) {
    const flags =
      (startStates.has(id) ? START : NONE) |
      (acceptStates.has(id) ? ACCEPT : NONE);
    if (!states[id]) {
      states[id] = {
        id,
        flags,
        edges: [],
      };
      queue.enqueue(id);
    }
    return states[id];
  }

  for (const id of queue) {
    invariant(id != null);
    const state = getState(id);

    if (state.edges.length) {
      // We've already been here.
      continue;
    }

    for (const [key, target] of transitions[id]) {
      const on = keyToTransition(key);
      state.edges.push({
        on,
        to: getState(target),
      });
    }
  }

  // Return lowest-id start state.
  return states[Array.from(startStates).sort()[0]];
}
