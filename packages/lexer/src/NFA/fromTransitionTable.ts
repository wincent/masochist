import {Queue, invariant} from '@masochist/common';

import {ACCEPT, NONE, START} from './NFA';
import clearFlag from './clearFlag';
import keyToTransition from './keyToTransition';

import type {NFA} from './NFA';
import type {TransitionTable} from './TransitionTable';

export default function fromTransitionTable({
  acceptStates,
  startStates,
  transitions,
  labels,
}: TransitionTable): NFA {
  const states: Array<NFA> = [];
  const queue = new Queue<number>(startStates);

  const newStartStates: Array<NFA> = [];

  function getState(id: number) {
    const flags = (startStates.has(id) ? START : NONE) |
      (acceptStates.has(id) ? ACCEPT : NONE);
    if (!states[id]) {
      if (labels?.[id]) {
        states[id] = {
          id,
          flags,
          edges: [],
          labels: new Set(labels?.[id]),
        };
      } else {
        states[id] = {
          id,
          flags,
          edges: [],
        };
      }
      queue.enqueue(id);
      if (startStates.has(id)) {
        newStartStates.push(states[id]);
      }
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

    for (const [key, targets] of transitions[id]) {
      const on = keyToTransition(key);
      for (const target of targets) {
        state.edges.push({
          on,
          to: getState(target),
        });
      }
    }
  }

  if (startStates.size === 1) {
    return states[Array.from(startStates)[0]];
  } else {
    return {
      id: transitions.length,
      flags: START,
      edges: newStartStates.map((state) => {
        state.flags = clearFlag(state.flags, START);
        return {on: null, to: state};
      }),
    };
  }
}
