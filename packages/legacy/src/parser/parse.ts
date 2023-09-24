import {Tokens, isIgnored, lex} from '../index';

import Parser, {
  Grammar,
  choice,
  optional,
  plus,
  r,
  sequence,
  star,
  t,
} from './Parser';

// TODO: move all this into a separate file

namespace GraphQL {
  export type Node =
    | Array<Argument>
    | Array<Selection>
    | Array<VariableDefinition>
    | Argument
    | BooleanValue
    | Directive
    | Document
    | EnumValue
    | Field
    | FloatValue
    | Fragment
    | FragmentSpread
    | InlineFragment
    | IntValue
    | ListType
    | ListValue
    | NamedType
    | NonNullType
    | NullValue
    | ObjectField
    | ObjectValue
    | Operation
    | StringValue
    | Value
    | VariableDefinition;

  export interface Argument {
    kind: 'ARGUMENT';
    name: string;
    value: Value;
  }

  export interface BooleanValue {
    kind: 'BOOLEAN';
    value: boolean;
  }

  export type Definition = Operation | Fragment; // | ...

  export interface Directive {
    arguments?: Array<Argument>;
    kind: 'DIRECTIVE';
    name: string;
  }

  export interface Document {
    definitions: Array<Definition>;
    kind: 'DOCUMENT';
  }

  export interface Field {
    alias?: string;
    arguments?: Array<Argument>;
    directives?: Array<Directive>;
    kind: 'FIELD';
    name: string;
    selections?: Array<Selection>;
  }

  export interface EnumValue {
    kind: 'ENUM';
    value: string;
  }

  export interface FloatValue {
    kind: 'FLOAT';
    value: string;
  }

  export interface Fragment {
    directives?: Array<Directive>;
    kind: 'FRAGMENT';
    name: string;
    on: string;
    selections: Array<Selection>;
  }

  export interface FragmentSpread {
    directives?: Array<Directive>;
    kind: 'FRAGMENT_SPREAD';
    name: string;
  }

  export interface InlineFragment {
    directives?: Array<Directive>;
    kind: 'INLINE_FRAGMENT';
    on?: string;
    selections: Array<Selection>;
  }

  export interface IntValue {
    kind: 'INT';
    value: number;
  }

  export interface ListValue {
    // TODO maybe call this LIST_VALUE to distinguish it from LIST_TYPE
    kind: 'LIST';
    value: Array<Value>;
  }

  export type Type = NamedType | ListType | NonNullType;

  export interface ListType {
    kind: 'LIST_TYPE';
    type: Type;
  }

  export interface NonNullType {
    kind: 'NON_NULL_TYPE';
    type: NamedType | ListType;
  }

  export interface NamedType {
    kind: 'NAMED_TYPE';
    name: string;
  }

  export interface NullValue {
    kind: 'NULL';
  }

  export interface ObjectField {
    kind: 'OBJECT_FIELD';
    name: string;
    value: Value;
  }

  export interface ObjectValue {
    kind: 'OBJECT';
    fields: Array<ObjectField>;
  }

  export type ScalarValue =
    | IntValue
    | FloatValue
    | StringValue
    | BooleanValue
    | NullValue;

  export interface StringValue {
    block: boolean;
    kind: 'STRING';
    value: string;
  }

  export interface Operation {
    kind: 'OPERATION';
    name?: string;
    directives?: Array<Directive>;
    selections: Array<Selection>;
    type: 'MUTATION' | 'SUBSCRIPTION' | 'QUERY';
    variables?: Array<VariableDefinition>;
  }

  export type Selection = Field | FragmentSpread | InlineFragment;

  export type Value =
    | Variable
    | ScalarValue
    | EnumValue
    | ListValue
    | ObjectValue;

  export interface Variable {
    kind: 'VARIABLE';
    name: string;
  }

  export interface VariableDefinition {
    defaultValue?: Value;
    directives?: Array<Directive>;
    kind: 'VARIABLE_DEFINITION';
    type: Type;
    variable: Variable;
  }
}

