import lex from '@masochist/lexer';

import {table, grammar} from '..';
import parseWithTable, {makeNode} from '../parseWithTable';

import type {ParseTree} from '../parseWithTable';

describe('GraphQL parser', () => {
  it('parses a simple document', () => {
    const tokens = [
      ...lex(`
        query IndexQuery @deprecated {
          foo
          barAlias: bar
          baz {
            qux
          }
        }

        query NewQuery(
          $count: Int = 10
          $sizes: [Int]
          $factor: Int!
          $stuff: [Int]!
        ) {
          hai(count: $count, factor: 20)
        }
    `),
    ];

    expect(parseWithTable<ParseTree>(table, tokens, grammar, makeNode)).toEqual(
      {
        kind: 'DOCUMENT',
        definitions: [
          {
            kind: 'OPERATION',
            name: 'IndexQuery',
            directives: [
              {
                kind: 'DIRECTIVE',
                name: 'deprecated',
              },
            ],
            selections: [
              {
                kind: 'FIELD',
                alias: null,
                arguments: null,
                directives: null,
                name: 'foo',
                selections: null,
              },
              {
                kind: 'FIELD',
                alias: 'barAlias',
                arguments: null,
                directives: null,
                name: 'bar',
                selections: null,
              },
              {
                kind: 'FIELD',
                alias: null,
                arguments: null,
                directives: null,
                name: 'baz',
                selections: [
                  {
                    kind: 'FIELD',
                    alias: null,
                    arguments: null,
                    directives: null,
                    name: 'qux',
                    selections: null,
                  },
                ],
              },
            ],
            type: 'QUERY',
            variables: null,
          },
          {
            kind: 'OPERATION',
            name: 'NewQuery',
            directives: null,
            selections: [
              {
                kind: 'FIELD',
                alias: null,
                arguments: [
                  {
                    kind: 'ARGUMENT',
                    name: 'count',
                    value: {
                      kind: 'VARIABLE',
                      name: 'count',
                    },
                  },
                  {
                    kind: 'ARGUMENT',
                    name: 'factor',
                    value: {
                      kind: 'INT',
                      value: 20,
                    },
                  },
                ],
                directives: null,
                name: 'hai',
                selections: null,
              },
            ],
            type: 'QUERY',
            variables: [
              {
                kind: 'VARIABLE_DEFINITION',
                defaultValue: {
                  kind: 'INT',
                  value: 10,
                },
                directives: null,
                variable: {
                  kind: 'VARIABLE',
                  name: 'count',
                },
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'Int',
                },
              },
              {
                kind: 'VARIABLE_DEFINITION',
                defaultValue: null,
                directives: null,
                variable: {
                  kind: 'VARIABLE',
                  name: 'sizes',
                },
                type: {
                  kind: 'LIST_TYPE',
                  type: {
                    kind: 'NAMED_TYPE',
                    name: 'Int',
                  },
                },
              },
              {
                kind: 'VARIABLE_DEFINITION',
                defaultValue: null,
                directives: null,
                variable: {
                  kind: 'VARIABLE',
                  name: 'factor',
                },
                type: {
                  kind: 'NON_NULL_TYPE',
                  type: {
                    kind: 'NAMED_TYPE',
                    name: 'Int',
                  },
                },
              },
              {
                kind: 'VARIABLE_DEFINITION',
                defaultValue: null,
                directives: null,
                variable: {
                  kind: 'VARIABLE',
                  name: 'stuff',
                },
                type: {
                  kind: 'NON_NULL_TYPE',
                  type: {
                    kind: 'LIST_TYPE',
                    type: {
                      kind: 'NAMED_TYPE',
                      name: 'Int',
                    },
                  },
                },
              },
            ],
          },
        ],
      },
    );
  });
});
