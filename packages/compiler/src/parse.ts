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
  export type Node = Directive | Document | Field | Operation;

  export type Definition = Operation; // | ... | ...

  export interface Directive {
    kind: 'DIRECTIVE';
    name: string;
  }

  export interface Document {
    definitions: Array<Definition>;
    kind: 'DOCUMENT';
  }

  export interface Field {
    alias?: string;
    directives?: Array<Directive>;
    kind: 'FIELD';
    name: string;
    selections?: Array<Selection>;
  }

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

  export type Variable = 'TBD';
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
      star('directive'),
      optional('selectionSet'),
    ),
    ([alias, name, directives, selections]): GraphQL.Field => ({
      alias,
      directives,
      kind: 'FIELD',
      name,
      selections,
    }),
  ],

  alias: [sequence(t(Tokens.NAME), t(Tokens.COLON)), ([name]) => name],

  directive: [
    sequence(t(Tokens.AT), t(Tokens.NAME)),
    ([, name]): GraphQL.Directive => ({
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
