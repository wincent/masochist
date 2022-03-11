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
        OperationNameOpt → · Name
        Name → · NAME
        Name → · ON
        OperationNameOpt → ε ·

      I7:
        OperationType → NAME ·

      I8:
        OperationDefinition → SelectionSet ·

      I9:
        SelectionSet → OPENING_BRACE · SelectionList CLOSING_BRACE
        SelectionList → · Selection
        Selection → · Field
        Field → · Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Name → · NAME
        Name → · ON
        Field → · Alias Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → · Name COLON
        Selection → · FragmentSpread
        FragmentSpread → · ELLIPSIS FragmentName DirectivesOpt
        Selection → · InlineFragment
        InlineFragment → · ELLIPSIS TypeConditionOpt DirectivesOpt SelectionSet
        SelectionList → · SelectionList Selection

      I10:
        DefinitionList → DefinitionList Definition ·

      I11:
        OperationDefinition → OperationType OperationNameOpt · VariableDefinitionsOpt DirectivesOpt SelectionSet
        VariableDefinitionsOpt → · OPENING_PAREN VariableDefinitionList CLOSING_PAREN
        VariableDefinitionsOpt → ε ·

      I12:
        OperationNameOpt → Name ·

      I13:
        Name → NAME ·

      I14:
        Name → ON ·

      I15:
        SelectionSet → OPENING_BRACE SelectionList · CLOSING_BRACE
        SelectionList → SelectionList · Selection
        Selection → · Field
        Field → · Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Name → · NAME
        Name → · ON
        Field → · Alias Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → · Name COLON
        Selection → · FragmentSpread
        FragmentSpread → · ELLIPSIS FragmentName DirectivesOpt
        Selection → · InlineFragment
        InlineFragment → · ELLIPSIS TypeConditionOpt DirectivesOpt SelectionSet

      I16:
        SelectionList → Selection ·

      I17:
        Selection → Field ·

      I18:
        Field → Name · ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → Name · COLON
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I19:
        Field → Alias · Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Name → · NAME
        Name → · ON

      I20:
        Selection → FragmentSpread ·

      I21:
        FragmentSpread → ELLIPSIS · FragmentName DirectivesOpt
        InlineFragment → ELLIPSIS · TypeConditionOpt DirectivesOpt SelectionSet
        FragmentName → · NAME
        TypeConditionOpt → · ON NamedType
        TypeConditionOpt → ε ·

      I22:
        Selection → InlineFragment ·

      I23:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I24:
        VariableDefinitionsOpt → OPENING_PAREN · VariableDefinitionList CLOSING_PAREN
        VariableDefinitionList → · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR Name
        VariableDefinitionList → · VariableDefinitionList VariableDefinition

      I25:
        SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·

      I26:
        SelectionList → SelectionList Selection ·

      I27:
        Field → Name ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I28:
        Alias → Name COLON ·

      I29:
        ArgumentsOpt → OPENING_PAREN · ArgumentList CLOSING_PAREN
        ArgumentList → · Argument
        Argument → · Name COLON Value
        Name → · NAME
        Name → · ON
        ArgumentList → · ArgumentList Argument

      I30:
        Field → Alias Name · ArgumentsOpt DirectivesOpt SelectionSetOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I31:
        FragmentSpread → ELLIPSIS FragmentName · DirectivesOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I32:
        InlineFragment → ELLIPSIS TypeConditionOpt · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I33:
        FragmentName → NAME ·

      I34:
        TypeConditionOpt → ON · NamedType
        NamedType → · Name
        Name → · NAME
        Name → · ON

      I35:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I36:
        DirectivesOpt → DirectiveList ·
        DirectiveList → DirectiveList · Directive
        Directive → · AT Name ArgumentsOpt

      I37:
        DirectiveList → Directive ·

      I38:
        Directive → AT · Name ArgumentsOpt
        Name → · NAME
        Name → · ON

      I39:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList · CLOSING_PAREN
        VariableDefinitionList → VariableDefinitionList · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR Name

      I40:
        VariableDefinitionList → VariableDefinition ·

      I41:
        VariableDefinition → Variable · COLON Type DefaultValueOpt DirectivesConstOpt

      I42:
        Variable → DOLLAR · Name
        Name → · NAME
        Name → · ON

      I43:
        Field → Name ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I44:
        ArgumentsOpt → OPENING_PAREN ArgumentList · CLOSING_PAREN
        ArgumentList → ArgumentList · Argument
        Argument → · Name COLON Value
        Name → · NAME
        Name → · ON

      I45:
        ArgumentList → Argument ·

      I46:
        Argument → Name · COLON Value

      I47:
        Field → Alias Name ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I48:
        FragmentSpread → ELLIPSIS FragmentName DirectivesOpt ·

      I49:
        InlineFragment → ELLIPSIS TypeConditionOpt DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I50:
        TypeConditionOpt → ON NamedType ·

      I51:
        NamedType → Name ·

      I52:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet ·

      I53:
        DirectiveList → DirectiveList Directive ·

      I54:
        Directive → AT Name · ArgumentsOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I55:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList CLOSING_PAREN ·

      I56:
        VariableDefinitionList → VariableDefinitionList VariableDefinition ·

      I57:
        VariableDefinition → Variable COLON · Type DefaultValueOpt DirectivesConstOpt
        Type → · NamedType
        NamedType → · Name
        Name → · NAME
        Name → · ON
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I58:
        Variable → DOLLAR Name ·

      I59:
        Field → Name ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I60:
        SelectionSetOpt → SelectionSet ·

      I61:
        ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN ·

      I62:
        ArgumentList → ArgumentList Argument ·

      I63:
        Argument → Name COLON · Value
        Value → · Variable
        Variable → · DOLLAR Name
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I64:
        Field → Alias Name ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I65:
        InlineFragment → ELLIPSIS TypeConditionOpt DirectivesOpt SelectionSet ·

      I66:
        Directive → AT Name ArgumentsOpt ·

      I67:
        VariableDefinition → Variable COLON Type · DefaultValueOpt DirectivesConstOpt
        DefaultValueOpt → · EQUALS ValueConst
        DefaultValueOpt → ε ·

      I68:
        Type → NamedType ·
        NonNullType → NamedType · BANG

      I69:
        Type → ListType ·
        NonNullType → ListType · BANG

      I70:
        ListType → OPENING_BRACKET · Type CLOSING_BRACKET
        Type → · NamedType
        NamedType → · Name
        Name → · NAME
        Name → · ON
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I71:
        Type → NonNullType ·

      I72:
        Argument → Name COLON Value ·

      I73:
        Value → Variable ·

      I74:
        Value → NumberValue ·

      I75:
        NumberValue → NUMBER ·

      I76:
        Value → StringValue ·

      I77:
        StringValue → STRING_VALUE ·

      I78:
        StringValue → BLOCK_STRING_VALUE ·

      I79:
        Value → NamedValue ·

      I80:
        NamedValue → Name ·

      I81:
        Value → ListValue ·

      I82:
        ListValue → OPENING_BRACKET · CLOSING_BRACKET
        ListValue → OPENING_BRACKET · ListValueList CLOSING_BRACKET
        ListValueList → · Value
        Value → · Variable
        Variable → · DOLLAR Name
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE
        ListValueList → · ListValueList Value

      I83:
        Value → ObjectValue ·

      I84:
        ObjectValue → OPENING_BRACE · CLOSING_BRACE
        ObjectValue → OPENING_BRACE · ObjectFieldList CLOSING_BRACE
        ObjectFieldList → · ObjectField
        ObjectField → · Name COLON Value
        Name → · NAME
        Name → · ON
        ObjectFieldList → · ObjectFieldList ObjectField

      I85:
        Field → Alias Name ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I86:
        VariableDefinition → Variable COLON Type DefaultValueOpt · DirectivesConstOpt
        DirectivesConstOpt → · DirectiveConstList
        DirectiveConstList → · DirectiveConst
        DirectiveConst → · AT Name ArgumentsConstOpt
        DirectiveConstList → · DirectiveConstList DirectiveConst
        DirectivesConstOpt → ε ·

      I87:
        DefaultValueOpt → EQUALS · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I88:
        NonNullType → NamedType BANG ·

      I89:
        NonNullType → ListType BANG ·

      I90:
        ListType → OPENING_BRACKET Type · CLOSING_BRACKET

      I91:
        ListValue → OPENING_BRACKET CLOSING_BRACKET ·

      I92:
        ListValue → OPENING_BRACKET ListValueList · CLOSING_BRACKET
        ListValueList → ListValueList · Value
        Value → · Variable
        Variable → · DOLLAR Name
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I93:
        ListValueList → Value ·

      I94:
        ObjectValue → OPENING_BRACE CLOSING_BRACE ·

      I95:
        ObjectValue → OPENING_BRACE ObjectFieldList · CLOSING_BRACE
        ObjectFieldList → ObjectFieldList · ObjectField
        ObjectField → · Name COLON Value
        Name → · NAME
        Name → · ON

      I96:
        ObjectFieldList → ObjectField ·

      I97:
        ObjectField → Name · COLON Value

      I98:
        VariableDefinition → Variable COLON Type DefaultValueOpt DirectivesConstOpt ·

      I99:
        DirectivesConstOpt → DirectiveConstList ·
        DirectiveConstList → DirectiveConstList · DirectiveConst
        DirectiveConst → · AT Name ArgumentsConstOpt

      I100:
        DirectiveConstList → DirectiveConst ·

      I101:
        DirectiveConst → AT · Name ArgumentsConstOpt
        Name → · NAME
        Name → · ON

      I102:
        DefaultValueOpt → EQUALS ValueConst ·

      I103:
        ValueConst → NumberValue ·

      I104:
        ValueConst → StringValue ·

      I105:
        ValueConst → NamedValue ·

      I106:
        ValueConst → ListValueConst ·

      I107:
        ListValueConst → OPENING_BRACKET · CLOSING_BRACKET
        ListValueConst → OPENING_BRACKET · ListValueConstList CLOSING_BRACKET
        ListValueConstList → · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE
        ListValueConstList → · ListValueConstList ValueConst

      I108:
        ValueConst → ObjectValueConst ·

      I109:
        ObjectValueConst → OPENING_BRACE · CLOSING_BRACE
        ObjectValueConst → OPENING_BRACE · ObjectFieldConstList CLOSING_BRACE
        ObjectFieldConstList → · ObjectFieldConst
        ObjectFieldConst → · Name COLON ValueConst
        Name → · NAME
        Name → · ON
        ObjectFieldConstList → · ObjectFieldConstList ObjectFieldConst

      I110:
        ListType → OPENING_BRACKET Type CLOSING_BRACKET ·

      I111:
        ListValue → OPENING_BRACKET ListValueList CLOSING_BRACKET ·

      I112:
        ListValueList → ListValueList Value ·

      I113:
        ObjectValue → OPENING_BRACE ObjectFieldList CLOSING_BRACE ·

      I114:
        ObjectFieldList → ObjectFieldList ObjectField ·

      I115:
        ObjectField → Name COLON · Value
        Value → · Variable
        Variable → · DOLLAR Name
        Value → · NumberValue
        NumberValue → · NUMBER
        Value → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        Value → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I116:
        DirectiveConstList → DirectiveConstList DirectiveConst ·

      I117:
        DirectiveConst → AT Name · ArgumentsConstOpt
        ArgumentsConstOpt → · OPENING_PAREN ArgumentConstList CLOSING_PAREN
        ArgumentsConstOpt → ε ·

      I118:
        ListValueConst → OPENING_BRACKET CLOSING_BRACKET ·

      I119:
        ListValueConst → OPENING_BRACKET ListValueConstList · CLOSING_BRACKET
        ListValueConstList → ListValueConstList · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I120:
        ListValueConstList → ValueConst ·

      I121:
        ObjectValueConst → OPENING_BRACE CLOSING_BRACE ·

      I122:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList · CLOSING_BRACE
        ObjectFieldConstList → ObjectFieldConstList · ObjectFieldConst
        ObjectFieldConst → · Name COLON ValueConst
        Name → · NAME
        Name → · ON

      I123:
        ObjectFieldConstList → ObjectFieldConst ·

      I124:
        ObjectFieldConst → Name · COLON ValueConst

      I125:
        ObjectField → Name COLON Value ·

      I126:
        DirectiveConst → AT Name ArgumentsConstOpt ·

      I127:
        ArgumentsConstOpt → OPENING_PAREN · ArgumentConstList CLOSING_PAREN
        ArgumentConstList → · ArgumentConst
        ArgumentConst → · Name COLON ValueConst
        Name → · NAME
        Name → · ON
        ArgumentConstList → · ArgumentConstList ArgumentConst

      I128:
        ListValueConst → OPENING_BRACKET ListValueConstList CLOSING_BRACKET ·

      I129:
        ListValueConstList → ListValueConstList ValueConst ·

      I130:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList CLOSING_BRACE ·

      I131:
        ObjectFieldConstList → ObjectFieldConstList ObjectFieldConst ·

      I132:
        ObjectFieldConst → Name COLON · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I133:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList · CLOSING_PAREN
        ArgumentConstList → ArgumentConstList · ArgumentConst
        ArgumentConst → · Name COLON ValueConst
        Name → · NAME
        Name → · ON

      I134:
        ArgumentConstList → ArgumentConst ·

      I135:
        ArgumentConst → Name · COLON ValueConst

      I136:
        ObjectFieldConst → Name COLON ValueConst ·

      I137:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList CLOSING_PAREN ·

      I138:
        ArgumentConstList → ArgumentConstList ArgumentConst ·

      I139:
        ArgumentConst → Name COLON · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I140:
        ArgumentConst → Name COLON ValueConst ·
      "
    `);
  });
});
