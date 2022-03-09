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
      %token 11/OPENING_PAREN/19
      %token 13/CLOSING_BRACE/20
      %token 13/NAME/16
      %token 16/COLON/23
      %token 16/OPENING_PAREN/24
      %token 17/NAME/25
      %token 18/AT/29
      %token 19/DOLLAR/33
      %token 2/NAME/7
      %token 2/OPENING_BRACE/9
      %token 22/OPENING_BRACE/9
      %token 24/NAME/38
      %token 25/OPENING_PAREN/24
      %token 26/OPENING_BRACE/9
      %token 27/AT/29
      %token 29/NAME/42
      %token 30/CLOSING_PAREN/43
      %token 30/DOLLAR/33
      %token 32/COLON/45
      %token 33/NAME/46
      %token 36/CLOSING_PAREN/47
      %token 36/NAME/38
      %token 38/COLON/49
      %token 39/OPENING_BRACE/9
      %token 42/OPENING_PAREN/24
      %token 45/NAME/54
      %token 45/OPENING_BRACKET/56
      %token 49/BLOCK_STRING_VALUE/64
      %token 49/DOLLAR/33
      %token 49/NAME/66
      %token 49/NUMBER/61
      %token 49/STRING_VALUE/63
      %token 52/EQUALS/68
      %token 53/BANG/69
      %token 55/BANG/70
      %token 56/NAME/54
      %token 56/OPENING_BRACKET/56
      %token 6/NAME/12
      %token 68/NAME/66
      %token 68/NUMBER/61
      %token 68/OPENING_BRACE/78
      %token 68/OPENING_BRACKET/76
      %token 71/CLOSING_BRACKET/79
      %token 76/CLOSING_BRACKET/80
      %token 76/NAME/66
      %token 76/NUMBER/61
      %token 76/OPENING_BRACE/78
      %token 76/OPENING_BRACKET/76
      %token 78/CLOSING_BRACE/83
      %token 78/NAME/86
      %token 81/CLOSING_BRACKET/87
      %token 81/NAME/66
      %token 81/NUMBER/61
      %token 81/OPENING_BRACE/78
      %token 81/OPENING_BRACKET/76
      %token 84/CLOSING_BRACE/89
      %token 84/NAME/86
      %token 86/COLON/91
      %token 9/NAME/16
      %token 91/NAME/66
      %token 91/NUMBER/61
      %token 91/OPENING_BRACE/78
      %token 91/OPENING_BRACKET/76

      r0: 0/Document'/$ → 0/Document/1
      r1: 0/Document/1 → 0/DefinitionList/2
      r2: 0/DefinitionList/2 → 0/Definition/3
      r3: 0/Definition/3 → 0/ExecutableDefinition/4
      r4: 0/ExecutableDefinition/4 → 0/OperationDefinition/5
      r5: 0/OperationDefinition/5 → 0/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/18 18/DirectivesOpt/26 26/SelectionSet/40
      r6: 0/OperationType/6 → 0/NAME/7
      r7: 0/OperationDefinition/5 → 0/SelectionSet/8
      r8: 0/SelectionSet/8 → 0/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r9: 0/DefinitionList/2 → 0/DefinitionList/2 2/Definition/10
      r10: 2/Definition/10 → 2/ExecutableDefinition/4
      r11: 2/ExecutableDefinition/4 → 2/OperationDefinition/5
      r12: 2/OperationDefinition/5 → 2/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/18 18/DirectivesOpt/26 26/SelectionSet/40
      r13: 2/OperationType/6 → 2/NAME/7
      r14: 2/OperationDefinition/5 → 2/SelectionSet/8
      r15: 2/SelectionSet/8 → 2/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r16: 6/OperationNameOpt/11 → 6/NAME/12
      r17: 6/OperationNameOpt/11 → ε
      r18: 9/SelectionList/13 → 9/Selection/14
      r19: 9/Selection/14 → 9/Field/15
      r20: 9/Field/15 → 9/NAME/16 16/ArgumentsOpt/22 22/SelectionSetOpt/34
      r21: 9/Field/15 → 9/Alias/17 17/NAME/25 25/ArgumentsOpt/39 39/SelectionSetOpt/50
      r22: 9/Alias/17 → 9/NAME/16 16/COLON/23
      r23: 9/SelectionList/13 → 9/SelectionList/13 13/Selection/21
      r24: 11/VariableDefinitionsOpt/18 → 11/OPENING_PAREN/19 19/VariableDefinitionList/30 30/CLOSING_PAREN/43
      r25: 11/VariableDefinitionsOpt/18 → ε
      r26: 13/Selection/21 → 13/Field/15
      r27: 13/Field/15 → 13/NAME/16 16/ArgumentsOpt/22 22/SelectionSetOpt/34
      r28: 13/Field/15 → 13/Alias/17 17/NAME/25 25/ArgumentsOpt/39 39/SelectionSetOpt/50
      r29: 13/Alias/17 → 13/NAME/16 16/COLON/23
      r30: 16/ArgumentsOpt/22 → 16/OPENING_PAREN/24 24/ArgumentList/36 36/CLOSING_PAREN/47
      r31: 16/ArgumentsOpt/22 → ε
      r32: 18/DirectivesOpt/26 → 18/DirectiveList/27
      r33: 18/DirectiveList/27 → 18/Directive/28
      r34: 18/Directive/28 → 18/AT/29 29/NAME/42 42/ArgumentsOpt/51
      r35: 18/DirectiveList/27 → 18/DirectiveList/27 27/Directive/41
      r36: 18/DirectivesOpt/26 → ε
      r37: 19/VariableDefinitionList/30 → 19/VariableDefinition/31
      r38: 19/VariableDefinition/31 → 19/Variable/32 32/COLON/45 45/Type/52 52/DefaultValueOpt/67
      r39: 19/Variable/32 → 19/DOLLAR/33 33/NAME/46
      r40: 19/VariableDefinitionList/30 → 19/VariableDefinitionList/30 30/VariableDefinition/44
      r41: 22/SelectionSetOpt/34 → 22/SelectionSet/35
      r42: 22/SelectionSet/35 → 22/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r43: 22/SelectionSetOpt/34 → ε
      r44: 24/ArgumentList/36 → 24/Argument/37
      r45: 24/Argument/37 → 24/NAME/38 38/COLON/49 49/Value/58
      r46: 24/ArgumentList/36 → 24/ArgumentList/36 36/Argument/48
      r47: 25/ArgumentsOpt/39 → 25/OPENING_PAREN/24 24/ArgumentList/36 36/CLOSING_PAREN/47
      r48: 25/ArgumentsOpt/39 → ε
      r49: 26/SelectionSet/40 → 26/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r50: 27/Directive/41 → 27/AT/29 29/NAME/42 42/ArgumentsOpt/51
      r51: 30/VariableDefinition/44 → 30/Variable/32 32/COLON/45 45/Type/52 52/DefaultValueOpt/67
      r52: 30/Variable/32 → 30/DOLLAR/33 33/NAME/46
      r53: 36/Argument/48 → 36/NAME/38 38/COLON/49 49/Value/58
      r54: 39/SelectionSetOpt/50 → 39/SelectionSet/35
      r55: 39/SelectionSet/35 → 39/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r56: 39/SelectionSetOpt/50 → ε
      r57: 42/ArgumentsOpt/51 → 42/OPENING_PAREN/24 24/ArgumentList/36 36/CLOSING_PAREN/47
      r58: 42/ArgumentsOpt/51 → ε
      r59: 45/Type/52 → 45/NamedType/53
      r60: 45/NamedType/53 → 45/NAME/54
      r61: 45/Type/52 → 45/ListType/55
      r62: 45/ListType/55 → 45/OPENING_BRACKET/56 56/Type/71 71/CLOSING_BRACKET/79
      r63: 45/Type/52 → 45/NonNullType/57
      r64: 45/NonNullType/57 → 45/ListType/55 55/BANG/70
      r65: 45/NonNullType/57 → 45/NamedType/53 53/BANG/69
      r66: 49/Value/58 → 49/Variable/59
      r67: 49/Variable/59 → 49/DOLLAR/33 33/NAME/46
      r68: 49/Value/58 → 49/NumberValue/60
      r69: 49/NumberValue/60 → 49/NUMBER/61
      r70: 49/Value/58 → 49/StringValue/62
      r71: 49/StringValue/62 → 49/STRING_VALUE/63
      r72: 49/StringValue/62 → 49/BLOCK_STRING_VALUE/64
      r73: 49/Value/58 → 49/NamedValue/65
      r74: 49/NamedValue/65 → 49/NAME/66
      r75: 52/DefaultValueOpt/67 → 52/EQUALS/68 68/ValueConst/72
      r76: 52/DefaultValueOpt/67 → ε
      r77: 56/Type/71 → 56/NamedType/53
      r78: 56/NamedType/53 → 56/NAME/54
      r79: 56/Type/71 → 56/ListType/55
      r80: 56/ListType/55 → 56/OPENING_BRACKET/56 56/Type/71 71/CLOSING_BRACKET/79
      r81: 56/Type/71 → 56/NonNullType/57
      r82: 56/NonNullType/57 → 56/ListType/55 55/BANG/70
      r83: 56/NonNullType/57 → 56/NamedType/53 53/BANG/69
      r84: 68/ValueConst/72 → 68/NumberValue/73
      r85: 68/NumberValue/73 → 68/NUMBER/61
      r86: 68/ValueConst/72 → 68/NamedValue/74
      r87: 68/NamedValue/74 → 68/NAME/66
      r88: 68/ValueConst/72 → 68/ListValueConst/75
      r89: 68/ListValueConst/75 → 68/OPENING_BRACKET/76 76/CLOSING_BRACKET/80
      r90: 68/ListValueConst/75 → 68/OPENING_BRACKET/76 76/ListValueConstList/81 81/CLOSING_BRACKET/87
      r91: 68/ValueConst/72 → 68/ObjectValueConst/77
      r92: 68/ObjectValueConst/77 → 68/OPENING_BRACE/78 78/CLOSING_BRACE/83
      r93: 68/ObjectValueConst/77 → 68/OPENING_BRACE/78 78/ObjectFieldConstList/84 84/CLOSING_BRACE/89
      r94: 76/ListValueConstList/81 → 76/ValueConst/82
      r95: 76/ValueConst/82 → 76/NumberValue/73
      r96: 76/NumberValue/73 → 76/NUMBER/61
      r97: 76/ValueConst/82 → 76/NamedValue/74
      r98: 76/NamedValue/74 → 76/NAME/66
      r99: 76/ValueConst/82 → 76/ListValueConst/75
      r100: 76/ListValueConst/75 → 76/OPENING_BRACKET/76 76/CLOSING_BRACKET/80
      r101: 76/ListValueConst/75 → 76/OPENING_BRACKET/76 76/ListValueConstList/81 81/CLOSING_BRACKET/87
      r102: 76/ValueConst/82 → 76/ObjectValueConst/77
      r103: 76/ObjectValueConst/77 → 76/OPENING_BRACE/78 78/CLOSING_BRACE/83
      r104: 76/ObjectValueConst/77 → 76/OPENING_BRACE/78 78/ObjectFieldConstList/84 84/CLOSING_BRACE/89
      r105: 76/ListValueConstList/81 → 76/ListValueConstList/81 81/ValueConst/88
      r106: 78/ObjectFieldConstList/84 → 78/ObjectFieldConst/85
      r107: 78/ObjectFieldConst/85 → 78/NAME/86 86/COLON/91 91/ValueConst/92
      r108: 78/ObjectFieldConstList/84 → 78/ObjectFieldConstList/84 84/ObjectFieldConst/90
      r109: 81/ValueConst/88 → 81/NumberValue/73
      r110: 81/NumberValue/73 → 81/NUMBER/61
      r111: 81/ValueConst/88 → 81/NamedValue/74
      r112: 81/NamedValue/74 → 81/NAME/66
      r113: 81/ValueConst/88 → 81/ListValueConst/75
      r114: 81/ListValueConst/75 → 81/OPENING_BRACKET/76 76/CLOSING_BRACKET/80
      r115: 81/ListValueConst/75 → 81/OPENING_BRACKET/76 76/ListValueConstList/81 81/CLOSING_BRACKET/87
      r116: 81/ValueConst/88 → 81/ObjectValueConst/77
      r117: 81/ObjectValueConst/77 → 81/OPENING_BRACE/78 78/CLOSING_BRACE/83
      r118: 81/ObjectValueConst/77 → 81/OPENING_BRACE/78 78/ObjectFieldConstList/84 84/CLOSING_BRACE/89
      r119: 84/ObjectFieldConst/90 → 84/NAME/86 86/COLON/91 91/ValueConst/92
      r120: 91/ValueConst/92 → 91/NumberValue/73
      r121: 91/NumberValue/73 → 91/NUMBER/61
      r122: 91/ValueConst/92 → 91/NamedValue/74
      r123: 91/NamedValue/74 → 91/NAME/66
      r124: 91/ValueConst/92 → 91/ListValueConst/75
      r125: 91/ListValueConst/75 → 91/OPENING_BRACKET/76 76/CLOSING_BRACKET/80
      r126: 91/ListValueConst/75 → 91/OPENING_BRACKET/76 76/ListValueConstList/81 81/CLOSING_BRACKET/87
      r127: 91/ValueConst/92 → 91/ObjectValueConst/77
      r128: 91/ObjectValueConst/77 → 91/OPENING_BRACE/78 78/CLOSING_BRACE/83
      r129: 91/ObjectValueConst/77 → 91/OPENING_BRACE/78 78/ObjectFieldConstList/84 84/CLOSING_BRACE/89
      "
    `);
  });
});
