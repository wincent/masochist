import {dedent} from '@masochist/common';

import {itemSets} from '..';
import getItemSets from '../getItemSets';
import stringifyItemSets from '../stringifyItemSets';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

describe('getItemSets()', () => {
  it('produces item sets for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);

    expect(stringifyItemSets(itemSets)).toBe(
      dedent`
        I0:
          S' → · S
          S → · N
          N → · V eq E
          V → · x
          V → · star E
          N → · E
          E → · V

        I1:
          S' → S ·

        I2:
          S → N ·

        I3:
          N → V · eq E
          E → V ·

        I4:
          V → x ·

        I5:
          V → star · E
          E → · V
          V → · x
          V → · star E

        I6:
          N → E ·

        I7:
          N → V eq · E
          E → · V
          V → · x
          V → · star E

        I8:
          V → star E ·

        I9:
          E → V ·

        I10:
          N → V eq E ·
      ` + '\n',
    );
  });

  it('produces item sets for the subset grammar', () => {
    expect(stringifyItemSets(getItemSets(subsetGrammar))).toBe(
      dedent`
        I0:
          Document' → · Document
          Document → · DefinitionList
          DefinitionList → · Definition
          Definition → · ExecutableDefinition
          ExecutableDefinition → · OperationDefinition
          OperationDefinition → · SelectionSet
          SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
          DefinitionList → · DefinitionList Definition

        I1:
          Document' → Document ·

        I2:
          Document → DefinitionList ·
          DefinitionList → DefinitionList · Definition
          Definition → · ExecutableDefinition
          ExecutableDefinition → · OperationDefinition
          OperationDefinition → · SelectionSet
          SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

        I3:
          DefinitionList → Definition ·

        I4:
          Definition → ExecutableDefinition ·

        I5:
          ExecutableDefinition → OperationDefinition ·

        I6:
          OperationDefinition → SelectionSet ·

        I7:
          SelectionSet → OPENING_BRACE · SelectionList CLOSING_BRACE
          SelectionList → · Selection
          Selection → · Field
          Field → · NAME
          SelectionList → · SelectionList Selection

        I8:
          DefinitionList → DefinitionList Definition ·

        I9:
          SelectionSet → OPENING_BRACE SelectionList · CLOSING_BRACE
          SelectionList → SelectionList · Selection
          Selection → · Field
          Field → · NAME

        I10:
          SelectionList → Selection ·

        I11:
          Selection → Field ·

        I12:
          Field → NAME ·

        I13:
          SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·

        I14:
          SelectionList → SelectionList Selection ·
      ` + '\n',
    );
  });

  it('produces item sets for a grammar with epsilon productions', () => {
    expect(stringifyItemSets(getItemSets(epsilonGrammar))).toBe(
      dedent`
        I0:
          S' → · S
          S → · Program
          Program → · BarOpt OPEN_BRACKET FooList CLOSE_BRACKET
          BarOpt → · BAR
          BarOpt → ε ·

        I1:
          S' → S ·

        I2:
          S → Program ·

        I3:
          Program → BarOpt · OPEN_BRACKET FooList CLOSE_BRACKET

        I4:
          BarOpt → BAR ·

        I5:
          Program → BarOpt OPEN_BRACKET · FooList CLOSE_BRACKET
          FooList → · FooList FOO
          FooList → · FOO

        I6:
          Program → BarOpt OPEN_BRACKET FooList · CLOSE_BRACKET
          FooList → FooList · FOO

        I7:
          FooList → FOO ·

        I8:
          Program → BarOpt OPEN_BRACKET FooList CLOSE_BRACKET ·

        I9:
          FooList → FooList FOO ·
      ` + '\n',
    );
  });

  it('produces item sets for the GraphQL grammar', () => {
    expect('\n' + stringifyItemSets(itemSets)).toMatchInlineSnapshot(`
      "
      I0:
        Document' → · Document
        Document → · DefinitionList
        DefinitionList → · Definition
        Definition → · ExecutableDefinition
        ExecutableDefinition → · OperationDefinition
        OperationDefinition → · OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet
        OperationType → · NAME
        OperationDefinition → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        DefinitionList → · DefinitionList Definition

      I1:
        Document' → Document ·

      I2:
        Document → DefinitionList ·
        DefinitionList → DefinitionList · Definition
        Definition → · ExecutableDefinition
        ExecutableDefinition → · OperationDefinition
        OperationDefinition → · OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet
        OperationType → · NAME
        OperationDefinition → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I3:
        DefinitionList → Definition ·

      I4:
        Definition → ExecutableDefinition ·

      I5:
        ExecutableDefinition → OperationDefinition ·

      I6:
        OperationDefinition → OperationType · OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet
        OperationNameOpt → · NAME
        OperationNameOpt → ε ·

      I7:
        OperationType → NAME ·

      I8:
        OperationDefinition → SelectionSet ·

      I9:
        SelectionSet → OPENING_BRACE · SelectionList CLOSING_BRACE
        SelectionList → · Selection
        Selection → · Field
        Field → · NAME SelectionSetOpt
        Field → · Alias NAME SelectionSetOpt
        Alias → · NAME COLON
        SelectionList → · SelectionList Selection

      I10:
        DefinitionList → DefinitionList Definition ·

      I11:
        OperationDefinition → OperationType OperationNameOpt · VariableDefinitionsOpt DirectivesOpt SelectionSet
        VariableDefinitionsOpt → · OPENING_PAREN VariableDefinitionList CLOSING_PAREN
        VariableDefinitionsOpt → ε ·

      I12:
        OperationNameOpt → NAME ·

      I13:
        SelectionSet → OPENING_BRACE SelectionList · CLOSING_BRACE
        SelectionList → SelectionList · Selection
        Selection → · Field
        Field → · NAME SelectionSetOpt
        Field → · Alias NAME SelectionSetOpt
        Alias → · NAME COLON

      I14:
        SelectionList → Selection ·

      I15:
        Selection → Field ·

      I16:
        Field → NAME · SelectionSetOpt
        Alias → NAME · COLON
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I17:
        Field → Alias · NAME SelectionSetOpt

      I18:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I19:
        VariableDefinitionsOpt → OPENING_PAREN · VariableDefinitionList CLOSING_PAREN
        VariableDefinitionList → · VariableDefinition
        VariableDefinition → · Variable COLON Type
        Variable → · DOLLAR NAME
        VariableDefinitionList → · VariableDefinitionList VariableDefinition

      I20:
        SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·

      I21:
        SelectionList → SelectionList Selection ·

      I22:
        Field → NAME SelectionSetOpt ·

      I23:
        Alias → NAME COLON ·

      I24:
        SelectionSetOpt → SelectionSet ·

      I25:
        Field → Alias NAME · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I26:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I27:
        DirectivesOpt → DirectiveList ·
        DirectiveList → DirectiveList · Directive
        Directive → · AT NAME

      I28:
        DirectiveList → Directive ·

      I29:
        Directive → AT · NAME

      I30:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList · CLOSING_PAREN
        VariableDefinitionList → VariableDefinitionList · VariableDefinition
        VariableDefinition → · Variable COLON Type
        Variable → · DOLLAR NAME

      I31:
        VariableDefinitionList → VariableDefinition ·

      I32:
        VariableDefinition → Variable · COLON Type

      I33:
        Variable → DOLLAR · NAME

      I34:
        Field → Alias NAME SelectionSetOpt ·

      I35:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet ·

      I36:
        DirectiveList → DirectiveList Directive ·

      I37:
        Directive → AT NAME ·

      I38:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList CLOSING_PAREN ·

      I39:
        VariableDefinitionList → VariableDefinitionList VariableDefinition ·

      I40:
        VariableDefinition → Variable COLON · Type
        Type → · NamedType
        NamedType → · NAME

      I41:
        Variable → DOLLAR NAME ·

      I42:
        VariableDefinition → Variable COLON Type ·

      I43:
        Type → NamedType ·

      I44:
        NamedType → NAME ·
      "
    `);
  });
});
