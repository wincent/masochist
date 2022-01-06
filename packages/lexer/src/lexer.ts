import generate from './generate';

export const ESCAPED_CHARACTER = /\\["\\\/bfnrt]/;

// NOTE: Don't use "i" flag with this RegExp, because "\U" is not valid.
export const ESCAPED_UNICODE = /\\u[0-9A-Fa-f]{4}/;

export const EXPONENT_PART = /[eE][+-]?\d+/;
export const FRACTIONAL_PART = /\.\d+/;
export const INTEGER_PART = /-?(0|[1-9]\d*)/;
export const LINE_TERMINATOR = /\n|\r\n|\r/;
export const NAME = /[_a-z][_0-9a-z]*/i;
export const SOURCE_CHARACTER = /[\u0009\u000a\u000d\u0020-\uffff]/;
export const WHITESPACE = /[\t ]+/;

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
  // FLOAT_VALUE: 1
  // INT_VALUE: 1

  token(
    'BLOCK_STRING_VALUE',
    '"""',
    // TODO: BLOCK_STRING_CHARACTER
    '"""',
  );

  token(
    'STRING_VALUE',
    '"',
    // TODO: STRING_CHARACTER
    '"',
  );

  //
  // Ignored tokens (2.1.7).
  //
  ignored('UNICODE_BOM', '\ufeff'); // BUG: this doesn't stringify well
  ignored('WHITESPACE', WHITESPACE);
  ignored('LINE_TERMINATOR', LINE_TERMINATOR);
  ignored('COMMENT', 'TODO');
  ignored('COMMA', ',');
});
