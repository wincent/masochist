import ignore from '../ignore';
import {
  COMMA,
  COMMENT,
  LINE_TERMINATOR,
  UNICODE_BOM,
  WHITESPACE,
} from '../lexer';

describe('ignore()', () => {
  it('produces a DFA that recognizes any ignored token', () => {
    const table = ignore(
      COMMA,
      COMMENT,
      LINE_TERMINATOR,
      UNICODE_BOM,
      WHITESPACE,
    );

    expect(table).toEqual({
      acceptStates: new Set([1, 2, 3, 4]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:\t', new Set([1])],
          ['Atom:\n', new Set([2])],
          ['Atom:\r', new Set([3])],
          ['Atom: ', new Set([1])],
          ['Atom:#', new Set([4])],
          ['Atom:,', new Set([2])],
          ['Atom:\ufeff', new Set([2])],
        ]),
        /* 1 */ new Map([
          ['Atom:\t', new Set([1])],
          ['Atom: ', new Set([1])],
        ]),
        /* 2 */ new Map(),
        /* 3 */ new Map([['Atom:\n', new Set([2])]]),
        /* 4 */ new Map([
          ['Atom:\t', new Set([4])],
          ['Range: -\uffff', new Set([4])],
        ]),
      ],
    });
  });
});
