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
      ArgumentConst          : {CLOSING_PAREN, NAME}
      ArgumentConstList      : {CLOSING_PAREN, NAME}
      ArgumentList           : {CLOSING_PAREN, NAME}
      ArgumentsConstOpt      : {AT, CLOSING_PAREN, DOLLAR}
      ArgumentsOpt           : {AT, CLOSING_BRACE, ELLIPSIS, NAME, OPENING_BRACE}
      DefaultValueOpt        : {AT, CLOSING_PAREN, DOLLAR}
      Definition             : {NAME, OPENING_BRACE, null}
      DefinitionList         : {NAME, OPENING_BRACE, null}
      Directive              : {AT, CLOSING_BRACE, ELLIPSIS, NAME, OPENING_BRACE}
      DirectiveConst         : {AT, CLOSING_PAREN, DOLLAR}
      DirectiveConstList     : {AT, CLOSING_PAREN, DOLLAR}
      DirectiveList          : {AT, CLOSING_BRACE, ELLIPSIS, NAME, OPENING_BRACE}
      DirectivesConstOpt     : {CLOSING_PAREN, DOLLAR}
      DirectivesOpt          : {CLOSING_BRACE, ELLIPSIS, NAME, OPENING_BRACE}
      Document               : {null}
      ExecutableDefinition   : {NAME, OPENING_BRACE, null}
      Field                  : {CLOSING_BRACE, ELLIPSIS, NAME}
      FragmentDefinition     : {}
      FragmentKeyword        : {NAME}
      FragmentName           : {NAME}
      FragmentSpread         : {CLOSING_BRACE, ELLIPSIS, NAME}
      ListType               : {AT, BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      ListValue              : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueConst         : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueConstList     : {BLOCK_STRING_VALUE, CLOSING_BRACKET, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueList          : {BLOCK_STRING_VALUE, CLOSING_BRACKET, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      NamedType              : {AT, BANG, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS, OPENING_BRACE}
      NamedValue             : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      NonNullType            : {AT, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      NumberValue            : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ObjectField            : {CLOSING_BRACE, NAME}
      ObjectFieldConst       : {CLOSING_BRACE, NAME}
      ObjectFieldConstList   : {CLOSING_BRACE, NAME}
      ObjectFieldList        : {CLOSING_BRACE, NAME}
      ObjectValue            : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ObjectValueConst       : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      OnKeyword              : {NAME}
      OperationDefinition    : {NAME, OPENING_BRACE, null}
      OperationNameOpt       : {AT, OPENING_BRACE, OPENING_PAREN}
      OperationType          : {AT, NAME, OPENING_BRACE, OPENING_PAREN}
      Selection              : {CLOSING_BRACE, ELLIPSIS, NAME}
      SelectionList          : {CLOSING_BRACE, ELLIPSIS, NAME}
      SelectionSet           : {CLOSING_BRACE, ELLIPSIS, NAME, OPENING_BRACE, null}
      SelectionSetOpt        : {CLOSING_BRACE, ELLIPSIS, NAME}
      StringValue            : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Type                   : {AT, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, EQUALS}
      Value                  : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ValueConst             : {AT, BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Variable               : {BLOCK_STRING_VALUE, CLOSING_BRACE, CLOSING_BRACKET, CLOSING_PAREN, COLON, DOLLAR, NAME, NUMBER, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
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
      0/OperationType/6            : {11/OPENING_PAREN/21, 20/AT/32, 29/OPENING_BRACE/9, 6/NAME/12}
      0/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/Definition/10              : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/ExecutableDefinition/4     : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationDefinition/5      : {2/NAME/7, 2/OPENING_BRACE/9, null}
      2/OperationType/6            : {11/OPENING_PAREN/21, 20/AT/32, 29/OPENING_BRACE/9, 6/NAME/12}
      2/SelectionSet/8             : {2/NAME/7, 2/OPENING_BRACE/9, null}
      6/OperationNameOpt/11        : {11/OPENING_PAREN/21, 20/AT/32, 29/OPENING_BRACE/9}
      9/Alias/17                   : {17/NAME/27}
      9/Field/15                   : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      9/FragmentSpread/18          : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      9/Selection/14               : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      9/SelectionList/13           : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      11/VariableDefinitionsOpt/20 : {20/AT/32, 29/OPENING_BRACE/9}
      13/Alias/17                  : {17/NAME/27}
      13/Field/15                  : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      13/FragmentSpread/18         : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      13/Selection/23              : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      16/ArgumentsOpt/24           : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 24/AT/32, 37/OPENING_BRACE/9}
      20/Directive/31              : {29/OPENING_BRACE/9, 30/AT/32}
      20/DirectiveList/30          : {29/OPENING_BRACE/9, 30/AT/32}
      20/DirectivesOpt/29          : {29/OPENING_BRACE/9}
      21/Variable/35               : {35/COLON/48}
      21/VariableDefinition/34     : {33/CLOSING_PAREN/46, 33/DOLLAR/36}
      21/VariableDefinitionList/33 : {33/CLOSING_PAREN/46, 33/DOLLAR/36}
      24/Directive/31              : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 30/AT/32, 37/OPENING_BRACE/9}
      24/DirectiveList/30          : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 30/AT/32, 37/OPENING_BRACE/9}
      24/DirectivesOpt/37          : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 37/OPENING_BRACE/9}
      26/Argument/39               : {38/CLOSING_PAREN/52, 38/NAME/40}
      26/ArgumentList/38           : {38/CLOSING_PAREN/52, 38/NAME/40}
      27/ArgumentsOpt/41           : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 41/AT/32, 55/OPENING_BRACE/9}
      28/Directive/31              : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 30/AT/32}
      28/DirectiveList/30          : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 30/AT/32}
      28/DirectivesOpt/42          : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      29/SelectionSet/43           : {2/NAME/7, 2/OPENING_BRACE/9, null}
      30/Directive/44              : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 29/OPENING_BRACE/9, 30/AT/32, 37/OPENING_BRACE/9, 55/OPENING_BRACE/9}
      33/Variable/35               : {35/COLON/48}
      33/VariableDefinition/47     : {33/CLOSING_PAREN/46, 33/DOLLAR/36}
      37/SelectionSet/51           : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      37/SelectionSetOpt/50        : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      38/Argument/53               : {38/CLOSING_PAREN/52, 38/NAME/40}
      41/Directive/31              : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 30/AT/32, 55/OPENING_BRACE/9}
      41/DirectiveList/30          : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 30/AT/32, 55/OPENING_BRACE/9}
      41/DirectivesOpt/55          : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 55/OPENING_BRACE/9}
      45/ArgumentsOpt/56           : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16, 29/OPENING_BRACE/9, 30/AT/32, 37/OPENING_BRACE/9, 55/OPENING_BRACE/9}
      48/ListType/60               : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 57/EQUALS/78, 60/BANG/80, 77/AT/92}
      48/NamedType/58              : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 57/EQUALS/78, 58/BANG/79, 77/AT/92}
      48/NonNullType/62            : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 57/EQUALS/78, 77/AT/92}
      48/Type/57                   : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 57/EQUALS/78, 77/AT/92}
      54/ListValue/72              : {38/CLOSING_PAREN/52, 38/NAME/40}
      54/NamedValue/70             : {38/CLOSING_PAREN/52, 38/NAME/40}
      54/NumberValue/65            : {38/CLOSING_PAREN/52, 38/NAME/40}
      54/ObjectValue/74            : {38/CLOSING_PAREN/52, 38/NAME/40}
      54/StringValue/67            : {38/CLOSING_PAREN/52, 38/NAME/40}
      54/Value/63                  : {38/CLOSING_PAREN/52, 38/NAME/40}
      54/Variable/64               : {38/CLOSING_PAREN/52, 38/NAME/40}
      55/SelectionSet/51           : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      55/SelectionSetOpt/76        : {13/CLOSING_BRACE/22, 13/ELLIPSIS/19, 13/NAME/16}
      57/DefaultValueOpt/77        : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 77/AT/92}
      61/ListType/60               : {60/BANG/80, 81/CLOSING_BRACKET/101}
      61/NamedType/58              : {58/BANG/79, 81/CLOSING_BRACKET/101}
      61/NonNullType/62            : {81/CLOSING_BRACKET/101}
      61/Type/81                   : {81/CLOSING_BRACKET/101}
      73/ListValue/72              : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      73/ListValueList/83          : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      73/NamedValue/70             : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      73/NumberValue/65            : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      73/ObjectValue/74            : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      73/StringValue/67            : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      73/Value/84                  : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      73/Variable/64               : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      75/ObjectField/87            : {86/CLOSING_BRACE/104, 86/NAME/88}
      75/ObjectFieldList/86        : {86/CLOSING_BRACE/104, 86/NAME/88}
      77/DirectiveConst/91         : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 90/AT/92}
      77/DirectiveConstList/90     : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 90/AT/92}
      77/DirectivesConstOpt/89     : {33/CLOSING_PAREN/46, 33/DOLLAR/36}
      78/ListValueConst/97         : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 77/AT/92}
      78/NamedValue/96             : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 77/AT/92}
      78/NumberValue/94            : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 77/AT/92}
      78/ObjectValueConst/99       : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 77/AT/92}
      78/StringValue/95            : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 77/AT/92}
      78/ValueConst/93             : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 77/AT/92}
      83/ListValue/72              : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      83/NamedValue/70             : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      83/NumberValue/65            : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      83/ObjectValue/74            : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      83/StringValue/67            : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      83/Value/103                 : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      83/Variable/64               : {83/BLOCK_STRING_VALUE/69, 83/CLOSING_BRACKET/102, 83/DOLLAR/36, 83/NAME/71, 83/NUMBER/66, 83/OPENING_BRACE/75, 83/OPENING_BRACKET/73, 83/STRING_VALUE/68}
      86/ObjectField/105           : {86/CLOSING_BRACE/104, 86/NAME/88}
      90/DirectiveConst/107        : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 90/AT/92}
      98/ListValueConst/97         : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      98/ListValueConstList/110    : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      98/NamedValue/96             : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      98/NumberValue/94            : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      98/ObjectValueConst/99       : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      98/StringValue/95            : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      98/ValueConst/111            : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      100/ObjectFieldConst/114     : {113/CLOSING_BRACE/121, 113/NAME/115}
      100/ObjectFieldConstList/113 : {113/CLOSING_BRACE/121, 113/NAME/115}
      106/ListValue/72             : {86/CLOSING_BRACE/104, 86/NAME/88}
      106/NamedValue/70            : {86/CLOSING_BRACE/104, 86/NAME/88}
      106/NumberValue/65           : {86/CLOSING_BRACE/104, 86/NAME/88}
      106/ObjectValue/74           : {86/CLOSING_BRACE/104, 86/NAME/88}
      106/StringValue/67           : {86/CLOSING_BRACE/104, 86/NAME/88}
      106/Value/116                : {86/CLOSING_BRACE/104, 86/NAME/88}
      106/Variable/64              : {86/CLOSING_BRACE/104, 86/NAME/88}
      108/ArgumentsConstOpt/117    : {33/CLOSING_PAREN/46, 33/DOLLAR/36, 90/AT/92}
      110/ListValueConst/97        : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      110/NamedValue/96            : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      110/NumberValue/94           : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      110/ObjectValueConst/99      : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      110/StringValue/95           : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      110/ValueConst/120           : {110/BLOCK_STRING_VALUE/69, 110/CLOSING_BRACKET/119, 110/NAME/71, 110/NUMBER/66, 110/OPENING_BRACE/100, 110/OPENING_BRACKET/98, 110/STRING_VALUE/68}
      113/ObjectFieldConst/122     : {113/CLOSING_BRACE/121, 113/NAME/115}
      118/ArgumentConst/125        : {124/CLOSING_PAREN/128, 124/NAME/126}
      118/ArgumentConstList/124    : {124/CLOSING_PAREN/128, 124/NAME/126}
      123/ListValueConst/97        : {113/CLOSING_BRACE/121, 113/NAME/115}
      123/NamedValue/96            : {113/CLOSING_BRACE/121, 113/NAME/115}
      123/NumberValue/94           : {113/CLOSING_BRACE/121, 113/NAME/115}
      123/ObjectValueConst/99      : {113/CLOSING_BRACE/121, 113/NAME/115}
      123/StringValue/95           : {113/CLOSING_BRACE/121, 113/NAME/115}
      123/ValueConst/127           : {113/CLOSING_BRACE/121, 113/NAME/115}
      124/ArgumentConst/129        : {124/CLOSING_PAREN/128, 124/NAME/126}
      130/ListValueConst/97        : {124/CLOSING_PAREN/128, 124/NAME/126}
      130/NamedValue/96            : {124/CLOSING_PAREN/128, 124/NAME/126}
      130/NumberValue/94           : {124/CLOSING_PAREN/128, 124/NAME/126}
      130/ObjectValueConst/99      : {124/CLOSING_PAREN/128, 124/NAME/126}
      130/StringValue/95           : {124/CLOSING_PAREN/128, 124/NAME/126}
      130/ValueConst/131           : {124/CLOSING_PAREN/128, 124/NAME/126}"
    `);
  });
});
