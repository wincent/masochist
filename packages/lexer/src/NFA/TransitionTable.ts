export type TransitionTable = {
  acceptStates: Set<number>;
  startStates: Set<number>;
  transitions: Array<Map<string, Set<number>>>;
  // stateLabels?: Array<Set<string>>;
};
