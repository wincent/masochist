/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make graphql" instead
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
        } else if (ch === 0x0a || ch === 0x2c || ch === 0xfeff) {
          this.state = 2;
        } else if (ch === 0x0d) {
          this.state = 3;
        } else if (ch === 0x21) {
          return this.emit('BANG', this.index + 1, input);
        } else if (ch === 0x22) {
          this.state = 5;
        } else if (ch === 0x23) {
          this.state = 6;
        } else if (ch === 0x24) {
          return this.emit('DOLLAR', this.index + 1, input);
        } else if (ch === 0x26) {
          return this.emit('AMPERSAND', this.index + 1, input);
        } else if (ch === 0x28) {
          return this.emit('OPENING_PAREN', this.index + 1, input);
        } else if (ch === 0x29) {
          return this.emit('CLOSING_PAREN', this.index + 1, input);
        } else if (ch === 0x2d) {
          this.state = 11;
        } else if (ch === 0x2e) {
          this.state = 12;
        } else if (ch === 0x30) {
          this.state = 13;
        } else if (ch >= 0x31 && ch <= 0x39) {
          this.state = 14;
        } else if (ch === 0x3a) {
          return this.emit('COLON', this.index + 1, input);
        } else if (ch === 0x3d) {
          return this.emit('EQUALS', this.index + 1, input);
        } else if (ch === 0x40) {
          return this.emit('AT', this.index + 1, input);
        } else if (
          ch >= 0x41 && ch <= 0x5a || ch === 0x5f || ch >= 0x61 && ch <= 0x64 ||
          ch >= 0x67 && ch <= 0x68 || ch >= 0x6a && ch <= 0x6c || ch === 0x6e ||
          ch === 0x70 || ch === 0x72 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x5b) {
          return this.emit('OPENING_BRACKET', this.index + 1, input);
        } else if (ch === 0x5d) {
          return this.emit('CLOSING_BRACKET', this.index + 1, input);
        } else if (ch === 0x65) {
          this.state = 21;
        } else if (ch === 0x66) {
          this.state = 22;
        } else if (ch === 0x69) {
          this.state = 23;
        } else if (ch === 0x6d) {
          this.state = 24;
        } else if (ch === 0x6f) {
          this.state = 25;
        } else if (ch === 0x71) {
          this.state = 26;
        } else if (ch === 0x73) {
          this.state = 27;
        } else if (ch === 0x74) {
          this.state = 28;
        } else if (ch === 0x75) {
          this.state = 29;
        } else if (ch === 0x7b) {
          return this.emit('OPENING_BRACE', this.index + 1, input);
        } else if (ch === 0x7c) {
          return this.emit('BAR', this.index + 1, input);
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
        if (
          ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b ||
          ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 33;
        } else if (ch === 0x22) {
          this.state = 34;
        } else if (ch === 0x5c) {
          this.state = 35;
        } else {
          this.state = REJECT;
        }
      } else if (state === 6) {
        while (ch === 0x09 || ch >= 0x20 && ch <= 0xffff) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        // IGNORED token.
        this.tokenStart = this.index;
        this.state = START;
        continue;
      } else if (state === 11) {
        if (ch === 0x30) {
          this.state = 13;
        } else if (ch >= 0x31 && ch <= 0x39) {
          this.state = 14;
        } else {
          this.state = REJECT;
        }
      } else if (state === 12) {
        if (ch === 0x2e) {
          this.state = 36;
        } else {
          this.state = REJECT;
        }
      } else if (state === 13) {
        if (ch === 0x2e) {
          this.state = 37;
        } else if (ch === 0x45 || ch === 0x65) {
          this.state = 38;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 14) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x2e) {
          this.state = 37;
        } else if (ch === 0x45 || ch === 0x65) {
          this.state = 38;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 18) {
        while (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        this.state = START;
        return this.emit('NAME', this.index, input);
      } else if (state === 21) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 39;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 22) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x72) {
          this.state = 40;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 23) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6c || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6d) {
          this.state = 41;
        } else if (ch === 0x6e) {
          this.state = 42;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 24) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x74 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x75) {
          this.state = 43;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 25) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 44;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 26) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x74 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x75) {
          this.state = 45;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 27) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x62 || ch >= 0x64 && ch <= 0x74 ||
          ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x63) {
          this.state = 46;
        } else if (ch === 0x75) {
          this.state = 47;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 28) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x78 || ch === 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x79) {
          this.state = 48;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 29) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 49;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 33) {
        while (
          ch === 0x09 || ch >= 0x20 && ch <= 0x21 || ch >= 0x23 && ch <= 0x5b ||
          ch >= 0x5d && ch <= 0xffff
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x5c) {
          this.state = 35;
        } else if (ch === 0x22) {
          this.state = START;
          return this.emit('STRING_VALUE', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 34) {
        if (ch === 0x22) {
          this.state = 51;
        } else {
          this.state = START;
          return this.emit('STRING_VALUE', this.index, input);
        }
      } else if (state === 35) {
        if (
          ch === 0x22 || ch === 0x2f || ch === 0x62 || ch === 0x66 ||
          ch === 0x6e || ch === 0x72 || ch === 0x74
        ) {
          this.state = 33;
        } else if (ch === 0x5c) {
          this.state = 52;
        } else if (ch === 0x75) {
          this.state = 53;
        } else {
          this.state = REJECT;
        }
      } else if (state === 36) {
        if (ch === 0x2e) {
          this.state = START;
          return this.emit('ELLIPSIS', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 37) {
        if (ch >= 0x30 && ch <= 0x39) {
          this.state = 55;
        } else {
          this.state = REJECT;
        }
      } else if (state === 38) {
        if (ch === 0x2b || ch === 0x2d) {
          this.state = 56;
        } else if (ch >= 0x30 && ch <= 0x39) {
          this.state = 57;
        } else {
          this.state = REJECT;
        }
      } else if (state === 39) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x74 || ch >= 0x76 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x75) {
          this.state = 58;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 40) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x62 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x61) {
          this.state = 59;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 41) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6f || ch >= 0x71 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x70) {
          this.state = 60;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 42) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x74) {
          this.state = 61;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 43) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x74) {
          this.state = 62;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 44) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('ON', this.index, input);
        }
      } else if (state === 45) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 63;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 46) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x62 && ch <= 0x67 || ch >= 0x69 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x61) {
          this.state = 64;
        } else if (ch === 0x68) {
          this.state = 65;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 47) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch === 0x61 || ch >= 0x63 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x62) {
          this.state = 66;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 48) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6f || ch >= 0x71 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x70) {
          this.state = 67;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 49) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x69) {
          this.state = 68;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 51) {
        while (
          ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 ||
          ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x22) {
          this.state = 69;
        } else if (ch === 0x5c) {
          this.state = 70;
        } else {
          this.state = REJECT;
        }
      } else if (state === 52) {
        while (ch === 0x5c) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (
          ch === 0x2f || ch === 0x62 || ch === 0x66 || ch === 0x6e ||
          ch === 0x72 || ch === 0x74
        ) {
          this.state = 33;
        } else if (ch === 0x75) {
          this.state = 53;
        } else {
          this.state = REJECT;
        }
      } else if (state === 53) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 ||
          ch >= 0x61 && ch <= 0x66
        ) {
          this.state = 71;
        } else {
          this.state = REJECT;
        }
      } else if (state === 55) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x45 || ch === 0x65) {
          this.state = 38;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 56) {
        if (ch >= 0x30 && ch <= 0x39) {
          this.state = 57;
        } else {
          this.state = REJECT;
        }
      } else if (state === 57) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        this.state = START;
        return this.emit('NUMBER', this.index, input);
      } else if (state === 58) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6c || ch >= 0x6e && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6d) {
          this.state = 72;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 59) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x66 || ch >= 0x68 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x67) {
          this.state = 73;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 60) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6c) {
          this.state = 74;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 61) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 75;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 62) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x62 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x61) {
          this.state = 76;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 63) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x72) {
          this.state = 77;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 64) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6b || ch >= 0x6d && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6c) {
          this.state = 78;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 65) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 79;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 66) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x73) {
          this.state = 80;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 67) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 81;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 68) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6f) {
          this.state = 82;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 69) {
        if (
          ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 ||
          ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 51;
        } else if (ch === 0x5c) {
          this.state = 70;
        } else if (ch === 0x22) {
          this.state = 83;
        } else {
          this.state = REJECT;
        }
      } else if (state === 70) {
        while (ch === 0x5c) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (
          ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 ||
          ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 51;
        } else if (ch === 0x22) {
          this.state = 84;
        } else {
          this.state = REJECT;
        }
      } else if (state === 71) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 ||
          ch >= 0x61 && ch <= 0x66
        ) {
          this.state = 85;
        } else {
          this.state = REJECT;
        }
      } else if (state === 72) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('ENUM', this.index, input);
        }
      } else if (state === 73) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6c || ch >= 0x6e && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6d) {
          this.state = 86;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 74) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 87;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 75) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x72) {
          this.state = 88;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 76) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x74) {
          this.state = 89;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 77) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x78 || ch === 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x79) {
          this.state = 90;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 78) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x62 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x61) {
          this.state = 91;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 79) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6c || ch >= 0x6e && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6d) {
          this.state = 92;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 80) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x62 || ch >= 0x64 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x63) {
          this.state = 93;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 81) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('TYPE', this.index, input);
        }
      } else if (state === 82) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 94;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 83) {
        if (
          ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 ||
          ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 51;
        } else if (ch === 0x5c) {
          this.state = 70;
        } else if (ch === 0x22) {
          this.state = START;
          return this.emit('BLOCK_STRING_VALUE', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 84) {
        if (
          ch >= 0x09 && ch <= 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x21 ||
          ch >= 0x23 && ch <= 0x5b || ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 51;
        } else if (ch === 0x5c) {
          this.state = 70;
        } else if (ch === 0x22) {
          this.state = 96;
        } else {
          this.state = REJECT;
        }
      } else if (state === 85) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 ||
          ch >= 0x61 && ch <= 0x66
        ) {
          this.state = 97;
        } else {
          this.state = REJECT;
        }
      } else if (state === 86) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 98;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 87) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6c || ch >= 0x6e && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6d) {
          this.state = 99;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 88) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x65 || ch >= 0x67 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x66) {
          this.state = 100;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 89) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x69) {
          this.state = 101;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 90) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('QUERY', this.index, input);
        }
      } else if (state === 91) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x72) {
          this.state = 102;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 92) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x62 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x61) {
          this.state = 103;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 93) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x71 || ch >= 0x73 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x72) {
          this.state = 104;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 94) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('UNION', this.index, input);
        }
      } else if (state === 96) {
        if (
          ch === 0x0a || ch === 0x0d || ch >= 0x20 && ch <= 0x5b ||
          ch >= 0x5d && ch <= 0xffff
        ) {
          this.state = 51;
        } else if (ch === 0x5c) {
          this.state = 70;
        } else {
          this.state = REJECT;
        }
      } else if (state === 97) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x46 ||
          ch >= 0x61 && ch <= 0x66
        ) {
          this.state = 33;
        } else {
          this.state = REJECT;
        }
      } else if (state === 98) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 105;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 99) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 106;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 100) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x62 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x61) {
          this.state = 107;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 101) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6f) {
          this.state = 108;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 102) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('SCALAR', this.index, input);
        }
      } else if (state === 103) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('SCHEMA', this.index, input);
        }
      } else if (state === 104) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x69) {
          this.state = 109;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 105) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x74) {
          this.state = 110;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 106) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 111;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 107) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x62 || ch >= 0x64 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x63) {
          this.state = 112;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 108) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 113;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 109) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6f || ch >= 0x71 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x70) {
          this.state = 114;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 110) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('FRAGMENT', this.index, input);
        }
      } else if (state === 111) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x74) {
          this.state = 115;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 112) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x64 || ch >= 0x66 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 116;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 113) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('MUTATION', this.index, input);
        }
      } else if (state === 114) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x73 || ch >= 0x75 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x74) {
          this.state = 117;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 115) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x72 || ch >= 0x74 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x73) {
          this.state = 118;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 116) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('INTERFACE', this.index, input);
        }
      } else if (state === 117) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x68 || ch >= 0x6a && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x69) {
          this.state = 119;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 118) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('IMPLEMENTS', this.index, input);
        }
      } else if (state === 119) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6e || ch >= 0x70 && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6f) {
          this.state = 120;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 120) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x6d || ch >= 0x6f && ch <= 0x7a
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 121;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 121) {
        if (
          ch >= 0x30 && ch <= 0x39 || ch >= 0x41 && ch <= 0x5a || ch === 0x5f ||
          ch >= 0x61 && ch <= 0x7a
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('SUBSCRIPTION', this.index, input);
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