import {dedent} from '@masochist/common';

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

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/__tests__/getItemSets-test.ts`.
});
