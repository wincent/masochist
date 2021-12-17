import Builder from './Builder';

import type {Condition} from './Builder';

type Callback = (dsl: {
  ignored: (name: string, ...matchers: Array<Matcher>) => void;
  range: (specifier: string) => CharRange;
  star: (matcher: Matcher) => Star;
  token: (name: string, ...matchers: Array<Matcher>) => void;
}) => void;

type CharRange = {
  from: string;
  kind: 'range';
  to: string;
};

type Matcher = CharRange | Star | string | Set<Matcher>;

type Star = {
  kind: 'star';
  matcher: Matcher;
};

type Token = {
  ignored: boolean;
  name: string;
  matchers: Array<Matcher>;
};

function asciify(text: string): string {
  // Everything outside the printable ASCII range of 0x20 (Space) to 0x7e (~)
  // gets turned into a Unicode escape.
  return text.replace(/[^ -~]/g, (char) => {
    return `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`;
  });
}

/**
 * @see https://tc39.es/ecma262/#sec-quotejsonstring
 */
function escape(
  text: string,
  options: {except: string} = {except: ''},
): string {
  return text.replace(/["\b\f\n\r\t\\]/g, (char) => {
    if (options.except.includes(char)) {
      return char;
    } else {
      return JSON.stringify(char).slice(1, -1);
    }
  });
}

function stringify(text: string): string {
  const hasDoubleQuote = text.includes('"');
  const hasSingleQuote = text.includes("'");

  if (!hasSingleQuote) {
    return `'${asciify(escape(text, {except: '"'}))}'`;
  } else if (!hasDoubleQuote) {
    return `"${asciify(escape(text))}"`;
  } else {
    return JSON.stringify(text);
  }
}

function isStar(matcher: Matcher) {
  if (matcher instanceof Set || typeof matcher === 'string') {
    return false;
  }
  return matcher.kind === 'star';
}

/**
 * Provides a DSL for generating a basic GraphQL lexer.
 */
export default function generate(callback: Callback): string {
  const TOKENS: Array<Token> = [];

  function getConditionsForMatcher(
    binding: string,
    matcher: Matcher,
  ): Condition {
    if (typeof matcher === 'string') {
      if (matcher.length > 1) {
        return {
          conditions: Array.from(matcher).map((char, index) => {
            if (index) {
              return {
                conditions: `input[i + ${index}] === ${stringify(char)}`,
                kind: 'ExpressionCondition',
              };
            } else {
              return {
                conditions: `${binding} /* input[i + 0] */ === ${stringify(char)}`,
                kind: 'ExpressionCondition',
              };
            }
          }),
          kind: 'AndCondition',
        };
      } else {
        return {
          conditions: `${binding} === ${stringify(matcher)}`,
          kind: 'ExpressionCondition',
        };
      }
    } else if (matcher instanceof Set) {
      return {
        conditions: Array.from(matcher).flatMap((matcher) => {
          const nested = getConditionsForMatcher(binding, matcher);
          if (nested.kind === 'OrCondition') {
            throw new Error('getConditionsForMatcher(): illegal nested OrCondition');
          } else {
            return nested;
          }
        }),
        kind: 'OrCondition',
      };
    } else if (matcher.kind === 'range') {
      return {
        conditions: `${binding} >= ${stringify(
          matcher.from,
        )} && ${binding} <= ${stringify(matcher.to)}`,
        kind: 'ExpressionCondition',
      };
    } else if (matcher.kind === 'star') {
      const {matcher: inner} = matcher;
      if (isStar(inner)) {
        throw new Error('getConditionsForMatcher(): illegal nested star()');
      } else {
        return {
          conditions: getConditionsForMatcher(binding, inner),
          kind: 'StarCondition',
        };
      }
    } else {
      throw new Error('getConditionsForMatcher(): unexpected matcher type');
    }
  }

  function ignored(name: string, ...matchers: Array<Matcher>) {
    TOKENS.push({
      ignored: true,
      name,
      matchers,
    });
  }

  const RANGE_REGEXP = /^[^-]-[^-]$/;

  function range(specifier: string): CharRange {
    if (!RANGE_REGEXP.test(specifier)) {
      throw new Error(`Invalid range specifier: ${specifier}`);
    }

    const [from, to] = specifier.split('-');

    return {
      from,
      kind: 'range',
      to,
    };
  }

  function star(matcher: Matcher): Star {
    return {
      kind: 'star',
      matcher,
    };
  }

  function token(name: string, ...matchers: Array<Matcher>) {
    TOKENS.push({
      ignored: false,
      matchers,
      name,
    });
  }

  callback({ignored, range, star, token});

  const b = new Builder();

  b.generator('lex', [['input', 'string']], () => {
    b.for('let i = 0', 'i < input.length', 'i++', () => {
      b.line('const char = input[i];');
      b.blank();

      for (let i = 0; i < TOKENS.length; i++) {
        const token = TOKENS[i];

        const statement = i ? 'elseIf' : 'if';

        const {ignored, name, matchers} = token;

        const lookahead = matchers[0];
        const conditions = getConditionsForMatcher('char', lookahead);
        b[statement](conditions, () => {
          if (matchers.length === 1 && typeof lookahead === 'string') {
            b.yield(() => {
              b.object({
                contents: stringify(lookahead),
                index: 'i',
                name: stringify(name),
              });
            });
            if (lookahead.length > 1) {
              b.line(`i += ${lookahead.length - 1};`);
            }
          } else {
            for (let j = 1; j < matchers.length; j++) {
              const matcher = matchers[j];
              const conditions = getConditionsForMatcher('input[i + 1]', matcher);
              if (conditions.kind === 'StarCondition') {
                b.line('while (true) {');
                b.indent();
                const inner = conditions.conditions;
                if (inner.kind === 'OrCondition') {
                  const innerStatement = j === 1 ? 'if' : 'elseIf';
                  b[innerStatement](inner, () => {
                    b.line('i++;');
                  });
                  b.else(() => {
                    b.line('break;');
                  });
                } else {
                  // TODO
                }
                b.dedent();
                b.line('}');
              } else if (conditions.kind === 'AndCondition') {
              } else if (conditions.kind === 'OrCondition') {
              }
            }
          }
        });
      }

      b.else(() => {
        // TODO: maybe include index here
        b.line("throw new Error('Unexpected character');");
      });
    });
  });

  return b.print();
}
