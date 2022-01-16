import {ACCEPT, START} from './NFA';
import testFlag from './testFlag';
import transitionToKey from './transitionToKey';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';
import type {Labels, TransitionTable} from './TransitionTable';

type TransitionTableWithLabels = TransitionTable & {
  labels: Labels;
};

export default function toTransitionTable(nfa: NFA): TransitionTable {
  const table: TransitionTableWithLabels = {
    acceptStates: new Set(),
    startStates: new Set(),
    transitions: [],
    labels: [],
  };

  visitNFA(nfa, ({edges, flags, id}) => {
    if (table.transitions[id] === undefined) {
      table.transitions[id] = new Map();
    }
    const transitions = table.transitions[id];

    edges.forEach(({on, labels, to}) => {
      const key = transitionToKey(on);
      if (transitions.has(key)) {
        transitions.get(key)!.add(to.id);
      } else {
        transitions.set(key, new Set([to.id]));
      }

      // Copy edge labels, if present.
      if (labels) {
        if (!table.labels) {
          table.labels = [];
        }
        if (!table.labels[id]) {
          table.labels[id] = new Map();
        }
        if (!table.labels[id].has(key)) {
          table.labels[id].set(key, {});
        }
        if (!table.labels[id].get(key)![to.id]) {
          table.labels[id].get(key)![to.id] = new Set([...labels]);
        } else {
          const set = table.labels[id].get(key)![to.id];
          for (const label of labels) {
            set.add(label);
          }
        }
      }
    });

    if (testFlag(flags, ACCEPT)) {
      table.acceptStates.add(id);
    }

    if (testFlag(flags, START)) {
      table.startStates.add(id);
    }
  });

  if (table.labels.length) {
    return table;
  } else {
    // If there aren't any labels, remove the unused field to keep the data
    // structure clean/minimal.
    return {
      acceptStates: table.acceptStates,
      startStates: table.startStates,
      transitions: table.transitions,
    };
  }
}
