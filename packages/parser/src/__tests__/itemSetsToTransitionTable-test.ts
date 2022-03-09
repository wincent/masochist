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
      42:
        ArgumentsOpt → 51
        OPENING_PAREN → 24
      45:
        ListType → 55
        NAME → 54
        NamedType → 53
        NonNullType → 57
        OPENING_BRACKET → 56
        Type → 52
      49:
        BLOCK_STRING_VALUE → 64
        DOLLAR → 33
        NAME → 66
        NUMBER → 61
        NamedValue → 65
        NumberValue → 60
        STRING_VALUE → 63
        StringValue → 62
        Value → 58
        Variable → 59
      52:
        DefaultValueOpt → 67
        EQUALS → 68
      53:
        BANG → 69
      55:
        BANG → 70
      56:
        ListType → 55
        NAME → 54
        NamedType → 53
        NonNullType → 57
        OPENING_BRACKET → 56
        Type → 71
      68:
        ListValueConst → 75
        NAME → 66
        NUMBER → 61
        NamedValue → 74
        NumberValue → 73
        OPENING_BRACE → 78
        OPENING_BRACKET → 76
        ObjectValueConst → 77
        ValueConst → 72
      71:
        CLOSING_BRACKET → 79
      76:
        CLOSING_BRACKET → 80
        ListValueConst → 75
        ListValueConstList → 81
        NAME → 66
        NUMBER → 61
        NamedValue → 74
        NumberValue → 73
        OPENING_BRACE → 78
        OPENING_BRACKET → 76
        ObjectValueConst → 77
        ValueConst → 82
      78:
        CLOSING_BRACE → 83
        NAME → 86
        ObjectFieldConst → 85
        ObjectFieldConstList → 84
      81:
        CLOSING_BRACKET → 87
        ListValueConst → 75
        NAME → 66
        NUMBER → 61
        NamedValue → 74
        NumberValue → 73
        OPENING_BRACE → 78
        OPENING_BRACKET → 76
        ObjectValueConst → 77
        ValueConst → 88
      84:
        CLOSING_BRACE → 89
        NAME → 86
        ObjectFieldConst → 90
      86:
        COLON → 91
      91:
        ListValueConst → 75
        NAME → 66
        NUMBER → 61
        NamedValue → 74
        NumberValue → 73
        OPENING_BRACE → 78
        OPENING_BRACKET → 76
        ObjectValueConst → 77
        ValueConst → 92"
    `);
  });
});
