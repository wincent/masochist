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
      Alias                  : {FRAGMENT, NAME, ON}
      Argument               : {CLOSING_PAREN, FRAGMENT, NAME, ON}
      ArgumentConst          : {CLOSING_PAREN, FRAGMENT, NAME, ON}
      ArgumentConstList      : {CLOSING_PAREN, FRAGMENT, NAME, ON}
      ArgumentList           : {CLOSING_PAREN, FRAGMENT, NAME, ON}
      ArgumentsConstOpt      : {AT, CLOSING_PAREN, DOLLAR}
      ArgumentsOpt           : {AT, CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON, OPENING_BRACE}
      DefaultValueOpt        : {AT, CLOSING_PAREN, DOLLAR}
      Definition             : {FRAGMENT, NAME, OPENING_BRACE, null}
      DefinitionList         : {FRAGMENT, NAME, OPENING_BRACE, null}
      Directive              : {AT, CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON, OPENING_BRACE}
      DirectiveConst         : {AT, CLOSING_PAREN, DOLLAR}
      DirectiveConstList     : {AT, CLOSING_PAREN, DOLLAR}
      DirectiveList          : {AT, CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON, OPENING_BRACE}
      DirectivesConstOpt     : {CLOSING_PAREN, DOLLAR}
      DirectivesOpt          : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON, OPENING_BRACE}
      Document               : {null}
      ExecutableDefinition   : {FRAGMENT, NAME, OPENING_BRACE, null}
      Field                  : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON}
      FragmentDefinition     : {FRAGMENT, NAME, OPENING_BRACE, null}
      FragmentName           : {AT, CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON, OPENING_BRACE}
      FragmentSpread         : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON}
      InlineFragment         : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON}
      ListType               : {AT, BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      ListValue              : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueConst         : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueConstList     : {BLOCK_STRING_VALUE, CLOSING_BRACKET, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueList          : {BLOCK_STRING_VALUE, CLOSING_BRACKET, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Name                   : {AT, BANG, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, COLON, DOLLAR, ELLIPSIS, EQUALS, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, OPENING_PAREN, STRING_VALUE}
      NamedType              : {AT, BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS, OPENING_BRACE}
      NamedValue             : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      NonNullType            : {AT, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      NumberValue            : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ObjectField            : {CLOSING_BRACE, FRAGMENT, NAME, ON}
      ObjectFieldConst       : {CLOSING_BRACE, FRAGMENT, NAME, ON}
      ObjectFieldConstList   : {CLOSING_BRACE, FRAGMENT, NAME, ON}
      ObjectFieldList        : {CLOSING_BRACE, FRAGMENT, NAME, ON}
      ObjectValue            : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ObjectValueConst       : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      OperationDefinition    : {FRAGMENT, NAME, OPENING_BRACE, null}
      OperationNameOpt       : {AT, OPENING_BRACE, OPENING_PAREN}
      OperationType          : {AT, FRAGMENT, NAME, ON, OPENING_BRACE, OPENING_PAREN}
      Selection              : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON}
      SelectionList          : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON}
      SelectionSet           : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON, OPENING_BRACE, null}
      SelectionSetOpt        : {CLOSING_BRACE, ELLIPSIS, FRAGMENT, NAME, ON}
      StringValue            : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Type                   : {AT, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      TypeConditionOpt       : {AT, OPENING_BRACE}
      Value                  : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ValueConst             : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Variable               : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, COLON, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
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
      0/Definition/3               : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      0/DefinitionList/2           : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      0/Document'/$                : {null}
      0/Document/1                 : {null}
      0/ExecutableDefinition/4     : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      0/FragmentDefinition/10      : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      0/OperationDefinition/5      : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      0/OperationType/6            : {13/OPENING_PAREN/29, 28/AT/43, 40/OPENING_BRACE/9, 6/FRAGMENT/16, 6/NAME/15, 6/ON/17}
      0/SelectionSet/8             : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      2/Definition/12              : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      2/ExecutableDefinition/4     : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      2/FragmentDefinition/10      : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationDefinition/5      : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationType/6            : {13/OPENING_PAREN/29, 28/AT/43, 40/OPENING_BRACE/9, 6/FRAGMENT/16, 6/NAME/15, 6/ON/17}
      2/SelectionSet/8             : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      6/Name/14                    : {13/OPENING_PAREN/29, 28/AT/43, 40/OPENING_BRACE/9}
      6/OperationNameOpt/13        : {13/OPENING_PAREN/29, 28/AT/43, 40/OPENING_BRACE/9}
      9/Alias/22                   : {22/FRAGMENT/16, 22/NAME/15, 22/ON/17}
      9/Field/20                   : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      9/FragmentSpread/23          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      9/InlineFragment/25          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      9/Name/21                    : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 21/COLON/33, 21/OPENING_PAREN/34, 32/AT/43, 48/OPENING_BRACE/9}
      9/Selection/19               : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      9/SelectionList/18           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      11/FragmentName/26           : {26/ON/39}
      13/VariableDefinitionsOpt/28 : {28/AT/43, 40/OPENING_BRACE/9}
      18/Alias/22                  : {22/FRAGMENT/16, 22/NAME/15, 22/ON/17}
      18/Field/20                  : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      18/FragmentSpread/23         : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      18/InlineFragment/25         : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      18/Name/21                   : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 21/COLON/33, 21/OPENING_PAREN/34, 32/AT/43, 48/OPENING_BRACE/9}
      18/Selection/31              : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      21/ArgumentsOpt/32           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 32/AT/43, 48/OPENING_BRACE/9}
      22/Name/35                   : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 35/OPENING_PAREN/34, 52/AT/43, 70/OPENING_BRACE/9}
      24/FragmentName/36           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 36/AT/43}
      24/TypeConditionOpt/37       : {37/AT/43, 54/OPENING_BRACE/9}
      28/Directive/42              : {40/OPENING_BRACE/9, 41/AT/43}
      28/DirectiveList/41          : {40/OPENING_BRACE/9, 41/AT/43}
      28/DirectivesOpt/40          : {40/OPENING_BRACE/9}
      29/Variable/46               : {46/COLON/63}
      29/VariableDefinition/45     : {44/CLOSING_PAREN/61, 44/DOLLAR/47}
      29/VariableDefinitionList/44 : {44/CLOSING_PAREN/61, 44/DOLLAR/47}
      32/Directive/42              : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 41/AT/43, 48/OPENING_BRACE/9}
      32/DirectiveList/41          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 41/AT/43, 48/OPENING_BRACE/9}
      32/DirectivesOpt/48          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 48/OPENING_BRACE/9}
      34/Argument/50               : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      34/ArgumentList/49           : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      34/Name/51                   : {51/COLON/69}
      35/ArgumentsOpt/52           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 52/AT/43, 70/OPENING_BRACE/9}
      36/Directive/42              : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 41/AT/43}
      36/DirectiveList/41          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 41/AT/43}
      36/DirectivesOpt/53          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      37/Directive/42              : {41/AT/43, 54/OPENING_BRACE/9}
      37/DirectiveList/41          : {41/AT/43, 54/OPENING_BRACE/9}
      37/DirectivesOpt/54          : {54/OPENING_BRACE/9}
      38/Name/56                   : {37/AT/43, 54/OPENING_BRACE/9}
      38/NamedType/55              : {37/AT/43, 54/OPENING_BRACE/9}
      39/Name/56                   : {57/AT/43, 72/OPENING_BRACE/9}
      39/NamedType/57              : {57/AT/43, 72/OPENING_BRACE/9}
      40/SelectionSet/58           : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      41/Directive/59              : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 40/OPENING_BRACE/9, 41/AT/43, 48/OPENING_BRACE/9, 54/OPENING_BRACE/9, 70/OPENING_BRACE/9, 72/OPENING_BRACE/9}
      43/Name/60                   : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 40/OPENING_BRACE/9, 41/AT/43, 48/OPENING_BRACE/9, 54/OPENING_BRACE/9, 60/OPENING_PAREN/34, 70/OPENING_BRACE/9, 72/OPENING_BRACE/9}
      44/Variable/46               : {46/COLON/63}
      44/VariableDefinition/62     : {44/CLOSING_PAREN/61, 44/DOLLAR/47}
      47/Name/64                   : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84, 103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17, 46/COLON/63, 49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      48/SelectionSet/66           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      48/SelectionSetOpt/65        : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      49/Argument/68               : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      49/Name/51                   : {51/COLON/69}
      52/Directive/42              : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 41/AT/43, 70/OPENING_BRACE/9}
      52/DirectiveList/41          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 41/AT/43, 70/OPENING_BRACE/9}
      52/DirectivesOpt/70          : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 70/OPENING_BRACE/9}
      54/SelectionSet/71           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      57/Directive/42              : {41/AT/43, 72/OPENING_BRACE/9}
      57/DirectiveList/41          : {41/AT/43, 72/OPENING_BRACE/9}
      57/DirectivesOpt/72          : {72/OPENING_BRACE/9}
      60/ArgumentsOpt/73           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17, 40/OPENING_BRACE/9, 41/AT/43, 48/OPENING_BRACE/9, 54/OPENING_BRACE/9, 70/OPENING_BRACE/9, 72/OPENING_BRACE/9}
      63/ListType/76               : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 74/EQUALS/95, 76/BANG/97, 94/AT/109}
      63/Name/56                   : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 74/EQUALS/95, 75/BANG/96, 94/AT/109}
      63/NamedType/75              : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 74/EQUALS/95, 75/BANG/96, 94/AT/109}
      63/NonNullType/78            : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 74/EQUALS/95, 94/AT/109}
      63/Type/74                   : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 74/EQUALS/95, 94/AT/109}
      69/ListValue/88              : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      69/Name/87                   : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      69/NamedValue/86             : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      69/NumberValue/81            : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      69/ObjectValue/90            : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      69/StringValue/83            : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      69/Value/79                  : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      69/Variable/80               : {49/CLOSING_PAREN/67, 49/FRAGMENT/16, 49/NAME/15, 49/ON/17}
      70/SelectionSet/66           : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      70/SelectionSetOpt/92        : {18/CLOSING_BRACE/30, 18/ELLIPSIS/24, 18/FRAGMENT/16, 18/NAME/15, 18/ON/17}
      72/SelectionSet/93           : {2/FRAGMENT/11, 2/NAME/7, 2/OPENING_BRACE/9, null}
      74/DefaultValueOpt/94        : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      77/ListType/76               : {76/BANG/97, 98/CLOSING_BRACKET/118}
      77/Name/56                   : {75/BANG/96, 98/CLOSING_BRACKET/118}
      77/NamedType/75              : {75/BANG/96, 98/CLOSING_BRACKET/118}
      77/NonNullType/78            : {98/CLOSING_BRACKET/118}
      77/Type/98                   : {98/CLOSING_BRACKET/118}
      89/ListValue/88              : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/ListValueList/100         : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/Name/87                   : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/NamedValue/86             : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/NumberValue/81            : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/ObjectValue/90            : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/StringValue/83            : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/Value/101                 : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      89/Variable/80               : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      91/Name/105                  : {105/COLON/123}
      91/ObjectField/104           : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      91/ObjectFieldList/103       : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      94/DirectiveConst/108        : {107/AT/109, 44/CLOSING_PAREN/61, 44/DOLLAR/47}
      94/DirectiveConstList/107    : {107/AT/109, 44/CLOSING_PAREN/61, 44/DOLLAR/47}
      94/DirectivesConstOpt/106    : {44/CLOSING_PAREN/61, 44/DOLLAR/47}
      95/ListValueConst/114        : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      95/Name/87                   : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      95/NamedValue/113            : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      95/NumberValue/111           : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      95/ObjectValueConst/116      : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      95/StringValue/112           : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      95/ValueConst/110            : {44/CLOSING_PAREN/61, 44/DOLLAR/47, 94/AT/109}
      100/ListValue/88             : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      100/Name/87                  : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      100/NamedValue/86            : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      100/NumberValue/81           : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      100/ObjectValue/90           : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      100/StringValue/83           : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      100/Value/120                : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      100/Variable/80              : {100/BLOCK_STRING_VALUE/85, 100/CLOSING_BRACKET/119, 100/DOLLAR/47, 100/FRAGMENT/16, 100/NAME/15, 100/NUMBER/82, 100/ON/17, 100/OPENING_BRACE/91, 100/OPENING_BRACKET/89, 100/STRING_VALUE/84}
      103/Name/105                 : {105/COLON/123}
      103/ObjectField/122          : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      107/DirectiveConst/124       : {107/AT/109, 44/CLOSING_PAREN/61, 44/DOLLAR/47}
      109/Name/125                 : {107/AT/109, 125/OPENING_PAREN/135, 44/CLOSING_PAREN/61, 44/DOLLAR/47}
      115/ListValueConst/114       : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      115/ListValueConstList/127   : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      115/Name/87                  : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      115/NamedValue/113           : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      115/NumberValue/111          : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      115/ObjectValueConst/116     : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      115/StringValue/112          : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      115/ValueConst/128           : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      117/Name/132                 : {132/COLON/140}
      117/ObjectFieldConst/131     : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      117/ObjectFieldConstList/130 : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      123/ListValue/88             : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      123/Name/87                  : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      123/NamedValue/86            : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      123/NumberValue/81           : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      123/ObjectValue/90           : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      123/StringValue/83           : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      123/Value/133                : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      123/Variable/80              : {103/CLOSING_BRACE/121, 103/FRAGMENT/16, 103/NAME/15, 103/ON/17}
      125/ArgumentsConstOpt/134    : {107/AT/109, 44/CLOSING_PAREN/61, 44/DOLLAR/47}
      127/ListValueConst/114       : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      127/Name/87                  : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      127/NamedValue/113           : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      127/NumberValue/111          : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      127/ObjectValueConst/116     : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      127/StringValue/112          : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      127/ValueConst/137           : {127/BLOCK_STRING_VALUE/85, 127/CLOSING_BRACKET/136, 127/FRAGMENT/16, 127/NAME/15, 127/NUMBER/82, 127/ON/17, 127/OPENING_BRACE/117, 127/OPENING_BRACKET/115, 127/STRING_VALUE/84}
      130/Name/132                 : {132/COLON/140}
      130/ObjectFieldConst/139     : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      135/ArgumentConst/142        : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      135/ArgumentConstList/141    : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      135/Name/143                 : {143/COLON/147}
      140/ListValueConst/114       : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      140/Name/87                  : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      140/NamedValue/113           : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      140/NumberValue/111          : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      140/ObjectValueConst/116     : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      140/StringValue/112          : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      140/ValueConst/144           : {130/CLOSING_BRACE/138, 130/FRAGMENT/16, 130/NAME/15, 130/ON/17}
      141/ArgumentConst/146        : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      141/Name/143                 : {143/COLON/147}
      147/ListValueConst/114       : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      147/Name/87                  : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      147/NamedValue/113           : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      147/NumberValue/111          : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      147/ObjectValueConst/116     : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      147/StringValue/112          : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}
      147/ValueConst/148           : {141/CLOSING_PAREN/145, 141/FRAGMENT/16, 141/NAME/15, 141/ON/17}"
    `);
  });
});
