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
