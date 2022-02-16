export function toAnchoredRegExp(regExp: RegExp | string): RegExp {
  if (typeof regExp === 'string') {
    if (regExp.length) {
      // Escape characters listed here: https://stackoverflow.com/a/3561711/2103996
      const escaped = regExp.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      return new RegExp(`^${escaped}`);
    } else {
      throw new Error('StringScanner: Invalid pattern ""');
    }
  } else {
    const {source} = regExp;

    return source.startsWith('^')
      ? regExp
      : new RegExp(`^${source}`, regExp.flags);
  }
}

export default class StringScanner {
  #description?: string;
  #haystack: string;
  #index: number;
  #last: string | null;
  #remaining: string;

  constructor(haystack: string, description?: string) {
    this.#description = description;
    this.#haystack = haystack;
    this.#index = 0;
    this.#last = null;
    this.#remaining = haystack;
  }

  get atEnd(): boolean {
    return this.#remaining.length === 0;
  }

  /**
   * For use in error reporting.
   */
  get description(): string {
    return this.#description ?? 'input string';
  }

  /**
   * Returns context at the current location of the scanner, including line,
   * column, and description.
   *
   * Like the `location` getter, this is only intended to be used in error
   * reporting pathways, so it is not made to be fast.
   */
  get fullContext(): string {
    const [line, column] = this.location;

    return (
      `line ${line}, column ${column} of ${this.description}\n\n` +
      this.context(line, column) +
      '\n'
    );
  }

  get index(): number {
    return this.#index;
  }

  get last(): string | null {
    return this.#last;
  }

  /**
   * Returns tuple of 1-indexed line and column number corresponding to current
   * index.
   *
   * Note that this function is typically only called during error reporting, so
   * no attempt is made to make it fast; it derives the location by scanning
   * through the string incrementing counters.
   */
  get location(): [number, number] {
    if (!this.#index) {
      return [1, 1];
    }

    const startOfCurrentLine = Math.max(
      this.#haystack.lastIndexOf('\n', this.#index - 1) + 1,
      this.#haystack.lastIndexOf('\r', this.#index - 1) + 1,
    );

    const column = this.#index - startOfCurrentLine + 1;

    let line = 0;
    let index = 0;

    this.#haystack.replace(/[^\r\n]*(?:\r?\n|$)/g, (match) => {
      if (match && index <= this.#index) {
        line++;
      }

      index += match.length;

      return match;
    });

    return [line, column];
  }

  get remaining(): string {
    return this.#remaining;
  }

  /**
   * Shows context at the current position in the haystack.
   *
   * Like the `location` getter, this is only intended to be used in error
   * reporting pathways, so it is not made to be fast.
   */
  context(line: number, column: number): string {
    if (this.#haystack === '') {
      return '';
    }

    const lines = this.#haystack.split(/(?:\r?\n)/g);
    const start = Math.max(1, line - 2);
    const end = Math.min(lines.length, line + 3);
    const gutter = end.toString().length + 1;

    let output = '';

    for (let i = start; i <= end; i++) {
      output += i === line ? '>' : ' ';
      output += i.toString().padStart(gutter);
      output += ` | ${lines[i - 1]}\n`;

      if (i === line) {
        output += '|'.padStart(gutter + 3);
        output += ' '.repeat(column) + '^\n';
      }
    }

    return output;
  }

  expect(pattern: RegExp | string, description?: string): string {
    const result = this.scan(pattern);

    if (result === null) {
      throw new Error(
        `Expected ${description ?? pattern} at ${this.fullContext}`,
      );
    }

    return result;
  }

  peek(pattern: RegExp | string): boolean {
    return toAnchoredRegExp(pattern).test(this.#remaining);
  }

  scan(pattern: RegExp | string): string | null {
    const match = this.#remaining.match(toAnchoredRegExp(pattern));

    if (match) {
      const matchText = match[0];

      this.#remaining = this.#remaining.slice(matchText.length);
      this.#index += matchText.length;
      this.#last = matchText;
    } else {
      this.#last = null;
    }

    return this.#last;
  }
}
