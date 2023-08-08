import {itemSets, unaugmentedGrammar} from '../definition';
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
          itemSetsToTransitionTable(itemSets, unaugmentedGrammar),
          unaugmentedGrammar,
        ),
    ).toMatchInlineSnapshot(`
      "
      0:
        FRAGMENT → 11
        NAME → 7
        OPENING_BRACE → 9
        Definition → 3
        DefinitionList → 2
        Document → 1
        ExecutableDefinition → 4
        FragmentDefinition → 10
        OperationDefinition → 5
        OperationType → 6
        SelectionSet → 8
      2:
        FRAGMENT → 11
        NAME → 7
        OPENING_BRACE → 9
        Definition → 12
        ExecutableDefinition → 4
        FragmentDefinition → 10
        OperationDefinition → 5
        OperationType → 6
        SelectionSet → 8
      6:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 14
        OperationNameOpt → 13
      9:
        ELLIPSIS → 24
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Alias → 22
        Field → 20
        FragmentSpread → 23
        InlineFragment → 25
        Name → 21
        Selection → 19
        SelectionList → 18
      11:
        NAME → 27
        FragmentName → 26
      13:
        OPENING_PAREN → 29
        VariableDefinitionsOpt → 28
      18:
        CLOSING_BRACE → 30
        ELLIPSIS → 24
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Alias → 22
        Field → 20
        FragmentSpread → 23
        InlineFragment → 25
        Name → 21
        Selection → 31
      21:
        COLON → 33
        OPENING_PAREN → 34
        ArgumentsOpt → 32
      22:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 35
      24:
        NAME → 27
        ON → 38
        FragmentName → 36
        TypeConditionOpt → 37
      26:
        ON → 39
      28:
        AT → 43
        Directive → 42
        DirectiveList → 41
        DirectivesOpt → 40
      29:
        DOLLAR → 47
        Variable → 46
        VariableDefinition → 45
        VariableDefinitionList → 44
      32:
        AT → 43
        Directive → 42
        DirectiveList → 41
        DirectivesOpt → 48
      34:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Argument → 50
        ArgumentList → 49
        Name → 51
      35:
        OPENING_PAREN → 34
        ArgumentsOpt → 52
      36:
        AT → 43
        Directive → 42
        DirectiveList → 41
        DirectivesOpt → 53
      37:
        AT → 43
        Directive → 42
        DirectiveList → 41
        DirectivesOpt → 54
      38:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 56
        NamedType → 55
      39:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 56
        NamedType → 57
      40:
        OPENING_BRACE → 9
        SelectionSet → 58
      41:
        AT → 43
        Directive → 59
      43:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 60
      44:
        CLOSING_PAREN → 61
        DOLLAR → 47
        Variable → 46
        VariableDefinition → 62
      46:
        COLON → 63
      47:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 64
      48:
        OPENING_BRACE → 9
        SelectionSet → 66
        SelectionSetOpt → 65
      49:
        CLOSING_PAREN → 67
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Argument → 68
        Name → 51
      51:
        COLON → 69
      52:
        AT → 43
        Directive → 42
        DirectiveList → 41
        DirectivesOpt → 70
      54:
        OPENING_BRACE → 9
        SelectionSet → 71
      57:
        AT → 43
        Directive → 42
        DirectiveList → 41
        DirectivesOpt → 72
      60:
        OPENING_PAREN → 34
        ArgumentsOpt → 73
      63:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        OPENING_BRACKET → 77
        ListType → 76
        Name → 56
        NamedType → 75
        NonNullType → 78
        Type → 74
      69:
        BLOCK_STRING_VALUE → 85
        DOLLAR → 47
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 91
        OPENING_BRACKET → 89
        STRING_VALUE → 84
        ListValue → 88
        Name → 87
        NamedValue → 86
        NumberValue → 81
        ObjectValue → 90
        StringValue → 83
        Value → 79
        Variable → 80
      70:
        OPENING_BRACE → 9
        SelectionSet → 66
        SelectionSetOpt → 92
      72:
        OPENING_BRACE → 9
        SelectionSet → 93
      74:
        EQUALS → 95
        DefaultValueOpt → 94
      75:
        BANG → 96
      76:
        BANG → 97
      77:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        OPENING_BRACKET → 77
        ListType → 76
        Name → 56
        NamedType → 75
        NonNullType → 78
        Type → 98
      89:
        BLOCK_STRING_VALUE → 85
        CLOSING_BRACKET → 99
        DOLLAR → 47
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 91
        OPENING_BRACKET → 89
        STRING_VALUE → 84
        ListValue → 88
        ListValueList → 100
        Name → 87
        NamedValue → 86
        NumberValue → 81
        ObjectValue → 90
        StringValue → 83
        Value → 101
        Variable → 80
      91:
        CLOSING_BRACE → 102
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 105
        ObjectField → 104
        ObjectFieldList → 103
      94:
        AT → 109
        DirectiveConst → 108
        DirectiveConstList → 107
        DirectivesConstOpt → 106
      95:
        BLOCK_STRING_VALUE → 85
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 117
        OPENING_BRACKET → 115
        STRING_VALUE → 84
        ListValueConst → 114
        Name → 87
        NamedValue → 113
        NumberValue → 111
        ObjectValueConst → 116
        StringValue → 112
        ValueConst → 110
      98:
        CLOSING_BRACKET → 118
      100:
        BLOCK_STRING_VALUE → 85
        CLOSING_BRACKET → 119
        DOLLAR → 47
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 91
        OPENING_BRACKET → 89
        STRING_VALUE → 84
        ListValue → 88
        Name → 87
        NamedValue → 86
        NumberValue → 81
        ObjectValue → 90
        StringValue → 83
        Value → 120
        Variable → 80
      103:
        CLOSING_BRACE → 121
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 105
        ObjectField → 122
      105:
        COLON → 123
      107:
        AT → 109
        DirectiveConst → 124
      109:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 125
      115:
        BLOCK_STRING_VALUE → 85
        CLOSING_BRACKET → 126
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 117
        OPENING_BRACKET → 115
        STRING_VALUE → 84
        ListValueConst → 114
        ListValueConstList → 127
        Name → 87
        NamedValue → 113
        NumberValue → 111
        ObjectValueConst → 116
        StringValue → 112
        ValueConst → 128
      117:
        CLOSING_BRACE → 129
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 132
        ObjectFieldConst → 131
        ObjectFieldConstList → 130
      123:
        BLOCK_STRING_VALUE → 85
        DOLLAR → 47
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 91
        OPENING_BRACKET → 89
        STRING_VALUE → 84
        ListValue → 88
        Name → 87
        NamedValue → 86
        NumberValue → 81
        ObjectValue → 90
        StringValue → 83
        Value → 133
        Variable → 80
      125:
        OPENING_PAREN → 135
        ArgumentsConstOpt → 134
      127:
        BLOCK_STRING_VALUE → 85
        CLOSING_BRACKET → 136
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 117
        OPENING_BRACKET → 115
        STRING_VALUE → 84
        ListValueConst → 114
        Name → 87
        NamedValue → 113
        NumberValue → 111
        ObjectValueConst → 116
        StringValue → 112
        ValueConst → 137
      130:
        CLOSING_BRACE → 138
        FRAGMENT → 16
        NAME → 15
        ON → 17
        Name → 132
        ObjectFieldConst → 139
      132:
        COLON → 140
      135:
        FRAGMENT → 16
        NAME → 15
        ON → 17
        ArgumentConst → 142
        ArgumentConstList → 141
        Name → 143
      140:
        BLOCK_STRING_VALUE → 85
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 117
        OPENING_BRACKET → 115
        STRING_VALUE → 84
        ListValueConst → 114
        Name → 87
        NamedValue → 113
        NumberValue → 111
        ObjectValueConst → 116
        StringValue → 112
        ValueConst → 144
      141:
        CLOSING_PAREN → 145
        FRAGMENT → 16
        NAME → 15
        ON → 17
        ArgumentConst → 146
        Name → 143
      143:
        COLON → 147
      147:
        BLOCK_STRING_VALUE → 85
        FRAGMENT → 16
        NAME → 15
        NUMBER → 82
        ON → 17
        OPENING_BRACE → 117
        OPENING_BRACKET → 115
        STRING_VALUE → 84
        ListValueConst → 114
        Name → 87
        NamedValue → 113
        NumberValue → 111
        ObjectValueConst → 116
        StringValue → 112
        ValueConst → 148"
    `);
  });
});
