import lexer from '..';

test('generated lexer', () => {
  expect(lexer).toMatchInlineSnapshot(`
    "*function lex(input: string) {
        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (char === '!') {
                yield {
                    contents: '!',
                    index: i,
                    name: 'BANG',
                };
            } else if (char === '$') {
                yield {
                    contents: '$',
                    index: i,
                    name: 'DOLLAR',
                };
            } else if (char === '&') {
                yield {
                    contents: '&',
                    index: i,
                    name: 'AMPERSAND',
                };
            } else if (char === '(') {
                yield {
                    contents: '(',
                    index: i,
                    name: 'OPENING_PAREN',
                };
            } else if (char === ')') {
                yield {
                    contents: ')',
                    index: i,
                    name: 'CLOSING_PAREN',
                };
            } else if (
                char /* input[i + 0] */ === '.' &&
                input[i + 1] === '.' &&
                input[i + 2] === '.'
            ) {
                yield {
                    contents: '...',
                    index: i,
                    name: 'ELLIPSIS',
                };
            } else if (char === ':') {
                yield {
                    contents: ':',
                    index: i,
                    name: 'COLON',
                };
            } else if (char === '=') {
                yield {
                    contents: '=',
                    index: i,
                    name: 'EQUALS',
                };
            } else if (char === '@') {
                yield {
                    contents: '@',
                    index: i,
                    name: 'AT',
                };
            } else if (char === '[') {
                yield {
                    contents: '[',
                    index: i,
                    name: 'OPENING_BRACKET',
                };
            } else if (char === ']') {
                yield {
                    contents: ']',
                    index: i,
                    name: 'CLOSING_BRACKET',
                };
            } else if (char === '{') {
                yield {
                    contents: '{',
                    index: i,
                    name: 'OPENING_BRACE',
                };
            } else if (char === '|') {
                yield {
                    contents: '|',
                    index: i,
                    name: 'BAR',
                };
            } else if (char === '}') {
                yield {
                    contents: '}',
                    index: i,
                    name: 'CLOSING_BRACE',
                };
            } else if (
                char === '_' ||
                char >= 'A' && char <= 'Z' ||
                char >= 'a' && char <= 'z'
            ) {
                string:[object Object]
            } else if (
                char /* input[i + 0] */ === '\\"' &&
                input[i + 1] === '\\"' &&
                input[i + 2] === '\\"'
            ) {
                string:[object Object]
            } else if (char === '\\"') {
                string:[object Object]
            } else if (char === '\\\\ufeff') {
                yield {
                    contents: '\\\\ufeff',
                    index: i,
                    name: 'UNICODE_BOM',
                };
            } else if (
                char /* input[i + 0] */ === 'T' &&
                input[i + 1] === 'O' &&
                input[i + 2] === 'D' &&
                input[i + 3] === 'O'
            ) {
                yield {
                    contents: 'TODO',
                    index: i,
                    name: 'COMMENT',
                };
            } else if (char === ',') {
                yield {
                    contents: ',',
                    index: i,
                    name: 'COMMA',
                };
            }
            else {
                throw new Error('Unexpected character');
            }
        }
    }
    "
  `);
});
