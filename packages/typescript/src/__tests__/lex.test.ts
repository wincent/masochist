import {getLexer} from '@masochist/lexer/src/internal';
import {beforeAll, describe, expect, it} from 'bun:test';

import table from '../lexer';

type Tokenish = {
  name: string;
  start: number;
  end: number;
  contents: string;
};

describe('lex()', () => {
  let lex: Awaited<ReturnType<typeof getLexer>>['lex'];

  beforeAll(async () => {
    lex = (await getLexer(table)).lex;
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
    expect(lexAll('let itGo')).toEqual([{
      name: 'LET',
      start: 0,
      end: 3,
      contents: 'let',
    }, {
      name: 'IDENTIFIER',
      start: 4,
      end: 8,
      contents: 'itGo',
    }]);
  });

  // TODO: write more test here

  describe('test inputs from parseStatement.test.ts', () => {
    it('lexes `const isFoo = true;`', () => {
      expect(lexAll('const isFoo = true;')).toEqual([{
        name: 'CONST',
        start: 0,
        end: 5,
        contents: 'const',
      }, {
        name: 'IDENTIFIER',
        start: 6,
        end: 11,
        contents: 'isFoo',
      }, {
        name: 'ASSIGN',
        start: 12,
        end: 13,
        contents: '=',
      }, {
        name: 'TRUE',
        start: 14,
        end: 18,
        contents: 'true',
      }, {
        name: 'SEMICOLON',
        start: 18,
        end: 19,
        contents: ';',
      }]);
    });

    it('lexes `let isFoo = false;`', () => {
      expect(lexAll('let isFoo = false;')).toEqual([{
        name: 'LET',
        start: 0,
        end: 3,
        contents: 'let',
      }, {
        name: 'IDENTIFIER',
        start: 4,
        end: 9,
        contents: 'isFoo',
      }, {
        name: 'ASSIGN',
        start: 10,
        end: 11,
        contents: '=',
      }, {
        name: 'FALSE',
        start: 12,
        end: 17,
        contents: 'false',
      }, {
        name: 'SEMICOLON',
        start: 17,
        end: 18,
        contents: ';',
      }]);
    });

    it('lexes `const fooCount = 1;`', () => {
      expect(lexAll('const fooCount = 1;')).toEqual([{
        name: 'CONST',
        start: 0,
        end: 5,
        contents: 'const',
      }, {
        name: 'IDENTIFIER',
        start: 6,
        end: 14,
        contents: 'fooCount',
      }, {
        name: 'ASSIGN',
        start: 15,
        end: 16,
        contents: '=',
      }, {
        name: 'NUMBER',
        start: 17,
        end: 18,
        contents: '1',
      }, {
        name: 'SEMICOLON',
        start: 18,
        end: 19,
        contents: ';',
      }]);
    });

    it('lexes `let fooCount = 2;`', () => {
      expect(lexAll('let fooCount = 2;')).toEqual([{
        name: 'LET',
        start: 0,
        end: 3,
        contents: 'let',
      }, {
        name: 'IDENTIFIER',
        start: 4,
        end: 12,
        contents: 'fooCount',
      }, {
        name: 'ASSIGN',
        start: 13,
        end: 14,
        contents: '=',
      }, {
        name: 'NUMBER',
        start: 15,
        end: 16,
        contents: '2',
      }, {
        name: 'SEMICOLON',
        start: 16,
        end: 17,
        contents: ';',
      }]);
    });

    it('lexes a const nested array assignment', () => {
      expect(lexAll('const stack = [[null, 0]];')).toEqual([{
        name: 'CONST',
        start: 0,
        end: 5,
        contents: 'const',
      }, {
        name: 'IDENTIFIER',
        start: 6,
        end: 11,
        contents: 'stack',
      }, {
        name: 'ASSIGN',
        start: 12,
        end: 13,
        contents: '=',
      }, {
        name: 'OPENING_BRACKET',
        start: 14,
        end: 15,
        contents: '[',
      }, {
        name: 'OPENING_BRACKET',
        start: 15,
        end: 16,
        contents: '[',
      }, {
        name: 'NULL',
        start: 16,
        end: 20,
        contents: 'null',
      }, {
        name: 'COMMA',
        start: 20,
        end: 21,
        contents: ',',
      }, {
        name: 'NUMBER',
        start: 22,
        end: 23,
        contents: '0',
      }, {
        name: 'CLOSING_BRACKET',
        start: 23,
        end: 24,
        contents: ']',
      }, {
        name: 'CLOSING_BRACKET',
        start: 24,
        end: 25,
        contents: ']',
      }, {
        name: 'SEMICOLON',
        start: 25,
        end: 26,
        contents: ';',
      }]);
    });

    it('lexes a (default) export class declaration', () => {
      expect(
        lexAll(`
          export default class Token {
            name: string;
            start: number;
            end: number;
            source: string;

            constructor(name: string, start: number, end: number, source: string) {
              // No validation, for speed; we trust the generated lexer to be flawless.
              this.name = name;
              this.start = start;
              this.end = end;
              this.source = source;
            }
          }
        `),
      ).toEqual([{
        contents: 'export',
        end: 17,
        name: 'EXPORT',
        start: 11,
      }, {
        contents: 'default',
        end: 25,
        name: 'DEFAULT',
        start: 18,
      }, {
        contents: 'class',
        end: 31,
        name: 'CLASS',
        start: 26,
      }, {
        contents: 'Token',
        end: 37,
        name: 'IDENTIFIER',
        start: 32,
      }, {
        contents: '{',
        end: 39,
        name: 'OPENING_BRACE',
        start: 38,
      }, {
        contents: 'name',
        end: 56,
        name: 'IDENTIFIER',
        start: 52,
      }, {
        contents: ':',
        end: 57,
        name: 'COLON',
        start: 56,
      }, {
        contents: 'string',
        end: 64,
        name: 'IDENTIFIER',
        start: 58,
      }, {
        contents: ';',
        end: 65,
        name: 'SEMICOLON',
        start: 64,
      }, {
        contents: 'start',
        end: 83,
        name: 'IDENTIFIER',
        start: 78,
      }, {
        contents: ':',
        end: 84,
        name: 'COLON',
        start: 83,
      }, {
        contents: 'number',
        end: 91,
        name: 'IDENTIFIER',
        start: 85,
      }, {
        contents: ';',
        end: 92,
        name: 'SEMICOLON',
        start: 91,
      }, {
        contents: 'end',
        end: 108,
        name: 'IDENTIFIER',
        start: 105,
      }, {
        contents: ':',
        end: 109,
        name: 'COLON',
        start: 108,
      }, {
        contents: 'number',
        end: 116,
        name: 'IDENTIFIER',
        start: 110,
      }, {
        contents: ';',
        end: 117,
        name: 'SEMICOLON',
        start: 116,
      }, {
        contents: 'source',
        end: 136,
        name: 'IDENTIFIER',
        start: 130,
      }, {
        contents: ':',
        end: 137,
        name: 'COLON',
        start: 136,
      }, {
        contents: 'string',
        end: 144,
        name: 'IDENTIFIER',
        start: 138,
      }, {
        contents: ';',
        end: 145,
        name: 'SEMICOLON',
        start: 144,
      }, {
        contents: 'constructor',
        end: 170,
        name: 'IDENTIFIER',
        start: 159,
      }, {
        contents: '(',
        end: 171,
        name: 'OPENING_PAREN',
        start: 170,
      }, {
        contents: 'name',
        end: 175,
        name: 'IDENTIFIER',
        start: 171,
      }, {
        contents: ':',
        end: 176,
        name: 'COLON',
        start: 175,
      }, {
        contents: 'string',
        end: 183,
        name: 'IDENTIFIER',
        start: 177,
      }, {
        contents: ',',
        end: 184,
        name: 'COMMA',
        start: 183,
      }, {
        contents: 'start',
        end: 190,
        name: 'IDENTIFIER',
        start: 185,
      }, {
        contents: ':',
        end: 191,
        name: 'COLON',
        start: 190,
      }, {
        contents: 'number',
        end: 198,
        name: 'IDENTIFIER',
        start: 192,
      }, {
        contents: ',',
        end: 199,
        name: 'COMMA',
        start: 198,
      }, {
        contents: 'end',
        end: 203,
        name: 'IDENTIFIER',
        start: 200,
      }, {
        contents: ':',
        end: 204,
        name: 'COLON',
        start: 203,
      }, {
        contents: 'number',
        end: 211,
        name: 'IDENTIFIER',
        start: 205,
      }, {
        contents: ',',
        end: 212,
        name: 'COMMA',
        start: 211,
      }, {
        contents: 'source',
        end: 219,
        name: 'IDENTIFIER',
        start: 213,
      }, {
        contents: ':',
        end: 220,
        name: 'COLON',
        start: 219,
      }, {
        contents: 'string',
        end: 227,
        name: 'IDENTIFIER',
        start: 221,
      }, {
        contents: ')',
        end: 228,
        name: 'CLOSING_PAREN',
        start: 227,
      }, {
        contents: '{',
        end: 230,
        name: 'OPENING_BRACE',
        start: 229,
      }, {
        contents: 'this',
        end: 337,
        name: 'THIS',
        start: 333,
      }, {
        contents: '.',
        end: 338,
        name: 'DOT',
        start: 337,
      }, {
        contents: 'name',
        end: 342,
        name: 'IDENTIFIER',
        start: 338,
      }, {
        contents: '=',
        end: 344,
        name: 'ASSIGN',
        start: 343,
      }, {
        contents: 'name',
        end: 349,
        name: 'IDENTIFIER',
        start: 345,
      }, {
        contents: ';',
        end: 350,
        name: 'SEMICOLON',
        start: 349,
      }, {
        contents: 'this',
        end: 369,
        name: 'THIS',
        start: 365,
      }, {
        contents: '.',
        end: 370,
        name: 'DOT',
        start: 369,
      }, {
        contents: 'start',
        end: 375,
        name: 'IDENTIFIER',
        start: 370,
      }, {
        contents: '=',
        end: 377,
        name: 'ASSIGN',
        start: 376,
      }, {
        contents: 'start',
        end: 383,
        name: 'IDENTIFIER',
        start: 378,
      }, {
        contents: ';',
        end: 384,
        name: 'SEMICOLON',
        start: 383,
      }, {
        contents: 'this',
        end: 403,
        name: 'THIS',
        start: 399,
      }, {
        contents: '.',
        end: 404,
        name: 'DOT',
        start: 403,
      }, {
        contents: 'end',
        end: 407,
        name: 'IDENTIFIER',
        start: 404,
      }, {
        contents: '=',
        end: 409,
        name: 'ASSIGN',
        start: 408,
      }, {
        contents: 'end',
        end: 413,
        name: 'IDENTIFIER',
        start: 410,
      }, {
        contents: ';',
        end: 414,
        name: 'SEMICOLON',
        start: 413,
      }, {
        contents: 'this',
        end: 433,
        name: 'THIS',
        start: 429,
      }, {
        contents: '.',
        end: 434,
        name: 'DOT',
        start: 433,
      }, {
        contents: 'source',
        end: 440,
        name: 'IDENTIFIER',
        start: 434,
      }, {
        contents: '=',
        end: 442,
        name: 'ASSIGN',
        start: 441,
      }, {
        contents: 'source',
        end: 449,
        name: 'IDENTIFIER',
        start: 443,
      }, {
        contents: ';',
        end: 450,
        name: 'SEMICOLON',
        start: 449,
      }, {
        contents: '}',
        end: 464,
        name: 'CLOSING_BRACE',
        start: 463,
      }, {
        contents: '}',
        end: 476,
        name: 'CLOSING_BRACE',
        start: 475,
      }]);
    });
  });
});
