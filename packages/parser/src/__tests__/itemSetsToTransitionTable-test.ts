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
        ArgumentsOpt → 22
        COLON → 23
        OPENING_PAREN → 24
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
      22:
        OPENING_BRACE → 9
        SelectionSet → 35
        SelectionSetOpt → 34
      24:
        Argument → 37
        ArgumentList → 36
        NAME → 38
      25:
        ArgumentsOpt → 39
        OPENING_PAREN → 24
      26:
        OPENING_BRACE → 9
        SelectionSet → 40
      27:
        AT → 29
        Directive → 41
      29:
        NAME → 42
      30:
        CLOSING_PAREN → 43
        DOLLAR → 33
        Variable → 32
        VariableDefinition → 44
      32:
        COLON → 45
      33:
        NAME → 46
      36:
        Argument → 48
        CLOSING_PAREN → 47
        NAME → 38
      38:
        COLON → 49
      39:
        OPENING_BRACE → 9
        SelectionSet → 35
        SelectionSetOpt → 50
      45:
        ListType → 54
        NAME → 53
        NamedType → 52
        NonNullType → 56
        OPENING_BRACKET → 55
        Type → 51
      49:
        DOLLAR → 33
        NAME → 62
        NUMBER → 60
        NamedValue → 61
        NumberValue → 59
        Value → 57
        Variable → 58
      51:
        DefaultValueOpt → 63
        EQUALS → 64
      52:
        BANG → 65
      54:
        BANG → 66
      55:
        ListType → 54
        NAME → 53
        NamedType → 52
        NonNullType → 56
        OPENING_BRACKET → 55
        Type → 67
      64:
        NAME → 62
        NUMBER → 60
        NamedValue → 70
        NumberValue → 69
        ValueConst → 68
      67:
        CLOSING_BRACKET → 71"
    `);
  });
});
