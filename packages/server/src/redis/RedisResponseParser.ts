import {StringScanner} from '@masochist/common';

// Convenience shortcuts for use with StringScanner.
const CRLF = /\r\n/;
const INT = /\d+/;

export type Response =
  | {[key: string]: Response}
  | Array<Response>
  | Set<Response>
  | boolean
  | null
  | number
  | string
  | undefined;

export default class RedisResponseParser {
  _lines: AsyncIterable<string>;

  constructor(lines: AsyncIterable<string>) {
    this._lines = lines;
  }

  async _parseBulkString(length: number): Promise<string> {
    let buffer = '';
    for await (const line of this._lines) {
      if (line.endsWith('\r\n')) {
        if (buffer.length + line.length - 2 === length) {
          buffer += line.slice(0, -2);
          break;
        } else {
          buffer += line;
        }
      }
      if (buffer.length > length) {
        throw new Error('Unexpected input');
      }
    }
    return buffer;
  }

  /**
   * Parses a Redis RESP3 response.
   *
   * Throws an error if the payload cannot be parsed (ie. it may be incomplete).
   * If that happens, the caller should retry with the full payload.
   *
   * Note that because we use recursion here, we're not expecting to handle
   * deeply lested payloads (and to be honest, I'm not sure they appear in
   * real-world Redis responses anyway).
   *
   * @see https://github.com/antirez/RESP3/blob/master/spec.md
   */
  async parse(): Promise<Response> {
    for await (const line of this._lines) {
      const scanner = new StringScanner(line);
      const char = scanner.scan(/./);
      switch (char) {
        case '_': // Null
          scanner.expect(CRLF);
          return null;
        case '$': // A "bulk" string.
        case '=': {
          // A "verbatim string.
          const length = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          // This is the only type annoying enough to merit its own method.
          return await this._parseBulkString(length);
        }
        case '%': {
          // A map.
          const size = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          const result: Response = {};
          for (let i = 0; i < size; i++) {
            const key = await this.parse();
            const value = await this.parse();
            result[String(key)] = value;
          }
          return result;
        }
        case '|': {
          // An "attribute" dictionary (ie. metadata).
          // For now we consume/ignore this, and then recurse.
          const size = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          for (let i = 0; i < size; i++) {
            await this.parse(); // Attribute key.
            await this.parse(); // Attribute value.
          }
          return await this.parse(); // The real value.
        }
        case '*': {
          // An array.
          const length = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          const result = [];
          for (let i = 0; i < length; i++) {
            result.push(await this.parse());
          }
          return result;
        }
        case '~': {
          // A set.
          const size = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          const result = new Set<Response>();
          for (let i = 0; i < size; i++) {
            result.add(await this.parse());
          }
          return result;
        }
        case '+': {
          // A simple string.
          const string = scanner.expect(/[^\n\r]*/);
          scanner.expect(CRLF);
          return string;
        }
        case '-': // An error.
          const error = scanner.scan(/.*/)?.trim();
          throw new Error(`Redis error: ${error}`);
        case ':': // An integer. Technically 64-bit, so usual JS disclaimers apply.
        case '(': {
          // An arbitrary precision "big number" integer.
          const int = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          return int;
        }
        case ',': {
          // A double.
          let number;
          if (scanner.scan(/-?inf/)) {
            number = -Infinity;
          } else if (scanner.scan(/inf/)) {
            number = Infinity;
          } else {
            number = scanner.expect(/\d+(?:\.\d+)?/);
          }
          scanner.expect(CRLF);
          return number;
        }
        case '#': {
          // A boolean
          const kind = scanner.expect(/[tf]/);
          scanner.expect(CRLF);
          return kind === 't';
        }
        default:
          if (scanner.atEnd) {
            // Nothing left to parse.
            return undefined;
          } else {
            throw new Error(`Unexpected character ${JSON.stringify(char)}`);
          }
      }
    }

    // Explicit return to avoid `TS7030: Not all code paths return a value`
    return;
  }
}
