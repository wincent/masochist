import {getLexer} from '@masochist/lexer';
import {beforeAll, describe, expect, it} from 'bun:test';

import table from '../lexer';

import type {Token} from '@masochist/lexer';

type Tokenish = {
  name: string;
  start: number;
  end: number;
  contents: string;
};

describe('lex()', () => {
  let lex: (input: string) => Generator<Token, void, unknown>;

  beforeAll(() => {
    lex = getLexer(table);
  });

  function lexOne(input: string): Tokenish {
    const token = [...lex(input)][0];
    if (!token) {
      throw new Error('lexOne(): Failed to lex token');
    }
    return {
      name: token.name,
      start: token.start,
      end: token.end,
      contents: token.contents,
    };
  }

  function lexAll(input: string): Array<Tokenish> {
    const tokens = [...lex(input)];
    return tokens.map((token) => ({
      name: token.name,
      start: token.start,
      end: token.end,
      contents: token.contents,
    }));
  }

  it('lexes a const keyword', () => {
    expect(lexOne('const')).toEqual({
      name: 'CONST',
      start: 0,
      end: 5,
      contents: 'const',
    });
  });

  it('lexes an identifier', () => {
    expect(lexOne('foo')).toEqual({
      name: 'IDENTIFIER',
      start: 0,
      end: 3,
      contents: 'foo',
    });
  });

  it('lexes a let keyword', () => {
    expect(lexOne('let')).toEqual({
      name: 'LET',
      start: 0,
      end: 3,
      contents: 'let',
    });
  });

  it('skips whitespace', () => {
    expect(lexAll('let itGo')).toEqual([
      {
        name: 'LET',
        start: 0,
        end: 3,
        contents: 'let',
      },
      {
        name: 'IDENTIFIER',
        start: 4,
        end: 8,
        contents: 'itGo',
      },
    ]);
  });

  // TODO: write more test here

  describe('test inputs from parseStatement.test.ts', () => {
    it('lexes `const isFoo = true;`', () => {
      expect(lexAll('const isFoo = true;')).toEqual([
        {
          name: 'CONST',
          start: 0,
          end: 5,
          contents: 'const',
        },
        {
          name: 'IDENTIFIER',
          start: 6,
          end: 11,
          contents: 'isFoo',
        },
        {
          name: 'ASSIGN',
          start: 12,
          end: 13,
          contents: '=',
        },
        {
          name: 'TRUE',
          start: 14,
          end: 18,
          contents: 'true',
        },
        {
          name: 'SEMICOLON',
          start: 18,
          end: 19,
          contents: ';',
        },
      ]);
    });

    it('lexes `let isFoo = false;`', () => {
      expect(lexAll('let isFoo = false;')).toEqual([
        {
          name: 'LET',
          start: 0,
          end: 3,
          contents: 'let',
        },
        {
          name: 'IDENTIFIER',
          start: 4,
          end: 9,
          contents: 'isFoo',
        },
        {
          name: 'ASSIGN',
          start: 10,
          end: 11,
          contents: '=',
        },
        {
          name: 'FALSE',
          start: 12,
          end: 17,
          contents: 'false',
        },
        {
          name: 'SEMICOLON',
          start: 17,
          end: 18,
          contents: ';',
        },
      ]);
    });

    it('lexes `const fooCount = 1;`', () => {
      expect(lexAll('const fooCount = 1;')).toEqual([
        {
          name: 'CONST',
          start: 0,
          end: 5,
          contents: 'const',
        },
        {
          name: 'IDENTIFIER',
          start: 6,
          end: 14,
          contents: 'fooCount',
        },
        {
          name: 'ASSIGN',
          start: 15,
          end: 16,
          contents: '=',
        },
        {
          name: 'NUMBER',
          start: 17,
          end: 18,
          contents: '1',
        },
        {
          name: 'SEMICOLON',
          start: 18,
          end: 19,
          contents: ';',
        },
      ]);
    });

    it('lexes `let fooCount = 2;`', () => {
      expect(lexAll('let fooCount = 2;')).toEqual([
        {
          name: 'LET',
          start: 0,
          end: 3,
          contents: 'let',
        },
        {
          name: 'IDENTIFIER',
          start: 4,
          end: 12,
          contents: 'fooCount',
        },
        {
          name: 'ASSIGN',
          start: 13,
          end: 14,
          contents: '=',
        },
        {
          name: 'NUMBER',
          start: 15,
          end: 16,
          contents: '2',
        },
        {
          name: 'SEMICOLON',
          start: 16,
          end: 17,
          contents: ';',
        },
      ]);
    });
  });
});
