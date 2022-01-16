import type {Labels, TransitionTable} from './TransitionTable';

/**
 * Transposes the supplied transition table by inverting the direction of all
 * edges in the corresponding graph, and interchanging `ACCEPT` and `START`
 * states.
 *
 * Mutates the table in-place. As a convenience, returns the mutated table.
 */
export default function transposeTable(
  table: TransitionTable,
): TransitionTable {
  // Swap ACCEPT and START states.
  const acceptStates = new Set(table.startStates);
  table.startStates = new Set(table.acceptStates);
  table.acceptStates = acceptStates;

  const transitions: Array<Map<string, Set<number>>> = [];

  table.transitions.forEach((transition, sourceId) => {
    // Make a reversed copy of each edge.
    for (const [key, targetIds] of transition) {
      for (const targetId of targetIds) {
        if (!transitions[targetId]) {
          transitions[targetId] = new Map();
        }
        if (transitions[targetId].has(key)) {
          transitions[targetId].get(key)!.add(sourceId);
        } else {
          transitions[targetId].set(key, new Set([sourceId]));
        }
      }
    }

    // Clear old edges.
    table.transitions[sourceId] = new Map();
  });

  // Write out reversed edges.
  transitions.forEach((transition, i) => {
    table.transitions[i] = transition;
  });

  // Swap source and target on labels.
  if (table.labels) {
    const swappedLabels: Labels = [];
    table.labels.forEach((labels, source) => {
      if (labels) {
        for (const [on, targetsToLabels] of labels) {
          for (const entry of Object.entries(targetsToLabels)) {
            const target = parseInt(entry[0], 10);
            const set = entry[1];
            if (!swappedLabels[target]) {
              swappedLabels[target] = new Map();
            }
            if (!swappedLabels[target].get(on)) {
              swappedLabels[target].set(on, {});
            }
            if (!swappedLabels[target].get(on)![source]) {
              swappedLabels[target].get(on)![source] = new Set();
            }
            for (const label of set) {
              swappedLabels[target].get(on)![source].add(label);
            }
          }
        }
      }
    });
    table.labels.splice(0, table.labels.length, ...swappedLabels);
  }

  return table;
}
