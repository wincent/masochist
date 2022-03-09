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
      Type                   : {CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      Variable               : {CLOSING_PAREN, COLON, NAME}
      ListType               : {BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      NamedType              : {BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      ListValueConstList     : {CLOSING_BRACKET, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET}
      ObjectFieldConstList   : {CLOSING_BRACE, NAME}
      DirectiveList          : {AT, OPENING_BRACE}
      SelectionList          : {CLOSING_BRACE, NAME}
      ArgumentsOpt           : {AT, CLOSING_BRACE, NAME, OPENING_BRACE}
      Alias                  : {NAME}
      ArgumentList           : {CLOSING_PAREN, NAME}
      Definition             : {NAME, OPENING_BRACE, null}
      ExecutableDefinition   : {NAME, OPENING_BRACE, null}
      OperationDefinition    : {NAME, OPENING_BRACE, null}
      SelectionSet           : {CLOSING_BRACE, NAME, OPENING_BRACE, null}
      VariableDefinition     : {CLOSING_PAREN, DOLLAR}
      DefaultValueOpt        : {CLOSING_PAREN, DOLLAR}
      NonNullType            : {CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      ValueConst             : {CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET}
      NumberValue            : {CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET}
      NamedValue             : {CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET}
      ListValueConst         : {CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET}
      ObjectValueConst       : {CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET}
      ObjectFieldConst       : {CLOSING_BRACE, NAME}
      Directive              : {AT, OPENING_BRACE}
      SelectionSetOpt        : {CLOSING_BRACE, NAME}
      Selection              : {CLOSING_BRACE, NAME}
      Field                  : {CLOSING_BRACE, NAME}
      Argument               : {CLOSING_PAREN, NAME}
      Value                  : {CLOSING_PAREN, NAME}
      StringValue            : {CLOSING_PAREN, NAME}"
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
      16/ArgumentsOpt/22           : {13/CLOSING_BRACE/20, 13/NAME/16, 22/OPENING_BRACE/9}
      25/ArgumentsOpt/39           : {13/CLOSING_BRACE/20, 13/NAME/16, 39/OPENING_BRACE/9}
      9/Alias/17                   : {17/NAME/25}
      19/VariableDefinitionList/30 : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      13/Alias/17                  : {17/NAME/25}
      24/ArgumentList/36           : {36/CLOSING_PAREN/47, 36/NAME/38}
      18/DirectiveList/27          : {26/OPENING_BRACE/9, 27/AT/29}
      45/Type/52                   : {30/CLOSING_PAREN/43, 30/DOLLAR/33, 52/EQUALS/68}
      19/Variable/32               : {32/COLON/45}
      30/Variable/32               : {32/COLON/45}
      56/Type/71                   : {71/CLOSING_BRACKET/79}
      45/ListType/55               : {30/CLOSING_PAREN/43, 30/DOLLAR/33, 52/EQUALS/68, 55/BANG/70}
      45/NamedType/53              : {30/CLOSING_PAREN/43, 30/DOLLAR/33, 52/EQUALS/68, 53/BANG/69}
      56/ListType/55               : {55/BANG/70, 71/CLOSING_BRACKET/79}
      56/NamedType/53              : {53/BANG/69, 71/CLOSING_BRACKET/79}
      76/ListValueConstList/81     : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      78/ObjectFieldConstList/84   : {84/CLOSING_BRACE/89, 84/NAME/86}
      0/Document/1                 : {null}
      0/Definition/3               : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      26/SelectionSet/40           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/Definition/10              : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      9/Selection/14               : {13/CLOSING_BRACE/20, 13/NAME/16}
      9/Field/15                   : {13/CLOSING_BRACE/20, 13/NAME/16}
      22/SelectionSetOpt/34        : {13/CLOSING_BRACE/20, 13/NAME/16}
      39/SelectionSetOpt/50        : {13/CLOSING_BRACE/20, 13/NAME/16}
      13/Selection/21              : {13/CLOSING_BRACE/20, 13/NAME/16}
      13/Field/15                  : {13/CLOSING_BRACE/20, 13/NAME/16}
      18/Directive/28              : {26/OPENING_BRACE/9, 27/AT/29}
      42/ArgumentsOpt/51           : {26/OPENING_BRACE/9, 27/AT/29}
      27/Directive/41              : {26/OPENING_BRACE/9, 27/AT/29}
      19/VariableDefinition/31     : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      52/DefaultValueOpt/67        : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      30/VariableDefinition/44     : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      22/SelectionSet/35           : {13/CLOSING_BRACE/20, 13/NAME/16}
      24/Argument/37               : {36/CLOSING_PAREN/47, 36/NAME/38}
      49/Value/58                  : {36/CLOSING_PAREN/47, 36/NAME/38}
      36/Argument/48               : {36/CLOSING_PAREN/47, 36/NAME/38}
      39/SelectionSet/35           : {13/CLOSING_BRACE/20, 13/NAME/16}
      45/NonNullType/57            : {30/CLOSING_PAREN/43, 30/DOLLAR/33, 52/EQUALS/68}
      49/Variable/59               : {36/CLOSING_PAREN/47, 36/NAME/38}
      49/NumberValue/60            : {36/CLOSING_PAREN/47, 36/NAME/38}
      49/StringValue/62            : {36/CLOSING_PAREN/47, 36/NAME/38}
      49/NamedValue/65             : {36/CLOSING_PAREN/47, 36/NAME/38}
      68/ValueConst/72             : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      56/NonNullType/57            : {71/CLOSING_BRACKET/79}
      68/NumberValue/73            : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      68/NamedValue/74             : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      68/ListValueConst/75         : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      68/ObjectValueConst/77       : {30/CLOSING_PAREN/43, 30/DOLLAR/33}
      76/ValueConst/82             : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      76/NumberValue/73            : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      76/NamedValue/74             : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      76/ListValueConst/75         : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      76/ObjectValueConst/77       : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      81/ValueConst/88             : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      78/ObjectFieldConst/85       : {84/CLOSING_BRACE/89, 84/NAME/86}
      91/ValueConst/92             : {84/CLOSING_BRACE/89, 84/NAME/86}
      84/ObjectFieldConst/90       : {84/CLOSING_BRACE/89, 84/NAME/86}
      81/NumberValue/73            : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      81/NamedValue/74             : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      81/ListValueConst/75         : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      81/ObjectValueConst/77       : {81/CLOSING_BRACKET/87, 81/NAME/66, 81/NUMBER/61, 81/OPENING_BRACE/78, 81/OPENING_BRACKET/76}
      91/NumberValue/73            : {84/CLOSING_BRACE/89, 84/NAME/86}
      91/NamedValue/74             : {84/CLOSING_BRACE/89, 84/NAME/86}
      91/ListValueConst/75         : {84/CLOSING_BRACE/89, 84/NAME/86}
      91/ObjectValueConst/77       : {84/CLOSING_BRACE/89, 84/NAME/86}"
    `);
  });
});
