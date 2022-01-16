export type TransitionTable = {
  acceptStates: Set<number>;
  startStates: Set<number>;
  transitions: Array<Map<string, Set<number>>>;
  labels?: Array<Map<string, {[target: number]: Set<string>}>>;
};
