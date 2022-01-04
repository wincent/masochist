import type {TransitionTable} from './toTransitionTable';

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

  const transitions: Array<Map<string, number>> = [];

  table.transitions.forEach((transition, sourceId) => {
    // Make a reversed copy of each edge.
    for (const [key, targetId] of transition) {
      if (!transitions[targetId]) {
        transitions[targetId] = new Map();
      }
      transitions[targetId].set(key, sourceId);
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
