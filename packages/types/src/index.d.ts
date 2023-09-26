// Shared type definitions extracted here in order to avoid circular
// dependencies.

// Parse table types.

export type Action =
  | {
    kind: 'Accept';
  }
  | {
    kind: 'Reduce';
    rule: number;
  }
  | {
    kind: 'Shift';
    state: number;
  };

export type Actions = {
  [terminal: string]: Action;
};

export type Gotos = {
  [nonTerminal: string]: number;
};
