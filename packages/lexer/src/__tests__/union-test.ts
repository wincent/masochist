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
import dotifyTransitionTable from '../NFA/dotifyTransitionTable';
import stringifyTransitionTable from '../NFA/stringifyTransitionTable';
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
    console.log(stringifyTransitionTable(table));
    console.log(dotifyTransitionTable(table));
  });
});
