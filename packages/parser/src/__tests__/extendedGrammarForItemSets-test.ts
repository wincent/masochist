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
      %token 74/BLOCK_STRING_VALUE/65
      %token 74/NAME/67
      %token 74/NUMBER/62
      %token 74/OPENING_BRACE/92
      %token 74/OPENING_BRACKET/90
      %token 74/STRING_VALUE/64
      %token 77/CLOSING_BRACKET/93
      %token 79/BLOCK_STRING_VALUE/65
      %token 79/CLOSING_BRACKET/94
      %token 79/DOLLAR/33
      %token 79/NAME/67
      %token 79/NUMBER/62
      %token 79/OPENING_BRACE/71
      %token 79/OPENING_BRACKET/69
      %token 79/STRING_VALUE/64
      %token 82/CLOSING_BRACE/96
      %token 82/NAME/84
      %token 84/COLON/98
      %token 90/BLOCK_STRING_VALUE/65
      %token 90/CLOSING_BRACKET/99
      %token 90/NAME/67
      %token 90/NUMBER/62
      %token 90/OPENING_BRACE/92
      %token 90/OPENING_BRACKET/90
      %token 90/STRING_VALUE/64
      %token 92/CLOSING_BRACE/102
      %token 92/NAME/105
      %token 98/BLOCK_STRING_VALUE/65
      %token 98/DOLLAR/33
      %token 98/NAME/67
      %token 98/NUMBER/62
      %token 98/OPENING_BRACE/71
      %token 98/OPENING_BRACKET/69
      %token 98/STRING_VALUE/64
      %token 100/BLOCK_STRING_VALUE/65
      %token 100/CLOSING_BRACKET/107
      %token 100/NAME/67
      %token 100/NUMBER/62
      %token 100/OPENING_BRACE/92
      %token 100/OPENING_BRACKET/90
      %token 100/STRING_VALUE/64
      %token 103/CLOSING_BRACE/109
      %token 103/NAME/105
      %token 105/COLON/111
      %token 111/BLOCK_STRING_VALUE/65
      %token 111/NAME/67
      %token 111/NUMBER/62
      %token 111/OPENING_BRACE/92
      %token 111/OPENING_BRACKET/90
      %token 111/STRING_VALUE/64

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
      r38: 19/VariableDefinition/31 → 19/Variable/32 32/COLON/44 44/Type/53 53/DefaultValueOpt/73
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
      r53: 30/VariableDefinition/43 → 30/Variable/32 32/COLON/44 44/Type/53 53/DefaultValueOpt/73
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
      r69: 44/ListType/56 → 44/OPENING_BRACKET/57 57/Type/77 77/CLOSING_BRACKET/93
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
      r84: 50/ListValue/68 → 50/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/94
      r85: 50/Value/59 → 50/ObjectValue/70
      r86: 50/ObjectValue/70 → 50/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r87: 50/ObjectValue/70 → 50/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/96
      r88: 51/SelectionSetOpt/72 → 51/SelectionSet/47
      r89: 51/SelectionSet/47 → 51/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r90: 51/SelectionSetOpt/72 → ε
      r91: 53/DefaultValueOpt/73 → 53/EQUALS/74 74/ValueConst/85
      r92: 53/DefaultValueOpt/73 → ε
      r93: 57/Type/77 → 57/NamedType/54
      r94: 57/NamedType/54 → 57/NAME/55
      r95: 57/Type/77 → 57/ListType/56
      r96: 57/ListType/56 → 57/OPENING_BRACKET/57 57/Type/77 77/CLOSING_BRACKET/93
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
      r112: 69/ListValue/68 → 69/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/94
      r113: 69/Value/80 → 69/ObjectValue/70
      r114: 69/ObjectValue/70 → 69/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r115: 69/ObjectValue/70 → 69/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/96
      r116: 69/ListValueList/79 → 69/ListValueList/79 79/Value/95
      r117: 71/ObjectFieldList/82 → 71/ObjectField/83
      r118: 71/ObjectField/83 → 71/NAME/84 84/COLON/98 98/Value/106
      r119: 71/ObjectFieldList/82 → 71/ObjectFieldList/82 82/ObjectField/97
      r120: 74/ValueConst/85 → 74/NumberValue/86
      r121: 74/NumberValue/86 → 74/NUMBER/62
      r122: 74/ValueConst/85 → 74/StringValue/87
      r123: 74/StringValue/87 → 74/STRING_VALUE/64
      r124: 74/StringValue/87 → 74/BLOCK_STRING_VALUE/65
      r125: 74/ValueConst/85 → 74/NamedValue/88
      r126: 74/NamedValue/88 → 74/NAME/67
      r127: 74/ValueConst/85 → 74/ListValueConst/89
      r128: 74/ListValueConst/89 → 74/OPENING_BRACKET/90 90/CLOSING_BRACKET/99
      r129: 74/ListValueConst/89 → 74/OPENING_BRACKET/90 90/ListValueConstList/100 100/CLOSING_BRACKET/107
      r130: 74/ValueConst/85 → 74/ObjectValueConst/91
      r131: 74/ObjectValueConst/91 → 74/OPENING_BRACE/92 92/CLOSING_BRACE/102
      r132: 74/ObjectValueConst/91 → 74/OPENING_BRACE/92 92/ObjectFieldConstList/103 103/CLOSING_BRACE/109
      r133: 79/Value/95 → 79/Variable/60
      r134: 79/Variable/60 → 79/DOLLAR/33 33/NAME/45
      r135: 79/Value/95 → 79/NumberValue/61
      r136: 79/NumberValue/61 → 79/NUMBER/62
      r137: 79/Value/95 → 79/StringValue/63
      r138: 79/StringValue/63 → 79/STRING_VALUE/64
      r139: 79/StringValue/63 → 79/BLOCK_STRING_VALUE/65
      r140: 79/Value/95 → 79/NamedValue/66
      r141: 79/NamedValue/66 → 79/NAME/67
      r142: 79/Value/95 → 79/ListValue/68
      r143: 79/ListValue/68 → 79/OPENING_BRACKET/69 69/CLOSING_BRACKET/78
      r144: 79/ListValue/68 → 79/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/94
      r145: 79/Value/95 → 79/ObjectValue/70
      r146: 79/ObjectValue/70 → 79/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r147: 79/ObjectValue/70 → 79/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/96
      r148: 82/ObjectField/97 → 82/NAME/84 84/COLON/98 98/Value/106
      r149: 90/ListValueConstList/100 → 90/ValueConst/101
      r150: 90/ValueConst/101 → 90/NumberValue/86
      r151: 90/NumberValue/86 → 90/NUMBER/62
      r152: 90/ValueConst/101 → 90/StringValue/87
      r153: 90/StringValue/87 → 90/STRING_VALUE/64
      r154: 90/StringValue/87 → 90/BLOCK_STRING_VALUE/65
      r155: 90/ValueConst/101 → 90/NamedValue/88
      r156: 90/NamedValue/88 → 90/NAME/67
      r157: 90/ValueConst/101 → 90/ListValueConst/89
      r158: 90/ListValueConst/89 → 90/OPENING_BRACKET/90 90/CLOSING_BRACKET/99
      r159: 90/ListValueConst/89 → 90/OPENING_BRACKET/90 90/ListValueConstList/100 100/CLOSING_BRACKET/107
      r160: 90/ValueConst/101 → 90/ObjectValueConst/91
      r161: 90/ObjectValueConst/91 → 90/OPENING_BRACE/92 92/CLOSING_BRACE/102
      r162: 90/ObjectValueConst/91 → 90/OPENING_BRACE/92 92/ObjectFieldConstList/103 103/CLOSING_BRACE/109
      r163: 90/ListValueConstList/100 → 90/ListValueConstList/100 100/ValueConst/108
      r164: 92/ObjectFieldConstList/103 → 92/ObjectFieldConst/104
      r165: 92/ObjectFieldConst/104 → 92/NAME/105 105/COLON/111 111/ValueConst/112
      r166: 92/ObjectFieldConstList/103 → 92/ObjectFieldConstList/103 103/ObjectFieldConst/110
      r167: 98/Value/106 → 98/Variable/60
      r168: 98/Variable/60 → 98/DOLLAR/33 33/NAME/45
      r169: 98/Value/106 → 98/NumberValue/61
      r170: 98/NumberValue/61 → 98/NUMBER/62
      r171: 98/Value/106 → 98/StringValue/63
      r172: 98/StringValue/63 → 98/STRING_VALUE/64
      r173: 98/StringValue/63 → 98/BLOCK_STRING_VALUE/65
      r174: 98/Value/106 → 98/NamedValue/66
      r175: 98/NamedValue/66 → 98/NAME/67
      r176: 98/Value/106 → 98/ListValue/68
      r177: 98/ListValue/68 → 98/OPENING_BRACKET/69 69/CLOSING_BRACKET/78
      r178: 98/ListValue/68 → 98/OPENING_BRACKET/69 69/ListValueList/79 79/CLOSING_BRACKET/94
      r179: 98/Value/106 → 98/ObjectValue/70
      r180: 98/ObjectValue/70 → 98/OPENING_BRACE/71 71/CLOSING_BRACE/81
      r181: 98/ObjectValue/70 → 98/OPENING_BRACE/71 71/ObjectFieldList/82 82/CLOSING_BRACE/96
      r182: 100/ValueConst/108 → 100/NumberValue/86
      r183: 100/NumberValue/86 → 100/NUMBER/62
      r184: 100/ValueConst/108 → 100/StringValue/87
      r185: 100/StringValue/87 → 100/STRING_VALUE/64
      r186: 100/StringValue/87 → 100/BLOCK_STRING_VALUE/65
      r187: 100/ValueConst/108 → 100/NamedValue/88
      r188: 100/NamedValue/88 → 100/NAME/67
      r189: 100/ValueConst/108 → 100/ListValueConst/89
      r190: 100/ListValueConst/89 → 100/OPENING_BRACKET/90 90/CLOSING_BRACKET/99
      r191: 100/ListValueConst/89 → 100/OPENING_BRACKET/90 90/ListValueConstList/100 100/CLOSING_BRACKET/107
      r192: 100/ValueConst/108 → 100/ObjectValueConst/91
      r193: 100/ObjectValueConst/91 → 100/OPENING_BRACE/92 92/CLOSING_BRACE/102
      r194: 100/ObjectValueConst/91 → 100/OPENING_BRACE/92 92/ObjectFieldConstList/103 103/CLOSING_BRACE/109
      r195: 103/ObjectFieldConst/110 → 103/NAME/105 105/COLON/111 111/ValueConst/112
      r196: 111/ValueConst/112 → 111/NumberValue/86
      r197: 111/NumberValue/86 → 111/NUMBER/62
      r198: 111/ValueConst/112 → 111/StringValue/87
      r199: 111/StringValue/87 → 111/STRING_VALUE/64
      r200: 111/StringValue/87 → 111/BLOCK_STRING_VALUE/65
      r201: 111/ValueConst/112 → 111/NamedValue/88
      r202: 111/NamedValue/88 → 111/NAME/67
      r203: 111/ValueConst/112 → 111/ListValueConst/89
      r204: 111/ListValueConst/89 → 111/OPENING_BRACKET/90 90/CLOSING_BRACKET/99
      r205: 111/ListValueConst/89 → 111/OPENING_BRACKET/90 90/ListValueConstList/100 100/CLOSING_BRACKET/107
      r206: 111/ValueConst/112 → 111/ObjectValueConst/91
      r207: 111/ObjectValueConst/91 → 111/OPENING_BRACE/92 92/CLOSING_BRACE/102
      r208: 111/ObjectValueConst/91 → 111/OPENING_BRACE/92 92/ObjectFieldConstList/103 103/CLOSING_BRACE/109
      "
    `);
  });
});
