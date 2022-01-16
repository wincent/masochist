import {Queue} from '@masochist/common';
import {ACCEPT, NONE, START} from './NFA';
import clearFlag from './clearFlag';
import invariant from '../invariant';
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
      const targetsToLabels = labels?.[id];
      const on = keyToTransition(key);
      for (const target of targets) {
        const labels = targetsToLabels?.get(key)?.[target];
        if (labels) {
          state.edges.push({
            on,
            to: getState(target),
            labels,
          });
        } else {
          state.edges.push({
            on,
            to: getState(target),
          });
        }
      }
    }
  }

  if (startStates.size === 1) {
    return states[Array.from(startStates)[0]];
  } else {
    return {
      id: transitions.length,
      flags: START,
      // TODO see if i need to do anything will labels here; i don't think i do...
      edges: newStartStates.map((state) => {
        state.flags = clearFlag(state.flags, START);
        return {on: null, to: state};
      }),
    };
  }
}
