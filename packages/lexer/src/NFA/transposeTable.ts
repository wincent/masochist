import type {TransitionTable} from './TransitionTable';

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

  return table;
}
