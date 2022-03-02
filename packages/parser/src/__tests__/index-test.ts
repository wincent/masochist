import lex from '@masochist/lexer';

import {table, grammar} from '..';
import parseWithTable, {makeNode} from '../parseWithTable';

import type {ParseTree} from '../parseWithTable';

describe('GraphQL parser', () => {
  it('parses a simple anonymous query', () => {
    const tokens = [...lex(`{foo bar baz}`)];

    const foo = tokens[1];
    const bar = tokens[2];
    const baz = tokens[3];

    // Proof that tokens match up with the variable names I've given them:
    expect(foo.contents).toBe('foo');
    expect(bar.contents).toBe('bar');
    expect(baz.contents).toBe('baz');

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
                            kind: 'Field',
                            children: [foo],
                          },
                        ],
                      },
                      {
                        kind: 'Selection',
                        children: [
                          {
                            kind: 'Field',
                            children: [bar],
                          },
                        ],
                      },
                      {
                        kind: 'Selection',
                        children: [
                          {
                            kind: 'Field',
                            children: [baz],
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
