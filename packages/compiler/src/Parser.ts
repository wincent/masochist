import {Token} from './Lexer';
import skein from './skein';

/**
 * The type parameter `A` is the type of the AST nodes produced by the Grammar.
 */
export type Grammar<A> = {
  [symbolName: string]: Expression | [Expression, (result: any) => A];
};

interface ExpressionOperators {
  ignore: Expression;

  optional: Expression;

  plus: Expression;

  star: Expression;
}

type Expression = TerminalSymbol | NonTerminalSymbol;

type TerminalSymbol = {
  hash: string;
  kind: 'TOKEN';
  name: string;
  predicate?: (contents: string) => boolean;
} & ExpressionOperators;

type AndExpression = {
  hash: string;
  kind: 'AND';
  expression: Expression;
};

type ChoiceExpression = {
  hash: string;
  kind: 'CHOICE';
  expressions: Array<Expression>;
} & ExpressionOperators;

type IgnoreExpression = {
  hash: string;
  kind: 'IGNORE';
  expression: Expression;
};

type NotExpression = {
  hash: string;
  kind: 'NOT';
  expression: Expression;
};

type OptionalExpression = {
  hash: string;
  kind: 'OPTIONAL';
  expression: Expression;
};

type PlusExpression = {
  hash: string;
  kind: 'PLUS';
  expression: Expression;
};

type SequenceExpression = {
  hash: string;
  kind: 'SEQUENCE';
  expressions: Array<Expression>;
} & ExpressionOperators;

type StarExpression = {
  hash: string;
  kind: 'STAR';
  expression: Expression;
};

type SymbolReference = {
  hash: string;
  kind: 'SYMBOL';
  name: string;
};

type NonTerminalSymbol =
  | AndExpression
  | ChoiceExpression
  | IgnoreExpression
  | NotExpression
  | OptionalExpression
  | PlusExpression
  | SequenceExpression
  | StarExpression
  | SymbolReference;

/**
 * Packrat PEG parser.
 *
 * The type parameter, `A` is the type of AST nodes returned by the production
 * functions in the Grammar.
 */
export default class Parser<A> {
  private _errorIndex: number;
  private _errorStack: Array<string>;
  private _grammar: Grammar<A>;
  private _isIgnored: (token: Token) => boolean;
  private _memo: Map<string, Map<number, [A, Token | null] | null>> | null;
  private _parseStack: Array<string | null>;

  constructor(grammar: Grammar<A>, isIgnored: (token: Token) => boolean) {
    this._grammar = grammar;
    this._isIgnored = isIgnored;
    this._memo = null;

    // Remember rightmost index.
    this._errorIndex = 0;
    this._errorStack = [];
    this._parseStack = [];

    if (!Object.keys(grammar).length) {
      throw new Error('Grammar must have at least one rule');
    }
  }

  parse(iterator: Generator<Token, Token>): A | null {
    const {done, value} = iterator.next();

    if (done) {
      return null;
    }

    let startToken = this._isIgnored(value) ? this.next(value) : value;

    if (!startToken) {
      return null;
    }

    this._memo = new Map();

    const rules = Object.keys(this._grammar);

    const startRule = rules[0];

    const maybe = this.evaluate(startRule, startToken);

    if (maybe) {
      const [result, next] = maybe;

      if (next) {
        // Failed to consume all input.
        this._errorIndex = next.index;
        this._errorStack = [];
      } else {
        this._memo = null;
        return result;
      }
    }

    // Reconstruct input from tokens.
    let input = '';
    let token: Token | undefined = startToken;
    while (token) {
      input += token.contents;
      token = token.next;
    }

    // Derive line and column information from input.
    let column = 1;
    let line = 1;

    for (let i = 0; i < input.length; i++) {
      if (i === this._errorIndex) {
        break;
      }

      const c = input[i];

      if (c === '\r') {
        column = 1;
        line++;

        if (input[i + 1] === '\n') {
          i++;
        }
      } else if (c === '\n') {
        column = 1;
        line++;
      } else {
        column++;
      }
    }

    throw new Error(
      'Parse error:\n' +
        '\n' +
        `  Expected: ${this._errorStack[this._errorStack.length - 1] ||
          'end of input'}\n` +
        '\n' +
        `  Parsing: ${this._errorStack.join(' \u00bb ') || startRule}\n` +
        '\n' +
        `  At: index ${this._errorIndex} (line ${line}, column ${column})\n` +
        '\n' +
        excerpt(input, line, column) +
        '\n',
    );
  }

