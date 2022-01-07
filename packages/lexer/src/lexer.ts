import generate from './generate';

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
export const SOURCE_CHARACTER = /[\u0009\u000a\u000d\u0020-\uffff]/;
export const UNICODE_BOM = /\ufeff/;
export const WHITESPACE = /[\t ]+/;

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
 *   "raw", other than some special whitespace handling dictated by the spec:
 *   - https://spec.graphql.org/October2021/#sec-String-Value.Block-Strings
 *
 * - FLOAT_VALUE and INT_VALUE: An INT_VALUE may not be followed by a dot or a
 *   NAME. As an added wrinkle, an INT_VALUE of zero may not be followed by
 *   another digit (ie. "00" is invalid, as is "01" etc). If an INT_VALUE is
 *   followed by a dot or "e"/"E" then it must be interpreted as a FLOAT_VALUE
 *   instead.
 *
 *   A FLOAT_VALUE must not be followed by a dot (ie. "1.2.3" is invalid) or a
 *   NAME (ie. "1.2L" is invalid).
 *
 *   See:
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
  // FLOAT_VALUE:
  //
  //    const FLOAT_VALUE = sequence(
  //      'INTEGER_PART',
  //      oneOf(
  //        sequence('FRACTIONAL_PART', 'EXPONENT_PART'),
  //        'EXPONENT_PART',
  //        'FRACTIONAL_PART',
  //      ),
  //    );
  //
  // where the various `*_PART` patterns are defined as follows:
  //
  //    match(/[eE][+-]?\d+/).name('EXPONENT_PART');
  //    match(/\.\d+/).name('FRACTIONAL_PART');
  //    match(/-?(?:0|[1-9]\d*)/).name('INTEGER_PART');
  //
  // INT_VALUE:
  //
  //    const INT_VALUE = an('INTEGER_PART');

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

  token(
    'STRING_VALUE',
    '"',
    // TODO: STRING_CHARACTER
    '"',
  );
  // cf previous lexer:
  //
  //    const STRING_VALUE = sequence(
  //      match('"'),
  //      maybe(repeat('STRING_CHARACTER')),
  //      match('"'),
  //    );
  //
  // where STRING_CHARACTER is:
  //
  //    oneOf(
  //      a('SOURCE_CHARACTER').except(
  //        oneOf(match('"'), match('\\'), 'LINE_TERMINATOR'),
  //      ),
  //      'ESCAPED_UNICODE',
  //      'ESCAPED_CHARACTER',
  //    ).name('STRING_CHARACTER');

  //
  // Ignored tokens (2.1.7).
  //
  ignored('UNICODE_BOM', UNICODE_BOM);
  ignored('WHITESPACE', WHITESPACE);
  ignored('LINE_TERMINATOR', LINE_TERMINATOR);
  ignored('COMMENT', COMMENT);
  ignored('COMMA', COMMA);
});
