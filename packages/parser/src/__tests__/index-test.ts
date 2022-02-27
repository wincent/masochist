import {dedent} from '@masochist/common';

import {
  getParseTable,
  parseWithTable,
  stringifyGrammar,
  stringifyParseTable,
} from '..';
import getAugmentedGrammar from '../getAugmentedGrammar';
import getItemSets from '../getItemSets';
import {subsetGrammar, toyGrammar} from './grammars';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';

import type {Token} from '..';

// TODO: also add tests for full GraphQL grammar.

describe('getParseTable()', () => {
  it('returns a parseTable for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, toyGrammar);
    expect(getParseTable(itemSets, transitionTable, toyGrammar)).toEqual([
      [
        {
          star: {kind: 'Shift', state: 5},
          x: {kind: 'Shift', state: 4},
        },
        {
          E: 6,
          N: 2,
          S: 1,
          V: 3,
        },
      ],
      [{$: {kind: 'Accept'}}, {}],
      [{$: {kind: 'Reduce', rule: 1}}, {}],
      [
        {
          eq: {kind: 'Shift', state: 7},
          $: {kind: 'Reduce', rule: 4},
        },
        {},
      ],
      [
        {
          eq: {kind: 'Reduce', rule: 5},
          $: {kind: 'Reduce', rule: 5},
        },
        {},
      ],
      [
        {
          star: {kind: 'Shift', state: 5},
          x: {kind: 'Shift', state: 4},
        },
        {
          E: 8,
          V: 9,
        },
      ],
      [
        {
          $: {kind: 'Reduce', rule: 3},
        },
        {},
      ],
      [
        {
          star: {kind: 'Shift', state: 5},
          x: {kind: 'Shift', state: 4},
        },
        {
          E: 10,
          V: 9,
        },
      ],
      [
        {
          eq: {kind: 'Reduce', rule: 6},
          $: {kind: 'Reduce', rule: 6},
        },
        {},
      ],
      [
        {
          eq: {kind: 'Reduce', rule: 4},
          $: {kind: 'Reduce', rule: 4},
        },
        {},
      ],
      [
        {
          $: {kind: 'Reduce', rule: 2},
        },
        {},
      ],
    ]);
  });

  it('returns a parseTable for the subset grammar', () => {
    const itemSets = getItemSets(subsetGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, subsetGrammar);
    expect(getParseTable(itemSets, transitionTable, subsetGrammar)).toEqual([
      [
        {
          OPENING_BRACE: {kind: 'Shift', state: 7},
        },
        {
          Definition: 3,
          DefinitionList: 2,
          Document: 1,
          ExecutableDefinition: 4,
          OperationDefinition: 5,
          SelectionSet: 6,
        },
      ],
      [
        {
          $: {kind: 'Accept'},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Shift', state: 7},
          $: {kind: 'Reduce', rule: 1},
        },
        {
          Definition: 8,
          ExecutableDefinition: 4,
          OperationDefinition: 5,
          SelectionSet: 6,
        },
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 2},
          $: {kind: 'Reduce', rule: 2},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 4},
          $: {kind: 'Reduce', rule: 4},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 5},
          $: {kind: 'Reduce', rule: 5},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 6},
          $: {kind: 'Reduce', rule: 6},
        },
        {},
      ],
      [
        {
          NAME: {kind: 'Shift', state: 12},
        },
        {
          Field: 11,
          Selection: 10,
          SelectionList: 9,
        },
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 3},
          $: {kind: 'Reduce', rule: 3},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Shift', state: 13},
          NAME: {kind: 'Shift', state: 12},
        },
        {
          Field: 11,
          Selection: 14,
        },
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 8},
          NAME: {kind: 'Reduce', rule: 8},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 10},
          NAME: {kind: 'Reduce', rule: 10},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 11},
          NAME: {kind: 'Reduce', rule: 11},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 7},
          $: {kind: 'Reduce', rule: 7},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 9},
          NAME: {kind: 'Reduce', rule: 9},
        },
        {},
      ],
    ]);
  });
});

