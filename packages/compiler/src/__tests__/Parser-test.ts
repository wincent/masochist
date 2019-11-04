import Parser, {Grammar, choice, plus, sequence, t} from '../Parser';
import lex, {Tokens, isIgnored} from '../lex';

/**
 * Simplified type for GraphQL AST nodes.
 */
type ASTNode = Definition | Document | Field | Operation | Selection;

type Definition = Operation;

type Document = {
  definitions: Array<Definition>;
  kind: 'DOCUMENT';
};

type Field = {
  kind: 'FIELD';
  name: string;
};

type Operation = {
  kind: 'OPERATION';
  selections: Array<Selection>;
  type: 'MUTATION' | 'QUERY' | 'SUBSCRIPTION';
};

type Selection = Field;

test('blinking light', () => {
  const grammar: Grammar<ASTNode> = {
    document: [
      // TODO: i think this will read better as:
      // r('definition')['+'],
      // or:
      // r('definition').plus,
      plus('definition'),
      (definitions: any): ASTNode => ({
        definitions,
        kind: 'DOCUMENT',
      }),
    ],

    definition: choice('operation'),

    operation: choice('anonymousOperation', 'queryOperation'),

    anonymousOperation: [
      'selectionSet',
      (selections: any): ASTNode => ({
        kind: 'OPERATION',
        selections,
        type: 'QUERY',
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
      ([, selections]: [unknown, any]): ASTNode => selections,
    ],

    field: [
      t(Tokens.NAME),
      (name: string): ASTNode => ({
        kind: 'FIELD',
        name,
      }),
    ],

    // TODO: flesh these out
    fragmentSpread: t(Tokens.ELLIPSIS),
    inlineFragment: t(Tokens.ELLIPSIS),
  };

  const parser = new Parser<ASTNode>(grammar, isIgnored);

  const tokens = lex(`
    # An anonymous operation with one field.
    {
      foo
    }
  `);

  expect(parser.parse(tokens)).toEqual({
    definitions: [
      {
        type: 'QUERY',
        selections: [
          {
            kind: 'FIELD',
            name: 'foo',
          },
        ],
        kind: 'OPERATION',
      },
    ],
    kind: 'DOCUMENT',
  });
});
