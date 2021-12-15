import generate from './generate';

// const ESCAPED_CHARACTER = /\\["\\\/bfnrt]/y;
// const ESCAPED_UNICODE = /\\u[0-9A-Fa-f]{4}/iy;
// const EXPONENT_PART = /[eE][+-]?\d+/y;
// const FRACTIONAL_PART = /\.\d+/y;
// const INTEGER_PART = /-?(?:0|[1-9]\d*)/y;
// const LINE_TERMINATOR = /(?:\n|\r\n|\r)/y;
// const NAME = /[_A-Za-z][_0-9A-Za-z]*/y;
// const SOURCE_CHARACTER = /[\u0009\u000a\u000d\u0020-\uffff]/y;

export default generate(({ignored, range, star, token}) => {
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
    token(
        'NAME',
        // TODO: turn this?:
        //  [_A-Za-z][_A-Za-z0-9]*
        // into this?:
        // (not sure if this is a good idea or not)
        new Set(['_', range('A-Z'), range('a-z')]),
        star(new Set(['_', range('A-Z'), range('a-z'), range('0-9')])),
    );

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
    // ignored('WHITESPACE', /[\t ]+/, {
    //     lookahead: [' ', '\t'],
    // });
    // ignored('LINE_TERMINATOR', /(?:\n|\r\n|\r)/, {
    //     lookahead: ['\n', '\r'],
    // });
    ignored('COMMENT', 'TODO');
    ignored('COMMA', ',');
});
