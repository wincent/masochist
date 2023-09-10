import {describe, expect, it} from 'bun:test';

// TODO: once parser has stabilized, do same thing we do in lex.test.ts and run
// tests against what _would_ be written to disk as opposed to just importing
// built artifact.
import parseStatement from '../parseStatement';

describe('parseStatement()', () => {
  it('parses a const boolean assignment statement', () => {
    const input = 'const isFoo = true;';
    expect(parseStatement(input)).toMatchSnapshot();
  });

  it('parses a let boolean assignment statement', () => {
    const input = 'let isFoo = false;';
    expect(parseStatement(input)).toMatchSnapshot();
  });

  it('parses a const number assignment statement', () => {
    const input = 'const isFoo = 1;';
    expect(parseStatement(input)).toMatchSnapshot();
  });

  it('parses a let number assignment statement', () => {
    const input = 'let isFoo = 2;';
    expect(parseStatement(input)).toMatchSnapshot();
  });
});
