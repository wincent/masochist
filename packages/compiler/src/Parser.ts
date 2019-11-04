import {Token} from './Lexer';

/**
 * The type parameter `A` is the type of the AST nodes produced by the Grammar.
 */
export type Grammar<A> = {
  // TODO: improve types here
  [symbolName: string]: Expression | [Expression, (result: any) => A];
};

interface ExpressionOperators {
  optional: Expression;

  // TODO: consider writing these like this instead:
  // foo['?']
  // baz['+']
  // bar['*']

  plus: Expression;

  star: Expression;
}

type Expression = TerminalSymbol | NonTerminalSymbol;

type TerminalSymbol = {
  kind: 'TOKEN';
  name: string;
  predicate?: (contents: string) => boolean;
} & ExpressionOperators;

type AndExpression = {
  kind: 'AND';
  expression: Expression;
};

type ChoiceExpression = {
  kind: 'CHOICE';
  expressions: Array<Expression>;
} & ExpressionOperators;

type NotExpression = {
  kind: 'NOT';
  expression: Expression;
};

type OptionalExpression = {
  kind: 'OPTIONAL';
  expression: Expression;
};

type PlusExpression = {
  kind: 'PLUS';
  expression: Expression;
};

type SequenceExpression = {
  kind: 'SEQUENCE';
  expressions: Array<Expression>;
} & ExpressionOperators;

type StarExpression = {
  kind: 'STAR';
  expression: Expression;
};

type SymbolReference = string;

type NonTerminalSymbol =
  | AndExpression
  | ChoiceExpression
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
  private _grammar: Grammar<A>;
  private _isIgnored: (token: Token) => boolean;
  private _iterator: Generator<Token, Token> | null;

  constructor(grammar: Grammar<A>, isIgnored: (token: Token) => boolean) {
    this._grammar = grammar;
    this._isIgnored = isIgnored;
    this._iterator = null;
  }

  // TODO: provide return type here, should be generic
  parse(iterator: Generator<Token, Token>): any {
    this._iterator = iterator;

    const rules = Object.keys(this._grammar);

    if (!rules.length) {
      throw new Error('Grammar must have at least one rule');
    }

    const startRule = rules[0];

    const maybe = this.evaluate(startRule, this.next(null));

    if (maybe) {
      const [result, next] = maybe;

      if (this.next(next) !== null) {
        throw new Error('Failed to consume all input');
      }

      return result;
    }
  }

  // TODO: error handling
  private evaluate(
    start: Expression,
    current: Token | null,
  ): [A, Token | null] | null {
    if (!current) {
      return null;
    }

    const rule = typeof start === 'string' ? this._grammar[start] : start;

    if (!rule) {
      throw new Error(
        `Failed to resolve symbol reference ${JSON.stringify(rule)}`,
      );
    }

    const [expression, production] = Array.isArray(rule)
      ? rule
      : [rule, identity];

    if (typeof expression === 'string') {
      const maybe = this.evaluate(expression, current);

      if (maybe) {
        const [result, next] = maybe;

        return [production(result), next];
      }
    } else {
      switch (expression.kind) {
        case 'AND':
          // TODO
          break;

        case 'CHOICE':
          {
            let next: Token | null = current;

            for (let i = 0; i < expression.expressions.length; i++) {
              let result;
              const maybe = this.evaluate(expression.expressions[i], next);

              if (maybe) {
                [result, next] = maybe;

                return [production(result), next];
              }
            }
          }
          break;

        case 'NOT':
          // TODO
          break;

        case 'OPTIONAL':
          // TODO
          break;

        case 'PLUS':
          {
            const results = [];
            let next: Token | null = current;

            while (true) {
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
              return [production(results), next];
            }
          }
          break;

        case 'SEQUENCE': {
          const results = [];
          let next: Token | null = current;

          for (let i = 0; i < expression.expressions.length; i++) {
            const maybe = this.evaluate(expression.expressions[i], next);
            let result;

            if (maybe) {
              [result, next] = maybe;

              results.push(result);
            } else {
              return null;
            }
          }

          return [production(results), next];
        }

        case 'STAR':
          // TODO
          break;

        case 'TOKEN':
          if (current && current.name === expression.name) {
            if (
              expression.predicate &&
              !expression.predicate(current.contents)
            ) {
              return null;
            }

            return [production(current.contents), this.next(current)];
          }
          break;
      }
    }

    return null;
  }

  /**
   * Returns the next lexical (non-ignored) Token after `token`, or
   * `null` if there isn't one.
   */
  private next(token: Token | null): Token | null {
    let current = token;

    if (current === null) {
      const {done, value} = this._iterator!.next();

      if (done) {
        return null;
      }
      current = value;
    }

    while (true) {
      current = current.next ?? null;

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
export function and(expression: Expression): AndExpression {
  return {
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
export function choice(...expressions: Array<Expression>): ChoiceExpression {
  return withProperties({
    expressions,
    kind: 'CHOICE',
  });
}

/**
 * Identity function that returns its argument unmodified.
 */
function identity<T extends any>(id: T): T {
  return id;
}

/**
 * "Not" predicate.
 *
 * Succeeds when `expression` does not succeed, but does not consume any input.
 */
export function not(expression: Expression): NotExpression {
  return {
    expression,
    kind: 'NOT',
  };
}

/**
 * Optional combinator.
 *
 * Succeeds when 0 or 1 repetitions of `expression` succeed.
 */
export function optional(expression: Expression): OptionalExpression {
  return {
    expression,
    kind: 'OPTIONAL',
  };
}

/**
 * Kleene plus.
 *
 * Succeeds when 1 or more repetitions of `expression` succeed.
 */
export function plus(expression: Expression): PlusExpression {
  return {
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
  ...expressions: Array<Expression>
): SequenceExpression {
  return withProperties({
    expressions,
    kind: 'SEQUENCE',
  });
}

/**
 * Kleene star.
 *
 * Succeeds when 0 or more repetitions of `expression` succeed.
 */
export function star(expression: Expression): StarExpression {
  return {
    expression,
    kind: 'STAR',
  };
}

/**
 * Represents a terminal symbol of the type identified by `tokenName`.
 *
 * The optional `predicate` function allows an arbitrary check of the token
 * contents to be specified to gate success.
 */
export function t(
  tokenName: string,
  predicate?: (contents: string) => boolean,
): TerminalSymbol {
  return withProperties({
    kind: 'TOKEN', name: tokenName,
    predicate,
  });
}

function withProperties<T extends unknown> (
  base: T,
): T & ExpressionOperators {
  Object.defineProperties(base, {
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
