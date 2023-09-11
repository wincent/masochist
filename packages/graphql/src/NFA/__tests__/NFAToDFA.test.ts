// These tests used to live in `@masochist/lexer`, where `NFAToDFA` is defined,
// but they depend on artifacts produced by `@masochist/graphql`, so we've moved
// them in here to avoid a circular dependency.

import {
  NFAToDFA,
  compileRegExp,
  regExpToNFA,
  removeEpsilons,
  toTransitionTable,
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
  NUMBER,
  SOURCE_CHARACTER,
  WHITESPACE,
} from '../../lexer';

import type {TransitionTable} from '@masochist/lexer';

describe('NFAToDFA()', () => {
  it('builds a DFA for ESCAPED_CHARACTER', () => {
    expect(makeDFA(ESCAPED_CHARACTER)).toEqual({
      acceptStates: new Set([2, 3, 4, 5, 6, 7, 8, 9]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:\\', new Set([1])]]),
        /* 1 */ new Map([
          ['Atom:"', new Set([2])],
          ['Atom:/', new Set([3])],
          ['Atom:\\', new Set([4])],
          ['Atom:b', new Set([5])],
          ['Atom:f', new Set([6])],
          ['Atom:n', new Set([7])],
          ['Atom:r', new Set([8])],
          ['Atom:t', new Set([9])],
        ]),
        /* 2 */ new Map(),
        /* 3 */ new Map(),
        /* 4 */ new Map(),
        /* 5 */ new Map(),
        /* 6 */ new Map(),
        /* 7 */ new Map(),
        /* 8 */ new Map(),
        /* 9 */ new Map(),
      ],
    });
  });

  it('builds a DFA for ESCAPED_UNICODE', () => {
    expect(makeDFA(ESCAPED_UNICODE)).toEqual({
      acceptStates: new Set([12, 13, 14]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:\\', new Set([1])]]),
        /* 1 */ new Map([['Atom:u', new Set([2])]]),
        /* 2 */ new Map([
          ['Range:0-9', new Set([3])],
          ['Range:A-F', new Set([4])],
          ['Range:a-f', new Set([5])],
        ]),
        /* 3 */ new Map([
          ['Range:0-9', new Set([6])],
          ['Range:A-F', new Set([7])],
          ['Range:a-f', new Set([8])],
        ]),
        /* 4 */ new Map([
          ['Range:0-9', new Set([6])],
          ['Range:A-F', new Set([7])],
          ['Range:a-f', new Set([8])],
        ]),
        /* 5 */ new Map([
          ['Range:0-9', new Set([6])],
          ['Range:A-F', new Set([7])],
          ['Range:a-f', new Set([8])],
        ]),
        /* 6 */ new Map([
          ['Range:0-9', new Set([9])],
          ['Range:A-F', new Set([10])],
          ['Range:a-f', new Set([11])],
        ]),
        /* 7 */ new Map([
          ['Range:0-9', new Set([9])],
          ['Range:A-F', new Set([10])],
          ['Range:a-f', new Set([11])],
        ]),
        /* 8 */ new Map([
          ['Range:0-9', new Set([9])],
          ['Range:A-F', new Set([10])],
          ['Range:a-f', new Set([11])],
        ]),
        /* 9 */ new Map([
          ['Range:0-9', new Set([12])],
          ['Range:A-F', new Set([13])],
          ['Range:a-f', new Set([14])],
        ]),
        /* 10 */ new Map([
          ['Range:0-9', new Set([12])],
          ['Range:A-F', new Set([13])],
          ['Range:a-f', new Set([14])],
        ]),
        /* 11 */ new Map([
          ['Range:0-9', new Set([12])],
          ['Range:A-F', new Set([13])],
          ['Range:a-f', new Set([14])],
        ]),
        /* 12 */ new Map(),
        /* 13 */ new Map(),
        /* 14 */ new Map(),
      ],
    });
  });

  it('builds a DFA for EXPONENT_PART', () => {
    expect(makeDFA(EXPONENT_PART)).toEqual({
      acceptStates: new Set([5]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:E', new Set([1])],
          ['Atom:e', new Set([2])],
        ]),
        /* 1 */ new Map([
          ['Atom:+', new Set([3])],
          ['Atom:-', new Set([4])],
          ['Range:0-9', new Set([5])],
        ]),
        /* 2 */ new Map([
          ['Atom:+', new Set([3])],
          ['Atom:-', new Set([4])],
          ['Range:0-9', new Set([5])],
        ]),
        /* 3 */ new Map([['Range:0-9', new Set([5])]]),
        /* 4 */ new Map([['Range:0-9', new Set([5])]]),
        /* 5 */ new Map([['Range:0-9', new Set([5])]]),
      ],
    });
  });

  it('builds a DFA for FRACTIONAL_PART', () => {
    expect(makeDFA(FRACTIONAL_PART)).toEqual({
      acceptStates: new Set([2]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:.', new Set([1])]]),
        /* 1 */ new Map([['Range:0-9', new Set([2])]]),
        /* 2 */ new Map([['Range:0-9', new Set([2])]]),
      ],
    });
  });

  it('builds a DFA for INTEGER_PART', () => {
    expect(makeDFA(INTEGER_PART)).toEqual({
      acceptStates: new Set([2, 3, 4]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:-', new Set([1])],
          ['Atom:0', new Set([2])],
          ['Range:1-9', new Set([3])],
        ]),
        /* 1 */ new Map([
          ['Atom:0', new Set([2])],
          ['Range:1-9', new Set([3])],
        ]),
        /* 2 */ new Map(),
        /* 3 */ new Map([['Range:0-9', new Set([4])]]),
        /* 4 */ new Map([['Range:0-9', new Set([4])]]),
      ],
    });
  });

  it('builds a DFA for LINE_TERMINATOR', () => {
    expect(makeDFA(LINE_TERMINATOR)).toEqual({
      acceptStates: new Set([1, 2, 3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:\n', new Set([1])],
          ['Atom:\r', new Set([2])],
        ]),
        /* 1 */ new Map(),
        /* 2 */ new Map([['Atom:\n', new Set([3])]]),
        /* 3 */ new Map(),
      ],
    });
  });

  it('builds a DFA for NAME', () => {
    expect(makeDFA(NAME)).toEqual({
      acceptStates: new Set([1, 4, 5, 6, 7, 2, 3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([2])],
          ['Range:a-z', new Set([3])],
        ]),
        /* 1 */ new Map([
          ['Range:0-9', new Set([4])],
          ['Range:A-Z', new Set([5])],
          ['Atom:_', new Set([6])],
          ['Range:a-z', new Set([7])],
        ]),
        /* 2 */ new Map([
          ['Range:0-9', new Set([4])],
          ['Range:A-Z', new Set([5])],
          ['Atom:_', new Set([6])],
          ['Range:a-z', new Set([7])],
        ]),
        /* 3 */ new Map([
          ['Range:0-9', new Set([4])],
          ['Range:A-Z', new Set([5])],
          ['Atom:_', new Set([6])],
          ['Range:a-z', new Set([7])],
        ]),
        /* 4 */ new Map([
          ['Range:0-9', new Set([4])],
          ['Range:A-Z', new Set([5])],
          ['Atom:_', new Set([6])],
          ['Range:a-z', new Set([7])],
        ]),
        /* 5 */ new Map([
          ['Range:0-9', new Set([4])],
          ['Range:A-Z', new Set([5])],
          ['Atom:_', new Set([6])],
          ['Range:a-z', new Set([7])],
        ]),
        /* 6 */ new Map([
          ['Range:0-9', new Set([4])],
          ['Range:A-Z', new Set([5])],
          ['Atom:_', new Set([6])],
          ['Range:a-z', new Set([7])],
        ]),
        /* 7 */ new Map([
          ['Range:0-9', new Set([4])],
          ['Range:A-Z', new Set([5])],
          ['Atom:_', new Set([6])],
          ['Range:a-z', new Set([7])],
        ]),
      ],
    });
  });

  it('builds a DFA for NUMBER', () => {
    expect(makeDFA(NUMBER)).toEqual({
      acceptStates: new Set([2, 8, 16, 11, 3, 7]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:-', new Set([1])],
          ['Atom:0', new Set([2])],
          ['Range:1-9', new Set([3])],
        ]),
        /* 1 */ new Map([
          ['Atom:0', new Set([2])],
          ['Range:1-9', new Set([3])],
        ]),
        /* 2 */ new Map([
          ['Atom:.', new Set([4])],
          ['Atom:E', new Set([5])],
          ['Atom:e', new Set([6])],
        ]),
        /* 3 */ new Map([
          ['Atom:.', new Set([4])],
          ['Range:0-9', new Set([7])],
          ['Atom:E', new Set([5])],
          ['Atom:e', new Set([6])],
        ]),
        /* 4 */ new Map([['Range:0-9', new Set([8])]]),
        /* 5 */ new Map([
          ['Atom:+', new Set([9])],
          ['Atom:-', new Set([10])],
          ['Range:0-9', new Set([11])],
        ]),
        /* 6 */ new Map([
          ['Atom:+', new Set([9])],
          ['Atom:-', new Set([10])],
          ['Range:0-9', new Set([11])],
        ]),
        /* 7 */ new Map([
          ['Atom:.', new Set([4])],
          ['Range:0-9', new Set([7])],
          ['Atom:E', new Set([5])],
          ['Atom:e', new Set([6])],
        ]),
        /* 8 */ new Map([
          ['Range:0-9', new Set([8])],
          ['Atom:E', new Set([12])],
          ['Atom:e', new Set([13])],
        ]),
        /* 9 */ new Map([['Range:0-9', new Set([11])]]),
        /* 10 */ new Map([['Range:0-9', new Set([11])]]),
        /* 11 */ new Map([['Range:0-9', new Set([11])]]),
        /* 12 */ new Map([
          ['Atom:+', new Set([14])],
          ['Atom:-', new Set([15])],
          ['Range:0-9', new Set([16])],
        ]),
        /* 13 */ new Map([
          ['Atom:+', new Set([14])],
          ['Atom:-', new Set([15])],
          ['Range:0-9', new Set([16])],
        ]),
        /* 14 */ new Map([['Range:0-9', new Set([16])]]),
        /* 15 */ new Map([['Range:0-9', new Set([16])]]),
        /* 16 */ new Map([['Range:0-9', new Set([16])]]),
      ],
    });
  });

  it('builds a DFA for SOURCE_CHARACTER', () => {
    expect(makeDFA(SOURCE_CHARACTER)).toEqual({
      acceptStates: new Set([1, 2, 3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Range:\t-\n', new Set([1])],
          ['Atom:\r', new Set([2])],
          ['Range: -\uffff', new Set([3])],
        ]),
        /* 1 */ new Map(),
        /* 2 */ new Map(),
        /* 3 */ new Map(),
      ],
    });
  });

  it('builds a DFA for WHITESPACE', () => {
    expect(makeDFA(WHITESPACE)).toEqual({
      acceptStates: new Set([1, 2]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:\t', new Set([1])],
          ['Atom: ', new Set([2])],
        ]),
        /* 1 */ new Map([
          ['Atom:\t', new Set([1])],
          ['Atom: ', new Set([2])],
        ]),
        /* 2 */ new Map([
          ['Atom:\t', new Set([1])],
          ['Atom: ', new Set([2])],
        ]),
      ],
    });
  });
});

function makeDFA(regExp: RegExp): TransitionTable {
  return toTransitionTable(
    NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp)))),
  );
}
