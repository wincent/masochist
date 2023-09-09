import {describe, expect, it} from 'bun:test';

// TODO: once parser has stabilized, do same thing we do in lex.test.ts and run
// tests against what _would_ be written to disk as opposed to just importing
// built artifact.
import parseExpression from '../parseExpression';

describe('parseExpression()', () => {
  it('parses a strict equality binary expression', () => {
    const input = 'foo === 1.5';
    expect(parseExpression(input)).toMatchSnapshot();
  });

  it('parses expressions using parentheses', () => {
    const input = '((foo) === (1.5))';
    expect(parseExpression(input)).toMatchSnapshot();
  });
});