const GRAMMAR: Grammar<GraphQL.Node> = {
  document: [
    plus('definition'),
    (definitions): GraphQL.Document => {
      let anonymous = 0;
      let operations = 0;

      definitions.forEach((definition: GraphQL.Definition) => {
        if (definition.kind === 'OPERATION') {
          operations++;
        }

        if (definition.name === undefined) {
          anonymous++;
        }
      });

      if (anonymous && operations > 1) {
        throw new Error(
          'Anonymous operation must be the only operation in the document',
        );
      }

      return {
        definitions,
        kind: 'DOCUMENT',
      };
    },
  ],

  definition: choice('operation', 'fragment'),

  operation: choice('anonymousOperation', 'queryOperation'),

  anonymousOperation: [
    r('selectionSet'),
    (selections): GraphQL.Operation => ({
      kind: 'OPERATION',
      selections,
      type: 'QUERY',
    }),
  ],

  queryOperation: [
    sequence(
      t(Tokens.NAME, (contents) => contents === 'query').ignore,
      t(Tokens.NAME),
      optional('variableDefinitions'),
      star('directive'),
      'selectionSet',
    ),
    ([name, variables, directives, selections]): GraphQL.Operation => ({
      directives,
      kind: 'OPERATION',
      name,
      selections,
      type: 'QUERY',
      variables,
    }),
  ],

  selectionSet: [
    sequence(
      t(Tokens.OPENING_BRACE).ignore,
      choice('field', 'inlineFragment', 'fragmentSpread').plus,
      t(Tokens.CLOSING_BRACE).ignore,
    ),
    ([selections]): Array<GraphQL.Selection> => selections,
  ],

  field: [
    sequence(
      optional('alias'),
      t(Tokens.NAME),
      optional('arguments'),
      star('directive'),
      optional('selectionSet'),
    ),
    ([alias, name, args, directives, selections]): GraphQL.Field => ({
      alias,
      arguments: args,
      directives,
      kind: 'FIELD',
      name,
      selections,
    }),
  ],

  alias: [sequence(t(Tokens.NAME), t(Tokens.COLON).ignore), ([name]) => name],

  arguments: [
    sequence(
      t(Tokens.OPENING_PAREN).ignore,
      plus('argument'),
      t(Tokens.CLOSING_PAREN).ignore,
    ),
    ([args]): Array<GraphQL.Argument> => {
      return args;
    },
  ],

  argument: [
    sequence(t(Tokens.NAME), t(Tokens.COLON).ignore, 'value'),
    ([name, value]) => ({
      kind: 'ARGUMENT',
      name,
      value,
    }),
  ],

  value: choice(
    'variable',
    'float',
    'int',
    'string',
    'boolean',
    'null',
    'enum',
    'list',
    'object',
  ),

  boolean: [
    t(Tokens.NAME, (contents) => contents === 'false' || contents === 'true'),
    (contents): GraphQL.BooleanValue => ({
      kind: 'BOOLEAN',
      value: contents === 'true',
    }),
  ],

  enum: [
    t(
      Tokens.NAME,
      (contents) =>
        contents !== 'false' && contents !== 'null' && contents !== 'true',
    ),
    (contents): GraphQL.EnumValue => ({
      kind: 'ENUM',
      value: contents,
    }),
  ],

  float: [
    t(Tokens.FLOAT_VALUE),
    (contents): GraphQL.FloatValue => ({
      kind: 'FLOAT',
      value: contents,
    }),
  ],

  int: [
    t(Tokens.INT_VALUE),
    (contents): GraphQL.IntValue => ({
      kind: 'INT',
      value: parseInt(contents, 10),
    }),
  ],

  list: [
    sequence(
      t(Tokens.OPENING_BRACKET).ignore,
      star('value'),
      t(Tokens.CLOSING_BRACKET).ignore,
    ),
    ([values]): GraphQL.ListValue => ({
      kind: 'LIST',
      value: values || [],
    }),
  ],

  null: [
    t(Tokens.NAME, (contents) => contents === 'null'),
    (): GraphQL.NullValue => ({
      kind: 'NULL',
    }),
  ],

  object: [
    sequence(
      t(Tokens.OPENING_BRACE).ignore,
      star('objectField'),
      t(Tokens.CLOSING_BRACE).ignore,
    ),
    ([fields]): GraphQL.ObjectValue => ({
      kind: 'OBJECT',
      fields: fields || [],
    }),
  ],

  objectField: [
    sequence(t(Tokens.NAME), t(Tokens.COLON).ignore, 'value'),
    ([name, value]): GraphQL.ObjectField => ({
      kind: 'OBJECT_FIELD',
      name,
      value,
    }),
  ],

  string: [
    choice(t(Tokens.STRING_VALUE), t(Tokens.BLOCK_STRING_VALUE)),
    (contents): GraphQL.StringValue => {
      // TODO: deal with block string semantics as specified here:
      // https://graphql.github.io/graphql-spec/draft/#BlockStringValue()
      // (probably want to do that in the lexer).
      const block = contents.startsWith('"""');
      const value = block ? contents.slice(3, -3) : contents.slice(1, -1);

      return {
        block,
        kind: 'STRING',
        value,
      };
    },
  ],

  variable: [
    sequence(t(Tokens.DOLLAR).ignore, t(Tokens.NAME)),
    ([name]): GraphQL.Variable => ({
      kind: 'VARIABLE',
      name,
    }),
  ],

  variableDefinitions: [
    sequence(
      t(Tokens.OPENING_PAREN).ignore,
      plus('variableDefinition'),
      t(Tokens.CLOSING_PAREN).ignore,
    ),
    ([variableDefinitions]): Array<GraphQL.VariableDefinition> =>
      variableDefinitions,
  ],

  variableDefinition: [
    sequence(
      'variable',
      t(Tokens.COLON).ignore,
      'type',
      // default value (optional) -- TODO implement
      star('directive'),
    ),
    ([variable, type, directives]): GraphQL.VariableDefinition => ({
      directives,
      kind: 'VARIABLE_DEFINITION',
      type,
      variable,
    }),
  ],

  type: choice('nonNullType', 'namedType', 'listType'),

  namedType: [
    t(Tokens.NAME),
    (name): GraphQL.NamedType => ({
      kind: 'NAMED_TYPE',
      name,
    }),
  ],

  listType: [
    sequence(
      t(Tokens.OPENING_BRACKET).ignore,
      'type',
      t(Tokens.CLOSING_BRACKET).ignore,
    ),
    ([type]): GraphQL.ListType => ({
      kind: 'LIST_TYPE',
      type,
    }),
  ],

  nonNullType: [
    sequence(choice('namedType', 'listType'), t(Tokens.BANG).ignore),
    ([type]): GraphQL.NonNullType => ({
      kind: 'NON_NULL_TYPE',
      type,
    }),
  ],

  directive: [
    sequence(t(Tokens.AT).ignore, t(Tokens.NAME), optional('arguments')),
    ([name, args]): GraphQL.Directive => ({
      arguments: args,
      kind: 'DIRECTIVE',
      name,
    }),
  ],

  fragment: [
    sequence(
      t(Tokens.NAME, (contents) => contents === 'fragment').ignore,
      t(Tokens.NAME, (contents) => contents !== 'on'),
      'typeCondition',
      star('directive'),
      'selectionSet',
    ),
    ([name, on, directives, selections]): GraphQL.Fragment => ({
      directives,
      kind: 'FRAGMENT',
      name,
      on,
      selections,
    }),
  ],

  inlineFragment: [
    sequence(
      t(Tokens.ELLIPSIS).ignore,
      optional('typeCondition'),
      star('directive'),
      'selectionSet',
    ),
    ([on, directives, selections]): GraphQL.InlineFragment => ({
      kind: 'INLINE_FRAGMENT',
      directives,
      on,
      selections,
    }),
  ],

  typeCondition: [
    sequence(
      t(Tokens.NAME, (contents) => contents === 'on').ignore,
      t(Tokens.NAME),
    ),
    ([on]) => on,
  ],

  fragmentSpread: [
    sequence(
      t(Tokens.ELLIPSIS).ignore,
      t(Tokens.NAME, (contents) => contents !== 'on'),
      star('directive'),
    ),
    ([name, directives]): GraphQL.FragmentSpread => ({
      directives,
      kind: 'FRAGMENT_SPREAD',
      name,
    }),
  ],
};

/**
 * @see https://graphql.github.io/graphql-spec/draft/
 */
export default function parse(input: string): GraphQL.Node {
  const parser = new Parser<GraphQL.Node>(GRAMMAR, isIgnored);

  const tokens = lex(input);

  const result = parser.parse(tokens);

  if (!result) {
    throw new Error(
      'Failed to parse document: ' +
        'Document must contain at least one definition',
    );
  }

  return result;
}