describe('itemSetsToTransitionTable()', () => {
  it('returns a transition table for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    expect(itemSetsToTransitionTable(itemSets, toyGrammar)).toEqual([
      /* 0 */ {
        E: 6,
        N: 2,
        S: 1,
        V: 3,
        star: 5,
        x: 4,
      },
      /* 1 */ {},
      /* 2 */ {},
      /* 3 */ {
        eq: 7,
      },
      /* 4 */ {},
      /* 5 */ {
        E: 8,
        V: 9,
        star: 5,
        x: 4,
      },
      /* 6 */ {},
      /* 7 */ {
        E: 10,
        V: 9,
        star: 5,
        x: 4,
      },
      /* 8 */ {},
      /* 9 */ {},
      /* 10 */ {},
    ]);
  });

  it('returns a transition table for the subset grammar', () => {
    const itemSets = getItemSets(subsetGrammar);
    expect(itemSetsToTransitionTable(itemSets, subsetGrammar)).toEqual([
      /* 0 */ {
        Definition: 3,
        DefinitionList: 2,
        Document: 1,
        ExecutableDefinition: 4,
        OPENING_BRACE: 7,
        OperationDefinition: 5,
        SelectionSet: 6,
      },
      /* 1 */ {},
      /* 2 */ {
        Definition: 8,
        ExecutableDefinition: 4,
        OPENING_BRACE: 7,
        OperationDefinition: 5,
        SelectionSet: 6,
      },
      /* 3 */ {},
      /* 4 */ {},
      /* 5 */ {},
      /* 6 */ {},
      /* 7 */ {Field: 11, NAME: 12, Selection: 10, SelectionList: 9},
      /* 8 */ {},
      /* 9 */ {CLOSING_BRACE: 13, Field: 11, NAME: 12, Selection: 14},
      /* 10 */ {},
      /* 11 */ {},
      /* 12 */ {},
      /* 13 */ {},
      /* 14 */ {},
    ]);
  });
});

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

describe('stringifyGrammar()', () => {
  it('returns a stringified toy grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(toyGrammar);

    // Note the use of rule numbers here (to makes this output useful in
    // conjunction with the output of the `stringifyParseTable()` function).
    expect(stringifyGrammar(augmentedGrammar)).toBe(
      dedent`
        %token eq
        %token star
        %token x

        r0: S' → S
        r1: S → N
        r2: N → V eq E
        r3: N → E
        r4: E → V
        r5: V → x
        r6: V → star E
      ` + '\n',
    );
  });
});

describe('stringifyParseTable()', () => {
  it('returns a stringified parse table for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, toyGrammar);
    const parseTable = getParseTable(itemSets, transitionTable, toyGrammar);
    expect(stringifyParseTable(parseTable)).toEqual(
      dedent`
        | State | eq | star |  x |      $ |  E | N | S | V |
        |-------|----|------|----|--------|----|---|---|---|
        |     0 |    |   s5 | s4 |        |  6 | 2 | 1 | 3 |
        |     1 |    |      |    | accept |    |   |   |   |
        |     2 |    |      |    |     r1 |    |   |   |   |
        |     3 | s7 |      |    |     r4 |    |   |   |   |
        |     4 | r5 |      |    |     r5 |    |   |   |   |
        |     5 |    |   s5 | s4 |        |  8 |   |   | 9 |
        |     6 |    |      |    |     r3 |    |   |   |   |
        |     7 |    |   s5 | s4 |        | 10 |   |   | 9 |
        |     8 | r6 |      |    |     r6 |    |   |   |   |
        |     9 | r4 |      |    |     r4 |    |   |   |   |
        |    10 |    |      |    |     r2 |    |   |   |   |
      ` + '\n',
    );
  });
});
