import permute from './permute';
import ReversibleMap from './ReversibleMap';

export interface Matcher<K, V> {
  _description?: string;

  _onEnter?: (meta: ReversibleMap<K, V>) => void;

  _onMatch?: (match: RegExpExecArray, meta: ReversibleMap<K, V>) => void;

  // TODO: make a clone method? (ie. so you could clone "pass"/"never" and use
  // them in some way?

  description: string;

  except(predicate: string | Matcher<K, V>): Matcher<K, V>;

  exec(string: string): RegExpExecArray | null;

  name(string: string): Matcher<K, V>;

  onEnter(callback: (meta: ReversibleMap<K, V>) => void): Matcher<K, V>;

  onMatch(callback: (match: RegExpExecArray, meta: ReversibleMap<K, V>) => void): Matcher<K, V>;

  test(string: string): boolean;

  to(predicate: string | Matcher<K, V>): Matcher<K, V>;

  until(predicate: string | Matcher<K, V>): Matcher<K, V>;

  when(predicate: (string: string) => boolean, matcher: string | Matcher<K, V>, alternate: string | Matcher<K, V>): Matcher<K, V>;
}

interface API<K, V> {
  __DEBUG__: {
    index: number;

    meta: Array<[K, V]>;

    remaining: string;
  };

  a(matcherName: string | Matcher<K, V>): Matcher<K, V>;

  allOf(...matchers: Array<string | Matcher<K, V>>): Matcher<K, V>;

  an(matcherName: string | Matcher<K, V>): Matcher<K, V>;

  atEnd(): boolean;

  choose(map: {[name: string]: Matcher<K, V>} | Iterable<[string, Matcher<K, V>]>): () => Token;

  consume(...matchers: Array<string | RegExp | Matcher<K, V>>): string;

  fail(reasonOrMatcher: string | Matcher<K, V>): never;

  lookup(matcher: string | Matcher<K, V>): Matcher<K, V>;

  match(stringOrRegExp: string | RegExp): Matcher<K, V>;

  maybe(matcher: string | Matcher<K, V>): Matcher<K, V>;

  meta: ReversibleMap<K, V>;

  never: Matcher<K, V>;

  oneOf(...matchers: Array<string | Matcher<K, V>>): Matcher<K, V>;

  pass: Matcher<K, V>;

  peek(...matchers: Array<string | RegExp | Matcher<K, V>>): boolean;

  repeat(matcher: string | Matcher<K, V>): Matcher<K, V>;

  sequence(...matchers: Array<string | Matcher<K, V>>): Matcher<K, V>;

  token(name: string, contents: string): Token;

  when(predicate: (string: string) => boolean, matcher: string | Matcher<K, V>, alternate: string | Matcher<K, V>): Matcher<K, V>;
}

export interface Token {
  contents: string;

  index: number;

  name: string;

  next?: Token;

  previous?: Token;
}

type Advance = () => Token;

type Init<K, V> = (api: API<K, V>) => Advance;

/**
 * Class for creating lexer instances.
 *
 * Tokens are recognized by "matchers" created with `match('string')` or
 * `match(/regex/)`, and matchers can be combined through the use of various
 * combinators (`oneOf()`, `repeat()`, `sequence()` etc).
 *
 * Given a set of matchers, the principal operations are then:
 *
 * - peek(): Performs lookahead to see whether a particular matcher would match
 *   at the current location in the input.
 * - consume(): Recognizes a token and moves forward in the input. The
 *   `consume()` call must succeed or an error will be thrown (there is
 *   no rewind functionality for failed recognition; use `peek()` to
 *   perform lookahead instead).
 *
 * It is possible to do some context-sensitive lexing using a supplied `meta`
 * object. Arbitrary data can be written to the `meta` object (often this will
 * happen in an `onMatch()` callback once a matcher has succeeded) and read at
 * any time.
 */
export default class Lexer<K, V> {
  private _init: Init<K, V>;

