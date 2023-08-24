// These tests used to live in `@masochist/parser`, where `parseWithTable` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {promises as fs} from 'fs';
import path from 'path';

import {grammar, parseWithTable, makeNode, table} from '@masochist/parser';

import lex from '../lex';

describe('parseWithTable()', () => {
  it('parses a simple document using the GraphQL grammar', () => {
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

    expect(parseWithTable(table, tokens, grammar, makeNode))
      .toMatchInlineSnapshot(`
      {
        "definitions": [
          {
            "directives": [
              {
                "arguments": [
                  {
                    "kind": "ARGUMENT",
                    "name": "since",
                    "value": {
                      "block": false,
                      "kind": "STRING",
                      "value": "2001-01-01",
                    },
                  },
                ],
                "kind": "DIRECTIVE",
                "name": "deprecated",
              },
              {
                "arguments": null,
                "kind": "DIRECTIVE",
                "name": "live",
              },
            ],
            "kind": "OPERATION",
            "name": "IndexQuery",
            "selections": [
              {
                "alias": null,
                "arguments": null,
                "directives": null,
                "kind": "FIELD",
                "name": "foo",
                "selections": null,
              },
              {
                "alias": "barAlias",
                "arguments": null,
                "directives": null,
                "kind": "FIELD",
                "name": "bar",
                "selections": null,
              },
              {
                "alias": null,
                "arguments": null,
                "directives": null,
                "kind": "FIELD",
                "name": "baz",
                "selections": [
                  {
                    "alias": null,
                    "arguments": null,
                    "directives": [
                      {
                        "arguments": null,
                        "kind": "DIRECTIVE",
                        "name": "defer",
                      },
                    ],
                    "kind": "FIELD",
                    "name": "qux",
                    "selections": null,
                  },
                ],
              },
              {
                "directives": null,
                "kind": "FRAGMENT_SPREAD",
                "name": "BareFragment",
              },
              {
                "directives": [
                  {
                    "arguments": null,
                    "kind": "DIRECTIVE",
                    "name": "yo",
                  },
                ],
                "kind": "FRAGMENT_SPREAD",
                "name": "FragmentWithDirective",
              },
              {
                "directives": null,
                "kind": "INLINE_FRAGMENT",
                "on": {
                  "kind": "NAMED_TYPE",
                  "name": "SomeType",
                },
                "selections": [
                  {
                    "alias": null,
                    "arguments": null,
                    "directives": null,
                    "kind": "FIELD",
                    "name": "stuff",
                    "selections": null,
                  },
                ],
              },
            ],
            "type": "QUERY",
            "variables": null,
          },
          {
            "directives": null,
            "kind": "OPERATION",
            "name": "NewQuery",
            "selections": [
              {
                "alias": null,
                "arguments": [
                  {
                    "kind": "ARGUMENT",
                    "name": "count",
                    "value": {
                      "kind": "VARIABLE",
                      "name": "count",
                    },
                  },
                  {
                    "kind": "ARGUMENT",
                    "name": "factor",
                    "value": {
                      "kind": "INT",
                      "value": 20,
                    },
                  },
                  {
                    "kind": "ARGUMENT",
                    "name": "sizes",
                    "value": {
                      "kind": "LIST_VALUE",
                      "value": [
                        {
                          "kind": "INT",
                          "value": 25,
                        },
                        {
                          "kind": "INT",
                          "value": 50,
                        },
                      ],
                    },
                  },
                ],
                "directives": [
                  {
                    "arguments": [
                      {
                        "kind": "ARGUMENT",
                        "name": "times",
                        "value": {
                          "kind": "VARIABLE",
                          "name": "count",
                        },
                      },
                    ],
                    "kind": "DIRECTIVE",
                    "name": "something",
                  },
                ],
                "kind": "FIELD",
                "name": "hai",
                "selections": null,
              },
            ],
            "type": "QUERY",
            "variables": [
              {
                "defaultValue": {
                  "kind": "INT",
                  "value": 10,
                },
                "directives": null,
                "kind": "VARIABLE_DEFINITION",
                "type": {
                  "kind": "NAMED_TYPE",
                  "name": "Int",
                },
                "variable": {
                  "kind": "VARIABLE",
                  "name": "count",
                },
              },
              {
                "defaultValue": {
                  "kind": "LIST_VALUE",
                  "value": [
                    {
                      "kind": "INT",
                      "value": 100,
                    },
                    {
                      "kind": "INT",
                      "value": 200,
                    },
                  ],
                },
                "directives": [
                  {
                    "arguments": null,
                    "kind": "DIRECTIVE",
                    "name": "log",
                  },
                ],
                "kind": "VARIABLE_DEFINITION",
                "type": {
                  "kind": "LIST_TYPE",
                  "type": {
                    "kind": "NAMED_TYPE",
                    "name": "Int",
                  },
                },
                "variable": {
                  "kind": "VARIABLE",
                  "name": "sizes",
                },
              },
              {
                "defaultValue": null,
                "directives": null,
                "kind": "VARIABLE_DEFINITION",
                "type": {
                  "kind": "NON_NULL_TYPE",
                  "type": {
                    "kind": "NAMED_TYPE",
                    "name": "Int",
                  },
                },
                "variable": {
                  "kind": "VARIABLE",
                  "name": "factor",
                },
              },
              {
                "defaultValue": null,
                "directives": null,
                "kind": "VARIABLE_DEFINITION",
                "type": {
                  "kind": "NON_NULL_TYPE",
                  "type": {
                    "kind": "LIST_TYPE",
                    "type": {
                      "kind": "NAMED_TYPE",
                      "name": "Int",
                    },
                  },
                },
                "variable": {
                  "kind": "VARIABLE",
                  "name": "stuff",
                },
              },
              {
                "defaultValue": {
                  "fields": [
                    {
                      "name": "min",
                      "value": {
                        "kind": "INT",
                        "value": 100,
                      },
                    },
                    {
                      "name": "max",
                      "value": {
                        "kind": "INT",
                        "value": 1000,
                      },
                    },
                  ],
                  "kind": "OBJECT_VALUE",
                },
                "directives": null,
                "kind": "VARIABLE_DEFINITION",
                "type": {
                  "kind": "NAMED_TYPE",
                  "name": "Limits",
                },
                "variable": {
                  "kind": "VARIABLE",
                  "name": "limits",
                },
              },
            ],
          },
          {
            "directives": [
              {
                "arguments": null,
                "kind": "DIRECTIVE",
                "name": "fast",
              },
            ],
            "kind": "FRAGMENT",
            "name": "BareFragment",
            "on": {
              "kind": "NAMED_TYPE",
              "name": "Thing",
            },
            "selections": [
              {
                "alias": null,
                "arguments": null,
                "directives": null,
                "kind": "FIELD",
                "name": "contents",
                "selections": null,
              },
            ],
          },
        ],
        "kind": "DOCUMENT",
      }
    `);
  });

  it.each([['source.graphql'], ['generated.graphql']])(
    'parses the %s corpus using the GraphQL grammar',
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
