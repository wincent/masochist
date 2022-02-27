import {dedent} from '@masochist/common';

import {stringifyItemSets} from '..';
import getItemSets from '../getItemSets';
import {subsetGrammar, toyGrammar} from './grammars';

describe('getItemSets()', () => {
  it('produces items sets for the toy grammar', () => {
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

  it('produces items sets for the subset grammar', () => {
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
});
