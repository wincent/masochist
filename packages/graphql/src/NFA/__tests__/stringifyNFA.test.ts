// These tests used to live in `@masochist/lexer`, where `stringifyNFA` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {dedent} from '@masochist/common';
import {fromTransitionTable, stringifyNFA} from '@masochist/lexer/src/internal';
import {union} from '@masochist/lexer';
import {describe, expect, it} from 'bun:test';

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
} from '../../lexer';

describe('stringifyNFA()', () => {
  it('stringifies a transition table with labels', () => {
    const nfa = fromTransitionTable(
      union(
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
      ),
    );

    expect(stringifyNFA(nfa)).toEqual(dedent`
      id  START?  ACCEPT?             labels  to   on
      --  ------  -------  -----------------  --  ---
       0       *        -                  -   1    !
       0       *        -                  -   2    $
       0       *        -                  -   3    &
       0       *        -                  -   4    (
       0       *        -                  -   5    )
       0       *        -                  -   6    .
       0       *        -                  -   7    :
       0       *        -                  -   8    =
       0       *        -                  -   9    @
       0       *        -                  -  10  A-Z
       0       *        -                  -  11    [
       0       *        -                  -  12    ]
       0       *        -                  -  10    _
       0       *        -                  -  10  a-z
       0       *        -                  -  13    {
       0       *        -                  -  14    |
       0       *        -                  -  15    }
       1       -        *             [BANG]   -    -
       2       -        *           [DOLLAR]   -    -
       3       -        *        [AMPERSAND]   -    -
       4       -        *    [OPENING_PAREN]   -    -
       5       -        *    [CLOSING_PAREN]   -    -
       6       -        -                  -  16    .
      16       -        -                  -  17    .
      17       -        *         [ELLIPSIS]   -    -
       7       -        *            [COLON]   -    -
       8       -        *           [EQUALS]   -    -
       9       -        *               [AT]   -    -
      10       -        *             [NAME]  10  0-9
      10       -        *             [NAME]  10  A-Z
      10       -        *             [NAME]  10    _
      10       -        *             [NAME]  10  a-z
      11       -        *  [OPENING_BRACKET]   -    -
      12       -        *  [CLOSING_BRACKET]   -    -
      13       -        *    [OPENING_BRACE]   -    -
      14       -        *              [BAR]   -    -
      15       -        *    [CLOSING_BRACE]   -    -
    `);
  });
});
