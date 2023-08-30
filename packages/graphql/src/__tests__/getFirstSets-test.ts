// These tests used to live in `@masochist/parser`, where `getFirstSets` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {describe, expect, it} from '@jest/globals';
import {getFirstSets, stringifySymbolSets} from '@masochist/parser';

import {unaugmentedGrammar} from '../document';

describe('getFirstSets()', () => {
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
