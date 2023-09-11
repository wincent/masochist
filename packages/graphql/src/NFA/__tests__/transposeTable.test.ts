// These tests used to live in `@masochist/lexer`, where `transposeTable` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {
  NFAToDFA,
  compileRegExp,
  regExpToNFA,
  removeEpsilons,
  sortEdges,
  toTransitionTable,
  transposeTable,
} from '@masochist/lexer/src/internal';
import {describe, expect, it} from 'bun:test';

import {
  ESCAPED_CHARACTER,
  ESCAPED_UNICODE,
  EXPONENT_PART,
  FRACTIONAL_PART,
  INTEGER_PART,
  LINE_TERMINATOR,
  NAME,
  SOURCE_CHARACTER,
  WHITESPACE,
} from '../../lexer';

import type {TransitionTable} from '@masochist/lexer';

describe('transposeTable()', () => {
  it('transposes a transition table for ESCAPED_CHARACTER', () => {
    expect(transpose(ESCAPED_CHARACTER)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([2, 3, 4, 5, 6, 7, 8, 9]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:\\', new Set([0])]]),
        /* 2 */ new Map([['Atom:"', new Set([1])]]),
        /* 3 */ new Map([['Atom:/', new Set([1])]]),
        /* 4 */ new Map([['Atom:\\', new Set([1])]]),
        /* 5 */ new Map([['Atom:b', new Set([1])]]),
        /* 6 */ new Map([['Atom:f', new Set([1])]]),
        /* 7 */ new Map([['Atom:n', new Set([1])]]),
        /* 8 */ new Map([['Atom:r', new Set([1])]]),
        /* 9 */ new Map([['Atom:t', new Set([1])]]),
      ],
    });
  });

  it('transposes a DFA for ESCAPED_UNICODE', () => {
    expect(transpose(ESCAPED_UNICODE)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([12, 13, 14]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:\\', new Set([0])]]),
        /* 2 */ new Map([['Atom:u', new Set([1])]]),
        /* 3 */ new Map([['Range:0-9', new Set([2])]]),
        /* 4 */ new Map([['Range:A-F', new Set([2])]]),
        /* 5 */ new Map([['Range:a-f', new Set([2])]]),
        /* 6 */ new Map([['Range:0-9', new Set([3, 4, 5])]]),
        /* 7 */ new Map([['Range:A-F', new Set([3, 4, 5])]]),
        /* 8 */ new Map([['Range:a-f', new Set([3, 4, 5])]]),
        /* 9 */ new Map([['Range:0-9', new Set([6, 7, 8])]]),
        /* 10 */ new Map([['Range:A-F', new Set([6, 7, 8])]]),
        /* 11 */ new Map([['Range:a-f', new Set([6, 7, 8])]]),
        /* 12 */ new Map([['Range:0-9', new Set([9, 10, 11])]]),
        /* 13 */ new Map([['Range:A-F', new Set([9, 10, 11])]]),
        /* 14 */ new Map([['Range:a-f', new Set([9, 10, 11])]]),
      ],
    });
  });

  it('transposes a DFA for EXPONENT_PART', () => {
    expect(transpose(EXPONENT_PART)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([5]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:E', new Set([0])]]),
        /* 2 */ new Map([['Atom:e', new Set([0])]]),
        /* 3 */ new Map([['Atom:+', new Set([1, 2])]]),
        /* 4 */ new Map([['Atom:-', new Set([1, 2])]]),
        /* 5 */ new Map([['Range:0-9', new Set([1, 2, 3, 4, 5])]]),
      ],
    });
  });

  it('transposes a DFA for FRACTIONAL_PART', () => {
    expect(transpose(FRACTIONAL_PART)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([2]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:.', new Set([0])]]),
        /* 2 */ new Map([['Range:0-9', new Set([1, 2])]]),
      ],
    });
  });

  it('transposes a DFA for INTEGER_PART', () => {
    expect(transpose(INTEGER_PART)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([2, 3, 4]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:-', new Set([0])]]),
        /* 2 */ new Map([['Atom:0', new Set([0, 1])]]),
        /* 3 */ new Map([['Range:1-9', new Set([0, 1])]]),
        /* 4 */ new Map([['Range:0-9', new Set([3, 4])]]),
      ],
    });
  });

  it('transposes a DFA for LINE_TERMINATOR', () => {
    expect(transpose(LINE_TERMINATOR)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 2, 3]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:\n', new Set([0])]]),
        /* 2 */ new Map([['Atom:\r', new Set([0])]]),
        /* 3 */ new Map([['Atom:\n', new Set([2])]]),
      ],
    });
  });

  it('transposes a DFA for NAME', () => {
    expect(transpose(NAME)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 4, 5, 6, 7, 2, 3]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Range:A-Z', new Set([0])]]),
        /* 2 */ new Map([['Atom:_', new Set([0])]]),
        /* 3 */ new Map([['Range:a-z', new Set([0])]]),
        /* 4 */ new Map([['Range:0-9', new Set([1, 2, 3, 4, 5, 6, 7])]]),
        /* 5 */ new Map([['Range:A-Z', new Set([1, 2, 3, 4, 5, 6, 7])]]),
        /* 6 */ new Map([['Atom:_', new Set([1, 2, 3, 4, 5, 6, 7])]]),
        /* 7 */ new Map([['Range:a-z', new Set([1, 2, 3, 4, 5, 6, 7])]]),
      ],
    });
  });

  it('transposes a DFA for SOURCE_CHARACTER', () => {
    expect(transpose(SOURCE_CHARACTER)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 2, 3]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Range:\t-\n', new Set([0])]]),
        /* 2 */ new Map([['Atom:\r', new Set([0])]]),
        /* 3 */ new Map([['Range: -\uffff', new Set([0])]]),
      ],
    });
  });

  it('transposes a DFA for WHITESPACE', () => {
    expect(transpose(WHITESPACE)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 2]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:\t', new Set([0, 1, 2])]]),
        /* 2 */ new Map([['Atom: ', new Set([0, 1, 2])]]),
      ],
    });
  });
});

function transpose(regExp: RegExp): TransitionTable {
  return transposeTable(
    toTransitionTable(
      sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
    ),
  );
}