  private evaluate(
    start: Expression | string,
    current: Token,
  ): [A, Token | null] | null {
    const rule = typeof start === 'string' ? this._grammar[start] : start;

    const index = current.index;

    if (typeof start === 'string') {
      this._parseStack.push(start);
    } else {
      this._parseStack.push(null);
    }

    if (!rule) {
      throw new Error(
        `Failed to resolve symbol reference ${JSON.stringify(rule)}`,
      );
    }

    const [expression, production] = Array.isArray(rule)
      ? rule
      : [rule, identity];

    const key = expression.hash;

    let map: Map<number, [A, Token | null] | null>;

    if (this._memo!.has(key)) {
      map = this._memo!.get(key)!;
    } else {
      map = new Map();
      this._memo!.set(key, map);
    }

    if (map.has(index)) {
      return map.get(index)!;
    }

    // TODO: instead of esoteric label and break statements, just repeat code
    outer: {
      switch (expression.kind) {
        case 'AND':
          // TODO
          break;

        case 'CHOICE':
          {
            let next: Token | null = current;

            for (let i = 0; i < expression.expressions.length; i++) {
              let result;

              if (!next) {
                // same edge case here, although less likely: next choice is
                // optional expression (in practice, those should always
                // include a non-optional part).
                break;
              }

              const maybe = this.evaluate(expression.expressions[i], next);

              if (maybe) {
                [result, next] = maybe;

                this._parseStack.pop();
                const tuple: [A, Token | null] = [production(result), next];
                map.set(index, tuple);
                return tuple;
              }
            }
          }
          break;

        case 'IGNORE':
          {
            const maybe = this.evaluate(expression.expression, current);

            if (maybe) {
              const [result, next] = maybe;

              // Note that we don't actually ignore the result; it is up to
              // the caller to do that (see the SEQUENCE case).
              this._parseStack.pop();
              const tuple: [A, Token | null] = [production(result), next];
              map.set(index, tuple);
              return tuple;
            }
          }
          break;

        case 'NOT':
          // TODO
          break;

        case 'OPTIONAL': {
          const maybe = this.evaluate(expression.expression, current);

          this._parseStack.pop();

          if (maybe) {
            const [result, next] = maybe;

            const tuple: [A, Token | null] = [production(result), next];
            map.set(index, tuple);
            return tuple;
          } else {
            const tuple: [A, Token | null] = [production(undefined), current];
            map.set(index, tuple);
            return tuple;
          }
        }

        case 'PLUS':
          {
            const results = [];
            let next: Token | null = current;

            while (next) {
              const maybe = this.evaluate(expression.expression, next);
              let result;

              if (maybe) {
                [result, next] = maybe;

                results.push(result);
              } else {
                break;
              }
            }

            if (results.length) {
              this._parseStack.pop();
              const tuple: [A, Token | null] = [production(results), next];
              map.set(index, tuple);
              return tuple;
            }
          }
          break;

        case 'SEQUENCE': {
          const results = [];
          let next: Token | null = current;

          for (let i = 0; i < expression.expressions.length; i++) {
            if (!next) {
              // edge case here: no next token, but next expression(s) is/are optional...
              break;
            }

            const subExpression = expression.expressions[i];

            const maybe = this.evaluate(subExpression, next);

            let result;

            if (maybe) {
              [result, next] = maybe;

              if (
                typeof subExpression === 'string' ||
                subExpression.kind !== 'IGNORE'
              ) {
                results.push(result);
              }
            } else {
              break outer;
            }
          }

          this._parseStack.pop();
          const tuple: [A, Token | null] = [production(results), next];
          map.set(index, tuple);
          return tuple;
        }

        case 'STAR': {
          const results = [];
          let next: Token | null = current;

          while (next) {
            const maybe = this.evaluate(expression.expression, next);
            let result;

            if (maybe) {
              [result, next] = maybe;

              results.push(result);
            } else {
              break;
            }
          }

          this._parseStack.pop();
          const tuple: [A, Token | null] = [
            production(results.length ? results : undefined),
            next,
          ];
          map.set(index, tuple);
          return tuple;
        }

        case 'SYMBOL':
          {
            const maybe = this.evaluate(expression.name, current);

            if (maybe) {
              const [result, next] = maybe;

              // TODO: refactor to avoid this repetition
              this._parseStack.pop();
              const tuple: [A, Token | null] = [production(result), next];
              map.set(index, tuple);
              return tuple;
            }
          }
          break;

        case 'TOKEN':
          if (current.name === expression.name) {
            if (
              expression.predicate &&
              !expression.predicate(current.contents)
            ) {
              break outer;
            }

            this._parseStack.pop();
            const tuple: [A, Token | null] = [
              production(current.contents),
              this.next(current),
            ];
            map.set(index, tuple);
            return tuple;
          }
          break;
      }
    }

    if (index > this._errorIndex) {
      this._errorIndex = index;
      this._errorStack = this._parseStack.filter(isNonNull);
    }

    this._parseStack.pop();
    map.set(index, null);
    return null;
  }

