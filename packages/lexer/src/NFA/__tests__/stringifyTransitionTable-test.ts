import {dedent} from '@masochist/common';

import compileRegExp from '../../compileRegExp';
import {
  AMPERSAND,
  AT,
  BANG,
  BAR,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PAREN,
  COLON,
  DOLLAR,
  ELLIPSIS,
  EQUALS,
  INTEGER_PART,
  NAME,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
} from '../../lexer';
import union from '../../union';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import stringifyTransitionTable from '../stringifyTransitionTable';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../TransitionTable';

describe('stringifyTransitionTable()', () => {
  it('stringifies a simple transition table', () => {
    const table = getTable(INTEGER_PART);

    expect(stringifyTransitionTable(table)).toEqual(dedent`{
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
    }`);
  });

  it('stringifies a transition table with labels', () => {
    const table = union(
      // Punctuators.
      {
        AMPERSAND,
        AT,
        BANG,
        BAR,
        CLOSING_BRACE,
        CLOSING_BRACKET,
        CLOSING_PAREN,
        COLON,
        DOLLAR,
        ELLIPSIS,
        EQUALS,
        OPENING_BRACE,
        OPENING_BRACKET,
        OPENING_PAREN,

        // TODO: strings and numbers too

        // Other Lexical tokens.
        NAME,
      },
    );

    expect(stringifyTransitionTable(table)).toEqual(dedent`{
      acceptStates: new Set([1, 2, 3, 4, 5, 17, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:!', new Set([1])],
          ['Atom:$', new Set([2])],
          ['Atom:&', new Set([3])],
          ['Atom:(', new Set([4])],
          ['Atom:)', new Set([5])],
          ['Atom:.', new Set([6])],
          ['Atom::', new Set([7])],
          ['Atom:=', new Set([8])],
          ['Atom:@', new Set([9])],
          ['Range:A-Z', new Set([10])],
          ['Atom:[', new Set([11])],
          ['Atom:]', new Set([12])],
          ['Atom:_', new Set([10])],
          ['Range:a-z', new Set([10])],
          ['Atom:{', new Set([13])],
          ['Atom:|', new Set([14])],
          ['Atom:}', new Set([15])],
        ]),
        /* 1 */ new Map(),
        /* 2 */ new Map(),
        /* 3 */ new Map(),
        /* 4 */ new Map(),
        /* 5 */ new Map(),
        /* 6 */ new Map([['Atom:.', new Set([16])]]),
        /* 7 */ new Map(),
        /* 8 */ new Map(),
        /* 9 */ new Map(),
        /* 10 */ new Map([
          ['Range:0-9', new Set([10])],
          ['Range:A-Z', new Set([10])],
          ['Atom:_', new Set([10])],
          ['Range:a-z', new Set([10])],
        ]),
        /* 11 */ new Map(),
        /* 12 */ new Map(),
        /* 13 */ new Map(),
        /* 14 */ new Map(),
        /* 15 */ new Map(),
        /* 16 */ new Map([['Atom:.', new Set([17])]]),
        /* 17 */ new Map(),
      ],
      labels: [
        /* 0 */ undefined,
        /* 1 */ new Set(['BANG']),
        /* 2 */ new Set(['DOLLAR']),
        /* 3 */ new Set(['AMPERSAND']),
        /* 4 */ new Set(['OPENING_PAREN']),
        /* 5 */ new Set(['CLOSING_PAREN']),
        /* 6 */ undefined,
        /* 7 */ new Set(['COLON']),
        /* 8 */ new Set(['EQUALS']),
        /* 9 */ new Set(['AT']),
        /* 10 */ new Set(['NAME']),
        /* 11 */ new Set(['OPENING_BRACKET']),
        /* 12 */ new Set(['CLOSING_BRACKET']),
        /* 13 */ new Set(['OPENING_BRACE']),
        /* 14 */ new Set(['BAR']),
        /* 15 */ new Set(['CLOSING_BRACE']),
        /* 16 */ undefined,
        /* 17 */ new Set(['ELLIPSIS']),
      ],
    }`);
  });
});

function getTable(regExp: RegExp): TransitionTable {
  return toTransitionTable(
    sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
  );
}
