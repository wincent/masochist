import generate from './generate';

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

export const BLOCK_STRING_VALUE =
  /"""(\\"""|[\u0009\u000a\u000d\u0020-\uffff])*"""/;

// TODO: figure out how to write this as a regexp, then make sure our
// regexp-to-DFA conversion doesn't mangle it.
export const BLOCK_STRING_VALUE_TT = {
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
 * Generate a lexer for the GraphQL language.
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
 */
export default generate(({ignored, token}) => {
  //
  // Punctuators (2.1.8)
  //
  token('BANG', '!');
  token('DOLLAR', '$');
  token('AMPERSAND', '&');
  token('OPENING_PAREN', '(');
  token('CLOSING_PAREN', ')');
  token('ELLIPSIS', '...');
  token('COLON', ':');
  token('EQUALS', '=');
  token('AT', '@');
  token('OPENING_BRACKET', '[');
  token('CLOSING_BRACKET', ']');
  token('OPENING_BRACE', '{');
  token('BAR', '|');
  token('CLOSING_BRACE', '}');

  //
  // (Other) lexical tokens (2.1.6).
  //
  token('NAME', NAME);

  // TODO: figure out how to do this without back-tracking
  // about numbers: see recent changes to spec:
  // https://github.com/graphql/graphql-spec/pull/601
  //
  // lookahead: may not be followed by NAME character or "."
  //
  // probably going to handle this in the parser

  token(
    'BLOCK_STRING_VALUE',
    '"""',
    // TODO: BLOCK_STRING_CHARACTER
    '"""',
  );
  // cf previous lexer:
  //
  //    const BLOCK_STRING_VALUE = sequence(
  //      match('"""'),
  //      maybe(repeat('BLOCK_STRING_CHARACTER')),
  //      match('"""'),
  //    );
  //
  // where BLOCK_STRING_CHARACTER is:
  //
  //    oneOf(
  //      match('\\"""'),
  //      a('SOURCE_CHARACTER').except(oneOf(match('"""'), match('\\"""'))),
  //    ).name('BLOCK_STRING_CHARACTER');

  // if I were to write that with my imaginary DSL, it would be...
  //
  //     [impossible to write without lookahead...]
  //     /
  //     this:                  \\"""
  //     or:                    |
  //     this (anything):       [\u0009\u000a\u000d\u0020-\uffff]
  //     negative lookahead:        (?!"""|\\""")
  //     /
  //
  //     match \""" or .... nah... let's try just the second branch:
  //
  //     match any SOURCE_CHARACTER except " or \\
  //     any \\ not followed by """
  //     any " not followed by ""
  //
  //     and the "not followed by" bit requires, you guess it, lookahead...
  //     but if you had that, then you could union that with: match \"""
  //
  // https://stackoverflow.com/questions/14802732/finding-the-complement-of-a-dfa
  //
  // eg. given _complete_ DFA, toggle accept-ness of every state
  //
  //                        "      "      "
  // TRIPLE_QUOTE = -->  0 ---> 1 ---> 2 ---> 3 (accept)
  //                     \      \      \
  //                 [^"] ----------------> 4 (sink/error/exit)
  //                                      / \
  //                                      \_/ (self transition on any input)
  //                                       *
  //  COMPLEMENT = same, but 0/1/2/4 are now accept states; 3 is the only state
  //  that doesn't accept -- recognizes everything except """
  //
  // but see also: https://cs.stackexchange.com/questions/2557/how-to-simulate-backreferences-lookaheads-and-lookbehinds-in-finite-state-auto
  //
  // try \\"""
  // or  anything (record index)
  //     then """ (if accepts, didn't match)
  //     or \\""" (if accepts, didn't match)
  //
  // ie. epsilon transitions to those two other machines...

  token('STRING_VALUE', '"', STRING_CHARACTER, '"');

  //
  // Ignored tokens (2.1.7).
  //
  ignored('UNICODE_BOM', UNICODE_BOM);
  ignored('WHITESPACE', WHITESPACE);
  ignored('LINE_TERMINATOR', LINE_TERMINATOR);
  ignored('COMMENT', COMMENT);
  ignored('COMMA', COMMA);
});

// Expect generated lexer to look something like the following...
//
// eg. for NAME translation table:
//
//    {
//      acceptStates: new Set([1]),
//      startStates: new Set([0]),
//      transitions: [
//        /* 0 */ new Map([
//          ['Range:a-z', new Set([1])],
//          ['Range:A-Z', new Set([1])],
//          ['Atom:_', new Set([1])],
//        ]),
//        /* 1 */ new Map([
//          ['Range:a-z', new Set([1])],
//          ['Range:A-Z', new Set([1])],
//          ['Atom:_', new Set([1])],
//          ['Range:0-9', new Set([1])],
//        ]),
//      ],
//    }

// TODO: add invariant; as these are DFAs, the target Set should only ever have
// one member (a DFA is a special case of NFA, but we are only showing NFA-ness
// in the typesystem right now and to be honest I am not sure we _could_ do
// anything else; we can in the transition table at least)

const input = 'something';
let i = 0;
const start = 0;
let state = 0;
let accept = null;

const ACCEPT = -2;
const REJECT = -1;

main_loop: while (i < input.length) {
  const ch = input[i];
  switch (state) {
    case 0:
      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_') {
        state = 1;
      } else {
        state = REJECT;
      }
      break;
    case 1:
      if (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        ch === '_' ||
        (ch >= '9' && ch <= '9')
      ) {
        state = 1;
      } else {
        state = ACCEPT;
      }
      break;
    case REJECT:
      // We shouldn't even be trying to recognize a token unless lookahead tells
      // us to, so failure means invalid input.
      throw new Error('failed to recognize token');
    case ACCEPT:
      accept = 'NAME';
      break main_loop;
  }
  i++;
}

// Probably want Ragel-like actions that I can define to emit tokens.  And
// specify priority on transitions so I can take the union of machines and have
// them do the right thing faced with "foo \" bar" and such (might even obviate
// the need for lookahead).
