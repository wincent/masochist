import {print} from '@masochist/codegen';
import {dedent} from '@masochist/common';

import build from '../build';
import definition from '../definition';

describe('build()', () => {
  it('builds an AST', () => {
    const ast = build(definition);
    expect(print(ast)).toBe(
      dedent`
        import Token from './Token';
        export default function *lex(input: string) {
          const REJECT = -1;
          const START = 0;
          let state = START;
          let tokenStart = 0;
          let i = tokenStart;
          loop: while (i <= input.length) {
            const ch = input.charCodeAt(i);
            switch (state) {
              case START:
                if (ch === 0x09 || ch === 0x20) {
                  state = 1;
                } else if (ch === 0x0a || ch === 0x2c || ch === 0xfeff) {
                  state = 2;
                } else if (ch === 0x0d) {
                  state = 3;
                } else if (ch === 0x21) {
                  yield new Token('BANG', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x22) {
                  state = 5;
                } else if (ch === 0x23) {
                  state = 6;
                } else if (ch === 0x24) {
                  yield new Token('DOLLAR', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x26) {
                  yield new Token('AMPERSAND', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x28) {
                  yield new Token('OPENING_PAREN', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x29) {
                  yield new Token('CLOSING_PAREN', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x2d) {
                  state = 11;
                } else if (ch === 0x2e) {
                  state = 12;
                } else if (ch === 0x30) {
                  state = 13;
                } else if (ch >= 0x31 && ch <= 0x39) {
                  state = 14;
                } else if (ch === 0x3a) {
                  yield new Token('COLON', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x3d) {
                  yield new Token('EQUALS', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x40) {
                  yield new Token('AT', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a) {
                  state = 18;
                } else if (ch === 0x5b) {
                  yield new Token('OPENING_BRACKET', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x5d) {
                  yield new Token('CLOSING_BRACKET', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x6f) {
                  state = 21;
                } else if (ch === 0x7b) {
                  yield new Token('OPENING_BRACE', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x7c) {
                  yield new Token('BAR', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else if (ch === 0x7d) {
                  yield new Token('CLOSING_BRACE', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else {
                  state = REJECT;
                }
                break;
              case 1:
                if (ch === 0x09 || ch === 0x20) {
                  state = 1;
                } else {
                  // IGNORED token.
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 2:
                // IGNORED token.
                tokenStart = i;
                state = START;
                continue loop;
              case 3:
                if (ch === 0x0a) {
                  state = 2;
                } else {
                  // IGNORED token.
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 5:
                if (ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 25;
                } else if (ch === 0x22) {
                  state = 26;
                } else if (ch === 0x5c) {
                  state = 27;
                } else {
                  state = REJECT;
                }
                break;
              case 6:
                if (ch === 0x09 || ch >= 0x20 && ch <= 0xffff) {
                  state = 6;
                } else {
                  // IGNORED token.
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 11:
                if (ch === 0x30) {
                  state = 13;
                } else if (ch >= 0x31 && ch <= 0x39) {
                  state = 14;
                } else {
                  state = REJECT;
                }
                break;
              case 12:
                if (ch === 0x2e) {
                  state = 28;
                } else {
                  state = REJECT;
                }
                break;
              case 13:
                if (ch === 0x2e) {
                  state = 29;
                } else if (ch === 0x45 || ch === 0x65) {
                  state = 30;
                } else {
                  yield new Token('NUMBER', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 14:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 14;
                } else if (ch === 0x2e) {
                  state = 29;
                } else if (ch === 0x45 || ch === 0x65) {
                  state = 30;
                } else {
                  yield new Token('NUMBER', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 18:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                  state = 18;
                } else {
                  yield new Token('NAME', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 21:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a) {
                  state = 18;
                } else if (ch === 0x6e) {
                  state = 31;
                } else {
                  yield new Token('NAME', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 25:
                if (ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 25;
                } else if (ch === 0x5c) {
                  state = 27;
                } else if (ch === 0x22) {
                  yield new Token('STRING_VALUE', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else {
                  state = REJECT;
                }
                break;
              case 26:
                if (ch === 0x22) {
                  state = 33;
                } else {
                  yield new Token('STRING_VALUE', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 27:
                if (ch === 0x22 || ch === 0x2f || ch === 0x62 || ch === 0x66 || ch === 0x6e || ch === 0x72 || ch === 0x74) {
                  state = 25;
                } else if (ch === 0x5c) {
                  state = 34;
                } else if (ch === 0x75) {
                  state = 35;
                } else {
                  state = REJECT;
                }
                break;
              case 28:
                if (ch === 0x2e) {
                  yield new Token('ELLIPSIS', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else {
                  state = REJECT;
                }
                break;
              case 29:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 37;
                } else {
                  state = REJECT;
                }
                break;
              case 30:
                if (ch === 0x2b || ch === 0x2d) {
                  state = 38;
                } else if (ch >= 0x30 && ch <= 0x39) {
                  state = 39;
                } else {
                  state = REJECT;
                }
                break;
              case 31:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                  state = 18;
                } else {
                  yield new Token('ON', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 33:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 33;
                } else if (ch === 0x22) {
                  state = 40;
                } else if (ch === 0x5c) {
                  state = 41;
                } else {
                  state = REJECT;
                }
                break;
              case 34:
                if (ch === 0x2f || ch === 0x62 || ch === 0x66 || ch === 0x6e || ch === 0x72 || ch === 0x74) {
                  state = 25;
                } else if (ch === 0x5c) {
                  state = 34;
                } else if (ch === 0x75) {
                  state = 35;
                } else {
                  state = REJECT;
                }
                break;
              case 35:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 42;
                } else {
                  state = REJECT;
                }
                break;
              case 37:
                if (ch === 0x45 || ch === 0x65) {
                  state = 30;
                } else if (ch >= 0x30 && ch <= 0x39) {
                  state = 37;
                } else {
                  yield new Token('NUMBER', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 38:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 39;
                } else {
                  state = REJECT;
                }
                break;
              case 39:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 39;
                } else {
                  yield new Token('NUMBER', tokenStart, i, input);
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 40:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 33;
                } else if (ch === 0x5c) {
                  state = 41;
                } else if (ch === 0x22) {
                  state = 43;
                } else {
                  state = REJECT;
                }
                break;
              case 41:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 33;
                } else if (ch === 0x5c) {
                  state = 41;
                } else if (ch === 0x22) {
                  state = 44;
                } else {
                  state = REJECT;
                }
                break;
              case 42:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 45;
                } else {
                  state = REJECT;
                }
                break;
              case 43:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 33;
                } else if (ch === 0x5c) {
                  state = 41;
                } else if (ch === 0x22) {
                  yield new Token('BLOCK_STRING_VALUE', tokenStart, i + 1, input);
                  tokenStart = i + 1;
                  state = START;
                } else {
                  state = REJECT;
                }
                break;
              case 44:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 33;
                } else if (ch === 0x5c) {
                  state = 41;
                } else if (ch === 0x22) {
                  state = 47;
                } else {
                  state = REJECT;
                }
                break;
              case 45:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 48;
                } else {
                  state = REJECT;
                }
                break;
              case 47:
                if (ch === 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 33;
                } else if (ch === 0x5c) {
                  state = 41;
                } else {
                  state = REJECT;
                }
                break;
              case 48:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 25;
                } else {
                  state = REJECT;
                }
                break;
              case REJECT:
                throw new Error('Failed to recognize token');
              default:
                throw new Error('Unexpected state');
            }
            i++;
          }
        }
      ` + '\n',
    );
  });
});
