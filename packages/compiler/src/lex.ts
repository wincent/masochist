import Lexer from './Lexer';

/**
 * @see https://graphql.github.io/graphql-spec/draft/
 */
export default function lex(input: string) {
  const lexer = new Lexer(api => {
    const {a, an, choose, match, maybe, oneOf, repeat, sequence} = api;

    const PUNCTUATORS = {
      BANG: match('!'),
      DOLLAR: match('$'),
      AMPERSAND: match('&'),
      OPEN_PAREN: match('('),
      CLOSE_PAREN: match(')'),
      ELLIPSIS: match('...'),
      COLON: match(':'),
      EQUALS: match('='),
      AT: match('@'),
      OPEN_BRACKET: match('['),
      CLOSE_BRACKET: match(']'),
      OPEN_BRACES: match('{'),
      BAR: match('|'),
      CLOSE_BRACES: match('}'),
    };

    oneOf(
      match('\\"""'),
      a('SOURCE_CHARACTER').until(oneOf(match('"""'), match('\\"""'))),
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
    const PUNCTUATOR = oneOf(...Object.values(PUNCTUATORS));
    const STRING_VALUE = oneOf(
      sequence(match('"'), maybe(repeat('STRING_CHARACTER')), match('"')),
      sequence(
        match('"""'),
        maybe(repeat('BLOCK_STRING_CHARACTER')),
        match('"""'),
      ),
    );

    return choose({
      // Lexical tokens (2.1.6).
      PUNCTUATOR,
      NAME,
      FLOAT_VALUE,
      INT_VALUE,
      STRING_VALUE,

      // Ignored tokens (2.1.7).
      UNICODE_BOM: match('\ufeff'),
      WHITESPACE: match(/[\t ]/),
      LINE_TERMINATOR: a('LINE_TERMINATOR'),
      COMMENT: a('COMMENT'),
      COMMA: match(','),
    });
  });

  return lexer.lex(input);
}
