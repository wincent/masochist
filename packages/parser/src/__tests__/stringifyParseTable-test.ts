import {describe, expect, it} from '@jest/globals';
import {dedent} from '@masochist/common';

import getItemSets from '../getItemSets';
import getParseTable from '../getParseTable';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';
import stringifyParseTable from '../stringifyParseTable';
import {toyGrammar} from './grammars';

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
