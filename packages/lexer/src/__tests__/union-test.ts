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
  it('applies labels to edges which lead accept states', () => {
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

        // Other Lexical tokens.
        NAME,
      },
    );

    expect(table).toEqual({
      acceptStates: new Set([1, 2]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Range:a-z', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Atom:}', new Set([2])],
          ['Atom:|', new Set([2])],
          ['Atom:{', new Set([2])],
          ['Atom:]', new Set([2])],
          ['Atom:[', new Set([2])],
          ['Atom:@', new Set([2])],
          ['Atom:=', new Set([2])],
          ['Atom::', new Set([2])],
          ['Atom:)', new Set([2])],
          ['Atom:(', new Set([2])],
          ['Atom:&', new Set([2])],
          ['Atom:$', new Set([2])],
          ['Atom:!', new Set([2])],
          ['Atom:.', new Set([3])],
        ]),
        /* 1 */ new Map([
          ['Range:a-z', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:0-9', new Set([1])],
        ]),
        /*  */ new Map(),
        /* 3 */ new Map([['Atom:.', new Set([4])]]),
        /* 4 */ new Map([['Atom:.', new Set([2])]]),
      ],
      labels: [
        /* 0 */ new Map([
          ['Range:a-z', {1: new Set(['NAME'])}],
          ['Range:A-Z', {1: new Set(['NAME'])}],
          ['Atom:_', {1: new Set(['NAME'])}],
          ['Atom:}', {2: new Set(['CLOSING_BRACE'])}],
          ['Atom:|', {2: new Set(['BAR'])}],
          ['Atom:{', {2: new Set(['OPENING_BRACE'])}],
          ['Atom:]', {2: new Set(['CLOSING_BRACKET'])}],
          ['Atom:[', {2: new Set(['OPENING_BRACKET'])}],
          ['Atom:@', {2: new Set(['AT'])}],
          ['Atom:=', {2: new Set(['EQUALS'])}],
          ['Atom::', {2: new Set(['COLON'])}],
          ['Atom:)', {2: new Set(['CLOSING_PAREN'])}],
          ['Atom:(', {2: new Set(['OPENING_PAREN'])}],
          ['Atom:&', {2: new Set(['AMPERSAND'])}],
          ['Atom:$', {2: new Set(['DOLLAR'])}],
          ['Atom:!', {2: new Set(['BANG'])}],
        ]),
        /* 1 */ new Map([
          ['Range:a-z', {1: new Set(['NAME'])}],
          ['Range:A-Z', {1: new Set(['NAME'])}],
          ['Atom:_', {1: new Set(['NAME'])}],
          ['Range:0-9', {1: new Set(['NAME'])}],
        ]),
        /* 2 */ undefined,
        /* 3 */ undefined,
        /* 4 */ new Map([
          ['Atom:.', {2: new Set(['ELLIPSIS'])}],
        ]),
      ],
    });
  });
});
