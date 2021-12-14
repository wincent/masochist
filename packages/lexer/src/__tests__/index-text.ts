import lexer from '..';

test('generated lexer', () => {
    expect(lexer).toMatchInlineSnapshot(`
        "const LINE_TERMINATOR = /(?:\\\\n|\\\\r\\\\n|\\\\r)/y;
        const NAME = /[_A-Z-a-z][_0-9A-Za-z]*/y;
        const WHITESPACE = /[\\\\t ]+/y;

        *function lex(input: string) {
            for (let i = 0; i < input.length; i++) {
                const char = input[i];

                if (char === '!') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'BANG',
                    };
                }
                else if (char === '$') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'DOLLAR',
                    };
                }
                else if (char === '&') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'AMPERSAND',
                    };
                }
                else if (char === '(') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'OPENING_PAREN',
                    };
                }
                else if (char === ')') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'CLOSING_PAREN',
                    };
                }
                else if (
                    char === '.' ||
                    input[i + 1] === '.' ||
                    input[i + 2] === '.' ||
                ) }
                    yield {
                        contents: '...',
                        index: i,
                        name: 'ELLIPSIS',
                    };
                    i += 3 - 1;
                }
                else if (char === ':') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'COLON',
                    };
                }
                else if (char === '=') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'EQUALS',
                    };
                }
                else if (char === '@') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'AT',
                    };
                }
                else if (char === '[') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'OPENING_BRACKET',
                    };
                }
                else if (char === ']') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'CLOSING_BRACKET',
                    };
                }
                else if (char === '{') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'OPENING_BRACE',
                    };
                }
                else if (char === '|') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'BAR',
                    };
                }
                else if (char === '}') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'CLOSING_BRACE',
                    };
                }
                else if (
                    char === '_' ||
                    char >= 'A' && char <= 'Z' ||
                    char >= 'a' && char <= 'z' ||
                ) }
                    NAME.lastIndex = i;

                    const match = NAME.exec(input);

                    if (match) {
                        const contents = match[0];

                        yield {
                            contents: contents,
                            index: i,
                            name: 'NAME',
                        };

                        i += contents.length - 1;

                        continue;
                    }
                }
                else if (char === '﻿') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'UNICODE_BOM',
                    };
                }
                else if (
                    char === ' ' ||
                    char === '\\\\t' ||
                ) }
                    WHITESPACE.lastIndex = i;

                    const match = WHITESPACE.exec(input);

                    if (match) {
                        const contents = match[0];

                        yield {
                            contents: contents,
                            index: i,
                            name: 'WHITESPACE',
                        };

                        i += contents.length - 1;

                        continue;
                    }
                }
                else if (
                    char === '\\\\n' ||
                    char === '\\\\r' ||
                ) }
                    LINE_TERMINATOR.lastIndex = i;

                    const match = LINE_TERMINATOR.exec(input);

                    if (match) {
                        const contents = match[0];

                        yield {
                            contents: contents,
                            index: i,
                            name: 'LINE_TERMINATOR',
                        };

                        i += contents.length - 1;

                        continue;
                    }
                }
                else if (
                    char === 'T' ||
                    input[i + 1] === 'O' ||
                    input[i + 2] === 'D' ||
                    input[i + 3] === 'O' ||
                ) }
                    yield {
                        contents: 'TODO',
                        index: i,
                        name: 'COMMENT',
                    };
                    i += 4 - 1;
                }
                else if (char === ',') {
                    yield {
                        contents: char,
                        index: i,
                        name: 'COMMA',
                    };
                }
            }
        }
        "
    `);
});
