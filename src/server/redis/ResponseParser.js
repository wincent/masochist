import StringScanner from './StringScanner';

// Convenience shortcuts for use with StringScanner.
const CRLF = /\r\n/;
const INT = /\d+/;

export default class ResponseParser {
  async _parseBulkString(lines, length) {
    let buffer = '';
    for await (const line of lines) {
      if (line.endsWith('\r\n')) {
        if (buffer.length + line.length - 2 === length) {
          buffer += line.slice(0, -2);
          return buffer;
        } else {
          buffer += line;
        }
      }
      if (buffer.length > length) {
        throw new Error('Unexpected input');
      }
    }
  }

  /**
   * Parses a Redis RESP3 response.
   *
   * Throws an error if the payload cannot be parsed (ie. it may be incomplete).
   * If that happens, the caller should retry with the full payload.
   *
   * Note that because we use recursion here, we're not expecting to handle huge
   * payloads (eg. arrays with 20k items in them etc).
   *
   * @see https://github.com/antirez/RESP3/blob/master/spec.md
   */
  async parse(lines) {
    for await (const line of lines) {
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
          return await this._parseBulkString(lines, length);
        }
        case '%': {
          // A map.
          const size = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          const result = {};
          for (let i = 0; i < size; i++) {
            const key = await this.parse(lines);
            const value = await this.parse(lines);
            result[key] = value;
          }
          return result;
        }
        case '|': {
          // An "attribute" dictionary (ie. metadata).
          // For now we consume/ignore this, and then recurse.
          const size = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          for (let i = 0; i < size; i++) {
            await this.parse(lines); // Attribute key.
            await this.parse(lines); // Attribute value.
          }
          return await this.parse(lines); // The real value.
        }
        case '*': {
          // An array.
          const length = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          const result = [];
          for (let i = 0; i < length; i++) {
            result.push(await this.parse(lines));
          }
          return result;
        }
        case '~': {
          // A set.
          const size = parseInt(scanner.expect(INT), 10);
          scanner.expect(CRLF);
          const result = new Set();
          for (let i = 0; i < size; i++) {
            result.add(await this.parse(lines));
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
          const error = scanner.scan(/.*/).trim();
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
          if (scanner.atEnd()) {
            // Nothing left to parse.
            return undefined;
          } else {
            throw new Error(`Unexpected character ${JSON.stringify(char)}`);
          }
      }
    }
  }
}
