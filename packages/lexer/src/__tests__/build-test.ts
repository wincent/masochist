import {dedent} from '@masochist/common';

import {wip, print} from '../build';

describe('wip()', () => {
  it('does something', () => {
    const ast = wip();
    expect(print(ast)).toBe(
      dedent`
        const REJECT = -1;
        const START = 0;
        let state = START;
        let tokenStart = 0;
        let i = tokenStart;
        loop: while (i < input.length) {
          const ch = input.charCodeAt(i);
          switch (state) {
            START:
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
            1:
              if (ch === 0x09 || ch === 0x20) {
                state = 1;
              } else {
                // IGNORED token.
                tokenStart = i + 1;
                state = START;
              }
              break;
            2:
              // IGNORED token.
              tokenStart = i + 1;
              state = START;
              break;
            3:
              if (ch === 0x0a) {
                state = 2;
              } else {
                // IGNORED token.
                tokenStart = i + 1;
                state = START;
              }
              break;
            4:
              yield {
                token: "BANG",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            5:
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
            6:
              if (ch === 0x09 || ch >= 0x20 && ch <= 0xffff) {
                state = 6;
              } else {
                // IGNORED token.
                tokenStart = i + 1;
                state = START;
              }
              break;
            7:
              yield {
                token: "DOLLAR",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            8:
              yield {
                token: "AMPERSAND",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            9:
              yield {
                token: "OPENING_PAREN",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            10:
              yield {
                token: "CLOSING_PAREN",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            11:
              if (ch === 0x30) {
                state = 13;
              } else if (ch >= 0x31 && ch <= 0x39) {
                state = 14;
              } else {
                state = REJECT;
              }
              break;
            12:
              if (ch === 0x2e) {
                state = 27;
              } else {
                state = REJECT;
              }
              break;
            13:
              if (ch === 0x2e) {
                state = 28;
              } else if (ch === 0x45 || ch === 0x65) {
                state = 29;
              } else {
                yield {
                  token: "NUMBER",
                  tokenStart: tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
              }
              break;
            14:
              if (ch >= 0x30 && ch <= 0x39) {
                state = 14;
              } else if (ch === 0x2e) {
                state = 28;
              } else if (ch === 0x45 || ch === 0x65) {
                state = 29;
              } else {
                yield {
                  token: "NUMBER",
                  tokenStart: tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
              }
              break;
            15:
              yield {
                token: "COLON",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            16:
              yield {
                token: "EQUALS",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            17:
              yield {
                token: "AT",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            18:
              if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x7a) {
                state = 18;
              } else {
                yield {
                  token: "NAME",
                  tokenStart: tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
              }
              break;
            19:
              yield {
                token: "OPENING_BRACKET",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            20:
              yield {
                token: "CLOSING_BRACKET",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            21:
              yield {
                token: "OPENING_BRACE",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            22:
              yield {
                token: "BAR",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            23:
              yield {
                token: "CLOSING_BRACE",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            24:
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
            25:
              if (ch === 0x22) {
                state = 31;
              } else {
                yield {
                  token: "STRING_VALUE",
                  tokenStart: tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
              }
              break;
            26:
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
            27:
              if (ch === 0x2e) {
                state = 34;
              } else {
                state = REJECT;
              }
              break;
            28:
              if (ch >= 0x30 && ch <= 0x39) {
                state = 35;
              } else {
                state = REJECT;
              }
              break;
            29:
              if (ch === 0x2b || ch === 0x2d) {
                state = 36;
              } else if (ch >= 0x30 && ch <= 0x39) {
                state = 37;
              } else {
                state = REJECT;
              }
              break;
            30:
              yield {
                token: "STRING_VALUE",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            31:
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
            32:
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
            33:
              if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                state = 40;
              } else {
                state = REJECT;
              }
              break;
            34:
              yield {
                token: "ELLIPSIS",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            35:
              if (ch === 0x45 || ch === 0x65) {
                state = 29;
              } else if (ch >= 0x30 && ch <= 0x39) {
                state = 35;
              } else {
                yield {
                  token: "NUMBER",
                  tokenStart: tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
              }
              break;
            36:
              if (ch >= 0x30 && ch <= 0x39) {
                state = 37;
              } else {
                state = REJECT;
              }
              break;
            37:
              if (ch >= 0x30 && ch <= 0x39) {
                state = 37;
              } else {
                yield {
                  token: "NUMBER",
                  tokenStart: tokenStart,
                  tokenEnd: i + 1,
                };
                tokenStart = i + 1;
                state = START;
              }
              break;
            38:
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
            39:
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
            40:
              if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                state = 43;
              } else {
                state = REJECT;
              }
              break;
            41:
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
            42:
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
            43:
              if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                state = 46;
              } else {
                state = REJECT;
              }
              break;
            44:
              yield {
                token: "BLOCK_STRING_VALUE",
                tokenStart: tokenStart,
                tokenEnd: i + 1,
              };
              tokenStart = i + 1;
              state = START;
              break;
            45:
              if (ch === 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
                state = 31;
              } else if (ch === 0x5c) {
                state = 39;
              } else {
                state = REJECT;
              }
              break;
            46:
              if (ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
                state = 24;
              } else {
                state = REJECT;
              }
              break;
            REJECT:
              throw new Error("Failed to recognize token");
          }
          i++;
        }
      ` + '\n',
    );
  });
});
