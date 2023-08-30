import {describe, expect, it} from '@jest/globals';

import getItemSets from '../getItemSets';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

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

  it('returns a transition table for a grammar with epsilon productions', () => {
    const itemSets = getItemSets(epsilonGrammar);
    expect(itemSetsToTransitionTable(itemSets, epsilonGrammar)).toEqual([
      /* 0 */ {
        BAR: 4,
        BarOpt: 3,
        Program: 2,
        S: 1,
      },
      /* 1 */ {},
      /* 2 */ {},
      /* 3 */ {OPEN_BRACKET: 5},
      /* 4 */ {},
      /* 5 */ {
        FOO: 7,
        FooList: 6,
      },
      /* 6 */ {
        CLOSE_BRACKET: 8,
        FOO: 9,
      },
      /* 7 */ {},
      /* 8 */ {},
      /* 9 */ {},
    ]);
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/__tests__/itemSetsToTransitionTable-test.ts`.
});
