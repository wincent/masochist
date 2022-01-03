import compileRegExp from '../../compileRegExp';
import {ACCEPT, NONE, START} from '../NFA';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import toTransitionTable from '../toTransitionTable';

import type {NFA} from '../NFA';

describe('toTransitionTable()', () => {
  // RegExps taken from:
  //
  //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
  //
  // With only modification being removing non-capturing group syntax
  // (`(?:...)`).
  //
  describe('building transition tables from "real world" regular expressions', () => {
    it('builds a transition table for ESCAPED_CHARACTER', () => {
      expect(
        toTransitionTable(
          NFAToDFA(
            removeEpsilons(regExpToNFA(compileRegExp(/\\["\\\/bfnrt]/))),
          ),
        ),
      ).toEqual({
        acceptStates: new Set([2, 3, 4, 5, 6, 7, 8, 9]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:\\', 1]]),
          /* 1 */ new Map([
            ['Atom:"', 2],
            ['Atom:/', 3],
            ['Atom:\\', 4],
            ['Atom:b', 5],
            ['Atom:f', 6],
            ['Atom:n', 7],
            ['Atom:r', 8],
            ['Atom:t', 9],
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
      expect(
        toTransitionTable(
          NFAToDFA(
            removeEpsilons(regExpToNFA(compileRegExp(/\\u[0-9A-Fa-f]{4}/))),
          ),
        ),
      ).toEqual({
        acceptStates: new Set([12, 13, 14]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:\\', 1]]),
          /* 1 */ new Map([['Atom:u', 2]]),
          /* 2 */ new Map([
            ['Range:0-9', 3],
            ['Range:A-F', 4],
            ['Range:a-f', 5],
          ]),
          /* 3 */ new Map([
            ['Range:0-9', 6],
            ['Range:A-F', 7],
            ['Range:a-f', 8],
          ]),
          /* 4 */ new Map(),
          /* 5 */ new Map(),
          /* 6 */ new Map([
            ['Range:0-9', 9],
            ['Range:A-F', 10],
            ['Range:a-f', 11],
          ]),
          /* 7 */ new Map(),
          /* 8 */ new Map(),
          /* 9 */ new Map([
            ['Range:0-9', 12],
            ['Range:A-F', 13],
            ['Range:a-f', 14],
          ]),
          /* 10 */ new Map(),
          /* 11 */ new Map(),
          /* 12 */ new Map(),
          /* 13 */ new Map(),
          /* 14 */ new Map(),
        ],
      });
    });

    it('builds a DFA for EXPONENT_PART', () => {
      expect(
        toTransitionTable(
          NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/[eE][+-]?\d+/)))),
        ),
      ).toEqual({
        acceptStates: new Set([5]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:e', 1],
            ['Atom:E', 2],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map([
            ['Atom:+', 3],
            ['Atom:-', 4],
            ['Range:0-9', 5],
          ]),
          /* 3 */ new Map(),
          /* 4 */ new Map(),
          /* 5 */ new Map([['Range:0-9', 5]]),
        ],
      });
    });

    it('builds a DFA for FRACTIONAL_PART', () => {
      expect(
        toTransitionTable(
          NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/\.\d+/)))),
        ),
      ).toEqual({
        acceptStates: new Set([2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:.', 1]]),
          /* 1 */ new Map([['Range:0-9', 2]]),
          /* 2 */ new Map([['Range:0-9', 2]]),
        ],
      });
    });

    it('builds a DFA for INTEGER_PART', () => {
      expect(
        toTransitionTable(
          NFAToDFA(
            removeEpsilons(regExpToNFA(compileRegExp(/-?(0|[1-9]\d*)/))),
          ),
        ),
      ).toEqual({
        acceptStates: new Set([1, 2, 4]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:0', 1],
            ['Range:1-9', 2],
            ['Atom:-', 3],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map([['Range:0-9', 4]]),
          /* 3 */ new Map(),
          /* 4 */ new Map([['Range:0-9', 4]]),
        ],
      });
    });

    it('builds a DFA for LINE_TERMINATOR', () => {
      expect(
        toTransitionTable(
          NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/\n|\r\n|\r/)))),
        ),
      ).toEqual({
        acceptStates: new Set([1, 3, 2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:\r', 1],
            ['Atom:\n', 2],
          ]),
          /* 1 */ new Map([['Atom:\n', 3]]),
          /* 2 */ new Map(),
          /* 3 */ new Map(),
        ],
      });
    });

    it('builds a DFA for SOURCE_CHARACTER', () => {
      expect(
        toTransitionTable(
          NFAToDFA(
            removeEpsilons(
              regExpToNFA(compileRegExp(/[\u0009\u000a\u000d\u0020-\uffff]/)),
            ),
          ),
        ),
      ).toEqual({
        acceptStates: new Set([1, 2, 3]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Range: -\uffff', 1],
            ['Atom:\r', 2],
            ['Range:\t-\n', 3],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map(),
          /* 3 */ new Map(),
        ],
      });
    });

    // TODO: Sort edges just to make output order predictable
    it('builds a DFA for NAME', () => {
      expect(
        toTransitionTable(
          NFAToDFA(
            removeEpsilons(
              regExpToNFA(compileRegExp(/[_A-Za-z][_0-9A-Za-z]*/)),
            ),
          ),
        ),
      ).toEqual({
        acceptStates: new Set([3, 4, 5, 6, 7]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Range:a-z', 1],
            ['Atom:_', 2],
            ['Range:A-Z', 3],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map(),
          /* 3 */ new Map([
            ['Range:0-9', 4],
            ['Range:A-Z', 5],
            ['Atom:_', 6],
            ['Range:a-z', 7],
          ]),
          /* 4 */ new Map([
            ['Range:0-9', 4],
            ['Range:A-Z', 5],
            ['Atom:_', 6],
            ['Range:a-z', 7],
          ]),
          /* 5 */ new Map([
            ['Range:0-9', 4],
            ['Range:A-Z', 5],
            ['Atom:_', 6],
            ['Range:a-z', 7],
          ]),
          /* 6 */ new Map([
            ['Range:0-9', 4],
            ['Range:A-Z', 5],
            ['Atom:_', 6],
            ['Range:a-z', 7],
          ]),
          /* 7 */ new Map([
            ['Range:0-9', 4],
            ['Range:A-Z', 5],
            ['Atom:_', 6],
            ['Range:a-z', 7],
          ]),
        ],
      });
    });

    it('builds a DFA for WHITESPACE', () => {
      expect(
        toTransitionTable(
          NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/[\t ]+/)))),
        ),
      ).toEqual({
        acceptStates: new Set([1, 2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom: ', 1],
            ['Atom:\t', 2],
          ]),
          /* 1 */ new Map([
            ['Atom: ', 1],
            ['Atom:\t', 2],
          ]),
          /* 2 */ new Map([
            ['Atom: ', 1],
            ['Atom:\t', 2],
          ]),
        ],
      });
    });
  });
});
