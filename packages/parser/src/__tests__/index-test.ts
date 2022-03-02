import lex from '@masochist/lexer';

import {table, grammar} from '..';
import parseWithTable, {makeNode} from '../parseWithTable';

import type {ParseTree} from '../parseWithTable';

describe('GraphQL parser', () => {
  it('parses a simple anonymous query', () => {
    const tokens = [
      ...lex(`
      {
        foo
        barAlias: bar
        baz
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
                    kind: 'OperationDefinition',
                    children: [
                      {
                        kind: 'Selection',
                        children: [
                          {
                            kind: 'FIELD',
                            name: 'foo',
                          },
                        ],
                      },
                      {
                        kind: 'Selection',
                        children: [
                          {
                            kind: 'FIELD',
                            name: 'bar',
                            alias: 'barAlias',
                          },
                        ],
                      },
                      {
                        kind: 'Selection',
                        children: [
                          {
                            kind: 'FIELD',
                            name: 'baz',
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
      },
    );
  });
});
