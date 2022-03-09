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
        Field → · NAME ArgumentsOpt SelectionSetOpt
        Field → · Alias NAME ArgumentsOpt SelectionSetOpt
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
        Field → · NAME ArgumentsOpt SelectionSetOpt
        Field → · Alias NAME ArgumentsOpt SelectionSetOpt
        Alias → · NAME COLON

      I14:
        SelectionList → Selection ·

      I15:
        Selection → Field ·

      I16:
        Field → NAME · ArgumentsOpt SelectionSetOpt
        Alias → NAME · COLON
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I17:
        Field → Alias · NAME ArgumentsOpt SelectionSetOpt

      I18:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I19:
        VariableDefinitionsOpt → OPENING_PAREN · VariableDefinitionList CLOSING_PAREN
        VariableDefinitionList → · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt
        Variable → · DOLLAR NAME
        VariableDefinitionList → · VariableDefinitionList VariableDefinition

      I20:
        SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·

      I21:
        SelectionList → SelectionList Selection ·

      I22:
        Field → NAME ArgumentsOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I23:
        Alias → NAME COLON ·

      I24:
        ArgumentsOpt → OPENING_PAREN · ArgumentList CLOSING_PAREN
        ArgumentList → · Argument
        Argument → · NAME COLON Value
        ArgumentList → · ArgumentList Argument

      I25:
        Field → Alias NAME · ArgumentsOpt SelectionSetOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I26:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I27:
        DirectivesOpt → DirectiveList ·
        DirectiveList → DirectiveList · Directive
        Directive → · AT NAME ArgumentsOpt

      I28:
        DirectiveList → Directive ·

      I29:
        Directive → AT · NAME ArgumentsOpt

      I30:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList · CLOSING_PAREN
        VariableDefinitionList → VariableDefinitionList · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt
        Variable → · DOLLAR NAME

      I31:
        VariableDefinitionList → VariableDefinition ·

      I32:
        VariableDefinition → Variable · COLON Type DefaultValueOpt

      I33:
        Variable → DOLLAR · NAME

      I34:
        Field → NAME ArgumentsOpt SelectionSetOpt ·

      I35:
        SelectionSetOpt → SelectionSet ·

      I36:
        ArgumentsOpt → OPENING_PAREN ArgumentList · CLOSING_PAREN
        ArgumentList → ArgumentList · Argument
        Argument → · NAME COLON Value

      I37:
        ArgumentList → Argument ·

      I38:
        Argument → NAME · COLON Value

      I39:
        Field → Alias NAME ArgumentsOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I40:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet ·

      I41:
        DirectiveList → DirectiveList Directive ·

      I42:
        Directive → AT NAME · ArgumentsOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I43:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList CLOSING_PAREN ·

      I44:
        VariableDefinitionList → VariableDefinitionList VariableDefinition ·

      I45:
        VariableDefinition → Variable COLON · Type DefaultValueOpt
        Type → · NamedType
        NamedType → · NAME
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I46:
        Variable → DOLLAR NAME ·

      I47:
        ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN ·

      I48:
        ArgumentList → ArgumentList Argument ·

      I49:
        Argument → NAME COLON · Value
        Value → · Variable
        Variable → · DOLLAR NAME
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · NAME

      I50:
        Field → Alias NAME ArgumentsOpt SelectionSetOpt ·

      I51:
        Directive → AT NAME ArgumentsOpt ·

      I52:
        VariableDefinition → Variable COLON Type · DefaultValueOpt
        DefaultValueOpt → · EQUALS ValueConst
        DefaultValueOpt → ε ·

      I53:
        Type → NamedType ·
        NonNullType → NamedType · BANG

      I54:
        NamedType → NAME ·

      I55:
        Type → ListType ·
        NonNullType → ListType · BANG

      I56:
        ListType → OPENING_BRACKET · Type CLOSING_BRACKET
        Type → · NamedType
        NamedType → · NAME
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I57:
        Type → NonNullType ·

      I58:
        Argument → NAME COLON Value ·

      I59:
        Value → Variable ·

      I60:
        Value → NumberValue ·

      I61:
        NumberValue → NUMBER ·

      I62:
        Value → StringValue ·

      I63:
        StringValue → STRING_VALUE ·

      I64:
        StringValue → BLOCK_STRING_VALUE ·

      I65:
        Value → NamedValue ·

      I66:
        NamedValue → NAME ·

      I67:
        VariableDefinition → Variable COLON Type DefaultValueOpt ·

      I68:
        DefaultValueOpt → EQUALS · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I69:
        NonNullType → NamedType BANG ·

      I70:
        NonNullType → ListType BANG ·

      I71:
        ListType → OPENING_BRACKET Type · CLOSING_BRACKET

      I72:
        DefaultValueOpt → EQUALS ValueConst ·

      I73:
        ValueConst → NumberValue ·

      I74:
        ValueConst → NamedValue ·

      I75:
        ValueConst → ListValueConst ·

      I76:
        ListValueConst → OPENING_BRACKET · CLOSING_BRACKET
        ListValueConst → OPENING_BRACKET · ListValueConstList CLOSING_BRACKET
        ListValueConstList → · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE
        ListValueConstList → · ListValueConstList ValueConst

      I77:
        ValueConst → ObjectValueConst ·

      I78:
        ObjectValueConst → OPENING_BRACE · CLOSING_BRACE
        ObjectValueConst → OPENING_BRACE · ObjectFieldConstList CLOSING_BRACE
        ObjectFieldConstList → · ObjectFieldConst
        ObjectFieldConst → · NAME COLON ValueConst
        ObjectFieldConstList → · ObjectFieldConstList ObjectFieldConst

      I79:
        ListType → OPENING_BRACKET Type CLOSING_BRACKET ·

      I80:
        ListValueConst → OPENING_BRACKET CLOSING_BRACKET ·

      I81:
        ListValueConst → OPENING_BRACKET ListValueConstList · CLOSING_BRACKET
        ListValueConstList → ListValueConstList · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I82:
        ListValueConstList → ValueConst ·

      I83:
        ObjectValueConst → OPENING_BRACE CLOSING_BRACE ·

      I84:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList · CLOSING_BRACE
        ObjectFieldConstList → ObjectFieldConstList · ObjectFieldConst
        ObjectFieldConst → · NAME COLON ValueConst

      I85:
        ObjectFieldConstList → ObjectFieldConst ·

      I86:
        ObjectFieldConst → NAME · COLON ValueConst

      I87:
        ListValueConst → OPENING_BRACKET ListValueConstList CLOSING_BRACKET ·

      I88:
        ListValueConstList → ListValueConstList ValueConst ·

      I89:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList CLOSING_BRACE ·

      I90:
        ObjectFieldConstList → ObjectFieldConstList ObjectFieldConst ·

      I91:
        ObjectFieldConst → NAME COLON · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I92:
        ObjectFieldConst → NAME COLON ValueConst ·
      "
    `);
  });
});
