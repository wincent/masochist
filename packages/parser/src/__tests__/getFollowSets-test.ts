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
      Alias                  : {NAME, ON}
      Argument               : {CLOSING_PAREN, NAME, ON}
      ArgumentConst          : {CLOSING_PAREN, NAME, ON}
      ArgumentConstList      : {CLOSING_PAREN, NAME, ON}
      ArgumentList           : {CLOSING_PAREN, NAME, ON}
      ArgumentsConstOpt      : {AT, CLOSING_PAREN, DOLLAR}
      ArgumentsOpt           : {AT, CLOSING_BRACE, ELLIPSIS, NAME, ON, OPENING_BRACE}
      DefaultValueOpt        : {AT, CLOSING_PAREN, DOLLAR}
      Definition             : {NAME, OPENING_BRACE, null}
      DefinitionList         : {NAME, OPENING_BRACE, null}
      Directive              : {AT, CLOSING_BRACE, ELLIPSIS, NAME, ON, OPENING_BRACE}
      DirectiveConst         : {AT, CLOSING_PAREN, DOLLAR}
      DirectiveConstList     : {AT, CLOSING_PAREN, DOLLAR}
      DirectiveList          : {AT, CLOSING_BRACE, ELLIPSIS, NAME, ON, OPENING_BRACE}
      DirectivesConstOpt     : {CLOSING_PAREN, DOLLAR}
      DirectivesOpt          : {CLOSING_BRACE, ELLIPSIS, NAME, ON, OPENING_BRACE}
      Document               : {null}
      ExecutableDefinition   : {NAME, OPENING_BRACE, null}
      Field                  : {CLOSING_BRACE, ELLIPSIS, NAME, ON}
      FragmentDefinition     : {}
      FragmentKeyword        : {NAME}
      FragmentName           : {AT, CLOSING_BRACE, ELLIPSIS, NAME, ON, OPENING_BRACE}
      FragmentSpread         : {CLOSING_BRACE, ELLIPSIS, NAME, ON}
      InlineFragment         : {CLOSING_BRACE, ELLIPSIS, NAME, ON}
      ListType               : {AT, BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      ListValue              : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueConst         : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueConstList     : {BLOCK_STRING_VALUE, CLOSING_BRACKET, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueList          : {BLOCK_STRING_VALUE, CLOSING_BRACKET, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Name                   : {AT, BANG, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, COLON, DOLLAR, ELLIPSIS, EQUALS, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, OPENING_PAREN, STRING_VALUE}
      NamedType              : {AT, BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS, OPENING_BRACE}
      NamedValue             : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      NonNullType            : {AT, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      NumberValue            : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ObjectField            : {CLOSING_BRACE, NAME, ON}
      ObjectFieldConst       : {CLOSING_BRACE, NAME, ON}
      ObjectFieldConstList   : {CLOSING_BRACE, NAME, ON}
      ObjectFieldList        : {CLOSING_BRACE, NAME, ON}
      ObjectValue            : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ObjectValueConst       : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      OperationDefinition    : {NAME, OPENING_BRACE, null}
      OperationNameOpt       : {AT, OPENING_BRACE, OPENING_PAREN}
      OperationType          : {AT, NAME, ON, OPENING_BRACE, OPENING_PAREN}
      Selection              : {CLOSING_BRACE, ELLIPSIS, NAME, ON}
      SelectionList          : {CLOSING_BRACE, ELLIPSIS, NAME, ON}
      SelectionSet           : {CLOSING_BRACE, ELLIPSIS, NAME, ON, OPENING_BRACE, null}
      SelectionSetOpt        : {CLOSING_BRACE, ELLIPSIS, NAME, ON}
      StringValue            : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Type                   : {AT, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      TypeConditionOpt       : {AT, OPENING_BRACE}
      Value                  : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ValueConst             : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Variable               : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, COLON, DOLLAR, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
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
      0/OperationType/6            : {11/OPENING_PAREN/24, 23/AT/38, 35/OPENING_BRACE/9, 6/NAME/13, 6/ON/14}
      0/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/Definition/10              : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationType/6            : {11/OPENING_PAREN/24, 23/AT/38, 35/OPENING_BRACE/9, 6/NAME/13, 6/ON/14}
      2/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      6/Name/12                    : {11/OPENING_PAREN/24, 23/AT/38, 35/OPENING_BRACE/9}
      6/OperationNameOpt/11        : {11/OPENING_PAREN/24, 23/AT/38, 35/OPENING_BRACE/9}
      9/Alias/19                   : {19/NAME/13, 19/ON/14}
      9/Field/17                   : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      9/FragmentSpread/20          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      9/InlineFragment/22          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      9/Name/18                    : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 18/COLON/28, 18/OPENING_PAREN/29, 27/AT/38, 43/OPENING_BRACE/9}
      9/Selection/16               : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      9/SelectionList/15           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      11/VariableDefinitionsOpt/23 : {23/AT/38, 35/OPENING_BRACE/9}
      15/Alias/19                  : {19/NAME/13, 19/ON/14}
      15/Field/17                  : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      15/FragmentSpread/20         : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      15/InlineFragment/22         : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      15/Name/18                   : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 18/COLON/28, 18/OPENING_PAREN/29, 27/AT/38, 43/OPENING_BRACE/9}
      15/Selection/26              : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      18/ArgumentsOpt/27           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 27/AT/38, 43/OPENING_BRACE/9}
      19/Name/30                   : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 30/OPENING_PAREN/29, 47/AT/38, 64/OPENING_BRACE/9}
      21/FragmentName/31           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 31/AT/38}
      21/TypeConditionOpt/32       : {32/AT/38, 49/OPENING_BRACE/9}
      23/Directive/37              : {35/OPENING_BRACE/9, 36/AT/38}
      23/DirectiveList/36          : {35/OPENING_BRACE/9, 36/AT/38}
      23/DirectivesOpt/35          : {35/OPENING_BRACE/9}
      24/Variable/41               : {41/COLON/57}
      24/VariableDefinition/40     : {39/CLOSING_PAREN/55, 39/DOLLAR/42}
      24/VariableDefinitionList/39 : {39/CLOSING_PAREN/55, 39/DOLLAR/42}
      27/Directive/37              : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 36/AT/38, 43/OPENING_BRACE/9}
      27/DirectiveList/36          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 36/AT/38, 43/OPENING_BRACE/9}
      27/DirectivesOpt/43          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 43/OPENING_BRACE/9}
      29/Argument/45               : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      29/ArgumentList/44           : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      29/Name/46                   : {46/COLON/63}
      30/ArgumentsOpt/47           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 47/AT/38, 64/OPENING_BRACE/9}
      31/Directive/37              : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 36/AT/38}
      31/DirectiveList/36          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 36/AT/38}
      31/DirectivesOpt/48          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      32/Directive/37              : {36/AT/38, 49/OPENING_BRACE/9}
      32/DirectiveList/36          : {36/AT/38, 49/OPENING_BRACE/9}
      32/DirectivesOpt/49          : {49/OPENING_BRACE/9}
      34/Name/51                   : {32/AT/38, 49/OPENING_BRACE/9}
      34/NamedType/50              : {32/AT/38, 49/OPENING_BRACE/9}
      35/SelectionSet/52           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      36/Directive/53              : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 35/OPENING_BRACE/9, 36/AT/38, 43/OPENING_BRACE/9, 49/OPENING_BRACE/9, 64/OPENING_BRACE/9}
      38/Name/54                   : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 35/OPENING_BRACE/9, 36/AT/38, 43/OPENING_BRACE/9, 49/OPENING_BRACE/9, 54/OPENING_PAREN/29, 64/OPENING_BRACE/9}
      39/Variable/41               : {41/COLON/57}
      39/VariableDefinition/56     : {39/CLOSING_PAREN/55, 39/DOLLAR/42}
      42/Name/58                   : {41/COLON/57, 44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14, 92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77, 95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      43/SelectionSet/60           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      43/SelectionSetOpt/59        : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      44/Argument/62               : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      44/Name/46                   : {46/COLON/63}
      47/Directive/37              : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 36/AT/38, 64/OPENING_BRACE/9}
      47/DirectiveList/36          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 36/AT/38, 64/OPENING_BRACE/9}
      47/DirectivesOpt/64          : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 64/OPENING_BRACE/9}
      49/SelectionSet/65           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      54/ArgumentsOpt/66           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14, 35/OPENING_BRACE/9, 36/AT/38, 43/OPENING_BRACE/9, 49/OPENING_BRACE/9, 64/OPENING_BRACE/9}
      57/ListType/69               : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 67/EQUALS/87, 69/BANG/89, 86/AT/101}
      57/Name/51                   : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 67/EQUALS/87, 68/BANG/88, 86/AT/101}
      57/NamedType/68              : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 67/EQUALS/87, 68/BANG/88, 86/AT/101}
      57/NonNullType/71            : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 67/EQUALS/87, 86/AT/101}
      57/Type/67                   : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 67/EQUALS/87, 86/AT/101}
      63/ListValue/81              : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      63/Name/80                   : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      63/NamedValue/79             : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      63/NumberValue/74            : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      63/ObjectValue/83            : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      63/StringValue/76            : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      63/Value/72                  : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      63/Variable/73               : {44/CLOSING_PAREN/61, 44/NAME/13, 44/ON/14}
      64/SelectionSet/60           : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      64/SelectionSetOpt/85        : {15/CLOSING_BRACE/25, 15/ELLIPSIS/21, 15/NAME/13, 15/ON/14}
      67/DefaultValueOpt/86        : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      70/ListType/69               : {69/BANG/89, 90/CLOSING_BRACKET/110}
      70/Name/51                   : {68/BANG/88, 90/CLOSING_BRACKET/110}
      70/NamedType/68              : {68/BANG/88, 90/CLOSING_BRACKET/110}
      70/NonNullType/71            : {90/CLOSING_BRACKET/110}
      70/Type/90                   : {90/CLOSING_BRACKET/110}
      82/ListValue/81              : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/ListValueList/92          : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/Name/80                   : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/NamedValue/79             : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/NumberValue/74            : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/ObjectValue/83            : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/StringValue/76            : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/Value/93                  : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      82/Variable/73               : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      84/Name/97                   : {97/COLON/115}
      84/ObjectField/96            : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      84/ObjectFieldList/95        : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      86/DirectiveConst/100        : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 99/AT/101}
      86/DirectiveConstList/99     : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 99/AT/101}
      86/DirectivesConstOpt/98     : {39/CLOSING_PAREN/55, 39/DOLLAR/42}
      87/ListValueConst/106        : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      87/Name/80                   : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      87/NamedValue/105            : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      87/NumberValue/103           : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      87/ObjectValueConst/108      : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      87/StringValue/104           : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      87/ValueConst/102            : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 86/AT/101}
      92/ListValue/81              : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      92/Name/80                   : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      92/NamedValue/79             : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      92/NumberValue/74            : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      92/ObjectValue/83            : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      92/StringValue/76            : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      92/Value/112                 : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      92/Variable/73               : {92/BLOCK_STRING_VALUE/78, 92/CLOSING_BRACKET/111, 92/DOLLAR/42, 92/NAME/13, 92/NUMBER/75, 92/ON/14, 92/OPENING_BRACE/84, 92/OPENING_BRACKET/82, 92/STRING_VALUE/77}
      95/Name/97                   : {97/COLON/115}
      95/ObjectField/114           : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      99/DirectiveConst/116        : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 99/AT/101}
      101/Name/117                 : {117/OPENING_PAREN/127, 39/CLOSING_PAREN/55, 39/DOLLAR/42, 99/AT/101}
      107/ListValueConst/106       : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      107/ListValueConstList/119   : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      107/Name/80                  : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      107/NamedValue/105           : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      107/NumberValue/103          : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      107/ObjectValueConst/108     : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      107/StringValue/104          : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      107/ValueConst/120           : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      109/Name/124                 : {124/COLON/132}
      109/ObjectFieldConst/123     : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      109/ObjectFieldConstList/122 : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      115/ListValue/81             : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      115/Name/80                  : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      115/NamedValue/79            : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      115/NumberValue/74           : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      115/ObjectValue/83           : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      115/StringValue/76           : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      115/Value/125                : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      115/Variable/73              : {95/CLOSING_BRACE/113, 95/NAME/13, 95/ON/14}
      117/ArgumentsConstOpt/126    : {39/CLOSING_PAREN/55, 39/DOLLAR/42, 99/AT/101}
      119/ListValueConst/106       : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      119/Name/80                  : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      119/NamedValue/105           : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      119/NumberValue/103          : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      119/ObjectValueConst/108     : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      119/StringValue/104          : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      119/ValueConst/129           : {119/BLOCK_STRING_VALUE/78, 119/CLOSING_BRACKET/128, 119/NAME/13, 119/NUMBER/75, 119/ON/14, 119/OPENING_BRACE/109, 119/OPENING_BRACKET/107, 119/STRING_VALUE/77}
      122/Name/124                 : {124/COLON/132}
      122/ObjectFieldConst/131     : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      127/ArgumentConst/134        : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      127/ArgumentConstList/133    : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      127/Name/135                 : {135/COLON/139}
      132/ListValueConst/106       : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      132/Name/80                  : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      132/NamedValue/105           : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      132/NumberValue/103          : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      132/ObjectValueConst/108     : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      132/StringValue/104          : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      132/ValueConst/136           : {122/CLOSING_BRACE/130, 122/NAME/13, 122/ON/14}
      133/ArgumentConst/138        : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      133/Name/135                 : {135/COLON/139}
      139/ListValueConst/106       : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      139/Name/80                  : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      139/NamedValue/105           : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      139/NumberValue/103          : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      139/ObjectValueConst/108     : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      139/StringValue/104          : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}
      139/ValueConst/140           : {133/CLOSING_PAREN/137, 133/NAME/13, 133/ON/14}"
    `);
  });
});
