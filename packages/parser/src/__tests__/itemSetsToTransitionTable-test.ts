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
        stringifyTransitionTable(
          itemSetsToTransitionTable(itemSets, grammar),
          grammar,
        ),
    ).toMatchInlineSnapshot(`
      "
      0:
        NAME → 7
        OPENING_BRACE → 9
        Definition → 3
        DefinitionList → 2
        Document → 1
        ExecutableDefinition → 4
        OperationDefinition → 5
        OperationType → 6
        SelectionSet → 8
      2:
        NAME → 7
        OPENING_BRACE → 9
        Definition → 10
        ExecutableDefinition → 4
        OperationDefinition → 5
        OperationType → 6
        SelectionSet → 8
      6:
        NAME → 12
        OperationNameOpt → 11
      9:
        ELLIPSIS → 19
        NAME → 16
        Alias → 17
        Field → 15
        FragmentSpread → 18
        Selection → 14
        SelectionList → 13
      11:
        OPENING_PAREN → 21
        VariableDefinitionsOpt → 20
      13:
        CLOSING_BRACE → 22
        ELLIPSIS → 19
        NAME → 16
        Alias → 17
        Field → 15
        FragmentSpread → 18
        Selection → 23
      16:
        COLON → 25
        OPENING_PAREN → 26
        ArgumentsOpt → 24
      17:
        NAME → 27
      19:
        NAME → 28
      20:
        AT → 32
        Directive → 31
        DirectiveList → 30
        DirectivesOpt → 29
      21:
        DOLLAR → 36
        Variable → 35
        VariableDefinition → 34
        VariableDefinitionList → 33
      24:
        AT → 32
        Directive → 31
        DirectiveList → 30
        DirectivesOpt → 37
      26:
        NAME → 40
        Argument → 39
        ArgumentList → 38
      27:
        OPENING_PAREN → 26
        ArgumentsOpt → 41
      28:
        AT → 32
        Directive → 31
        DirectiveList → 30
        DirectivesOpt → 42
      29:
        OPENING_BRACE → 9
        SelectionSet → 43
      30:
        AT → 32
        Directive → 44
      32:
        NAME → 45
      33:
        CLOSING_PAREN → 46
        DOLLAR → 36
        Variable → 35
        VariableDefinition → 47
      35:
        COLON → 48
      36:
        NAME → 49
      37:
        OPENING_BRACE → 9
        SelectionSet → 51
        SelectionSetOpt → 50
      38:
        CLOSING_PAREN → 52
        NAME → 40
        Argument → 53
      40:
        COLON → 54
      41:
        AT → 32
        Directive → 31
        DirectiveList → 30
        DirectivesOpt → 55
      45:
        OPENING_PAREN → 26
        ArgumentsOpt → 56
      48:
        NAME → 59
        OPENING_BRACKET → 61
        ListType → 60
        NamedType → 58
        NonNullType → 62
        Type → 57
      54:
        BLOCK_STRING_VALUE → 69
        DOLLAR → 36
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 75
        OPENING_BRACKET → 73
        STRING_VALUE → 68
        ListValue → 72
        NamedValue → 70
        NumberValue → 65
        ObjectValue → 74
        StringValue → 67
        Value → 63
        Variable → 64
      55:
        OPENING_BRACE → 9
        SelectionSet → 51
        SelectionSetOpt → 76
      57:
        EQUALS → 78
        DefaultValueOpt → 77
      58:
        BANG → 79
      60:
        BANG → 80
      61:
        NAME → 59
        OPENING_BRACKET → 61
        ListType → 60
        NamedType → 58
        NonNullType → 62
        Type → 81
      73:
        BLOCK_STRING_VALUE → 69
        CLOSING_BRACKET → 82
        DOLLAR → 36
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 75
        OPENING_BRACKET → 73
        STRING_VALUE → 68
        ListValue → 72
        ListValueList → 83
        NamedValue → 70
        NumberValue → 65
        ObjectValue → 74
        StringValue → 67
        Value → 84
        Variable → 64
      75:
        CLOSING_BRACE → 85
        NAME → 88
        ObjectField → 87
        ObjectFieldList → 86
      77:
        AT → 92
        DirectiveConst → 91
        DirectiveConstList → 90
        DirectivesConstOpt → 89
      78:
        BLOCK_STRING_VALUE → 69
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 100
        OPENING_BRACKET → 98
        STRING_VALUE → 68
        ListValueConst → 97
        NamedValue → 96
        NumberValue → 94
        ObjectValueConst → 99
        StringValue → 95
        ValueConst → 93
      81:
        CLOSING_BRACKET → 101
      83:
        BLOCK_STRING_VALUE → 69
        CLOSING_BRACKET → 102
        DOLLAR → 36
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 75
        OPENING_BRACKET → 73
        STRING_VALUE → 68
        ListValue → 72
        NamedValue → 70
        NumberValue → 65
        ObjectValue → 74
        StringValue → 67
        Value → 103
        Variable → 64
      86:
        CLOSING_BRACE → 104
        NAME → 88
        ObjectField → 105
      88:
        COLON → 106
      90:
        AT → 92
        DirectiveConst → 107
      92:
        NAME → 108
      98:
        BLOCK_STRING_VALUE → 69
        CLOSING_BRACKET → 109
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 100
        OPENING_BRACKET → 98
        STRING_VALUE → 68
        ListValueConst → 97
        ListValueConstList → 110
        NamedValue → 96
        NumberValue → 94
        ObjectValueConst → 99
        StringValue → 95
        ValueConst → 111
      100:
        CLOSING_BRACE → 112
        NAME → 115
        ObjectFieldConst → 114
        ObjectFieldConstList → 113
      106:
        BLOCK_STRING_VALUE → 69
        DOLLAR → 36
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 75
        OPENING_BRACKET → 73
        STRING_VALUE → 68
        ListValue → 72
        NamedValue → 70
        NumberValue → 65
        ObjectValue → 74
        StringValue → 67
        Value → 116
        Variable → 64
      108:
        OPENING_PAREN → 118
        ArgumentsConstOpt → 117
      110:
        BLOCK_STRING_VALUE → 69
        CLOSING_BRACKET → 119
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 100
        OPENING_BRACKET → 98
        STRING_VALUE → 68
        ListValueConst → 97
        NamedValue → 96
        NumberValue → 94
        ObjectValueConst → 99
        StringValue → 95
        ValueConst → 120
      113:
        CLOSING_BRACE → 121
        NAME → 115
        ObjectFieldConst → 122
      115:
        COLON → 123
      118:
        NAME → 126
        ArgumentConst → 125
        ArgumentConstList → 124
      123:
        BLOCK_STRING_VALUE → 69
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 100
        OPENING_BRACKET → 98
        STRING_VALUE → 68
        ListValueConst → 97
        NamedValue → 96
        NumberValue → 94
        ObjectValueConst → 99
        StringValue → 95
        ValueConst → 127
      124:
        CLOSING_PAREN → 128
        NAME → 126
        ArgumentConst → 129
      126:
        COLON → 130
      130:
        BLOCK_STRING_VALUE → 69
        NAME → 71
        NUMBER → 66
        OPENING_BRACE → 100
        OPENING_BRACKET → 98
        STRING_VALUE → 68
        ListValueConst → 97
        NamedValue → 96
        NumberValue → 94
        ObjectValueConst → 99
        StringValue → 95
        ValueConst → 131"
    `);
  });
});
