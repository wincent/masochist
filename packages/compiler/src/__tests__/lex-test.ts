import lex, {isIgnored} from '../lex';

test('lexing an empty string', () => {
  const tokens = [...lex('')];

  expect(tokens).toEqual([]);
});

test('lexing whitespace', () => {
  const tokens = [...lex(' \t')];

  expect(tokens).toEqual([{contents: ' \t', index: 0, name: 'WHITESPACE'}]);
});

test('lexing a comment', () => {
  const tokens = [...lex('# this is a comment')];

  expect(tokens).toEqual([
    {contents: '# this is a comment', index: 0, name: 'COMMENT'},
  ]);
});

test('lexing multiple comments', () => {
  const tokens = [
    ...lex(`
    # this is a comment
    # this is another
  `),
  ];

  expect(tokens).toEqual([
    {contents: '\n', index: 0, name: 'LINE_TERMINATOR'},
    {contents: '    ', index: 1, name: 'WHITESPACE'},
    {contents: '# this is a comment', index: 5, name: 'COMMENT'},
    {contents: '\n', index: 24, name: 'LINE_TERMINATOR'},
    {contents: '    ', index: 25, name: 'WHITESPACE'},
    {contents: '# this is another', index: 29, name: 'COMMENT'},
    {contents: '\n', index: 46, name: 'LINE_TERMINATOR'},
    {contents: '  ', index: 47, name: 'WHITESPACE'},
  ]);

  // Note how all of these are ignored.
  expect(tokens.every(isIgnored)).toBe(true);
});

test('lexing a commas', () => {
  const tokens = [...lex(',,,')];

  expect(tokens).toEqual([
    {contents: ',', index: 0, name: 'COMMA'},
    {contents: ',', index: 1, name: 'COMMA'},
    {contents: ',', index: 2, name: 'COMMA'},
  ]);

  expect(tokens.every(isIgnored)).toBe(true);
});

test('lexing names', () => {
  const tokens = [...lex('foo bar baz')];

  expect(tokens).toEqual([
    {contents: 'foo', index: 0, name: 'NAME'},
    {contents: ' ', index: 3, name: 'WHITESPACE'},
    {contents: 'bar', index: 4, name: 'NAME'},
    {contents: ' ', index: 7, name: 'WHITESPACE'},
    {contents: 'baz', index: 8, name: 'NAME'},
  ]);

  expect(tokens.filter(token => !isIgnored(token))).toEqual([
    {contents: 'foo', index: 0, name: 'NAME'},
    {contents: 'bar', index: 4, name: 'NAME'},
    {contents: 'baz', index: 8, name: 'NAME'},
  ]);
});

test('lexing float values', () => {
  expect([...lex('0.1')]).toEqual([
    {contents: '0.1', index: 0, name: 'FLOAT_VALUE'},
  ]);

  expect([...lex('-0.10')]).toEqual([
    {contents: '-0.10', index: 0, name: 'FLOAT_VALUE'},
  ]);

  expect([...lex('-1.4')]).toEqual([
    {contents: '-1.4', index: 0, name: 'FLOAT_VALUE'},
  ]);

  expect([...lex('-200.5')]).toEqual([
    {contents: '-200.5', index: 0, name: 'FLOAT_VALUE'},
  ]);

  expect([...lex('0.1e-10')]).toEqual([
    {contents: '0.1e-10', index: 0, name: 'FLOAT_VALUE'},
  ]);

  expect([...lex('-0.10E+2')]).toEqual([
    {contents: '-0.10E+2', index: 0, name: 'FLOAT_VALUE'},
  ]);
});

test('lexing integer values', () => {
  expect([...lex('0')]).toEqual([{contents: '0', index: 0, name: 'INT_VALUE'}]);

  expect([...lex('-0')]).toEqual([
    {contents: '-0', index: 0, name: 'INT_VALUE'},
  ]);

  expect([...lex('-1')]).toEqual([
    {contents: '-1', index: 0, name: 'INT_VALUE'},
  ]);

  expect([...lex('-200')]).toEqual([
    {contents: '-200', index: 0, name: 'INT_VALUE'},
  ]);
});

test('lexing strings', () => {
  expect([...lex('""')]).toEqual([
    {contents: '""', index: 0, name: 'STRING_VALUE'},
  ]);

  expect([...lex('"foo, bar, baz"')]).toEqual([
    {contents: '"foo, bar, baz"', index: 0, name: 'STRING_VALUE'},
  ]);

  expect([...lex('"foo, \\"bar\\", baz"')]).toEqual([
    {contents: '"foo, \\"bar\\", baz"', index: 0, name: 'STRING_VALUE'},
  ]);

  expect([...lex('"foo,\\n, bar"')]).toEqual([
    {contents: '"foo,\\n, bar"', index: 0, name: 'STRING_VALUE'},
  ]);

  expect([...lex('"\\u02ec\\u039F"')]).toEqual([
    {contents: '"\\u02ec\\u039F"', index: 0, name: 'STRING_VALUE'},
  ]);
});

test('lexing block strings', () => {
  expect([...lex('"""a block string"""')]).toEqual([
    {contents: '"""a block string"""', index: 0, name: 'BLOCK_STRING_VALUE'},
  ]);

  expect([
    ...lex(`"""
      a multiline block string
    """`),
  ]).toEqual([
    {
      contents: `"""
      a multiline block string
    """`,
      index: 0,
      name: 'BLOCK_STRING_VALUE',
    },
  ]);
});

test('lexing punctuators', () => {
  expect([...lex('!$&()...:=@[]{|}')]).toEqual([
    {contents: '!', index: 0, name: 'BANG'},
    {contents: '$', index: 1, name: 'DOLLAR'},
    {contents: '&', index: 2, name: 'AMPERSAND'},
    {contents: '(', index: 3, name: 'OPENING_PAREN'},
    {contents: ')', index: 4, name: 'CLOSING_PAREN'},
    {contents: '...', index: 5, name: 'ELLIPSIS'},
    {contents: ':', index: 8, name: 'COLON'},
    {contents: '=', index: 9, name: 'EQUALS'},
    {contents: '@', index: 10, name: 'AT'},
    {contents: '[', index: 11, name: 'OPENING_BRACKET'},
    {contents: ']', index: 12, name: 'CLOSING_BRACKET'},
    {contents: '{', index: 13, name: 'OPENING_BRACE'},
    {contents: '|', index: 14, name: 'BAR'},
    {contents: '}', index: 15, name: 'CLOSING_BRACE'},
  ]);
});
