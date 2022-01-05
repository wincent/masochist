import compileRegExp from '../../compileRegExp';
import {ACCEPT, NONE, START} from '../NFA';
import NFAToDFA from '../NFAToDFA';
import minimizeDFA from '../minimizeDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';

import stringifyTransitionTable from '../stringifyTransitionTable';

import type {TransitionTable} from '../toTransitionTable';

describe('minimizeDFA()', () => {
  // RegExps taken from:
  //
  //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
  //
  // With only modification being removing non-capturing group syntax
  // (`(?:...)`).
  //
  describe('minimizing DFAs from "real world" regular expressions', () => {
    it('minimizes a DFA for ESCAPED_CHARACTER', () => {
      expect(minimize(/\\["\\\/bfnrt]/)).toEqual({
        acceptStates: new Set([2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:\\', new Set([1])]]),
          /* 1 */ new Map([
            ['Atom:t', new Set([2])],
            ['Atom:r', new Set([2])],
            ['Atom:n', new Set([2])],
            ['Atom:f', new Set([2])],
            ['Atom:b', new Set([2])],
            ['Atom:\\', new Set([2])],
            ['Atom:/', new Set([2])],
            ['Atom:"', new Set([2])],
          ]),
          /* 2 */ new Map(),
        ],
      });
    });

    it('minimizes a DFA for ESCAPED_UNICODE', () => {
      expect(minimize(/\\u[0-9A-Fa-f]{4}/)).toEqual({
        acceptStates: new Set([6]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:\\', new Set([1])]]),
          /* 1 */ new Map([['Atom:u', new Set([2])]]),
          /* 2 */ new Map([
            ['Range:0-9', new Set([3])],
            ['Range:A-F', new Set([3])],
            ['Range:a-f', new Set([3])],
          ]),
          /* 3 */ new Map([
            ['Range:0-9', new Set([4])],
            ['Range:A-F', new Set([4])],
            ['Range:a-f', new Set([4])],
          ]),
          /* 4 */ new Map([
            ['Range:0-9', new Set([5])],
            ['Range:A-F', new Set([5])],
            ['Range:a-f', new Set([5])],
          ]),
          /* 5 */ new Map([
            ['Range:a-f', new Set([6])],
            ['Range:A-F', new Set([6])],
            ['Range:0-9', new Set([6])],
          ]),
          /* 6 */ new Map(),
        ],
      });
    });

    it('minimizes a DFA for EXPONENT_PART', () => {
      expect(minimize(/[eE][+-]?\d+/)).toEqual({
        acceptStates: new Set([2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:e', new Set([1])],
            ['Atom:E', new Set([1])],
          ]),
          /* 1 */ new Map([
            ['Range:0-9', new Set([2])],
            ['Atom:+', new Set([3])],
            ['Atom:-', new Set([3])],
          ]),
          /* 2 */ new Map([['Range:0-9', new Set([2])]]),
          /* 3 */ new Map([['Range:0-9', new Set([2])]]),
        ],
      });
    });

    it('minimizes a DFA for FRACTIONAL_PART', () => {
      expect(minimize(/\.\d+/)).toEqual({
        acceptStates: new Set([2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:.', new Set([1])]]),
          /* 1 */ new Map([['Range:0-9', new Set([2])]]),
          /* 2 */ new Map([['Range:0-9', new Set([2])]]),
        ],
      });
    });

    it('minimizes a DFA for INTEGER_PART', () => {
      expect(minimize(/-?(0|[1-9]\d*)/)).toEqual({
        acceptStates: new Set([2, 3]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:-', new Set([1])],
            ['Range:1-9', new Set([2])],
            ['Atom:0', new Set([3])],
          ]),
          /* 1 */ new Map([
            ['Range:1-9', new Set([2])],
            ['Atom:0', new Set([3])],
          ]),
          /* 2 */ new Map([['Range:0-9', new Set([2])]]),
          /* 3 */ new Map(),
        ],
      });
    });

    it('minimizes a DFA for LINE_TERMINATOR', () => {
      expect(minimize(/\n|\r\n|\r/)).toEqual({
        acceptStates: new Set([1, 2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:\r', new Set([1])],
            ['Atom:\n', new Set([2])],
          ]),
          /* 1 */ new Map([['Atom:\n', new Set([2])]]),
          /* 2 */ new Map(),
        ],
      });
    });

    it('minimizes a DFA for SOURCE_CHARACTER', () => {
      expect(minimize(/[\u0009\u000a\u000d\u0020-\uffff]/)).toEqual({
        acceptStates: new Set([1]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Range: -\uffff', new Set([1])],
            ['Range:\t-\n', new Set([1])],
            ['Atom:\r', new Set([1])],
          ]),
          /* 1 */ new Map(),
        ],
      });
    });

    it('minimizes a DFA for NAME', () => {
      expect(minimize(/[_A-Za-z][_0-9A-Za-z]*/)).toEqual({
        acceptStates: new Set([1]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Range:a-z', new Set([1])],
            ['Range:A-Z', new Set([1])],
            ['Atom:_', new Set([1])],
          ]),
          /* 1 */ new Map([
            ['Range:a-z', new Set([1])],
            ['Range:A-Z', new Set([1])],
            ['Atom:_', new Set([1])],
            ['Range:0-9', new Set([1])],
          ]),
        ],
      });
    });

    it('minimizes a DFA for WHITESPACE', () => {
      expect(minimize(/[\t ]+/)).toEqual({
        acceptStates: new Set([1]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom: ', new Set([1])],
            ['Atom:\t', new Set([1])],
          ]),
          /* 1 */ new Map([
            ['Atom: ', new Set([1])],
            ['Atom:\t', new Set([1])],
          ]),
        ],
      });
    });
  });
});

function minimize(regExp: RegExp): TransitionTable {
  return toTransitionTable(
    minimizeDFA(
      sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
    ),
  );
}
