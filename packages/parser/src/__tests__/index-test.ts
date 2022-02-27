import {dedent} from '@masochist/common';

import {stringifyGrammar, stringifyParseTable} from '..';
import getAugmentedGrammar from '../getAugmentedGrammar';
import getItemSets from '../getItemSets';
import getParseTable from '../getParseTable';
import {toyGrammar} from './grammars';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';

// TODO: also add tests for full GraphQL grammar.

describe('stringifyGrammar()', () => {
  it('returns a stringified toy grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(toyGrammar);

    // Note the use of rule numbers here (to makes this output useful in
    // conjunction with the output of the `stringifyParseTable()` function).
    expect(stringifyGrammar(augmentedGrammar)).toBe(
      dedent`
        %token eq
        %token star
        %token x

        r0: S' → S
        r1: S → N
        r2: N → V eq E
        r3: N → E
        r4: E → V
        r5: V → x
        r6: V → star E
      ` + '\n',
    );
  });
});

describe('stringifyParseTable()', () => {
  it('returns a stringified parse table for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, toyGrammar);
    const parseTable = getParseTable(itemSets, transitionTable, toyGrammar);
    expect(stringifyParseTable(parseTable)).toEqual(
      dedent`
        | State | eq | star |  x |      $ |  E | N | S | V |
        |-------|----|------|----|--------|----|---|---|---|
        |     0 |    |   s5 | s4 |        |  6 | 2 | 1 | 3 |
        |     1 |    |      |    | accept |    |   |   |   |
        |     2 |    |      |    |     r1 |    |   |   |   |
        |     3 | s7 |      |    |     r4 |    |   |   |   |
        |     4 | r5 |      |    |     r5 |    |   |   |   |
        |     5 |    |   s5 | s4 |        |  8 |   |   | 9 |
        |     6 |    |      |    |     r3 |    |   |   |   |
        |     7 |    |   s5 | s4 |        | 10 |   |   | 9 |
        |     8 | r6 |      |    |     r6 |    |   |   |   |
        |     9 | r4 |      |    |     r4 |    |   |   |   |
        |    10 |    |      |    |     r2 |    |   |   |   |
      ` + '\n',
    );
  });
});
