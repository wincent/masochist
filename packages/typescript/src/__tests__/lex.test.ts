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

    expect(lexOne('$foo')).toEqual({
      name: 'IDENTIFIER',
      start: 0,
      end: 4,
      contents: '$foo',
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
        name: 'EXPORT',
        start: 11,
        end: 17,
        contents: 'export',
      }, {
        name: 'DEFAULT',
        start: 18,
        end: 25,
        contents: 'default',
      }, {
        name: 'CLASS',
        start: 26,
        end: 31,
        contents: 'class',
      }, {
        name: 'IDENTIFIER',
        start: 32,
        end: 37,
        contents: 'Token',
      }, {
        name: 'OPENING_BRACE',
        start: 38,
        end: 39,
        contents: '{',
      }, {
        name: 'IDENTIFIER',
        start: 52,
        end: 56,
        contents: 'name',
      }, {
        name: 'COLON',
        start: 56,
        end: 57,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 58,
        end: 64,
        contents: 'string',
      }, {
        name: 'SEMICOLON',
        start: 64,
        end: 65,
        contents: ';',
      }, {
        name: 'IDENTIFIER',
        start: 78,
        end: 83,
        contents: 'start',
      }, {
        name: 'COLON',
        start: 83,
        end: 84,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 85,
        end: 91,
        contents: 'number',
      }, {
        name: 'SEMICOLON',
        start: 91,
        end: 92,
        contents: ';',
      }, {
        name: 'IDENTIFIER',
        start: 105,
        end: 108,
        contents: 'end',
      }, {
        name: 'COLON',
        start: 108,
        end: 109,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 110,
        end: 116,
        contents: 'number',
      }, {
        name: 'SEMICOLON',
        start: 116,
        end: 117,
        contents: ';',
      }, {
        name: 'IDENTIFIER',
        start: 130,
        end: 136,
        contents: 'source',
      }, {
        name: 'COLON',
        start: 136,
        end: 137,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 138,
        end: 144,
        contents: 'string',
      }, {
        name: 'SEMICOLON',
        start: 144,
        end: 145,
        contents: ';',
      }, {
        name: 'IDENTIFIER',
        start: 159,
        end: 170,
        contents: 'constructor',
      }, {
        name: 'OPENING_PAREN',
        start: 170,
        end: 171,
        contents: '(',
      }, {
        name: 'IDENTIFIER',
        start: 171,
        end: 175,
        contents: 'name',
      }, {
        name: 'COLON',
        start: 175,
        end: 176,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 177,
        end: 183,
        contents: 'string',
      }, {
        name: 'COMMA',
        start: 183,
        end: 184,
        contents: ',',
      }, {
        name: 'IDENTIFIER',
        start: 185,
        end: 190,
        contents: 'start',
      }, {
        name: 'COLON',
        start: 190,
        end: 191,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 192,
        end: 198,
        contents: 'number',
      }, {
        name: 'COMMA',
        start: 198,
        end: 199,
        contents: ',',
      }, {
        name: 'IDENTIFIER',
        start: 200,
        end: 203,
        contents: 'end',
      }, {
        name: 'COLON',
        start: 203,
        end: 204,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 205,
        end: 211,
        contents: 'number',
      }, {
        name: 'COMMA',
        start: 211,
        end: 212,
        contents: ',',
      }, {
        name: 'IDENTIFIER',
        start: 213,
        end: 219,
        contents: 'source',
      }, {
        name: 'COLON',
        start: 219,
        end: 220,
        contents: ':',
      }, {
        name: 'IDENTIFIER',
        start: 221,
        end: 227,
        contents: 'string',
      }, {
        name: 'CLOSING_PAREN',
        start: 227,
        end: 228,
        contents: ')',
      }, {
        name: 'OPENING_BRACE',
        start: 229,
        end: 230,
        contents: '{',
      }, {
        name: 'LINE_COMMENT',
        start: 245,
        end: 318,
        contents:
          '// No validation, for speed; we trust the generated lexer to be flawless.',
      }, {
        name: 'THIS',
        start: 333,
        end: 337,
        contents: 'this',
      }, {
        name: 'DOT',
        start: 337,
        end: 338,
        contents: '.',
      }, {
        name: 'IDENTIFIER',
        start: 338,
        end: 342,
        contents: 'name',
      }, {
        name: 'ASSIGN',
        start: 343,
        end: 344,
        contents: '=',
      }, {
        name: 'IDENTIFIER',
        start: 345,
        end: 349,
        contents: 'name',
      }, {
        name: 'SEMICOLON',
        start: 349,
        end: 350,
        contents: ';',
      }, {
        name: 'THIS',
        start: 365,
        end: 369,
        contents: 'this',
      }, {
        name: 'DOT',
        start: 369,
        end: 370,
        contents: '.',
      }, {
        name: 'IDENTIFIER',
        start: 370,
        end: 375,
        contents: 'start',
      }, {
        name: 'ASSIGN',
        start: 376,
        end: 377,
        contents: '=',
      }, {
        name: 'IDENTIFIER',
        start: 378,
        end: 383,
        contents: 'start',
      }, {
        name: 'SEMICOLON',
        start: 383,
        end: 384,
        contents: ';',
      }, {
        name: 'THIS',
        start: 399,
        end: 403,
        contents: 'this',
      }, {
        name: 'DOT',
        start: 403,
        end: 404,
        contents: '.',
      }, {
        name: 'IDENTIFIER',
        start: 404,
        end: 407,
        contents: 'end',
      }, {
        name: 'ASSIGN',
        start: 408,
        end: 409,
        contents: '=',
      }, {
        name: 'IDENTIFIER',
        start: 410,
        end: 413,
        contents: 'end',
      }, {
        name: 'SEMICOLON',
        start: 413,
        end: 414,
        contents: ';',
      }, {
        name: 'THIS',
        start: 429,
        end: 433,
        contents: 'this',
      }, {
        name: 'DOT',
        start: 433,
        end: 434,
        contents: '.',
      }, {
        name: 'IDENTIFIER',
        start: 434,
        end: 440,
        contents: 'source',
      }, {
        name: 'ASSIGN',
        start: 441,
        end: 442,
        contents: '=',
      }, {
        name: 'IDENTIFIER',
        start: 443,
        end: 449,
        contents: 'source',
      }, {
        name: 'SEMICOLON',
        start: 449,
        end: 450,
        contents: ';',
      }, {
        name: 'CLOSING_BRACE',
        start: 463,
        end: 464,
        contents: '}',
      }, {
        name: 'CLOSING_BRACE',
        start: 475,
        end: 476,
        contents: '}',
      }]);
    });
  });
});
