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
        STRING_VALUE → 64
        NamedValue → 66
        NumberValue → 61
        StringValue → 63
        Value → 59
        Variable → 60
      51:
        OPENING_BRACE → 9
        SelectionSet → 47
        SelectionSetOpt → 68
      53:
        EQUALS → 70
        DefaultValueOpt → 69
      54:
        BANG → 71
      56:
        BANG → 72
      57:
        NAME → 55
        OPENING_BRACKET → 57
        ListType → 56
        NamedType → 54
        NonNullType → 58
        Type → 73
      70:
        BLOCK_STRING_VALUE → 65
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 81
        OPENING_BRACKET → 79
        STRING_VALUE → 64
        ListValueConst → 78
        NamedValue → 77
        NumberValue → 75
        ObjectValueConst → 80
        StringValue → 76
        ValueConst → 74
      73:
        CLOSING_BRACKET → 82
      79:
        BLOCK_STRING_VALUE → 65
        CLOSING_BRACKET → 83
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 81
        OPENING_BRACKET → 79
        STRING_VALUE → 64
        ListValueConst → 78
        ListValueConstList → 84
        NamedValue → 77
        NumberValue → 75
        ObjectValueConst → 80
        StringValue → 76
        ValueConst → 85
      81:
        CLOSING_BRACE → 86
        NAME → 89
        ObjectFieldConst → 88
        ObjectFieldConstList → 87
      84:
        BLOCK_STRING_VALUE → 65
        CLOSING_BRACKET → 90
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 81
        OPENING_BRACKET → 79
        STRING_VALUE → 64
        ListValueConst → 78
        NamedValue → 77
        NumberValue → 75
        ObjectValueConst → 80
        StringValue → 76
        ValueConst → 91
      87:
        CLOSING_BRACE → 92
        NAME → 89
        ObjectFieldConst → 93
      89:
        COLON → 94
      94:
        BLOCK_STRING_VALUE → 65
        NAME → 67
        NUMBER → 62
        OPENING_BRACE → 81
        OPENING_BRACKET → 79
        STRING_VALUE → 64
        ListValueConst → 78
        NamedValue → 77
        NumberValue → 75
        ObjectValueConst → 80
        StringValue → 76
        ValueConst → 95"
    `);
  });
});
