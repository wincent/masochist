import {dedent} from '@masochist/common';

import {wip, print} from '../build';

function* lex(input: string) {
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
          state = 4;
        } else if (ch === 0x22) {
          state = 5;
        } else if (ch === 0x23) {
          state = 6;
        } else if (ch === 0x24) {
          state = 7;
        } else if (ch === 0x26) {
          state = 8;
        } else if (ch === 0x28) {
          state = 9;
        } else if (ch === 0x29) {
          state = 10;
        } else if (ch === 0x2d) {
          state = 11;
        } else if (ch === 0x2e) {
          state = 12;
        } else if (ch === 0x30) {
          state = 13;
        } else if (ch >= 0x31 && ch <= 0x39) {
          state = 14;
        } else if (ch === 0x3a) {
          state = 15;
        } else if (ch === 0x3d) {
          state = 16;
        } else if (ch === 0x40) {
          state = 17;
        } else if (
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x7a)
        ) {
          state = 18;
        } else if (ch === 0x5b) {
          state = 19;
        } else if (ch === 0x5d) {
          state = 20;
        } else if (ch === 0x7b) {
          state = 21;
        } else if (ch === 0x7c) {
          state = 22;
        } else if (ch === 0x7d) {
          state = 23;
        } else {
          state = REJECT;
        }
        break;
      case 1:
        if (ch === 0x09 || ch === 0x20) {
          state = 1;
        } else {
          // IGNORED token.
          tokenStart = i + 1;
          state = START;
          continue loop;
        }
        break;
      case 2:
        // IGNORED token.
        tokenStart = i + 1;
        state = START;
        break;
      case 3:
        if (ch === 0x0a) {
          state = 2;
        } else {
          // IGNORED token.
          tokenStart = i + 1;
          state = START;
          continue loop;
        }
        break;
      case 4:
        yield {
          token: 'BANG',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 5:
        if (
          ch === 0x09 ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 24;
        } else if (ch === 0x22) {
          state = 25;
        } else if (ch === 0x5c) {
          state = 26;
        } else {
          state = REJECT;
        }
        break;
      case 6:
        if (ch === 0x09 || (ch >= 0x20 && ch <= 0xffff)) {
          state = 6;
        } else {
          // IGNORED token.
          tokenStart = i + 1;
          state = START;
          continue loop;
        }
        break;
      case 7:
        yield {
          token: 'DOLLAR',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 8:
        yield {
          token: 'AMPERSAND',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 9:
        yield {
          token: 'OPENING_PAREN',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 10:
        yield {
          token: 'CLOSING_PAREN',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
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
          state = 27;
        } else {
          state = REJECT;
        }
        break;
      case 13:
        if (ch === 0x2e) {
          state = 28;
        } else if (ch === 0x45 || ch === 0x65) {
          state = 29;
        } else {
          yield {
            token: 'NUMBER',
            tokenStart,
            tokenEnd: i,
          };
          tokenStart = i;
          state = START;
          continue loop;
        }
        break;
      case 14:
        if (ch >= 0x30 && ch <= 0x39) {
          state = 14;
        } else if (ch === 0x2e) {
          state = 28;
        } else if (ch === 0x45 || ch === 0x65) {
          state = 29;
        } else {
          yield {
            token: 'NUMBER',
            tokenStart,
            tokenEnd: i,
          };
          tokenStart = i;
          state = START;
          continue loop;
        }
        break;
      case 15:
        yield {
          token: 'COLON',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 16:
        yield {
          token: 'EQUALS',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 17:
        yield {
          token: 'AT',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 18:
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x7a)
        ) {
          state = 18;
        } else {
          yield {
            token: 'NAME',
            tokenStart,
            tokenEnd: i,
          };
          tokenStart = i;
          state = START;
          continue loop;
        }
        break;
      case 19:
        yield {
          token: 'OPENING_BRACKET',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 20:
        yield {
          token: 'CLOSING_BRACKET',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 21:
        yield {
          token: 'OPENING_BRACE',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 22:
        yield {
          token: 'BAR',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 23:
        yield {
          token: 'CLOSING_BRACE',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 24:
        if (
          ch === 0x09 ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 24;
        } else if (ch === 0x5c) {
          state = 26;
        } else if (ch === 0x22) {
          state = 30;
        } else {
          state = REJECT;
        }
        break;
      case 25:
        if (ch === 0x22) {
          state = 31;
        } else {
          yield {
            token: 'STRING_VALUE',
            tokenStart,
            tokenEnd: i,
          };
          tokenStart = i;
          state = START;
          continue loop;
        }
        break;
      case 26:
        if (
          ch === 0x22 ||
          ch === 0x2f ||
          ch === 0x62 ||
          ch === 0x66 ||
          ch === 0x6e ||
          ch === 0x72 ||
          ch === 0x74
        ) {
          state = 24;
        } else if (ch === 0x5c) {
          state = 32;
        } else if (ch === 0x75) {
          state = 33;
        } else {
          state = REJECT;
        }
        break;
      case 27:
        if (ch === 0x2e) {
          state = 34;
        } else {
          state = REJECT;
        }
        break;
      case 28:
        if (ch >= 0x30 && ch <= 0x39) {
          state = 35;
        } else {
          state = REJECT;
        }
        break;
      case 29:
        if (ch === 0x2b || ch === 0x2d) {
          state = 36;
        } else if (ch >= 0x30 && ch <= 0x39) {
          state = 37;
        } else {
          state = REJECT;
        }
        break;
      case 30:
        yield {
          token: 'STRING_VALUE',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 31:
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 31;
        } else if (ch === 0x22) {
          state = 38;
        } else if (ch === 0x5c) {
          state = 39;
        } else {
          state = REJECT;
        }
        break;
      case 32:
        if (
          ch === 0x2f ||
          ch === 0x62 ||
          ch === 0x66 ||
          ch === 0x6e ||
          ch === 0x72 ||
          ch === 0x74
        ) {
          state = 24;
        } else if (ch === 0x5c) {
          state = 32;
        } else if (ch === 0x75) {
          state = 33;
        } else {
          state = REJECT;
        }
        break;
      case 33:
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          state = 40;
        } else {
          state = REJECT;
        }
        break;
      case 34:
        yield {
          token: 'ELLIPSIS',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 35:
        if (ch === 0x45 || ch === 0x65) {
          state = 29;
        } else if (ch >= 0x30 && ch <= 0x39) {
          state = 35;
        } else {
          yield {
            token: 'NUMBER',
            tokenStart,
            tokenEnd: i,
          };
          tokenStart = i;
          state = START;
          continue loop;
        }
        break;
      case 36:
        if (ch >= 0x30 && ch <= 0x39) {
          state = 37;
        } else {
          state = REJECT;
        }
        break;
      case 37:
        if (ch >= 0x30 && ch <= 0x39) {
          state = 37;
        } else {
          yield {
            token: 'NUMBER',
            tokenStart,
            tokenEnd: i,
          };
          tokenStart = i;
          state = START;
          continue loop;
        }
        break;
      case 38:
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 31;
        } else if (ch === 0x5c) {
          state = 39;
        } else if (ch === 0x22) {
          state = 41;
        } else {
          state = REJECT;
        }
        break;
      case 39:
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 31;
        } else if (ch === 0x5c) {
          state = 39;
        } else if (ch === 0x22) {
          state = 42;
        } else {
          state = REJECT;
        }
        break;
      case 40:
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          state = 43;
        } else {
          state = REJECT;
        }
        break;
      case 41:
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 31;
        } else if (ch === 0x5c) {
          state = 39;
        } else if (ch === 0x22) {
          state = 44;
        } else {
          state = REJECT;
        }
        break;
      case 42:
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 31;
        } else if (ch === 0x5c) {
          state = 39;
        } else if (ch === 0x22) {
          state = 45;
        } else {
          state = REJECT;
        }
        break;
      case 43:
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          state = 46;
        } else {
          state = REJECT;
        }
        break;
      case 44:
        yield {
          token: 'BLOCK_STRING_VALUE',
          tokenStart,
          tokenEnd: i + 1,
        };
        tokenStart = i + 1;
        state = START;
        continue loop;
      case 45:
        if (
          ch === 0x0a ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          state = 31;
        } else if (ch === 0x5c) {
          state = 39;
        } else {
          state = REJECT;
        }
        break;
      case 46:
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          state = 24;
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

describe('wip()', () => {
  it('does something', () => {
    const ast = wip();
    expect(print(ast)).toBe(
      dedent`
        function *lex(input: string) {
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
                  state = 4;
                } else if (ch === 0x22) {
                  state = 5;
                } else if (ch === 0x23) {
                  state = 6;
                } else if (ch === 0x24) {
                  state = 7;
                } else if (ch === 0x26) {
                  state = 8;
                } else if (ch === 0x28) {
                  state = 9;
                } else if (ch === 0x29) {
                  state = 10;
                } else if (ch === 0x2d) {
                  state = 11;
                } else if (ch === 0x2e) {
                  state = 12;
                } else if (ch === 0x30) {
                  state = 13;
                } else if (ch >= 0x31 && ch <= 0x39) {
                  state = 14;
                } else if (ch === 0x3a) {
                  state = 15;
                } else if (ch === 0x3d) {
                  state = 16;
                } else if (ch === 0x40) {
                  state = 17;
                } else if (ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                  state = 18;
                } else if (ch === 0x5b) {
                  state = 19;
                } else if (ch === 0x5d) {
                  state = 20;
                } else if (ch === 0x7b) {
                  state = 21;
                } else if (ch === 0x7c) {
                  state = 22;
                } else if (ch === 0x7d) {
                  state = 23;
                } else {
                  state = REJECT;
                }
                break;
              case 1:
                if (ch === 0x09 || ch === 0x20) {
                  state = 1;
                } else {
                  // IGNORED token.
                  tokenStart = i + 1;
                  state = START;
                  continue loop;
                }
                break;
              case 2:
                // IGNORED token.
                tokenStart = i + 1;
                state = START;
                break;
              case 3:
                if (ch === 0x0a) {
                  state = 2;
                } else {
                  // IGNORED token.
                  tokenStart = i + 1;
                  state = START;
                  continue loop;
                }
                break;
              case 4:
                yield {
                  token: "BANG",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 5:
                if (ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 24;
                } else if (ch === 0x22) {
                  state = 25;
                } else if (ch === 0x5c) {
                  state = 26;
                } else {
                  state = REJECT;
                }
                break;
              case 6:
                if (ch === 0x09 || ch >= 0x20 && ch <= 0xffff) {
                  state = 6;
                } else {
                  // IGNORED token.
                  tokenStart = i + 1;
                  state = START;
                  continue loop;
                }
                break;
              case 7:
                yield {
                  token: "DOLLAR",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 8:
                yield {
                  token: "AMPERSAND",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 9:
                yield {
                  token: "OPENING_PAREN",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 10:
                yield {
                  token: "CLOSING_PAREN",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
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
                  state = 27;
                } else {
                  state = REJECT;
                }
                break;
              case 13:
                if (ch === 0x2e) {
                  state = 28;
                } else if (ch === 0x45 || ch === 0x65) {
                  state = 29;
                } else {
                  yield {
                    token: "NUMBER",
                    tokenStart,
                    tokenEnd: i,
                  };
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 14:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 14;
                } else if (ch === 0x2e) {
                  state = 28;
                } else if (ch === 0x45 || ch === 0x65) {
                  state = 29;
                } else {
                  yield {
                    token: "NUMBER",
                    tokenStart,
                    tokenEnd: i,
                  };
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 15:
                yield {
                  token: "COLON",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 16:
                yield {
                  token: "EQUALS",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 17:
                yield {
                  token: "AT",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 18:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                  state = 18;
                } else {
                  yield {
                    token: "NAME",
                    tokenStart,
                    tokenEnd: i,
                  };
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 19:
                yield {
                  token: "OPENING_BRACKET",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 20:
                yield {
                  token: "CLOSING_BRACKET",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 21:
                yield {
                  token: "OPENING_BRACE",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 22:
                yield {
                  token: "BAR",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 23:
                yield {
                  token: "CLOSING_BRACE",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 24:
                if (ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 24;
                } else if (ch === 0x5c) {
                  state = 26;
                } else if (ch === 0x22) {
                  state = 30;
                } else {
                  state = REJECT;
                }
                break;
              case 25:
                if (ch === 0x22) {
                  state = 31;
                } else {
                  yield {
                    token: "STRING_VALUE",
                    tokenStart,
                    tokenEnd: i,
                  };
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 26:
                if (ch === 0x22 || ch === 0x2f || ch === 0x62 || ch === 0x66 || ch === 0x6e || ch === 0x72 || ch === 0x74) {
                  state = 24;
                } else if (ch === 0x5c) {
                  state = 32;
                } else if (ch === 0x75) {
                  state = 33;
                } else {
                  state = REJECT;
                }
                break;
              case 27:
                if (ch === 0x2e) {
                  state = 34;
                } else {
                  state = REJECT;
                }
                break;
              case 28:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 35;
                } else {
                  state = REJECT;
                }
                break;
              case 29:
                if (ch === 0x2b || ch === 0x2d) {
                  state = 36;
                } else if (ch >= 0x30 && ch <= 0x39) {
                  state = 37;
                } else {
                  state = REJECT;
                }
                break;
              case 30:
                yield {
                  token: "STRING_VALUE",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 31:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 31;
                } else if (ch === 0x22) {
                  state = 38;
                } else if (ch === 0x5c) {
                  state = 39;
                } else {
                  state = REJECT;
                }
                break;
              case 32:
                if (ch === 0x2f || ch === 0x62 || ch === 0x66 || ch === 0x6e || ch === 0x72 || ch === 0x74) {
                  state = 24;
                } else if (ch === 0x5c) {
                  state = 32;
                } else if (ch === 0x75) {
                  state = 33;
                } else {
                  state = REJECT;
                }
                break;
              case 33:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 40;
                } else {
                  state = REJECT;
                }
                break;
              case 34:
                yield {
                  token: "ELLIPSIS",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 35:
                if (ch === 0x45 || ch === 0x65) {
                  state = 29;
                } else if (ch >= 0x30 && ch <= 0x39) {
                  state = 35;
                } else {
                  yield {
                    token: "NUMBER",
                    tokenStart,
                    tokenEnd: i,
                  };
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 36:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 37;
                } else {
                  state = REJECT;
                }
                break;
              case 37:
                if (ch >= 0x30 && ch <= 0x39) {
                  state = 37;
                } else {
                  yield {
                    token: "NUMBER",
                    tokenStart,
                    tokenEnd: i,
                  };
                  tokenStart = i;
                  state = START;
                  continue loop;
                }
                break;
              case 38:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 31;
                } else if (ch === 0x5c) {
                  state = 39;
                } else if (ch === 0x22) {
                  state = 41;
                } else {
                  state = REJECT;
                }
                break;
              case 39:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 31;
                } else if (ch === 0x5c) {
                  state = 39;
                } else if (ch === 0x22) {
                  state = 42;
                } else {
                  state = REJECT;
                }
                break;
              case 40:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 43;
                } else {
                  state = REJECT;
                }
                break;
              case 41:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 31;
                } else if (ch === 0x5c) {
                  state = 39;
                } else if (ch === 0x22) {
                  state = 44;
                } else {
                  state = REJECT;
                }
                break;
              case 42:
                if (ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 31;
                } else if (ch === 0x5c) {
                  state = 39;
                } else if (ch === 0x22) {
                  state = 45;
                } else {
                  state = REJECT;
                }
                break;
              case 43:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 46;
                } else {
                  state = REJECT;
                }
                break;
              case 44:
                yield {
                  token: "BLOCK_STRING_VALUE",
                  tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
                continue loop;
              case 45:
                if (ch === 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                  state = 31;
                } else if (ch === 0x5c) {
                  state = 39;
                } else {
                  state = REJECT;
                }
                break;
              case 46:
                if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                  state = 24;
                } else {
                  state = REJECT;
                }
                break;
              case REJECT:
                throw new Error("Failed to recognize token");
              default:
                throw new Error("Unexpected state");
            }
            i++;
          }
        }
      ` + '\n',
    );
  });

  it('can lex a NAME token right at the end', () => {
    const tokens = [...lex('foo bar')];
    // BUG: indices are off
    expect(tokens).toEqual([
      {token: 'NAME', tokenStart: 0, tokenEnd: 3},
      {token: 'NAME', tokenStart: 5, tokenEnd: 7},
    ]);
  });

  it('does something else', () => {
    for (const token of lex(`
      query Crap {
        viewer {
          feed(first: 10, after: "cursor") {
            id
          }
        }
      }
    `)) {
      console.log(token);
    }
  });
});
