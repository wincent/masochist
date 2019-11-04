import Parser, {Grammar, choice, plus, sequence, t} from '../Parser';
import lex, {Tokens, isIgnored} from '../lex';

test('blinking light', () => {
  const grammar: Grammar = {
    document: [
      plus('operation'),
      operations => ({
        type: 'DOCUMENT',
        operations,
      }),
    ],

    operation: choice('anonymousOperation', 'queryOperation'),

    anonymousOperation: [
      'selectionSet',
      selections => ({
        kind: 'QUERY',
        type: 'OPERATION',
        selections,
      }),
    ],

    queryOperation: sequence(
      t(Tokens.NAME, contents => contents === 'query'),
      t(Tokens.NAME),
      t(Tokens.OPENING_BRACE),
      'selectionSet',
      t(Tokens.CLOSING_BRACE),
    ),

    selectionSet: [
      sequence(
        t(Tokens.OPENING_BRACE),
        choice('field', 'fragmentSpread', 'inlineFragment').plus,
        t(Tokens.CLOSING_BRACE),
      ),
      ([, selections]) => selections,
    ],

    field: [
      t(Tokens.NAME),
      name => ({
        name,
        type: 'FIELD',
      }),
    ],

    // TODO: flesh these out
    fragmentSpread: t(Tokens.ELLIPSIS),
    inlineFragment: t(Tokens.ELLIPSIS),
  };

  const parser = new Parser(grammar, isIgnored);

  const tokens = lex(`
    # An anonymous operation with one field.
    {
      foo
    }
  `);

  expect(parser.parse(tokens)).toEqual({
    operations: [
      {
        kind: 'QUERY',
        selections: [
          {
            name: 'foo',
            type: 'FIELD',
          },
        ],
        type: 'OPERATION',
      },
    ],
    type: 'DOCUMENT',
  });
});
