import ignore from '../ignore';
import {
  COMMA,
  COMMENT,
  LINE_TERMINATOR,
  UNICODE_BOM,
  WHITESPACE,
} from '../lexer';

// TODO: remove:
import dotifyTransitionTable from '../NFA/dotifyTransitionTable';
import stringifyTransitionTable from '../NFA/stringifyTransitionTable';

describe('ignore()', () => {
  it('produces a DFA that recognizes any ignored token', () => {
    const table = ignore(
      COMMA,
      COMMENT,
      LINE_TERMINATOR,
      UNICODE_BOM,
      WHITESPACE,
    );

    // TODO: remove:
    console.log(stringifyTransitionTable(table));
    console.log(dotifyTransitionTable(table)); // Light version (default).
    console.log(dotifyTransitionTable(table, true)); // Dark version.

    expect(table).toEqual({
      acceptStates: new Set([1, 2, 3, 4]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom: ', new Set([1])],
          ['Atom:\t', new Set([1])],
          ['Atom:\n', new Set([2])],
          ['Atom:\ufeff', new Set([2])],
          ['Atom:,', new Set([2])],
          ['Atom:#', new Set([3])],
          ['Atom:\r', new Set([4])],
        ]),
        /* 1 */ new Map([
          ['Atom:\t', new Set([1])],
          ['Atom: ', new Set([1])],
        ]),
        /* 2 */ new Map(),
        /* 3 */ new Map([
          ['Range: -\uffff', new Set([3])],
          ['Atom:\t', new Set([3])],
        ]),
        /* 4 */ new Map([['Atom:\n', new Set([2])]]),
      ],
    });
  });
});
