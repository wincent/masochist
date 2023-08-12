import {Token, default as lex} from '@masochist/lexer';
import {promises as fs} from 'fs';
import path from 'path';

import {grammar, table} from '../document';
import getAugmentedGrammar from '../getAugmentedGrammar';
import getItemSets from '../getItemSets';
import getParseTable from '../getParseTable';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';
import parseWithTable, {makeNode} from '../parseWithTable';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

import type {ParseTree} from '../parseWithTable';

describe('parseWithTable()', () => {
  it('parses samples for the toy grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(toyGrammar);
    const itemSets = getItemSets(toyGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, toyGrammar);
    const table = getParseTable(itemSets, transitionTable, toyGrammar);

    const input = '5 = * 10';
    const tokens: Array<Token> = [
      new Token('x', 0, 1, input),
      new Token('eq', 2, 3, input),
      new Token('star', 4, 5, input),
      new Token('x', 6, 8, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[0].contents).toBe('5');
    expect(tokens[3].contents).toBe('10');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'S',
      children: [
        {
          kind: 'N',
          children: [
            {
              kind: 'V',
              children: [tokens[0]],
            },
            tokens[1],
            {
              kind: 'E',
              children: [
                {
                  kind: 'V',
                  children: [
                    tokens[2],
                    {
                      kind: 'E',
                      children: [
                        {
                          kind: 'V',
                          children: [tokens[3]],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it('parses samples for the subset grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(subsetGrammar);
    const itemSets = getItemSets(subsetGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, subsetGrammar);
    const table = getParseTable(itemSets, transitionTable, subsetGrammar);

    const input = '{foo bar baz}';
    const tokens: Array<Token> = [
      new Token('OPENING_BRACE', 0, 1, input),
      new Token('NAME', 1, 4, input),
      new Token('NAME', 5, 8, input),
      new Token('NAME', 9, 12, input),
      new Token('CLOSING_BRACE', 12, 13, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[1].contents).toBe('foo');
    expect(tokens[2].contents).toBe('bar');
    expect(tokens[3].contents).toBe('baz');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'Document',
      children: [
        {
          kind: 'Definition',
          children: [
            {
              kind: 'ExecutableDefinition',
              children: [
                {
                  kind: 'OperationDefinition',
                  children: [
                    {
                      kind: 'Selection',
                      children: [
                        {
                          kind: 'Field',
                          children: [tokens[1]],
                        },
                      ],
                    },
                    {
                      kind: 'Selection',
                      children: [
                        {
                          kind: 'Field',
                          children: [tokens[2]],
                        },
                      ],
                    },
                    {
                      kind: 'Selection',
                      children: [
                        {
                          kind: 'Field',
                          children: [tokens[3]],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it('parses samples for the epsilon grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(epsilonGrammar);
    const itemSets = getItemSets(epsilonGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, epsilonGrammar);
    const table = getParseTable(itemSets, transitionTable, epsilonGrammar);

    // First, with optional BAR present.
    let input = 'BAR{FOO}';
    let tokens: Array<Token> = [
      new Token('BAR', 0, 3, input),
      new Token('OPEN_BRACKET', 3, 4, input),
      new Token('FOO', 4, 7, input),
      new Token('CLOSE_BRACKET', 7, 8, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[0].contents).toBe('BAR');
    expect(tokens[1].contents).toBe('{');
    expect(tokens[2].contents).toBe('FOO');
    expect(tokens[3].contents).toBe('}');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'S',
      children: [
        {
          kind: 'Program',
          children: [
            {
              kind: 'BarOpt',
              children: [tokens[0]],
            },
            tokens[1],
            {
              kind: 'FooList',
              children: [tokens[2]],
            },
            tokens[3],
          ],
        },
      ],
    });

    // Now, without optional BAR.
    input = '{FOO}';
    tokens = [
      new Token('OPEN_BRACKET', 0, 1, input),
      new Token('FOO', 1, 4, input),
      new Token('CLOSE_BRACKET', 4, 5, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[0].contents).toBe('{');
    expect(tokens[1].contents).toBe('FOO');
    expect(tokens[2].contents).toBe('}');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'S',
      children: [
        {
          kind: 'Program',
          children: [
            {
              kind: 'BarOpt',
              children: [],
            },
            tokens[0],
            {
              kind: 'FooList',
              children: [tokens[1]],
            },
            tokens[2],
          ],
        },
      ],
    });
  });

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
