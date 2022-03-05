import lex from '@masochist/lexer';

import {table, grammar} from '..';
import parseWithTable, {makeNode} from '../parseWithTable';

import type {ParseTree} from '../parseWithTable';

describe('GraphQL parser', () => {
  it('parses a simple named query', () => {
    const tokens = [
      ...lex(`
      query IndexQuery {
        foo
        barAlias: bar
        baz {
          qux
        }
      }
    `),
    ];

    expect(parseWithTable<ParseTree>(table, tokens, grammar, makeNode)).toEqual(
      {
        kind: 'Document',
        children: [
          {
            kind: 'Definition',
            children: [
              {
                kind: 'ExecutableDefinition',
                children: [
                  {
                    kind: 'OPERATION',
                    name: 'IndexQuery',
                    selections: [
                      {
                        kind: 'FIELD',
                        alias: null,
                        name: 'foo',
                        selections: null,
                      },
                      {
                        kind: 'FIELD',
                        alias: 'barAlias',
                        name: 'bar',
                        selections: null,
                      },
                      {
                        kind: 'FIELD',
                        alias: null,
                        name: 'baz',
                        selections: [
                          {
                            kind: 'FIELD',
                            alias: null,
                            name: 'qux',
                            selections: null,
                          },
                        ],
                      },
                    ],
                    type: 'QUERY',
                  },
                ],
              },
            ],
          },
        ],
      },
    );
  });
});
