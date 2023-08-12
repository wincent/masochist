import {dedent} from '@masochist/common';

import {unaugmentedGrammar} from '../document';
import extendedGrammarForItemSets from '../extendedGrammarForItemSets';
import getFirstSets from '../getFirstSets';
import getItemSets from '../getItemSets';
import stringifySymbolSets from '../stringifySymbolSets';
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

  it('produces first sets for an extended grammar with epsilon productions', () => {
    const itemSets = getItemSets(epsilonGrammar);
    const extendedGrammar = extendedGrammarForItemSets(
      itemSets,
      epsilonGrammar,
    );
    expect(stringifySymbolSets(getFirstSets(extendedGrammar))).toEqual(
      dedent`
        0/BarOpt/3  : {0/BAR/4, null}
        0/Program/2 : {0/BAR/4, 3/OPEN_BRACKET/5}
        0/S'/$      : {0/BAR/4, 3/OPEN_BRACKET/5}
        0/S/1       : {0/BAR/4, 3/OPEN_BRACKET/5}
        5/FooList/6 : {5/FOO/7}
      `,
    );
  });

  it('produces first sets for the GraphQL grammar', () => {
    expect('\n' + stringifySymbolSets(getFirstSets(unaugmentedGrammar)))
      .toMatchInlineSnapshot(`
      "
      Alias                  : {FRAGMENT, NAME, ON}
      Argument               : {FRAGMENT, NAME, ON}
      ArgumentConst          : {FRAGMENT, NAME, ON}
      ArgumentConstList      : {FRAGMENT, NAME, ON}
      ArgumentList           : {FRAGMENT, NAME, ON}
      ArgumentsConstOpt      : {OPENING_PAREN, null}
      ArgumentsOpt           : {OPENING_PAREN, null}
      DefaultValueOpt        : {EQUALS, null}
      Definition             : {FRAGMENT, NAME, OPENING_BRACE}
      DefinitionList         : {FRAGMENT, NAME, OPENING_BRACE}
      Directive              : {AT}
      DirectiveConst         : {AT}
      DirectiveConstList     : {AT}
      DirectiveList          : {AT}
      DirectivesConstOpt     : {AT, null}
      DirectivesOpt          : {AT, null}
      Document               : {FRAGMENT, NAME, OPENING_BRACE}
      ExecutableDefinition   : {NAME, OPENING_BRACE}
      Field                  : {FRAGMENT, NAME, ON}
      FragmentDefinition     : {FRAGMENT}
      FragmentName           : {NAME}
      FragmentSpread         : {ELLIPSIS}
      InlineFragment         : {ELLIPSIS}
      ListType               : {OPENING_BRACKET}
      ListValue              : {OPENING_BRACKET}
      ListValueConst         : {OPENING_BRACKET}
      ListValueConstList     : {BLOCK_STRING_VALUE, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ListValueList          : {BLOCK_STRING_VALUE, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Name                   : {FRAGMENT, NAME, ON}
      NamedType              : {FRAGMENT, NAME, ON}
      NamedValue             : {FRAGMENT, NAME, ON}
      NonNullType            : {FRAGMENT, NAME, ON, OPENING_BRACKET}
      NumberValue            : {NUMBER}
      ObjectField            : {FRAGMENT, NAME, ON}
      ObjectFieldConst       : {FRAGMENT, NAME, ON}
      ObjectFieldConstList   : {FRAGMENT, NAME, ON}
      ObjectFieldList        : {FRAGMENT, NAME, ON}
      ObjectValue            : {OPENING_BRACE}
      ObjectValueConst       : {OPENING_BRACE}
      OperationDefinition    : {NAME, OPENING_BRACE}
      OperationNameOpt       : {FRAGMENT, NAME, ON, null}
      OperationType          : {NAME}
      Selection              : {ELLIPSIS, FRAGMENT, NAME, ON}
      SelectionList          : {ELLIPSIS, FRAGMENT, NAME, ON}
      SelectionSet           : {OPENING_BRACE}
      SelectionSetOpt        : {OPENING_BRACE, null}
      StringValue            : {BLOCK_STRING_VALUE, STRING_VALUE}
      Type                   : {FRAGMENT, NAME, ON, OPENING_BRACKET}
      TypeConditionOpt       : {ON, null}
      Value                  : {BLOCK_STRING_VALUE, DOLLAR, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      ValueConst             : {BLOCK_STRING_VALUE, FRAGMENT, NAME, NUMBER, ON, OPENING_BRACE, OPENING_BRACKET, STRING_VALUE}
      Variable               : {DOLLAR}
      VariableDefinition     : {DOLLAR}
      VariableDefinitionList : {DOLLAR}
      VariableDefinitionsOpt : {OPENING_PAREN, null}"
    `);
  });
});
