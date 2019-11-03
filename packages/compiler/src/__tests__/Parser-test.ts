import Parser, {Grammar, choice, plus, t} from '../Parser';
import lex, {Tokens, isIgnored} from '../lex';

test('blinking light', () => {
  const grammar: Grammar = {
    document: 'operation',
    operation: choice('anonymousOperation', 'queryOperation'),
    anonymousOperation: 'selectionSet',
    queryOperation: [
      t(Tokens.NAME, contents => contents === 'query'),
      t(Tokens.NAME),
      t(Tokens.OPENING_BRACE),
      'selectionSet',
      t(Tokens.CLOSING_BRACE),
    ],
    selectionSet: [
      t(Tokens.OPENING_BRACE),
      // TODO: make it possible to write this as t(...).plus
      plus(t(Tokens.NAME)),
      t(Tokens.CLOSING_BRACE),
    ],
  };

  const parser = new Parser(grammar, isIgnored);

  const tokens = lex(`
    # An anonymous operation with one field.
    {
      foo
    }
  `);

  expect(parser.parse(tokens)).toEqual({});
});
