import type {Anything, Atom, Range} from '../RegExp/RegExpParser';

// Epsilon transitions are represented with `null`.
export type Transition = Anything | Atom | Range | null;

export type Edge = {
  on: Transition;
  to: NFA;
};

export type Flags =
  | typeof ACCEPT
  | typeof NONE
  | typeof START
  | typeof START_OR_ACCEPT;

export type NFA = {
  id: number;
  edges: Array<Edge>;
  flags: Flags;
};

export const NONE = 0;
export const START = 1;
export const ACCEPT = 2;

const START_OR_ACCEPT = START | ACCEPT;
