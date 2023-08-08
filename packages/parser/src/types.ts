export type Grammar = {
  tokens: Set<string>;
  rules: Array<Rule>;
};

export type Rule = {
  lhs: string;
  rhs: Array<string>;

  /**
   * A semantic action (JS code) used to produce an AST node.
   *
   * Not to be confused with the accept/reduce/shift `Actions` in the
   * `ParseTable` type.
   */
  action?: string;
};

// TODO: Apart from the augmented rule, could avoid storing `lhs`/`rhs` and instead just store index of rule in original grammar.
export type Item = {
  lhs: string;
  rhs: Array<string>;
  dot: number;
};

export type ItemSet = {
  items: Array<Item>;
  transitions: {[symbol: string]: number};
};

/**
 * Used for FIRST and FOLLOW sets.
 */
export type SymbolSets = {
  [nonTerminal: string]: Set<string | null>;
};
