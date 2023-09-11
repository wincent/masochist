// These tests used to live in `@masochist/lexer`, where `fromTransitionTable`
// is defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {
  NFAToDFA,
  compileRegExp,
  fromTransitionTable,
  regExpToNFA,
  removeEpsilons,
  sortEdges,
  toTransitionTable,
} from '@masochist/lexer/src/internal';
import {describe, expect, it} from 'bun:test';

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

import type {NFA} from '@masochist/lexer/src/internal';

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
