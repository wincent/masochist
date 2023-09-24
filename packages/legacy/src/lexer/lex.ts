import Lexer, {Matcher} from './Lexer';

import type {Token} from './Lexer';

export const Tokens = {
  AMPERSAND: 'AMPERSAND',
  AT: 'AT',
  BANG: 'BANG',
  BAR: 'BAR',
  BLOCK_STRING_VALUE: 'BLOCK_STRING_VALUE',
  CLOSING_BRACE: 'CLOSING_BRACE',
  CLOSING_BRACKET: 'CLOSING_BRACKET',
  CLOSING_PAREN: 'CLOSING_PAREN',
  COLON: 'COLON',
  COMMA: 'COMMA',
  COMMENT: 'COMMENT',
  DOLLAR: 'DOLLAR',
  ELLIPSIS: 'ELLIPSIS',
  EQUALS: 'EQUALS',
  FLOAT_VALUE: 'FLOAT_VALUE',
  INT_VALUE: 'INT_VALUE',
  LINE_TERMINATOR: 'LINE_TERMINATOR',
  NAME: 'NAME',
  OPENING_BRACE: 'OPENING_BRACE',
  OPENING_BRACKET: 'OPENING_BRACKET',
  OPENING_PAREN: 'OPENING_PAREN',
  STRING_VALUE: 'STRING_VALUE',
  UNICODE_BOM: 'UNICODE_BOM',
  WHITESPACE: 'WHITESPACE',
} as const;

type TokenName = keyof typeof Tokens;

/**
 * @see https://graphql.github.io/graphql-spec/draft/
 */
export default function lex(input: string) {
  const lexer = new Lexer<unknown, unknown>((api) => {
    const {a, an, choose, match, maybe, oneOf, repeat, sequence} = api;

    oneOf(
      match('\\"""'),
      a('SOURCE_CHARACTER').except(oneOf(match('"""'), match('\\"""'))),
    ).name('BLOCK_STRING_CHARACTER');

    sequence(match('#'), a('SOURCE_CHARACTER').until('LINE_TERMINATOR')).name(
      'COMMENT',
    );

    match(/\\["\\\/bfnrt]/).name('ESCAPED_CHARACTER');
    match(/\\u[0-9A-Fa-f]{4}/i).name('ESCAPED_UNICODE');
    match(/[eE][+-]?\d+/).name('EXPONENT_PART');
    match(/\.\d+/).name('FRACTIONAL_PART');
    match(/-?(?:0|[1-9]\d*)/).name('INTEGER_PART');
    match(/(?:\n|\r\n|\r)/).name('LINE_TERMINATOR');
    match(/[\u0009\u000a\u000d\u0020-\uffff]/).name('SOURCE_CHARACTER');

    oneOf(
      a('SOURCE_CHARACTER').except(
        oneOf(match('"'), match('\\'), 'LINE_TERMINATOR'),
      ),
      'ESCAPED_UNICODE',
      'ESCAPED_CHARACTER',
    ).name('STRING_CHARACTER');

    const FLOAT_VALUE = sequence(
      'INTEGER_PART',
      oneOf(
        sequence('FRACTIONAL_PART', 'EXPONENT_PART'),
        'EXPONENT_PART',
        'FRACTIONAL_PART',
      ),
    );

    const INT_VALUE = an('INTEGER_PART');

    const NAME = match(/[_A-Za-z][_0-9A-Za-z]*/);

    const BLOCK_STRING_VALUE = sequence(
      match('"""'),
      maybe(repeat('BLOCK_STRING_CHARACTER')),
      match('"""'),
    );

    const STRING_VALUE = sequence(
      match('"'),
      maybe(repeat('STRING_CHARACTER')),
      match('"'),
    );

    const choices: { [K in TokenName]: Matcher<unknown, unknown> } = {
      //
      // Punctuators (2.1.8).
      //
      BANG: match('!'),
      DOLLAR: match('$'),
      AMPERSAND: match('&'),
      OPENING_PAREN: match('('),
      CLOSING_PAREN: match(')'),
      ELLIPSIS: match('...'),
      COLON: match(':'),
      EQUALS: match('='),
      AT: match('@'),
      OPENING_BRACKET: match('['),
      CLOSING_BRACKET: match(']'),
      OPENING_BRACE: match('{'),
      BAR: match('|'),
      CLOSING_BRACE: match('}'),

      //
      // (Other) lexical tokens (2.1.6).
      //
      NAME,
      FLOAT_VALUE, // these two are
      INT_VALUE, // ambiguous
      BLOCK_STRING_VALUE,
      STRING_VALUE,

      //
      // Ignored tokens (2.1.7).
      //
      UNICODE_BOM: match('\ufeff'),
      WHITESPACE: match(/[\t ]+/),
      LINE_TERMINATOR: a('LINE_TERMINATOR'),
      COMMENT: a('COMMENT'),
      COMMA: match(','),
    };

    return choose(choices);
  });

  return lexer.lex(input);
}

const IGNORED = new Set<string>([
  Tokens.COMMA,
  Tokens.COMMENT,
  Tokens.LINE_TERMINATOR,
  Tokens.UNICODE_BOM,
  Tokens.WHITESPACE,
]);

export function isIgnored(token: Token) {
  return IGNORED.has(token.name);
}
