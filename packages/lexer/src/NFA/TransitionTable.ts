export type Labels = Array<Map<string, {[target: number]: Set<string>}>>;

export type TransitionTable = {
  acceptStates: Set<number>;
  startStates: Set<number>;
  transitions: Array<Map<string, Set<number>>>;
  // TODO: Labels here apply to edges, but in the "discriminated" version of the
  // machine we want them to apply to states, so I need to find a suitable
  // property to conveniently store that info... may have to rename all this and
  // split it into edgeLabels vs stateLabels
  labels?: Labels;
  // stateLabels?: Array<Set<string>>;
};
