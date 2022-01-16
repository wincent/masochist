import compileRegExp from '../../compileRegExp';
import {
  ESCAPED_CHARACTER,
  ESCAPED_UNICODE,
  EXPONENT_PART,
  FRACTIONAL_PART,
  INTEGER_PART,
  LINE_TERMINATOR,
  NAME,
  SOURCE_CHARACTER,
  WHITESPACE,
} from '../../lexer';
import NFAToDFA from '../NFAToDFA';
import applyLabel from '../applyLabel';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../TransitionTable';

describe('toTransitionTable()', () => {
  describe('building transition tables from "real world" regular expressions', () => {
    it('builds a transition table for ESCAPED_CHARACTER', () => {
      expect(getTable(ESCAPED_CHARACTER)).toEqual({
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
      expect(getTable(ESCAPED_UNICODE)).toEqual({
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
      expect(getTable(EXPONENT_PART)).toEqual({
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
      expect(getTable(FRACTIONAL_PART)).toEqual({
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
      expect(getTable(INTEGER_PART)).toEqual({
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
      expect(getTable(LINE_TERMINATOR)).toEqual({
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

    it('builds a transition table for NAME', () => {
      expect(getTable(NAME)).toEqual({
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

    it('builds a transition table for SOURCE_CHARACTER', () => {
      expect(getTable(SOURCE_CHARACTER)).toEqual({
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

    it('builds a transition table for WHITESPACE', () => {
      expect(getTable(WHITESPACE)).toEqual({
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

    it('builds a transition table that has labels leading to accept states ', () => {
      // Using INTEGER_PART as an example because it has:
      // - Multiple accept states.
      // - Multiple edges leading to accept states.
      expect(getTable(INTEGER_PART, 'INTEGER_PART')).toEqual({
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
        labels: [
          /* 0 */ new Map([
            ['Atom:0', {2: new Set(['INTEGER_PART'])}],
            ['Range:1-9', {3: new Set(['INTEGER_PART'])}],
          ]),
          /* 1 */ new Map([
            ['Atom:0', {2: new Set(['INTEGER_PART'])}],
            ['Range:1-9', {3: new Set(['INTEGER_PART'])}],
          ]),
          /* 2 */ undefined,
          /* 3 */ new Map([['Range:0-9', {4: new Set(['INTEGER_PART'])}]]),
          /* 4 */ new Map([['Range:0-9', {4: new Set(['INTEGER_PART'])}]]),
        ],
      });
    });
  });
});

function getTable(regExp: RegExp, label?: string): TransitionTable {
  const dfa = sortEdges(
    NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp)))),
  );

  if (label) {
    applyLabel(label, dfa);
  }

  return toTransitionTable(dfa);
}
