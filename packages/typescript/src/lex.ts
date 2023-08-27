/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make typescript" instead
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
        } else if (ch === 0x0a) {
          this.state = 2;
        } else if (ch === 0x0d) {
          this.state = 3;
        } else if (ch === 0x21) {
          return this.emit('BANG', this.index + 1, input);
        } else if (ch === 0x26) {
          this.state = 5;
        } else if (ch === 0x28) {
          return this.emit('OPENING_PAREN', this.index + 1, input);
        } else if (ch === 0x29) {
          return this.emit('CLOSING_PAREN', this.index + 1, input);
        } else if (ch === 0x2c) {
          return this.emit('COMMA', this.index + 1, input);
        } else if (ch === 0x2d) {
          this.state = 9;
        } else if (ch === 0x2e) {
          this.state = 10;
        } else if (ch === 0x30) {
          this.state = 11;
        } else if (ch >= 0x31 && ch <= 0x39) {
          this.state = 12;
        } else if (ch === 0x3a) {
          return this.emit('COLON', this.index + 1, input);
        } else if (ch === 0x3c) {
          this.state = 14;
        } else if (ch === 0x3d) {
          this.state = 15;
        } else if (ch === 0x3e) {
          this.state = 16;
        } else if (
          (ch >= 0x41 && ch <= 0x5a) ||
          ch === 0x5f ||
          (ch >= 0x61 && ch <= 0x7a)
        ) {
          this.state = 17;
        } else if (ch === 0x5b) {
          return this.emit('OPENING_BRACKET', this.index + 1, input);
        } else if (ch === 0x5d) {
          return this.emit('CLOSING_BRACKET', this.index + 1, input);
        } else if (ch === 0x7b) {
          return this.emit('OPENING_BRACE', this.index + 1, input);
        } else if (ch === 0x7c) {
          this.state = 21;
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
        if (ch === 0x26) {
          this.state = START;
          return this.emit('LOGICAL_AND', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 9) {
        if (ch === 0x30) {
          this.state = 11;
        } else if (ch >= 0x31 && ch <= 0x39) {
          this.state = 12;
        } else {
          this.state = REJECT;
        }
      } else if (state === 10) {
        if (ch === 0x2e) {
          this.state = 24;
        } else {
          this.state = REJECT;
        }
      } else if (state === 11) {
        if (ch === 0x2e) {
          this.state = 25;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 12) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        if (ch === 0x2e) {
          this.state = 25;
        } else {
          this.state = START;
          return this.emit('NUMBER', this.index, input);
        }
      } else if (state === 14) {
        if (ch === 0x3d) {
          this.state = START;
          return this.emit('LESS_THAN_OR_EQUAL', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('LESS_THAN', this.index, input);
        }
      } else if (state === 15) {
        if (ch === 0x3d) {
          this.state = 27;
        } else {
          this.state = START;
          return this.emit('ASSIGN', this.index, input);
        }
      } else if (state === 16) {
        if (ch === 0x3d) {
          this.state = START;
          return this.emit('GREATER_THAN_OR_EQUAL', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('GREATER_THAN', this.index, input);
        }
      } else if (state === 17) {
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
        return this.emit('IDENTIFIER', this.index, input);
      } else if (state === 21) {
        if (ch === 0x7c) {
          this.state = START;
          return this.emit('LOGICAL_OR', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 24) {
        if (ch === 0x2e) {
          this.state = START;
          return this.emit('REST', this.index + 1, input);
        } else {
          this.state = REJECT;
        }
      } else if (state === 25) {
        if (ch >= 0x30 && ch <= 0x39) {
          this.state = 31;
        } else {
          this.state = REJECT;
        }
      } else if (state === 27) {
        if (ch === 0x3d) {
          this.state = START;
          return this.emit('STRICT_EQUALS', this.index + 1, input);
        } else {
          this.state = START;
          return this.emit('EQUALS', this.index, input);
        }
      } else if (state === 31) {
        while (ch >= 0x30 && ch <= 0x39) {
          this.index++;
          ch = this.index < length ? input.charCodeAt(this.index) : -1;
        }
        this.state = START;
        return this.emit('NUMBER', this.index, input);
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
