import {itemSets, grammar} from '..';
import getItemSets from '../getItemSets';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';
import stringifyTransitionTable from '../stringifyTransitionTable';
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

  it('returns a transition table for the GraphQL grammar', () => {
    expect(
      '\n' +
        stringifyTransitionTable(itemSetsToTransitionTable(itemSets, grammar)),
    ).toMatchInlineSnapshot(`
      "
      0:
        Definition → 3
        DefinitionList → 2
        Document → 1
        ExecutableDefinition → 4
        NAME → 7
        OPENING_BRACE → 9
        OperationDefinition → 5
        OperationType → 6
        SelectionSet → 8
      2:
        Definition → 10
        ExecutableDefinition → 4
        NAME → 7
        OPENING_BRACE → 9
        OperationDefinition → 5
        OperationType → 6
        SelectionSet → 8
      6:
        NAME → 12
        OperationNameOpt → 11
      9:
        Alias → 17
        Field → 15
        NAME → 16
        Selection → 14
        SelectionList → 13
      11:
        OPENING_PAREN → 19
        VariableDefinitionsOpt → 18
      13:
        Alias → 17
        CLOSING_BRACE → 20
        Field → 15
        NAME → 16
        Selection → 21
      16:
        COLON → 23
        OPENING_BRACE → 9
        SelectionSet → 24
        SelectionSetOpt → 22
      17:
        NAME → 25
      18:
        AT → 29
        Directive → 28
        DirectiveList → 27
        DirectivesOpt → 26
      19:
        DOLLAR → 33
        Variable → 32
        VariableDefinition → 31
        VariableDefinitionList → 30
      25:
        OPENING_BRACE → 9
        SelectionSet → 24
        SelectionSetOpt → 34
      26:
        OPENING_BRACE → 9
        SelectionSet → 35
      27:
        AT → 29
        Directive → 36
      29:
        NAME → 37
      30:
        CLOSING_PAREN → 38
        DOLLAR → 33
        Variable → 32
        VariableDefinition → 39
      32:
        COLON → 40
      33:
        NAME → 41
      40:
        NAME → 44
        NamedType → 43
        Type → 42"
    `);
  });
});
