// These tests used to live in `@masochist/lexer`, where `RegExpParser` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {RegExpParser} from '@masochist/lexer/src/internal';
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

describe('RegExpParser', () => {
  it('matches ESCAPED_CHARACTER RegExp', () => {
    expect(new RegExpParser(ESCAPED_CHARACTER).parse()).toMatchSnapshot();
  });

  it('matches ESCAPED_UNICODE RegExp', () => {
    expect(new RegExpParser(ESCAPED_UNICODE).parse()).toMatchSnapshot();
  });

  it('matches EXPONENT_PART RegExp', () => {
    expect(new RegExpParser(EXPONENT_PART).parse()).toMatchSnapshot();
  });

  it('matches FRACTIONAL_PART RegExp', () => {
    expect(new RegExpParser(FRACTIONAL_PART).parse()).toMatchSnapshot();
  });

  it('matches INTEGER_PART RegExp', () => {
    expect(new RegExpParser(INTEGER_PART).parse()).toMatchSnapshot();
  });

  it('matches LINE_TERMINATOR RegExp', () => {
    expect(new RegExpParser(LINE_TERMINATOR).parse()).toMatchSnapshot();
  });

  it('matches NAME RegExp', () => {
    expect(new RegExpParser(NAME).parse()).toMatchSnapshot();
  });

  it('matches SOURCE_CHARACTER RegExp', () => {
    expect(new RegExpParser(SOURCE_CHARACTER).parse()).toMatchSnapshot();
  });

  it('matches WHITESPACE RegExp', () => {
    expect(new RegExpParser(WHITESPACE).parse()).toMatchSnapshot();
  });
});
