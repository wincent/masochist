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
      %token 9/NAME/16
      %token 11/OPENING_PAREN/19
      %token 13/CLOSING_BRACE/20
      %token 13/NAME/16
      %token 16/COLON/23
      %token 16/OPENING_PAREN/24
      %token 17/NAME/25
      %token 18/AT/29
      %token 19/DOLLAR/33
      %token 22/AT/29
      %token 24/NAME/37
      %token 25/OPENING_PAREN/24
      %token 26/OPENING_BRACE/9
      %token 27/AT/29
      %token 29/NAME/41
      %token 30/CLOSING_PAREN/42
      %token 30/DOLLAR/33
      %token 32/COLON/44
      %token 33/NAME/45
      %token 34/OPENING_BRACE/9
      %token 35/CLOSING_PAREN/48
      %token 35/NAME/37
      %token 37/COLON/50
      %token 38/AT/29
      %token 41/OPENING_PAREN/24
      %token 44/NAME/55
      %token 44/OPENING_BRACKET/57
      %token 50/BLOCK_STRING_VALUE/65
      %token 50/DOLLAR/33
      %token 50/NAME/67
      %token 50/NUMBER/62
      %token 50/OPENING_BRACE/71
      %token 50/OPENING_BRACKET/69
      %token 50/STRING_VALUE/64
      %token 51/OPENING_BRACE/9
      %token 53/EQUALS/74
      %token 54/BANG/75
      %token 56/BANG/76
      %token 57/NAME/55
      %token 57/OPENING_BRACKET/57
      %token 69/BLOCK_STRING_VALUE/65
      %token 69/CLOSING_BRACKET/78
      %token 69/DOLLAR/33
      %token 69/NAME/67
      %token 69/NUMBER/62
      %token 69/OPENING_BRACE/71
      %token 69/OPENING_BRACKET/69
      %token 69/STRING_VALUE/64
      %token 71/CLOSING_BRACE/81
      %token 71/NAME/84
      %token 73/AT/88
      %token 74/BLOCK_STRING_VALUE/65
      %token 74/NAME/67
      %token 74/NUMBER/62
      %token 74/OPENING_BRACE/96
      %token 74/OPENING_BRACKET/94
      %token 74/STRING_VALUE/64
      %token 77/CLOSING_BRACKET/97
      %token 79/BLOCK_STRING_VALUE/65
      %token 79/CLOSING_BRACKET/98
      %token 79/DOLLAR/33
      %token 79/NAME/67
      %token 79/NUMBER/62
      %token 79/OPENING_BRACE/71
      %token 79/OPENING_BRACKET/69
      %token 79/STRING_VALUE/64
      %token 82/CLOSING_BRACE/100
      %token 82/NAME/84
      %token 84/COLON/102
      %token 86/AT/88
      %token 88/NAME/104
      %token 94/BLOCK_STRING_VALUE/65
      %token 94/CLOSING_BRACKET/105
      %token 94/NAME/67
      %token 94/NUMBER/62
      %token 94/OPENING_BRACE/96
      %token 94/OPENING_BRACKET/94
      %token 94/STRING_VALUE/64
      %token 96/CLOSING_BRACE/108
      %token 96/NAME/111
      %token 102/BLOCK_STRING_VALUE/65
      %token 102/DOLLAR/33
      %token 102/NAME/67
      %token 102/NUMBER/62
      %token 102/OPENING_BRACE/71
      %token 102/OPENING_BRACKET/69
      %token 102/STRING_VALUE/64
      %token 104/OPENING_PAREN/114
      %token 106/BLOCK_STRING_VALUE/65
      %token 106/CLOSING_BRACKET/115
      %token 106/NAME/67
      %token 106/NUMBER/62
      %token 106/OPENING_BRACE/96
      %token 106/OPENING_BRACKET/94
      %token 106/STRING_VALUE/64
      %token 109/CLOSING_BRACE/117
      %token 109/NAME/111
      %token 111/COLON/119
      %token 114/NAME/122
      %token 119/BLOCK_STRING_VALUE/65
      %token 119/NAME/67
      %token 119/NUMBER/62
      %token 119/OPENING_BRACE/96
      %token 119/OPENING_BRACKET/94
      %token 119/STRING_VALUE/64
      %token 120/CLOSING_PAREN/124
      %token 120/NAME/122
      %token 122/COLON/126
      %token 126/BLOCK_STRING_VALUE/65
      %token 126/NAME/67
      %token 126/NUMBER/62
      %token 126/OPENING_BRACE/96
      %token 126/OPENING_BRACKET/94
      %token 126/STRING_VALUE/64

      r0: 0/Document'/$ → 0/Document/1
      r1: 0/Document/1 → 0/DefinitionList/2
      r2: 0/DefinitionList/2 → 0/Definition/3
      r3: 0/Definition/3 → 0/ExecutableDefinition/4
      r4: 0/ExecutableDefinition/4 → 0/OperationDefinition/5
      r5: 0/OperationDefinition/5 → 0/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/18 18/DirectivesOpt/26 26/SelectionSet/39
      r6: 0/OperationType/6 → 0/NAME/7
      r7: 0/OperationDefinition/5 → 0/SelectionSet/8
      r8: 0/SelectionSet/8 → 0/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r9: 0/DefinitionList/2 → 0/DefinitionList/2 2/Definition/10
      r10: 2/Definition/10 → 2/ExecutableDefinition/4
      r11: 2/ExecutableDefinition/4 → 2/OperationDefinition/5
      r12: 2/OperationDefinition/5 → 2/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/18 18/DirectivesOpt/26 26/SelectionSet/39
      r13: 2/OperationType/6 → 2/NAME/7
      r14: 2/OperationDefinition/5 → 2/SelectionSet/8
      r15: 2/SelectionSet/8 → 2/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r16: 6/OperationNameOpt/11 → 6/NAME/12
      r17: 6/OperationNameOpt/11 → ε
      r18: 9/SelectionList/13 → 9/Selection/14
      r19: 9/Selection/14 → 9/Field/15
      r20: 9/Field/15 → 9/NAME/16 16/ArgumentsOpt/22 22/DirectivesOpt/34 34/SelectionSetOpt/46
      r21: 9/Field/15 → 9/Alias/17 17/NAME/25 25/ArgumentsOpt/38 38/DirectivesOpt/51 51/SelectionSetOpt/72
      r22: 9/Alias/17 → 9/NAME/16 16/COLON/23
      r23: 9/SelectionList/13 → 9/SelectionList/13 13/Selection/21
      r24: 11/VariableDefinitionsOpt/18 → 11/OPENING_PAREN/19 19/VariableDefinitionList/30 30/CLOSING_PAREN/42
      r25: 11/VariableDefinitionsOpt/18 → ε
      r26: 13/Selection/21 → 13/Field/15
      r27: 13/Field/15 → 13/NAME/16 16/ArgumentsOpt/22 22/DirectivesOpt/34 34/SelectionSetOpt/46
      r28: 13/Field/15 → 13/Alias/17 17/NAME/25 25/ArgumentsOpt/38 38/DirectivesOpt/51 51/SelectionSetOpt/72
      r29: 13/Alias/17 → 13/NAME/16 16/COLON/23
      r30: 16/ArgumentsOpt/22 → 16/OPENING_PAREN/24 24/ArgumentList/35 35/CLOSING_PAREN/48
      r31: 16/ArgumentsOpt/22 → ε
      r32: 18/DirectivesOpt/26 → 18/DirectiveList/27
      r33: 18/DirectiveList/27 → 18/Directive/28
      r34: 18/Directive/28 → 18/AT/29 29/NAME/41 41/ArgumentsOpt/52
      r35: 18/DirectiveList/27 → 18/DirectiveList/27 27/Directive/40
      r36: 18/DirectivesOpt/26 → ε
      r37: 19/VariableDefinitionList/30 → 19/VariableDefinition/31
      r38: 19/VariableDefinition/31 → 19/Variable/32 32/COLON/44 44/Type/53 53/DefaultValueOpt/73 73/DirectivesConstOpt/85
      r39: 19/Variable/32 → 19/DOLLAR/33 33/NAME/45
      r40: 19/VariableDefinitionList/30 → 19/VariableDefinitionList/30 30/VariableDefinition/43
      r41: 22/DirectivesOpt/34 → 22/DirectiveList/27
      r42: 22/DirectiveList/27 → 22/Directive/28
      r43: 22/Directive/28 → 22/AT/29 29/NAME/41 41/ArgumentsOpt/52
      r44: 22/DirectiveList/27 → 22/DirectiveList/27 27/Directive/40
      r45: 22/DirectivesOpt/34 → ε
      r46: 24/ArgumentList/35 → 24/Argument/36
      r47: 24/Argument/36 → 24/NAME/37 37/COLON/50 50/Value/59
      r48: 24/ArgumentList/35 → 24/ArgumentList/35 35/Argument/49
      r49: 25/ArgumentsOpt/38 → 25/OPENING_PAREN/24 24/ArgumentList/35 35/CLOSING_PAREN/48
      r50: 25/ArgumentsOpt/38 → ε
      r51: 26/SelectionSet/39 → 26/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r52: 27/Directive/40 → 27/AT/29 29/NAME/41 41/ArgumentsOpt/52
      r53: 30/VariableDefinition/43 → 30/Variable/32 32/COLON/44 44/Type/53 53/DefaultValueOpt/73 73/DirectivesConstOpt/85
      r54: 30/Variable/32 → 30/DOLLAR/33 33/NAME/45
      r55: 34/SelectionSetOpt/46 → 34/SelectionSet/47
      r56: 34/SelectionSet/47 → 34/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r57: 34/SelectionSetOpt/46 → ε
      r58: 35/Argument/49 → 35/NAME/37 37/COLON/50 50/Value/59
      r59: 38/DirectivesOpt/51 → 38/DirectiveList/27
      r60: 38/DirectiveList/27 → 38/Directive/28
      r61: 38/Directive/28 → 38/AT/29 29/NAME/41 41/ArgumentsOpt/52
      r62: 38/DirectiveList/27 → 38/DirectiveList/27 27/Directive/40
      r63: 38/DirectivesOpt/51 → ε
      r64: 41/ArgumentsOpt/52 → 41/OPENING_PAREN/24 24/ArgumentList/35 35/CLOSING_PAREN/48
      r65: 41/ArgumentsOpt/52 → ε
      r66: 44/Type/53 → 44/NamedType/54
      r67: 44/NamedType/54 → 44/NAME/55
      r68: 44/Type/53 → 44/ListType/56
      r69: 44/ListType/56 → 44/OPENING_BRACKET/57 57/Type/77 77/CLOSING_BRACKET/97
      r70: 44/Type/53 → 44/NonNullType/58
      r71: 44/NonNullType/58 → 44/ListType/56 56/BANG/76
      r72: 44/NonNullType/58 → 44/NamedType/54 54/BANG/75
      r73: 50/Value/59 → 50/Variable/60
      r74: 50/Variable/60 → 50/DOLLAR/33 33/NAME/45
      r75: 50/Value/59 → 50/NumberValue/61
      r76: 50/NumberValue/61 → 50/NUMBER/62
      r77: 50/Value/59 → 50/StringValue/63
      r78: 50/StringValue/63 → 50/STRING_VALUE/64
      r79: 50/StringValue/63 → 50/BLOCK_STRING_VALUE/65
      r80: 50/Value/59 → 50/NamedValue/66
      r81: 50/NamedValue/66 → 50/NAME/67
      r82: 50/Value/59 → 50/ListValue/68
      r83: 50/ListValue/68 → 50/OPENING_BRACKET/69 69/CLOSING_BRACKET/78
      r84: 50/ListValue/68 → 50/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/98
      r85: 50/Value/59 → 50/ObjectValue/70
      r86: 50/ObjectValue/70 → 50/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r87: 50/ObjectValue/70 → 50/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/100
      r88: 51/SelectionSetOpt/72 → 51/SelectionSet/47
      r89: 51/SelectionSet/47 → 51/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r90: 51/SelectionSetOpt/72 → ε
      r91: 53/DefaultValueOpt/73 → 53/EQUALS/74 74/ValueConst/89
      r92: 53/DefaultValueOpt/73 → ε
      r93: 57/Type/77 → 57/NamedType/54
      r94: 57/NamedType/54 → 57/NAME/55
      r95: 57/Type/77 → 57/ListType/56
      r96: 57/ListType/56 → 57/OPENING_BRACKET/57 57/Type/77 77/CLOSING_BRACKET/97
      r97: 57/Type/77 → 57/NonNullType/58
      r98: 57/NonNullType/58 → 57/ListType/56 56/BANG/76
      r99: 57/NonNullType/58 → 57/NamedType/54 54/BANG/75
      r100: 69/ListValueList/79 → 69/Value/80
      r101: 69/Value/80 → 69/Variable/60
      r102: 69/Variable/60 → 69/DOLLAR/33 33/NAME/45
      r103: 69/Value/80 → 69/NumberValue/61
      r104: 69/NumberValue/61 → 69/NUMBER/62
      r105: 69/Value/80 → 69/StringValue/63
      r106: 69/StringValue/63 → 69/STRING_VALUE/64
      r107: 69/StringValue/63 → 69/BLOCK_STRING_VALUE/65
      r108: 69/Value/80 → 69/NamedValue/66
      r109: 69/NamedValue/66 → 69/NAME/67
      r110: 69/Value/80 → 69/ListValue/68
      r111: 69/ListValue/68 → 69/OPENING_BRACKET/69 69/CLOSING_BRACKET/78
      r112: 69/ListValue/68 → 69/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/98
      r113: 69/Value/80 → 69/ObjectValue/70
      r114: 69/ObjectValue/70 → 69/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r115: 69/ObjectValue/70 → 69/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/100
      r116: 69/ListValueList/79 → 69/ListValueList/79 79/Value/99
      r117: 71/ObjectFieldList/82 → 71/ObjectField/83
      r118: 71/ObjectField/83 → 71/NAME/84 84/COLON/102 102/Value/112
      r119: 71/ObjectFieldList/82 → 71/ObjectFieldList/82 82/ObjectField/101
      r120: 73/DirectivesConstOpt/85 → 73/DirectiveConstList/86
      r121: 73/DirectiveConstList/86 → 73/DirectiveConst/87
      r122: 73/DirectiveConst/87 → 73/AT/88 88/NAME/104 104/ArgumentsConstOpt/113
      r123: 73/DirectiveConstList/86 → 73/DirectiveConstList/86 86/DirectiveConst/103
      r124: 73/DirectivesConstOpt/85 → ε
      r125: 74/ValueConst/89 → 74/NumberValue/90
      r126: 74/NumberValue/90 → 74/NUMBER/62
      r127: 74/ValueConst/89 → 74/StringValue/91
      r128: 74/StringValue/91 → 74/STRING_VALUE/64
      r129: 74/StringValue/91 → 74/BLOCK_STRING_VALUE/65
      r130: 74/ValueConst/89 → 74/NamedValue/92
      r131: 74/NamedValue/92 → 74/NAME/67
      r132: 74/ValueConst/89 → 74/ListValueConst/93
      r133: 74/ListValueConst/93 → 74/OPENING_BRACKET/94 94/CLOSING_BRACKET/105
      r134: 74/ListValueConst/93 → 74/OPENING_BRACKET/94 94/ListValueConstList/106 106/CLOSING_BRACKET/115
      r135: 74/ValueConst/89 → 74/ObjectValueConst/95
      r136: 74/ObjectValueConst/95 → 74/OPENING_BRACE/96 96/CLOSING_BRACE/108
      r137: 74/ObjectValueConst/95 → 74/OPENING_BRACE/96 96/ObjectFieldConstList/109 109/CLOSING_BRACE/117
      r138: 79/Value/99 → 79/Variable/60
      r139: 79/Variable/60 → 79/DOLLAR/33 33/NAME/45
      r140: 79/Value/99 → 79/NumberValue/61
      r141: 79/NumberValue/61 → 79/NUMBER/62
      r142: 79/Value/99 → 79/StringValue/63
      r143: 79/StringValue/63 → 79/STRING_VALUE/64
      r144: 79/StringValue/63 → 79/BLOCK_STRING_VALUE/65
      r145: 79/Value/99 → 79/NamedValue/66
      r146: 79/NamedValue/66 → 79/NAME/67
      r147: 79/Value/99 → 79/ListValue/68
      r148: 79/ListValue/68 → 79/OPENING_BRACKET/69 69/CLOSING_BRACKET/78
      r149: 79/ListValue/68 → 79/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/98
      r150: 79/Value/99 → 79/ObjectValue/70
      r151: 79/ObjectValue/70 → 79/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r152: 79/ObjectValue/70 → 79/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/100
      r153: 82/ObjectField/101 → 82/NAME/84 84/COLON/102 102/Value/112
      r154: 86/DirectiveConst/103 → 86/AT/88 88/NAME/104 104/ArgumentsConstOpt/113
      r155: 94/ListValueConstList/106 → 94/ValueConst/107
      r156: 94/ValueConst/107 → 94/NumberValue/90
      r157: 94/NumberValue/90 → 94/NUMBER/62
      r158: 94/ValueConst/107 → 94/StringValue/91
      r159: 94/StringValue/91 → 94/STRING_VALUE/64
      r160: 94/StringValue/91 → 94/BLOCK_STRING_VALUE/65
      r161: 94/ValueConst/107 → 94/NamedValue/92
      r162: 94/NamedValue/92 → 94/NAME/67
      r163: 94/ValueConst/107 → 94/ListValueConst/93
      r164: 94/ListValueConst/93 → 94/OPENING_BRACKET/94 94/CLOSING_BRACKET/105
      r165: 94/ListValueConst/93 → 94/OPENING_BRACKET/94 94/ListValueConstList/106 106/CLOSING_BRACKET/115
      r166: 94/ValueConst/107 → 94/ObjectValueConst/95
      r167: 94/ObjectValueConst/95 → 94/OPENING_BRACE/96 96/CLOSING_BRACE/108
      r168: 94/ObjectValueConst/95 → 94/OPENING_BRACE/96 96/ObjectFieldConstList/109 109/CLOSING_BRACE/117
      r169: 94/ListValueConstList/106 → 94/ListValueConstList/106 106/ValueConst/116
      r170: 96/ObjectFieldConstList/109 → 96/ObjectFieldConst/110
      r171: 96/ObjectFieldConst/110 → 96/NAME/111 111/COLON/119 119/ValueConst/123
      r172: 96/ObjectFieldConstList/109 → 96/ObjectFieldConstList/109 109/ObjectFieldConst/118
      r173: 102/Value/112 → 102/Variable/60
      r174: 102/Variable/60 → 102/DOLLAR/33 33/NAME/45
      r175: 102/Value/112 → 102/NumberValue/61
      r176: 102/NumberValue/61 → 102/NUMBER/62
      r177: 102/Value/112 → 102/StringValue/63
      r178: 102/StringValue/63 → 102/STRING_VALUE/64
      r179: 102/StringValue/63 → 102/BLOCK_STRING_VALUE/65
      r180: 102/Value/112 → 102/NamedValue/66
      r181: 102/NamedValue/66 → 102/NAME/67
      r182: 102/Value/112 → 102/ListValue/68
      r183: 102/ListValue/68 → 102/OPENING_BRACKET/69 69/CLOSING_BRACKET/78
      r184: 102/ListValue/68 → 102/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/98
      r185: 102/Value/112 → 102/ObjectValue/70
      r186: 102/ObjectValue/70 → 102/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r187: 102/ObjectValue/70 → 102/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/100
      r188: 104/ArgumentsConstOpt/113 → 104/OPENING_PAREN/114 114/ArgumentConstList/120 120/CLOSING_PAREN/124
      r189: 104/ArgumentsConstOpt/113 → ε
      r190: 106/ValueConst/116 → 106/NumberValue/90
      r191: 106/NumberValue/90 → 106/NUMBER/62
      r192: 106/ValueConst/116 → 106/StringValue/91
      r193: 106/StringValue/91 → 106/STRING_VALUE/64
      r194: 106/StringValue/91 → 106/BLOCK_STRING_VALUE/65
      r195: 106/ValueConst/116 → 106/NamedValue/92
      r196: 106/NamedValue/92 → 106/NAME/67
      r197: 106/ValueConst/116 → 106/ListValueConst/93
      r198: 106/ListValueConst/93 → 106/OPENING_BRACKET/94 94/CLOSING_BRACKET/105
      r199: 106/ListValueConst/93 → 106/OPENING_BRACKET/94 94/ListValueConstList/106 106/CLOSING_BRACKET/115
      r200: 106/ValueConst/116 → 106/ObjectValueConst/95
      r201: 106/ObjectValueConst/95 → 106/OPENING_BRACE/96 96/CLOSING_BRACE/108
      r202: 106/ObjectValueConst/95 → 106/OPENING_BRACE/96 96/ObjectFieldConstList/109 109/CLOSING_BRACE/117
      r203: 109/ObjectFieldConst/118 → 109/NAME/111 111/COLON/119 119/ValueConst/123
      r204: 114/ArgumentConstList/120 → 114/ArgumentConst/121
      r205: 114/ArgumentConst/121 → 114/NAME/122 122/COLON/126 126/ValueConst/127
      r206: 114/ArgumentConstList/120 → 114/ArgumentConstList/120 120/ArgumentConst/125
      r207: 119/ValueConst/123 → 119/NumberValue/90
      r208: 119/NumberValue/90 → 119/NUMBER/62
      r209: 119/ValueConst/123 → 119/StringValue/91
      r210: 119/StringValue/91 → 119/STRING_VALUE/64
      r211: 119/StringValue/91 → 119/BLOCK_STRING_VALUE/65
      r212: 119/ValueConst/123 → 119/NamedValue/92
      r213: 119/NamedValue/92 → 119/NAME/67
      r214: 119/ValueConst/123 → 119/ListValueConst/93
      r215: 119/ListValueConst/93 → 119/OPENING_BRACKET/94 94/CLOSING_BRACKET/105
      r216: 119/ListValueConst/93 → 119/OPENING_BRACKET/94 94/ListValueConstList/106 106/CLOSING_BRACKET/115
      r217: 119/ValueConst/123 → 119/ObjectValueConst/95
      r218: 119/ObjectValueConst/95 → 119/OPENING_BRACE/96 96/CLOSING_BRACE/108
      r219: 119/ObjectValueConst/95 → 119/OPENING_BRACE/96 96/ObjectFieldConstList/109 109/CLOSING_BRACE/117
      r220: 120/ArgumentConst/125 → 120/NAME/122 122/COLON/126 126/ValueConst/127
      r221: 126/ValueConst/127 → 126/NumberValue/90
      r222: 126/NumberValue/90 → 126/NUMBER/62
      r223: 126/ValueConst/127 → 126/StringValue/91
      r224: 126/StringValue/91 → 126/STRING_VALUE/64
      r225: 126/StringValue/91 → 126/BLOCK_STRING_VALUE/65
      r226: 126/ValueConst/127 → 126/NamedValue/92
      r227: 126/NamedValue/92 → 126/NAME/67
      r228: 126/ValueConst/127 → 126/ListValueConst/93
      r229: 126/ListValueConst/93 → 126/OPENING_BRACKET/94 94/CLOSING_BRACKET/105
      r230: 126/ListValueConst/93 → 126/OPENING_BRACKET/94 94/ListValueConstList/106 106/CLOSING_BRACKET/115
      r231: 126/ValueConst/127 → 126/ObjectValueConst/95
      r232: 126/ObjectValueConst/95 → 126/OPENING_BRACE/96 96/CLOSING_BRACE/108
      r233: 126/ObjectValueConst/95 → 126/OPENING_BRACE/96 96/ObjectFieldConstList/109 109/CLOSING_BRACE/117
      "
    `);
  });
});
