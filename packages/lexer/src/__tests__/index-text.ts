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
                char === '.' &&
                input[i + 1] === '.' &&
                input[i + 2] === '.'
            ) {
                yield {
                    contents: '...',
                    index: i,
                    name: 'ELLIPSIS',
                };
                i += 2;
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
                [object Set]
            } else if (
                char === '\\"' &&
                input[i + 1] === '\\"' &&
                input[i + 2] === '\\"'
            ) {
                char === '\\"',input[i + 1] === '\\"',input[i + 2] === '\\"'
            } else if (char === '\\"') {
                char === '\\"'
            } else if (char === '\\\\ufeff') {
                yield {
                    contents: '\\\\ufeff',
                    index: i,
                    name: 'UNICODE_BOM',
                };
            } else if (
                char === 'T' &&
                input[i + 1] === 'O' &&
                input[i + 2] === 'D' &&
                input[i + 3] === 'O'
            ) {
                yield {
                    contents: 'TODO',
                    index: i,
                    name: 'COMMENT',
                };
                i += 3;
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
