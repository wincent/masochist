import getItemSets from '../getItemSets';
import getParseTable from '../getParseTable';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';
import parseWithTable from '../parseWithTable';
import {subsetGrammar, toyGrammar} from './grammars';

import type {Token} from '../parseWithTable';

describe('parseWithTable()', () => {
  it('parses samples for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, toyGrammar);
    const table = getParseTable(itemSets, transitionTable, toyGrammar);

    // Input (string): 5 = * 10
    // ie.   (tokens): x = * x
    const tokens: Array<Token> = [
      {name: 'x', contents: '5'},
      {name: 'eq'},
      {name: 'star'},
      {name: 'x', contents: '10'},
    ];

    expect(parseWithTable(table, tokens, toyGrammar)).toEqual({
      kind: 'S',
      children: [
        {
          kind: 'N',
          children: [
            {
              kind: 'V',
              children: [{name: 'x', contents: '5'}],
            },
            {name: 'eq'},
            {
              kind: 'E',
              children: [
                {
                  kind: 'V',
                  children: [
                    {name: 'star'},
                    {
                      kind: 'E',
                      children: [
                        {
                          kind: 'V',
                          children: [{name: 'x', contents: '10'}],
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
    const itemSets = getItemSets(subsetGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, subsetGrammar);
    const table = getParseTable(itemSets, transitionTable, subsetGrammar);

    const tokens: Array<Token> = [
      {name: 'OPENING_BRACE'},
      {name: 'NAME', contents: 'foo'},
      {name: 'NAME', contents: 'bar'},
      {name: 'NAME', contents: 'baz'},
      {name: 'CLOSING_BRACE'},
    ];

    expect(parseWithTable(table, tokens, subsetGrammar)).toEqual({
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
