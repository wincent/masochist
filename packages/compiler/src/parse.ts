import {Token} from './Lexer';
import Parser, {
  Grammar,
  choice,
  optional,
  plus,
  sequence,
  star,
  t,
} from './Parser';
import lex, {TokenName, Tokens, isIgnored} from './lex';

namespace GraphQL {
  export type Node =
    | Argument
    | BooleanValue
    | Directive
    | Document
    | Field
    | IntValue
    | Operation
    | Value;

  export interface Argument {
    kind: 'ARGUMENT';
    name: string;
    value: Value;
  }

  export interface BooleanValue {
    kind: 'BOOLEAN';
    value: boolean;
  }

  export type Definition = Operation; // | ... | ...

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

  export interface IntValue {
    kind: 'INT';
    value: number;
  }

  export type ScalarValue =
    | IntValue
    // FloatValue |
    // StringValue |
    | BooleanValue; //|
  // NullValue |
  // EnumValue |
  // ListValue |
  // ObjectValue;

  export interface Operation {
    kind: 'OPERATION';
    name?: string;
    // TODO: actual support directives here
    directives?: Array<Directive>;
    selections: Array<Selection>;
    type: 'MUTATION' | 'SUBSCRIPTION' | 'QUERY';
    // TODO: actually support variables here
    variables?: Array<Variable>;
  }

  export type Selection = Field; // | ... | ...

  export type Value = Variable | ScalarValue; // list, object, enum

  export interface Variable {
    kind: 'VARIABLE';
    name: string;
  }
}

// TODO: move this into a separate file
const GRAMMAR: Grammar<GraphQL.Node> = {
  document: [
    plus('definition'),
    (definitions: any): GraphQL.Document => {
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

  definition: choice('operation'),

  operation: choice('anonymousOperation', 'queryOperation'),

  anonymousOperation: [
    'selectionSet',
    (selections: any): GraphQL.Operation => ({
      kind: 'OPERATION',
      selections,
      type: 'QUERY',
    }),
  ],

  queryOperation: [
    sequence(
      t(Tokens.NAME, contents => contents === 'query'),
      t(Tokens.NAME),
      'selectionSet',
    ),
    /*
     * TODO: add .silent/ignore/omit() helper...? (to avoid this ugly destructuring)
     *
     * either want to do:
     *
     *    sequence(
     *      t(...).ignore,
     *      t(...)
     *      'selectionSet'
     *    )
     *
     * or:
     *
     *    sequence(
     *      t(...),
     *      t(...).as('name'),
     *      r('selectionSet').as('selections'),
     *    )
     *
     * first seems like less work
     */
    ([, name, selections]) => ({
      kind: 'OPERATION',
      name,
      selections,
      type: 'QUERY',
    }),
  ],

  selectionSet: [
    sequence(
      t(Tokens.OPENING_BRACE),
      choice('field', 'fragmentSpread', 'inlineFragment').plus,
      t(Tokens.CLOSING_BRACE),
    ),
    ([, selections]: [unknown, any]): any => selections,
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

  alias: [sequence(t(Tokens.NAME), t(Tokens.COLON)), ([name]) => name],

  arguments: [
    sequence(
      t(Tokens.OPENING_PAREN),
      plus('argument'),
      t(Tokens.CLOSING_PAREN),
    ),
    ([, args]): Array<GraphQL.Argument> => {
      return args;
    },
  ],

  argument: [
    sequence(
      t(Tokens.NAME),
      t(Tokens.COLON),
      choice(
        'variable',
        // ...
        'int',
        'boolean',
        // ...
      ),
    ),
    ([name, , value]) => ({
      kind: 'ARGUMENT',
      name,
      value,
    }),
  ],

  boolean: [
    t(Tokens.NAME, contents => contents === 'true' || contents === 'false'),
    (contents): GraphQL.BooleanValue => ({
      kind: 'BOOLEAN',
      value: contents === 'true',
    }),
  ],

  int: [
    t(Tokens.INT_VALUE),
    (contents): GraphQL.IntValue => ({
      kind: 'INT',
      value: parseInt(contents, 10),
    }),
  ],

  variable: [
    sequence(t(Tokens.DOLLAR), t(Tokens.NAME)),
    ([, name]) => ({
      kind: 'VARIABLE',
      name,
    }),
  ],

  directive: [
    sequence(t(Tokens.AT), t(Tokens.NAME), optional('arguments')),
    ([, name, args]): GraphQL.Directive => ({
      arguments: args,
      kind: 'DIRECTIVE',
      name,
    }),
  ],

  // TODO: flesh these out
  fragmentSpread: t(Tokens.ELLIPSIS),
  inlineFragment: t(Tokens.ELLIPSIS),
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
