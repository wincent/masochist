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
        Selection → · FragmentSpread
        FragmentSpread → · ELLIPSIS NAME DirectivesOpt
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
        Selection → · FragmentSpread
        FragmentSpread → · ELLIPSIS NAME DirectivesOpt

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
        Selection → FragmentSpread ·

      I19:
        FragmentSpread → ELLIPSIS · NAME DirectivesOpt

      I20:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I21:
        VariableDefinitionsOpt → OPENING_PAREN · VariableDefinitionList CLOSING_PAREN
        VariableDefinitionList → · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR NAME
        VariableDefinitionList → · VariableDefinitionList VariableDefinition

      I22:
        SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·

      I23:
        SelectionList → SelectionList Selection ·

      I24:
        Field → NAME ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I25:
        Alias → NAME COLON ·

      I26:
        ArgumentsOpt → OPENING_PAREN · ArgumentList CLOSING_PAREN
        ArgumentList → · Argument
        Argument → · NAME COLON Value
        ArgumentList → · ArgumentList Argument

      I27:
        Field → Alias NAME · ArgumentsOpt DirectivesOpt SelectionSetOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I28:
        FragmentSpread → ELLIPSIS NAME · DirectivesOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I29:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I30:
        DirectivesOpt → DirectiveList ·
        DirectiveList → DirectiveList · Directive
        Directive → · AT NAME ArgumentsOpt

      I31:
        DirectiveList → Directive ·

      I32:
        Directive → AT · NAME ArgumentsOpt

      I33:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList · CLOSING_PAREN
        VariableDefinitionList → VariableDefinitionList · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR NAME

      I34:
        VariableDefinitionList → VariableDefinition ·

      I35:
        VariableDefinition → Variable · COLON Type DefaultValueOpt DirectivesConstOpt

      I36:
        Variable → DOLLAR · NAME

      I37:
        Field → NAME ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I38:
        ArgumentsOpt → OPENING_PAREN ArgumentList · CLOSING_PAREN
        ArgumentList → ArgumentList · Argument
        Argument → · NAME COLON Value

      I39:
        ArgumentList → Argument ·

      I40:
        Argument → NAME · COLON Value

      I41:
        Field → Alias NAME ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT NAME ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I42:
        FragmentSpread → ELLIPSIS NAME DirectivesOpt ·

      I43:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet ·

      I44:
        DirectiveList → DirectiveList Directive ·

      I45:
        Directive → AT NAME · ArgumentsOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I46:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList CLOSING_PAREN ·

      I47:
        VariableDefinitionList → VariableDefinitionList VariableDefinition ·

      I48:
        VariableDefinition → Variable COLON · Type DefaultValueOpt DirectivesConstOpt
        Type → · NamedType
        NamedType → · NAME
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I49:
        Variable → DOLLAR NAME ·

      I50:
        Field → NAME ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I51:
        SelectionSetOpt → SelectionSet ·

      I52:
        ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN ·

      I53:
        ArgumentList → ArgumentList Argument ·

      I54:
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

      I55:
        Field → Alias NAME ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I56:
        Directive → AT NAME ArgumentsOpt ·

      I57:
        VariableDefinition → Variable COLON Type · DefaultValueOpt DirectivesConstOpt
        DefaultValueOpt → · EQUALS ValueConst
        DefaultValueOpt → ε ·

      I58:
        Type → NamedType ·
        NonNullType → NamedType · BANG

      I59:
        NamedType → NAME ·

      I60:
        Type → ListType ·
        NonNullType → ListType · BANG

      I61:
        ListType → OPENING_BRACKET · Type CLOSING_BRACKET
        Type → · NamedType
        NamedType → · NAME
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I62:
        Type → NonNullType ·

      I63:
        Argument → NAME COLON Value ·

      I64:
        Value → Variable ·

      I65:
        Value → NumberValue ·

      I66:
        NumberValue → NUMBER ·

      I67:
        Value → StringValue ·

      I68:
        StringValue → STRING_VALUE ·

      I69:
        StringValue → BLOCK_STRING_VALUE ·

      I70:
        Value → NamedValue ·

      I71:
        NamedValue → NAME ·

      I72:
        Value → ListValue ·

      I73:
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

      I74:
        Value → ObjectValue ·

      I75:
        ObjectValue → OPENING_BRACE · CLOSING_BRACE
        ObjectValue → OPENING_BRACE · ObjectFieldList CLOSING_BRACE
        ObjectFieldList → · ObjectField
        ObjectField → · NAME COLON Value
        ObjectFieldList → · ObjectFieldList ObjectField

      I76:
        Field → Alias NAME ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I77:
        VariableDefinition → Variable COLON Type DefaultValueOpt · DirectivesConstOpt
        DirectivesConstOpt → · DirectiveConstList
        DirectiveConstList → · DirectiveConst
        DirectiveConst → · AT NAME ArgumentsConstOpt
        DirectiveConstList → · DirectiveConstList DirectiveConst
        DirectivesConstOpt → ε ·

      I78:
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

      I79:
        NonNullType → NamedType BANG ·

      I80:
        NonNullType → ListType BANG ·

      I81:
        ListType → OPENING_BRACKET Type · CLOSING_BRACKET

      I82:
        ListValue → OPENING_BRACKET CLOSING_BRACKET ·

      I83:
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

      I84:
        ListValueList → Value ·

      I85:
        ObjectValue → OPENING_BRACE CLOSING_BRACE ·

      I86:
        ObjectValue → OPENING_BRACE ObjectFieldList · CLOSING_BRACE
        ObjectFieldList → ObjectFieldList · ObjectField
        ObjectField → · NAME COLON Value

      I87:
        ObjectFieldList → ObjectField ·

      I88:
        ObjectField → NAME · COLON Value

      I89:
        VariableDefinition → Variable COLON Type DefaultValueOpt DirectivesConstOpt ·

      I90:
        DirectivesConstOpt → DirectiveConstList ·
        DirectiveConstList → DirectiveConstList · DirectiveConst
        DirectiveConst → · AT NAME ArgumentsConstOpt

      I91:
        DirectiveConstList → DirectiveConst ·

      I92:
        DirectiveConst → AT · NAME ArgumentsConstOpt

      I93:
        DefaultValueOpt → EQUALS ValueConst ·

      I94:
        ValueConst → NumberValue ·

      I95:
        ValueConst → StringValue ·

      I96:
        ValueConst → NamedValue ·

      I97:
        ValueConst → ListValueConst ·

      I98:
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

      I99:
        ValueConst → ObjectValueConst ·

      I100:
        ObjectValueConst → OPENING_BRACE · CLOSING_BRACE
        ObjectValueConst → OPENING_BRACE · ObjectFieldConstList CLOSING_BRACE
        ObjectFieldConstList → · ObjectFieldConst
        ObjectFieldConst → · NAME COLON ValueConst
        ObjectFieldConstList → · ObjectFieldConstList ObjectFieldConst

      I101:
        ListType → OPENING_BRACKET Type CLOSING_BRACKET ·

      I102:
        ListValue → OPENING_BRACKET ListValueList CLOSING_BRACKET ·

      I103:
        ListValueList → ListValueList Value ·

      I104:
        ObjectValue → OPENING_BRACE ObjectFieldList CLOSING_BRACE ·

      I105:
        ObjectFieldList → ObjectFieldList ObjectField ·

      I106:
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

      I107:
        DirectiveConstList → DirectiveConstList DirectiveConst ·

      I108:
        DirectiveConst → AT NAME · ArgumentsConstOpt
        ArgumentsConstOpt → · OPENING_PAREN ArgumentConstList CLOSING_PAREN
        ArgumentsConstOpt → ε ·

      I109:
        ListValueConst → OPENING_BRACKET CLOSING_BRACKET ·

      I110:
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

      I111:
        ListValueConstList → ValueConst ·

      I112:
        ObjectValueConst → OPENING_BRACE CLOSING_BRACE ·

      I113:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList · CLOSING_BRACE
        ObjectFieldConstList → ObjectFieldConstList · ObjectFieldConst
        ObjectFieldConst → · NAME COLON ValueConst

      I114:
        ObjectFieldConstList → ObjectFieldConst ·

      I115:
        ObjectFieldConst → NAME · COLON ValueConst

      I116:
        ObjectField → NAME COLON Value ·

      I117:
        DirectiveConst → AT NAME ArgumentsConstOpt ·

      I118:
        ArgumentsConstOpt → OPENING_PAREN · ArgumentConstList CLOSING_PAREN
        ArgumentConstList → · ArgumentConst
        ArgumentConst → · NAME COLON ValueConst
        ArgumentConstList → · ArgumentConstList ArgumentConst

      I119:
        ListValueConst → OPENING_BRACKET ListValueConstList CLOSING_BRACKET ·

      I120:
        ListValueConstList → ListValueConstList ValueConst ·

      I121:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList CLOSING_BRACE ·

      I122:
        ObjectFieldConstList → ObjectFieldConstList ObjectFieldConst ·

      I123:
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

      I124:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList · CLOSING_PAREN
        ArgumentConstList → ArgumentConstList · ArgumentConst
        ArgumentConst → · NAME COLON ValueConst

      I125:
        ArgumentConstList → ArgumentConst ·

      I126:
        ArgumentConst → NAME · COLON ValueConst

      I127:
        ObjectFieldConst → NAME COLON ValueConst ·

      I128:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList CLOSING_PAREN ·

      I129:
        ArgumentConstList → ArgumentConstList ArgumentConst ·

      I130:
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

      I131:
        ArgumentConst → NAME COLON ValueConst ·
      "
    `);
  });
});
