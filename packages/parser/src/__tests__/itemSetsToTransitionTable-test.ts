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
        NAME → 16
        Alias → 17
        Field → 15
        Selection → 14
        SelectionList → 13
      11:
        OPENING_PAREN → 19
        VariableDefinitionsOpt → 18
      13:
        CLOSING_BRACE → 20
        NAME → 16
        Alias → 17
        Field → 15
        Selection → 21
      16:
        COLON → 23
        OPENING_PAREN → 24
        ArgumentsOpt → 22
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
        AT → 29
        Directive → 28
        DirectiveList → 27
        DirectivesOpt → 34
      24:
        NAME → 37
        Argument → 36
        ArgumentList → 35
      25:
        OPENING_PAREN → 24
        ArgumentsOpt → 38
      26:
        OPENING_BRACE → 9
        SelectionSet → 39
      27:
        AT → 29
        Directive → 40
      29:
        NAME → 41
      30:
        CLOSING_PAREN → 42
        DOLLAR → 33
        Variable → 32
        VariableDefinition → 43
      32:
        COLON → 44
      33:
        NAME → 45
      34:
        OPENING_BRACE → 9
        SelectionSet → 47
        SelectionSetOpt → 46
      35:
        CLOSING_PAREN → 48
        NAME → 37
        Argument → 49
      37:
        COLON → 50
      38:
        AT → 29
        Directive → 28
        DirectiveList → 27
        DirectivesOpt → 51
      41:
        OPENING_PAREN → 24
        ArgumentsOpt → 52
      44:
        NAME → 55
        OPENING_BRACKET → 57
        ListType → 56
        NamedType → 54
        NonNullType → 58
        Type → 53
      50:
        BLOCK_STRING_VALUE → 65
        DOLLAR → 33
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 71
        OPENING_BRACKET → 69
        STRING_VALUE → 64
        ListValue → 68
        NamedValue → 66
        NumberValue → 61
        ObjectValue → 70
        StringValue → 63
        Value → 59
        Variable → 60
      51:
        OPENING_BRACE → 9
        SelectionSet → 47
        SelectionSetOpt → 72
      53:
        EQUALS → 74
        DefaultValueOpt → 73
      54:
        BANG → 75
      56:
        BANG → 76
      57:
        NAME → 55
        OPENING_BRACKET → 57
        ListType → 56
        NamedType → 54
        NonNullType → 58
        Type → 77
      69:
        BLOCK_STRING_VALUE → 65
        CLOSING_BRACKET → 78
        DOLLAR → 33
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 71
        OPENING_BRACKET → 69
        STRING_VALUE → 64
        ListValue → 68
        ListValueList → 79
        NamedValue → 66
        NumberValue → 61
        ObjectValue → 70
        StringValue → 63
        Value → 80
        Variable → 60
      71:
        CLOSING_BRACE → 81
        NAME → 84
        ObjectField → 83
        ObjectFieldList → 82
      74:
        BLOCK_STRING_VALUE → 65
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 92
        OPENING_BRACKET → 90
        STRING_VALUE → 64
        ListValueConst → 89
        NamedValue → 88
        NumberValue → 86
        ObjectValueConst → 91
        StringValue → 87
        ValueConst → 85
      77:
        CLOSING_BRACKET → 93
      79:
        BLOCK_STRING_VALUE → 65
        CLOSING_BRACKET → 94
        DOLLAR → 33
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 71
        OPENING_BRACKET → 69
        STRING_VALUE → 64
        ListValue → 68
        NamedValue → 66
        NumberValue → 61
        ObjectValue → 70
        StringValue → 63
        Value → 95
        Variable → 60
      82:
        CLOSING_BRACE → 96
        NAME → 84
        ObjectField → 97
      84:
        COLON → 98
      90:
        BLOCK_STRING_VALUE → 65
        CLOSING_BRACKET → 99
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 92
        OPENING_BRACKET → 90
        STRING_VALUE → 64
        ListValueConst → 89
        ListValueConstList → 100
        NamedValue → 88
        NumberValue → 86
        ObjectValueConst → 91
        StringValue → 87
        ValueConst → 101
      92:
        CLOSING_BRACE → 102
        NAME → 105
        ObjectFieldConst → 104
        ObjectFieldConstList → 103
      98:
        BLOCK_STRING_VALUE → 65
        DOLLAR → 33
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 71
        OPENING_BRACKET → 69
        STRING_VALUE → 64
        ListValue → 68
        NamedValue → 66
        NumberValue → 61
        ObjectValue → 70
        StringValue → 63
        Value → 106
        Variable → 60
      100:
        BLOCK_STRING_VALUE → 65
        CLOSING_BRACKET → 107
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 92
        OPENING_BRACKET → 90
        STRING_VALUE → 64
        ListValueConst → 89
        NamedValue → 88
        NumberValue → 86
        ObjectValueConst → 91
        StringValue → 87
        ValueConst → 108
      103:
        CLOSING_BRACE → 109
        NAME → 105
        ObjectFieldConst → 110
      105:
        COLON → 111
      111:
        BLOCK_STRING_VALUE → 65
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 92
        OPENING_BRACKET → 90
        STRING_VALUE → 64
        ListValueConst → 89
        NamedValue → 88
        NumberValue → 86
        ObjectValueConst → 91
        StringValue → 87
        ValueConst → 112"
    `);
  });
});
