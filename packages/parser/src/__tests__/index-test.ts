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

        query NewQuery {
          hai
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
                directives: null,
                name: 'foo',
                selections: null,
              },
              {
                kind: 'FIELD',
                alias: 'barAlias',
                directives: null,
                name: 'bar',
                selections: null,
              },
              {
                kind: 'FIELD',
                alias: null,
                directives: null,
                name: 'baz',
                selections: [
                  {
                    kind: 'FIELD',
                    alias: null,
                    directives: null,
                    name: 'qux',
                    selections: null,
                  },
                ],
              },
            ],
            type: 'QUERY',
          },
          {
            kind: 'OPERATION',
            name: 'NewQuery',
            directives: null,
            selections: [
              {
                kind: 'FIELD',
                alias: null,
                directives: null,
                name: 'hai',
                selections: null,
              },
            ],
            type: 'QUERY',
          },
        ],
      },
    );
  });
});
