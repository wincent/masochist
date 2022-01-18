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
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
} from '../lexer';
import union from '../union';

describe('union()', () => {
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
    console.log(require('../NFA/stringifyTransitionTable').default(table));
    console.log(require('../NFA/dotifyTransitionTable').default(table));

    expect(table).toEqual({
      acceptStates: new Set([
        1, 2, 3, 4, 5, 17, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Range:a-z', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Atom:(', new Set([2])],
          ['Atom:[', new Set([3])],
          ['Atom:{', new Set([4])],
          ['Atom:=', new Set([5])],
          ['Atom:.', new Set([6])],
          ['Atom:$', new Set([7])],
          ['Atom::', new Set([8])],
          ['Atom:)', new Set([9])],
          ['Atom:]', new Set([10])],
          ['Atom:}', new Set([11])],
          ['Atom:|', new Set([12])],
          ['Atom:!', new Set([13])],
          ['Atom:@', new Set([14])],
          ['Atom:&', new Set([15])],
        ]),
        /* 1 */ new Map([
          ['Range:0-9', new Set([1])],
          ['Range:a-z', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
        ]),
        /* 2 */ new Map(),
        /* 3 */ new Map(),
        /* 4 */ new Map(),
        /* 5 */ new Map(),
        /* 6 */ new Map([['Atom:.', new Set([16])]]),
        /* 7 */ new Map(),
        /* 8 */ new Map(),
        /* 9 */ new Map(),
        /* 10 */ new Map(),
        /* 11 */ new Map(),
        /* 12 */ new Map(),
        /* 13 */ new Map(),
        /* 14 */ new Map(),
        /* 15 */ new Map(),
        /* 16 */ new Map([['Atom:.', new Set([17])]]),
        /* 17 */ new Map(),
      ],
    });
  });
});
