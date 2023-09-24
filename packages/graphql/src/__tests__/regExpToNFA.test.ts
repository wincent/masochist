// These tests used to live in `@masochist/lexer`, where `regExpToNFA` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {
  compileRegExp,
  regExpToNFA,
  toTransitionTable,
} from '@masochist/lexer/src/internal';
import {describe, expect, it} from 'bun:test';

import {NUMBER} from '../lexer';

describe('regExpToNFA()', () => {
  it('creates an NFA from NUMBER', () => {
    expect(toTransitionTable(regExpToNFA(compileRegExp(NUMBER)))).toEqual({
      acceptStates: new Set([42, 25, 37, 41]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:-', new Set([1])], ['Epsilon', new Set([9])]]),
        /* 1 */ new Map([['Epsilon', new Set([9])]]),
        /* 2 */ new Map([['Atom:0', new Set([3])]]),
        /* 3 */ new Map([['Epsilon', new Set([42])]]),
        /* 4 */ new Map([['Range:1-9', new Set([5])]]),
        /* 5 */ new Map([['Epsilon', new Set([8])]]),
        /* 6 */ new Map([['Range:0-9', new Set([7])]]),
        /* 7 */ new Map([['Epsilon', new Set([42, 8])]]),
        /* 8 */ new Map([['Epsilon', new Set([42, 6])]]),
        /* 9 */ new Map([['Epsilon', new Set([2, 4])]]),
        /* 10 */ new Map([['Atom:.', new Set([11])]]),
        /* 11 */ new Map([['Epsilon', new Set([12])]]),
        /* 12 */ new Map([['Range:0-9', new Set([13])]]),
        /* 13 */ new Map([['Epsilon', new Set([12, 18])]]),
        /* 14 */ new Map([['Atom:E', new Set([15])]]),
        /* 15 */ new Map([['Epsilon', new Set([23])]]),
        /* 16 */ new Map([['Atom:e', new Set([17])]]),
        /* 17 */ new Map([['Epsilon', new Set([23])]]),
        /* 18 */ new Map([['Epsilon', new Set([14, 16])]]),
        /* 19 */ new Map([['Atom:+', new Set([20])]]),
        /* 20 */ new Map([['Epsilon', new Set([24])]]),
        /* 21 */ new Map([['Atom:-', new Set([22])]]),
        /* 22 */ new Map([['Epsilon', new Set([24])]]),
        /* 23 */ new Map([['Epsilon', new Set([19, 21, 24])]]),
        /* 24 */ new Map([['Range:0-9', new Set([25])]]),
        /* 25 */ new Map([['Epsilon', new Set([24])]]),
        /* 26 */ new Map([['Atom:E', new Set([27])]]),
        /* 27 */ new Map([['Epsilon', new Set([35])]]),
        /* 28 */ new Map([['Atom:e', new Set([29])]]),
        /* 29 */ new Map([['Epsilon', new Set([35])]]),
        /* 30 */ new Map([['Epsilon', new Set([26, 28])]]),
        /* 31 */ new Map([['Atom:+', new Set([32])]]),
        /* 32 */ new Map([['Epsilon', new Set([36])]]),
        /* 33 */ new Map([['Atom:-', new Set([34])]]),
        /* 34 */ new Map([['Epsilon', new Set([36])]]),
        /* 35 */ new Map([['Epsilon', new Set([31, 33, 36])]]),
        /* 36 */ new Map([['Range:0-9', new Set([37])]]),
        /* 37 */ new Map([['Epsilon', new Set([36])]]),
        /* 38 */ new Map([['Atom:.', new Set([39])]]),
        /* 39 */ new Map([['Epsilon', new Set([40])]]),
        /* 40 */ new Map([['Range:0-9', new Set([41])]]),
        /* 41 */ new Map([['Epsilon', new Set([40])]]),
        /* 42 */ new Map([['Epsilon', new Set([10, 30, 38])]]),
      ],
    });
  });
});
