import {dedent} from '@masochist/common';

import {itemSets} from '../document';
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
        Definition → · FragmentDefinition
        FragmentDefinition → · FRAGMENT FragmentName ON NamedType DirectivesOpt SelectionSet
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
        Definition → · FragmentDefinition
        FragmentDefinition → · FRAGMENT FragmentName ON NamedType DirectivesOpt SelectionSet

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
        Name → · FRAGMENT
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
        Name → · FRAGMENT
        Name → · ON
        Field → · Alias Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → · Name COLON
        Selection → · FragmentSpread
        FragmentSpread → · ELLIPSIS FragmentName DirectivesOpt
        Selection → · InlineFragment
        InlineFragment → · ELLIPSIS TypeConditionOpt DirectivesOpt SelectionSet
        SelectionList → · SelectionList Selection

      I10:
        Definition → FragmentDefinition ·

      I11:
        FragmentDefinition → FRAGMENT · FragmentName ON NamedType DirectivesOpt SelectionSet
        FragmentName → · NAME

      I12:
        DefinitionList → DefinitionList Definition ·

      I13:
        OperationDefinition → OperationType OperationNameOpt · VariableDefinitionsOpt DirectivesOpt SelectionSet
        VariableDefinitionsOpt → · OPENING_PAREN VariableDefinitionList CLOSING_PAREN
        VariableDefinitionsOpt → ε ·

      I14:
        OperationNameOpt → Name ·

      I15:
        Name → NAME ·

      I16:
        Name → FRAGMENT ·

      I17:
        Name → ON ·

      I18:
        SelectionSet → OPENING_BRACE SelectionList · CLOSING_BRACE
        SelectionList → SelectionList · Selection
        Selection → · Field
        Field → · Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        Field → · Alias Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → · Name COLON
        Selection → · FragmentSpread
        FragmentSpread → · ELLIPSIS FragmentName DirectivesOpt
        Selection → · InlineFragment
        InlineFragment → · ELLIPSIS TypeConditionOpt DirectivesOpt SelectionSet

      I19:
        SelectionList → Selection ·

      I20:
        Selection → Field ·

      I21:
        Field → Name · ArgumentsOpt DirectivesOpt SelectionSetOpt
        Alias → Name · COLON
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I22:
        Field → Alias · Name ArgumentsOpt DirectivesOpt SelectionSetOpt
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I23:
        Selection → FragmentSpread ·

      I24:
        FragmentSpread → ELLIPSIS · FragmentName DirectivesOpt
        InlineFragment → ELLIPSIS · TypeConditionOpt DirectivesOpt SelectionSet
        FragmentName → · NAME
        TypeConditionOpt → · ON NamedType
        TypeConditionOpt → ε ·

      I25:
        Selection → InlineFragment ·

      I26:
        FragmentDefinition → FRAGMENT FragmentName · ON NamedType DirectivesOpt SelectionSet

      I27:
        FragmentName → NAME ·

      I28:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I29:
        VariableDefinitionsOpt → OPENING_PAREN · VariableDefinitionList CLOSING_PAREN
        VariableDefinitionList → · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR Name
        VariableDefinitionList → · VariableDefinitionList VariableDefinition

      I30:
        SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·

      I31:
        SelectionList → SelectionList Selection ·

      I32:
        Field → Name ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I33:
        Alias → Name COLON ·

      I34:
        ArgumentsOpt → OPENING_PAREN · ArgumentList CLOSING_PAREN
        ArgumentList → · Argument
        Argument → · Name COLON Value
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        ArgumentList → · ArgumentList Argument

      I35:
        Field → Alias Name · ArgumentsOpt DirectivesOpt SelectionSetOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I36:
        FragmentSpread → ELLIPSIS FragmentName · DirectivesOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I37:
        InlineFragment → ELLIPSIS TypeConditionOpt · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I38:
        TypeConditionOpt → ON · NamedType
        NamedType → · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I39:
        FragmentDefinition → FRAGMENT FragmentName ON · NamedType DirectivesOpt SelectionSet
        NamedType → · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I40:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I41:
        DirectivesOpt → DirectiveList ·
        DirectiveList → DirectiveList · Directive
        Directive → · AT Name ArgumentsOpt

      I42:
        DirectiveList → Directive ·

      I43:
        Directive → AT · Name ArgumentsOpt
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I44:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList · CLOSING_PAREN
        VariableDefinitionList → VariableDefinitionList · VariableDefinition
        VariableDefinition → · Variable COLON Type DefaultValueOpt DirectivesConstOpt
        Variable → · DOLLAR Name

      I45:
        VariableDefinitionList → VariableDefinition ·

      I46:
        VariableDefinition → Variable · COLON Type DefaultValueOpt DirectivesConstOpt

      I47:
        Variable → DOLLAR · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I48:
        Field → Name ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I49:
        ArgumentsOpt → OPENING_PAREN ArgumentList · CLOSING_PAREN
        ArgumentList → ArgumentList · Argument
        Argument → · Name COLON Value
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I50:
        ArgumentList → Argument ·

      I51:
        Argument → Name · COLON Value

      I52:
        Field → Alias Name ArgumentsOpt · DirectivesOpt SelectionSetOpt
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I53:
        FragmentSpread → ELLIPSIS FragmentName DirectivesOpt ·

      I54:
        InlineFragment → ELLIPSIS TypeConditionOpt DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I55:
        TypeConditionOpt → ON NamedType ·

      I56:
        NamedType → Name ·

      I57:
        FragmentDefinition → FRAGMENT FragmentName ON NamedType · DirectivesOpt SelectionSet
        DirectivesOpt → · DirectiveList
        DirectiveList → · Directive
        Directive → · AT Name ArgumentsOpt
        DirectiveList → · DirectiveList Directive
        DirectivesOpt → ε ·

      I58:
        OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet ·

      I59:
        DirectiveList → DirectiveList Directive ·

      I60:
        Directive → AT Name · ArgumentsOpt
        ArgumentsOpt → · OPENING_PAREN ArgumentList CLOSING_PAREN
        ArgumentsOpt → ε ·

      I61:
        VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList CLOSING_PAREN ·

      I62:
        VariableDefinitionList → VariableDefinitionList VariableDefinition ·

      I63:
        VariableDefinition → Variable COLON · Type DefaultValueOpt DirectivesConstOpt
        Type → · NamedType
        NamedType → · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I64:
        Variable → DOLLAR Name ·

      I65:
        Field → Name ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I66:
        SelectionSetOpt → SelectionSet ·

      I67:
        ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN ·

      I68:
        ArgumentList → ArgumentList Argument ·

      I69:
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
        Name → · FRAGMENT
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I70:
        Field → Alias Name ArgumentsOpt DirectivesOpt · SelectionSetOpt
        SelectionSetOpt → · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE
        SelectionSetOpt → ε ·

      I71:
        InlineFragment → ELLIPSIS TypeConditionOpt DirectivesOpt SelectionSet ·

      I72:
        FragmentDefinition → FRAGMENT FragmentName ON NamedType DirectivesOpt · SelectionSet
        SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE

      I73:
        Directive → AT Name ArgumentsOpt ·

      I74:
        VariableDefinition → Variable COLON Type · DefaultValueOpt DirectivesConstOpt
        DefaultValueOpt → · EQUALS ValueConst
        DefaultValueOpt → ε ·

      I75:
        Type → NamedType ·
        NonNullType → NamedType · BANG

      I76:
        Type → ListType ·
        NonNullType → ListType · BANG

      I77:
        ListType → OPENING_BRACKET · Type CLOSING_BRACKET
        Type → · NamedType
        NamedType → · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        Type → · ListType
        ListType → · OPENING_BRACKET Type CLOSING_BRACKET
        Type → · NonNullType
        NonNullType → · ListType BANG
        NonNullType → · NamedType BANG

      I78:
        Type → NonNullType ·

      I79:
        Argument → Name COLON Value ·

      I80:
        Value → Variable ·

      I81:
        Value → NumberValue ·

      I82:
        NumberValue → NUMBER ·

      I83:
        Value → StringValue ·

      I84:
        StringValue → STRING_VALUE ·

      I85:
        StringValue → BLOCK_STRING_VALUE ·

      I86:
        Value → NamedValue ·

      I87:
        NamedValue → Name ·

      I88:
        Value → ListValue ·

      I89:
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
        Name → · FRAGMENT
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE
        ListValueList → · ListValueList Value

      I90:
        Value → ObjectValue ·

      I91:
        ObjectValue → OPENING_BRACE · CLOSING_BRACE
        ObjectValue → OPENING_BRACE · ObjectFieldList CLOSING_BRACE
        ObjectFieldList → · ObjectField
        ObjectField → · Name COLON Value
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        ObjectFieldList → · ObjectFieldList ObjectField

      I92:
        Field → Alias Name ArgumentsOpt DirectivesOpt SelectionSetOpt ·

      I93:
        FragmentDefinition → FRAGMENT FragmentName ON NamedType DirectivesOpt SelectionSet ·

      I94:
        VariableDefinition → Variable COLON Type DefaultValueOpt · DirectivesConstOpt
        DirectivesConstOpt → · DirectiveConstList
        DirectiveConstList → · DirectiveConst
        DirectiveConst → · AT Name ArgumentsConstOpt
        DirectiveConstList → · DirectiveConstList DirectiveConst
        DirectivesConstOpt → ε ·

      I95:
        DefaultValueOpt → EQUALS · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I96:
        NonNullType → NamedType BANG ·

      I97:
        NonNullType → ListType BANG ·

      I98:
        ListType → OPENING_BRACKET Type · CLOSING_BRACKET

      I99:
        ListValue → OPENING_BRACKET CLOSING_BRACKET ·

      I100:
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
        Name → · FRAGMENT
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I101:
        ListValueList → Value ·

      I102:
        ObjectValue → OPENING_BRACE CLOSING_BRACE ·

      I103:
        ObjectValue → OPENING_BRACE ObjectFieldList · CLOSING_BRACE
        ObjectFieldList → ObjectFieldList · ObjectField
        ObjectField → · Name COLON Value
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I104:
        ObjectFieldList → ObjectField ·

      I105:
        ObjectField → Name · COLON Value

      I106:
        VariableDefinition → Variable COLON Type DefaultValueOpt DirectivesConstOpt ·

      I107:
        DirectivesConstOpt → DirectiveConstList ·
        DirectiveConstList → DirectiveConstList · DirectiveConst
        DirectiveConst → · AT Name ArgumentsConstOpt

      I108:
        DirectiveConstList → DirectiveConst ·

      I109:
        DirectiveConst → AT · Name ArgumentsConstOpt
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I110:
        DefaultValueOpt → EQUALS ValueConst ·

      I111:
        ValueConst → NumberValue ·

      I112:
        ValueConst → StringValue ·

      I113:
        ValueConst → NamedValue ·

      I114:
        ValueConst → ListValueConst ·

      I115:
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
        Name → · FRAGMENT
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE
        ListValueConstList → · ListValueConstList ValueConst

      I116:
        ValueConst → ObjectValueConst ·

      I117:
        ObjectValueConst → OPENING_BRACE · CLOSING_BRACE
        ObjectValueConst → OPENING_BRACE · ObjectFieldConstList CLOSING_BRACE
        ObjectFieldConstList → · ObjectFieldConst
        ObjectFieldConst → · Name COLON ValueConst
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        ObjectFieldConstList → · ObjectFieldConstList ObjectFieldConst

      I118:
        ListType → OPENING_BRACKET Type CLOSING_BRACKET ·

      I119:
        ListValue → OPENING_BRACKET ListValueList CLOSING_BRACKET ·

      I120:
        ListValueList → ListValueList Value ·

      I121:
        ObjectValue → OPENING_BRACE ObjectFieldList CLOSING_BRACE ·

      I122:
        ObjectFieldList → ObjectFieldList ObjectField ·

      I123:
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
        Name → · FRAGMENT
        Name → · ON
        Value → · ListValue
        ListValue → · OPENING_BRACKET CLOSING_BRACKET
        ListValue → · OPENING_BRACKET ListValueList CLOSING_BRACKET
        Value → · ObjectValue
        ObjectValue → · OPENING_BRACE CLOSING_BRACE
        ObjectValue → · OPENING_BRACE ObjectFieldList CLOSING_BRACE

      I124:
        DirectiveConstList → DirectiveConstList DirectiveConst ·

      I125:
        DirectiveConst → AT Name · ArgumentsConstOpt
        ArgumentsConstOpt → · OPENING_PAREN ArgumentConstList CLOSING_PAREN
        ArgumentsConstOpt → ε ·

      I126:
        ListValueConst → OPENING_BRACKET CLOSING_BRACKET ·

      I127:
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
        Name → · FRAGMENT
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I128:
        ListValueConstList → ValueConst ·

      I129:
        ObjectValueConst → OPENING_BRACE CLOSING_BRACE ·

      I130:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList · CLOSING_BRACE
        ObjectFieldConstList → ObjectFieldConstList · ObjectFieldConst
        ObjectFieldConst → · Name COLON ValueConst
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I131:
        ObjectFieldConstList → ObjectFieldConst ·

      I132:
        ObjectFieldConst → Name · COLON ValueConst

      I133:
        ObjectField → Name COLON Value ·

      I134:
        DirectiveConst → AT Name ArgumentsConstOpt ·

      I135:
        ArgumentsConstOpt → OPENING_PAREN · ArgumentConstList CLOSING_PAREN
        ArgumentConstList → · ArgumentConst
        ArgumentConst → · Name COLON ValueConst
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        ArgumentConstList → · ArgumentConstList ArgumentConst

      I136:
        ListValueConst → OPENING_BRACKET ListValueConstList CLOSING_BRACKET ·

      I137:
        ListValueConstList → ListValueConstList ValueConst ·

      I138:
        ObjectValueConst → OPENING_BRACE ObjectFieldConstList CLOSING_BRACE ·

      I139:
        ObjectFieldConstList → ObjectFieldConstList ObjectFieldConst ·

      I140:
        ObjectFieldConst → Name COLON · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I141:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList · CLOSING_PAREN
        ArgumentConstList → ArgumentConstList · ArgumentConst
        ArgumentConst → · Name COLON ValueConst
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON

      I142:
        ArgumentConstList → ArgumentConst ·

      I143:
        ArgumentConst → Name · COLON ValueConst

      I144:
        ObjectFieldConst → Name COLON ValueConst ·

      I145:
        ArgumentsConstOpt → OPENING_PAREN ArgumentConstList CLOSING_PAREN ·

      I146:
        ArgumentConstList → ArgumentConstList ArgumentConst ·

      I147:
        ArgumentConst → Name COLON · ValueConst
        ValueConst → · NumberValue
        NumberValue → · NUMBER
        ValueConst → · StringValue
        StringValue → · STRING_VALUE
        StringValue → · BLOCK_STRING_VALUE
        ValueConst → · NamedValue
        NamedValue → · Name
        Name → · NAME
        Name → · FRAGMENT
        Name → · ON
        ValueConst → · ListValueConst
        ListValueConst → · OPENING_BRACKET CLOSING_BRACKET
        ListValueConst → · OPENING_BRACKET ListValueConstList CLOSING_BRACKET
        ValueConst → · ObjectValueConst
        ObjectValueConst → · OPENING_BRACE CLOSING_BRACE
        ObjectValueConst → · OPENING_BRACE ObjectFieldConstList CLOSING_BRACE

      I148:
        ArgumentConst → Name COLON ValueConst ·
      "
    `);
  });
});
