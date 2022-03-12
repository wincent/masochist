import lex from '@masochist/lexer';
import {promises as fs} from 'fs';
import path from 'path';

import {table, grammar} from '../parse';
import parseWithTable, {makeNode} from '../parseWithTable';

import type {ParseTree} from '../parseWithTable';

describe('GraphQL parser', () => {
  it('parses a simple document', () => {
    const tokens = [
      ...lex(`
        query IndexQuery @deprecated(since: "2001-01-01") @live {
          foo
          barAlias: bar
          baz {
            qux @defer
          }

          ...BareFragment
          ...FragmentWithDirective @yo

          ...on SomeType {
            stuff
          }
        }

        query NewQuery(
          $count: Int = 10
          $sizes: [Int] = [100, 200] @log
          $factor: Int!
          $stuff: [Int]!
          $limits: Limits = {min: 100, max: 1000}
        ) {
          hai(count: $count, factor: 20, sizes: [25, 50]) @something(times: $count)
        }

        fragment BareFragment on Thing @fast {
          contents
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
                arguments: [
                  {
                    kind: 'ARGUMENT',
                    name: 'since',
                    value: {
                      kind: 'STRING',
                      block: false,
                      value: '2001-01-01',
                    },
                  },
                ],
              },
              {
                kind: 'DIRECTIVE',
                name: 'live',
                arguments: null,
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
                    directives: [
                      {
                        kind: 'DIRECTIVE',
                        name: 'defer',
                        arguments: null,
                      },
                    ],
                    name: 'qux',
                    selections: null,
                  },
                ],
              },
              {
                kind: 'FRAGMENT_SPREAD',
                name: 'BareFragment',
                directives: null,
              },
              {
                kind: 'FRAGMENT_SPREAD',
                name: 'FragmentWithDirective',
                directives: [
                  {
                    kind: 'DIRECTIVE',
                    name: 'yo',
                    arguments: null,
                  },
                ],
              },
              {
                kind: 'INLINE_FRAGMENT',
                directives: null,
                on: {
                  kind: 'NAMED_TYPE',
                  name: 'SomeType',
                },
                selections: [
                  {
                    kind: 'FIELD',
                    arguments: null,
                    alias: null,
                    directives: null,
                    name: 'stuff',
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
                  {
                    kind: 'ARGUMENT',
                    name: 'sizes',
                    value: {
                      kind: 'LIST_VALUE',
                      value: [
                        {
                          kind: 'INT',
                          value: 25,
                        },
                        {
                          kind: 'INT',
                          value: 50,
                        },
                      ],
                    },
                  },
                ],
                directives: [
                  {
                    kind: 'DIRECTIVE',
                    arguments: [
                      {
                        kind: 'ARGUMENT',
                        name: 'times',
                        value: {
                          kind: 'VARIABLE',
                          name: 'count',
                        },
                      },
                    ],
                    name: 'something',
                  },
                ],
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
                defaultValue: {
                  kind: 'LIST_VALUE',
                  value: [
                    {
                      kind: 'INT',
                      value: 100,
                    },
                    {
                      kind: 'INT',
                      value: 200,
                    },
                  ],
                },
                directives: [
                  {
                    kind: 'DIRECTIVE',
                    arguments: null,
                    name: 'log',
                  },
                ],
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
              {
                kind: 'VARIABLE_DEFINITION',
                defaultValue: {
                  kind: 'OBJECT_VALUE',
                  fields: [
                    {
                      name: 'min',
                      value: {
                        kind: 'INT',
                        value: 100,
                      },
                    },
                    {
                      name: 'max',
                      value: {
                        kind: 'INT',
                        value: 1000,
                      },
                    },
                  ],
                },
                directives: null,
                variable: {
                  kind: 'VARIABLE',
                  name: 'limits',
                },
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'Limits',
                },
              },
            ],
          },
          {
            kind: 'FRAGMENT',
            name: 'BareFragment',
            directives: [
              {
                kind: 'DIRECTIVE',
                arguments: null,
                name: 'fast',
              },
            ],
            on: {
              kind: 'NAMED_TYPE',
              name: 'Thing',
            },
            selections: [
              {
                kind: 'FIELD',
                alias: null,
                arguments: null,
                directives: null,
                name: 'contents',
                selections: null,
              },
            ],
          },
        ],
      },
    );
  });

  it.each([['source.graphql'], ['generated.graphql']])(
    'parses the %s corpus',
    async (corpus) => {
      const source = await fs.readFile(
        path.join(__dirname, '../../../../support', corpus),
        'utf8',
      );

      const tokens = [...lex(source)];
      expect(
        parseWithTable(table, tokens, grammar, makeNode),
      ).toMatchSnapshot();
    },
  );
});
