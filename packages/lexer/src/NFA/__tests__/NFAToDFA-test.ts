import compileRegExp from '../../compileRegExp';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../toTransitionTable';

describe('NFAToDFA()', () => {
  it('creates the DFA from an atom', () => {
    expect(makeDFA(/a/)).toEqual({
      acceptStates: new Set([1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map(),
      ],
    });
  });

  it('creates a DFA created from an "anything" dot', () => {
    expect(makeDFA(/./)).toEqual({
      acceptStates: new Set([1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Anything', new Set([1])]]),
        /* 1 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a sequence', () => {
    expect(makeDFA(/foo/)).toEqual({
      acceptStates: new Set([3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:f', new Set([1])]]),
        /* 1 */ new Map([['Atom:o', new Set([2])]]),
        /* 2 */ new Map([['Atom:o', new Set([3])]]),
        /* 3 */ new Map(),
      ],
    });
  });

  it('creates a DFA from an alternate', () => {
    expect(makeDFA(/a|b|c/)).toEqual({
      acceptStates: new Set([1, 2, 3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:c', new Set([1])],
          ['Atom:b', new Set([2])],
          ['Atom:a', new Set([3])],
        ]),
        /* 1 */ new Map(),
        /* 2 */ new Map(),
        /* 3 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a character class', () => {
    expect(makeDFA(/[a-z0]/)).toEqual({
      acceptStates: new Set([1, 2]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Range:a-z', new Set([1])],
          ['Atom:0', new Set([2])],
        ]),
        /* 1 */ new Map(),
        /* 2 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a "?" quantifier', () => {
    expect(makeDFA(/a?/)).toEqual({
      acceptStates: new Set([0, 1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a "*" quantifier', () => {
    expect(makeDFA(/a*/)).toEqual({
      acceptStates: new Set([0, 1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([1])]]),
      ],
    });
  });

  it('creates a DFA from a "+" quantifier', () => {
    expect(makeDFA(/a+/)).toEqual({
      acceptStates: new Set([1]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([1])]]),
      ],
    });
  });

  it('creates a DFA from a "{3}" quantifier', () => {
    expect(makeDFA(/a{3}/)).toEqual({
      acceptStates: new Set([3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([2])]]),
        /* 2 */ new Map([['Atom:a', new Set([3])]]),
        /* 3 */ new Map(),
      ],
    });
  });

  it('creates a DFA from a "{2,4}" quantifier', () => {
    expect(makeDFA(/a{2,4}/)).toEqual({
      acceptStates: new Set([2, 3, 4]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([['Atom:a', new Set([1])]]),
        /* 1 */ new Map([['Atom:a', new Set([2])]]),
        /* 2 */ new Map([['Atom:a', new Set([3])]]),
        /* 3 */ new Map([['Atom:a', new Set([4])]]),
        /* 4 */ new Map(),
      ],
    });
  });

  // RegExps taken from:
  //
  //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
  //
  // With only modification being removing non-capturing group syntax
  // (`(?:...)`).
  //
  describe('building DFAs from "real world" regular expressions', () => {
    it('builds a DFA for ESCAPED_CHARACTER', () => {
      expect(makeDFA(/\\["\\\/bfnrt]/)).toEqual({
        acceptStates: new Set([2, 3, 4, 5, 6, 7, 8, 9]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:\\', new Set([1])]]),
          /* 1 */ new Map([
            ['Atom:"', new Set([2])],
            ['Atom:/', new Set([3])],
            ['Atom:\\', new Set([4])],
            ['Atom:b', new Set([5])],
            ['Atom:f', new Set([6])],
            ['Atom:n', new Set([7])],
            ['Atom:r', new Set([8])],
            ['Atom:t', new Set([9])],
          ]),
          /* 2 */ new Map(),
          /* 3 */ new Map(),
          /* 4 */ new Map(),
          /* 5 */ new Map(),
          /* 6 */ new Map(),
          /* 7 */ new Map(),
          /* 8 */ new Map(),
          /* 9 */ new Map(),
        ],
      });
    });

    it('builds a DFA for ESCAPED_UNICODE', () => {
      expect(makeDFA(/\\u[0-9A-Fa-f]{4}/)).toEqual({
        acceptStates: new Set([12, 13, 14]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:\\', new Set([1])]]),
          /* 1 */ new Map([['Atom:u', new Set([2])]]),
          /* 2 */ new Map([
            ['Range:0-9', new Set([3])],
            ['Range:A-F', new Set([4])],
            ['Range:a-f', new Set([5])],
          ]),
          /* 3 */ new Map([
            ['Range:0-9', new Set([6])],
            ['Range:A-F', new Set([7])],
            ['Range:a-f', new Set([8])],
          ]),
          /* 4 */ new Map([
            ['Range:0-9', new Set([6])],
            ['Range:A-F', new Set([7])],
            ['Range:a-f', new Set([8])],
          ]),
          /* 5 */ new Map([
            ['Range:0-9', new Set([6])],
            ['Range:A-F', new Set([7])],
            ['Range:a-f', new Set([8])],
          ]),
          /* 6 */ new Map([
            ['Range:0-9', new Set([9])],
            ['Range:A-F', new Set([10])],
            ['Range:a-f', new Set([11])],
          ]),
          /* 7 */ new Map([
            ['Range:0-9', new Set([9])],
            ['Range:A-F', new Set([10])],
            ['Range:a-f', new Set([11])],
          ]),
          /* 8 */ new Map([
            ['Range:0-9', new Set([9])],
            ['Range:A-F', new Set([10])],
            ['Range:a-f', new Set([11])],
          ]),
          /* 9 */ new Map([
            ['Range:0-9', new Set([12])],
            ['Range:A-F', new Set([13])],
            ['Range:a-f', new Set([14])],
          ]),
          /* 10 */ new Map([
            ['Range:0-9', new Set([12])],
            ['Range:A-F', new Set([13])],
            ['Range:a-f', new Set([14])],
          ]),
          /* 11 */ new Map([
            ['Range:0-9', new Set([12])],
            ['Range:A-F', new Set([13])],
            ['Range:a-f', new Set([14])],
          ]),
          /* 12 */ new Map(),
          /* 13 */ new Map(),
          /* 14 */ new Map(),
        ],
      });
    });

    it('builds a DFA for EXPONENT_PART', () => {
      expect(makeDFA(/[eE][+-]?\d+/)).toEqual({
        acceptStates: new Set([5]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:e', new Set([1])],
            ['Atom:E', new Set([2])],
          ]),
          /* 1 */ new Map([
            ['Atom:+', new Set([3])],
            ['Atom:-', new Set([4])],
            ['Range:0-9', new Set([5])],
          ]),
          /* 2 */ new Map([
            ['Atom:+', new Set([3])],
            ['Atom:-', new Set([4])],
            ['Range:0-9', new Set([5])],
          ]),
          /* 3 */ new Map([['Range:0-9', new Set([5])]]),
          /* 4 */ new Map([['Range:0-9', new Set([5])]]),
          /* 5 */ new Map([['Range:0-9', new Set([5])]]),
        ],
      });
    });

    it('builds a DFA for FRACTIONAL_PART', () => {
      expect(makeDFA(/\.\d+/)).toEqual({
        acceptStates: new Set([2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:.', new Set([1])]]),
          /* 1 */ new Map([['Range:0-9', new Set([2])]]),
          /* 2 */ new Map([['Range:0-9', new Set([2])]]),
        ],
      });
    });

    it('builds a DFA for INTEGER_PART', () => {
      expect(makeDFA(/-?(0|[1-9]\d*)/)).toEqual({
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
      });
    });

    it('builds a DFA for LINE_TERMINATOR', () => {
      expect(makeDFA(/\n|\r\n|\r/)).toEqual({
        acceptStates: new Set([1, 3, 2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:\r', new Set([1])],
            ['Atom:\n', new Set([2])],
          ]),
          /* 1 */ new Map([['Atom:\n', new Set([3])]]),
          /* 2 */ new Map(),
          /* 3 */ new Map(),
        ],
      });
    });

    it('builds a DFA for SOURCE_CHARACTER', () => {
      expect(makeDFA(/[\u0009\u000a\u000d\u0020-\uffff]/)).toEqual({
        acceptStates: new Set([1, 2, 3]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Range: -\uffff', new Set([1])],
            ['Atom:\r', new Set([2])],
            ['Range:\t-\n', new Set([3])],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map(),
          /* 3 */ new Map(),
        ],
      });
    });

    it('builds a DFA for NAME', () => {
      expect(makeDFA(/[_A-Za-z][_0-9A-Za-z]*/)).toEqual({
        acceptStates: new Set([1, 4, 5, 6, 7, 2, 3]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Range:a-z', new Set([1])],
            ['Atom:_', new Set([2])],
            ['Range:A-Z', new Set([3])],
          ]),
          /* 1 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Atom:_', new Set([6])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 2 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Atom:_', new Set([6])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 3 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Atom:_', new Set([6])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 4 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Atom:_', new Set([6])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 5 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Atom:_', new Set([6])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 6 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Atom:_', new Set([6])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 7 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Atom:_', new Set([6])],
            ['Range:a-z', new Set([7])],
          ]),
        ],
      });
    });

    it('builds a DFA for WHITESPACE', () => {
      expect(makeDFA(/[\t ]+/)).toEqual({
        acceptStates: new Set([1, 2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom: ', new Set([1])],
            ['Atom:\t', new Set([2])],
          ]),
          /* 1 */ new Map([
            ['Atom: ', new Set([1])],
            ['Atom:\t', new Set([2])],
          ]),
          /* 2 */ new Map([
            ['Atom: ', new Set([1])],
            ['Atom:\t', new Set([2])],
          ]),
        ],
      });
    });
  });
});

function makeDFA(regExp: RegExp): TransitionTable {
  return toTransitionTable(
    NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp)))),
  );
}