  /**
   * All matchers keyed by name.
   */
  private _matchers: Map<string, Matcher<K, V>>;

  constructor(init: Init<K, V>) {
    this._init = init;

    this._matchers = new Map();
  }

  *lex(input: string): Generator<Token> {
    const lookup = (matcher: string | Matcher<K, V>) => this.lookup(matcher);

    const setMatcher = (name: string, matcher: Matcher<K, V>) => this._matchers.set(name, matcher);

    /**
     * Arbitrary metadata passed to matchers' `onMatch()` callbacks.
     */
    const meta = new ReversibleMap<K, V>();

    /**
     * A matcher that always matches and consumes nothing.
     */
    const pass: Matcher<K, V> = {
      description: '«pass»',

      except,

      exec(string: string) {
        return getMatchObject('', string);
      },

      name: function() {
        throw new Error('name() called on `pass` singleton');
      },

      onEnter: function() {
        throw new Error('onEnter() called on `pass` singleton');
      },

      onMatch: function() {
        throw new Error('onMatch() called on `pass` singleton');
      },

      test(_: string) {
        return true;
      },

      to,

      until,

      when,
    };

    /**
     * A matcher that never matches anything.
     */
    const never: Matcher<K, V> = {
      description: '«never»',

      except,

      exec(_: string) {
        return null;
      },

      name: function() {
        throw new Error('name() called on `never` singleton');
      },

      onEnter: function() {
        throw new Error('onEnter() called on `never` singleton');
      },

      onMatch: function() {
        throw new Error('onMatch() called on `never` singleton');
      },

      test(_: string) {
        return false;
      },

      to,

      until,

      when,
    };

    /**
     * Returns a matcher that looks up another matcher by name and uses it.
     */
    function a(matcherName: string | Matcher<K, V>): Matcher<K, V> {
      return {
        get description() {
          return this._description || lookup(matcherName).description;
        },

        except,

        exec(string: string) {
          const matcher = lookup(matcherName);

          if (!matcher) {
            throw new Error(`Failed to find matcher with name ${matcherName}`);
          }

          if (this._onEnter) {
            this._onEnter(meta);
          }

          const match = matcher.exec(string);

          if (match !== null) {
            if (this._onMatch) {
              this._onMatch(match, meta);
            }
          }

          return match;
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Alias for `an()` so that you can write matchers that read like
     * `an('ATTTRIBUTE')` instead of `a('ATTRIBUTE')`.
     */
    const an = a;

    /**
     * Returns a composite matcher that matches if all the passed `matchers` match,
     * irrespective of order.
     *
     * This is an order-insensitive analog of `sequence()`.
     *
     * Note that permutating has O(!N) runtime, so should be used sparingly.
     */
    function allOf(...matchers: Array<string | Matcher<K, V>>): Matcher<K, V> {
      // Given matchers [a, b], permute them (eg. [[a, b], [b, a]])...
      const permutations = permute(matchers);

      // ...and transform into: oneOf(sequence(a, b), sequence(b, a)):
      const matcher = oneOf(...permutations.map(m => sequence(...m)));

      return {
        get description() {
          return (
            this._description ||
            'allOf:(' +
              matchers.map(matcher => lookup(matcher).description).join(', ') +
              ')'
          );
        },

        except,

        exec(string) {
          return matcher.exec(string);
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when
      };
    }

    /**
     * Returns a matcher that modifies the parent matcher by having it
     * return `null` whenever the `predicate` matcher identifies a match.
     */
    function except(this: Matcher<K, V>, predicate: string | Matcher<K, V>): Matcher<K, V> {
      const parent = this;

      return {
        get description() {
          return this._description || `^${lookup(parent).description}`;
        },

        except,

        exec(string) {
          const match = parent.exec(string);

          if (match !== null) {
            const negated = lookup(predicate).exec(string);

            if (negated !== null) {
              return null;
            }

            return match;
          }

          return null;
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Turns `stringOrRegExp` into a Matcher.
     */
    function match(stringOrRegExp: string | RegExp): Matcher<K, V> {
      const pattern =
        typeof stringOrRegExp === 'string'
          ? escape(stringOrRegExp)
          : stringOrRegExp.source;

      const regexp = new RegExp(`^(?:${pattern})`, 'u');

      return {
        get description() {
          return (
            this._description ||
            (typeof stringOrRegExp === 'string'
              ? JSON.stringify(stringOrRegExp)
              : stringOrRegExp.toString())
          );
        },

        except,

        exec(string) {
          const match = regexp.exec(string);

          if (match !== null) {
            if (this._onMatch) {
              this._onMatch(match, meta);
            }
          }

          return match;
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Returns a matcher that always matches. If the supplied `matcher` matches, we
     * return the match, otherwise we return a zero-width match.
     *
     * Conceptually equivalent to the "?" regex special character.
     */
    function maybe(matcher: string | Matcher<K, V>): Matcher<K, V> {
      return {
        get description() {
          return this._description || `${lookup(matcher).description}?`;
        },

        except,

        exec(string: string) {
          const match = lookup(matcher).exec(string);

          if (match !== null) {
            return match;
          } else {
            // Fake a zero-width match.
            return getMatchObject('', string);
          }
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Assigns a name to a matcher.
     *
     * Once a matcher has a name, other matchers can reference it by name
     * using the `a()` or `an()` functions.
     */
    function name(this: Matcher<K, V>, string: string): Matcher<K, V> {
      this._description = string;

      setMatcher(string, this);

      return this;
    }

    /**
     * Registers a callback to be invoked when a matcher is entered
     * (immediately prior to attempting to detect a match).
     */
    function onEnter(this: Matcher<K, V>, callback: (meta: ReversibleMap<K, V>) => void): Matcher<K, V> {
      this._onEnter = callback;

      return this;
    }

    /**
     * Registers a callback to be invoked when a matcher matches.
     */
    function onMatch(this: Matcher<K, V>, callback: (match: RegExpExecArray, meta: ReversibleMap<K, V>) => void) {
      this._onMatch = callback;

      return this;
    }

    /**
     * Returns a composite matcher that matches if one of the supplied matchers
     * matches.
     *
     * Conceptually equivalent to the "|" regex special character.
     */
    function oneOf(...matchers: Array<string | Matcher<K, V>>): Matcher<K, V> {
      return {
        get description() {
          return (
            this._description ||
            matchers.map(matcher => lookup(matcher).description).join(' | ')
          );
        },

        except,

        exec(string) {
          if (this._onEnter) {
            this._onEnter(meta);
          }

          for (let i = 0; i < matchers.length; i++) {
            meta.checkpoint();

            const matcher = lookup(matchers[i]);

            const match = matcher.exec(string);

            if (match !== null) {
              if (this._onMatch) {
                this._onMatch(match, meta);
              }

              return match;
            }

            meta.rollback();
          }

          return null;
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Returns a composite matcher that matches if the passed `matcher` matches at
     * least once.
     *
     * Conceptually equivalent to the "+" regex special char.
     */
    function repeat(matcher: string | Matcher<K, V>): Matcher<K, V> {
      return {
        get description() {
          return this._description || `${lookup(matcher).description}+`;
        },

        except,

        exec(string: string) {
          let remaining = string;
          let consumed = '';

          while (remaining !== '') {
            const match = lookup(matcher).exec(remaining);

            if (match !== null) {
              remaining = remaining.slice(match[0].length);

              consumed += match[0];
            } else {
              break;
            }
          }

          if (consumed) {
            return getMatchObject(consumed, string);
          } else {
            return null;
          }
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Returns a composite matcher that matches if all of the supplied matchers
     * match, in order.
     */
    function sequence(...matchers: Array<string | Matcher<K, V>>): Matcher<K, V> {
      return {
        get description() {
          return (
            this._description ||
            matchers.map(matcher => lookup(matcher).description).join(' ')
          );
        },

        except,

        exec(string) {
          meta.checkpoint();

          if (this._onEnter) {
            this._onEnter(meta);
          }

          let remaining = string;
          let matched = '';

          for (let i = 0; i < matchers.length; i++) {
            const matcher = lookup(matchers[i]);
            const match = matcher.exec(remaining);

            if (match !== null) {
              remaining = remaining.slice(match[0].length);

              matched += match[0];
            } else {
              meta.rollback();

              return null;
            }
          }

          const match = getMatchObject(matched, string);

          if (this._onMatch) {
            this._onMatch(match, meta);
          }

          return match;
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    function test(this: Matcher<K, V>, string: string): boolean {
      return this.exec(string) !== null;
    }

    /**
     * Returns a matcher that modifies the parent matcher by having it
     * repeat 0 or more times up-to-and-including where the
     * `predicate` matcher identifies a match.
     *
     * If the matcher reaches the end of the input without matching the
     * predicate, that is not considered a match.
     *
     * See `until()` for a matcher that matches up-to-but-not-including its
     * predicate.
     */
    function to(this: Matcher<K, V>, predicate: string | Matcher<K, V>): Matcher<K, V> {
      const parent = this;

      return {
        get description() {
          return this._description || `->> ${lookup(predicate).description}`;
        },

        except,

        exec(string) {
          const matcher = lookup(predicate);

          let remaining = string;
          let consumed = '';

          while (remaining !== '') {
            let match = matcher.exec(remaining);

            if (match !== null) {
              remaining = remaining.slice(match[0].length);

              return getMatchObject(consumed + match[0], string);
            }

            match = parent.exec(remaining);

            if (match !== null) {
              remaining = remaining.slice(match[0].length);

              consumed += match[0];
            } else {
              break;
            }
          }

          return null;
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Returns a matcher that modifies the parent matcher by having it
     * repeat 0 or more times up-to-but-not-including where the
     * `predicate` matcher identifies a match.
     *
     * If the matcher reaches the end of the input without matching the
     * predicate, that is considered a match.
     *
     * See `to()` for a matcher that matches up-to-and-including its
     * predicate.
     */
    function until(this: Matcher<K, V>, predicate: string | Matcher<K, V>): Matcher<K, V> {
      const parent = this;

      return {
        get description() {
          return this._description || `-> ${lookup(predicate).description}`;
        },

        except,

        exec(string) {
          const matcher = lookup(predicate);

          let remaining = string;
          let consumed = '';

          while (remaining !== '') {
            let match = matcher.exec(remaining);

            if (match !== null) {
              break;
            }

            match = parent.exec(remaining);

            if (match === null) {
              break;
            } else {
              remaining = remaining.slice(match[0].length);

              consumed += match[0];
            }
          }

          return getMatchObject(consumed, string);
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    /**
     * Returns a matcher that evaluates the `predicate` and, if true,
     * applies `matcher`, and otherwise applies the `alternate` matcher.
     *
     * If no explicit `alternate` is provided, uses the `pass` matcher which
     * always matches with a 0-length match.
     */
    function when(predicate: (string: string) => boolean, matcher: string | Matcher<K, V>, alternate: string | Matcher<K, V> = pass): Matcher<K, V> {
      return {
        get description() {
          return (
            this._description ||
            `predicate(${lookup(matcher).description}, ${
              lookup(alternate).description
            })`
          );
        },

        except,

        exec(string) {
          if (predicate(string)) {
            return lookup(matcher).exec(string);
          } else {
            return lookup(alternate).exec(string);
          }
        },

        name,

        onEnter,

        onMatch,

        test,

        to,

        until,

        when,
      };
    }

    let remaining = input;

    const atEnd = () => remaining.length === 0;

    /**
     * Convenience function for building simple lexers from a map (object
     * literal, Map, Iterable) of token names to matchers.
     */
    const choose = (map: {[name: string]: Matcher<K, V>} | Iterable<[string, Matcher<K, V>]>) => {
      return () => {
        let iterable: Iterable<[string, Matcher<K, V>]>;

        if ((map as any)[Symbol.iterator]) {
          iterable = map as Iterable<[string, Matcher<K,V>]>;
        } else {
          iterable = new Map(Object.entries(map));
        }

        for (const [name, matcher] of iterable) {
          if (peek(matcher)) {
            const text = consume();

            return token(name, text);
          }
        }

        fail('Failed to consume all input');

        // See: https://stackoverflow.com/a/46434101
        throw new Error('Unreachable code (fake error for TypeScript)');
      };
    };

    function assertMatchers(matchers: Array<string | RegExp | Matcher<K, V>>): asserts matchers is Array<string | Matcher<K, V>> {
      matchers.forEach(m => {
        if (m instanceof RegExp) {
          throw new Error('assertMatchers(): Expected an array of Matchers, but found RegExp item');
        }
      });
    }

    /**
     * Run one or more `matchers` at the current location and consumes the input.
     * As a special case, if a single string or RegExp argument is passed, a
     * Matcher is created based on that argument and used (that is, the string
     * "foo" would match the text "foo", unlike other places in the Lexer where
     * "foo" would be used to look up another matcher by name).
     *
     * For convenience, a successful `peek()` may be followed by a `consume()`
     * without arguments in order to consume the peeked match.
     *
     * If the matcher does not match, throws an error.
     */
    const consume = (...matchers: [string] | [RegExp] | Array<Matcher<K, V>>) => {
      let matcher: Matcher<K, V>;
      let result;

      // Potentially re-use result of preceeding `peek()`.
      const peeked = peek.peeked;
      delete peek.peeked;

      if (matchers.length === 0) {
        // Return result of previous `peek()`.
        if (peeked != undefined) {
          result = peeked;
        } else {
          throw new Error(
            'Cannot consume() non-existent previous peek() result',
          );
        }
      } else {
        if (peeked !== null) {
          // We previously peeked but aren't consuming the memoized
          // result, so we need to rollback the peek's side-effects.
          meta.rollback();
        }

        if (matchers.length === 1) {
          if (typeof matchers[0] === 'string' || matchers[0] instanceof RegExp) {
            matcher = match(matchers[0]);
          } else {
            matcher = matchers[0];
          }
        } else {
          assertMatchers(matchers);
          matcher = sequence(...matchers);
        }

        result = matcher.exec(remaining);

        if (result === null) {
          fail(matcher);
        }
      }

      remaining = remaining.slice(result![0].length);

      meta.commit();

      return result![0];
    };

    /**
     * Reports a failure to match.
     */
    const fail = (reasonOrMatcher: string | Matcher<K, V>): never => {
      let reason: string;

      if (typeof reasonOrMatcher === 'string') {
        reason = reasonOrMatcher;
      } else {
        reason = `Failed to match ${reasonOrMatcher.description}`;
      }

      // TODO: report index, maybe.
      const context =
        remaining.length > 20 ? `${remaining.slice(0, 20)}...` : remaining;

      throw new Error(`${reason} at: ${JSON.stringify(context)}`);
    };

    /**
     * Performs lookahead by testing one or more `matchers` at the
     * current location in the input. As a special case, if a single
     * string or RegExp argument is passed, a Matcher is created based
     * on that argument and used (that is, the string "foo" would match
     * the text "foo", unlike other places in the Lexer where "foo"
     * would be used to look up another matcher by name).
     *
     * Returns `true` to indicate whether there was a match.
     *
     * The peeked match if memoized, such that an immediately subsequent
     * call to `consume()` without arguments will just access the
     * memoized match instead of repeating the scan.
     */
    const peek = Object.assign(
      (...matchers: [string] | [RegExp] | Array<Matcher<K, V>>): boolean => {
        meta.checkpoint();

        let matcher: Matcher<K, V>;

        if (matchers.length === 1) {
          if (typeof matchers[0] === 'string' || matchers[0] instanceof RegExp) {
            matcher = match(matchers[0]);
          } else {
            matcher = matchers[0];
          }
        } else {
          assertMatchers(matchers);
          matcher = sequence(...matchers);
        }

        // Memoize the result so that we can `consume()` it if desired.
        peek.peeked = matcher.exec(remaining);

        if (peek.peeked === null) {
          meta.rollback();
        }

        return peek.peeked !== null;
      },

      // Mix this in with `Object.assign` so that TypeScript can infer the
      // correct type for `peek`.
      {peeked: undefined as undefined | null | RegExpExecArray}
    );

    /**
     * Produce an object representing a token, given a token `name`
     * and textual `contents`.
     */
    const token = (name: string, contents: string): Token => {
      return {
        contents,
        index: input.length - remaining.length - contents.length,
        name,
      };
    };

    /**
     * @internal
     *
     * Allows for inspection of the internal state of the lexer instance.
     */
    const __DEBUG__ = {
      get index() {
        return input.length - remaining.length;
      },

      get meta() {
        return [...meta.entries()];
      },

      get remaining() {
        return remaining;
      },
    };

    /**
     * Pass API to the callback.
     *
     * Note that there are some internal functions that we don't pass
     * (eg. except, name, to, test), but which are returned by other
     * calls to the API. (eg. `match(...).to(...)`).
     */
    const advance = this._init({
      __DEBUG__,
      a,
      allOf,
      an,
      atEnd,
      choose,
      consume,
      fail,
      lookup,
      match,
      maybe,
      meta,
      never,
      oneOf,
      pass,
      peek,
      repeat,
      sequence,
      token,
      when,
    });

    let index = 0;

    const produceToken = () => {
      index = input.length - remaining.length;

      const token = advance();

      if (!token) {
        fail('Failed to consume all input');
      }

      if (
        typeof token.name !== 'string' ||
        typeof token.contents !== 'string' ||
        !Number.isInteger(token.index)
      ) {
        fail(`Invalid token received at index ${index}`);
      }

      if (!token.contents.length) {
        fail(`Zero-width token ${token.name} produced`);
      }

      return token;
    };

    /**
     * Count of tokens produced by the iterator so far.
     */
    let counter = 0;

    const tokens = new Map();

    /**
     * Defines "next" and "previous" properties on `token`.
     */
    const defineProperties = (token: Token, counter: number) => {
      Object.defineProperties(token, {
        next: {
          // Lazy because token N+1 doesn't exist yet when
          // token N is produced.
          get() {
            if (!atEnd() && !tokens.has(counter + 1)) {
              const nextToken = produceToken();

              defineProperties(nextToken, counter + 1);

              tokens.set(counter + 1, nextToken);
            }

            return tokens.get(counter + 1);
          },
        },
        previous: {
          // Non-enumerable so that tokens can be
          // introspected without the clutter.
          value: tokens.get(counter - 1),
        },
      });
    };

    while (!atEnd()) {
      if (tokens.has(counter + 1)) {
        yield tokens.get(++counter);
      } else {
        const token = produceToken();

        tokens.set(++counter, token);

        defineProperties(token, counter);

        yield token;
      }
    }
  }

  /**
   * Look up a matcher by name.
   */
  lookup(matcher: string | Matcher<K, V>): Matcher<K, V> {
    if (typeof matcher === 'string') {
      if (this._matchers.has(matcher)) {
        return this._matchers.get(matcher)!;
      }
    } else if (typeof matcher.exec === 'function') {
      return matcher;
    }

    throw new Error('Unable to look up matcher');
  }
}

/**
 * Escapes `literal` for use in a RegExp.
 */
function escape(literal: string) {
  // https://github.com/benjamingr/RegExp.escape/blob/master/EscapedChars.md
  return literal.replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&');
}

/**
 * Creates a fake "match" object that mimics what you would get from a call to
 * RegExp.prototype.exec().
 */
function getMatchObject(string: string, input: string) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  const object = [string] as RegExpExecArray;

  object.index = 0;
  object.input = input;

  return object;
}
