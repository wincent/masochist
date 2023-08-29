/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make graphql" instead
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
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x65) ||
          (ch >= 0x67 && ch <= 0x6e) ||
          (ch >= 0x70 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x5b) {
          return this.emit('OPENING_BRACKET', this.index + 1, input);
        } else if (ch === 0x5d) {
          return this.emit('CLOSING_BRACKET', this.index + 1, input);
        } else if (ch === 0x66) {
          this.state = 21;
        } else if (ch === 0x6f) {
          this.state = 22;
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
          ch === 0x09 ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.state = 26;
        } else if (ch === 0x22) {
          this.state = 27;
        } else if (ch === 0x5c) {
          this.state = 28;
        } else {
          this.state = REJECT;
        }
      } else if (state === 6) {
        while (ch === 0x09 || (ch >= 0x20 && ch <= 0xffff)) {
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
          this.state = 29;
        } else {
          this.state = REJECT;
        }
      } else if (state === 13) {
        if (ch === 0x2e) {
          this.state = 30;
        } else if (ch === 0x45 || ch === 0x65) {
          this.state = 31;
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
          this.state = 30;
        } else if (ch === 0x45 || ch === 0x65) {
          this.state = 31;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 18) {
        while (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x7a)
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        this.state = START;
        return this.emit('NAME', this.index, input);
      } else if (state === 21) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x71) ||
          (ch >= 0x73 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x72) {
          this.state = 32;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 22) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x6d) ||
          (ch >= 0x6f && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 33;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 26) {
        while (
          ch === 0x09 ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x5c) {
          this.state = 28;
        } else if (ch === 0x22) {
          this.state = START;
          return this.emit('STRING_VALUE', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 27) {
        if (ch === 0x22) {
          this.state = 35;
        } else {
          this.state = START;
          return this.emit('STRING_VALUE', this.index, input);
        }
      } else if (state === 28) {
        if (
          ch === 0x22 ||
          ch === 0x2f ||
          ch === 0x62 ||
          ch === 0x66 ||
          ch === 0x6e ||
          ch === 0x72 ||
          ch === 0x74
        ) {
          this.state = 26;
        } else if (ch === 0x5c) {
          this.state = 36;
        } else if (ch === 0x75) {
          this.state = 37;
        } else {
          this.state = REJECT;
        }
      } else if (state === 29) {
        if (ch === 0x2e) {
          this.state = START;
          return this.emit('ELLIPSIS', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 30) {
        if (ch >= 0x30 && ch <= 0x39) {
          this.state = 39;
        } else {
          this.state = REJECT;
        }
      } else if (state === 31) {
        if (ch === 0x2b || ch === 0x2d) {
          this.state = 40;
        } else if (ch >= 0x30 && ch <= 0x39) {
          this.state = 41;
        } else {
          this.state = REJECT;
        }
      } else if (state === 32) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x62 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x61) {
          this.state = 42;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 33) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('ON', this.index, input);
        }
      } else if (state === 35) {
        while (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x22) {
          this.state = 43;
        } else if (ch === 0x5c) {
          this.state = 44;
        } else {
          this.state = REJECT;
        }
      } else if (state === 36) {
        while (ch === 0x5c) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (
          ch === 0x2f ||
          ch === 0x62 ||
          ch === 0x66 ||
          ch === 0x6e ||
          ch === 0x72 ||
          ch === 0x74
        ) {
          this.state = 26;
        } else if (ch === 0x75) {
          this.state = 37;
        } else {
          this.state = REJECT;
        }
      } else if (state === 37) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          this.state = 45;
        } else {
          this.state = REJECT;
        }
      } else if (state === 39) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x45 || ch === 0x65) {
          this.state = 31;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 40) {
        if (ch >= 0x30 && ch <= 0x39) {
          this.state = 41;
        } else {
          this.state = REJECT;
        }
      } else if (state === 41) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        this.state = START;
        return this.emit('NUMBER', this.index, input);
      } else if (state === 42) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x66) ||
          (ch >= 0x68 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x67) {
          this.state = 46;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 43) {
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.state = 35;
        } else if (ch === 0x5c) {
          this.state = 44;
        } else if (ch === 0x22) {
          this.state = 47;
        } else {
          this.state = REJECT;
        }
      } else if (state === 44) {
        while (ch === 0x5c) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.state = 35;
        } else if (ch === 0x22) {
          this.state = 48;
        } else {
          this.state = REJECT;
        }
      } else if (state === 45) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          this.state = 49;
        } else {
          this.state = REJECT;
        }
      } else if (state === 46) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x6c) ||
          (ch >= 0x6e && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x6d) {
          this.state = 50;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 47) {
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.state = 35;
        } else if (ch === 0x5c) {
          this.state = 44;
        } else if (ch === 0x22) {
          this.state = START;
          return this.emit('BLOCK_STRING_VALUE', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 48) {
        if (
          (ch >= 0x09 && ch <= 0x0a) ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x21) ||
          (ch >= 0x23 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.state = 35;
        } else if (ch === 0x5c) {
          this.state = 44;
        } else if (ch === 0x22) {
          this.state = 52;
        } else {
          this.state = REJECT;
        }
      } else if (state === 49) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          this.state = 53;
        } else {
          this.state = REJECT;
        }
      } else if (state === 50) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x64) ||
          (ch >= 0x66 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x65) {
          this.state = 54;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 52) {
        if (
          ch === 0x0a ||
          ch === 0x0d ||
          (ch >= 0x20 && ch <= 0x5b) ||
          (ch >= 0x5d && ch <= 0xffff)
        ) {
          this.state = 35;
        } else if (ch === 0x5c) {
          this.state = 44;
        } else {
          this.state = REJECT;
        }
      } else if (state === 53) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x46) ||
          (ch >= 0x61 && ch <= 0x66)
        ) {
          this.state = 26;
        } else {
          this.state = REJECT;
        }
      } else if (state === 54) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x6d) ||
          (ch >= 0x6f && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x6e) {
          this.state = 55;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 55) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x73) ||
          (ch >= 0x75 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else if (ch === 0x74) {
          this.state = 56;
        } else {
          this.state = START;
          return this.emit('NAME', this.index, input);
        }
      } else if (state === 56) {
        if (
          (ch >= 0x30 && ch <= 0x39) ||
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x7a)
        ) {
          this.state = 18;
        } else {
          this.state = START;
          return this.emit('FRAGMENT', this.index, input);
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