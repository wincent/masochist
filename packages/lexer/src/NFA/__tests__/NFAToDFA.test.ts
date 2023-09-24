import {describe, expect, it} from 'bun:test';

import compileRegExp from '../../compileRegExp';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../TransitionTable';

describe('NFAToDFA()', () => {
  it('creates the DFA from an atom', () => {
    expect(makeDFA(/a/)).toEqual({
      acceptStates: new Set([1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map(),
      ],
    });
  });

  it('creates a DFA created from an "anything" dot', () => {
    expect(makeDFA(/./)).toEqual({
      acceptStates: new Set([1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Anything', new Set([1])]]),
        /* 1 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a sequence', () => {
    expect(makeDFA(/foo/)).toEqual({
      acceptStates: new Set([3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:f', new Set([1])]]),
        /* 1 */ new Map([['Atom:o', new Set([2])]]),
        /* 2 */ new Map([['Atom:o', new Set([3])]]),
        /* 3 */ new Map(),
      ],
    });
  });

  it('creates a DFA from an alternate', () => {
    expect(makeDFA(/a|b|c/)).toEqual({
      acceptStates: new Set([1, 2, 3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])], ['Atom:b', new Set([2])], [
          'Atom:c',
          new Set([3]),
        ]]),
        /* 1 */ new Map(),
        /* 2 */ new Map(),
        /* 3 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a character class', () => {
    expect(makeDFA(/[a-z0]/)).toEqual({
      acceptStates: new Set([1, 2]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:0', new Set([1])], [
          'Range:a-z',
          new Set([2]),
        ]]),
        /* 1 */ new Map(),
        /* 2 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a "?" quantifier', () => {
    expect(makeDFA(/a?/)).toEqual({
      acceptStates: new Set([0, 1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a "*" quantifier', () => {
    expect(makeDFA(/a*/)).toEqual({
      acceptStates: new Set([0, 1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([1])]]),
      ],
    });
  });

  it('creates a DFA from a "+" quantifier', () => {
    expect(makeDFA(/a+/)).toEqual({
      acceptStates: new Set([1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([1])]]),
      ],
    });
  });

  it('creates a DFA from a "{3}" quantifier', () => {
    expect(makeDFA(/a{3}/)).toEqual({
      acceptStates: new Set([3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([2])]]),
        /* 2 */ new Map([['Atom:a', new Set([3])]]),
        /* 3 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a "{2,4}" quantifier', () => {
    expect(makeDFA(/a{2,4}/)).toEqual({
      acceptStates: new Set([2, 3, 4]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([2])]]),
        /* 2 */ new Map([['Atom:a', new Set([3])]]),
        /* 3 */ new Map([['Atom:a', new Set([4])]]),
        /* 4 */ new Map(),
      ],
    });
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/NFAToDFA.test.ts`.
});

function makeDFA(regExp: RegExp): TransitionTable {
  return toTransitionTable(
    NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp)))),
  );
}
