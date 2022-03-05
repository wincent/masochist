import {grammar} from '..';
import extendedGrammarForItemSets from '../extendedGrammarForItemSets';
import getFirstSets from '../getFirstSets';
import getItemSets from '../getItemSets';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

describe('getFirstSets()', () => {
  it('produces first sets for the toy grammar', () => {
    expect(getFirstSets(toyGrammar)).toEqual({
      E: new Set(['star', 'x']),
      N: new Set(['star', 'x']),
      S: new Set(['star', 'x']),
      V: new Set(['star', 'x']),
    });
  });

  it('produces first sets for the extended toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, toyGrammar);
    expect(getFirstSets(extendedGrammar)).toEqual({
      '0/E/6': new Set(['0/star/5', '0/x/4']),
      '0/N/2': new Set(['0/star/5', '0/x/4']),
      "0/S'/$": new Set(['0/star/5', '0/x/4']),
      '0/S/1': new Set(['0/star/5', '0/x/4']),
      '0/V/3': new Set(['0/star/5', '0/x/4']),
      '5/E/8': new Set(['5/star/5', '5/x/4']),
      '5/V/9': new Set(['5/star/5', '5/x/4']),
      '7/E/10': new Set(['7/star/5', '7/x/4']),
      '7/V/9': new Set(['7/star/5', '7/x/4']),
    });
  });

  it('produces first sets for the subset grammar', () => {
    expect(getFirstSets(subsetGrammar)).toEqual({
      Definition: new Set(['OPENING_BRACE']),
      DefinitionList: new Set(['OPENING_BRACE']),
      Document: new Set(['OPENING_BRACE']),
      ExecutableDefinition: new Set(['OPENING_BRACE']),
      Field: new Set(['NAME']),
      OperationDefinition: new Set(['OPENING_BRACE']),
      Selection: new Set(['NAME']),
      SelectionList: new Set(['NAME']),
      SelectionSet: new Set(['OPENING_BRACE']),
    });
  });

  it('produces first sets for the extended subset grammar', () => {
    const itemSets = getItemSets(subsetGrammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, subsetGrammar);
    expect(getFirstSets(extendedGrammar)).toEqual({
      '0/Definition/3': new Set(['0/OPENING_BRACE/7']),
      '0/DefinitionList/2': new Set(['0/OPENING_BRACE/7']),
      "0/Document'/$": new Set(['0/OPENING_BRACE/7']),
      '0/Document/1': new Set(['0/OPENING_BRACE/7']),
      '0/ExecutableDefinition/4': new Set(['0/OPENING_BRACE/7']),
      '0/OperationDefinition/5': new Set(['0/OPENING_BRACE/7']),
      '0/SelectionSet/6': new Set(['0/OPENING_BRACE/7']),
      '2/Definition/8': new Set(['2/OPENING_BRACE/7']),
      '2/ExecutableDefinition/4': new Set(['2/OPENING_BRACE/7']),
      '2/OperationDefinition/5': new Set(['2/OPENING_BRACE/7']),
      '2/SelectionSet/6': new Set(['2/OPENING_BRACE/7']),
      '7/Field/11': new Set(['7/NAME/12']),
      '7/Selection/10': new Set(['7/NAME/12']),
      '7/SelectionList/9': new Set(['7/NAME/12']),
      '9/Field/11': new Set(['9/NAME/12']),
      '9/Selection/14': new Set(['9/NAME/12']),
    });
  });

  it('produces first sets when the grammar has epsilon productions', () => {
    expect(getFirstSets(epsilonGrammar)).toEqual({
      S: new Set(['BAR', 'OPEN_BRACKET']),
      Program: new Set(['BAR', 'OPEN_BRACKET']),
      FooList: new Set(['FOO']),
      BarOpt: new Set(['BAR', null]),
    });
  });

  it('produces first sets for the GraphQL grammar', () => {
    expect(getFirstSets(grammar)).toMatchInlineSnapshot(`
      Object {
        "Alias": Set {
          "NAME",
        },
        "Definition": Set {
          "NAME",
          "OPENING_BRACE",
        },
        "DefinitionList": Set {
          "NAME",
          "OPENING_BRACE",
        },
        "Directive": Set {
          "AT",
        },
        "DirectiveList": Set {
          "AT",
        },
        "DirectivesOpt": Set {
          null,
          "AT",
        },
        "Document": Set {
          "NAME",
          "OPENING_BRACE",
        },
        "ExecutableDefinition": Set {
          "NAME",
          "OPENING_BRACE",
        },
        "Field": Set {
          "NAME",
        },
        "OperationDefinition": Set {
          "NAME",
          "OPENING_BRACE",
        },
        "OperationNameOpt": Set {
          "NAME",
          null,
        },
        "OperationType": Set {
          "NAME",
        },
        "Selection": Set {
          "NAME",
        },
        "SelectionList": Set {
          "NAME",
        },
        "SelectionSet": Set {
          "OPENING_BRACE",
        },
        "SelectionSetOpt": Set {
          "OPENING_BRACE",
          null,
        },
      }
    `);
  });
});
