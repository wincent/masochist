import {dedent} from '@masochist/common';

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
import union from '../../union';
import fromTransitionTable from '../fromTransitionTable';
import stringifyNFA from '../stringifyNFA';

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
       0       *        -                  -   1  a-z
       0       *        -                  -   1  A-Z
       0       *        -                  -   1    _
       0       *        -                  -   2    (
       0       *        -                  -   3    [
       0       *        -                  -   4    {
       0       *        -                  -   5    =
       0       *        -                  -   6    .
       0       *        -                  -   7    $
       0       *        -                  -   8    :
       0       *        -                  -   9    )
       0       *        -                  -  10    ]
       0       *        -                  -  11    }
       0       *        -                  -  12    |
       0       *        -                  -  13    !
       0       *        -                  -  14    @
       0       *        -                  -  15    &
       1       -        *             [NAME]   1  a-z
       1       -        *             [NAME]   1  A-Z
       1       -        *             [NAME]   1    _
       1       -        *             [NAME]   1  0-9
       2       -        *    [OPENING_PAREN]   -    -
       3       -        *  [OPENING_BRACKET]   -    -
       4       -        *    [OPENING_BRACE]   -    -
       5       -        *           [EQUALS]   -    -
       6       -        -                  -  16    .
      16       -        -                  -  17    .
      17       -        *         [ELLIPSIS]   -    -
       7       -        *           [DOLLAR]   -    -
       8       -        *            [COLON]   -    -
       9       -        *    [CLOSING_PAREN]   -    -
      10       -        *  [CLOSING_BRACKET]   -    -
      11       -        *    [CLOSING_BRACE]   -    -
      12       -        *              [BAR]   -    -
      13       -        *             [BANG]   -    -
      14       -        *               [AT]   -    -
      15       -        *        [AMPERSAND]   -    -
    `);
  });
});
