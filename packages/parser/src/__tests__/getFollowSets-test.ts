import {dedent} from '@masochist/common';

import {grammar} from '..';
import extendedGrammarForItemSets from '../extendedGrammarForItemSets';
import getFollowSets from '../getFollowSets';
import getItemSets from '../getItemSets';
import stringifySymbolSets from '../stringifySymbolSets';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

describe('getFollowSets()', () => {
  it('produces follow sets for the toy grammar', () => {
    expect(getFollowSets(toyGrammar)).toEqual({
      E: new Set(['eq', null]),
      N: new Set([null]),
      S: new Set([null]),
      V: new Set(['eq', null]),
    });
  });

  it('produces follow sets for the extended toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, toyGrammar);
    expect(getFollowSets(extendedGrammar)).toEqual({
      "0/S'/$": new Set([null]),
      '0/V/3': new Set(['3/eq/7', null]),
      '0/S/1': new Set([null]),
      '0/N/2': new Set([null]),
      '7/E/10': new Set([null]),
      '5/E/8': new Set(['3/eq/7', null]),
      '0/E/6': new Set([null]),
      '5/V/9': new Set(['3/eq/7', null]),
      '7/V/9': new Set([null]),
    });
  });

  it('produces follow sets for the subset grammar', () => {
    expect(getFollowSets(subsetGrammar)).toEqual({
      Document: new Set([null]),
      DefinitionList: new Set(['OPENING_BRACE', null]),
      SelectionList: new Set(['CLOSING_BRACE', 'NAME']),
      Definition: new Set(['OPENING_BRACE', null]),
      ExecutableDefinition: new Set(['OPENING_BRACE', null]),
      OperationDefinition: new Set(['OPENING_BRACE', null]),
      SelectionSet: new Set(['OPENING_BRACE', null]),
      Selection: new Set(['CLOSING_BRACE', 'NAME']),
      Field: new Set(['CLOSING_BRACE', 'NAME']),
    });
  });

  it('produces follow sets for the extended subset grammar', () => {
    const itemSets = getItemSets(subsetGrammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, subsetGrammar);
    expect(getFollowSets(extendedGrammar)).toEqual({
      "0/Document'/$": new Set([null]),
      '0/Document/1': new Set([null]),
      '0/DefinitionList/2': new Set(['2/OPENING_BRACE/7', null]),
      '7/SelectionList/9': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '0/Definition/3': new Set(['2/OPENING_BRACE/7', null]),
      '2/Definition/8': new Set(['2/OPENING_BRACE/7', null]),
      '0/ExecutableDefinition/4': new Set(['2/OPENING_BRACE/7', null]),
      '0/OperationDefinition/5': new Set(['2/OPENING_BRACE/7', null]),
      '0/SelectionSet/6': new Set(['2/OPENING_BRACE/7', null]),
      '2/ExecutableDefinition/4': new Set(['2/OPENING_BRACE/7', null]),
      '2/OperationDefinition/5': new Set(['2/OPENING_BRACE/7', null]),
      '2/SelectionSet/6': new Set(['2/OPENING_BRACE/7', null]),
      '7/Selection/10': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '9/Selection/14': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '7/Field/11': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '9/Field/11': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
    });
  });

  it('produces follow sets when the grammar has epsilon productions', () => {
    expect(getFollowSets(epsilonGrammar)).toEqual({
      S: new Set([null]),
      Program: new Set([null]),
      FooList: new Set(['CLOSE_BRACKET', 'FOO']),
      BarOpt: new Set(['OPEN_BRACKET']),
    });
  });

  it('produces follow sets for an extended grammar with an epsilon productions', () => {
    const itemSets = getItemSets(epsilonGrammar);
    const extendedGrammar = extendedGrammarForItemSets(
      itemSets,
      epsilonGrammar,
    );
    expect(stringifySymbolSets(getFollowSets(extendedGrammar))).toEqual(
      dedent`
        0/S'/$      : {null}
        5/FooList/6 : {6/CLOSE_BRACKET/8, 6/FOO/9}
        0/BarOpt/3  : {3/OPEN_BRACKET/5}
        0/S/1       : {null}
        0/Program/2 : {null}
      `,
    );
  });

  it('produces follow sets for the GraphQL grammar', () => {
    expect('\n' + stringifySymbolSets(getFollowSets(grammar)))
      .toMatchInlineSnapshot(`
      "
      Document             : {null}
      DefinitionList       : {NAME, OPENING_BRACE, null}
      DirectivesOpt        : {OPENING_BRACE}
      OperationNameOpt     : {AT, OPENING_BRACE}
      OperationType        : {AT, NAME, OPENING_BRACE}
      SelectionList        : {CLOSING_BRACE, NAME}
      Alias                : {NAME}
      DirectiveList        : {AT, OPENING_BRACE}
      Definition           : {NAME, OPENING_BRACE, null}
      ExecutableDefinition : {NAME, OPENING_BRACE, null}
      OperationDefinition  : {NAME, OPENING_BRACE, null}
      SelectionSet         : {CLOSING_BRACE, NAME, OPENING_BRACE, null}
      SelectionSetOpt      : {CLOSING_BRACE, NAME}
      Selection            : {CLOSING_BRACE, NAME}
      Field                : {CLOSING_BRACE, NAME}
      Directive            : {AT, OPENING_BRACE}"
    `);
  });

  it('produces follow sets for the extended GraphQL grammar', () => {
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect('\n' + stringifySymbolSets(getFollowSets(extendedGrammar)))
      .toMatchInlineSnapshot(`
      "
      0/Document'/$            : {null}
      11/DirectivesOpt/18      : {18/OPENING_BRACE/9}
      6/OperationNameOpt/11    : {11/AT/21, 18/OPENING_BRACE/9}
      0/OperationType/6        : {11/AT/21, 18/OPENING_BRACE/9, 6/NAME/12}
      9/SelectionList/13       : {13/CLOSING_BRACE/22, 13/NAME/16}
      0/DefinitionList/2       : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationType/6        : {11/AT/21, 18/OPENING_BRACE/9, 6/NAME/12}
      9/Alias/17               : {17/NAME/27}
      11/DirectiveList/19      : {18/OPENING_BRACE/9, 19/AT/21}
      13/Alias/17              : {17/NAME/27}
      0/Document/1             : {null}
      0/Definition/3           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/ExecutableDefinition/4 : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/OperationDefinition/5  : {2/NAME/7, 2/OPENING_BRACE/9, null}
      18/SelectionSet/28       : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/SelectionSet/8         : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/Definition/10          : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/ExecutableDefinition/4 : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationDefinition/5  : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/SelectionSet/8         : {2/NAME/7, 2/OPENING_BRACE/9, null}
      9/Selection/14           : {13/CLOSING_BRACE/22, 13/NAME/16}
      9/Field/15               : {13/CLOSING_BRACE/22, 13/NAME/16}
      16/SelectionSetOpt/24    : {13/CLOSING_BRACE/22, 13/NAME/16}
      27/SelectionSetOpt/31    : {13/CLOSING_BRACE/22, 13/NAME/16}
      13/Selection/23          : {13/CLOSING_BRACE/22, 13/NAME/16}
      11/Directive/20          : {18/OPENING_BRACE/9, 19/AT/21}
      19/Directive/29          : {18/OPENING_BRACE/9, 19/AT/21}
      13/Field/15              : {13/CLOSING_BRACE/22, 13/NAME/16}
      16/SelectionSet/26       : {13/CLOSING_BRACE/22, 13/NAME/16}
      27/SelectionSet/26       : {13/CLOSING_BRACE/22, 13/NAME/16}"
    `);
  });
});
