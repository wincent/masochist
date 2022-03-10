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
        Field → · NAME ArgumentsOpt DirectivesOpt SelectionSetOpt
        Field → · Alias NAME ArgumentsOpt DirectivesOpt SelectionSetOpt
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
        Field → · NAME ArgumentsOpt DirectivesOpt SelectionSetOpt
        Field → · Alias NAME ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → · NAME COLON

      I14:
        SelectionList → Selection ·

      I15:
        Selection → Field ·

      I16:
        Field → NAME · ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → NAME · COLON
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I17:
        Field → Alias · NAME ArgumentsOpt DirectivesOpt SelectionSetOpt

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
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR NAME
        VariableDefinitionList → · VariableDefinitionList VariableDefinition

      I20:
        SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·

      I21:
        SelectionList → SelectionList Selection ·

      I22:
        Field → NAME ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I23:
        Alias → NAME COLON ·

      I24:
        ArgumentsOpt → OPENING_PAREN · ArgumentList CLOSING_PAREN
        ArgumentList → · Argument
        Argument → · NAME COLON Value
        ArgumentList → · ArgumentList Argument

      I25:
        Field → Alias NAME · ArgumentsOpt DirectivesOpt SelectionSetOpt
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
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR NAME

      I31:
        VariableDefinitionList → VariableDefinition ·

      I32:
        VariableDefinition → Variable · COLON Type DefaultValueOpt DirectivesConstOpt

      I33:
        Variable → DOLLAR · NAME

      I34:
        Field → NAME ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I35:
        ArgumentsOpt → OPENING_PAREN ArgumentList · CLOSING_PAREN
        ArgumentList → ArgumentList · Argument
        Argument → · NAME COLON Value

      I36:
        ArgumentList → Argument ·

      I37:
        Argument → NAME · COLON Value

      I38:
        Field → Alias NAME ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I39:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet ·

      I40:
        DirectiveList → DirectiveList Directive ·

      I41:
        Directive → AT NAME · ArgumentsOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I42:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList CLOSING_PAREN ·

      I43:
        VariableDefinitionList → VariableDefinitionList VariableDefinition ·

      I44:
        VariableDefinition → Variable COLON · Type DefaultValueOpt DirectivesConstOpt
        Type → · NamedType
        NamedType → · NAME
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I45:
        Variable → DOLLAR NAME ·

      I46:
        Field → NAME ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I47:
        SelectionSetOpt → SelectionSet ·

      I48:
        ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN ·

      I49:
        ArgumentList → ArgumentList Argument ·

      I50:
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
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I51:
        Field → Alias NAME ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I52:
        Directive → AT NAME ArgumentsOpt ·

      I53:
        VariableDefinition → Variable COLON Type · DefaultValueOpt DirectivesConstOpt
        DefaultValueOpt → · EQUALS ValueConst
        DefaultValueOpt → ε ·

      I54:
        Type → NamedType ·
        NonNullType → NamedType · BANG

      I55:
        NamedType → NAME ·

      I56:
        Type → ListType ·
        NonNullType → ListType · BANG

      I57:
        ListType → OPENING_BRACKET · Type CLOSING_BRACKET
        Type → · NamedType
        NamedType → · NAME
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I58:
        Type → NonNullType ·

      I59:
        Argument → NAME COLON Value ·

      I60:
        Value → Variable ·

      I61:
        Value → NumberValue ·

      I62:
        NumberValue → NUMBER ·

      I63:
        Value → StringValue ·

      I64:
        StringValue → STRING_VALUE ·

      I65:
        StringValue → BLOCK_STRING_VALUE ·

      I66:
        Value → NamedValue ·

      I67:
        NamedValue → NAME ·

      I68:
        Value → ListValue ·

      I69:
        ListValue → OPENING_BRACKET · CLOSING_BRACKET
        ListValue → OPENING_BRACKET · ListValueList CLOSING_BRACKET
        ListValueList → · Value
        Value → · Variable
        Variable → · DOLLAR NAME
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · NAME
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE
        ListValueList → · ListValueList Value

      I70:
        Value → ObjectValue ·

      I71:
        ObjectValue → OPENING_BRACE · CLOSING_BRACE
        ObjectValue → OPENING_BRACE · ObjectFieldList CLOSING_BRACE
        ObjectFieldList → · ObjectField
        ObjectField → · NAME COLON Value
        ObjectFieldList → · ObjectFieldList ObjectField

      I72:
        Field → Alias NAME ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I73:
        VariableDefinition → Variable COLON Type DefaultValueOpt · DirectivesConstOpt
        DirectivesConstOpt → · DirectiveConstList
        DirectiveConstList → · DirectiveConst
        DirectiveConst → · AT NAME ArgumentsConstOpt
        DirectiveConstList → · DirectiveConstList DirectiveConst
        DirectivesConstOpt → ε ·

      I74:
        DefaultValueOpt → EQUALS · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I75:
        NonNullType → NamedType BANG ·

      I76:
        NonNullType → ListType BANG ·

      I77:
        ListType → OPENING_BRACKET Type · CLOSING_BRACKET

      I78:
        ListValue → OPENING_BRACKET CLOSING_BRACKET ·

      I79:
        ListValue → OPENING_BRACKET ListValueList · CLOSING_BRACKET
        ListValueList → ListValueList · Value
        Value → · Variable
        Variable → · DOLLAR NAME
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · NAME
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I80:
        ListValueList → Value ·

      I81:
        ObjectValue → OPENING_BRACE CLOSING_BRACE ·

      I82:
        ObjectValue → OPENING_BRACE ObjectFieldList · CLOSING_BRACE
        ObjectFieldList → ObjectFieldList · ObjectField
        ObjectField → · NAME COLON Value

      I83:
        ObjectFieldList → ObjectField ·

      I84:
        ObjectField → NAME · COLON Value

      I85:
        VariableDefinition → Variable COLON Type DefaultValueOpt DirectivesConstOpt ·

      I86:
        DirectivesConstOpt → DirectiveConstList ·
        DirectiveConstList → DirectiveConstList · DirectiveConst
        DirectiveConst → · AT NAME ArgumentsConstOpt

      I87:
        DirectiveConstList → DirectiveConst ·

      I88:
        DirectiveConst → AT · NAME ArgumentsConstOpt

      I89:
        DefaultValueOpt → EQUALS ValueConst ·

      I90:
        ValueConst → NumberValue ·

      I91:
        ValueConst → StringValue ·

      I92:
        ValueConst → NamedValue ·

      I93:
        ValueConst → ListValueConst ·

      I94:
        ListValueConst → OPENING_BRACKET · CLOSING_BRACKET
        ListValueConst → OPENING_BRACKET · ListValueConstList CLOSING_BRACKET
        ListValueConstList → · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE
        ListValueConstList → · ListValueConstList ValueConst

      I95:
        ValueConst → ObjectValueConst ·

      I96:
        ObjectValueConst → OPENING_BRACE · CLOSING_BRACE
        ObjectValueConst → OPENING_BRACE · ObjectFieldConstList CLOSING_BRACE
        ObjectFieldConstList → · ObjectFieldConst
        ObjectFieldConst → · NAME COLON ValueConst
        ObjectFieldConstList → · ObjectFieldConstList ObjectFieldConst

      I97:
        ListType → OPENING_BRACKET Type CLOSING_BRACKET ·

      I98:
        ListValue → OPENING_BRACKET ListValueList CLOSING_BRACKET ·

      I99:
        ListValueList → ListValueList Value ·

      I100:
        ObjectValue → OPENING_BRACE ObjectFieldList CLOSING_BRACE ·

      I101:
        ObjectFieldList → ObjectFieldList ObjectField ·

      I102:
        ObjectField → NAME COLON · Value
        Value → · Variable
        Variable → · DOLLAR NAME
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · NAME
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I103:
        DirectiveConstList → DirectiveConstList DirectiveConst ·

      I104:
        DirectiveConst → AT NAME · ArgumentsConstOpt
        ArgumentsConstOpt → · OPENING_PAREN ArgumentConstList CLOSING_PAREN
        ArgumentsConstOpt → ε ·

      I105:
        ListValueConst → OPENING_BRACKET CLOSING_BRACKET ·

      I106:
        ListValueConst → OPENING_BRACKET ListValueConstList · CLOSING_BRACKET
        ListValueConstList → ListValueConstList · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I107:
        ListValueConstList → ValueConst ·

      I108:
        ObjectValueConst → OPENING_BRACE CLOSING_BRACE ·

      I109:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList · CLOSING_BRACE
        ObjectFieldConstList → ObjectFieldConstList · ObjectFieldConst
        ObjectFieldConst → · NAME COLON ValueConst

      I110:
        ObjectFieldConstList → ObjectFieldConst ·

      I111:
        ObjectFieldConst → NAME · COLON ValueConst

      I112:
        ObjectField → NAME COLON Value ·

      I113:
        DirectiveConst → AT NAME ArgumentsConstOpt ·

      I114:
        ArgumentsConstOpt → OPENING_PAREN · ArgumentConstList CLOSING_PAREN
        ArgumentConstList → · ArgumentConst
        ArgumentConst → · NAME COLON ValueConst
        ArgumentConstList → · ArgumentConstList ArgumentConst

      I115:
        ListValueConst → OPENING_BRACKET ListValueConstList CLOSING_BRACKET ·

      I116:
        ListValueConstList → ListValueConstList ValueConst ·

      I117:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList CLOSING_BRACE ·

      I118:
        ObjectFieldConstList → ObjectFieldConstList ObjectFieldConst ·

      I119:
        ObjectFieldConst → NAME COLON · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I120:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList · CLOSING_PAREN
        ArgumentConstList → ArgumentConstList · ArgumentConst
        ArgumentConst → · NAME COLON ValueConst

      I121:
        ArgumentConstList → ArgumentConst ·

      I122:
        ArgumentConst → NAME · COLON ValueConst

      I123:
        ObjectFieldConst → NAME COLON ValueConst ·

      I124:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList CLOSING_PAREN ·

      I125:
        ArgumentConstList → ArgumentConstList ArgumentConst ·

      I126:
        ArgumentConst → NAME COLON · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · NAME
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I127:
        ArgumentConst → NAME COLON ValueConst ·
      "
    `);
  });
});
