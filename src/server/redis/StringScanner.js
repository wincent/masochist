// TODO maybe copy tests from next project

function formatContext(scanner) {
  const [line, column] = scanner.location;

  return (
    `line ${line}, column ${column} of ${scanner.description}\n\n` +
    scanner.context(line, column) +
    '\n'
  );
}

function toAnchoredRegExp(regExp) {
  const {source} = regExp;

  return source.startsWith('^')
    ? regExp
    : new RegExp(`^${source}`, regExp.flags);
}

/**
 * Not the fastest thing in the world, but it makes for readable code, and we
 * don't have to deal with large responses anyway.
 */
export default class StringScanner {
  #description;
  #haystack;
  #index;
  #remaining;

  constructor(haystack, description) {
    this.#description = description;
    this.#haystack = haystack;
    this.#index = 0;
    this.#remaining = haystack;
  }

  /**
   * For use in error reporting.
   */
  get description() {
    return this.#description ?? 'input string';
  }

  get index() {
    return this.#index;
  }

  /**
   * Returns tuple of 1-indexed line and column number corresponding to current
   * index.
   *
   * Note that this function is typically only called during error reporting, so
   * no attempt is made to make it fast; it derives the location by scanning
   * through the string incrementing counters.
   */
  get location() {
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

  get remaining() {
    return this.#remaining;
  }

  atEnd() {
    return this.#remaining.length === 0;
  }

  /**
   * Shows context at the current position in the haystack.
   *
   * Like the `location` getter, this is only intended to be used in error
   * reporting pathways, so it is not made to be fast.
   */
  context(line, column) {
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

  expect(pattern, description) {
    const result = this.scan(pattern);

    if (result === null) {
      throw new Error(
        `Expected ${description ?? pattern} at ${formatContext(this)}`,
      );
    }

    return result;
  }

  peek(pattern) {
    return toAnchoredRegExp(pattern).test(this.#remaining);
  }

  scan(pattern) {
    const match = this.#remaining.match(toAnchoredRegExp(pattern));

    if (match) {
      const matchText = match[0];

      this.#remaining = this.#remaining.slice(matchText.length);
      this.#index += matchText.length;

      return matchText;
    }

    return null;
  }
}
