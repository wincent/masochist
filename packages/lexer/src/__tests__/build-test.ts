import {dedent} from '@masochist/common';

import {wip, print} from '../build';

describe('wip()', () => {
  it('does something', () => {
    const ast = wip();
    expect(print(ast)).toBe(
      dedent`
        const ACCEPT = -2;
        const REJECT = -1;
        const START = 0;
        let state = START;
        let tokenStart = 0;
        let i = tokenStart;
        loop: while (i < input.length) {
          const ch = input[i];
          switch (state) {
            START:
              if (ch === "\t" || ch === " ") {
                state = 1;
              } else if (ch === "\n" || ch === "," || ch === "﻿") {
                state = 2;
              } else if (ch === "\r") {
                state = 3;
              } else if (ch === "!") {
                state = 4;
              } else if (ch === "\"") {
                state = 5;
              } else if (ch === "#") {
                state = 6;
              } else if (ch === "$") {
                state = 7;
              } else if (ch === "&") {
                state = 8;
              } else if (ch === "(") {
                state = 9;
              } else if (ch === ")") {
                state = 10;
              } else if (ch === "-") {
                state = 11;
              } else if (ch === ".") {
                state = 12;
              } else if (ch === "0") {
                state = 13;
              } else if (ch >= "1" && ch <= "9") {
                state = 14;
              } else if (ch === ":") {
                state = 15;
              } else if (ch === "=") {
                state = 16;
              } else if (ch === "@") {
                state = 17;
              } else if (ch >= "A" && ch <= "Z" || ch === "_" || ch >= "a" && ch <= "z") {
                state = 18;
              } else if (ch === "[") {
                state = 19;
              } else if (ch === "]") {
                state = 20;
              } else if (ch === "{") {
                state = 21;
              } else if (ch === "|") {
                state = 22;
              } else if (ch === "}") {
                state = 23;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            1:
              if (ch === "\t" || ch === " ") {
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
              if (ch === "\n") {
                state = 2;
              } else {
                // IGNORED token.
                tokenStart = i + 1;
                state = START;
              }
              break;
            4:
              emit("BANG");
              break;
            5:
              if (ch === "\t" || ch >= " " && ch <= "!" || ch >= "#" && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 24;
              } else if (ch === "\"") {
                state = 25;
              } else if (ch === "\\") {
                state = 26;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            6:
              if (ch === "\t" || ch >= " " && ch <= "￿") {
                state = 6;
              } else {
                // IGNORED token.
                tokenStart = i + 1;
                state = START;
              }
              break;
            7:
              emit("DOLLAR");
              break;
            8:
              emit("AMPERSAND");
              break;
            9:
              emit("OPENING_PAREN");
              break;
            10:
              emit("CLOSING_PAREN");
              break;
            11:
              if (ch === "0") {
                state = 13;
              } else if (ch >= "1" && ch <= "9") {
                state = 14;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            12:
              if (ch === ".") {
                state = 27;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            13:
              if (ch === ".") {
                state = 28;
              } else if (ch === "E" || ch === "e") {
                state = 29;
              } else {
                emit("NUMBER");
              }
              break;
            14:
              if (ch >= "0" && ch <= "9") {
                state = 14;
              } else if (ch === ".") {
                state = 28;
              } else if (ch === "E" || ch === "e") {
                state = 29;
              } else {
                emit("NUMBER");
              }
              break;
            15:
              emit("COLON");
              break;
            16:
              emit("EQUALS");
              break;
            17:
              emit("AT");
              break;
            18:
              if (ch >= "0" && ch <= "9" || ch >= "A" && ch <= "Z" || ch === "_" || ch >= "a" && ch <= "z") {
                state = 18;
              } else {
                emit("NAME");
              }
              break;
            19:
              emit("OPENING_BRACKET");
              break;
            20:
              emit("CLOSING_BRACKET");
              break;
            21:
              emit("OPENING_BRACE");
              break;
            22:
              emit("BAR");
              break;
            23:
              emit("CLOSING_BRACE");
              break;
            24:
              if (ch === "\t" || ch >= " " && ch <= "!" || ch >= "#" && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 24;
              } else if (ch === "\\") {
                state = 26;
              } else if (ch === "\"") {
                state = 30;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            25:
              if (ch === "\"") {
                state = 31;
              } else {
                emit("STRING_VALUE");
              }
              break;
            26:
              if (ch === "\"" || ch === "/" || ch === "b" || ch === "f" || ch === "n" || ch === "r" || ch === "t") {
                state = 24;
              } else if (ch === "\\") {
                state = 32;
              } else if (ch === "u") {
                state = 33;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            27:
              if (ch === ".") {
                state = 34;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            28:
              if (ch >= "0" && ch <= "9") {
                state = 35;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            29:
              if (ch === "+" || ch === "-") {
                state = 36;
              } else if (ch >= "0" && ch <= "9") {
                state = 37;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            30:
              emit("STRING_VALUE");
              break;
            31:
              if (ch >= "\t" && ch <= "\n" || ch === "\r" || ch >= " " && ch <= "!" || ch >= "#" && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 31;
              } else if (ch === "\"") {
                state = 38;
              } else if (ch === "\\") {
                state = 39;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            32:
              if (ch === "/" || ch === "b" || ch === "f" || ch === "n" || ch === "r" || ch === "t") {
                state = 24;
              } else if (ch === "\\") {
                state = 32;
              } else if (ch === "u") {
                state = 33;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            33:
              if (ch >= "0" && ch <= "9" || ch >= "A" && ch <= "F" || ch >= "a" && ch <= "f") {
                state = 40;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            34:
              emit("ELLIPSIS");
              break;
            35:
              if (ch === "E" || ch === "e") {
                state = 29;
              } else if (ch >= "0" && ch <= "9") {
                state = 35;
              } else {
                emit("NUMBER");
              }
              break;
            36:
              if (ch >= "0" && ch <= "9") {
                state = 37;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            37:
              if (ch >= "0" && ch <= "9") {
                state = 37;
              } else {
                emit("NUMBER");
              }
              break;
            38:
              if (ch >= "\t" && ch <= "\n" || ch === "\r" || ch >= " " && ch <= "!" || ch >= "#" && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 31;
              } else if (ch === "\\") {
                state = 39;
              } else if (ch === "\"") {
                state = 41;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            39:
              if (ch >= "\t" && ch <= "\n" || ch === "\r" || ch >= " " && ch <= "!" || ch >= "#" && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 31;
              } else if (ch === "\\") {
                state = 39;
              } else if (ch === "\"") {
                state = 42;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            40:
              if (ch >= "0" && ch <= "9" || ch >= "A" && ch <= "F" || ch >= "a" && ch <= "f") {
                state = 43;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            41:
              if (ch >= "\t" && ch <= "\n" || ch === "\r" || ch >= " " && ch <= "!" || ch >= "#" && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 31;
              } else if (ch === "\\") {
                state = 39;
              } else if (ch === "\"") {
                state = 44;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            42:
              if (ch >= "\t" && ch <= "\n" || ch === "\r" || ch >= " " && ch <= "!" || ch >= "#" && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 31;
              } else if (ch === "\\") {
                state = 39;
              } else if (ch === "\"") {
                state = 45;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            43:
              if (ch >= "0" && ch <= "9" || ch >= "A" && ch <= "F" || ch >= "a" && ch <= "f") {
                state = 46;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            44:
              emit("BLOCK_STRING_VALUE");
              break;
            45:
              if (ch === "\n" || ch === "\r" || ch >= " " && ch <= "[" || ch >= "]" && ch <= "￿") {
                state = 31;
              } else if (ch === "\\") {
                state = 39;
              } else {
                state = REJECT;
                break loop;
              }
              break;
            46:
              if (ch >= "0" && ch <= "9" || ch >= "A" && ch <= "F" || ch >= "a" && ch <= "f") {
                state = 24;
              } else {
                state = REJECT;
                break loop;
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
