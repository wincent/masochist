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
      %token 0/FRAGMENT/11
      %token 0/NAME/7
      %token 0/OPENING_BRACE/9
      %token 2/FRAGMENT/11
      %token 2/NAME/7
      %token 2/OPENING_BRACE/9
      %token 6/FRAGMENT/16
      %token 6/NAME/15
      %token 6/ON/17
      %token 9/ELLIPSIS/24
      %token 9/FRAGMENT/16
      %token 9/NAME/15
      %token 9/ON/17
      %token 11/NAME/27
      %token 13/OPENING_PAREN/29
      %token 18/CLOSING_BRACE/30
      %token 18/ELLIPSIS/24
      %token 18/FRAGMENT/16
      %token 18/NAME/15
      %token 18/ON/17
      %token 21/COLON/33
      %token 21/OPENING_PAREN/34
      %token 22/FRAGMENT/16
      %token 22/NAME/15
      %token 22/ON/17
      %token 24/NAME/27
      %token 24/ON/38
      %token 26/ON/39
      %token 28/AT/43
      %token 29/DOLLAR/47
      %token 32/AT/43
      %token 34/FRAGMENT/16
      %token 34/NAME/15
      %token 34/ON/17
      %token 35/OPENING_PAREN/34
      %token 36/AT/43
      %token 37/AT/43
      %token 38/FRAGMENT/16
      %token 38/NAME/15
      %token 38/ON/17
      %token 39/FRAGMENT/16
      %token 39/NAME/15
      %token 39/ON/17
      %token 40/OPENING_BRACE/9
      %token 41/AT/43
      %token 43/FRAGMENT/16
      %token 43/NAME/15
      %token 43/ON/17
      %token 44/CLOSING_PAREN/61
      %token 44/DOLLAR/47
      %token 46/COLON/63
      %token 47/FRAGMENT/16
      %token 47/NAME/15
      %token 47/ON/17
      %token 48/OPENING_BRACE/9
      %token 49/CLOSING_PAREN/67
      %token 49/FRAGMENT/16
      %token 49/NAME/15
      %token 49/ON/17
      %token 51/COLON/69
      %token 52/AT/43
      %token 54/OPENING_BRACE/9
      %token 57/AT/43
      %token 60/OPENING_PAREN/34
      %token 63/FRAGMENT/16
      %token 63/NAME/15
      %token 63/ON/17
      %token 63/OPENING_BRACKET/77
      %token 69/BLOCK_STRING_VALUE/85
      %token 69/DOLLAR/47
      %token 69/FRAGMENT/16
      %token 69/NAME/15
      %token 69/NUMBER/82
      %token 69/ON/17
      %token 69/OPENING_BRACE/91
      %token 69/OPENING_BRACKET/89
      %token 69/STRING_VALUE/84
      %token 70/OPENING_BRACE/9
      %token 72/OPENING_BRACE/9
      %token 74/EQUALS/95
      %token 75/BANG/96
      %token 76/BANG/97
      %token 77/FRAGMENT/16
      %token 77/NAME/15
      %token 77/ON/17
      %token 77/OPENING_BRACKET/77
      %token 89/BLOCK_STRING_VALUE/85
      %token 89/CLOSING_BRACKET/99
      %token 89/DOLLAR/47
      %token 89/FRAGMENT/16
      %token 89/NAME/15
      %token 89/NUMBER/82
      %token 89/ON/17
      %token 89/OPENING_BRACE/91
      %token 89/OPENING_BRACKET/89
      %token 89/STRING_VALUE/84
      %token 91/CLOSING_BRACE/102
      %token 91/FRAGMENT/16
      %token 91/NAME/15
      %token 91/ON/17
      %token 94/AT/109
      %token 95/BLOCK_STRING_VALUE/85
      %token 95/FRAGMENT/16
      %token 95/NAME/15
      %token 95/NUMBER/82
      %token 95/ON/17
      %token 95/OPENING_BRACE/117
      %token 95/OPENING_BRACKET/115
      %token 95/STRING_VALUE/84
      %token 98/CLOSING_BRACKET/118
      %token 100/BLOCK_STRING_VALUE/85
      %token 100/CLOSING_BRACKET/119
      %token 100/DOLLAR/47
      %token 100/FRAGMENT/16
      %token 100/NAME/15
      %token 100/NUMBER/82
      %token 100/ON/17
      %token 100/OPENING_BRACE/91
      %token 100/OPENING_BRACKET/89
      %token 100/STRING_VALUE/84
      %token 103/CLOSING_BRACE/121
      %token 103/FRAGMENT/16
      %token 103/NAME/15
      %token 103/ON/17
      %token 105/COLON/123
      %token 107/AT/109
      %token 109/FRAGMENT/16
      %token 109/NAME/15
      %token 109/ON/17
      %token 115/BLOCK_STRING_VALUE/85
      %token 115/CLOSING_BRACKET/126
      %token 115/FRAGMENT/16
      %token 115/NAME/15
      %token 115/NUMBER/82
      %token 115/ON/17
      %token 115/OPENING_BRACE/117
      %token 115/OPENING_BRACKET/115
      %token 115/STRING_VALUE/84
      %token 117/CLOSING_BRACE/129
      %token 117/FRAGMENT/16
      %token 117/NAME/15
      %token 117/ON/17
      %token 123/BLOCK_STRING_VALUE/85
      %token 123/DOLLAR/47
      %token 123/FRAGMENT/16
      %token 123/NAME/15
      %token 123/NUMBER/82
      %token 123/ON/17
      %token 123/OPENING_BRACE/91
      %token 123/OPENING_BRACKET/89
      %token 123/STRING_VALUE/84
      %token 125/OPENING_PAREN/135
      %token 127/BLOCK_STRING_VALUE/85
      %token 127/CLOSING_BRACKET/136
      %token 127/FRAGMENT/16
      %token 127/NAME/15
      %token 127/NUMBER/82
      %token 127/ON/17
      %token 127/OPENING_BRACE/117
      %token 127/OPENING_BRACKET/115
      %token 127/STRING_VALUE/84
      %token 130/CLOSING_BRACE/138
      %token 130/FRAGMENT/16
      %token 130/NAME/15
      %token 130/ON/17
      %token 132/COLON/140
      %token 135/FRAGMENT/16
      %token 135/NAME/15
      %token 135/ON/17
      %token 140/BLOCK_STRING_VALUE/85
      %token 140/FRAGMENT/16
      %token 140/NAME/15
      %token 140/NUMBER/82
      %token 140/ON/17
      %token 140/OPENING_BRACE/117
      %token 140/OPENING_BRACKET/115
      %token 140/STRING_VALUE/84
      %token 141/CLOSING_PAREN/145
      %token 141/FRAGMENT/16
      %token 141/NAME/15
      %token 141/ON/17
      %token 143/COLON/147
      %token 147/BLOCK_STRING_VALUE/85
      %token 147/FRAGMENT/16
      %token 147/NAME/15
      %token 147/NUMBER/82
      %token 147/ON/17
      %token 147/OPENING_BRACE/117
      %token 147/OPENING_BRACKET/115
      %token 147/STRING_VALUE/84

      r0: 0/Document'/$ → 0/Document/1
      r1: 0/Document/1 → 0/DefinitionList/2
      r2: 0/DefinitionList/2 → 0/Definition/3
      r3: 0/Definition/3 → 0/ExecutableDefinition/4
      r4: 0/ExecutableDefinition/4 → 0/OperationDefinition/5
      r5: 0/OperationDefinition/5 → 0/OperationType/6 6/OperationNameOpt/13 13/VariableDefinitionsOpt/28 28/DirectivesOpt/40 40/SelectionSet/58
      r6: 0/OperationType/6 → 0/NAME/7
      r7: 0/OperationDefinition/5 → 0/SelectionSet/8
      r8: 0/SelectionSet/8 → 0/OPENING_BRACE/9 9/SelectionList/18 18/CLOSING_BRACE/30
      r9: 0/Definition/3 → 0/FragmentDefinition/10
      r10: 0/FragmentDefinition/10 → 0/FRAGMENT/11 11/FragmentName/26 26/ON/39 39/NamedType/57 57/DirectivesOpt/72 72/SelectionSet/93
      r11: 0/DefinitionList/2 → 0/DefinitionList/2 2/Definition/12
      r12: 2/Definition/12 → 2/ExecutableDefinition/4
      r13: 2/ExecutableDefinition/4 → 2/OperationDefinition/5
      r14: 2/OperationDefinition/5 → 2/OperationType/6 6/OperationNameOpt/13 13/VariableDefinitionsOpt/28 28/DirectivesOpt/40 40/SelectionSet/58
      r15: 2/OperationType/6 → 2/NAME/7
      r16: 2/OperationDefinition/5 → 2/SelectionSet/8
      r17: 2/SelectionSet/8 → 2/OPENING_BRACE/9 9/SelectionList/18 18/CLOSING_BRACE/30
      r18: 2/Definition/12 → 2/FragmentDefinition/10
      r19: 2/FragmentDefinition/10 → 2/FRAGMENT/11 11/FragmentName/26 26/ON/39 39/NamedType/57 57/DirectivesOpt/72 72/SelectionSet/93
      r20: 6/OperationNameOpt/13 → 6/Name/14
      r21: 6/Name/14 → 6/NAME/15
      r22: 6/Name/14 → 6/FRAGMENT/16
      r23: 6/Name/14 → 6/ON/17
      r24: 6/OperationNameOpt/13 → ε
      r25: 9/SelectionList/18 → 9/Selection/19
      r26: 9/Selection/19 → 9/Field/20
      r27: 9/Field/20 → 9/Name/21 21/ArgumentsOpt/32 32/DirectivesOpt/48 48/SelectionSetOpt/65
      r28: 9/Name/21 → 9/NAME/15
      r29: 9/Name/21 → 9/FRAGMENT/16
      r30: 9/Name/21 → 9/ON/17
      r31: 9/Field/20 → 9/Alias/22 22/Name/35 35/ArgumentsOpt/52 52/DirectivesOpt/70 70/SelectionSetOpt/92
      r32: 9/Alias/22 → 9/Name/21 21/COLON/33
      r33: 9/Selection/19 → 9/FragmentSpread/23
      r34: 9/FragmentSpread/23 → 9/ELLIPSIS/24 24/FragmentName/36 36/DirectivesOpt/53
      r35: 9/Selection/19 → 9/InlineFragment/25
      r36: 9/InlineFragment/25 → 9/ELLIPSIS/24 24/TypeConditionOpt/37 37/DirectivesOpt/54 54/SelectionSet/71
      r37: 9/SelectionList/18 → 9/SelectionList/18 18/Selection/31
      r38: 11/FragmentName/26 → 11/NAME/27
      r39: 13/VariableDefinitionsOpt/28 → 13/OPENING_PAREN/29 29/VariableDefinitionList/44 44/CLOSING_PAREN/61
      r40: 13/VariableDefinitionsOpt/28 → ε
      r41: 18/Selection/31 → 18/Field/20
      r42: 18/Field/20 → 18/Name/21 21/ArgumentsOpt/32 32/DirectivesOpt/48 48/SelectionSetOpt/65
      r43: 18/Name/21 → 18/NAME/15
      r44: 18/Name/21 → 18/FRAGMENT/16
      r45: 18/Name/21 → 18/ON/17
      r46: 18/Field/20 → 18/Alias/22 22/Name/35 35/ArgumentsOpt/52 52/DirectivesOpt/70 70/SelectionSetOpt/92
      r47: 18/Alias/22 → 18/Name/21 21/COLON/33
      r48: 18/Selection/31 → 18/FragmentSpread/23
      r49: 18/FragmentSpread/23 → 18/ELLIPSIS/24 24/FragmentName/36 36/DirectivesOpt/53
      r50: 18/Selection/31 → 18/InlineFragment/25
      r51: 18/InlineFragment/25 → 18/ELLIPSIS/24 24/TypeConditionOpt/37 37/DirectivesOpt/54 54/SelectionSet/71
      r52: 21/ArgumentsOpt/32 → 21/OPENING_PAREN/34 34/ArgumentList/49 49/CLOSING_PAREN/67
      r53: 21/ArgumentsOpt/32 → ε
      r54: 22/Name/35 → 22/NAME/15
      r55: 22/Name/35 → 22/FRAGMENT/16
      r56: 22/Name/35 → 22/ON/17
      r57: 24/FragmentName/36 → 24/NAME/27
      r58: 24/TypeConditionOpt/37 → 24/ON/38 38/NamedType/55
      r59: 24/TypeConditionOpt/37 → ε
      r60: 28/DirectivesOpt/40 → 28/DirectiveList/41
      r61: 28/DirectiveList/41 → 28/Directive/42
      r62: 28/Directive/42 → 28/AT/43 43/Name/60 60/ArgumentsOpt/73
      r63: 28/DirectiveList/41 → 28/DirectiveList/41 41/Directive/59
      r64: 28/DirectivesOpt/40 → ε
      r65: 29/VariableDefinitionList/44 → 29/VariableDefinition/45
      r66: 29/VariableDefinition/45 → 29/Variable/46 46/COLON/63 63/Type/74 74/DefaultValueOpt/94 94/DirectivesConstOpt/106
      r67: 29/Variable/46 → 29/DOLLAR/47 47/Name/64
      r68: 29/VariableDefinitionList/44 → 29/VariableDefinitionList/44 44/VariableDefinition/62
      r69: 32/DirectivesOpt/48 → 32/DirectiveList/41
      r70: 32/DirectiveList/41 → 32/Directive/42
      r71: 32/Directive/42 → 32/AT/43 43/Name/60 60/ArgumentsOpt/73
      r72: 32/DirectiveList/41 → 32/DirectiveList/41 41/Directive/59
      r73: 32/DirectivesOpt/48 → ε
      r74: 34/ArgumentList/49 → 34/Argument/50
      r75: 34/Argument/50 → 34/Name/51 51/COLON/69 69/Value/79
      r76: 34/Name/51 → 34/NAME/15
      r77: 34/Name/51 → 34/FRAGMENT/16
      r78: 34/Name/51 → 34/ON/17
      r79: 34/ArgumentList/49 → 34/ArgumentList/49 49/Argument/68
      r80: 35/ArgumentsOpt/52 → 35/OPENING_PAREN/34 34/ArgumentList/49 49/CLOSING_PAREN/67
      r81: 35/ArgumentsOpt/52 → ε
      r82: 36/DirectivesOpt/53 → 36/DirectiveList/41
      r83: 36/DirectiveList/41 → 36/Directive/42
      r84: 36/Directive/42 → 36/AT/43 43/Name/60 60/ArgumentsOpt/73
      r85: 36/DirectiveList/41 → 36/DirectiveList/41 41/Directive/59
      r86: 36/DirectivesOpt/53 → ε
      r87: 37/DirectivesOpt/54 → 37/DirectiveList/41
      r88: 37/DirectiveList/41 → 37/Directive/42
      r89: 37/Directive/42 → 37/AT/43 43/Name/60 60/ArgumentsOpt/73
      r90: 37/DirectiveList/41 → 37/DirectiveList/41 41/Directive/59
      r91: 37/DirectivesOpt/54 → ε
      r92: 38/NamedType/55 → 38/Name/56
      r93: 38/Name/56 → 38/NAME/15
      r94: 38/Name/56 → 38/FRAGMENT/16
      r95: 38/Name/56 → 38/ON/17
      r96: 39/NamedType/57 → 39/Name/56
      r97: 39/Name/56 → 39/NAME/15
      r98: 39/Name/56 → 39/FRAGMENT/16
      r99: 39/Name/56 → 39/ON/17
      r100: 40/SelectionSet/58 → 40/OPENING_BRACE/9 9/SelectionList/18 18/CLOSING_BRACE/30
      r101: 41/Directive/59 → 41/AT/43 43/Name/60 60/ArgumentsOpt/73
      r102: 43/Name/60 → 43/NAME/15
      r103: 43/Name/60 → 43/FRAGMENT/16
      r104: 43/Name/60 → 43/ON/17
      r105: 44/VariableDefinition/62 → 44/Variable/46 46/COLON/63 63/Type/74 74/DefaultValueOpt/94 94/DirectivesConstOpt/106
      r106: 44/Variable/46 → 44/DOLLAR/47 47/Name/64
      r107: 47/Name/64 → 47/NAME/15
      r108: 47/Name/64 → 47/FRAGMENT/16
      r109: 47/Name/64 → 47/ON/17
      r110: 48/SelectionSetOpt/65 → 48/SelectionSet/66
      r111: 48/SelectionSet/66 → 48/OPENING_BRACE/9 9/SelectionList/18 18/CLOSING_BRACE/30
      r112: 48/SelectionSetOpt/65 → ε
      r113: 49/Argument/68 → 49/Name/51 51/COLON/69 69/Value/79
      r114: 49/Name/51 → 49/NAME/15
      r115: 49/Name/51 → 49/FRAGMENT/16
      r116: 49/Name/51 → 49/ON/17
      r117: 52/DirectivesOpt/70 → 52/DirectiveList/41
      r118: 52/DirectiveList/41 → 52/Directive/42
      r119: 52/Directive/42 → 52/AT/43 43/Name/60 60/ArgumentsOpt/73
      r120: 52/DirectiveList/41 → 52/DirectiveList/41 41/Directive/59
      r121: 52/DirectivesOpt/70 → ε
      r122: 54/SelectionSet/71 → 54/OPENING_BRACE/9 9/SelectionList/18 18/CLOSING_BRACE/30
      r123: 57/DirectivesOpt/72 → 57/DirectiveList/41
      r124: 57/DirectiveList/41 → 57/Directive/42
      r125: 57/Directive/42 → 57/AT/43 43/Name/60 60/ArgumentsOpt/73
      r126: 57/DirectiveList/41 → 57/DirectiveList/41 41/Directive/59
      r127: 57/DirectivesOpt/72 → ε
      r128: 60/ArgumentsOpt/73 → 60/OPENING_PAREN/34 34/ArgumentList/49 49/CLOSING_PAREN/67
      r129: 60/ArgumentsOpt/73 → ε
      r130: 63/Type/74 → 63/NamedType/75
      r131: 63/NamedType/75 → 63/Name/56
      r132: 63/Name/56 → 63/NAME/15
      r133: 63/Name/56 → 63/FRAGMENT/16
      r134: 63/Name/56 → 63/ON/17
      r135: 63/Type/74 → 63/ListType/76
      r136: 63/ListType/76 → 63/OPENING_BRACKET/77 77/Type/98 98/CLOSING_BRACKET/118
      r137: 63/Type/74 → 63/NonNullType/78
      r138: 63/NonNullType/78 → 63/ListType/76 76/BANG/97
      r139: 63/NonNullType/78 → 63/NamedType/75 75/BANG/96
      r140: 69/Value/79 → 69/Variable/80
      r141: 69/Variable/80 → 69/DOLLAR/47 47/Name/64
      r142: 69/Value/79 → 69/NumberValue/81
      r143: 69/NumberValue/81 → 69/NUMBER/82
      r144: 69/Value/79 → 69/StringValue/83
      r145: 69/StringValue/83 → 69/STRING_VALUE/84
      r146: 69/StringValue/83 → 69/BLOCK_STRING_VALUE/85
      r147: 69/Value/79 → 69/NamedValue/86
      r148: 69/NamedValue/86 → 69/Name/87
      r149: 69/Name/87 → 69/NAME/15
      r150: 69/Name/87 → 69/FRAGMENT/16
      r151: 69/Name/87 → 69/ON/17
      r152: 69/Value/79 → 69/ListValue/88
      r153: 69/ListValue/88 → 69/OPENING_BRACKET/89 89/CLOSING_BRACKET/99
      r154: 69/ListValue/88 → 69/OPENING_BRACKET/89 89/ListValueList/100 100/CLOSING_BRACKET/119
      r155: 69/Value/79 → 69/ObjectValue/90
      r156: 69/ObjectValue/90 → 69/OPENING_BRACE/91 91/CLOSING_BRACE/102
      r157: 69/ObjectValue/90 → 69/OPENING_BRACE/91 91/ObjectFieldList/103 103/CLOSING_BRACE/121
      r158: 70/SelectionSetOpt/92 → 70/SelectionSet/66
      r159: 70/SelectionSet/66 → 70/OPENING_BRACE/9 9/SelectionList/18 18/CLOSING_BRACE/30
      r160: 70/SelectionSetOpt/92 → ε
      r161: 72/SelectionSet/93 → 72/OPENING_BRACE/9 9/SelectionList/18 18/CLOSING_BRACE/30
      r162: 74/DefaultValueOpt/94 → 74/EQUALS/95 95/ValueConst/110
      r163: 74/DefaultValueOpt/94 → ε
      r164: 77/Type/98 → 77/NamedType/75
      r165: 77/NamedType/75 → 77/Name/56
      r166: 77/Name/56 → 77/NAME/15
      r167: 77/Name/56 → 77/FRAGMENT/16
      r168: 77/Name/56 → 77/ON/17
      r169: 77/Type/98 → 77/ListType/76
      r170: 77/ListType/76 → 77/OPENING_BRACKET/77 77/Type/98 98/CLOSING_BRACKET/118
      r171: 77/Type/98 → 77/NonNullType/78
      r172: 77/NonNullType/78 → 77/ListType/76 76/BANG/97
      r173: 77/NonNullType/78 → 77/NamedType/75 75/BANG/96
      r174: 89/ListValueList/100 → 89/Value/101
      r175: 89/Value/101 → 89/Variable/80
      r176: 89/Variable/80 → 89/DOLLAR/47 47/Name/64
      r177: 89/Value/101 → 89/NumberValue/81
      r178: 89/NumberValue/81 → 89/NUMBER/82
      r179: 89/Value/101 → 89/StringValue/83
      r180: 89/StringValue/83 → 89/STRING_VALUE/84
      r181: 89/StringValue/83 → 89/BLOCK_STRING_VALUE/85
      r182: 89/Value/101 → 89/NamedValue/86
      r183: 89/NamedValue/86 → 89/Name/87
      r184: 89/Name/87 → 89/NAME/15
      r185: 89/Name/87 → 89/FRAGMENT/16
      r186: 89/Name/87 → 89/ON/17
      r187: 89/Value/101 → 89/ListValue/88
      r188: 89/ListValue/88 → 89/OPENING_BRACKET/89 89/CLOSING_BRACKET/99
      r189: 89/ListValue/88 → 89/OPENING_BRACKET/89 89/ListValueList/100 100/CLOSING_BRACKET/119
      r190: 89/Value/101 → 89/ObjectValue/90
      r191: 89/ObjectValue/90 → 89/OPENING_BRACE/91 91/CLOSING_BRACE/102
      r192: 89/ObjectValue/90 → 89/OPENING_BRACE/91 91/ObjectFieldList/103 103/CLOSING_BRACE/121
      r193: 89/ListValueList/100 → 89/ListValueList/100 100/Value/120
      r194: 91/ObjectFieldList/103 → 91/ObjectField/104
      r195: 91/ObjectField/104 → 91/Name/105 105/COLON/123 123/Value/133
      r196: 91/Name/105 → 91/NAME/15
      r197: 91/Name/105 → 91/FRAGMENT/16
      r198: 91/Name/105 → 91/ON/17
      r199: 91/ObjectFieldList/103 → 91/ObjectFieldList/103 103/ObjectField/122
      r200: 94/DirectivesConstOpt/106 → 94/DirectiveConstList/107
      r201: 94/DirectiveConstList/107 → 94/DirectiveConst/108
      r202: 94/DirectiveConst/108 → 94/AT/109 109/Name/125 125/ArgumentsConstOpt/134
      r203: 94/DirectiveConstList/107 → 94/DirectiveConstList/107 107/DirectiveConst/124
      r204: 94/DirectivesConstOpt/106 → ε
      r205: 95/ValueConst/110 → 95/NumberValue/111
      r206: 95/NumberValue/111 → 95/NUMBER/82
      r207: 95/ValueConst/110 → 95/StringValue/112
      r208: 95/StringValue/112 → 95/STRING_VALUE/84
      r209: 95/StringValue/112 → 95/BLOCK_STRING_VALUE/85
      r210: 95/ValueConst/110 → 95/NamedValue/113
      r211: 95/NamedValue/113 → 95/Name/87
      r212: 95/Name/87 → 95/NAME/15
      r213: 95/Name/87 → 95/FRAGMENT/16
      r214: 95/Name/87 → 95/ON/17
      r215: 95/ValueConst/110 → 95/ListValueConst/114
      r216: 95/ListValueConst/114 → 95/OPENING_BRACKET/115 115/CLOSING_BRACKET/126
      r217: 95/ListValueConst/114 → 95/OPENING_BRACKET/115 115/ListValueConstList/127 127/CLOSING_BRACKET/136
      r218: 95/ValueConst/110 → 95/ObjectValueConst/116
      r219: 95/ObjectValueConst/116 → 95/OPENING_BRACE/117 117/CLOSING_BRACE/129
      r220: 95/ObjectValueConst/116 → 95/OPENING_BRACE/117 117/ObjectFieldConstList/130 130/CLOSING_BRACE/138
      r221: 100/Value/120 → 100/Variable/80
      r222: 100/Variable/80 → 100/DOLLAR/47 47/Name/64
      r223: 100/Value/120 → 100/NumberValue/81
      r224: 100/NumberValue/81 → 100/NUMBER/82
      r225: 100/Value/120 → 100/StringValue/83
      r226: 100/StringValue/83 → 100/STRING_VALUE/84
      r227: 100/StringValue/83 → 100/BLOCK_STRING_VALUE/85
      r228: 100/Value/120 → 100/NamedValue/86
      r229: 100/NamedValue/86 → 100/Name/87
      r230: 100/Name/87 → 100/NAME/15
      r231: 100/Name/87 → 100/FRAGMENT/16
      r232: 100/Name/87 → 100/ON/17
      r233: 100/Value/120 → 100/ListValue/88
      r234: 100/ListValue/88 → 100/OPENING_BRACKET/89 89/CLOSING_BRACKET/99
      r235: 100/ListValue/88 → 100/OPENING_BRACKET/89 89/ListValueList/100 100/CLOSING_BRACKET/119
      r236: 100/Value/120 → 100/ObjectValue/90
      r237: 100/ObjectValue/90 → 100/OPENING_BRACE/91 91/CLOSING_BRACE/102
      r238: 100/ObjectValue/90 → 100/OPENING_BRACE/91 91/ObjectFieldList/103 103/CLOSING_BRACE/121
      r239: 103/ObjectField/122 → 103/Name/105 105/COLON/123 123/Value/133
      r240: 103/Name/105 → 103/NAME/15
      r241: 103/Name/105 → 103/FRAGMENT/16
      r242: 103/Name/105 → 103/ON/17
      r243: 107/DirectiveConst/124 → 107/AT/109 109/Name/125 125/ArgumentsConstOpt/134
      r244: 109/Name/125 → 109/NAME/15
      r245: 109/Name/125 → 109/FRAGMENT/16
      r246: 109/Name/125 → 109/ON/17
      r247: 115/ListValueConstList/127 → 115/ValueConst/128
      r248: 115/ValueConst/128 → 115/NumberValue/111
      r249: 115/NumberValue/111 → 115/NUMBER/82
      r250: 115/ValueConst/128 → 115/StringValue/112
      r251: 115/StringValue/112 → 115/STRING_VALUE/84
      r252: 115/StringValue/112 → 115/BLOCK_STRING_VALUE/85
      r253: 115/ValueConst/128 → 115/NamedValue/113
      r254: 115/NamedValue/113 → 115/Name/87
      r255: 115/Name/87 → 115/NAME/15
      r256: 115/Name/87 → 115/FRAGMENT/16
      r257: 115/Name/87 → 115/ON/17
      r258: 115/ValueConst/128 → 115/ListValueConst/114
      r259: 115/ListValueConst/114 → 115/OPENING_BRACKET/115 115/CLOSING_BRACKET/126
      r260: 115/ListValueConst/114 → 115/OPENING_BRACKET/115 115/ListValueConstList/127 127/CLOSING_BRACKET/136
      r261: 115/ValueConst/128 → 115/ObjectValueConst/116
      r262: 115/ObjectValueConst/116 → 115/OPENING_BRACE/117 117/CLOSING_BRACE/129
      r263: 115/ObjectValueConst/116 → 115/OPENING_BRACE/117 117/ObjectFieldConstList/130 130/CLOSING_BRACE/138
      r264: 115/ListValueConstList/127 → 115/ListValueConstList/127 127/ValueConst/137
      r265: 117/ObjectFieldConstList/130 → 117/ObjectFieldConst/131
      r266: 117/ObjectFieldConst/131 → 117/Name/132 132/COLON/140 140/ValueConst/144
      r267: 117/Name/132 → 117/NAME/15
      r268: 117/Name/132 → 117/FRAGMENT/16
      r269: 117/Name/132 → 117/ON/17
      r270: 117/ObjectFieldConstList/130 → 117/ObjectFieldConstList/130 130/ObjectFieldConst/139
      r271: 123/Value/133 → 123/Variable/80
      r272: 123/Variable/80 → 123/DOLLAR/47 47/Name/64
      r273: 123/Value/133 → 123/NumberValue/81
      r274: 123/NumberValue/81 → 123/NUMBER/82
      r275: 123/Value/133 → 123/StringValue/83
      r276: 123/StringValue/83 → 123/STRING_VALUE/84
      r277: 123/StringValue/83 → 123/BLOCK_STRING_VALUE/85
      r278: 123/Value/133 → 123/NamedValue/86
      r279: 123/NamedValue/86 → 123/Name/87
      r280: 123/Name/87 → 123/NAME/15
      r281: 123/Name/87 → 123/FRAGMENT/16
      r282: 123/Name/87 → 123/ON/17
      r283: 123/Value/133 → 123/ListValue/88
      r284: 123/ListValue/88 → 123/OPENING_BRACKET/89 89/CLOSING_BRACKET/99
      r285: 123/ListValue/88 → 123/OPENING_BRACKET/89 89/ListValueList/100 100/CLOSING_BRACKET/119
      r286: 123/Value/133 → 123/ObjectValue/90
      r287: 123/ObjectValue/90 → 123/OPENING_BRACE/91 91/CLOSING_BRACE/102
      r288: 123/ObjectValue/90 → 123/OPENING_BRACE/91 91/ObjectFieldList/103 103/CLOSING_BRACE/121
      r289: 125/ArgumentsConstOpt/134 → 125/OPENING_PAREN/135 135/ArgumentConstList/141 141/CLOSING_PAREN/145
      r290: 125/ArgumentsConstOpt/134 → ε
      r291: 127/ValueConst/137 → 127/NumberValue/111
      r292: 127/NumberValue/111 → 127/NUMBER/82
      r293: 127/ValueConst/137 → 127/StringValue/112
      r294: 127/StringValue/112 → 127/STRING_VALUE/84
      r295: 127/StringValue/112 → 127/BLOCK_STRING_VALUE/85
      r296: 127/ValueConst/137 → 127/NamedValue/113
      r297: 127/NamedValue/113 → 127/Name/87
      r298: 127/Name/87 → 127/NAME/15
      r299: 127/Name/87 → 127/FRAGMENT/16
      r300: 127/Name/87 → 127/ON/17
      r301: 127/ValueConst/137 → 127/ListValueConst/114
      r302: 127/ListValueConst/114 → 127/OPENING_BRACKET/115 115/CLOSING_BRACKET/126
      r303: 127/ListValueConst/114 → 127/OPENING_BRACKET/115 115/ListValueConstList/127 127/CLOSING_BRACKET/136
      r304: 127/ValueConst/137 → 127/ObjectValueConst/116
      r305: 127/ObjectValueConst/116 → 127/OPENING_BRACE/117 117/CLOSING_BRACE/129
      r306: 127/ObjectValueConst/116 → 127/OPENING_BRACE/117 117/ObjectFieldConstList/130 130/CLOSING_BRACE/138
      r307: 130/ObjectFieldConst/139 → 130/Name/132 132/COLON/140 140/ValueConst/144
      r308: 130/Name/132 → 130/NAME/15
      r309: 130/Name/132 → 130/FRAGMENT/16
      r310: 130/Name/132 → 130/ON/17
      r311: 135/ArgumentConstList/141 → 135/ArgumentConst/142
      r312: 135/ArgumentConst/142 → 135/Name/143 143/COLON/147 147/ValueConst/148
      r313: 135/Name/143 → 135/NAME/15
      r314: 135/Name/143 → 135/FRAGMENT/16
      r315: 135/Name/143 → 135/ON/17
      r316: 135/ArgumentConstList/141 → 135/ArgumentConstList/141 141/ArgumentConst/146
      r317: 140/ValueConst/144 → 140/NumberValue/111
      r318: 140/NumberValue/111 → 140/NUMBER/82
      r319: 140/ValueConst/144 → 140/StringValue/112
      r320: 140/StringValue/112 → 140/STRING_VALUE/84
      r321: 140/StringValue/112 → 140/BLOCK_STRING_VALUE/85
      r322: 140/ValueConst/144 → 140/NamedValue/113
      r323: 140/NamedValue/113 → 140/Name/87
      r324: 140/Name/87 → 140/NAME/15
      r325: 140/Name/87 → 140/FRAGMENT/16
      r326: 140/Name/87 → 140/ON/17
      r327: 140/ValueConst/144 → 140/ListValueConst/114
      r328: 140/ListValueConst/114 → 140/OPENING_BRACKET/115 115/CLOSING_BRACKET/126
      r329: 140/ListValueConst/114 → 140/OPENING_BRACKET/115 115/ListValueConstList/127 127/CLOSING_BRACKET/136
      r330: 140/ValueConst/144 → 140/ObjectValueConst/116
      r331: 140/ObjectValueConst/116 → 140/OPENING_BRACE/117 117/CLOSING_BRACE/129
      r332: 140/ObjectValueConst/116 → 140/OPENING_BRACE/117 117/ObjectFieldConstList/130 130/CLOSING_BRACE/138
      r333: 141/ArgumentConst/146 → 141/Name/143 143/COLON/147 147/ValueConst/148
      r334: 141/Name/143 → 141/NAME/15
      r335: 141/Name/143 → 141/FRAGMENT/16
      r336: 141/Name/143 → 141/ON/17
      r337: 147/ValueConst/148 → 147/NumberValue/111
      r338: 147/NumberValue/111 → 147/NUMBER/82
      r339: 147/ValueConst/148 → 147/StringValue/112
      r340: 147/StringValue/112 → 147/STRING_VALUE/84
      r341: 147/StringValue/112 → 147/BLOCK_STRING_VALUE/85
      r342: 147/ValueConst/148 → 147/NamedValue/113
      r343: 147/NamedValue/113 → 147/Name/87
      r344: 147/Name/87 → 147/NAME/15
      r345: 147/Name/87 → 147/FRAGMENT/16
      r346: 147/Name/87 → 147/ON/17
      r347: 147/ValueConst/148 → 147/ListValueConst/114
      r348: 147/ListValueConst/114 → 147/OPENING_BRACKET/115 115/CLOSING_BRACKET/126
      r349: 147/ListValueConst/114 → 147/OPENING_BRACKET/115 115/ListValueConstList/127 127/CLOSING_BRACKET/136
      r350: 147/ValueConst/148 → 147/ObjectValueConst/116
      r351: 147/ObjectValueConst/116 → 147/OPENING_BRACE/117 117/CLOSING_BRACE/129
      r352: 147/ObjectValueConst/116 → 147/OPENING_BRACE/117 117/ObjectFieldConstList/130 130/CLOSING_BRACE/138
      "
    `);
  });
});
