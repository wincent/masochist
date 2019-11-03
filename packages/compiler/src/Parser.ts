export type Grammar = {
  [symbolName: string]: Expression;
};

type Expression = TerminalSymbol | NonTerminalSymbol;

type TerminalSymbol = {
  kind: 'TOKEN';
  name: string;
  predicate?: (contents: string) => boolean;
};

type AndExpression = {
  kind: 'AND';
  expression: Expression;
};

type ChoiceExpression = {
  kind: 'CHOICE';
  expressions: Array<Expression>;
};

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

type SequenceExpression = Array<Expression>;

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
 */
export default class Parser<T> {
  private _grammar: Grammar;
  private _isIgnored: (token: T) => boolean;
  private _iterator: Generator<T, T> | null;

  constructor(grammar: Grammar, isIgnored: (token: T) => boolean) {
    this._grammar = grammar;
    this._isIgnored = isIgnored;
    this._iterator = null;
  }

  // TODO: provide return type here, should be generic
  parse(iterator: Generator<T, T>): any {
    this._iterator = iterator;

    const rules = Object.keys(this._grammar);

    if (!rules.length) {
      throw new Error('Grammar must have at least one rule');
    }

    const startRule = rules[0];

    return this.evaluate(startRule);
  }

  private evaluate(rule: string) {
    console.log('eval', rule);
    const expression = this._grammar[rule];

    if (typeof expression === 'string') {
      return this.evaluate(expression);
    } else if (Array.isArray(expression)) {
      // try in sequence
    } else {
      switch (expression.kind) {
        case 'CHOICE':
          // try one after another
          for (let i = 0; i < expression.expressions.length; i++) {
            const x = expression.expressions[i];
            return this.evaluate(x);
          }
          break;
        case 'PLUS':
          break;
        case 'TOKEN':
          break;
      }
    }
  }

  /**
   * Returns the next lexical (non-ignored) Token, or `null` if there isn't one.
   *
   * TODO: may need/want to do this with next/previous accessors that ihave on
   * the tokens so that I can do rewind and restart etc
   */
  private next(): T | null {
    while (true) {
      const {done, value} = this._iterator.next();

      if (done) {
        return null;
      }

      if (this._isIgnored(value)) {
        continue;
      }

      return value;
    }
  }
}

export function and(expression: Expression): AndExpression {
  return {
    expression,
    kind: 'AND',
  };
}

export function choice(...expressions: Array<Expression>): ChoiceExpression {
  return {
    expressions,
    kind: 'CHOICE',
  };
}

export function not(expression: Expression): NotExpression {
  return {
    expression,
    kind: 'NOT',
  };
}

export function optional(expression: Expression): OptionalExpression {
  return {
    expression,
    kind: 'OPTIONAL',
  };
}

/**
 * Kleene plus.
 */
export function plus(expression: Expression): PlusExpression {
  return {
    expression,
    kind: 'PLUS',
  };
}

/**
 * Kleene star.
 */
export function star(expression: Expression): StarExpression {
  return {
    expression,
    kind: 'STAR',
  };
}

export function t(
  tokenName: string,
  predicate?: (contents: string) => boolean,
): TerminalSymbol {
  return {
    kind: 'TOKEN',
    name: tokenName,
    predicate,
  };
}