  /**
   * Returns the next lexical (non-ignored) Token after `token`, or
   * `null` if there isn't one.
   */
  private next(token: Token | null): Token | null {
    let current = token;

    while (true) {
      current = (current && current.next) || null;

      if (!current) {
        return null;
      }

      // TODO: may want to memoize list of non-ignored tokens so that we don't
      // have to repeatedly scan through ignored tokens.
      if (this._isIgnored(current)) {
        continue;
      }

      return current;
    }
  }
}

/**
 * "And" predicate.
 *
 * Succeeds when `expression` succeeds, but does not consume any input.
 */
export function and(value: Expression | string): AndExpression {
  const expression = wrap(value);

  return {
    hash: `and:${skein(expression.hash)}`,
    expression,
    kind: 'AND',
  };
}

/**
 * Ordered choice.
 *
 * Tries each expression in `expressions`, succeeding as soon as encountering a
 * successful expression. After each unsuccessful match, backtracks.
 */
export function choice(
  ...values: Array<Expression | string>
): ChoiceExpression {
  const expressions = values.map(wrap);

  return withProperties({
    hash: `choice:${skein(expressions.map(hash).join(':'))}`,
    expressions,
    kind: 'CHOICE',
  });
}

/**
 * Takes something that may be a symbol reference (ie. a string referencing
 * another rule) and turns it into an expression.
 */
function wrap(maybeReference: string | Expression): Expression {
  if (typeof maybeReference === 'string') {
    return r(maybeReference);
  } else {
    return maybeReference;
  }
}

function excerpt(text: string, line: number, column: number): string {
  let output = '';

  const lines = text.split(/\r\n?|\n/g);

  const gutter = (line + 2).toString().length;

  for (let i = line - 3; i < line + 2; i++) {
    if (i >= 0 && i < lines.length) {
      if (i === line - 1) {
        output += '> ';
      } else {
        output += '  ';
      }

      output += `${(i + 1).toString().padStart(gutter)} | ${lines[i]}\n`;

      if (i === line - 1) {
        output += `  ${' '.repeat(gutter)} | ${' '.repeat(column - 1)}^\n`;
      }
    }
  }

  return output;
}

/**
 * Returns a hash for `expression`.
 *
 * This is a function to facilitate easy mapping over an array; eg:
 *
 *    expressions.map(hash)
 *
 * as opposed to:
 *
 *    expressions.map(expression => expression.hash)
 *
 */
