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
      %token 50/STRING_VALUE/64
      %token 51/OPENING_BRACE/9
      %token 53/EQUALS/70
      %token 54/BANG/71
      %token 56/BANG/72
      %token 57/NAME/55
      %token 57/OPENING_BRACKET/57
      %token 70/BLOCK_STRING_VALUE/65
      %token 70/NAME/67
      %token 70/NUMBER/62
      %token 70/OPENING_BRACE/81
      %token 70/OPENING_BRACKET/79
      %token 70/STRING_VALUE/64
      %token 73/CLOSING_BRACKET/82
      %token 79/BLOCK_STRING_VALUE/65
      %token 79/CLOSING_BRACKET/83
      %token 79/NAME/67
      %token 79/NUMBER/62
      %token 79/OPENING_BRACE/81
      %token 79/OPENING_BRACKET/79
      %token 79/STRING_VALUE/64
      %token 81/CLOSING_BRACE/86
      %token 81/NAME/89
      %token 84/BLOCK_STRING_VALUE/65
      %token 84/CLOSING_BRACKET/90
      %token 84/NAME/67
      %token 84/NUMBER/62
      %token 84/OPENING_BRACE/81
      %token 84/OPENING_BRACKET/79
      %token 84/STRING_VALUE/64
      %token 87/CLOSING_BRACE/92
      %token 87/NAME/89
      %token 89/COLON/94
      %token 94/BLOCK_STRING_VALUE/65
      %token 94/NAME/67
      %token 94/NUMBER/62
      %token 94/OPENING_BRACE/81
      %token 94/OPENING_BRACKET/79
      %token 94/STRING_VALUE/64

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
      r21: 9/Field/15 → 9/Alias/17 17/NAME/25 25/ArgumentsOpt/38 38/DirectivesOpt/51 51/SelectionSetOpt/68
      r22: 9/Alias/17 → 9/NAME/16 16/COLON/23
      r23: 9/SelectionList/13 → 9/SelectionList/13 13/Selection/21
      r24: 11/VariableDefinitionsOpt/18 → 11/OPENING_PAREN/19 19/VariableDefinitionList/30 30/CLOSING_PAREN/42
      r25: 11/VariableDefinitionsOpt/18 → ε
      r26: 13/Selection/21 → 13/Field/15
      r27: 13/Field/15 → 13/NAME/16 16/ArgumentsOpt/22 22/DirectivesOpt/34 34/SelectionSetOpt/46
      r28: 13/Field/15 → 13/Alias/17 17/NAME/25 25/ArgumentsOpt/38 38/DirectivesOpt/51 51/SelectionSetOpt/68
      r29: 13/Alias/17 → 13/NAME/16 16/COLON/23
      r30: 16/ArgumentsOpt/22 → 16/OPENING_PAREN/24 24/ArgumentList/35 35/CLOSING_PAREN/48
      r31: 16/ArgumentsOpt/22 → ε
      r32: 18/DirectivesOpt/26 → 18/DirectiveList/27
      r33: 18/DirectiveList/27 → 18/Directive/28
      r34: 18/Directive/28 → 18/AT/29 29/NAME/41 41/ArgumentsOpt/52
      r35: 18/DirectiveList/27 → 18/DirectiveList/27 27/Directive/40
      r36: 18/DirectivesOpt/26 → ε
      r37: 19/VariableDefinitionList/30 → 19/VariableDefinition/31
      r38: 19/VariableDefinition/31 → 19/Variable/32 32/COLON/44 44/Type/53 53/DefaultValueOpt/69
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
      r53: 30/VariableDefinition/43 → 30/Variable/32 32/COLON/44 44/Type/53 53/DefaultValueOpt/69
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
      r69: 44/ListType/56 → 44/OPENING_BRACKET/57 57/Type/73 73/CLOSING_BRACKET/82
      r70: 44/Type/53 → 44/NonNullType/58
      r71: 44/NonNullType/58 → 44/ListType/56 56/BANG/72
      r72: 44/NonNullType/58 → 44/NamedType/54 54/BANG/71
      r73: 50/Value/59 → 50/Variable/60
      r74: 50/Variable/60 → 50/DOLLAR/33 33/NAME/45
      r75: 50/Value/59 → 50/NumberValue/61
      r76: 50/NumberValue/61 → 50/NUMBER/62
      r77: 50/Value/59 → 50/StringValue/63
      r78: 50/StringValue/63 → 50/STRING_VALUE/64
      r79: 50/StringValue/63 → 50/BLOCK_STRING_VALUE/65
      r80: 50/Value/59 → 50/NamedValue/66
      r81: 50/NamedValue/66 → 50/NAME/67
      r82: 51/SelectionSetOpt/68 → 51/SelectionSet/47
      r83: 51/SelectionSet/47 → 51/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r84: 51/SelectionSetOpt/68 → ε
      r85: 53/DefaultValueOpt/69 → 53/EQUALS/70 70/ValueConst/74
      r86: 53/DefaultValueOpt/69 → ε
      r87: 57/Type/73 → 57/NamedType/54
      r88: 57/NamedType/54 → 57/NAME/55
      r89: 57/Type/73 → 57/ListType/56
      r90: 57/ListType/56 → 57/OPENING_BRACKET/57 57/Type/73 73/CLOSING_BRACKET/82
      r91: 57/Type/73 → 57/NonNullType/58
      r92: 57/NonNullType/58 → 57/ListType/56 56/BANG/72
      r93: 57/NonNullType/58 → 57/NamedType/54 54/BANG/71
      r94: 70/ValueConst/74 → 70/NumberValue/75
      r95: 70/NumberValue/75 → 70/NUMBER/62
      r96: 70/ValueConst/74 → 70/StringValue/76
      r97: 70/StringValue/76 → 70/STRING_VALUE/64
      r98: 70/StringValue/76 → 70/BLOCK_STRING_VALUE/65
      r99: 70/ValueConst/74 → 70/NamedValue/77
      r100: 70/NamedValue/77 → 70/NAME/67
      r101: 70/ValueConst/74 → 70/ListValueConst/78
      r102: 70/ListValueConst/78 → 70/OPENING_BRACKET/79 79/CLOSING_BRACKET/83
      r103: 70/ListValueConst/78 → 70/OPENING_BRACKET/79 79/ListValueConstList/84 84/CLOSING_BRACKET/90
      r104: 70/ValueConst/74 → 70/ObjectValueConst/80
      r105: 70/ObjectValueConst/80 → 70/OPENING_BRACE/81 81/CLOSING_BRACE/86
      r106: 70/ObjectValueConst/80 → 70/OPENING_BRACE/81 81/ObjectFieldConstList/87 87/CLOSING_BRACE/92
      r107: 79/ListValueConstList/84 → 79/ValueConst/85
      r108: 79/ValueConst/85 → 79/NumberValue/75
      r109: 79/NumberValue/75 → 79/NUMBER/62
      r110: 79/ValueConst/85 → 79/StringValue/76
      r111: 79/StringValue/76 → 79/STRING_VALUE/64
      r112: 79/StringValue/76 → 79/BLOCK_STRING_VALUE/65
      r113: 79/ValueConst/85 → 79/NamedValue/77
      r114: 79/NamedValue/77 → 79/NAME/67
      r115: 79/ValueConst/85 → 79/ListValueConst/78
      r116: 79/ListValueConst/78 → 79/OPENING_BRACKET/79 79/CLOSING_BRACKET/83
      r117: 79/ListValueConst/78 → 79/OPENING_BRACKET/79 79/ListValueConstList/84 84/CLOSING_BRACKET/90
      r118: 79/ValueConst/85 → 79/ObjectValueConst/80
      r119: 79/ObjectValueConst/80 → 79/OPENING_BRACE/81 81/CLOSING_BRACE/86
      r120: 79/ObjectValueConst/80 → 79/OPENING_BRACE/81 81/ObjectFieldConstList/87 87/CLOSING_BRACE/92
      r121: 79/ListValueConstList/84 → 79/ListValueConstList/84 84/ValueConst/91
      r122: 81/ObjectFieldConstList/87 → 81/ObjectFieldConst/88
      r123: 81/ObjectFieldConst/88 → 81/NAME/89 89/COLON/94 94/ValueConst/95
      r124: 81/ObjectFieldConstList/87 → 81/ObjectFieldConstList/87 87/ObjectFieldConst/93
      r125: 84/ValueConst/91 → 84/NumberValue/75
      r126: 84/NumberValue/75 → 84/NUMBER/62
      r127: 84/ValueConst/91 → 84/StringValue/76
      r128: 84/StringValue/76 → 84/STRING_VALUE/64
      r129: 84/StringValue/76 → 84/BLOCK_STRING_VALUE/65
      r130: 84/ValueConst/91 → 84/NamedValue/77
      r131: 84/NamedValue/77 → 84/NAME/67
      r132: 84/ValueConst/91 → 84/ListValueConst/78
      r133: 84/ListValueConst/78 → 84/OPENING_BRACKET/79 79/CLOSING_BRACKET/83
      r134: 84/ListValueConst/78 → 84/OPENING_BRACKET/79 79/ListValueConstList/84 84/CLOSING_BRACKET/90
      r135: 84/ValueConst/91 → 84/ObjectValueConst/80
      r136: 84/ObjectValueConst/80 → 84/OPENING_BRACE/81 81/CLOSING_BRACE/86
      r137: 84/ObjectValueConst/80 → 84/OPENING_BRACE/81 81/ObjectFieldConstList/87 87/CLOSING_BRACE/92
      r138: 87/ObjectFieldConst/93 → 87/NAME/89 89/COLON/94 94/ValueConst/95
      r139: 94/ValueConst/95 → 94/NumberValue/75
      r140: 94/NumberValue/75 → 94/NUMBER/62
      r141: 94/ValueConst/95 → 94/StringValue/76
      r142: 94/StringValue/76 → 94/STRING_VALUE/64
      r143: 94/StringValue/76 → 94/BLOCK_STRING_VALUE/65
      r144: 94/ValueConst/95 → 94/NamedValue/77
      r145: 94/NamedValue/77 → 94/NAME/67
      r146: 94/ValueConst/95 → 94/ListValueConst/78
      r147: 94/ListValueConst/78 → 94/OPENING_BRACKET/79 79/CLOSING_BRACKET/83
      r148: 94/ListValueConst/78 → 94/OPENING_BRACKET/79 79/ListValueConstList/84 84/CLOSING_BRACKET/90
      r149: 94/ValueConst/95 → 94/ObjectValueConst/80
      r150: 94/ObjectValueConst/80 → 94/OPENING_BRACE/81 81/CLOSING_BRACE/86
      r151: 94/ObjectValueConst/80 → 94/OPENING_BRACE/81 81/ObjectFieldConstList/87 87/CLOSING_BRACE/92
      "
    `);
  });
});
