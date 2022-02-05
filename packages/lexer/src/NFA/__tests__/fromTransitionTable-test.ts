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
} from '../../definition';
import NFAToDFA from '../NFAToDFA';
import fromTransitionTable from '../fromTransitionTable';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';

import type {NFA} from '../NFA';

describe('fromTransitionTable()', () => {
  describe('round-tripping real-world examples', () => {
    it('round trips an ESCAPED_CHARACTER automata', () => {
      const dfa = getDFA(ESCAPED_CHARACTER);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an ESCAPED_UNICODE automata', () => {
      const dfa = getDFA(ESCAPED_UNICODE);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an EXPONENT_PART automata', () => {
      const dfa = getDFA(EXPONENT_PART);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an FRACTIONAL_PART automata', () => {
      const dfa = getDFA(FRACTIONAL_PART);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an INTEGER_PART automata', () => {
      const dfa = getDFA(INTEGER_PART);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an LINE_TERMINATOR automata', () => {
      const dfa = getDFA(LINE_TERMINATOR);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an NAME automata', () => {
      const dfa = getDFA(NAME);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an SOURCE_CHARACTER automata', () => {
      const dfa = getDFA(SOURCE_CHARACTER);
      expect(roundtrip(dfa)).toEqual(dfa);
    });

    it('round trips an WHITESPACE automata', () => {
      const dfa = getDFA(WHITESPACE);
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
