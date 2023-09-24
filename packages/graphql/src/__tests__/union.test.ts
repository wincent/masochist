// These tests used to live in `@masochist/lexer`, where `union` is defined, but
// they depend on artifacts produced by `@masochist/graphql`, so we've moved
// them in here to avoid a circular dependency.

import {Token, union} from '@masochist/lexer';
import {getLexer} from '@masochist/lexer/src/internal';
import {beforeAll, describe, expect, it} from 'bun:test';

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
  NAME,
  ON,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
} from '../lexer';
import table from '../lexer';

describe('union()', () => {
  let lex: Awaited<ReturnType<typeof getLexer>>['lex'];

  beforeAll(async () => {
    lex = (await getLexer(table)).lex;
  });

  it('creates a machine with a number of distinct accept states', () => {
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

    expect(table).toEqual({
      acceptStates: new Set(
        // dprint-ignore
        [ 1, 2, 3, 4, 5, 17, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      ),
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
    });
  });

  it('creates a machine that accepts NAME or ON', () => {
    const table = union({ON, NAME});
    expect(table).toEqual({
      acceptStates: new Set([1, 2, 3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-n', new Set([1])],
          ['Atom:o', new Set([2])],
          ['Range:p-z', new Set([1])],
        ]),
        /* 1 */ new Map([
          ['Range:0-9', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-z', new Set([1])],
        ]),
        /* 2 */ new Map([
          ['Range:0-9', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-m', new Set([1])],
          ['Atom:n', new Set([3])],
          ['Range:o-z', new Set([1])],
        ]),
        /* 3 */ new Map([
          ['Range:0-9', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-z', new Set([1])],
        ]),
      ],
      labels: [
        /* 0 */ undefined,
        /* 1 */ new Set(['NAME']),
        /* 2 */ new Set(['NAME']),
        /* 3 */ new Set(['ON', 'NAME']),
      ],
    });

    // Note that we want to prefer the longest match, in the event that an
    // accept state could produce either token (eg. state 3).
    expect(Array.from(table.labels?.[3]!)).toEqual(['ON', 'NAME']);

    // Sneakily proving the above (transitively) by using lexer:
    let input = 'no on';
    let tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('NAME', 0, 2, input),
      new Token('ON', 3, 5, input),
    ]);

    input = 'onwards on';
    tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('NAME', 0, 7, input),
      new Token('ON', 8, 10, input),
    ]);
  });
});
