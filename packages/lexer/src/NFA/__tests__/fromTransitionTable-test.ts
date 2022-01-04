import compileRegExp from '../../compileRegExp';
import NFAToDFA from '../NFAToDFA';
import fromTransitionTable from '../fromTransitionTable';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';

import type {NFA} from '../NFA';

describe('fromTransitionTable()', () => {
  describe('round-tripping real-world examples', () => {
    // RegExps taken from:
    //
    //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
    //
    // With only modification being removing non-capturing group syntax
    // (`(?:...)`).
    //
    it('round trips an ESCAPED_CHARACTER automata', () => {
      const dfa = getDFA(/\\["\\\/bfnrt]/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an ESCAPED_UNICODE automata', () => {
      const dfa = getDFA(/\\u[0-9A-Fa-f]{4}/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an EXPONENT_PART automata', () => {
      const dfa = getDFA(/[eE][+-]?\d+/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an FRACTIONAL_PART automata', () => {
      const dfa = getDFA(/\.\d+/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an INTEGER_PART automata', () => {
      const dfa = getDFA(/-?(0|[1-9]\d*)/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an LINE_TERMINATOR automata', () => {
      const dfa = getDFA(/\n|\r\n|\r/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an SOURCE_CHARACTER automata', () => {
      const dfa = getDFA(/[\u0009\u000a\u000d\u0020-\uffff]/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an NAME automata', () => {
      const dfa = getDFA(/[_A-Za-z][_0-9A-Za-z]*/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an WHITESPACE automata', () => {
      const dfa = getDFA(/[\t ]+/);
      expect(roundtrip(dfa)).toEqual(dfa);
    });
  });
});

function getDFA(regExp: RegExp): NFA {
  return sortEdges(
    NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp)))),
  );
}

function roundtrip(dfa: NFA): NFA {
  return fromTransitionTable(toTransitionTable(dfa));
}