function hash(expression: Expression): string {
  return expression.hash;
}

/**
 * Identity function that returns its argument unmodified.
 */
function identity<T extends unknown>(id: T): T {
  return id;
}

/**
 * Succeeds when the wrapped `expression` succeeds, and marks the result to be
 * consumed but not propagated.
 *
 * The typical use case is to recognize a syntatic construct like a list, where
 * you want to recognize but discard the opening and closing brackets, but
 * capture the inner contents.
 *
 * Note: currently only the `sequence` functionality pays attention to this
 * modifier.
 */
export function ignore(value: Expression | string): IgnoreExpression {
  const expression = wrap(value);

  return {
    hash: `ignore:${skein(expression.hash)}`,
    expression,
    kind: 'IGNORE',
  };
}

function isNonNull<T>(value: T | null): value is T {
  return value !== null;
}

/**
 * "Not" predicate.
 *
 * Succeeds when `expression` does not succeed, but does not consume any input.
 */
export function not(value: Expression | string): NotExpression {
  const expression = wrap(value);

  return {
    hash: `not:${skein(expression.hash)}`,
    expression,
    kind: 'NOT',
  };
}

/**
 * Optional combinator.
 *
 * Succeeds when 0 or 1 repetitions of `expression` succeed.
 */
export function optional(value: Expression | string): OptionalExpression {
  const expression = wrap(value);

  return {
    hash: `optional:${skein(expression.hash)}`,
    expression,
    kind: 'OPTIONAL',
  };
}

/**
 * Kleene plus.
 *
 * Succeeds when 1 or more repetitions of `expression` succeed.
 */
export function plus(value: Expression | string): PlusExpression {
  const expression = wrap(value);

  return {
    hash: `plus:${skein(expression.hash)}`,
    expression,
    kind: 'PLUS',
  };
}

/**
 * Sequence.
 *
 * Tries each expression in `expressions`, succeeding if all expressions are
 * successful. Fails on any unsuccessful match.
 */
export function sequence(
  ...values: Array<Expression | string>
): SequenceExpression {
  const expressions = values.map(wrap);

  return withProperties({
    hash: `sequence:${skein(expressions.map(hash).join(':'))}`,
    expressions,
    kind: 'SEQUENCE',
  });
}

/**
 * Kleene star.
 *
 * Succeeds when 0 or more repetitions of `expression` succeed.
 */
export function star(value: Expression | string): StarExpression {
  const expression = wrap(value);

  return {
    hash: `star:${skein(expression.hash)}`,
    expression,
    kind: 'STAR',
  };
}

/**
 * Creates a symbol that references another rule.
 */
export function r(name: string): SymbolReference {
  return {
    hash: `r:${skein(name)}`,
    kind: 'SYMBOL',
    name,
  };
}

/**
 * Represents a terminal symbol of the type identified by `name`.
 *
 * The optional `predicate` function allows an arbitrary check of the token
 * contents to be specified to gate success.
 *
 * TODO: add disclaimer here about hashes assuming predicate doesn't close over
 * anything...
 */
export function t(
  name: string,
  predicate?: (contents: string) => boolean,
): TerminalSymbol {
  return withProperties({
    hash: `t:${skein(
      [name, predicate?.toString() ?? ''].map(skein).join(':'),
    )}`,
    kind: 'TOKEN',
    name,
    predicate,
  });
}

function withProperties<T extends unknown>(base: T): T & ExpressionOperators {
  Object.defineProperties(base, {
    ignore: {
      get() {
        return withProperties(ignore(base as Expression));
      },
    },

    optional: {
      get() {
        return withProperties(optional(base as Expression));
      },
    },

    plus: {
      get() {
        return withProperties(plus(base as Expression));
      },
    },

    star: {
      get() {
        return withProperties(star(base as Expression));
      },
    },
  });

  return base as T & ExpressionOperators;
}
