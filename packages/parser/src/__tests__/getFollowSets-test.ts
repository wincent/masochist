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
        0/BarOpt/3  : {3/OPEN_BRACKET/5}
        0/Program/2 : {null}
        0/S'/$      : {null}
        0/S/1       : {null}
        5/FooList/6 : {6/CLOSE_BRACKET/8, 6/FOO/9}
      `,
    );
  });

  it('produces follow sets for the GraphQL grammar', () => {
    expect('\n' + stringifySymbolSets(getFollowSets(grammar)))
      .toMatchInlineSnapshot(`
      "
      Alias                  : {NAME}
      Argument               : {CLOSING_PAREN, NAME}
      ArgumentList           : {CLOSING_PAREN, NAME}
      ArgumentsOpt           : {AT, CLOSING_BRACE, NAME, OPENING_BRACE}
      DefaultValueOpt        : {CLOSING_PAREN, DOLLAR}
      Definition             : {NAME, OPENING_BRACE, null}
      DefinitionList         : {NAME, OPENING_BRACE, null}
      Directive              : {AT, CLOSING_BRACE, NAME, OPENING_BRACE}
      DirectiveList          : {AT, CLOSING_BRACE, NAME, OPENING_BRACE}
      DirectivesOpt          : {CLOSING_BRACE, NAME, OPENING_BRACE}
      Document               : {null}
      ExecutableDefinition   : {NAME, OPENING_BRACE, null}
      Field                  : {CLOSING_BRACE, NAME}
      ListType               : {BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      ListValueConst         : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueConstList     : {BLOCK_STRING_VALUE, CLOSING_BRACKET, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      NamedType              : {BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      NamedValue             : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      NonNullType            : {CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      NumberValue            : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ObjectFieldConst       : {CLOSING_BRACE, NAME}
      ObjectFieldConstList   : {CLOSING_BRACE, NAME}
      ObjectValueConst       : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      OperationDefinition    : {NAME, OPENING_BRACE, null}
      OperationNameOpt       : {AT, OPENING_BRACE, OPENING_PAREN}
      OperationType          : {AT, NAME, OPENING_BRACE, OPENING_PAREN}
      Selection              : {CLOSING_BRACE, NAME}
      SelectionList          : {CLOSING_BRACE, NAME}
      SelectionSet           : {CLOSING_BRACE, NAME, OPENING_BRACE, null}
      SelectionSetOpt        : {CLOSING_BRACE, NAME}
      StringValue            : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Type                   : {CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      Value                  : {CLOSING_PAREN, NAME}
      ValueConst             : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Variable               : {CLOSING_PAREN, COLON, NAME}
      VariableDefinition     : {CLOSING_PAREN, DOLLAR}
      VariableDefinitionList : {CLOSING_PAREN, DOLLAR}
      VariableDefinitionsOpt : {AT, OPENING_BRACE}"
    `);
  });

  it('produces follow sets for the extended GraphQL grammar', () => {
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect('\n' + stringifySymbolSets(getFollowSets(extendedGrammar)))
      .toMatchInlineSnapshot(`
      "
      0/Definition/3               : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/DefinitionList/2           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/Document'/$                : {null}
      0/Document/1                 : {null}
      0/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      0/OperationType/6            : {11/OPENING_PAREN/19, 18/AT/29, 26/OPENING_BRACE/9, 6/NAME/12}
      0/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/Definition/10              : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationType/6            : {11/OPENING_PAREN/19, 18/AT/29, 26/OPENING_BRACE/9, 6/NAME/12}
      2/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      6/OperationNameOpt/11        : {11/OPENING_PAREN/19, 18/AT/29, 26/OPENING_BRACE/9}
      9/Alias/17                   : {17/NAME/25}
      9/Field/15                   : {13/CLOSING_BRACE/20, 13/NAME/16}
      9/Selection/14               : {13/CLOSING_BRACE/20, 13/NAME/16}
      9/SelectionList/13           : {13/CLOSING_BRACE/20, 13/NAME/16}
      11/VariableDefinitionsOpt/18 : {18/AT/29, 26/OPENING_BRACE/9}
      13/Alias/17                  : {17/NAME/25}
      13/Field/15                  : {13/CLOSING_BRACE/20, 13/NAME/16}
      13/Selection/21              : {13/CLOSING_BRACE/20, 13/NAME/16}
      16/ArgumentsOpt/22           : {13/CLOSING_BRACE/20, 13/NAME/16, 22/AT/29, 34/OPENING_BRACE/9}
      18/Directive/28              : {26/OPENING_BRACE/9, 27/AT/29}
      18/DirectiveList/27          : {26/OPENING_BRACE/9, 27/AT/29}
      18/DirectivesOpt/26          : {26/OPENING_BRACE/9}
      19/Variable/32               : {32/COLON/44}
      19/VariableDefinition/31     : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      19/VariableDefinitionList/30 : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      22/Directive/28              : {13/CLOSING_BRACE/20, 13/NAME/16, 27/AT/29, 34/OPENING_BRACE/9}
      22/DirectiveList/27          : {13/CLOSING_BRACE/20, 13/NAME/16, 27/AT/29, 34/OPENING_BRACE/9}
      22/DirectivesOpt/34          : {13/CLOSING_BRACE/20, 13/NAME/16, 34/OPENING_BRACE/9}
      24/Argument/36               : {35/CLOSING_PAREN/48, 35/NAME/37}
      24/ArgumentList/35           : {35/CLOSING_PAREN/48, 35/NAME/37}
      25/ArgumentsOpt/38           : {13/CLOSING_BRACE/20, 13/NAME/16, 38/AT/29, 51/OPENING_BRACE/9}
      26/SelectionSet/39           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      27/Directive/40              : {13/CLOSING_BRACE/20, 13/NAME/16, 26/OPENING_BRACE/9, 27/AT/29, 34/OPENING_BRACE/9, 51/OPENING_BRACE/9}
      30/Variable/32               : {32/COLON/44}
      30/VariableDefinition/43     : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      34/SelectionSet/47           : {13/CLOSING_BRACE/20, 13/NAME/16}
      34/SelectionSetOpt/46        : {13/CLOSING_BRACE/20, 13/NAME/16}
      35/Argument/49               : {35/CLOSING_PAREN/48, 35/NAME/37}
      38/Directive/28              : {13/CLOSING_BRACE/20, 13/NAME/16, 27/AT/29, 51/OPENING_BRACE/9}
      38/DirectiveList/27          : {13/CLOSING_BRACE/20, 13/NAME/16, 27/AT/29, 51/OPENING_BRACE/9}
      38/DirectivesOpt/51          : {13/CLOSING_BRACE/20, 13/NAME/16, 51/OPENING_BRACE/9}
      41/ArgumentsOpt/52           : {13/CLOSING_BRACE/20, 13/NAME/16, 26/OPENING_BRACE/9, 27/AT/29, 34/OPENING_BRACE/9, 51/OPENING_BRACE/9}
      44/ListType/56               : {30/CLOSING_PAREN/42, 30/DOLLAR/33, 53/EQUALS/70, 56/BANG/72}
      44/NamedType/54              : {30/CLOSING_PAREN/42, 30/DOLLAR/33, 53/EQUALS/70, 54/BANG/71}
      44/NonNullType/58            : {30/CLOSING_PAREN/42, 30/DOLLAR/33, 53/EQUALS/70}
      44/Type/53                   : {30/CLOSING_PAREN/42, 30/DOLLAR/33, 53/EQUALS/70}
      50/NamedValue/66             : {35/CLOSING_PAREN/48, 35/NAME/37}
      50/NumberValue/61            : {35/CLOSING_PAREN/48, 35/NAME/37}
      50/StringValue/63            : {35/CLOSING_PAREN/48, 35/NAME/37}
      50/Value/59                  : {35/CLOSING_PAREN/48, 35/NAME/37}
      50/Variable/60               : {35/CLOSING_PAREN/48, 35/NAME/37}
      51/SelectionSet/47           : {13/CLOSING_BRACE/20, 13/NAME/16}
      51/SelectionSetOpt/68        : {13/CLOSING_BRACE/20, 13/NAME/16}
      53/DefaultValueOpt/69        : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      57/ListType/56               : {56/BANG/72, 73/CLOSING_BRACKET/82}
      57/NamedType/54              : {54/BANG/71, 73/CLOSING_BRACKET/82}
      57/NonNullType/58            : {73/CLOSING_BRACKET/82}
      57/Type/73                   : {73/CLOSING_BRACKET/82}
      70/ListValueConst/78         : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      70/NamedValue/77             : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      70/NumberValue/75            : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      70/ObjectValueConst/80       : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      70/StringValue/76            : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      70/ValueConst/74             : {30/CLOSING_PAREN/42, 30/DOLLAR/33}
      79/ListValueConst/78         : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      79/ListValueConstList/84     : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      79/NamedValue/77             : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      79/NumberValue/75            : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      79/ObjectValueConst/80       : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      79/StringValue/76            : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      79/ValueConst/85             : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      81/ObjectFieldConst/88       : {87/CLOSING_BRACE/92, 87/NAME/89}
      81/ObjectFieldConstList/87   : {87/CLOSING_BRACE/92, 87/NAME/89}
      84/ListValueConst/78         : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      84/NamedValue/77             : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      84/NumberValue/75            : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      84/ObjectValueConst/80       : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      84/StringValue/76            : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      84/ValueConst/91             : {84/BLOCK_STRING_VALUE/65, 84/CLOSING_BRACKET/90, 84/NAME/67, 84/NUMBER/62, 84/OPENING_BRACE/81, 84/OPENING_BRACKET/79, 84/STRING_VALUE/64}
      87/ObjectFieldConst/93       : {87/CLOSING_BRACE/92, 87/NAME/89}
      94/ListValueConst/78         : {87/CLOSING_BRACE/92, 87/NAME/89}
      94/NamedValue/77             : {87/CLOSING_BRACE/92, 87/NAME/89}
      94/NumberValue/75            : {87/CLOSING_BRACE/92, 87/NAME/89}
      94/ObjectValueConst/80       : {87/CLOSING_BRACE/92, 87/NAME/89}
      94/StringValue/76            : {87/CLOSING_BRACE/92, 87/NAME/89}
      94/ValueConst/95             : {87/CLOSING_BRACE/92, 87/NAME/89}"
    `);
  });
});
