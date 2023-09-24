import {ignore, union} from '@masochist/lexer';

// Operators.
export const ASSIGN = '=';
export const BANG = '!';
export const CLOSING_BRACE = '}';
export const CLOSING_BRACKET = ']';
export const CLOSING_PAREN = ')';
export const COMMA = ',';
export const COLON = ':';
export const DOT = '.';
export const EQUALS = '==';
export const GREATER_THAN = '>';
export const GREATER_THAN_OR_EQUAL = '>=';
export const LESS_THAN = '<';
export const LESS_THAN_OR_EQUAL = '<=';
export const LOGICAL_AND = '&&';
export const LOGICAL_OR = '||';
export const MINUS = '-';
export const OPENING_BRACE = '{';
export const OPENING_BRACKET = '[';
export const OPENING_PAREN = '(';
export const PLUS = '+';
export const REST = '...';
export const SEMICOLON = ';';
export const STRICT_EQUALS = '===';

// Reserved words.
//
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words
export const CLASS = 'class';
export const CONST = 'const';
export const CONTINUE = 'continue';
export const DEFAULT = 'default';
export const ELSE = 'else';
export const EXPORT = 'export';
export const FALSE = 'false';
export const FOR = 'for';
export const FUNCTION = 'function';
export const IF = 'if';
export const IMPORT = 'import';
export const LET = 'let';
export const NEW = 'new';
export const NULL = 'null';
export const RETURN = 'return';
export const THIS = 'this';
export const TRUE = 'true';
export const WHILE = 'while';
export const YIELD = 'yield';

// Special identifiers.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers_with_special_meanings

export const GET = 'get';
// others: arguments, as, async, eval, from, get, of, set

// TODO: add $ here
// don't bother with non-ASCII identifiers as described in:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers
export const IDENTIFIER = /[_a-z][_0-9a-z]*/i;
export const NUMBER = /-?(0|[1-9]\d*)(\.\d+)?/;

// String literals.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

const OCTAL_ESCAPE = /\\[0-7][0-7][0-7]/;
const HEX_ESCAPE = /\\x[0-9A-Fa-f][0-9A-Fa-f]/;
const UNICODE_ESCAPE = /\\u[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f]/;
const EXTENDED_UNICODE_ESCAPE =
  /\\u\{[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f]\}/;
const CHARACTER_ESCAPE = /\\./;

const SINGLE_QUOTED_STRING = "'(" +
  [
    OCTAL_ESCAPE,
    HEX_ESCAPE,
    UNICODE_ESCAPE,
    EXTENDED_UNICODE_ESCAPE,
    CHARACTER_ESCAPE,
    /[^'\\]/,
  ]
    .map((regExp) => regExp.toString().slice(1, -1))
    .join('|') +
  ")*'";
const DOUBLE_QUOTED_STRING = '"(' +
  [
    OCTAL_ESCAPE,
    HEX_ESCAPE,
    UNICODE_ESCAPE,
    EXTENDED_UNICODE_ESCAPE,
    CHARACTER_ESCAPE,
    /[^"\\]/,
  ]
    .map((regExp) => regExp.toString().slice(1, -1))
    .join('|') +
  ')*"';

export const STRING_VALUE = new RegExp(
  SINGLE_QUOTED_STRING + '|' + DOUBLE_QUOTED_STRING,
);

// Ignored.
export const COMMENT = /\/\/[^\n\r]*(?:\r?\n)?/;
export const LINE_TERMINATOR = /\n|\r\n|\r/; // Note: we require semicolons.
export const WHITESPACE = /[\t ]+/;

export default union({
  // Order matters; reserved keywords and special identifiers must come before
  // normal identifiers.
  CLASS,
  CONST,
  CONTINUE,
  DEFAULT,
  ELSE,
  EXPORT,
  FALSE,
  FOR,
  FUNCTION,
  GET,
  IF,
  IMPORT,
  LET,
  NEW,
  NULL,
  RETURN,
  THIS,
  TRUE,
  WHILE,
  YIELD,

  ASSIGN,
  BANG,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PAREN,
  COLON,
  COMMA,
  DOT,
  EQUALS,
  GREATER_THAN,
  GREATER_THAN_OR_EQUAL,
  IDENTIFIER,
  LESS_THAN,
  LESS_THAN_OR_EQUAL,
  LOGICAL_AND,
  LOGICAL_OR,
  MINUS,
  NUMBER,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
  PLUS,
  REST,
  SEMICOLON,
  STRICT_EQUALS,
  STRING_VALUE,

  IGNORED: ignore(COMMENT, LINE_TERMINATOR, WHITESPACE),
});
