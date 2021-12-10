import StringScanner from './StringScanner';

export default class ResponseParser {
  constructor(payload) {
    this._payload = payload;
    this._scanner = new StringScanner(this._payload);
  }

  _scanCRLF() {
    this._scanner.expect(/\r\n/);
  }

  _scanInt() {
    return parseInt(this._scanner.expect(/\d+/), 10);
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
  parse() {
    switch (this._scanner.scan(/./)) {
      case '_': // Null
        this._scanCRLF();
        return null;
      case '$': // A bulk string.
      case '=': {
        // A verbatim string.
        const length = this._scanInt();
        this._scanCRLF();
        const result = this._scanner.expect(new RegExp(`.{${length}}`));
        this._scanCRLF();
        return result;
      }
      case '%': {
        // A map.
        const size = this._scanInt();
        this._scanCRLF();
        const result = {};
        for (let i = 0; i < size; i++) {
          const key = this.parse();
          const value = this.parse();
          result[key] = value;
        }
        return result;
      }
      case '|': {
        // An "attribute" dictionary (ie. metadata).
        // For now we consume/ignore this, and then recurse.
        const size = this._scanInt();
        this._scanCRLF();
        for (let i = 0; i < size; i++) {
          this.parse(); // Attribute key.
          this.parse(); // Attribute value.
        }
        return this.parse(); // The real value.
      }
      case '*': {
        // An array.
        const length = this._scanInt();
        this._scanCRLF();
        const result = [];
        for (let i = 0; i < length; i++) {
          result.push(this.parse());
        }
        return result;
      }
      case '~': {
        // A set.
        const size = this._scanInt();
        this._scanCRLF();
        const result = new Set();
        for (let i = 0; i < size; i++) {
          result.add(this.parse());
        }
        return result;
      }
      case '+': {
        // A simple string.
        const string = this._scanner.expect(/[^\n\r]*/);
        this._scanCRLF();
        return string;
      }
      case '-': // An error.
        const error = this._scanner.scan(/.*/).trim();
        throw new Error(`Redis error: ${error}`);
      case ':': // An integer. Technically 64-bit, so usual JS disclaimers apply.
      case '(': {
        // An arbitrary precision "big number" integer.
        const int = this._scanInt();
        this._scanCRLF();
        return int;
      }
      case ',': {
        // A double.
        // -inf, inf, \d+(\.\d+)?
        // const int = this._scanInt();
        // this._scanCRLF();
        // return int;
      }
      case '#': {
        // A boolean
        const kind = this._scanner.expect(/[tf]/);
        this._scanCRLF();
        return kind === 't';
      }
      default:
        if (this._scanner.atEnd()) {
          // Nothing left to parse.
          return undefined;
          // throw new Error('Unexpected end of input');
        } else {
          throw new Error('Unexpected character');
        }
    }
  }
}
