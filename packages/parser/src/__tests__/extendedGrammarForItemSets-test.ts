import extendedGrammarForItemSets from '../extendedGrammarForItemSets';
import getItemSets from '../getItemSets';
import {subsetGrammar, toyGrammar} from './grammars';

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
});

