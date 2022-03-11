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
        NAME → 13
        ON → 14
        Name → 12
        OperationNameOpt → 11
      9:
        ELLIPSIS → 21
        NAME → 13
        ON → 14
        Alias → 19
        Field → 17
        FragmentSpread → 20
        InlineFragment → 22
        Name → 18
        Selection → 16
        SelectionList → 15
      11:
        OPENING_PAREN → 24
        VariableDefinitionsOpt → 23
      15:
        CLOSING_BRACE → 25
        ELLIPSIS → 21
        NAME → 13
        ON → 14
        Alias → 19
        Field → 17
        FragmentSpread → 20
        InlineFragment → 22
        Name → 18
        Selection → 26
      18:
        COLON → 28
        OPENING_PAREN → 29
        ArgumentsOpt → 27
      19:
        NAME → 13
        ON → 14
        Name → 30
      21:
        NAME → 33
        ON → 34
        FragmentName → 31
        TypeConditionOpt → 32
      23:
        AT → 38
        Directive → 37
        DirectiveList → 36
        DirectivesOpt → 35
      24:
        DOLLAR → 42
        Variable → 41
        VariableDefinition → 40
        VariableDefinitionList → 39
      27:
        AT → 38
        Directive → 37
        DirectiveList → 36
        DirectivesOpt → 43
      29:
        NAME → 13
        ON → 14
        Argument → 45
        ArgumentList → 44
        Name → 46
      30:
        OPENING_PAREN → 29
        ArgumentsOpt → 47
      31:
        AT → 38
        Directive → 37
        DirectiveList → 36
        DirectivesOpt → 48
      32:
        AT → 38
        Directive → 37
        DirectiveList → 36
        DirectivesOpt → 49
      34:
        NAME → 13
        ON → 14
        Name → 51
        NamedType → 50
      35:
        OPENING_BRACE → 9
        SelectionSet → 52
      36:
        AT → 38
        Directive → 53
      38:
        NAME → 13
        ON → 14
        Name → 54
      39:
        CLOSING_PAREN → 55
        DOLLAR → 42
        Variable → 41
        VariableDefinition → 56
      41:
        COLON → 57
      42:
        NAME → 13
        ON → 14
        Name → 58
      43:
        OPENING_BRACE → 9
        SelectionSet → 60
        SelectionSetOpt → 59
      44:
        CLOSING_PAREN → 61
        NAME → 13
        ON → 14
        Argument → 62
        Name → 46
      46:
        COLON → 63
      47:
        AT → 38
        Directive → 37
        DirectiveList → 36
        DirectivesOpt → 64
      49:
        OPENING_BRACE → 9
        SelectionSet → 65
      54:
        OPENING_PAREN → 29
        ArgumentsOpt → 66
      57:
        NAME → 13
        ON → 14
        OPENING_BRACKET → 70
        ListType → 69
        Name → 51
        NamedType → 68
        NonNullType → 71
        Type → 67
      63:
        BLOCK_STRING_VALUE → 78
        DOLLAR → 42
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 84
        OPENING_BRACKET → 82
        STRING_VALUE → 77
        ListValue → 81
        Name → 80
        NamedValue → 79
        NumberValue → 74
        ObjectValue → 83
        StringValue → 76
        Value → 72
        Variable → 73
      64:
        OPENING_BRACE → 9
        SelectionSet → 60
        SelectionSetOpt → 85
      67:
        EQUALS → 87
        DefaultValueOpt → 86
      68:
        BANG → 88
      69:
        BANG → 89
      70:
        NAME → 13
        ON → 14
        OPENING_BRACKET → 70
        ListType → 69
        Name → 51
        NamedType → 68
        NonNullType → 71
        Type → 90
      82:
        BLOCK_STRING_VALUE → 78
        CLOSING_BRACKET → 91
        DOLLAR → 42
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 84
        OPENING_BRACKET → 82
        STRING_VALUE → 77
        ListValue → 81
        ListValueList → 92
        Name → 80
        NamedValue → 79
        NumberValue → 74
        ObjectValue → 83
        StringValue → 76
        Value → 93
        Variable → 73
      84:
        CLOSING_BRACE → 94
        NAME → 13
        ON → 14
        Name → 97
        ObjectField → 96
        ObjectFieldList → 95
      86:
        AT → 101
        DirectiveConst → 100
        DirectiveConstList → 99
        DirectivesConstOpt → 98
      87:
        BLOCK_STRING_VALUE → 78
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 109
        OPENING_BRACKET → 107
        STRING_VALUE → 77
        ListValueConst → 106
        Name → 80
        NamedValue → 105
        NumberValue → 103
        ObjectValueConst → 108
        StringValue → 104
        ValueConst → 102
      90:
        CLOSING_BRACKET → 110
      92:
        BLOCK_STRING_VALUE → 78
        CLOSING_BRACKET → 111
        DOLLAR → 42
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 84
        OPENING_BRACKET → 82
        STRING_VALUE → 77
        ListValue → 81
        Name → 80
        NamedValue → 79
        NumberValue → 74
        ObjectValue → 83
        StringValue → 76
        Value → 112
        Variable → 73
      95:
        CLOSING_BRACE → 113
        NAME → 13
        ON → 14
        Name → 97
        ObjectField → 114
      97:
        COLON → 115
      99:
        AT → 101
        DirectiveConst → 116
      101:
        NAME → 13
        ON → 14
        Name → 117
      107:
        BLOCK_STRING_VALUE → 78
        CLOSING_BRACKET → 118
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 109
        OPENING_BRACKET → 107
        STRING_VALUE → 77
        ListValueConst → 106
        ListValueConstList → 119
        Name → 80
        NamedValue → 105
        NumberValue → 103
        ObjectValueConst → 108
        StringValue → 104
        ValueConst → 120
      109:
        CLOSING_BRACE → 121
        NAME → 13
        ON → 14
        Name → 124
        ObjectFieldConst → 123
        ObjectFieldConstList → 122
      115:
        BLOCK_STRING_VALUE → 78
        DOLLAR → 42
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 84
        OPENING_BRACKET → 82
        STRING_VALUE → 77
        ListValue → 81
        Name → 80
        NamedValue → 79
        NumberValue → 74
        ObjectValue → 83
        StringValue → 76
        Value → 125
        Variable → 73
      117:
        OPENING_PAREN → 127
        ArgumentsConstOpt → 126
      119:
        BLOCK_STRING_VALUE → 78
        CLOSING_BRACKET → 128
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 109
        OPENING_BRACKET → 107
        STRING_VALUE → 77
        ListValueConst → 106
        Name → 80
        NamedValue → 105
        NumberValue → 103
        ObjectValueConst → 108
        StringValue → 104
        ValueConst → 129
      122:
        CLOSING_BRACE → 130
        NAME → 13
        ON → 14
        Name → 124
        ObjectFieldConst → 131
      124:
        COLON → 132
      127:
        NAME → 13
        ON → 14
        ArgumentConst → 134
        ArgumentConstList → 133
        Name → 135
      132:
        BLOCK_STRING_VALUE → 78
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 109
        OPENING_BRACKET → 107
        STRING_VALUE → 77
        ListValueConst → 106
        Name → 80
        NamedValue → 105
        NumberValue → 103
        ObjectValueConst → 108
        StringValue → 104
        ValueConst → 136
      133:
        CLOSING_PAREN → 137
        NAME → 13
        ON → 14
        ArgumentConst → 138
        Name → 135
      135:
        COLON → 139
      139:
        BLOCK_STRING_VALUE → 78
        NAME → 13
        NUMBER → 75
        ON → 14
        OPENING_BRACE → 109
        OPENING_BRACKET → 107
        STRING_VALUE → 77
        ListValueConst → 106
        Name → 80
        NamedValue → 105
        NumberValue → 103
        ObjectValueConst → 108
        StringValue → 104
        ValueConst → 140"
    `);
  });
});
