// These tests used to live in `@masochist/lexer`, where `removeEpsilons` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {
  compileRegExp,
  regExpToNFA,
  removeEpsilons,
  visitNFA,
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
  NUMBER,
  SOURCE_CHARACTER,
  WHITESPACE,
} from '../../lexer';

import type {NFA} from '@masochist/lexer/src/internal';

describe('removeEpsilons()', () => {
  it('ensures no epsilons in ESCAPED_CHARACTER', () => {
    expect(
      countEpsilons(
        removeEpsilons(regExpToNFA(compileRegExp(ESCAPED_CHARACTER))),
      ),
    ).toBe(0);
  });

  it('ensures no epsilons in ESCAPED_UNICODE', () => {
    expect(
      countEpsilons(
        removeEpsilons(regExpToNFA(compileRegExp(ESCAPED_UNICODE))),
      ),
    ).toBe(0);
  });

  it('ensures no epsilons in EXPONENT_PART', () => {
    expect(
      countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(EXPONENT_PART)))),
    ).toBe(0);
  });

  it('ensures no epsilons in FRACTIONAL_PART', () => {
    expect(
      countEpsilons(
        removeEpsilons(regExpToNFA(compileRegExp(FRACTIONAL_PART))),
      ),
    ).toBe(0);
  });

  it('ensures no epsilons in INTEGER_PART', () => {
    expect(
      countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(INTEGER_PART)))),
    ).toBe(0);
  });

  it('ensures no epsilons in LINE_TERMINATOR', () => {
    expect(
      countEpsilons(
        removeEpsilons(regExpToNFA(compileRegExp(LINE_TERMINATOR))),
      ),
    ).toBe(0);
  });

  it('ensures no epsilons in NAME', () => {
    expect(
      countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(NAME)))),
    ).toBe(0);
  });

  it('ensures no epsilons in NUMBER', () => {
    expect(
      countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(NUMBER)))),
    ).toBe(0);
  });

  it('ensures no epsilons in SOURCE_CHARACTER', () => {
    expect(
      countEpsilons(
        removeEpsilons(regExpToNFA(compileRegExp(SOURCE_CHARACTER))),
      ),
    ).toBe(0);
  });

  it('ensures no epsilons in WHITESPACE', () => {
    expect(
      countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(WHITESPACE)))),
    ).toBe(0);
  });
});

function countEpsilons(nfa: NFA): number {
  let count = 0;

  visitNFA(nfa, ({edges}) => {
    edges.forEach(({on}) => {
      if (on === null) {
        count++;
      }
    });
  });

  return count;
}
