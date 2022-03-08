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
      %token 16/OPENING_BRACE/9
      %token 17/NAME/25
      %token 18/AT/29
      %token 19/DOLLAR/33
      %token 2/NAME/7
      %token 2/OPENING_BRACE/9
      %token 25/OPENING_BRACE/9
      %token 26/OPENING_BRACE/9
      %token 27/AT/29
      %token 29/NAME/37
      %token 30/CLOSING_PAREN/38
      %token 30/DOLLAR/33
      %token 32/COLON/40
      %token 33/NAME/41
      %token 40/NAME/44
      %token 40/OPENING_BRACKET/46
      %token 43/BANG/48
      %token 45/BANG/49
      %token 46/NAME/44
      %token 46/OPENING_BRACKET/46
      %token 50/CLOSING_BRACKET/51
      %token 6/NAME/12
      %token 9/NAME/16

      r0: 0/Document'/$ → 0/Document/1
      r1: 0/Document/1 → 0/DefinitionList/2
      r2: 0/DefinitionList/2 → 0/Definition/3
      r3: 0/Definition/3 → 0/ExecutableDefinition/4
      r4: 0/ExecutableDefinition/4 → 0/OperationDefinition/5
      r5: 0/OperationDefinition/5 → 0/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/18 18/DirectivesOpt/26 26/SelectionSet/35
      r6: 0/OperationType/6 → 0/NAME/7
      r7: 0/OperationDefinition/5 → 0/SelectionSet/8
      r8: 0/SelectionSet/8 → 0/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r9: 0/DefinitionList/2 → 0/DefinitionList/2 2/Definition/10
      r10: 2/Definition/10 → 2/ExecutableDefinition/4
      r11: 2/ExecutableDefinition/4 → 2/OperationDefinition/5
      r12: 2/OperationDefinition/5 → 2/OperationType/6 6/OperationNameOpt/11 11/VariableDefinitionsOpt/18 18/DirectivesOpt/26 26/SelectionSet/35
      r13: 2/OperationType/6 → 2/NAME/7
      r14: 2/OperationDefinition/5 → 2/SelectionSet/8
      r15: 2/SelectionSet/8 → 2/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r16: 6/OperationNameOpt/11 → 6/NAME/12
      r17: 6/OperationNameOpt/11 → ε
      r18: 9/SelectionList/13 → 9/Selection/14
      r19: 9/Selection/14 → 9/Field/15
      r20: 9/Field/15 → 9/NAME/16 16/SelectionSetOpt/22
      r21: 9/Field/15 → 9/Alias/17 17/NAME/25 25/SelectionSetOpt/34
      r22: 9/Alias/17 → 9/NAME/16 16/COLON/23
      r23: 9/SelectionList/13 → 9/SelectionList/13 13/Selection/21
      r24: 11/VariableDefinitionsOpt/18 → 11/OPENING_PAREN/19 19/VariableDefinitionList/30 30/CLOSING_PAREN/38
      r25: 11/VariableDefinitionsOpt/18 → ε
      r26: 13/Selection/21 → 13/Field/15
      r27: 13/Field/15 → 13/NAME/16 16/SelectionSetOpt/22
      r28: 13/Field/15 → 13/Alias/17 17/NAME/25 25/SelectionSetOpt/34
      r29: 13/Alias/17 → 13/NAME/16 16/COLON/23
      r30: 16/SelectionSetOpt/22 → 16/SelectionSet/24
      r31: 16/SelectionSet/24 → 16/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r32: 16/SelectionSetOpt/22 → ε
      r33: 18/DirectivesOpt/26 → 18/DirectiveList/27
      r34: 18/DirectiveList/27 → 18/Directive/28
      r35: 18/Directive/28 → 18/AT/29 29/NAME/37
      r36: 18/DirectiveList/27 → 18/DirectiveList/27 27/Directive/36
      r37: 18/DirectivesOpt/26 → ε
      r38: 19/VariableDefinitionList/30 → 19/VariableDefinition/31
      r39: 19/VariableDefinition/31 → 19/Variable/32 32/COLON/40 40/Type/42
      r40: 19/Variable/32 → 19/DOLLAR/33 33/NAME/41
      r41: 19/VariableDefinitionList/30 → 19/VariableDefinitionList/30 30/VariableDefinition/39
      r42: 25/SelectionSetOpt/34 → 25/SelectionSet/24
      r43: 25/SelectionSet/24 → 25/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r44: 25/SelectionSetOpt/34 → ε
      r45: 26/SelectionSet/35 → 26/OPENING_BRACE/9 9/SelectionList/13 13/CLOSING_BRACE/20
      r46: 27/Directive/36 → 27/AT/29 29/NAME/37
      r47: 30/VariableDefinition/39 → 30/Variable/32 32/COLON/40 40/Type/42
      r48: 30/Variable/32 → 30/DOLLAR/33 33/NAME/41
      r49: 40/Type/42 → 40/NamedType/43
      r50: 40/NamedType/43 → 40/NAME/44
      r51: 40/Type/42 → 40/ListType/45
      r52: 40/ListType/45 → 40/OPENING_BRACKET/46 46/Type/50 50/CLOSING_BRACKET/51
      r53: 40/Type/42 → 40/NonNullType/47
      r54: 40/NonNullType/47 → 40/ListType/45 45/BANG/49
      r55: 40/NonNullType/47 → 40/NamedType/43 43/BANG/48
      r56: 46/Type/50 → 46/NamedType/43
      r57: 46/NamedType/43 → 46/NAME/44
      r58: 46/Type/50 → 46/ListType/45
      r59: 46/ListType/45 → 46/OPENING_BRACKET/46 46/Type/50 50/CLOSING_BRACKET/51
      r60: 46/Type/50 → 46/NonNullType/47
      r61: 46/NonNullType/47 → 46/ListType/45 45/BANG/49
      r62: 46/NonNullType/47 → 46/NamedType/43 43/BANG/48
      "
    `);
  });
});
