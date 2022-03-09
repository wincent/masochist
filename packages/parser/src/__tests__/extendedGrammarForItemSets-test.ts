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
      %token 45/NAME/53
      %token 45/OPENING_BRACKET/55
      %token 49/DOLLAR/33
      %token 49/NAME/62
      %token 49/NUMBER/60
      %token 51/EQUALS/64
      %token 52/BANG/65
      %token 54/BANG/66
      %token 55/NAME/53
      %token 55/OPENING_BRACKET/55
      %token 6/NAME/12
      %token 64/NAME/62
      %token 64/NUMBER/60
      %token 64/OPENING_BRACE/74
      %token 64/OPENING_BRACKET/72
      %token 67/CLOSING_BRACKET/75
      %token 72/CLOSING_BRACKET/76
      %token 72/NAME/62
      %token 72/NUMBER/60
      %token 72/OPENING_BRACE/74
      %token 72/OPENING_BRACKET/72
      %token 74/CLOSING_BRACE/79
      %token 74/NAME/82
      %token 77/CLOSING_BRACKET/83
      %token 77/NAME/62
      %token 77/NUMBER/60
      %token 77/OPENING_BRACE/74
      %token 77/OPENING_BRACKET/72
      %token 80/CLOSING_BRACE/85
      %token 80/NAME/82
      %token 82/COLON/87
      %token 87/NAME/62
      %token 87/NUMBER/60
      %token 87/OPENING_BRACE/74
      %token 87/OPENING_BRACKET/72
      %token 9/NAME/16

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
      r34: 18/Directive/28 → 18/AT/29 29/NAME/42
      r35: 18/DirectiveList/27 → 18/DirectiveList/27 27/Directive/41
      r36: 18/DirectivesOpt/26 → ε
      r37: 19/VariableDefinitionList/30 → 19/VariableDefinition/31
      r38: 19/VariableDefinition/31 → 19/Variable/32 32/COLON/45 45/Type/51 51/DefaultValueOpt/63
      r39: 19/Variable/32 → 19/DOLLAR/33 33/NAME/46
      r40: 19/VariableDefinitionList/30 → 19/VariableDefinitionList/30 30/VariableDefinition/44
      r41: 22/SelectionSetOpt/34 → 22/SelectionSet/35
      r42: 22/SelectionSet/35 → 22/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r43: 22/SelectionSetOpt/34 → ε
      r44: 24/ArgumentList/36 → 24/Argument/37
      r45: 24/Argument/37 → 24/NAME/38 38/COLON/49 49/Value/57
      r46: 24/ArgumentList/36 → 24/ArgumentList/36 36/Argument/48
      r47: 25/ArgumentsOpt/39 → 25/OPENING_PAREN/24 24/ArgumentList/36 36/CLOSING_PAREN/47
      r48: 25/ArgumentsOpt/39 → ε
      r49: 26/SelectionSet/40 → 26/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r50: 27/Directive/41 → 27/AT/29 29/NAME/42
      r51: 30/VariableDefinition/44 → 30/Variable/32 32/COLON/45 45/Type/51 51/DefaultValueOpt/63
      r52: 30/Variable/32 → 30/DOLLAR/33 33/NAME/46
      r53: 36/Argument/48 → 36/NAME/38 38/COLON/49 49/Value/57
      r54: 39/SelectionSetOpt/50 → 39/SelectionSet/35
      r55: 39/SelectionSet/35 → 39/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r56: 39/SelectionSetOpt/50 → ε
      r57: 45/Type/51 → 45/NamedType/52
      r58: 45/NamedType/52 → 45/NAME/53
      r59: 45/Type/51 → 45/ListType/54
      r60: 45/ListType/54 → 45/OPENING_BRACKET/55 55/Type/67 67/CLOSING_BRACKET/75
      r61: 45/Type/51 → 45/NonNullType/56
      r62: 45/NonNullType/56 → 45/ListType/54 54/BANG/66
      r63: 45/NonNullType/56 → 45/NamedType/52 52/BANG/65
      r64: 49/Value/57 → 49/Variable/58
      r65: 49/Variable/58 → 49/DOLLAR/33 33/NAME/46
      r66: 49/Value/57 → 49/NumberValue/59
      r67: 49/NumberValue/59 → 49/NUMBER/60
      r68: 49/Value/57 → 49/NamedValue/61
      r69: 49/NamedValue/61 → 49/NAME/62
      r70: 51/DefaultValueOpt/63 → 51/EQUALS/64 64/ValueConst/68
      r71: 51/DefaultValueOpt/63 → ε
      r72: 55/Type/67 → 55/NamedType/52
      r73: 55/NamedType/52 → 55/NAME/53
      r74: 55/Type/67 → 55/ListType/54
      r75: 55/ListType/54 → 55/OPENING_BRACKET/55 55/Type/67 67/CLOSING_BRACKET/75
      r76: 55/Type/67 → 55/NonNullType/56
      r77: 55/NonNullType/56 → 55/ListType/54 54/BANG/66
      r78: 55/NonNullType/56 → 55/NamedType/52 52/BANG/65
      r79: 64/ValueConst/68 → 64/NumberValue/69
      r80: 64/NumberValue/69 → 64/NUMBER/60
      r81: 64/ValueConst/68 → 64/NamedValue/70
      r82: 64/NamedValue/70 → 64/NAME/62
      r83: 64/ValueConst/68 → 64/ListValueConst/71
      r84: 64/ListValueConst/71 → 64/OPENING_BRACKET/72 72/CLOSING_BRACKET/76
      r85: 64/ListValueConst/71 → 64/OPENING_BRACKET/72 72/ListValueConstList/77 77/CLOSING_BRACKET/83
      r86: 64/ValueConst/68 → 64/ObjectValueConst/73
      r87: 64/ObjectValueConst/73 → 64/OPENING_BRACE/74 74/CLOSING_BRACE/79
      r88: 64/ObjectValueConst/73 → 64/OPENING_BRACE/74 74/ObjectFieldConstList/80 80/CLOSING_BRACE/85
      r89: 72/ListValueConstList/77 → 72/ValueConst/78
      r90: 72/ValueConst/78 → 72/NumberValue/69
      r91: 72/NumberValue/69 → 72/NUMBER/60
      r92: 72/ValueConst/78 → 72/NamedValue/70
      r93: 72/NamedValue/70 → 72/NAME/62
      r94: 72/ValueConst/78 → 72/ListValueConst/71
      r95: 72/ListValueConst/71 → 72/OPENING_BRACKET/72 72/CLOSING_BRACKET/76
      r96: 72/ListValueConst/71 → 72/OPENING_BRACKET/72 72/ListValueConstList/77 77/CLOSING_BRACKET/83
      r97: 72/ValueConst/78 → 72/ObjectValueConst/73
      r98: 72/ObjectValueConst/73 → 72/OPENING_BRACE/74 74/CLOSING_BRACE/79
      r99: 72/ObjectValueConst/73 → 72/OPENING_BRACE/74 74/ObjectFieldConstList/80 80/CLOSING_BRACE/85
      r100: 72/ListValueConstList/77 → 72/ListValueConstList/77 77/ValueConst/84
      r101: 74/ObjectFieldConstList/80 → 74/ObjectFieldConst/81
      r102: 74/ObjectFieldConst/81 → 74/NAME/82 82/COLON/87 87/ValueConst/88
      r103: 74/ObjectFieldConstList/80 → 74/ObjectFieldConstList/80 80/ObjectFieldConst/86
      r104: 77/ValueConst/84 → 77/NumberValue/69
      r105: 77/NumberValue/69 → 77/NUMBER/60
      r106: 77/ValueConst/84 → 77/NamedValue/70
      r107: 77/NamedValue/70 → 77/NAME/62
      r108: 77/ValueConst/84 → 77/ListValueConst/71
      r109: 77/ListValueConst/71 → 77/OPENING_BRACKET/72 72/CLOSING_BRACKET/76
      r110: 77/ListValueConst/71 → 77/OPENING_BRACKET/72 72/ListValueConstList/77 77/CLOSING_BRACKET/83
      r111: 77/ValueConst/84 → 77/ObjectValueConst/73
      r112: 77/ObjectValueConst/73 → 77/OPENING_BRACE/74 74/CLOSING_BRACE/79
      r113: 77/ObjectValueConst/73 → 77/OPENING_BRACE/74 74/ObjectFieldConstList/80 80/CLOSING_BRACE/85
      r114: 80/ObjectFieldConst/86 → 80/NAME/82 82/COLON/87 87/ValueConst/88
      r115: 87/ValueConst/88 → 87/NumberValue/69
      r116: 87/NumberValue/69 → 87/NUMBER/60
      r117: 87/ValueConst/88 → 87/NamedValue/70
      r118: 87/NamedValue/70 → 87/NAME/62
      r119: 87/ValueConst/88 → 87/ListValueConst/71
      r120: 87/ListValueConst/71 → 87/OPENING_BRACKET/72 72/CLOSING_BRACKET/76
      r121: 87/ListValueConst/71 → 87/OPENING_BRACKET/72 72/ListValueConstList/77 77/CLOSING_BRACKET/83
      r122: 87/ValueConst/88 → 87/ObjectValueConst/73
      r123: 87/ObjectValueConst/73 → 87/OPENING_BRACE/74 74/CLOSING_BRACE/79
      r124: 87/ObjectValueConst/73 → 87/OPENING_BRACE/74 74/ObjectFieldConstList/80 80/CLOSING_BRACE/85
      "
    `);
  });
});
