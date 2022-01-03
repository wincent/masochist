import {ACCEPT, START} from './NFA';
import testFlag from './testFlag';
import transitionToKey from './transitionToKey';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

export type TransitionTable = {
  acceptStates: Set<number>;
  startStates: Set<number>;
  transitions: Array<Map<string, number>>;
};

export default function toTransitionTable(nfa: NFA): TransitionTable {
  const table: TransitionTable = {
    acceptStates: new Set(),
    startStates: new Set(),
    transitions: [],
  };

  visitNFA(nfa, ({edges, flags, id}) => {
    if (table.transitions[id] === undefined) {
      table.transitions[id] = new Map();
    }
    const transitions = table.transitions[id];

    edges.forEach(({on, to}) => {
      transitions.set(transitionToKey(on), to.id);
    });

    if (testFlag(flags, ACCEPT)) {
      table.acceptStates.add(id);
    }

    if (testFlag(flags, START)) {
      table.startStates.add(id);
    }
  });

  return table;
}
