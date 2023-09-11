import {getParser} from '@masochist/parser/src/internal';
import {beforeAll, describe, expect, it} from 'bun:test';

import lexer from '../lexer';
import {grammar, table} from '../statement';

describe('parseStatement()', () => {
  let parseStatement: ReturnType<typeof getParser>;

  beforeAll(() => {
    parseStatement = getParser(grammar, table, lexer);
  });

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
