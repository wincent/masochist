import compileRegExp from '../../compileRegExp';
import {
  ESCAPED_CHARACTER,
  ESCAPED_UNICODE,
  EXPONENT_PART,
  FRACTIONAL_PART,
  INTEGER_PART,
  LINE_TERMINATOR,
  NAME,
  NUMBER,
  SOURCE_CHARACTER,
  STRING_CHARACTER,
  STRING_VALUE,
  WHITESPACE,
} from '../../lexer';
import NFAToDFA from '../NFAToDFA';
import minimizeDFA from '../minimizeDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../TransitionTable';

describe('minimizeDFA()', () => {
  describe('minimizing DFAs from "real world" regular expressions', () => {
    it('minimizes a DFA for ESCAPED_CHARACTER', () => {
      expect(minimize(ESCAPED_CHARACTER)).toEqual({
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
      expect(minimize(ESCAPED_UNICODE)).toEqual({
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
      expect(minimize(EXPONENT_PART)).toEqual({
        acceptStates: new Set([3]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:E', new Set([1])],
            ['Atom:e', new Set([1])],
          ]),
          /* 1 */ new Map([
            ['Atom:+', new Set([2])],
            ['Atom:-', new Set([2])],
            ['Range:0-9', new Set([3])],
          ]),
          /* 2 */ new Map([['Range:0-9', new Set([3])]]),
          /* 3 */ new Map([['Range:0-9', new Set([3])]]),
        ],
      });
    });

    it('minimizes a DFA for FRACTIONAL_PART', () => {
      expect(minimize(FRACTIONAL_PART)).toEqual({
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
      expect(minimize(INTEGER_PART)).toEqual({
        acceptStates: new Set([2, 3]),
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
          /* 3 */ new Map([['Range:0-9', new Set([3])]]),
        ],
      });
    });

    it('minimizes a DFA for LINE_TERMINATOR', () => {
      expect(minimize(LINE_TERMINATOR)).toEqual({
        acceptStates: new Set([1, 2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:\n', new Set([1])],
            ['Atom:\r', new Set([2])],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map([['Atom:\n', new Set([1])]]),
        ],
      });
    });

    it('minimizes a DFA for NAME', () => {
      expect(minimize(NAME)).toEqual({
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

    it('minimizes a DFA for NUMBER', () => {
      expect(minimize(NUMBER)).toEqual({
        acceptStates: new Set([2, 6, 8, 3]),
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
          /* 2 */ new Map([
            ['Atom:.', new Set([4])],
            ['Atom:E', new Set([5])],
            ['Atom:e', new Set([5])],
          ]),
          /* 3 */ new Map([
            ['Atom:.', new Set([4])],
            ['Range:0-9', new Set([3])],
            ['Atom:E', new Set([5])],
            ['Atom:e', new Set([5])],
          ]),
          /* 4 */ new Map([['Range:0-9', new Set([6])]]),
          /* 5 */ new Map([
            ['Atom:+', new Set([7])],
            ['Atom:-', new Set([7])],
            ['Range:0-9', new Set([8])],
          ]),
          /* 6 */ new Map([
            ['Range:0-9', new Set([6])],
            ['Atom:E', new Set([5])],
            ['Atom:e', new Set([5])],
          ]),
          /* 7 */ new Map([['Range:0-9', new Set([8])]]),
          /* 8 */ new Map([['Range:0-9', new Set([8])]]),
        ],
      });
    });

    it('minimizes a DFA for SOURCE_CHARACTER', () => {
      expect(minimize(SOURCE_CHARACTER)).toEqual({
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

    it('minimizes a DFA for STRING_CHARACTER', () => {
      expect(minimize(STRING_CHARACTER)).toEqual({
        acceptStates: new Set([1]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Range:]-\uffff', new Set([1])],
            ['Range:#-[', new Set([1])],
            ['Range: -!', new Set([1])],
            ['Atom:\t', new Set([1])],
            ['Atom:\\', new Set([2])],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map([
            ['Atom:t', new Set([1])],
            ['Atom:r', new Set([1])],
            ['Atom:n', new Set([1])],
            ['Atom:f', new Set([1])],
            ['Atom:b', new Set([1])],
            ['Atom:\\', new Set([1])],
            ['Atom:/', new Set([1])],
            ['Atom:"', new Set([1])],
            ['Atom:u', new Set([3])],
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
            ['Range:0-9', new Set([6])],
            ['Range:A-F', new Set([6])],
            ['Range:a-f', new Set([6])],
          ]),
          /* 6 */ new Map([
            ['Range:a-f', new Set([1])],
            ['Range:A-F', new Set([1])],
            ['Range:0-9', new Set([1])],
          ]),
        ],
      });
    });

    it('minimizes a DFA for STRING_VALUE', () => {
      expect(minimize(STRING_VALUE)).toEqual({
        acceptStates: new Set([2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:"', new Set([1])]]),
          /* 1 */ new Map([
            ['Atom:\t', new Set([1])],
            ['Range: -!', new Set([1])],
            ['Range:#-[', new Set([1])],
            ['Range:]-\uffff', new Set([1])],
            ['Atom:"', new Set([2])],
            ['Atom:\\', new Set([3])],
          ]),
          /* 2 */ new Map(),
          /* 3 */ new Map([
            ['Atom:"', new Set([1])],
            ['Atom:/', new Set([1])],
            ['Atom:b', new Set([1])],
            ['Atom:f', new Set([1])],
            ['Atom:n', new Set([1])],
            ['Atom:r', new Set([1])],
            ['Atom:t', new Set([1])],
            ['Atom:\\', new Set([4])],
            ['Atom:u', new Set([5])],
          ]),
          /* 4 */ new Map([
            ['Atom:/', new Set([1])],
            ['Atom:b', new Set([1])],
            ['Atom:f', new Set([1])],
            ['Atom:n', new Set([1])],
            ['Atom:r', new Set([1])],
            ['Atom:t', new Set([1])],
            ['Atom:\\', new Set([4])],
            ['Atom:u', new Set([5])],
          ]),
          /* 5 */ new Map([
            ['Range:0-9', new Set([6])],
            ['Range:A-F', new Set([6])],
            ['Range:a-f', new Set([6])],
          ]),
          /* 6 */ new Map([
            ['Range:0-9', new Set([7])],
            ['Range:A-F', new Set([7])],
            ['Range:a-f', new Set([7])],
          ]),
          /* 7 */ new Map([
            ['Range:0-9', new Set([8])],
            ['Range:A-F', new Set([8])],
            ['Range:a-f', new Set([8])],
          ]),
          /* 8 */ new Map([
            ['Range:0-9', new Set([1])],
            ['Range:A-F', new Set([1])],
            ['Range:a-f', new Set([1])],
          ]),
        ],
      });
    });

    it('minimizes a DFA for WHITESPACE', () => {
      expect(minimize(WHITESPACE)).toEqual({
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
