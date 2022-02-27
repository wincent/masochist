import {table, grammar} from '..';
import parseWithTable from '../parseWithTable';

import type {Token} from '../parseWithTable';

describe('GraphQL parser', () => {
  it('parses a simple anonymous query', () => {
    const tokens: Array<Token> = [
      {name: 'OPENING_BRACE'},
      {name: 'NAME', contents: 'foo'},
      {name: 'NAME', contents: 'bar'},
      {name: 'NAME', contents: 'baz'},
      {name: 'CLOSING_BRACE'},
    ];

    expect(parseWithTable(table, tokens, grammar)).toEqual({
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
                          children: [
                            {
                              name: 'NAME',
                              contents: 'foo',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      kind: 'Selection',
                      children: [
                        {
                          kind: 'Field',
                          children: [
                            {
                              name: 'NAME',
                              contents: 'bar',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      kind: 'Selection',
                      children: [
                        {
                          kind: 'Field',
                          children: [
                            {
                              name: 'NAME',
                              contents: 'baz',
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
      ],
    });
  });
});
