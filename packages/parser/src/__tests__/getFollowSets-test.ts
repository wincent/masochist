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
      Document               : {null}
      DefinitionList         : {NAME, OPENING_BRACE, null}
      DirectivesOpt          : {OPENING_BRACE}
      VariableDefinitionsOpt : {AT, OPENING_BRACE}
      OperationNameOpt       : {AT, OPENING_BRACE, OPENING_PAREN}
      OperationType          : {AT, NAME, OPENING_BRACE, OPENING_PAREN}
      VariableDefinitionList : {CLOSING_PAREN, DOLLAR}
      Variable               : {COLON}
      Type                   : {CLOSING_BRACKET, CLOSING_PAREN, DOLLAR}
      DirectiveList          : {AT, OPENING_BRACE}
      SelectionList          : {CLOSING_BRACE, NAME}
      Alias                  : {NAME}
      Definition             : {NAME, OPENING_BRACE, null}
      ExecutableDefinition   : {NAME, OPENING_BRACE, null}
      OperationDefinition    : {NAME, OPENING_BRACE, null}
      SelectionSet           : {CLOSING_BRACE, NAME, OPENING_BRACE, null}
      VariableDefinition     : {CLOSING_PAREN, DOLLAR}
      NamedType              : {CLOSING_BRACKET, CLOSING_PAREN, DOLLAR}
      ListType               : {CLOSING_BRACKET, CLOSING_PAREN, DOLLAR}
      Directive              : {AT, OPENING_BRACE}
      SelectionSetOpt        : {CLOSING_BRACE, NAME}
      Selection              : {CLOSING_BRACE, NAME}
      Field                  : {CLOSING_BRACE, NAME}"
    `);
  });

  it('produces follow sets for the extended GraphQL grammar', () => {
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect('\n' + stringifySymbolSets(getFollowSets(extendedGrammar)))
      .toMatchInlineSnapshot(`
      "
      0/Document'/$                : {null}
      18/DirectivesOpt/26          : {26/OPENING_BRACE/9}
      11/VariableDefinitionsOpt/18 : {18/AT/29, 26/OPENING_BRACE/9}
      6/OperationNameOpt/11        : {11/OPENING_PAREN/19, 18/AT/29, 26/OPENING_BRACE/9}
      0/OperationType/6            : {11/OPENING_PAREN/19, 18/AT/29, 26/OPENING_BRACE/9, 6/NAME/12}
      9/SelectionList/13           : {13/CLOSING_BRACE/20, 13/NAME/16}
      0/DefinitionList/2           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationType/6            : {11/OPENING_PAREN/19, 18/AT/29, 26/OPENING_BRACE/9, 6/NAME/12}
      9/Alias/17                   : {17/NAME/25}
      19/VariableDefinitionList/30 : {30/CLOSING_PAREN/38, 30/DOLLAR/33}
      13/Alias/17                  : {17/NAME/25}
      18/DirectiveList/27          : {26/OPENING_BRACE/9, 27/AT/29}
      19/Variable/32               : {32/COLON/40}
      30/Variable/32               : {32/COLON/40}
      46/Type/47                   : {47/CLOSING_BRACKET/48}
      0/Document/1                 : {null}
      0/Definition/3               : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      26/SelectionSet/35           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/Definition/10              : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      9/Selection/14               : {13/CLOSING_BRACE/20, 13/NAME/16}
      9/Field/15                   : {13/CLOSING_BRACE/20, 13/NAME/16}
      16/SelectionSetOpt/22        : {13/CLOSING_BRACE/20, 13/NAME/16}
      25/SelectionSetOpt/34        : {13/CLOSING_BRACE/20, 13/NAME/16}
      13/Selection/21              : {13/CLOSING_BRACE/20, 13/NAME/16}
      13/Field/15                  : {13/CLOSING_BRACE/20, 13/NAME/16}
      16/SelectionSet/24           : {13/CLOSING_BRACE/20, 13/NAME/16}
      18/Directive/28              : {26/OPENING_BRACE/9, 27/AT/29}
      27/Directive/36              : {26/OPENING_BRACE/9, 27/AT/29}
      19/VariableDefinition/31     : {30/CLOSING_PAREN/38, 30/DOLLAR/33}
      40/Type/42                   : {30/CLOSING_PAREN/38, 30/DOLLAR/33}
      30/VariableDefinition/39     : {30/CLOSING_PAREN/38, 30/DOLLAR/33}
      25/SelectionSet/24           : {13/CLOSING_BRACE/20, 13/NAME/16}
      40/NamedType/43              : {30/CLOSING_PAREN/38, 30/DOLLAR/33}
      40/ListType/45               : {30/CLOSING_PAREN/38, 30/DOLLAR/33}
      46/NamedType/43              : {47/CLOSING_BRACKET/48}
      46/ListType/45               : {47/CLOSING_BRACKET/48}"
    `);
  });
});
