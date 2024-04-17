import {expect, test} from 'bun:test';

import {Tokens, isIgnored, lex} from '../../index';

import Parser, {Grammar, choice, plus, r, sequence, t} from '../Parser';

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

const grammar: Grammar<ASTNode> = {
  document: [plus('definition'), (definitions): ASTNode => ({
    definitions,
    kind: 'DOCUMENT',
  })],

  definition: choice('operation'),

  operation: choice('anonymousOperation', 'queryOperation'),

  anonymousOperation: [r('selectionSet'), (selections): ASTNode => ({
    kind: 'OPERATION',
    selections,
    type: 'QUERY',
  })],

  queryOperation: sequence(
    t(Tokens.NAME, (contents) => contents === 'query'),
    t(Tokens.NAME),
    t(Tokens.OPENING_BRACE),
    'selectionSet',
    t(Tokens.CLOSING_BRACE),
  ),

  selectionSet: [
    sequence(
      t(Tokens.OPENING_BRACE).ignore,
      choice('field', 'fragmentSpread', 'inlineFragment').plus,
      t(Tokens.CLOSING_BRACE).ignore,
    ),
    ([selections]): ASTNode => selections,
  ],

  field: [t(Tokens.NAME), (name: string): ASTNode => ({
    kind: 'FIELD',
    name,
  })],

  // TODO: flesh these out
  fragmentSpread: t(Tokens.ELLIPSIS),
  inlineFragment: t(Tokens.ELLIPSIS),
};

test('blinking light', () => {
  const parser = new Parser<ASTNode>(grammar, isIgnored);

  const tokens = lex(`
    # An anonymous operation with one field.
    {
      foo
    }
  `);

  expect(parser.parse(tokens)).toEqual({
    definitions: [{
      type: 'QUERY',
      selections: [{
        kind: 'FIELD',
        name: 'foo',
      }],
      kind: 'OPERATION',
    }],
    kind: 'DOCUMENT',
  });
});

test('grammar hashes', () => {
  // Not an exhaustive check, but an illustrative example.
  expect(grammar).toEqual(
    expect.objectContaining({
      definition: expect.objectContaining({
        hash: expect.stringMatching(/^choice:[a-f0-9]{128}/),
      }),
      document: expect.objectContaining({
        0: expect.objectContaining({
          hash: expect.stringMatching(/^plus:[a-f0-9]{128}/),
        }),
      }),
      operation: expect.objectContaining({
        hash: expect.stringMatching(/^choice:[a-f0-9]{128}/),
      }),
      queryOperation: expect.objectContaining({
        expressions: expect.arrayContaining([expect.objectContaining({
          hash: expect.stringMatching(/^t:[a-f0-9]{128}/),
        })]),
        hash: expect.stringMatching(/^sequence:[a-f0-9]{128}/),
      }),
      selectionSet: expect.objectContaining({
        0: expect.objectContaining({
          hash: expect.stringMatching(/^sequence:[a-f0-9]{128}/),
        }),
      }),
      field: expect.objectContaining({
        0: expect.objectContaining({
          hash: expect.stringMatching(/^t:[a-f0-9]{128}/),
        }),
      }),
    }),
  );
});
