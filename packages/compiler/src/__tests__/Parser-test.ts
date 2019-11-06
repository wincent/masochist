import Parser, {Grammar, VirtualNode, VirtualNodeArray, VirtualNodeString, choice, plus, sequence, t} from '../Parser';
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
  function assertFields(nodes: Array<unknown>): asserts nodes is Array<Field> {
    if (!nodes.every(assertField)) {
      throw new Error(`Expected Array<Field>`);
    }
  }

  function assertField(node: unknown): asserts node is Field {
    if (
      typeof node !== 'object' ||
      !node ||
      !('kind' in node) ||
      (node as any).kind !== 'FIELD'
    ) {
      throw new Error(`Expected Field`);
    }
  }

  function assertVirtualNodesArray(nodes: unknown): asserts nodes is Array<VirtualNodeArray<unknown>> {
    if (
      !Array.isArray(nodes) ||
      !nodes.every(assertVirtualNodeArray)
    ) {
      throw new Error(`Expected Array<VirtualNodeArray<unknown>>`);
    }
  }

  function assertVirtualNodeArray<unknown>(node: unknown): asserts node is VirtualNodeArray<unknown> {
    if (
      typeof node !== 'object' ||
      !node ||
      !('kind' in node) ||
      (node as any).kind !== 'VIRTUAL_ARRAY'
    ) {
      throw new Error(`Expected VirtualNodeArray`);
    }
  }

  // WORKS: but it mentions ASTNode in the type which is not ideal because it
  // stops it from being reusable:
  //
  // function assertVirtualNodeString(node: ASTNode | VirtualNode<ASTNode>): asserts node is VirtualNodeString {
  //   if (!(node.kind === 'VIRTUAL_STRING')) {
  //     throw new Error(`Expected VirtualNodeString but got ${node.kind}`);
  //   }
  // }

  // Also not ideal because it uses "any" and is just a partial check, but it is
  // better than nothing I guess...
  function assertVirtualNodeString(node: unknown): asserts node is VirtualNodeString {
    if (
      typeof node !== 'object' ||
      !node ||
      !('kind' in node) ||
      (node as any).kind !== 'VIRTUAL_STRING'
    ) {
      throw new Error(`Expected VirtualNodeString`);
    }
  }

  // A toy grammar: just a tiny subset of the full GraphQL grammar.
  const grammar: Grammar<ASTNode> = {
    document: [
      plus('definition'),
      (definitions: unknown): ASTNode => {
        // we don't get this far...
        // console.log('DEFS', definitions);

        return {
          definitions,
          kind: 'DOCUMENT',
        }
      },
    ],

    definition: 'operation',

    operation: choice('anonymousOperation', 'queryOperation'),

    anonymousOperation: [
      'selectionSet',
      (selections: ASTNode | VirtualNodeArray<ASTNode>): Operation => {
        assertVirtualNodeArray(selections);
        assertFields(selections.value);

        return {
          kind: 'OPERATION',
          selections: selections.value,
          type: 'QUERY',
        };
      },
    ],

    // Just here for example purposes; we don't actually exercise this rule in
    // the tests.
    queryOperation: sequence(
      t(Tokens.NAME, contents => contents === 'query'),
      t(Tokens.NAME),
      t(Tokens.OPENING_BRACE),
      'selectionSet',
      t(Tokens.CLOSING_BRACE),
    ),

    selectionSet: [
      sequence(
        t(Tokens.OPENING_BRACE).ignore,
        plus('field'),
        t(Tokens.CLOSING_BRACE).ignore,
      ),
      (selections: ASTNode | VirtualNode<ASTNode>): VirtualNodeArray<ASTNode> => {
        assertVirtualNodeArray(selections); // Unwrap sequence() VirtualNodeArray.
        assertVirtualNodesArray(selections.value); // Unwrap plus() VirtualNodeArray.
        assertFields(selections.value.value);

        return {
          kind: 'VIRTUAL_ARRAY',
          value: selections.value.value
        };
      }
    ],

    field: [
      t(Tokens.NAME),
      (name: ASTNode | VirtualNode<ASTNode>): Field => {
        assertVirtualNodeString(name);

        return {
          kind: 'FIELD',
          name: name.value,
        };
      },
    ],
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
