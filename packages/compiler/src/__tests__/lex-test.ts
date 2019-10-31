import lex from '../lex';

test('lexing an empty string', () => {
  const tokens = [...lex('')];

  expect(tokens).toEqual([]);
});

test('lexing whitespace', () => {
  const tokens = [...lex(' \t')];

  expect(tokens).toEqual([
    {contents: ' ', index: 0, name: 'WHITESPACE'},
    {contents: '\t', index: 1, name: 'WHITESPACE'},
  ]);
});

test('lexing a comment', () => {
  const tokens = [...lex('# this is a comment')];

  expect(tokens).toEqual([
    {contents: '# this is a comment', index: 0, name: 'COMMENT'},
  ]);
});

test('lexing multiple comments', () => {
  const tokens = [...lex(`
    # this is a comment
    # this is another
  `)];

  expect(tokens).toEqual([
    {contents: '\n', index: 0, name: 'LINE_TERMINATOR'},
    {contents: ' ', index: 1, name: 'WHITESPACE'},
    {contents: ' ', index: 2, name: 'WHITESPACE'},
    {contents: ' ', index: 3, name: 'WHITESPACE'},
    {contents: ' ', index: 4, name: 'WHITESPACE'},
    {contents: '# this is a comment', index: 5, name: 'COMMENT'},
    {contents: '\n', index: 24, name: 'LINE_TERMINATOR'},
    {contents: ' ', index: 25, name: 'WHITESPACE'},
    {contents: ' ', index: 26, name: 'WHITESPACE'},
    {contents: ' ', index: 27, name: 'WHITESPACE'},
    {contents: ' ', index: 28, name: 'WHITESPACE'},
    {contents: '# this is another', index: 29, name: 'COMMENT'},
    {contents: '\n', index: 46, name: 'LINE_TERMINATOR'},
    {contents: ' ', index: 47, name: 'WHITESPACE'},
    {contents: ' ', index: 48, name: 'WHITESPACE'},
  ]);
});
