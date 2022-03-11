import {grammar} from '..';
import extendedGrammarForItemSets from '../extendedGrammarForItemSets';
import getItemSets from '../getItemSets';
import stringifyGrammar from '../stringifyGrammar';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

describe('extendedGrammarForItemSets()', () => {
  it('returns an extended grammar for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, toyGrammar);
    expect(extendedGrammar).toEqual({
      tokens: new Set([
        '3/eq/7',
        '0/x/4',
        '0/star/5',
        '5/x/4',
        '5/star/5',
        '7/x/4',
        '7/star/5',
      ]),
      rules: [
        {lhs: "0/S'/$", rhs: ['0/S/1']},
        {lhs: '0/S/1', rhs: ['0/N/2']},
        {lhs: '0/N/2', rhs: ['0/V/3', '3/eq/7', '7/E/10']},
        {lhs: '0/V/3', rhs: ['0/x/4']},
        {lhs: '0/V/3', rhs: ['0/star/5', '5/E/8']},
        {lhs: '0/N/2', rhs: ['0/E/6']},
        {lhs: '0/E/6', rhs: ['0/V/3']},
        {lhs: '5/E/8', rhs: ['5/V/9']},
        {lhs: '5/V/9', rhs: ['5/x/4']},
        {lhs: '5/V/9', rhs: ['5/star/5', '5/E/8']},
        {lhs: '7/E/10', rhs: ['7/V/9']},
        {lhs: '7/V/9', rhs: ['7/x/4']},
        {lhs: '7/V/9', rhs: ['7/star/5', '5/E/8']},
      ],
    });
  });

  it('returns an extended grammar for the subset grammar', () => {
    const itemSets = getItemSets(subsetGrammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, subsetGrammar);
    expect(extendedGrammar).toEqual({
      tokens: new Set([
        '0/OPENING_BRACE/7',
        '9/CLOSING_BRACE/13',
        '2/OPENING_BRACE/7',
        '7/NAME/12',
        '9/NAME/12',
      ]),
      rules: [
        {lhs: "0/Document'/$", rhs: ['0/Document/1']},
        {lhs: '0/Document/1', rhs: ['0/DefinitionList/2']},
        {lhs: '0/DefinitionList/2', rhs: ['0/Definition/3']},
        {lhs: '0/Definition/3', rhs: ['0/ExecutableDefinition/4']},
        {
          lhs: '0/ExecutableDefinition/4',
          rhs: ['0/OperationDefinition/5'],
        },
        {lhs: '0/OperationDefinition/5', rhs: ['0/SelectionSet/6']},
        {
          lhs: '0/SelectionSet/6',
          rhs: ['0/OPENING_BRACE/7', '7/SelectionList/9', '9/CLOSING_BRACE/13'],
        },
        {
          lhs: '0/DefinitionList/2',
          rhs: ['0/DefinitionList/2', '2/Definition/8'],
        },
        {lhs: '2/Definition/8', rhs: ['2/ExecutableDefinition/4']},
        {
          lhs: '2/ExecutableDefinition/4',
          rhs: ['2/OperationDefinition/5'],
        },
        {lhs: '2/OperationDefinition/5', rhs: ['2/SelectionSet/6']},
        {
          lhs: '2/SelectionSet/6',
          rhs: ['2/OPENING_BRACE/7', '7/SelectionList/9', '9/CLOSING_BRACE/13'],
        },
        {lhs: '7/SelectionList/9', rhs: ['7/Selection/10']},
        {lhs: '7/Selection/10', rhs: ['7/Field/11']},
        {lhs: '7/Field/11', rhs: ['7/NAME/12']},
        {
          lhs: '7/SelectionList/9',
          rhs: ['7/SelectionList/9', '9/Selection/14'],
        },
        {lhs: '9/Selection/14', rhs: ['9/Field/11']},
        {lhs: '9/Field/11', rhs: ['9/NAME/12']},
      ],
    });
  });

  it('returns an extended grammar with epsilon productions', () => {
    const itemSets = getItemSets(epsilonGrammar);
    const extendedGrammar = extendedGrammarForItemSets(
      itemSets,
      epsilonGrammar,
    );
    expect(extendedGrammar).toEqual({
      tokens: new Set([
        '3/OPEN_BRACKET/5',
        '6/CLOSE_BRACKET/8',
        '0/BAR/4',
        '6/FOO/9',
        '5/FOO/7',
      ]),
      rules: [
        {lhs: "0/S'/$", rhs: ['0/S/1']},
        {lhs: '0/S/1', rhs: ['0/Program/2']},
        {
          lhs: '0/Program/2',
          rhs: [
            '0/BarOpt/3',
            '3/OPEN_BRACKET/5',
            '5/FooList/6',
            '6/CLOSE_BRACKET/8',
          ],
        },
        {lhs: '0/BarOpt/3', rhs: ['0/BAR/4']},
        {lhs: '0/BarOpt/3', rhs: []},
        {lhs: '5/FooList/6', rhs: ['5/FooList/6', '6/FOO/9']},
        {lhs: '5/FooList/6', rhs: ['5/FOO/7']},
      ],
    });
  });

  it('returns an extended grammar for the GraphQL grammar', () => {
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect('\n' + stringifyGrammar(extendedGrammar)).toMatchInlineSnapshot(`
      "
      %token 0/NAME/7
      %token 0/OPENING_BRACE/9
      %token 2/NAME/7
      %token 2/OPENING_BRACE/9
      %token 6/NAME/12
      %token 9/ELLIPSIS/19
      %token 9/NAME/16
      %token 11/OPENING_PAREN/21
      %token 13/CLOSING_BRACE/22
      %token 13/ELLIPSIS/19
      %token 13/NAME/16
      %token 16/COLON/25
      %token 16/OPENING_PAREN/26
      %token 17/NAME/27
      %token 19/NAME/28
      %token 20/AT/32
      %token 21/DOLLAR/36
      %token 24/AT/32
      %token 26/NAME/40
      %token 27/OPENING_PAREN/26
      %token 28/AT/32
      %token 29/OPENING_BRACE/9
      %token 30/AT/32
      %token 32/NAME/45
      %token 33/CLOSING_PAREN/46
      %token 33/DOLLAR/36
      %token 35/COLON/48
      %token 36/NAME/49
      %token 37/OPENING_BRACE/9
      %token 38/CLOSING_PAREN/52
      %token 38/NAME/40
      %token 40/COLON/54
      %token 41/AT/32
      %token 45/OPENING_PAREN/26
      %token 48/NAME/59
      %token 48/OPENING_BRACKET/61
      %token 54/BLOCK_STRING_VALUE/69
      %token 54/DOLLAR/36
      %token 54/NAME/71
      %token 54/NUMBER/66
      %token 54/OPENING_BRACE/75
      %token 54/OPENING_BRACKET/73
      %token 54/STRING_VALUE/68
      %token 55/OPENING_BRACE/9
      %token 57/EQUALS/78
      %token 58/BANG/79
      %token 60/BANG/80
      %token 61/NAME/59
      %token 61/OPENING_BRACKET/61
      %token 73/BLOCK_STRING_VALUE/69
      %token 73/CLOSING_BRACKET/82
      %token 73/DOLLAR/36
      %token 73/NAME/71
      %token 73/NUMBER/66
      %token 73/OPENING_BRACE/75
      %token 73/OPENING_BRACKET/73
      %token 73/STRING_VALUE/68
      %token 75/CLOSING_BRACE/85
      %token 75/NAME/88
      %token 77/AT/92
      %token 78/BLOCK_STRING_VALUE/69
      %token 78/NAME/71
      %token 78/NUMBER/66
      %token 78/OPENING_BRACE/100
      %token 78/OPENING_BRACKET/98
      %token 78/STRING_VALUE/68
      %token 81/CLOSING_BRACKET/101
      %token 83/BLOCK_STRING_VALUE/69
      %token 83/CLOSING_BRACKET/102
      %token 83/DOLLAR/36
      %token 83/NAME/71
      %token 83/NUMBER/66
      %token 83/OPENING_BRACE/75
      %token 83/OPENING_BRACKET/73
      %token 83/STRING_VALUE/68
      %token 86/CLOSING_BRACE/104
      %token 86/NAME/88
      %token 88/COLON/106
      %token 90/AT/92
      %token 92/NAME/108
      %token 98/BLOCK_STRING_VALUE/69
      %token 98/CLOSING_BRACKET/109
      %token 98/NAME/71
      %token 98/NUMBER/66
      %token 98/OPENING_BRACE/100
      %token 98/OPENING_BRACKET/98
      %token 98/STRING_VALUE/68
      %token 100/CLOSING_BRACE/112
      %token 100/NAME/115
      %token 106/BLOCK_STRING_VALUE/69
      %token 106/DOLLAR/36
      %token 106/NAME/71
      %token 106/NUMBER/66
      %token 106/OPENING_BRACE/75
      %token 106/OPENING_BRACKET/73
      %token 106/STRING_VALUE/68
      %token 108/OPENING_PAREN/118
      %token 110/BLOCK_STRING_VALUE/69
      %token 110/CLOSING_BRACKET/119
      %token 110/NAME/71
      %token 110/NUMBER/66
      %token 110/OPENING_BRACE/100
      %token 110/OPENING_BRACKET/98
      %token 110/STRING_VALUE/68
      %token 113/CLOSING_BRACE/121
      %token 113/NAME/115
      %token 115/COLON/123
      %token 118/NAME/126
      %token 123/BLOCK_STRING_VALUE/69
      %token 123/NAME/71
      %token 123/NUMBER/66
      %token 123/OPENING_BRACE/100
      %token 123/OPENING_BRACKET/98
      %token 123/STRING_VALUE/68
      %token 124/CLOSING_PAREN/128
      %token 124/NAME/126
      %token 126/COLON/130
      %token 130/BLOCK_STRING_VALUE/69
      %token 130/NAME/71
      %token 130/NUMBER/66
      %token 130/OPENING_BRACE/100
      %token 130/OPENING_BRACKET/98
      %token 130/STRING_VALUE/68

      r0: 0/Document'/$ → 0/Document/1
      r1: 0/Document/1 → 0/DefinitionList/2
      r2: 0/DefinitionList/2 → 0/Definition/3
      r3: 0/Definition/3 → 0/ExecutableDefinition/4
      r4: 0/ExecutableDefinition/4 → 0/OperationDefinition/5
      r5: 0/OperationDefinition/5 → 0/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/20 20/DirectivesOpt/29 29/SelectionSet/43
      r6: 0/OperationType/6 → 0/NAME/7
      r7: 0/OperationDefinition/5 → 0/SelectionSet/8
      r8: 0/SelectionSet/8 → 0/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/22
      r9: 0/DefinitionList/2 → 0/DefinitionList/2 2/Definition/10
      r10: 2/Definition/10 → 2/ExecutableDefinition/4
      r11: 2/ExecutableDefinition/4 → 2/OperationDefinition/5
      r12: 2/OperationDefinition/5 → 2/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/20 20/DirectivesOpt/29 29/SelectionSet/43
      r13: 2/OperationType/6 → 2/NAME/7
      r14: 2/OperationDefinition/5 → 2/SelectionSet/8
      r15: 2/SelectionSet/8 → 2/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/22
      r16: 6/OperationNameOpt/11 → 6/NAME/12
      r17: 6/OperationNameOpt/11 → ε
      r18: 9/SelectionList/13 → 9/Selection/14
      r19: 9/Selection/14 → 9/Field/15
      r20: 9/Field/15 → 9/NAME/16 16/ArgumentsOpt/24 24/DirectivesOpt/37 37/SelectionSetOpt/50
      r21: 9/Field/15 → 9/Alias/17 17/NAME/27 27/ArgumentsOpt/41 41/DirectivesOpt/55 55/SelectionSetOpt/76
      r22: 9/Alias/17 → 9/NAME/16 16/COLON/25
      r23: 9/Selection/14 → 9/FragmentSpread/18
      r24: 9/FragmentSpread/18 → 9/ELLIPSIS/19 19/NAME/28 28/DirectivesOpt/42
      r25: 9/SelectionList/13 → 9/SelectionList/13 13/Selection/23
      r26: 11/VariableDefinitionsOpt/20 → 11/OPENING_PAREN/21 21/VariableDefinitionList/33 33/CLOSING_PAREN/46
      r27: 11/VariableDefinitionsOpt/20 → ε
      r28: 13/Selection/23 → 13/Field/15
      r29: 13/Field/15 → 13/NAME/16 16/ArgumentsOpt/24 24/DirectivesOpt/37 37/SelectionSetOpt/50
      r30: 13/Field/15 → 13/Alias/17 17/NAME/27 27/ArgumentsOpt/41 41/DirectivesOpt/55 55/SelectionSetOpt/76
      r31: 13/Alias/17 → 13/NAME/16 16/COLON/25
      r32: 13/Selection/23 → 13/FragmentSpread/18
      r33: 13/FragmentSpread/18 → 13/ELLIPSIS/19 19/NAME/28 28/DirectivesOpt/42
      r34: 16/ArgumentsOpt/24 → 16/OPENING_PAREN/26 26/ArgumentList/38 38/CLOSING_PAREN/52
      r35: 16/ArgumentsOpt/24 → ε
      r36: 20/DirectivesOpt/29 → 20/DirectiveList/30
      r37: 20/DirectiveList/30 → 20/Directive/31
      r38: 20/Directive/31 → 20/AT/32 32/NAME/45 45/ArgumentsOpt/56
      r39: 20/DirectiveList/30 → 20/DirectiveList/30 30/Directive/44
      r40: 20/DirectivesOpt/29 → ε
      r41: 21/VariableDefinitionList/33 → 21/VariableDefinition/34
      r42: 21/VariableDefinition/34 → 21/Variable/35 35/COLON/48 48/Type/57 57/DefaultValueOpt/77 77/DirectivesConstOpt/89
      r43: 21/Variable/35 → 21/DOLLAR/36 36/NAME/49
      r44: 21/VariableDefinitionList/33 → 21/VariableDefinitionList/33 33/VariableDefinition/47
      r45: 24/DirectivesOpt/37 → 24/DirectiveList/30
      r46: 24/DirectiveList/30 → 24/Directive/31
      r47: 24/Directive/31 → 24/AT/32 32/NAME/45 45/ArgumentsOpt/56
      r48: 24/DirectiveList/30 → 24/DirectiveList/30 30/Directive/44
      r49: 24/DirectivesOpt/37 → ε
      r50: 26/ArgumentList/38 → 26/Argument/39
      r51: 26/Argument/39 → 26/NAME/40 40/COLON/54 54/Value/63
      r52: 26/ArgumentList/38 → 26/ArgumentList/38 38/Argument/53
      r53: 27/ArgumentsOpt/41 → 27/OPENING_PAREN/26 26/ArgumentList/38 38/CLOSING_PAREN/52
      r54: 27/ArgumentsOpt/41 → ε
      r55: 28/DirectivesOpt/42 → 28/DirectiveList/30
      r56: 28/DirectiveList/30 → 28/Directive/31
      r57: 28/Directive/31 → 28/AT/32 32/NAME/45 45/ArgumentsOpt/56
      r58: 28/DirectiveList/30 → 28/DirectiveList/30 30/Directive/44
      r59: 28/DirectivesOpt/42 → ε
      r60: 29/SelectionSet/43 → 29/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/22
      r61: 30/Directive/44 → 30/AT/32 32/NAME/45 45/ArgumentsOpt/56
      r62: 33/VariableDefinition/47 → 33/Variable/35 35/COLON/48 48/Type/57 57/DefaultValueOpt/77 77/DirectivesConstOpt/89
      r63: 33/Variable/35 → 33/DOLLAR/36 36/NAME/49
      r64: 37/SelectionSetOpt/50 → 37/SelectionSet/51
      r65: 37/SelectionSet/51 → 37/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/22
      r66: 37/SelectionSetOpt/50 → ε
      r67: 38/Argument/53 → 38/NAME/40 40/COLON/54 54/Value/63
      r68: 41/DirectivesOpt/55 → 41/DirectiveList/30
      r69: 41/DirectiveList/30 → 41/Directive/31
      r70: 41/Directive/31 → 41/AT/32 32/NAME/45 45/ArgumentsOpt/56
      r71: 41/DirectiveList/30 → 41/DirectiveList/30 30/Directive/44
      r72: 41/DirectivesOpt/55 → ε
      r73: 45/ArgumentsOpt/56 → 45/OPENING_PAREN/26 26/ArgumentList/38 38/CLOSING_PAREN/52
      r74: 45/ArgumentsOpt/56 → ε
      r75: 48/Type/57 → 48/NamedType/58
      r76: 48/NamedType/58 → 48/NAME/59
      r77: 48/Type/57 → 48/ListType/60
      r78: 48/ListType/60 → 48/OPENING_BRACKET/61 61/Type/81 81/CLOSING_BRACKET/101
      r79: 48/Type/57 → 48/NonNullType/62
      r80: 48/NonNullType/62 → 48/ListType/60 60/BANG/80
      r81: 48/NonNullType/62 → 48/NamedType/58 58/BANG/79
      r82: 54/Value/63 → 54/Variable/64
      r83: 54/Variable/64 → 54/DOLLAR/36 36/NAME/49
      r84: 54/Value/63 → 54/NumberValue/65
      r85: 54/NumberValue/65 → 54/NUMBER/66
      r86: 54/Value/63 → 54/StringValue/67
      r87: 54/StringValue/67 → 54/STRING_VALUE/68
      r88: 54/StringValue/67 → 54/BLOCK_STRING_VALUE/69
      r89: 54/Value/63 → 54/NamedValue/70
      r90: 54/NamedValue/70 → 54/NAME/71
      r91: 54/Value/63 → 54/ListValue/72
      r92: 54/ListValue/72 → 54/OPENING_BRACKET/73 73/CLOSING_BRACKET/82
      r93: 54/ListValue/72 → 54/OPENING_BRACKET/73 73/ListValueList/83 83/CLOSING_BRACKET/102
      r94: 54/Value/63 → 54/ObjectValue/74
      r95: 54/ObjectValue/74 → 54/OPENING_BRACE/75 75/CLOSING_BRACE/85
      r96: 54/ObjectValue/74 → 54/OPENING_BRACE/75 75/ObjectFieldList/86 86/CLOSING_BRACE/104
      r97: 55/SelectionSetOpt/76 → 55/SelectionSet/51
      r98: 55/SelectionSet/51 → 55/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/22
      r99: 55/SelectionSetOpt/76 → ε
      r100: 57/DefaultValueOpt/77 → 57/EQUALS/78 78/ValueConst/93
      r101: 57/DefaultValueOpt/77 → ε
      r102: 61/Type/81 → 61/NamedType/58
      r103: 61/NamedType/58 → 61/NAME/59
      r104: 61/Type/81 → 61/ListType/60
      r105: 61/ListType/60 → 61/OPENING_BRACKET/61 61/Type/81 81/CLOSING_BRACKET/101
      r106: 61/Type/81 → 61/NonNullType/62
      r107: 61/NonNullType/62 → 61/ListType/60 60/BANG/80
      r108: 61/NonNullType/62 → 61/NamedType/58 58/BANG/79
      r109: 73/ListValueList/83 → 73/Value/84
      r110: 73/Value/84 → 73/Variable/64
      r111: 73/Variable/64 → 73/DOLLAR/36 36/NAME/49
      r112: 73/Value/84 → 73/NumberValue/65
      r113: 73/NumberValue/65 → 73/NUMBER/66
      r114: 73/Value/84 → 73/StringValue/67
      r115: 73/StringValue/67 → 73/STRING_VALUE/68
      r116: 73/StringValue/67 → 73/BLOCK_STRING_VALUE/69
      r117: 73/Value/84 → 73/NamedValue/70
      r118: 73/NamedValue/70 → 73/NAME/71
      r119: 73/Value/84 → 73/ListValue/72
      r120: 73/ListValue/72 → 73/OPENING_BRACKET/73 73/CLOSING_BRACKET/82
      r121: 73/ListValue/72 → 73/OPENING_BRACKET/73 73/ListValueList/83 83/CLOSING_BRACKET/102
      r122: 73/Value/84 → 73/ObjectValue/74
      r123: 73/ObjectValue/74 → 73/OPENING_BRACE/75 75/CLOSING_BRACE/85
      r124: 73/ObjectValue/74 → 73/OPENING_BRACE/75 75/ObjectFieldList/86 86/CLOSING_BRACE/104
      r125: 73/ListValueList/83 → 73/ListValueList/83 83/Value/103
      r126: 75/ObjectFieldList/86 → 75/ObjectField/87
      r127: 75/ObjectField/87 → 75/NAME/88 88/COLON/106 106/Value/116
      r128: 75/ObjectFieldList/86 → 75/ObjectFieldList/86 86/ObjectField/105
      r129: 77/DirectivesConstOpt/89 → 77/DirectiveConstList/90
      r130: 77/DirectiveConstList/90 → 77/DirectiveConst/91
      r131: 77/DirectiveConst/91 → 77/AT/92 92/NAME/108 108/ArgumentsConstOpt/117
      r132: 77/DirectiveConstList/90 → 77/DirectiveConstList/90 90/DirectiveConst/107
      r133: 77/DirectivesConstOpt/89 → ε
      r134: 78/ValueConst/93 → 78/NumberValue/94
      r135: 78/NumberValue/94 → 78/NUMBER/66
      r136: 78/ValueConst/93 → 78/StringValue/95
      r137: 78/StringValue/95 → 78/STRING_VALUE/68
      r138: 78/StringValue/95 → 78/BLOCK_STRING_VALUE/69
      r139: 78/ValueConst/93 → 78/NamedValue/96
      r140: 78/NamedValue/96 → 78/NAME/71
      r141: 78/ValueConst/93 → 78/ListValueConst/97
      r142: 78/ListValueConst/97 → 78/OPENING_BRACKET/98 98/CLOSING_BRACKET/109
      r143: 78/ListValueConst/97 → 78/OPENING_BRACKET/98 98/ListValueConstList/110 110/CLOSING_BRACKET/119
      r144: 78/ValueConst/93 → 78/ObjectValueConst/99
      r145: 78/ObjectValueConst/99 → 78/OPENING_BRACE/100 100/CLOSING_BRACE/112
      r146: 78/ObjectValueConst/99 → 78/OPENING_BRACE/100 100/ObjectFieldConstList/113 113/CLOSING_BRACE/121
      r147: 83/Value/103 → 83/Variable/64
      r148: 83/Variable/64 → 83/DOLLAR/36 36/NAME/49
      r149: 83/Value/103 → 83/NumberValue/65
      r150: 83/NumberValue/65 → 83/NUMBER/66
      r151: 83/Value/103 → 83/StringValue/67
      r152: 83/StringValue/67 → 83/STRING_VALUE/68
      r153: 83/StringValue/67 → 83/BLOCK_STRING_VALUE/69
      r154: 83/Value/103 → 83/NamedValue/70
      r155: 83/NamedValue/70 → 83/NAME/71
      r156: 83/Value/103 → 83/ListValue/72
      r157: 83/ListValue/72 → 83/OPENING_BRACKET/73 73/CLOSING_BRACKET/82
      r158: 83/ListValue/72 → 83/OPENING_BRACKET/73 73/ListValueList/83 83/CLOSING_BRACKET/102
      r159: 83/Value/103 → 83/ObjectValue/74
      r160: 83/ObjectValue/74 → 83/OPENING_BRACE/75 75/CLOSING_BRACE/85
      r161: 83/ObjectValue/74 → 83/OPENING_BRACE/75 75/ObjectFieldList/86 86/CLOSING_BRACE/104
      r162: 86/ObjectField/105 → 86/NAME/88 88/COLON/106 106/Value/116
      r163: 90/DirectiveConst/107 → 90/AT/92 92/NAME/108 108/ArgumentsConstOpt/117
      r164: 98/ListValueConstList/110 → 98/ValueConst/111
      r165: 98/ValueConst/111 → 98/NumberValue/94
      r166: 98/NumberValue/94 → 98/NUMBER/66
      r167: 98/ValueConst/111 → 98/StringValue/95
      r168: 98/StringValue/95 → 98/STRING_VALUE/68
      r169: 98/StringValue/95 → 98/BLOCK_STRING_VALUE/69
      r170: 98/ValueConst/111 → 98/NamedValue/96
      r171: 98/NamedValue/96 → 98/NAME/71
      r172: 98/ValueConst/111 → 98/ListValueConst/97
      r173: 98/ListValueConst/97 → 98/OPENING_BRACKET/98 98/CLOSING_BRACKET/109
      r174: 98/ListValueConst/97 → 98/OPENING_BRACKET/98 98/ListValueConstList/110 110/CLOSING_BRACKET/119
      r175: 98/ValueConst/111 → 98/ObjectValueConst/99
      r176: 98/ObjectValueConst/99 → 98/OPENING_BRACE/100 100/CLOSING_BRACE/112
      r177: 98/ObjectValueConst/99 → 98/OPENING_BRACE/100 100/ObjectFieldConstList/113 113/CLOSING_BRACE/121
      r178: 98/ListValueConstList/110 → 98/ListValueConstList/110 110/ValueConst/120
      r179: 100/ObjectFieldConstList/113 → 100/ObjectFieldConst/114
      r180: 100/ObjectFieldConst/114 → 100/NAME/115 115/COLON/123 123/ValueConst/127
      r181: 100/ObjectFieldConstList/113 → 100/ObjectFieldConstList/113 113/ObjectFieldConst/122
      r182: 106/Value/116 → 106/Variable/64
      r183: 106/Variable/64 → 106/DOLLAR/36 36/NAME/49
      r184: 106/Value/116 → 106/NumberValue/65
      r185: 106/NumberValue/65 → 106/NUMBER/66
      r186: 106/Value/116 → 106/StringValue/67
      r187: 106/StringValue/67 → 106/STRING_VALUE/68
      r188: 106/StringValue/67 → 106/BLOCK_STRING_VALUE/69
      r189: 106/Value/116 → 106/NamedValue/70
      r190: 106/NamedValue/70 → 106/NAME/71
      r191: 106/Value/116 → 106/ListValue/72
      r192: 106/ListValue/72 → 106/OPENING_BRACKET/73 73/CLOSING_BRACKET/82
      r193: 106/ListValue/72 → 106/OPENING_BRACKET/73 73/ListValueList/83 83/CLOSING_BRACKET/102
      r194: 106/Value/116 → 106/ObjectValue/74
      r195: 106/ObjectValue/74 → 106/OPENING_BRACE/75 75/CLOSING_BRACE/85
      r196: 106/ObjectValue/74 → 106/OPENING_BRACE/75 75/ObjectFieldList/86 86/CLOSING_BRACE/104
      r197: 108/ArgumentsConstOpt/117 → 108/OPENING_PAREN/118 118/ArgumentConstList/124 124/CLOSING_PAREN/128
      r198: 108/ArgumentsConstOpt/117 → ε
      r199: 110/ValueConst/120 → 110/NumberValue/94
      r200: 110/NumberValue/94 → 110/NUMBER/66
      r201: 110/ValueConst/120 → 110/StringValue/95
      r202: 110/StringValue/95 → 110/STRING_VALUE/68
      r203: 110/StringValue/95 → 110/BLOCK_STRING_VALUE/69
      r204: 110/ValueConst/120 → 110/NamedValue/96
      r205: 110/NamedValue/96 → 110/NAME/71
      r206: 110/ValueConst/120 → 110/ListValueConst/97
      r207: 110/ListValueConst/97 → 110/OPENING_BRACKET/98 98/CLOSING_BRACKET/109
      r208: 110/ListValueConst/97 → 110/OPENING_BRACKET/98 98/ListValueConstList/110 110/CLOSING_BRACKET/119
      r209: 110/ValueConst/120 → 110/ObjectValueConst/99
      r210: 110/ObjectValueConst/99 → 110/OPENING_BRACE/100 100/CLOSING_BRACE/112
      r211: 110/ObjectValueConst/99 → 110/OPENING_BRACE/100 100/ObjectFieldConstList/113 113/CLOSING_BRACE/121
      r212: 113/ObjectFieldConst/122 → 113/NAME/115 115/COLON/123 123/ValueConst/127
      r213: 118/ArgumentConstList/124 → 118/ArgumentConst/125
      r214: 118/ArgumentConst/125 → 118/NAME/126 126/COLON/130 130/ValueConst/131
      r215: 118/ArgumentConstList/124 → 118/ArgumentConstList/124 124/ArgumentConst/129
      r216: 123/ValueConst/127 → 123/NumberValue/94
      r217: 123/NumberValue/94 → 123/NUMBER/66
      r218: 123/ValueConst/127 → 123/StringValue/95
      r219: 123/StringValue/95 → 123/STRING_VALUE/68
      r220: 123/StringValue/95 → 123/BLOCK_STRING_VALUE/69
      r221: 123/ValueConst/127 → 123/NamedValue/96
      r222: 123/NamedValue/96 → 123/NAME/71
      r223: 123/ValueConst/127 → 123/ListValueConst/97
      r224: 123/ListValueConst/97 → 123/OPENING_BRACKET/98 98/CLOSING_BRACKET/109
      r225: 123/ListValueConst/97 → 123/OPENING_BRACKET/98 98/ListValueConstList/110 110/CLOSING_BRACKET/119
      r226: 123/ValueConst/127 → 123/ObjectValueConst/99
      r227: 123/ObjectValueConst/99 → 123/OPENING_BRACE/100 100/CLOSING_BRACE/112
      r228: 123/ObjectValueConst/99 → 123/OPENING_BRACE/100 100/ObjectFieldConstList/113 113/CLOSING_BRACE/121
      r229: 124/ArgumentConst/129 → 124/NAME/126 126/COLON/130 130/ValueConst/131
      r230: 130/ValueConst/131 → 130/NumberValue/94
      r231: 130/NumberValue/94 → 130/NUMBER/66
      r232: 130/ValueConst/131 → 130/StringValue/95
      r233: 130/StringValue/95 → 130/STRING_VALUE/68
      r234: 130/StringValue/95 → 130/BLOCK_STRING_VALUE/69
      r235: 130/ValueConst/131 → 130/NamedValue/96
      r236: 130/NamedValue/96 → 130/NAME/71
      r237: 130/ValueConst/131 → 130/ListValueConst/97
      r238: 130/ListValueConst/97 → 130/OPENING_BRACKET/98 98/CLOSING_BRACKET/109
      r239: 130/ListValueConst/97 → 130/OPENING_BRACKET/98 98/ListValueConstList/110 110/CLOSING_BRACKET/119
      r240: 130/ValueConst/131 → 130/ObjectValueConst/99
      r241: 130/ObjectValueConst/99 → 130/OPENING_BRACE/100 100/CLOSING_BRACE/112
      r242: 130/ObjectValueConst/99 → 130/OPENING_BRACE/100 100/ObjectFieldConstList/113 113/CLOSING_BRACE/121
      "
    `);
  });
});
