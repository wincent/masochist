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
      %token 6/NAME/13
      %token 6/ON/14
      %token 9/ELLIPSIS/21
      %token 9/NAME/13
      %token 9/ON/14
      %token 11/OPENING_PAREN/24
      %token 15/CLOSING_BRACE/25
      %token 15/ELLIPSIS/21
      %token 15/NAME/13
      %token 15/ON/14
      %token 18/COLON/28
      %token 18/OPENING_PAREN/29
      %token 19/NAME/13
      %token 19/ON/14
      %token 21/NAME/33
      %token 21/ON/34
      %token 23/AT/38
      %token 24/DOLLAR/42
      %token 27/AT/38
      %token 29/NAME/13
      %token 29/ON/14
      %token 30/OPENING_PAREN/29
      %token 31/AT/38
      %token 32/AT/38
      %token 34/NAME/13
      %token 34/ON/14
      %token 35/OPENING_BRACE/9
      %token 36/AT/38
      %token 38/NAME/13
      %token 38/ON/14
      %token 39/CLOSING_PAREN/55
      %token 39/DOLLAR/42
      %token 41/COLON/57
      %token 42/NAME/13
      %token 42/ON/14
      %token 43/OPENING_BRACE/9
      %token 44/CLOSING_PAREN/61
      %token 44/NAME/13
      %token 44/ON/14
      %token 46/COLON/63
      %token 47/AT/38
      %token 49/OPENING_BRACE/9
      %token 54/OPENING_PAREN/29
      %token 57/NAME/13
      %token 57/ON/14
      %token 57/OPENING_BRACKET/70
      %token 63/BLOCK_STRING_VALUE/78
      %token 63/DOLLAR/42
      %token 63/NAME/13
      %token 63/NUMBER/75
      %token 63/ON/14
      %token 63/OPENING_BRACE/84
      %token 63/OPENING_BRACKET/82
      %token 63/STRING_VALUE/77
      %token 64/OPENING_BRACE/9
      %token 67/EQUALS/87
      %token 68/BANG/88
      %token 69/BANG/89
      %token 70/NAME/13
      %token 70/ON/14
      %token 70/OPENING_BRACKET/70
      %token 82/BLOCK_STRING_VALUE/78
      %token 82/CLOSING_BRACKET/91
      %token 82/DOLLAR/42
      %token 82/NAME/13
      %token 82/NUMBER/75
      %token 82/ON/14
      %token 82/OPENING_BRACE/84
      %token 82/OPENING_BRACKET/82
      %token 82/STRING_VALUE/77
      %token 84/CLOSING_BRACE/94
      %token 84/NAME/13
      %token 84/ON/14
      %token 86/AT/101
      %token 87/BLOCK_STRING_VALUE/78
      %token 87/NAME/13
      %token 87/NUMBER/75
      %token 87/ON/14
      %token 87/OPENING_BRACE/109
      %token 87/OPENING_BRACKET/107
      %token 87/STRING_VALUE/77
      %token 90/CLOSING_BRACKET/110
      %token 92/BLOCK_STRING_VALUE/78
      %token 92/CLOSING_BRACKET/111
      %token 92/DOLLAR/42
      %token 92/NAME/13
      %token 92/NUMBER/75
      %token 92/ON/14
      %token 92/OPENING_BRACE/84
      %token 92/OPENING_BRACKET/82
      %token 92/STRING_VALUE/77
      %token 95/CLOSING_BRACE/113
      %token 95/NAME/13
      %token 95/ON/14
      %token 97/COLON/115
      %token 99/AT/101
      %token 101/NAME/13
      %token 101/ON/14
      %token 107/BLOCK_STRING_VALUE/78
      %token 107/CLOSING_BRACKET/118
      %token 107/NAME/13
      %token 107/NUMBER/75
      %token 107/ON/14
      %token 107/OPENING_BRACE/109
      %token 107/OPENING_BRACKET/107
      %token 107/STRING_VALUE/77
      %token 109/CLOSING_BRACE/121
      %token 109/NAME/13
      %token 109/ON/14
      %token 115/BLOCK_STRING_VALUE/78
      %token 115/DOLLAR/42
      %token 115/NAME/13
      %token 115/NUMBER/75
      %token 115/ON/14
      %token 115/OPENING_BRACE/84
      %token 115/OPENING_BRACKET/82
      %token 115/STRING_VALUE/77
      %token 117/OPENING_PAREN/127
      %token 119/BLOCK_STRING_VALUE/78
      %token 119/CLOSING_BRACKET/128
      %token 119/NAME/13
      %token 119/NUMBER/75
      %token 119/ON/14
      %token 119/OPENING_BRACE/109
      %token 119/OPENING_BRACKET/107
      %token 119/STRING_VALUE/77
      %token 122/CLOSING_BRACE/130
      %token 122/NAME/13
      %token 122/ON/14
      %token 124/COLON/132
      %token 127/NAME/13
      %token 127/ON/14
      %token 132/BLOCK_STRING_VALUE/78
      %token 132/NAME/13
      %token 132/NUMBER/75
      %token 132/ON/14
      %token 132/OPENING_BRACE/109
      %token 132/OPENING_BRACKET/107
      %token 132/STRING_VALUE/77
      %token 133/CLOSING_PAREN/137
      %token 133/NAME/13
      %token 133/ON/14
      %token 135/COLON/139
      %token 139/BLOCK_STRING_VALUE/78
      %token 139/NAME/13
      %token 139/NUMBER/75
      %token 139/ON/14
      %token 139/OPENING_BRACE/109
      %token 139/OPENING_BRACKET/107
      %token 139/STRING_VALUE/77

      r0: 0/Document'/$ → 0/Document/1
      r1: 0/Document/1 → 0/DefinitionList/2
      r2: 0/DefinitionList/2 → 0/Definition/3
      r3: 0/Definition/3 → 0/ExecutableDefinition/4
      r4: 0/ExecutableDefinition/4 → 0/OperationDefinition/5
      r5: 0/OperationDefinition/5 → 0/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/23 23/DirectivesOpt/35 35/SelectionSet/52
      r6: 0/OperationType/6 → 0/NAME/7
      r7: 0/OperationDefinition/5 → 0/SelectionSet/8
      r8: 0/SelectionSet/8 → 0/OPENING_BRACE/9 9/SelectionList/15 15/CLOSING_BRACE/25
      r9: 0/DefinitionList/2 → 0/DefinitionList/2 2/Definition/10
      r10: 2/Definition/10 → 2/ExecutableDefinition/4
      r11: 2/ExecutableDefinition/4 → 2/OperationDefinition/5
      r12: 2/OperationDefinition/5 → 2/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/23 23/DirectivesOpt/35 35/SelectionSet/52
      r13: 2/OperationType/6 → 2/NAME/7
      r14: 2/OperationDefinition/5 → 2/SelectionSet/8
      r15: 2/SelectionSet/8 → 2/OPENING_BRACE/9 9/SelectionList/15 15/CLOSING_BRACE/25
      r16: 6/OperationNameOpt/11 → 6/Name/12
      r17: 6/Name/12 → 6/NAME/13
      r18: 6/Name/12 → 6/ON/14
      r19: 6/OperationNameOpt/11 → ε
      r20: 9/SelectionList/15 → 9/Selection/16
      r21: 9/Selection/16 → 9/Field/17
      r22: 9/Field/17 → 9/Name/18 18/ArgumentsOpt/27 27/DirectivesOpt/43 43/SelectionSetOpt/59
      r23: 9/Name/18 → 9/NAME/13
      r24: 9/Name/18 → 9/ON/14
      r25: 9/Field/17 → 9/Alias/19 19/Name/30 30/ArgumentsOpt/47 47/DirectivesOpt/64 64/SelectionSetOpt/85
      r26: 9/Alias/19 → 9/Name/18 18/COLON/28
      r27: 9/Selection/16 → 9/FragmentSpread/20
      r28: 9/FragmentSpread/20 → 9/ELLIPSIS/21 21/FragmentName/31 31/DirectivesOpt/48
      r29: 9/Selection/16 → 9/InlineFragment/22
      r30: 9/InlineFragment/22 → 9/ELLIPSIS/21 21/TypeConditionOpt/32 32/DirectivesOpt/49 49/SelectionSet/65
      r31: 9/SelectionList/15 → 9/SelectionList/15 15/Selection/26
      r32: 11/VariableDefinitionsOpt/23 → 11/OPENING_PAREN/24 24/VariableDefinitionList/39 39/CLOSING_PAREN/55
      r33: 11/VariableDefinitionsOpt/23 → ε
      r34: 15/Selection/26 → 15/Field/17
      r35: 15/Field/17 → 15/Name/18 18/ArgumentsOpt/27 27/DirectivesOpt/43 43/SelectionSetOpt/59
      r36: 15/Name/18 → 15/NAME/13
      r37: 15/Name/18 → 15/ON/14
      r38: 15/Field/17 → 15/Alias/19 19/Name/30 30/ArgumentsOpt/47 47/DirectivesOpt/64 64/SelectionSetOpt/85
      r39: 15/Alias/19 → 15/Name/18 18/COLON/28
      r40: 15/Selection/26 → 15/FragmentSpread/20
      r41: 15/FragmentSpread/20 → 15/ELLIPSIS/21 21/FragmentName/31 31/DirectivesOpt/48
      r42: 15/Selection/26 → 15/InlineFragment/22
      r43: 15/InlineFragment/22 → 15/ELLIPSIS/21 21/TypeConditionOpt/32 32/DirectivesOpt/49 49/SelectionSet/65
      r44: 18/ArgumentsOpt/27 → 18/OPENING_PAREN/29 29/ArgumentList/44 44/CLOSING_PAREN/61
      r45: 18/ArgumentsOpt/27 → ε
      r46: 19/Name/30 → 19/NAME/13
      r47: 19/Name/30 → 19/ON/14
      r48: 21/FragmentName/31 → 21/NAME/33
      r49: 21/TypeConditionOpt/32 → 21/ON/34 34/NamedType/50
      r50: 21/TypeConditionOpt/32 → ε
      r51: 23/DirectivesOpt/35 → 23/DirectiveList/36
      r52: 23/DirectiveList/36 → 23/Directive/37
      r53: 23/Directive/37 → 23/AT/38 38/Name/54 54/ArgumentsOpt/66
      r54: 23/DirectiveList/36 → 23/DirectiveList/36 36/Directive/53
      r55: 23/DirectivesOpt/35 → ε
      r56: 24/VariableDefinitionList/39 → 24/VariableDefinition/40
      r57: 24/VariableDefinition/40 → 24/Variable/41 41/COLON/57 57/Type/67 67/DefaultValueOpt/86 86/DirectivesConstOpt/98
      r58: 24/Variable/41 → 24/DOLLAR/42 42/Name/58
      r59: 24/VariableDefinitionList/39 → 24/VariableDefinitionList/39 39/VariableDefinition/56
      r60: 27/DirectivesOpt/43 → 27/DirectiveList/36
      r61: 27/DirectiveList/36 → 27/Directive/37
      r62: 27/Directive/37 → 27/AT/38 38/Name/54 54/ArgumentsOpt/66
      r63: 27/DirectiveList/36 → 27/DirectiveList/36 36/Directive/53
      r64: 27/DirectivesOpt/43 → ε
      r65: 29/ArgumentList/44 → 29/Argument/45
      r66: 29/Argument/45 → 29/Name/46 46/COLON/63 63/Value/72
      r67: 29/Name/46 → 29/NAME/13
      r68: 29/Name/46 → 29/ON/14
      r69: 29/ArgumentList/44 → 29/ArgumentList/44 44/Argument/62
      r70: 30/ArgumentsOpt/47 → 30/OPENING_PAREN/29 29/ArgumentList/44 44/CLOSING_PAREN/61
      r71: 30/ArgumentsOpt/47 → ε
      r72: 31/DirectivesOpt/48 → 31/DirectiveList/36
      r73: 31/DirectiveList/36 → 31/Directive/37
      r74: 31/Directive/37 → 31/AT/38 38/Name/54 54/ArgumentsOpt/66
      r75: 31/DirectiveList/36 → 31/DirectiveList/36 36/Directive/53
      r76: 31/DirectivesOpt/48 → ε
      r77: 32/DirectivesOpt/49 → 32/DirectiveList/36
      r78: 32/DirectiveList/36 → 32/Directive/37
      r79: 32/Directive/37 → 32/AT/38 38/Name/54 54/ArgumentsOpt/66
      r80: 32/DirectiveList/36 → 32/DirectiveList/36 36/Directive/53
      r81: 32/DirectivesOpt/49 → ε
      r82: 34/NamedType/50 → 34/Name/51
      r83: 34/Name/51 → 34/NAME/13
      r84: 34/Name/51 → 34/ON/14
      r85: 35/SelectionSet/52 → 35/OPENING_BRACE/9 9/SelectionList/15 15/CLOSING_BRACE/25
      r86: 36/Directive/53 → 36/AT/38 38/Name/54 54/ArgumentsOpt/66
      r87: 38/Name/54 → 38/NAME/13
      r88: 38/Name/54 → 38/ON/14
      r89: 39/VariableDefinition/56 → 39/Variable/41 41/COLON/57 57/Type/67 67/DefaultValueOpt/86 86/DirectivesConstOpt/98
      r90: 39/Variable/41 → 39/DOLLAR/42 42/Name/58
      r91: 42/Name/58 → 42/NAME/13
      r92: 42/Name/58 → 42/ON/14
      r93: 43/SelectionSetOpt/59 → 43/SelectionSet/60
      r94: 43/SelectionSet/60 → 43/OPENING_BRACE/9 9/SelectionList/15 15/CLOSING_BRACE/25
      r95: 43/SelectionSetOpt/59 → ε
      r96: 44/Argument/62 → 44/Name/46 46/COLON/63 63/Value/72
      r97: 44/Name/46 → 44/NAME/13
      r98: 44/Name/46 → 44/ON/14
      r99: 47/DirectivesOpt/64 → 47/DirectiveList/36
      r100: 47/DirectiveList/36 → 47/Directive/37
      r101: 47/Directive/37 → 47/AT/38 38/Name/54 54/ArgumentsOpt/66
      r102: 47/DirectiveList/36 → 47/DirectiveList/36 36/Directive/53
      r103: 47/DirectivesOpt/64 → ε
      r104: 49/SelectionSet/65 → 49/OPENING_BRACE/9 9/SelectionList/15 15/CLOSING_BRACE/25
      r105: 54/ArgumentsOpt/66 → 54/OPENING_PAREN/29 29/ArgumentList/44 44/CLOSING_PAREN/61
      r106: 54/ArgumentsOpt/66 → ε
      r107: 57/Type/67 → 57/NamedType/68
      r108: 57/NamedType/68 → 57/Name/51
      r109: 57/Name/51 → 57/NAME/13
      r110: 57/Name/51 → 57/ON/14
      r111: 57/Type/67 → 57/ListType/69
      r112: 57/ListType/69 → 57/OPENING_BRACKET/70 70/Type/90 90/CLOSING_BRACKET/110
      r113: 57/Type/67 → 57/NonNullType/71
      r114: 57/NonNullType/71 → 57/ListType/69 69/BANG/89
      r115: 57/NonNullType/71 → 57/NamedType/68 68/BANG/88
      r116: 63/Value/72 → 63/Variable/73
      r117: 63/Variable/73 → 63/DOLLAR/42 42/Name/58
      r118: 63/Value/72 → 63/NumberValue/74
      r119: 63/NumberValue/74 → 63/NUMBER/75
      r120: 63/Value/72 → 63/StringValue/76
      r121: 63/StringValue/76 → 63/STRING_VALUE/77
      r122: 63/StringValue/76 → 63/BLOCK_STRING_VALUE/78
      r123: 63/Value/72 → 63/NamedValue/79
      r124: 63/NamedValue/79 → 63/Name/80
      r125: 63/Name/80 → 63/NAME/13
      r126: 63/Name/80 → 63/ON/14
      r127: 63/Value/72 → 63/ListValue/81
      r128: 63/ListValue/81 → 63/OPENING_BRACKET/82 82/CLOSING_BRACKET/91
      r129: 63/ListValue/81 → 63/OPENING_BRACKET/82 82/ListValueList/92 92/CLOSING_BRACKET/111
      r130: 63/Value/72 → 63/ObjectValue/83
      r131: 63/ObjectValue/83 → 63/OPENING_BRACE/84 84/CLOSING_BRACE/94
      r132: 63/ObjectValue/83 → 63/OPENING_BRACE/84 84/ObjectFieldList/95 95/CLOSING_BRACE/113
      r133: 64/SelectionSetOpt/85 → 64/SelectionSet/60
      r134: 64/SelectionSet/60 → 64/OPENING_BRACE/9 9/SelectionList/15 15/CLOSING_BRACE/25
      r135: 64/SelectionSetOpt/85 → ε
      r136: 67/DefaultValueOpt/86 → 67/EQUALS/87 87/ValueConst/102
      r137: 67/DefaultValueOpt/86 → ε
      r138: 70/Type/90 → 70/NamedType/68
      r139: 70/NamedType/68 → 70/Name/51
      r140: 70/Name/51 → 70/NAME/13
      r141: 70/Name/51 → 70/ON/14
      r142: 70/Type/90 → 70/ListType/69
      r143: 70/ListType/69 → 70/OPENING_BRACKET/70 70/Type/90 90/CLOSING_BRACKET/110
      r144: 70/Type/90 → 70/NonNullType/71
      r145: 70/NonNullType/71 → 70/ListType/69 69/BANG/89
      r146: 70/NonNullType/71 → 70/NamedType/68 68/BANG/88
      r147: 82/ListValueList/92 → 82/Value/93
      r148: 82/Value/93 → 82/Variable/73
      r149: 82/Variable/73 → 82/DOLLAR/42 42/Name/58
      r150: 82/Value/93 → 82/NumberValue/74
      r151: 82/NumberValue/74 → 82/NUMBER/75
      r152: 82/Value/93 → 82/StringValue/76
      r153: 82/StringValue/76 → 82/STRING_VALUE/77
      r154: 82/StringValue/76 → 82/BLOCK_STRING_VALUE/78
      r155: 82/Value/93 → 82/NamedValue/79
      r156: 82/NamedValue/79 → 82/Name/80
      r157: 82/Name/80 → 82/NAME/13
      r158: 82/Name/80 → 82/ON/14
      r159: 82/Value/93 → 82/ListValue/81
      r160: 82/ListValue/81 → 82/OPENING_BRACKET/82 82/CLOSING_BRACKET/91
      r161: 82/ListValue/81 → 82/OPENING_BRACKET/82 82/ListValueList/92 92/CLOSING_BRACKET/111
      r162: 82/Value/93 → 82/ObjectValue/83
      r163: 82/ObjectValue/83 → 82/OPENING_BRACE/84 84/CLOSING_BRACE/94
      r164: 82/ObjectValue/83 → 82/OPENING_BRACE/84 84/ObjectFieldList/95 95/CLOSING_BRACE/113
      r165: 82/ListValueList/92 → 82/ListValueList/92 92/Value/112
      r166: 84/ObjectFieldList/95 → 84/ObjectField/96
      r167: 84/ObjectField/96 → 84/Name/97 97/COLON/115 115/Value/125
      r168: 84/Name/97 → 84/NAME/13
      r169: 84/Name/97 → 84/ON/14
      r170: 84/ObjectFieldList/95 → 84/ObjectFieldList/95 95/ObjectField/114
      r171: 86/DirectivesConstOpt/98 → 86/DirectiveConstList/99
      r172: 86/DirectiveConstList/99 → 86/DirectiveConst/100
      r173: 86/DirectiveConst/100 → 86/AT/101 101/Name/117 117/ArgumentsConstOpt/126
      r174: 86/DirectiveConstList/99 → 86/DirectiveConstList/99 99/DirectiveConst/116
      r175: 86/DirectivesConstOpt/98 → ε
      r176: 87/ValueConst/102 → 87/NumberValue/103
      r177: 87/NumberValue/103 → 87/NUMBER/75
      r178: 87/ValueConst/102 → 87/StringValue/104
      r179: 87/StringValue/104 → 87/STRING_VALUE/77
      r180: 87/StringValue/104 → 87/BLOCK_STRING_VALUE/78
      r181: 87/ValueConst/102 → 87/NamedValue/105
      r182: 87/NamedValue/105 → 87/Name/80
      r183: 87/Name/80 → 87/NAME/13
      r184: 87/Name/80 → 87/ON/14
      r185: 87/ValueConst/102 → 87/ListValueConst/106
      r186: 87/ListValueConst/106 → 87/OPENING_BRACKET/107 107/CLOSING_BRACKET/118
      r187: 87/ListValueConst/106 → 87/OPENING_BRACKET/107 107/ListValueConstList/119 119/CLOSING_BRACKET/128
      r188: 87/ValueConst/102 → 87/ObjectValueConst/108
      r189: 87/ObjectValueConst/108 → 87/OPENING_BRACE/109 109/CLOSING_BRACE/121
      r190: 87/ObjectValueConst/108 → 87/OPENING_BRACE/109 109/ObjectFieldConstList/122 122/CLOSING_BRACE/130
      r191: 92/Value/112 → 92/Variable/73
      r192: 92/Variable/73 → 92/DOLLAR/42 42/Name/58
      r193: 92/Value/112 → 92/NumberValue/74
      r194: 92/NumberValue/74 → 92/NUMBER/75
      r195: 92/Value/112 → 92/StringValue/76
      r196: 92/StringValue/76 → 92/STRING_VALUE/77
      r197: 92/StringValue/76 → 92/BLOCK_STRING_VALUE/78
      r198: 92/Value/112 → 92/NamedValue/79
      r199: 92/NamedValue/79 → 92/Name/80
      r200: 92/Name/80 → 92/NAME/13
      r201: 92/Name/80 → 92/ON/14
      r202: 92/Value/112 → 92/ListValue/81
      r203: 92/ListValue/81 → 92/OPENING_BRACKET/82 82/CLOSING_BRACKET/91
      r204: 92/ListValue/81 → 92/OPENING_BRACKET/82 82/ListValueList/92 92/CLOSING_BRACKET/111
      r205: 92/Value/112 → 92/ObjectValue/83
      r206: 92/ObjectValue/83 → 92/OPENING_BRACE/84 84/CLOSING_BRACE/94
      r207: 92/ObjectValue/83 → 92/OPENING_BRACE/84 84/ObjectFieldList/95 95/CLOSING_BRACE/113
      r208: 95/ObjectField/114 → 95/Name/97 97/COLON/115 115/Value/125
      r209: 95/Name/97 → 95/NAME/13
      r210: 95/Name/97 → 95/ON/14
      r211: 99/DirectiveConst/116 → 99/AT/101 101/Name/117 117/ArgumentsConstOpt/126
      r212: 101/Name/117 → 101/NAME/13
      r213: 101/Name/117 → 101/ON/14
      r214: 107/ListValueConstList/119 → 107/ValueConst/120
      r215: 107/ValueConst/120 → 107/NumberValue/103
      r216: 107/NumberValue/103 → 107/NUMBER/75
      r217: 107/ValueConst/120 → 107/StringValue/104
      r218: 107/StringValue/104 → 107/STRING_VALUE/77
      r219: 107/StringValue/104 → 107/BLOCK_STRING_VALUE/78
      r220: 107/ValueConst/120 → 107/NamedValue/105
      r221: 107/NamedValue/105 → 107/Name/80
      r222: 107/Name/80 → 107/NAME/13
      r223: 107/Name/80 → 107/ON/14
      r224: 107/ValueConst/120 → 107/ListValueConst/106
      r225: 107/ListValueConst/106 → 107/OPENING_BRACKET/107 107/CLOSING_BRACKET/118
      r226: 107/ListValueConst/106 → 107/OPENING_BRACKET/107 107/ListValueConstList/119 119/CLOSING_BRACKET/128
      r227: 107/ValueConst/120 → 107/ObjectValueConst/108
      r228: 107/ObjectValueConst/108 → 107/OPENING_BRACE/109 109/CLOSING_BRACE/121
      r229: 107/ObjectValueConst/108 → 107/OPENING_BRACE/109 109/ObjectFieldConstList/122 122/CLOSING_BRACE/130
      r230: 107/ListValueConstList/119 → 107/ListValueConstList/119 119/ValueConst/129
      r231: 109/ObjectFieldConstList/122 → 109/ObjectFieldConst/123
      r232: 109/ObjectFieldConst/123 → 109/Name/124 124/COLON/132 132/ValueConst/136
      r233: 109/Name/124 → 109/NAME/13
      r234: 109/Name/124 → 109/ON/14
      r235: 109/ObjectFieldConstList/122 → 109/ObjectFieldConstList/122 122/ObjectFieldConst/131
      r236: 115/Value/125 → 115/Variable/73
      r237: 115/Variable/73 → 115/DOLLAR/42 42/Name/58
      r238: 115/Value/125 → 115/NumberValue/74
      r239: 115/NumberValue/74 → 115/NUMBER/75
      r240: 115/Value/125 → 115/StringValue/76
      r241: 115/StringValue/76 → 115/STRING_VALUE/77
      r242: 115/StringValue/76 → 115/BLOCK_STRING_VALUE/78
      r243: 115/Value/125 → 115/NamedValue/79
      r244: 115/NamedValue/79 → 115/Name/80
      r245: 115/Name/80 → 115/NAME/13
      r246: 115/Name/80 → 115/ON/14
      r247: 115/Value/125 → 115/ListValue/81
      r248: 115/ListValue/81 → 115/OPENING_BRACKET/82 82/CLOSING_BRACKET/91
      r249: 115/ListValue/81 → 115/OPENING_BRACKET/82 82/ListValueList/92 92/CLOSING_BRACKET/111
      r250: 115/Value/125 → 115/ObjectValue/83
      r251: 115/ObjectValue/83 → 115/OPENING_BRACE/84 84/CLOSING_BRACE/94
      r252: 115/ObjectValue/83 → 115/OPENING_BRACE/84 84/ObjectFieldList/95 95/CLOSING_BRACE/113
      r253: 117/ArgumentsConstOpt/126 → 117/OPENING_PAREN/127 127/ArgumentConstList/133 133/CLOSING_PAREN/137
      r254: 117/ArgumentsConstOpt/126 → ε
      r255: 119/ValueConst/129 → 119/NumberValue/103
      r256: 119/NumberValue/103 → 119/NUMBER/75
      r257: 119/ValueConst/129 → 119/StringValue/104
      r258: 119/StringValue/104 → 119/STRING_VALUE/77
      r259: 119/StringValue/104 → 119/BLOCK_STRING_VALUE/78
      r260: 119/ValueConst/129 → 119/NamedValue/105
      r261: 119/NamedValue/105 → 119/Name/80
      r262: 119/Name/80 → 119/NAME/13
      r263: 119/Name/80 → 119/ON/14
      r264: 119/ValueConst/129 → 119/ListValueConst/106
      r265: 119/ListValueConst/106 → 119/OPENING_BRACKET/107 107/CLOSING_BRACKET/118
      r266: 119/ListValueConst/106 → 119/OPENING_BRACKET/107 107/ListValueConstList/119 119/CLOSING_BRACKET/128
      r267: 119/ValueConst/129 → 119/ObjectValueConst/108
      r268: 119/ObjectValueConst/108 → 119/OPENING_BRACE/109 109/CLOSING_BRACE/121
      r269: 119/ObjectValueConst/108 → 119/OPENING_BRACE/109 109/ObjectFieldConstList/122 122/CLOSING_BRACE/130
      r270: 122/ObjectFieldConst/131 → 122/Name/124 124/COLON/132 132/ValueConst/136
      r271: 122/Name/124 → 122/NAME/13
      r272: 122/Name/124 → 122/ON/14
      r273: 127/ArgumentConstList/133 → 127/ArgumentConst/134
      r274: 127/ArgumentConst/134 → 127/Name/135 135/COLON/139 139/ValueConst/140
      r275: 127/Name/135 → 127/NAME/13
      r276: 127/Name/135 → 127/ON/14
      r277: 127/ArgumentConstList/133 → 127/ArgumentConstList/133 133/ArgumentConst/138
      r278: 132/ValueConst/136 → 132/NumberValue/103
      r279: 132/NumberValue/103 → 132/NUMBER/75
      r280: 132/ValueConst/136 → 132/StringValue/104
      r281: 132/StringValue/104 → 132/STRING_VALUE/77
      r282: 132/StringValue/104 → 132/BLOCK_STRING_VALUE/78
      r283: 132/ValueConst/136 → 132/NamedValue/105
      r284: 132/NamedValue/105 → 132/Name/80
      r285: 132/Name/80 → 132/NAME/13
      r286: 132/Name/80 → 132/ON/14
      r287: 132/ValueConst/136 → 132/ListValueConst/106
      r288: 132/ListValueConst/106 → 132/OPENING_BRACKET/107 107/CLOSING_BRACKET/118
      r289: 132/ListValueConst/106 → 132/OPENING_BRACKET/107 107/ListValueConstList/119 119/CLOSING_BRACKET/128
      r290: 132/ValueConst/136 → 132/ObjectValueConst/108
      r291: 132/ObjectValueConst/108 → 132/OPENING_BRACE/109 109/CLOSING_BRACE/121
      r292: 132/ObjectValueConst/108 → 132/OPENING_BRACE/109 109/ObjectFieldConstList/122 122/CLOSING_BRACE/130
      r293: 133/ArgumentConst/138 → 133/Name/135 135/COLON/139 139/ValueConst/140
      r294: 133/Name/135 → 133/NAME/13
      r295: 133/Name/135 → 133/ON/14
      r296: 139/ValueConst/140 → 139/NumberValue/103
      r297: 139/NumberValue/103 → 139/NUMBER/75
      r298: 139/ValueConst/140 → 139/StringValue/104
      r299: 139/StringValue/104 → 139/STRING_VALUE/77
      r300: 139/StringValue/104 → 139/BLOCK_STRING_VALUE/78
      r301: 139/ValueConst/140 → 139/NamedValue/105
      r302: 139/NamedValue/105 → 139/Name/80
      r303: 139/Name/80 → 139/NAME/13
      r304: 139/Name/80 → 139/ON/14
      r305: 139/ValueConst/140 → 139/ListValueConst/106
      r306: 139/ListValueConst/106 → 139/OPENING_BRACKET/107 107/CLOSING_BRACKET/118
      r307: 139/ListValueConst/106 → 139/OPENING_BRACKET/107 107/ListValueConstList/119 119/CLOSING_BRACKET/128
      r308: 139/ValueConst/140 → 139/ObjectValueConst/108
      r309: 139/ObjectValueConst/108 → 139/OPENING_BRACE/109 109/CLOSING_BRACE/121
      r310: 139/ObjectValueConst/108 → 139/OPENING_BRACE/109 109/ObjectFieldConstList/122 122/CLOSING_BRACE/130
      "
    `);
  });
});
