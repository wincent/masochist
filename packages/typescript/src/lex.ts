/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make typescript" instead
 *
 * @generated
 */
export class Token {
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
  get contents() {
    const value = this.source.slice(this.start, this.end);
    Object.defineProperty(this, 'contents', {
      value,
    });
    return value;
  }
}
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
        if (ch === 0x09 || ch === 0x20) {
          this.state = 1;
        } else if (ch === 0x0a) {
          this.state = 2;
        } else if (ch === 0x0d) {
          this.state = 3;
        } else if (ch === 0x21) {
          return this.emit('BANG', this.index + 1, input);
        } else if (ch === 0x22) {
          this.state = 5;
        } else if (
          ch === 0x24 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch === 0x62 || ch === 0x68 || ch >= 0x6a && ch <= 0x6b ||
          ch === 0x6d || ch >= 0x6f && ch <= 0x71 || ch === 0x73 ||
          ch >= 0x75 && ch <= 0x76 || ch === 0x78 || ch === 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x26) {
          this.state = 7;
        } else if (ch === 0x27) {
          this.state = 8;
        } else if (ch === 0x28) {
          return this.emit('OPENING_PAREN', this.index + 1, input);
        } else if (ch === 0x29) {
          return this.emit('CLOSING_PAREN', this.index + 1, input);
        } else if (ch === 0x2a) {
          return this.emit('STAR', this.index + 1, input);
        } else if (ch === 0x2b) {
          this.state = 12;
        } else if (ch === 0x2c) {
          return this.emit('COMMA', this.index + 1, input);
        } else if (ch === 0x2d) {
          this.state = 14;
        } else if (ch === 0x2e) {
          this.state = 15;
        } else if (ch === 0x2f) {
          this.state = 16;
        } else if (ch === 0x30) {
          this.state = 17;
        } else if (ch >= 0x31 && ch <= 0x39) {
          this.state = 18;
        } else if (ch === 0x3a) {
          return this.emit('COLON', this.index + 1, input);
        } else if (ch === 0x3b) {
          return this.emit('SEMICOLON', this.index + 1, input);
        } else if (ch === 0x3c) {
          this.state = 21;
        } else if (ch === 0x3d) {
          this.state = 22;
        } else if (ch === 0x3e) {
          this.state = 23;
        } else if (ch === 0x5b) {
          return this.emit('OPENING_BRACKET', this.index + 1, input);
        } else if (ch === 0x5d) {
          return this.emit('CLOSING_BRACKET', this.index + 1, input);
        } else if (ch === 0x61) {
          this.state = 26;
        } else if (ch === 0x63) {
          this.state = 27;
        } else if (ch === 0x64) {
          this.state = 28;
        } else if (ch === 0x65) {
          this.state = 29;
        } else if (ch === 0x66) {
          this.state = 30;
        } else if (ch === 0x67) {
          this.state = 31;
        } else if (ch === 0x69) {
          this.state = 32;
        } else if (ch === 0x6c) {
          this.state = 33;
        } else if (ch === 0x6e) {
          this.state = 34;
        } else if (ch === 0x72) {
          this.state = 35;
        } else if (ch === 0x74) {
          this.state = 36;
        } else if (ch === 0x77) {
          this.state = 37;
        } else if (ch === 0x79) {
          this.state = 38;
        } else if (ch === 0x7b) {
          return this.emit('OPENING_BRACE', this.index + 1, input);
        } else if (ch === 0x7c) {
          this.state = 40;
        } else if (ch === 0x7d) {
          return this.emit('CLOSING_BRACE', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 1) {
        while (ch === 0x09 || ch === 0x20) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        // IGNORED token.
        this.tokenStart = this.index;
        this.state = START;
        continue;
      } else if (state === 2) {
        // IGNORED token.
        this.tokenStart = this.index;
        this.state = START;
        continue;
      } else if (state === 3) {
        if (ch === 0x0a) {
          this.state = 2;
        } else {
          // IGNORED token.
          this.tokenStart = this.index;
          this.state = START;
          continue;
        }
      } else if (state === 5) {
        while (
          ch >= 0x00 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b ||
          ch >= 0x5d && ch <= 0xffff
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x22) {
          this.state = 42;
        } else if (ch === 0x5c) {
          this.state = 43;
        } else {
          this.state = REJECT;
        }
      } else if (state === 6) {
        while (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        this.state = START;
        return this.emit('IDENTIFIER', this.index, input);
      } else if (state === 7) {
        if (ch === 0x26) {
          this.state = START;
          return this.emit('LOGICAL_AND', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 8) {
        while (
          ch >= 0x00 && ch <= 0x26 || ch >= 0x28 && ch <= 0x5b ||
          ch >= 0x5d && ch <= 0xffff
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x27) {
          this.state = 42;
        } else if (ch === 0x5c) {
          this.state = 45;
        } else {
          this.state = REJECT;
        }
      } else if (state === 12) {
        if (ch === 0x2b) {
          this.state = START;
          return this.emit('INCREMENT', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('PLUS', this.index, input);
        }
      } else if (state === 14) {
        if (ch === 0x30) {
          this.state = 17;
        } else if (ch >= 0x31 && ch <= 0x39) {
          this.state = 18;
        } else if (ch === 0x2d) {
          this.state = START;
          return this.emit('DECREMENT', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('MINUS', this.index, input);
        }
      } else if (state === 15) {
        if (ch === 0x2e) {
          this.state = 48;
        } else {
          this.state = START;
          return this.emit('DOT', this.index, input);
        }
      } else if (state === 16) {
        if (ch === 0x2a) {
          this.state = 49;
        } else if (ch === 0x2f) {
          this.state = 50;
        } else {
          this.state = REJECT;
        }
      } else if (state === 17) {
        if (ch === 0x2e) {
          this.state = 51;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 18) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x2e) {
          this.state = 51;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 21) {
        if (ch === 0x3d) {
          this.state = START;
          return this.emit('LESS_THAN_OR_EQUAL', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('LESS_THAN', this.index, input);
        }
      } else if (state === 22) {
        if (ch === 0x3d) {
          this.state = 53;
        } else {
          this.state = START;
          return this.emit('ASSIGN', this.index, input);
        }
      } else if (state === 23) {
        if (ch === 0x3d) {
          this.state = START;
          return this.emit('GREATER_THAN_OR_EQUAL', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('GREATER_THAN', this.index, input);
        }
      } else if (state === 26) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x73) {
          this.state = 55;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 27) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x6e ||
          ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 56;
        } else if (ch === 0x6f) {
          this.state = 57;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 28) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 58;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 29) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x77 ||
          ch >= 0x79 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 59;
        } else if (ch === 0x78) {
          this.state = 60;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 30) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x62 && ch <= 0x6e || ch >= 0x70 && ch <= 0x74 ||
          ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x61) {
          this.state = 61;
        } else if (ch === 0x6f) {
          this.state = 62;
        } else if (ch === 0x75) {
          this.state = 63;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 31) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 64;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 32) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x65 || ch >= 0x67 && ch <= 0x6c ||
          ch >= 0x6e && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x66) {
          this.state = 65;
        } else if (ch === 0x6d) {
          this.state = 66;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 33) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 67;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 34) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x74 ||
          ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 68;
        } else if (ch === 0x75) {
          this.state = 69;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 35) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 70;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 36) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x67 || ch >= 0x69 && ch <= 0x71 ||
          ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x68) {
          this.state = 71;
        } else if (ch === 0x72) {
          this.state = 72;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 37) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x67 || ch >= 0x69 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x68) {
          this.state = 73;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 38) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x69) {
          this.state = 74;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 40) {
        if (ch === 0x7c) {
          this.state = START;
          return this.emit('LOGICAL_OR', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('BITWISE_OR', this.index, input);
        }
      } else if (state === 42) {
        this.state = START;
        return this.emit('STRING_VALUE', this.index, input);
      } else if (state === 43) {
        if (ch >= 0x00 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
          this.state = 5;
        } else if (ch === 0x5c) {
          this.state = 76;
        } else {
          this.state = REJECT;
        }
      } else if (state === 45) {
        if (ch >= 0x00 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff) {
          this.state = 8;
        } else if (ch === 0x5c) {
          this.state = 77;
        } else {
          this.state = REJECT;
        }
      } else if (state === 48) {
        if (ch === 0x2e) {
          this.state = START;
          return this.emit('REST', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 49) {
        if (ch === 0x2a) {
          this.state = 79;
        } else {
          this.state = REJECT;
        }
      } else if (state === 50) {
        while (
          ch >= 0x00 && ch <= 0x09 || ch >= 0x0b && ch <= 0x0c ||
          ch >= 0x0e && ch <= 0x3e || ch >= 0x40 && ch <= 0xffff
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x3f) {
          this.state = 80;
        } else {
          this.state = START;
          return this.emit('LINE_COMMENT', this.index, input);
        }
      } else if (state === 51) {
        if (ch >= 0x30 && ch <= 0x39) {
          this.state = 81;
        } else {
          this.state = REJECT;
        }
      } else if (state === 53) {
        if (ch === 0x3d) {
          this.state = START;
          return this.emit('STRICT_EQUALS', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('EQUALS', this.index, input);
        }
      } else if (state === 55) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('AS', this.index, input);
        }
      } else if (state === 56) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x62 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x61) {
          this.state = 83;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 57) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6e) {
          this.state = 84;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 58) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x65 || ch >= 0x67 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x66) {
          this.state = 85;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 59) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x73) {
          this.state = 86;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 60) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6f || ch >= 0x71 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x70) {
          this.state = 87;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 61) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 88;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 62) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x72) {
          this.state = 89;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 63) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6e) {
          this.state = 90;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 64) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 91;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 65) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('IF', this.index, input);
        }
      } else if (state === 66) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6f || ch >= 0x71 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x70) {
          this.state = 92;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 67) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 93;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 68) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x76 || ch >= 0x78 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x77) {
          this.state = 94;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 69) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 95;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 70) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 96;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 71) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x71 ||
          ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x69) {
          this.state = 97;
        } else if (ch === 0x72) {
          this.state = 98;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 72) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x74 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x75) {
          this.state = 99;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 73) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x69) {
          this.state = 100;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 74) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 101;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 76) {
        while (ch === 0x5c) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (
          ch >= 0x00 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b ||
          ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 5;
        } else {
          this.state = REJECT;
        }
      } else if (state === 77) {
        while (ch === 0x5c) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (
          ch >= 0x00 && ch <= 0x26 || ch >= 0x28 && ch <= 0x5b ||
          ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 8;
        } else {
          this.state = REJECT;
        }
      } else if (state === 79) {
        while (ch >= 0x00 && ch <= 0x29 || ch >= 0x2b && ch <= 0xffff) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x2a) {
          this.state = 102;
        } else {
          this.state = REJECT;
        }
      } else if (state === 80) {
        while (ch === 0x3f) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (
          ch >= 0x00 && ch <= 0x09 || ch >= 0x0b && ch <= 0x0c ||
          ch >= 0x0e && ch <= 0x39 || ch >= 0x3b && ch <= 0x3e ||
          ch >= 0x40 && ch <= 0xffff
        ) {
          this.state = 50;
        } else if (ch === 0x3a) {
          this.state = 103;
        } else {
          this.state = START;
          return this.emit('LINE_COMMENT', this.index, input);
        }
      } else if (state === 81) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        this.state = START;
        return this.emit('NUMBER', this.index, input);
      } else if (state === 83) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x73) {
          this.state = 104;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 84) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x72 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x73) {
          this.state = 105;
        } else if (ch === 0x74) {
          this.state = 106;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 85) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x62 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x61) {
          this.state = 107;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 86) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 108;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 87) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6f) {
          this.state = 109;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 88) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x73) {
          this.state = 110;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 89) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('FOR', this.index, input);
        }
      } else if (state === 90) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x62 || ch >= 0x64 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x63) {
          this.state = 111;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 91) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('GET', this.index, input);
        }
      } else if (state === 92) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6f) {
          this.state = 112;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 93) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('LET', this.index, input);
        }
      } else if (state === 94) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('NEW', this.index, input);
        }
      } else if (state === 95) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 113;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 96) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x74 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x75) {
          this.state = 114;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 97) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x73) {
          this.state = 115;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 98) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6f) {
          this.state = 116;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 99) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 117;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 100) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 118;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 101) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 119;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 102) {
        if (ch >= 0x00 && ch <= 0x2e || ch >= 0x30 && ch <= 0xffff) {
          this.state = 79;
        } else if (ch === 0x2f) {
          this.state = START;
          return this.emit('DOC_COMMENT', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 103) {
        if (
          ch >= 0x00 && ch <= 0x09 || ch >= 0x0b && ch <= 0x0c ||
          ch >= 0x0e && ch <= 0x3e || ch >= 0x40 && ch <= 0xffff
        ) {
          this.state = 50;
        } else if (ch === 0x3f) {
          this.state = 80;
        } else if (ch === 0x0a) {
          this.state = 121;
        } else if (ch === 0x0d) {
          this.state = 122;
        } else {
          this.state = START;
          return this.emit('LINE_COMMENT', this.index, input);
        }
      } else if (state === 104) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x73) {
          this.state = 123;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 105) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 124;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 106) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x69) {
          this.state = 125;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 107) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x74 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x75) {
          this.state = 126;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 108) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('ELSE', this.index, input);
        }
      } else if (state === 109) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x72) {
          this.state = 127;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 110) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 128;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 111) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 129;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 112) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x72) {
          this.state = 130;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 113) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('NULL', this.index, input);
        }
      } else if (state === 114) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x72) {
          this.state = 131;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 115) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('THIS', this.index, input);
        }
      } else if (state === 116) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x76 || ch >= 0x78 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x77) {
          this.state = 132;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 117) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('TRUE', this.index, input);
        }
      } else if (state === 118) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 133;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 119) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x63 || ch >= 0x65 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x64) {
          this.state = 134;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 121) {
        this.state = START;
        return this.emit('LINE_COMMENT', this.index, input);
      } else if (state === 122) {
        if (ch === 0x0a) {
          this.state = 121;
        } else {
          this.state = REJECT;
        }
      } else if (state === 123) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('CLASS', this.index, input);
        }
      } else if (state === 124) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('CONST', this.index, input);
        }
      } else if (state === 125) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6e) {
          this.state = 135;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 126) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6c) {
          this.state = 136;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 127) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 137;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 128) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('FALSE', this.index, input);
        }
      } else if (state === 129) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x69) {
          this.state = 138;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 130) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 139;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 131) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6e) {
          this.state = 140;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 132) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('THROW', this.index, input);
        }
      } else if (state === 133) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('WHILE', this.index, input);
        }
      } else if (state === 134) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('YIELD', this.index, input);
        }
      } else if (state === 135) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x74 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x75) {
          this.state = 141;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 136) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x74) {
          this.state = 142;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 137) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('EXPORT', this.index, input);
        }
      } else if (state === 138) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6f) {
          this.state = 143;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 139) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('IMPORT', this.index, input);
        }
      } else if (state === 140) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('RETURN', this.index, input);
        }
      } else if (state === 141) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x65) {
          this.state = 144;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 142) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('DEFAULT', this.index, input);
        }
      } else if (state === 143) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 6;
        } else if (ch === 0x6e) {
          this.state = 145;
        } else {
          this.state = START;
          return this.emit('IDENTIFIER', this.index, input);
        }
      } else if (state === 144) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('CONTINUE', this.index, input);
        }
      } else if (state === 145) {
        if (
          ch === 0x24 || ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a ||
          ch === 0x5f || ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 6;
        } else {
          this.state = START;
          return this.emit('FUNCTION', this.index, input);
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
export default function* lex(input: string) {
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
