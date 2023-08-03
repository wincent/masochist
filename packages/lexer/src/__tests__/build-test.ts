import {print} from '@masochist/codegen';
import {dedent} from '@masochist/common';

import build from '../build';
import definition from '../definition';

describe('build()', () => {
  it('builds an AST', () => {
    const ast = build(definition);
    const build_ts = '`build.ts`';
    const make_lexer = '`make lexer`';
    expect(print(ast)).toBe(
      dedent`
        /**
         * vim: set nomodifiable : DO NOT EDIT - edit ${build_ts}, run ${make_lexer} instead
         *
         * @generated
         */
        import Token from './Token';
        const REJECT = -1;
        const START = 0;
        class Lexer {
          input: string;
          state: number;
          tokenStart: number;
          index: number;
          constructor(input: string) {
            this.input = input;
            this.state = START;
            this.tokenStart = 0;
            this.index = 0;
          }

          next() {
            while (this.index <= this.input.length) {
              const ch = this.index < this.input.length ? this.input.charCodeAt(this.index) : -1;
              switch (this.state) {
                case START:
                  if (ch === 0x09 || ch === 0x20) {
                    this.state = 1;
                  } else if (ch === 0x0a || ch === 0x2c || ch === 0xfeff) {
                    this.state = 2;
                  } else if (ch === 0x0d) {
                    this.state = 3;
                  } else if (ch === 0x21) {
                    const token = new Token('BANG', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x22) {
                    this.state = 5;
                  } else if (ch === 0x23) {
                    this.state = 6;
                  } else if (ch === 0x24) {
                    const token = new Token('DOLLAR', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x26) {
                    const token = new Token('AMPERSAND', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x28) {
                    const token = new Token('OPENING_PAREN', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x29) {
                    const token = new Token('CLOSING_PAREN', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x2d) {
                    this.state = 11;
                  } else if (ch === 0x2e) {
                    this.state = 12;
                  } else if (ch === 0x30) {
                    this.state = 13;
                  } else if (ch >= 0x31 && ch <= 0x39) {
                    this.state = 14;
                  } else if (ch === 0x3a) {
                    const token = new Token('COLON', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x3d) {
                    const token = new Token('EQUALS', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x40) {
                    const token = new Token('AT', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x65 || ch >= 0x67 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x5b) {
                    const token = new Token('OPENING_BRACKET', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x5d) {
                    const token = new Token('CLOSING_BRACKET', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x66) {
                    this.state = 21;
                  } else if (ch === 0x6f) {
                    this.state = 22;
                  } else if (ch === 0x7b) {
                    const token = new Token('OPENING_BRACE', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x7c) {
                    const token = new Token('BAR', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else if (ch === 0x7d) {
                    const token = new Token('CLOSING_BRACE', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    return token;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 1:
                  if (ch === 0x09 || ch === 0x20) {
                    /* Empty. */;
                  } else {
                    // IGNORED token.
                    this.tokenStart = this.index;
                    this.state = START;
                    continue;
                  }
                  break;
                case 2:
                  // IGNORED token.
                  this.tokenStart = this.index;
                  this.state = START;
                  continue;
                case 3:
                  if (ch === 0x0a) {
                    this.state = 2;
                  } else {
                    // IGNORED token.
                    this.tokenStart = this.index;
                    this.state = START;
                    break;
                  }
                  break;
                case 5:
                  if (ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    this.state = 26;
                  } else if (ch === 0x22) {
                    this.state = 27;
                  } else if (ch === 0x5c) {
                    this.state = 28;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 6:
                  if (ch === 0x09 || ch >= 0x20 && ch <= 0xffff) {
                    /* Empty. */;
                  } else {
                    // IGNORED token.
                    this.tokenStart = this.index;
                    this.state = START;
                    continue;
                  }
                  break;
                case 11:
                  if (ch === 0x30) {
                    this.state = 13;
                  } else if (ch >= 0x31 && ch <= 0x39) {
                    this.state = 14;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 12:
                  if (ch === 0x2e) {
                    this.state = 29;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 13:
                  if (ch === 0x2e) {
                    this.state = 30;
                  } else if (ch === 0x45 || ch === 0x65) {
                    this.state = 31;
                  } else {
                    const token = new Token('NUMBER', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 14:
                  if (ch >= 0x30 && ch <= 0x39) {
                    /* Empty. */;
                  } else if (ch === 0x2e) {
                    this.state = 30;
                  } else if (ch === 0x45 || ch === 0x65) {
                    this.state = 31;
                  } else {
                    const token = new Token('NUMBER', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 18:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                    /* Empty. */;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 21:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x72) {
                    this.state = 32;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 22:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x6e) {
                    this.state = 33;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 26:
                  if (ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    /* Empty. */;
                  } else if (ch === 0x5c) {
                    this.state = 28;
                  } else if (ch === 0x22) {
                    const token = new Token('STRING_VALUE', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 27:
                  if (ch === 0x22) {
                    this.state = 35;
                  } else {
                    const token = new Token('STRING_VALUE', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 28:
                  if (ch === 0x22 || ch === 0x2f || ch === 0x62 || ch === 0x66 || ch === 0x6e || ch === 0x72 || ch === 0x74) {
                    this.state = 26;
                  } else if (ch === 0x5c) {
                    this.state = 36;
                  } else if (ch === 0x75) {
                    this.state = 37;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 29:
                  if (ch === 0x2e) {
                    const token = new Token('ELLIPSIS', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 30:
                  if (ch >= 0x30 && ch <= 0x39) {
                    this.state = 39;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 31:
                  if (ch === 0x2b || ch === 0x2d) {
                    this.state = 40;
                  } else if (ch >= 0x30 && ch <= 0x39) {
                    this.state = 41;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 32:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x62 && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x61) {
                    this.state = 42;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 33:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                    this.state = 18;
                  } else {
                    const token = new Token('ON', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 35:
                  if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    /* Empty. */;
                  } else if (ch === 0x22) {
                    this.state = 43;
                  } else if (ch === 0x5c) {
                    this.state = 44;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 36:
                  if (ch === 0x2f || ch === 0x62 || ch === 0x66 || ch === 0x6e || ch === 0x72 || ch === 0x74) {
                    this.state = 26;
                  } else if (ch === 0x5c) {
                    /* Empty. */;
                  } else if (ch === 0x75) {
                    this.state = 37;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 37:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                    this.state = 45;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 39:
                  if (ch === 0x45 || ch === 0x65) {
                    this.state = 31;
                  } else if (ch >= 0x30 && ch <= 0x39) {
                    /* Empty. */;
                  } else {
                    const token = new Token('NUMBER', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 40:
                  if (ch >= 0x30 && ch <= 0x39) {
                    this.state = 41;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 41:
                  if (ch >= 0x30 && ch <= 0x39) {
                    /* Empty. */;
                  } else {
                    const token = new Token('NUMBER', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 42:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x66 || ch >= 0x68 && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x67) {
                    this.state = 46;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 43:
                  if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    this.state = 35;
                  } else if (ch === 0x5c) {
                    this.state = 44;
                  } else if (ch === 0x22) {
                    this.state = 47;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 44:
                  if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    this.state = 35;
                  } else if (ch === 0x5c) {
                    /* Empty. */;
                  } else if (ch === 0x22) {
                    this.state = 48;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 45:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                    this.state = 49;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 46:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x6c || ch >= 0x6e && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x6d) {
                    this.state = 50;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 47:
                  if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    this.state = 35;
                  } else if (ch === 0x5c) {
                    this.state = 44;
                  } else if (ch === 0x22) {
                    const token = new Token('BLOCK_STRING_VALUE', this.tokenStart, this.index + 1, this.input);
                    this.index++;
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 48:
                  if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    this.state = 35;
                  } else if (ch === 0x5c) {
                    this.state = 44;
                  } else if (ch === 0x22) {
                    this.state = 52;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 49:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                    this.state = 53;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 50:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x65) {
                    this.state = 54;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 52:
                  if (ch === 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                    this.state = 35;
                  } else if (ch === 0x5c) {
                    this.state = 44;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 53:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                    this.state = 26;
                  } else {
                    this.state = REJECT;
                  }
                  break;
                case 54:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x6e) {
                    this.state = 55;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 55:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a) {
                    this.state = 18;
                  } else if (ch === 0x74) {
                    this.state = 56;
                  } else {
                    const token = new Token('NAME', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case 56:
                  if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                    this.state = 18;
                  } else {
                    const token = new Token('FRAGMENT', this.tokenStart, this.index, this.input);
                    this.tokenStart = this.index;
                    this.state = START;
                    return token;
                  }
                  break;
                case REJECT:
                  throw new Error('Failed to recognize token');
                default:
                  throw new Error('Unexpected state');
              }
              this.index++;
            }
            return null;
          }
        }
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
      ` + '\n',
    );
  });
});
