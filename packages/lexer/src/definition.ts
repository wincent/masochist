import ignore from './ignore';
import union from './union';

import type {TransitionTable} from './NFA/TransitionTable';

//
// Punctuators (2.1.8)
//
export const AMPERSAND = '&';
export const AT = '@';
export const BANG = '!';
export const BAR = '|';
export const CLOSING_BRACE = '}';
export const CLOSING_BRACKET = ']';
export const CLOSING_PAREN = ')';
export const COLON = ':';
export const DOLLAR = '$';
export const ELLIPSIS = '...';
export const EQUALS = '=';
export const OPENING_BRACE = '{';
export const OPENING_BRACKET = '[';
export const OPENING_PAREN = '(';

export const ESCAPED_CHARACTER = /\\["\\\/bfnrt]/;

// NOTE: Don't use "i" flag with this RegExp, because "\U" is not valid.
export const ESCAPED_UNICODE = /\\u[0-9A-Fa-f]{4}/;

export const COMMA = /,/;

// Allowed characters = SOURCE_CHARACTER - LINE_TERMINATOR ([\u000a\u000d]).
export const COMMENT = /#[\u0009\u0020-\uffff]*/;

export const EXPONENT_PART = /[eE][+-]?\d+/;
export const FRACTIONAL_PART = /\.\d+/;
export const INTEGER_PART = /-?(0|[1-9]\d*)/;
export const LINE_TERMINATOR = /\n|\r\n|\r/;
export const NAME = /[_a-z][_0-9a-z]*/i;

//
// Reserved NAME words.
//
// The reference implementation lexes all words as NAME, and then uses runtime
// checks to distinguish between operation types (eg. "query", "mutation",
// "subscription") and rule out invalid usages (eg. fragments cannot be named
// "on" etc). Because we're using a bottom-up LR parser, we can't do that, and
// instead need to emit distinct tokens.
export const FRAGMENT = 'fragment';
export const ON = 'on';

// Basically:
//
// INTEGER_PART
// (
//   FRACTIONAL_PART EXPONENT_PART |
//   EXPONENT_PART |
//   FRACTIONAL_PART
// )?
//
// lookahead: cannot be followed by NAME or .
//
export const NUMBER = /-?(0|[1-9]\d*)(\.\d+[eE][+-]?\d+|[eE][+-]?\d+|\.\d+)?/;

export const SOURCE_CHARACTER = /[\u0009\u000a\u000d\u0020-\uffff]/;
export const UNICODE_BOM = /\ufeff/;
export const WHITESPACE = /[\t ]+/;

// This rather ghastly RegExp is made up of any of:
//
// - ESCAPED_UNICODE
// - ESCAPED_CHARACTER; and:
// - SOURCE_CHARACTER, minus:
//   - \u000a (\n)
//   - \u000d (\r)
//   - \u0022 (")
//   - \u005c (\)
//
export const STRING_CHARACTER =
  /(\\u[0-9A-Fa-f]{4}|\\["\\\/bfnrt]|[\u0009\u0020\u0021\u0023-\u005b\u005d-\uffff])/;

// ie. /"«STRING_CHARACTER»*"/
export const STRING_VALUE =
  /"(\\u[0-9A-Fa-f]{4}|\\["\\\/bfnrt]|[\u0009\u0020\u0021\u0023-\u005b\u005d-\uffff])*"/;

// Too hard to write this one as a RegExp, so we do it by hand.
export const BLOCK_STRING_VALUE: TransitionTable = {
  acceptStates: new Set([6]),
  startStates: new Set([0]),
  transitions: [
    /* 0 */ new Map([['Atom:"', new Set([1])]]),
    /* 1 */ new Map([['Atom:"', new Set([2])]]),
    /* 2 */ new Map([['Atom:"', new Set([3])]]),
    /* 3 */ new Map([
      ['Atom:"', new Set([4])],
      ['Atom:\t', new Set([3])],
      ['Atom:\n', new Set([3])],
      ['Atom:\r', new Set([3])],
      ['Range: -!', new Set([3])],
      ['Range:#-[', new Set([3])],
      ['Atom:\\', new Set([7])],
      ['Range:]-\uffff', new Set([3])],
    ]),
    /* 4 */ new Map([
      ['Atom:"', new Set([5])],
      ['Atom:\t', new Set([3])],
      ['Atom:\n', new Set([3])],
      ['Atom:\r', new Set([3])],
      ['Range: -!', new Set([3])],
      ['Range:#-[', new Set([3])],
      ['Atom:\\', new Set([7])],
      ['Range:]-\uffff', new Set([3])],
    ]),
    /* 5 */ new Map([
      ['Atom:"', new Set([6])],
      ['Atom:\t', new Set([3])],
      ['Atom:\n', new Set([3])],
      ['Atom:\r', new Set([3])],
      ['Range: -!', new Set([3])],
      ['Range:#-[', new Set([3])],
      ['Atom:\\', new Set([7])],
      ['Range:]-\uffff', new Set([3])],
    ]),
    /* 6 */ new Map(),
    /* 7 */ new Map([
      ['Atom:"', new Set([8])],
      ['Atom:\t', new Set([3])],
      ['Atom:\n', new Set([3])],
      ['Atom:\r', new Set([3])],
      ['Range: -!', new Set([3])],
      ['Range:#-[', new Set([3])],
      ['Atom:\\', new Set([7])],
      ['Range:]-\uffff', new Set([3])],
    ]),
    /* 8 */ new Map([
      ['Atom:"', new Set([9])],
      ['Atom:\t', new Set([3])],
      ['Atom:\n', new Set([3])],
      ['Atom:\r', new Set([3])],
      ['Range: -!', new Set([3])],
      ['Range:#-[', new Set([3])],
      ['Atom:\\', new Set([7])],
      ['Range:]-\uffff', new Set([3])],
    ]),
    /* 9 */ new Map([
      ['Atom:"', new Set([3])],
      ['Atom:\n', new Set([3])],
      ['Atom:\r', new Set([3])],
      ['Range: -!', new Set([3])],
      ['Range:#-[', new Set([3])],
      ['Atom:\\', new Set([7])],
      ['Range:]-\uffff', new Set([3])],
    ]),
  ],
};

/**
 * A lexer for the GraphQL language in the form of a DFA.
 *
 * GraphQL is a simple language where almost all tokens can be recognized with a
 * single character of lookahead. The only exceptions are:
 *
 * - BLOCK_STRING_VALUE and STRING_VALUE: These require three characters of
 *   lookahead, to distinguish between the former (delimited by '"""') and the
 *   latter (delimited by '"').
 *
 *   A STRING_VALUE may contain escapes, but a BLOCK_STRING_VALUE is effectively
 *   "raw", other than `\"""` and some special whitespace handling dictated by
 *   the spec:
 *
 *   - https://spec.graphql.org/October2021/#sec-String-Value.Block-Strings
 *
 *   Note that `"""` always begins a BLOCK_STRING_VALUE; a sequence like
 *   `""""""` is an empty BLOCK_STRING_VALUE, not three empty STRING_VALUEs.
 *
 * - FLOAT_VALUE and INT_VALUE: An INT_VALUE may not be followed by a dot or
 *   a NAME. As an added wrinkle, an INT_VALUE of zero may not be followed by
 *   another digit (ie. "0" is valid, but "00" is invalid, as is "01" etc). If
 *   an INT_VALUE is followed by a dot or "e"/"E" then it must be interpreted as
 *   a FLOAT_VALUE instead.
 *
 *   A FLOAT_VALUE must not be followed by a dot (ie. "1.2.3" is invalid) or a
 *   NAME (ie. "1.2L" is invalid). Valid FLOAT_VALUEs have the form: -1.234,
 *   2.05e-1, 3.10E2 etc.
 *
 *   See:
 *
 *   - https://spec.graphql.org/October2021/#sec-Int-Value
 *   - https://spec.graphql.org/October2021/#sec-Float-Value
 *
 * In both cases, by building the state machine with "greedy" semantics, we can
 * avoid the need to do explicit lookahead. For example, after scanning '""',
 * if the following character is '"' the machine will greedily continue,
 * assuming a BLOCK_STRING_VALUE. Likewise with numbers, because both
 * FLOAT_VALUE and INT_VALUE share a common prefix, the machine can just proceed
 * greedily and if an INT_VALUE can be pursued further, becoming a FLOAT_VALUE,
 * it will be. The syntax of GraphQL numbers is a subset of the syntax in JS, so
 * a valid GraphQL number is a valid JS number.
 *
 * There are some lookahead restrictions that we handle in the parser instead of
 * the lexer, for simplicity. For example, see the recent changes to the spec
 * in:
 *
 *   - https://github.com/graphql/graphql-spec/pull/601
 *
 * Wherein numbers may not be immediately followed by a NAME (or by a ".").
 */
export default union({
  //
  // Punctuators (2.1.8)
  //
  AMPERSAND,
  AT,
  BANG,
  BAR,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PAREN,
  COLON,
  DOLLAR,
  ELLIPSIS,
  EQUALS,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,

  //
  // Special NAME tokens (these appear first, so have precedence).
  //
  FRAGMENT,
  ON,

  //
  // (Other) lexical tokens (2.1.6).
  //
  BLOCK_STRING_VALUE,
  NAME,
  NUMBER,
  STRING_VALUE,

  //
  // Ignored tokens (2.1.7).
  //
  IGNORED: ignore(COMMA, COMMENT, LINE_TERMINATOR, UNICODE_BOM, WHITESPACE),
});
