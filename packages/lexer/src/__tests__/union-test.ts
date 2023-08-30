import {beforeAll, describe, expect, it} from '@jest/globals';
import {print} from '@masochist/codegen';

import Token from '../Token';
import build from '../build';
import {
  AMPERSAND,
  AT,
  BANG,
  BAR,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PAREN,
  COLON,
  DOLLAR,
  ELLIPSIS,
  EQUALS,
  NAME,
  ON,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
} from '../definition';
import {getLexer} from './helper';
import ignore from '../ignore';
import union from '../union';

describe('union()', () => {
  let lex: (input: string) => Generator<Token, void, unknown>;

  beforeAll(() => {
    lex = getLexer();
  });

  it('creates a machine with a number of distinct accept states', () => {
    const table = union(
      // Punctuators.
      {
        AMPERSAND,
        AT,
        BANG,
        BAR,
        CLOSING_BRACE,
        CLOSING_BRACKET,
        CLOSING_PAREN,
        COLON,
        DOLLAR,
        ELLIPSIS,
        EQUALS,
        OPENING_BRACE,
        OPENING_BRACKET,
        OPENING_PAREN,

        // TODO: strings and numbers too

        // Other Lexical tokens.
        NAME,
      },
    );

    expect(table).toEqual({
      acceptStates: new Set([
        1, 2, 3, 4, 5, 17, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:!', new Set([1])],
          ['Atom:$', new Set([2])],
          ['Atom:&', new Set([3])],
          ['Atom:(', new Set([4])],
          ['Atom:)', new Set([5])],
          ['Atom:.', new Set([6])],
          ['Atom::', new Set([7])],
          ['Atom:=', new Set([8])],
          ['Atom:@', new Set([9])],
          ['Range:A-Z', new Set([10])],
          ['Atom:[', new Set([11])],
          ['Atom:]', new Set([12])],
          ['Atom:_', new Set([10])],
          ['Range:a-z', new Set([10])],
          ['Atom:{', new Set([13])],
          ['Atom:|', new Set([14])],
          ['Atom:}', new Set([15])],
        ]),
        /* 1 */ new Map(),
        /* 2 */ new Map(),
        /* 3 */ new Map(),
        /* 4 */ new Map(),
        /* 5 */ new Map(),
        /* 6 */ new Map([['Atom:.', new Set([16])]]),
        /* 7 */ new Map(),
        /* 8 */ new Map(),
        /* 9 */ new Map(),
        /* 10 */ new Map([
          ['Range:0-9', new Set([10])],
          ['Range:A-Z', new Set([10])],
          ['Atom:_', new Set([10])],
          ['Range:a-z', new Set([10])],
        ]),
        /* 11 */ new Map(),
        /* 12 */ new Map(),
        /* 13 */ new Map(),
        /* 14 */ new Map(),
        /* 15 */ new Map(),
        /* 16 */ new Map([['Atom:.', new Set([17])]]),
        /* 17 */ new Map(),
      ],
      labels: [
        /* 0 */ undefined,
        /* 1 */ new Set(['BANG']),
        /* 2 */ new Set(['DOLLAR']),
        /* 3 */ new Set(['AMPERSAND']),
        /* 4 */ new Set(['OPENING_PAREN']),
        /* 5 */ new Set(['CLOSING_PAREN']),
        /* 6 */ undefined,
        /* 7 */ new Set(['COLON']),
        /* 8 */ new Set(['EQUALS']),
        /* 9 */ new Set(['AT']),
        /* 10 */ new Set(['NAME']),
        /* 11 */ new Set(['OPENING_BRACKET']),
        /* 12 */ new Set(['CLOSING_BRACKET']),
        /* 13 */ new Set(['OPENING_BRACE']),
        /* 14 */ new Set(['BAR']),
        /* 15 */ new Set(['CLOSING_BRACE']),
        /* 16 */ undefined,
        /* 17 */ new Set(['ELLIPSIS']),
      ],
    });
  });

  it('creates a machine that accepts NAME or ON', () => {
    const table = union({ON, NAME});
    expect(table).toEqual({
      acceptStates: new Set([1, 2, 3]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-n', new Set([1])],
          ['Atom:o', new Set([2])],
          ['Range:p-z', new Set([1])],
        ]),
        /* 1 */ new Map([
          ['Range:0-9', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-z', new Set([1])],
        ]),
        /* 2 */ new Map([
          ['Range:0-9', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-m', new Set([1])],
          ['Atom:n', new Set([3])],
          ['Range:o-z', new Set([1])],
        ]),
        /* 3 */ new Map([
          ['Range:0-9', new Set([1])],
          ['Range:A-Z', new Set([1])],
          ['Atom:_', new Set([1])],
          ['Range:a-z', new Set([1])],
        ]),
      ],
      labels: [
        /* 0 */ undefined,
        /* 1 */ new Set(['NAME']),
        /* 2 */ new Set(['NAME']),
        /* 3 */ new Set(['ON', 'NAME']),
      ],
    });

    // Note that we want to prefer the longest match, in the event that an
    // accept state could produce either token (eg. state 3).
    expect(Array.from(table.labels?.[3]!)).toEqual(['ON', 'NAME']);

    // Sneakily proving the above (transitively) by using lexer:
    let input = 'no on';
    let tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('NAME', 0, 2, input),
      new Token('ON', 3, 5, input),
    ]);

    input = 'onwards on';
    tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('NAME', 0, 7, input),
      new Token('ON', 8, 10, input),
    ]);
  });

  it('prefers greedy matches', () => {
    const table = union({
      ASSIGN: '=',
      EQUALS: '==',
      STRICT_EQUALS: '===',
      IGNORED: ignore(/ /),
    });

    const input = '= == ===';

    expect([...getLexer(table)(input)]).toEqual([
      new Token('ASSIGN', 0, 1, input),
      new Token('EQUALS', 2, 4, input),
      new Token('STRICT_EQUALS', 5, 8, input),
    ]);

    // Visual inspection of the generated lexer shows why this works.
    expect(print(build(table))).toMatchInlineSnapshot(`
      "/**
       * vim: set nomodifiable : DO NOT EDIT - edit "build.ts" instead
       *
       * @generated
       */
      import {Token} from '@masochist/lexer';
      const REJECT = -1;
      const START = 0;
      export class Lexer {
        input: string;
        state: number;
        tokenStart: number;
        index: number;

        /**
         * @param {string} input
         */
        constructor(input: string) {
          this.input = input;
          this.state = START;
          this.tokenStart = 0;
          this.index = 0;
        }

        /**
         * @param {string} name
         * @param {number} end
         * @param {string} input
         */
        emit(name: string, end: number, input: string) {
          const token = new Token(name, this.tokenStart, end, input);
          this.tokenStart = end;
          this.index = end;
          return token;
        }

        next() {
          const input = this.input;
          const length = input.length;
          while (this.index <= length) {
            const state = this.state;
            let ch = this.index < length ? input.charCodeAt(this.index) : -1;
            if (state === START) {
              if (ch === 0x20) {
                // IGNORED token.
                this.index = this.index + 1;
                this.tokenStart = this.index;
                continue;
              } else if (ch === 0x3d) {
                this.state = 2;
              } else {
                this.state = REJECT;
              }
            } else if (state === 2) {
              if (ch === 0x3d) {
                this.state = 3;
              } else {
                this.state = START;
                return this.emit('ASSIGN', this.index, input);
              }
            } else if (state === 3) {
              if (ch === 0x3d) {
                this.state = START;
                return this.emit('STRICT_EQUALS', this.index + 1, input);
              } else {
                this.state = START;
                return this.emit('EQUALS', this.index, input);
              }
            } else if (state === REJECT) {
              throw new Error('Failed to recognize token');
            } else {
              throw new Error('Unexpected state');
            }
            this.index++;
          }
          return null;
        }
      }
      /**
       * @param {string} input
       * @returns {Generator<Token, void, unknown>}
       */
      export default function *lex(input: string) {
        const lexer = new Lexer(input);
        while (true) {
          const token = lexer.next();
          if (token === null) {
            return;
          } else {
            yield token;
          }
        }
      }
      "
    `);
  });
});
