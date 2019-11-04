import {Token} from './Lexer';
import Parser, {Grammar, choice, plus, sequence, t} from './Parser';
import lex, {TokenName, Tokens, isIgnored} from './lex';

namespace GraphQL {
  export type Node = Document | Field | Operation;

  export type Definition = Operation; // | ... | ...

  export type Directive = 'TBD';

  export interface Document {
    definitions: Array<Definition>;
    kind: 'DOCUMENT';
  }

  export interface Field {
    alias?: string;
    kind: 'FIELD';
    name: string;
  }

  export interface Operation {
    kind: 'OPERATION';
    name?: string;
    directives?: Array<Directive>;
    selections: Array<Selection>;
    type: 'MUTATION' | 'SUBSCRIPTION' | 'QUERY';
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
      if (!definitions.length) {
        throw new Error('Document must contain at least one definition');
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
    // TODO: add .silent/ignore/omit() helper...? (to avoid this ugly destructuring)
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
    t(Tokens.NAME),
    (name: string): GraphQL.Field => ({
      kind: 'FIELD',
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
    throw new Error('Failed to parse document');
  }

  return result;
}
