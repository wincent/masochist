export type Grammar = {
  tokens: Set<string>;
  rules: Array<Rule>;
};

type Rule = {
  lhs: string;
  rhs: Array<string>;
  action?: string;
};

export const RIGHTWARDS_ARROW = '\u2192';
