import compileRegExp from '../../compileRegExp';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../toTransitionTable';

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
      expect(getTable(/\\["\\\/bfnrt]/)).toEqual({
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

    it('builds a transition table for ESCAPED_UNICODE', () => {
      expect(getTable(/\\u[0-9A-Fa-f]{4}/)).toEqual({
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

    it('builds a transition table for EXPONENT_PART', () => {
      expect(getTable(/[eE][+-]?\d+/)).toEqual({
        acceptStates: new Set([5]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:E', new Set([2])],
            ['Atom:e', new Set([1])],
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

    it('builds a transition table for FRACTIONAL_PART', () => {
      expect(getTable(/\.\d+/)).toEqual({
        acceptStates: new Set([2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([['Atom:.', new Set([1])]]),
          /* 1 */ new Map([['Range:0-9', new Set([2])]]),
          /* 2 */ new Map([['Range:0-9', new Set([2])]]),
        ],
      });
    });

    it('builds a transition table for INTEGER_PART', () => {
      expect(getTable(/-?(0|[1-9]\d*)/)).toEqual({
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

    it('builds a transition table for LINE_TERMINATOR', () => {
      expect(getTable(/\n|\r\n|\r/)).toEqual({
        acceptStates: new Set([1, 3, 2]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:\n', new Set([2])],
            ['Atom:\r', new Set([1])],
          ]),
          /* 1 */ new Map([['Atom:\n', new Set([3])]]),
          /* 2 */ new Map(),
          /* 3 */ new Map(),
        ],
      });
    });

    it('builds a transition table for SOURCE_CHARACTER', () => {
      expect(getTable(/[\u0009\u000a\u000d\u0020-\uffff]/)).toEqual({
        acceptStates: new Set([1, 2, 3]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:\r', new Set([2])],
            ['Range: -\uffff', new Set([1])],
            ['Range:\t-\n', new Set([3])],
          ]),
          /* 1 */ new Map(),
          /* 2 */ new Map(),
          /* 3 */ new Map(),
        ],
      });
    });

    it('builds a transition table for NAME', () => {
      expect(getTable(/[_A-Za-z][_0-9A-Za-z]*/)).toEqual({
        acceptStates: new Set([1, 2, 3, 4, 5, 6, 7]),
        startStates: new Set([0]),
        transitions: [
          /* 0 */ new Map([
            ['Atom:_', new Set([2])],
            ['Range:A-Z', new Set([3])],
            ['Range:a-z', new Set([1])],
          ]),
          /* 1 */ new Map([
            ['Atom:_', new Set([6])],
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 2 */ new Map([
            ['Atom:_', new Set([6])],
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 3 */ new Map([
            ['Atom:_', new Set([6])],
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 4 */ new Map([
            ['Atom:_', new Set([6])],
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 5 */ new Map([
            ['Atom:_', new Set([6])],
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 6 */ new Map([
            ['Atom:_', new Set([6])],
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Range:a-z', new Set([7])],
          ]),
          /* 7 */ new Map([
            ['Atom:_', new Set([6])],
            ['Range:0-9', new Set([4])],
            ['Range:A-Z', new Set([5])],
            ['Range:a-z', new Set([7])],
          ]),
        ],
      });
    });

    it('builds a transition table for WHITESPACE', () => {
      expect(getTable(/[\t ]+/)).toEqual({
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

function getTable(regExp: RegExp): TransitionTable {
  return toTransitionTable(
    sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
  );
}
