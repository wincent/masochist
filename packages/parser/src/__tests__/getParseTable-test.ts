import {dedent} from '@masochist/common';

import {grammar, table} from '..';
import getAugmentedGrammar from '../getAugmentedGrammar';
import getItemSets from '../getItemSets';
import getParseTable from '../getParseTable';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';
import stringifyGrammar from '../stringifyGrammar';
import stringifyParseTable from '../stringifyParseTable';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

describe('getParseTable()', () => {
  it('returns a ParseTable for the toy grammar', () => {
    const itemSets = getItemSets(toyGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, toyGrammar);
    expect(getParseTable(itemSets, transitionTable, toyGrammar)).toEqual([
      [
        {
          star: {kind: 'Shift', state: 5},
          x: {kind: 'Shift', state: 4},
        },
        {
          E: 6,
          N: 2,
          S: 1,
          V: 3,
        },
      ],
      [{$: {kind: 'Accept'}}, {}],
      [{$: {kind: 'Reduce', rule: 1}}, {}],
      [
        {
          eq: {kind: 'Shift', state: 7},
          $: {kind: 'Reduce', rule: 4},
        },
        {},
      ],
      [
        {
          eq: {kind: 'Reduce', rule: 5},
          $: {kind: 'Reduce', rule: 5},
        },
        {},
      ],
      [
        {
          star: {kind: 'Shift', state: 5},
          x: {kind: 'Shift', state: 4},
        },
        {
          E: 8,
          V: 9,
        },
      ],
      [
        {
          $: {kind: 'Reduce', rule: 3},
        },
        {},
      ],
      [
        {
          star: {kind: 'Shift', state: 5},
          x: {kind: 'Shift', state: 4},
        },
        {
          E: 10,
          V: 9,
        },
      ],
      [
        {
          eq: {kind: 'Reduce', rule: 6},
          $: {kind: 'Reduce', rule: 6},
        },
        {},
      ],
      [
        {
          eq: {kind: 'Reduce', rule: 4},
          $: {kind: 'Reduce', rule: 4},
        },
        {},
      ],
      [
        {
          $: {kind: 'Reduce', rule: 2},
        },
        {},
      ],
    ]);
  });

  it('returns a ParseTable for the subset grammar', () => {
    const itemSets = getItemSets(subsetGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, subsetGrammar);
    expect(getParseTable(itemSets, transitionTable, subsetGrammar)).toEqual([
      [
        {
          OPENING_BRACE: {kind: 'Shift', state: 7},
        },
        {
          Definition: 3,
          DefinitionList: 2,
          Document: 1,
          ExecutableDefinition: 4,
          OperationDefinition: 5,
          SelectionSet: 6,
        },
      ],
      [
        {
          $: {kind: 'Accept'},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Shift', state: 7},
          $: {kind: 'Reduce', rule: 1},
        },
        {
          Definition: 8,
          ExecutableDefinition: 4,
          OperationDefinition: 5,
          SelectionSet: 6,
        },
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 2},
          $: {kind: 'Reduce', rule: 2},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 4},
          $: {kind: 'Reduce', rule: 4},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 5},
          $: {kind: 'Reduce', rule: 5},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 6},
          $: {kind: 'Reduce', rule: 6},
        },
        {},
      ],
      [
        {
          NAME: {kind: 'Shift', state: 12},
        },
        {
          Field: 11,
          Selection: 10,
          SelectionList: 9,
        },
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 3},
          $: {kind: 'Reduce', rule: 3},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Shift', state: 13},
          NAME: {kind: 'Shift', state: 12},
        },
        {
          Field: 11,
          Selection: 14,
        },
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 8},
          NAME: {kind: 'Reduce', rule: 8},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 10},
          NAME: {kind: 'Reduce', rule: 10},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 11},
          NAME: {kind: 'Reduce', rule: 11},
        },
        {},
      ],
      [
        {
          OPENING_BRACE: {kind: 'Reduce', rule: 7},
          $: {kind: 'Reduce', rule: 7},
        },
        {},
      ],
      [
        {
          CLOSING_BRACE: {kind: 'Reduce', rule: 9},
          NAME: {kind: 'Reduce', rule: 9},
        },
        {},
      ],
    ]);
  });

  // Our result matches this one exactly:
  //
  //    https://cyberzhg.github.io/toolbox/lr1?grammar=UyAtPiBQcm9ncmFtClByb2dyYW0gLT4gQmFyT3B0IE9QRU4gRm9vTGlzdCBDTE9TRQpCYXJPcHQgLT4gQkFSIHwgz7UKRm9vTGlzdCAtPiBGb29MaXN0IEZPTyB8IEZPTw==
  //
  // with the exception of the "r6" action in state 0 on OPEN_BRACKET.
  //
  // In contrast:
  //
  //    http://smlweb.cpsc.ucalgary.ca/lalr1.php?grammar=S+-%3E+Program.%0AProgram+-%3E+BarOpt+open+FooList+close.%0AFooList+-%3E+FooList+foo+%7C+foo.%0ABarOpt+-%3E+bar+%7C+.&substs=
  //
  // does have that (necessary) action, although some of the state numbers
  // differ in trivial (but insignificant) ways.
  //
  it('returns a ParseTable for a grammar with epsilon productions', () => {
    const itemSets = getItemSets(epsilonGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, epsilonGrammar);
    const parseTable = getParseTable(itemSets, transitionTable, epsilonGrammar);
    expect(stringifyParseTable(parseTable)).toBe(
      dedent`
        | State | BAR | CLOSE_BRACKET | FOO | OPEN_BRACKET |      $ |BarOpt |FooList |Program | S |
        |-------|-----|---------------|-----|--------------|--------|-------|--------|--------|---|
        |     0 |  s4 |               |     |           r6 |        |     3 |        |      2 | 1 |
        |     1 |     |               |     |              | accept |       |        |        |   |
        |     2 |     |               |     |              |     r1 |       |        |        |   |
        |     3 |     |               |     |           s5 |        |       |        |        |   |
        |     4 |     |               |     |           r5 |        |       |        |        |   |
        |     5 |     |               |  s7 |              |        |       |      6 |        |   |
        |     6 |     |            s8 |  s9 |              |        |       |        |        |   |
        |     7 |     |            r4 |  r4 |              |        |       |        |        |   |
        |     8 |     |               |     |              |     r2 |       |        |        |   |
        |     9 |     |            r3 |  r3 |              |        |       |        |        |   |
      ` + '\n',
    );

    // Just to make the above actually readable...
    expect(stringifyGrammar(getAugmentedGrammar(epsilonGrammar))).toBe(
      dedent`
        %token BAR
        %token CLOSE_BRACKET
        %token FOO
        %token OPEN_BRACKET

        r0: S' → S
        r1: S → Program
        r2: Program → BarOpt OPEN_BRACKET FooList CLOSE_BRACKET
        r3: FooList → FooList FOO
        r4: FooList → FOO
        r5: BarOpt → BAR
        r6: BarOpt → ε
      ` + '\n',
    );
  });

  it('returns a ParseTable for the full grammar', () => {
    expect('\n' + stringifyParseTable(table)).toMatchInlineSnapshot(`
      "
      | State |  AT | BANG | BLOCK_STRING_VALUE | CLOSING_BRACE | CLOSING_BRACKET | CLOSING_PAREN | COLON | DOLLAR | ELLIPSIS | EQUALS | NAME | NUMBER | OPENING_BRACE | OPENING_BRACKET | OPENING_PAREN | STRING_VALUE |      $ |Alias |Argument |ArgumentConst |ArgumentConstList |ArgumentList |ArgumentsConstOpt |ArgumentsOpt |DefaultValueOpt |Definition |DefinitionList |Directive |DirectiveConst |DirectiveConstList |DirectiveList |DirectivesConstOpt |DirectivesOpt |Document |ExecutableDefinition |Field |FragmentSpread |ListType |ListValue |ListValueConst |ListValueConstList |ListValueList |NamedType |NamedValue |NonNullType |NumberValue |ObjectField |ObjectFieldConst |ObjectFieldConstList |ObjectFieldList |ObjectValue |ObjectValueConst |OperationDefinition |OperationNameOpt |OperationType |Selection |SelectionList |SelectionSet |SelectionSetOpt |StringValue |Type |Value |ValueConst |Variable |VariableDefinition |VariableDefinitionList |VariableDefinitionsOpt |
      |-------|-----|------|--------------------|---------------|-----------------|---------------|-------|--------|----------|--------|------|--------|---------------|-----------------|---------------|--------------|--------|------|---------|--------------|------------------|-------------|------------------|-------------|----------------|-----------|---------------|----------|---------------|-------------------|--------------|-------------------|--------------|---------|---------------------|------|---------------|---------|----------|---------------|-------------------|--------------|----------|-----------|------------|------------|------------|-----------------|---------------------|----------------|------------|-----------------|--------------------|-----------------|--------------|----------|--------------|-------------|----------------|------------|-----|------|-----------|---------|-------------------|-----------------------|-----------------------|
      |     0 |     |      |                    |               |                 |               |       |        |          |        |   s7 |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |         3 |             2 |          |               |                   |              |                   |              |       1 |                   4 |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                  5 |                 |            6 |          |              |           8 |                |            |     |      |           |         |                   |                       |                       |
      |     1 |     |      |                    |               |                 |               |       |        |          |        |      |        |               |                 |               |              | accept |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     2 |     |      |                    |               |                 |               |       |        |          |        |   s7 |        |            s9 |                 |               |              |     r1 |      |         |              |                  |             |                  |             |                |        10 |               |          |               |                   |              |                   |              |         |                   4 |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                  5 |                 |            6 |          |              |           8 |                |            |     |      |           |         |                   |                       |                       |
      |     3 |     |      |                    |               |                 |               |       |        |          |        |   r2 |        |            r2 |                 |               |              |     r2 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     4 |     |      |                    |               |                 |               |       |        |          |        |   r4 |        |            r4 |                 |               |              |     r4 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     5 |     |      |                    |               |                 |               |       |        |          |        |   r5 |        |            r5 |                 |               |              |     r5 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     6 | r10 |      |                    |               |                 |               |       |        |          |        |  s12 |        |           r10 |                 |           r10 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |              11 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     7 |  r8 |      |                    |               |                 |               |       |        |          |        |   r8 |        |            r8 |                 |            r8 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     8 |     |      |                    |               |                 |               |       |        |          |        |   r7 |        |            r7 |                 |               |              |     r7 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     9 |     |      |                    |               |                 |               |       |        |      s19 |        |  s16 |        |               |                 |               |              |        |   17 |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |   15 |            18 |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |       14 |           13 |             |                |            |     |      |           |         |                   |                       |                       |
      |    10 |     |      |                    |               |                 |               |       |        |          |        |   r3 |        |            r3 |                 |               |              |     r3 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    11 | r12 |      |                    |               |                 |               |       |        |          |        |      |        |           r12 |                 |           s21 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                    20 |
      |    12 |  r9 |      |                    |               |                 |               |       |        |          |        |      |        |            r9 |                 |            r9 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    13 |     |      |                    |           s22 |                 |               |       |        |      s19 |        |  s16 |        |               |                 |               |              |        |   17 |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |   15 |            18 |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |       23 |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    14 |     |      |                    |           r55 |                 |               |       |        |      r55 |        |  r55 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    15 |     |      |                    |           r57 |                 |               |       |        |      r57 |        |  r57 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    16 | r63 |      |                    |           r63 |                 |               |   s25 |        |      r63 |        |  r63 |        |           r63 |                 |           s26 |              |        |      |         |              |                  |             |                  |          24 |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    17 |     |      |                    |               |                 |               |       |        |          |        |  s27 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    18 |     |      |                    |           r58 |                 |               |       |        |      r58 |        |  r58 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    19 |     |      |                    |               |                 |               |       |        |          |        |  s28 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    20 | s32 |      |                    |               |                 |               |       |        |          |        |      |        |           r43 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       31 |               |                   |           30 |                   |           29 |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    21 |     |      |                    |               |                 |               |       |    s36 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |      35 |                34 |                    33 |                       |
      |    22 |     |      |                    |           r52 |                 |               |       |        |      r52 |        |  r52 |        |           r52 |                 |               |              |    r52 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    23 |     |      |                    |           r56 |                 |               |       |        |      r56 |        |  r56 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    24 | s32 |      |                    |           r43 |                 |               |       |        |      r43 |        |  r43 |        |           r43 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       31 |               |                   |           30 |                   |           37 |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    25 |     |      |                    |               |                 |               |       |        |          |        |  r61 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    26 |     |      |                    |               |                 |               |       |        |          |        |  s40 |        |               |                 |               |              |        |      |      39 |              |                  |          38 |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    27 | r63 |      |                    |           r63 |                 |               |       |        |      r63 |        |  r63 |        |           r63 |                 |           s26 |              |        |      |         |              |                  |             |                  |          41 |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    28 | s32 |      |                    |           r43 |                 |               |       |        |      r43 |        |  r43 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       31 |               |                   |           30 |                   |           42 |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    29 |     |      |                    |               |                 |               |       |        |          |        |      |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |          43 |                |            |     |      |           |         |                   |                       |                       |
      |    30 | s32 |      |                    |           r42 |                 |               |       |        |      r42 |        |  r42 |        |           r42 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       44 |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    31 | r44 |      |                    |           r44 |                 |               |       |        |      r44 |        |  r44 |        |           r44 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    32 |     |      |                    |               |                 |               |       |        |          |        |  s45 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    33 |     |      |                    |               |                 |           s46 |       |    s36 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |      35 |                47 |                       |                       |
      |    34 |     |      |                    |               |                 |           r13 |       |    r13 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    35 |     |      |                    |               |                 |               |   s48 |        |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    36 |     |      |                    |               |                 |               |       |        |          |        |  s49 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    37 |     |      |                    |           r54 |                 |               |       |        |      r54 |        |  r54 |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |          51 |             50 |            |     |      |           |         |                   |                       |                       |
      |    38 |     |      |                    |               |                 |           s52 |       |        |          |        |  s40 |        |               |                 |               |              |        |      |      53 |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    39 |     |      |                    |               |                 |           r64 |       |        |          |        |  r64 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    40 |     |      |                    |               |                 |               |   s54 |        |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    41 | s32 |      |                    |           r43 |                 |               |       |        |      r43 |        |  r43 |        |           r43 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       31 |               |                   |           30 |                   |           55 |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    42 |     |      |                    |           r93 |                 |               |       |        |      r93 |        |  r93 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    43 |     |      |                    |               |                 |               |       |        |          |        |   r6 |        |            r6 |                 |               |              |     r6 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    44 | r45 |      |                    |           r45 |                 |               |       |        |      r45 |        |  r45 |        |           r45 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    45 | r63 |      |                    |           r63 |                 |               |       |        |      r63 |        |  r63 |        |           r63 |                 |           s26 |              |        |      |         |              |                  |             |                  |          56 |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    46 | r11 |      |                    |               |                 |               |       |        |          |        |      |        |           r11 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    47 |     |      |                    |               |                 |           r14 |       |    r14 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    48 |     |      |                    |               |                 |               |       |        |          |        |  s59 |        |               |             s61 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |      60 |          |               |                   |              |       58 |           |         62 |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |  57 |      |           |         |                   |                       |                       |
      |    49 |     |      |                r16 |           r16 |             r16 |           r16 |   r16 |    r16 |          |        |  r16 |    r16 |           r16 |             r16 |               |          r16 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    50 |     |      |                    |           r59 |                 |               |       |        |      r59 |        |  r59 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    51 |     |      |                    |           r53 |                 |               |       |        |      r53 |        |  r53 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    52 | r62 |      |                    |           r62 |                 |               |       |        |      r62 |        |  r62 |        |           r62 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    53 |     |      |                    |               |                 |           r65 |       |        |          |        |  r65 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    54 |     |      |                s69 |               |                 |               |       |    s36 |          |        |  s71 |    s66 |           s75 |             s73 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |       72 |               |                   |              |          |        70 |            |         65 |            |                 |                     |                |         74 |                 |                    |                 |              |          |              |             |                |         67 |     |   63 |           |      64 |                   |                       |                       |
      |    55 |     |      |                    |           r54 |                 |               |       |        |      r54 |        |  r54 |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |          51 |             76 |            |     |      |           |         |                   |                       |                       |
      |    56 | r46 |      |                    |           r46 |                 |               |       |        |      r46 |        |  r46 |        |           r46 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    57 | r25 |      |                    |               |                 |           r25 |       |    r25 |          |    s78 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |             77 |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    58 | r17 |  s79 |                    |               |             r17 |           r17 |       |    r17 |          |    r17 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    59 | r20 |  r20 |                    |               |             r20 |           r20 |       |    r20 |          |    r20 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    60 | r18 |  s80 |                    |               |             r18 |           r18 |       |    r18 |          |    r18 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    61 |     |      |                    |               |                 |               |       |        |          |        |  s59 |        |               |             s61 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |      60 |          |               |                   |              |       58 |           |         62 |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |  81 |      |           |         |                   |                       |                       |
      |    62 | r19 |      |                    |               |             r19 |           r19 |       |    r19 |          |    r19 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    63 |     |      |                    |               |                 |           r66 |       |        |          |        |  r66 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    64 |     |      |                r72 |           r72 |             r72 |           r72 |       |    r72 |          |        |  r72 |    r72 |           r72 |             r72 |               |          r72 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    65 |     |      |                r73 |           r73 |             r73 |           r73 |       |    r73 |          |        |  r73 |    r73 |           r73 |             r73 |               |          r73 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    66 | r31 |      |                r31 |           r31 |             r31 |           r31 |       |    r31 |          |        |  r31 |    r31 |           r31 |             r31 |               |          r31 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    67 |     |      |                r74 |           r74 |             r74 |           r74 |       |    r74 |          |        |  r74 |    r74 |           r74 |             r74 |               |          r74 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    68 | r78 |      |                r78 |           r78 |             r78 |           r78 |       |    r78 |          |        |  r78 |    r78 |           r78 |             r78 |               |          r78 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    69 | r79 |      |                r79 |           r79 |             r79 |           r79 |       |    r79 |          |        |  r79 |    r79 |           r79 |             r79 |               |          r79 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    70 |     |      |                r75 |           r75 |             r75 |           r75 |       |    r75 |          |        |  r75 |    r75 |           r75 |             r75 |               |          r75 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    71 | r32 |      |                r32 |           r32 |             r32 |           r32 |       |    r32 |          |        |  r32 |    r32 |           r32 |             r32 |               |          r32 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    72 |     |      |                r76 |           r76 |             r76 |           r76 |       |    r76 |          |        |  r76 |    r76 |           r76 |             r76 |               |          r76 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    73 |     |      |                s69 |               |             s82 |               |       |    s36 |          |        |  s71 |    s66 |           s75 |             s73 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |       72 |               |                   |           83 |          |        70 |            |         65 |            |                 |                     |                |         74 |                 |                    |                 |              |          |              |             |                |         67 |     |   84 |           |      64 |                   |                       |                       |
      |    74 |     |      |                r77 |           r77 |             r77 |           r77 |       |    r77 |          |        |  r77 |    r77 |           r77 |             r77 |               |          r77 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    75 |     |      |                    |           s85 |                 |               |       |        |          |        |  s88 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |         87 |                 |                     |             86 |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    76 |     |      |                    |           r60 |                 |               |       |        |      r60 |        |  r60 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    77 | s92 |      |                    |               |                 |           r48 |       |    r48 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |            91 |                90 |              |                89 |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    78 |     |      |                s69 |               |                 |               |       |        |          |        |  s71 |    s66 |          s100 |             s98 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |            97 |                   |              |          |        96 |            |         94 |            |                 |                     |                |            |              99 |                    |                 |              |          |              |             |                |         95 |     |      |        93 |         |                   |                       |                       |
      |    79 | r23 |      |                    |               |             r23 |           r23 |       |    r23 |          |    r23 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    80 | r22 |      |                    |               |             r22 |           r22 |       |    r22 |          |    r22 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    81 |     |      |                    |               |            s101 |               |       |        |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    82 |     |      |                r80 |           r80 |             r80 |           r80 |       |    r80 |          |        |  r80 |    r80 |           r80 |             r80 |               |          r80 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    83 |     |      |                s69 |               |            s102 |               |       |    s36 |          |        |  s71 |    s66 |           s75 |             s73 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |       72 |               |                   |              |          |        70 |            |         65 |            |                 |                     |                |         74 |                 |                    |                 |              |          |              |             |                |         67 |     |  103 |           |      64 |                   |                       |                       |
      |    84 |     |      |                r82 |               |             r82 |               |       |    r82 |          |        |  r82 |    r82 |           r82 |             r82 |               |          r82 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    85 |     |      |                r84 |           r84 |             r84 |           r84 |       |    r84 |          |        |  r84 |    r84 |           r84 |             r84 |               |          r84 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    86 |     |      |                    |          s104 |                 |               |       |        |          |        |  s88 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |        105 |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    87 |     |      |                    |           r86 |                 |               |       |        |          |        |  r86 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    88 |     |      |                    |               |                 |               |  s106 |        |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    89 |     |      |                    |               |                 |           r15 |       |    r15 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    90 | s92 |      |                    |               |                 |           r47 |       |    r47 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |           107 |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    91 | r49 |      |                    |               |                 |           r49 |       |    r49 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    92 |     |      |                    |               |                 |               |       |        |          |        | s108 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    93 | r24 |      |                    |               |                 |           r24 |       |    r24 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    94 | r26 |      |                r26 |           r26 |             r26 |           r26 |       |    r26 |          |        |  r26 |    r26 |           r26 |             r26 |               |          r26 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    95 | r27 |      |                r27 |           r27 |             r27 |           r27 |       |    r27 |          |        |  r27 |    r27 |           r27 |             r27 |               |          r27 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    96 | r28 |      |                r28 |           r28 |             r28 |           r28 |       |    r28 |          |        |  r28 |    r28 |           r28 |             r28 |               |          r28 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    97 | r29 |      |                r29 |           r29 |             r29 |           r29 |       |    r29 |          |        |  r29 |    r29 |           r29 |             r29 |               |          r29 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    98 |     |      |                s69 |               |            s109 |               |       |        |          |        |  s71 |    s66 |          s100 |             s98 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |            97 |               110 |              |          |        96 |            |         94 |            |                 |                     |                |            |              99 |                    |                 |              |          |              |             |                |         95 |     |      |       111 |         |                   |                       |                       |
      |    99 | r30 |      |                r30 |           r30 |             r30 |           r30 |       |    r30 |          |        |  r30 |    r30 |           r30 |             r30 |               |          r30 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   100 |     |      |                    |          s112 |                 |               |       |        |          |        | s115 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |             114 |                 113 |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   101 | r21 |  r21 |                    |               |             r21 |           r21 |       |    r21 |          |    r21 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   102 |     |      |                r81 |           r81 |             r81 |           r81 |       |    r81 |          |        |  r81 |    r81 |           r81 |             r81 |               |          r81 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   103 |     |      |                r83 |               |             r83 |               |       |    r83 |          |        |  r83 |    r83 |           r83 |             r83 |               |          r83 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   104 |     |      |                r85 |           r85 |             r85 |           r85 |       |    r85 |          |        |  r85 |    r85 |           r85 |             r85 |               |          r85 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   105 |     |      |                    |           r87 |                 |               |       |        |          |        |  r87 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   106 |     |      |                s69 |               |                 |               |       |    s36 |          |        |  s71 |    s66 |           s75 |             s73 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |       72 |               |                   |              |          |        70 |            |         65 |            |                 |                     |                |         74 |                 |                    |                 |              |          |              |             |                |         67 |     |  116 |           |      64 |                   |                       |                       |
      |   107 | r50 |      |                    |               |                 |           r50 |       |    r50 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   108 | r68 |      |                    |               |                 |           r68 |       |    r68 |          |        |      |        |               |                 |          s118 |              |        |      |         |              |                  |             |              117 |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   109 | r33 |      |                r33 |           r33 |             r33 |           r33 |       |    r33 |          |        |  r33 |    r33 |           r33 |             r33 |               |          r33 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   110 |     |      |                s69 |               |            s119 |               |       |        |          |        |  s71 |    s66 |          s100 |             s98 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |            97 |                   |              |          |        96 |            |         94 |            |                 |                     |                |            |              99 |                    |                 |              |          |              |             |                |         95 |     |      |       120 |         |                   |                       |                       |
      |   111 |     |      |                r35 |               |             r35 |               |       |        |          |        |  r35 |    r35 |           r35 |             r35 |               |          r35 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   112 | r37 |      |                r37 |           r37 |             r37 |           r37 |       |    r37 |          |        |  r37 |    r37 |           r37 |             r37 |               |          r37 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   113 |     |      |                    |          s121 |                 |               |       |        |          |        | s115 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |             122 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   114 |     |      |                    |           r39 |                 |               |       |        |          |        |  r39 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   115 |     |      |                    |               |                 |               |  s123 |        |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   116 |     |      |                    |           r88 |                 |               |       |        |          |        |  r88 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   117 | r51 |      |                    |               |                 |           r51 |       |    r51 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   118 |     |      |                    |               |                 |               |       |        |          |        | s126 |        |               |                 |               |              |        |      |         |          125 |              124 |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   119 | r34 |      |                r34 |           r34 |             r34 |           r34 |       |    r34 |          |        |  r34 |    r34 |           r34 |             r34 |               |          r34 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   120 |     |      |                r36 |               |             r36 |               |       |        |          |        |  r36 |    r36 |           r36 |             r36 |               |          r36 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   121 | r38 |      |                r38 |           r38 |             r38 |           r38 |       |    r38 |          |        |  r38 |    r38 |           r38 |             r38 |               |          r38 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   122 |     |      |                    |           r40 |                 |               |       |        |          |        |  r40 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   123 |     |      |                s69 |               |                 |               |       |        |          |        |  s71 |    s66 |          s100 |             s98 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |            97 |                   |              |          |        96 |            |         94 |            |                 |                     |                |            |              99 |                    |                 |              |          |              |             |                |         95 |     |      |       127 |         |                   |                       |                       |
      |   124 |     |      |                    |               |                 |          s128 |       |        |          |        | s126 |        |               |                 |               |              |        |      |         |          129 |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   125 |     |      |                    |               |                 |           r69 |       |        |          |        |  r69 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   126 |     |      |                    |               |                 |               |  s130 |        |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   127 |     |      |                    |           r41 |                 |               |       |        |          |        |  r41 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   128 | r67 |      |                    |               |                 |           r67 |       |    r67 |          |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   129 |     |      |                    |               |                 |           r70 |       |        |          |        |  r70 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   130 |     |      |                s69 |               |                 |               |       |        |          |        |  s71 |    s66 |          s100 |             s98 |               |          s68 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |            97 |                   |              |          |        96 |            |         94 |            |                 |                     |                |            |              99 |                    |                 |              |          |              |             |                |         95 |     |      |       131 |         |                   |                       |                       |
      |   131 |     |      |                    |               |                 |           r71 |       |        |          |        |  r71 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |               |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      "
    `);

    // Just to make the above actually readable...
    expect('\n' + stringifyGrammar(getAugmentedGrammar(grammar)))
      .toMatchInlineSnapshot(`
      "
      %token AMPERSAND
      %token AT
      %token BANG
      %token BAR
      %token BLOCK_STRING_VALUE
      %token CLOSING_BRACE
      %token CLOSING_BRACKET
      %token CLOSING_PAREN
      %token COLON
      %token DOLLAR
      %token ELLIPSIS
      %token EQUALS
      %token NAME
      %token NUMBER
      %token OPENING_BRACE
      %token OPENING_BRACKET
      %token OPENING_PAREN
      %token STRING_VALUE

      r0: Document' → Document
      r1: Document → DefinitionList {
        $$ = {
          kind: 'DOCUMENT',
          definitions: $1,
        };
      }
      r2: DefinitionList → Definition { $$ = [$1]; }
      r3: DefinitionList → DefinitionList Definition { $1.push($2); $$ = $1; }
      r4: Definition → ExecutableDefinition { $$ = $1; }
      r5: ExecutableDefinition → OperationDefinition { $$ = $1; }
      r6: OperationDefinition → OperationType OperationNameOpt VariableDefinitionsOpt DirectivesOpt SelectionSet {
        $$ = {
          kind: 'OPERATION',
          name: $2,
          directives: $4,
          selections: $5,
          type: $1,
          variables: $3,
        };
      }
      r7: OperationDefinition → SelectionSet {
        $$ = {
          kind: 'OPERATION',
          name: null,
          directives: null,
          selections: $1,
          type: 'QUERY',
          variables: null,
        };
      }
      r8: OperationType → NAME {{
        const {contents} = $1;
        if (contents === 'query') {
          $$ = 'QUERY';
        } else if (contents === 'mutation') {
          $$ = 'MUTATION';
        } else if (contents === 'subscription') {
          $$ = 'SUBSCRIPTION';
        } else {
          throw new Error(\`Unsupported operation type: \${contents}\`);
        }
      }}
      r9: OperationNameOpt → NAME { $$ = $1.contents; }
      r10: OperationNameOpt → ε { $$ = null; }
      r11: VariableDefinitionsOpt → OPENING_PAREN VariableDefinitionList CLOSING_PAREN {
        $$ = $2;
      }
      r12: VariableDefinitionsOpt → ε { $$ = null; }
      r13: VariableDefinitionList → VariableDefinition { $$ = [$1]; }
      r14: VariableDefinitionList → VariableDefinitionList VariableDefinition {
        $1.push($2); $$ = $1;
      }
      r15: VariableDefinition → Variable COLON Type DefaultValueOpt DirectivesConstOpt {
        $$ = {
          kind: 'VARIABLE_DEFINITION',
          defaultValue: $4,
          directives: $5,
          type: $3,
          variable: $1,
        };
      }
      r16: Variable → DOLLAR NAME {
        $$ = {
          kind: 'VARIABLE',
          name: $2.contents,
        };
      }
      r17: Type → NamedType { $$ = $1; }
      r18: Type → ListType { $$ = $1; }
      r19: Type → NonNullType { $$ = $1; }
      r20: NamedType → NAME {
        $$ = {
          kind: 'NAMED_TYPE',
          name: $1.contents,
        };
      }
      r21: ListType → OPENING_BRACKET Type CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_TYPE',
          type: $2,
        };
      }
      r22: NonNullType → ListType BANG {
        $$ = {
          kind: 'NON_NULL_TYPE',
          type: $1,
        };
      }
      r23: NonNullType → NamedType BANG {
        $$ = {
          kind: 'NON_NULL_TYPE',
          type: $1,
        };
      }
      r24: DefaultValueOpt → EQUALS ValueConst { $$ = $2; }
      r25: DefaultValueOpt → ε { $$ = null; }
      r26: ValueConst → NumberValue { $$ = $1; }
      r27: ValueConst → StringValue { $$ = $1; }
      r28: ValueConst → NamedValue { $$ = $1; }
      r29: ValueConst → ListValueConst { $$ = $1; }
      r30: ValueConst → ObjectValueConst { $$ = $1; }
      r31: NumberValue → NUMBER {{
        const {contents} = $1;

        // TODO: Distinguish between these tokens in the lexer instead?
        if (/^-?\\\\d+$/.test(contents)) {
          $$ = {kind: 'INT', value: parseInt(contents, 10)};
        } else {
          $$ = {kind: 'FLOAT', value: contents};
        }
      }}
      r32: NamedValue → NAME {{
        const {contents} = $1;
        if (contents === 'true') {
          $$ = {kind: 'BOOLEAN', value: true};
        } else if (contents === 'false') {
          $$ = {kind: 'BOOLEAN', value: false};
        } else if (contents === 'null') {
          $$ = {kind: 'NULL'};
        } else {
          $$ = {kind: 'ENUM', value: contents};
        }
      }}
      r33: ListValueConst → OPENING_BRACKET CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: [],
        };
      }
      r34: ListValueConst → OPENING_BRACKET ListValueConstList CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: $2,
        };
      }
      r35: ListValueConstList → ValueConst { $$ = [$1]; }
      r36: ListValueConstList → ListValueConstList ValueConst { $1.push($2); $$ = $1; }
      r37: ObjectValueConst → OPENING_BRACE CLOSING_BRACE {
        $$  = {
          kind: 'OBJECT_VALUE',
          fields: [],
        };
      }
      r38: ObjectValueConst → OPENING_BRACE ObjectFieldConstList CLOSING_BRACE {
        $$ = {
          kind: 'OBJECT_VALUE',
          fields: $2,
        };
      }
      r39: ObjectFieldConstList → ObjectFieldConst { $$ = [$1]; }
      r40: ObjectFieldConstList → ObjectFieldConstList ObjectFieldConst { $1.push($2); $$ = $1; }
      r41: ObjectFieldConst → NAME COLON ValueConst {
        $$ = {
          name: $1.contents,
          value: $3,
        };
      }
      r42: DirectivesOpt → DirectiveList { $$ = $1; }
      r43: DirectivesOpt → ε { $$ = null; }
      r44: DirectiveList → Directive { $$ = [$1]; }
      r45: DirectiveList → DirectiveList Directive { $1.push($2); $$ = $1; }
      r46: Directive → AT NAME ArgumentsOpt {
        $$ = {
          kind: 'DIRECTIVE',
          arguments: $3,
          name: $2.contents,
        };
      }
      r47: DirectivesConstOpt → DirectiveConstList { $$ = $1; }
      r48: DirectivesConstOpt → ε { $$ = null; }
      r49: DirectiveConstList → DirectiveConst { $$ = [$1]; }
      r50: DirectiveConstList → DirectiveConstList DirectiveConst { $1.push($2); $$ = $1; }
      r51: DirectiveConst → AT NAME ArgumentsConstOpt {
        $$ = {
          kind: 'DIRECTIVE',
          arguments: $3,
          name: $2.contents,
        };
      }
      r52: SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE { $$ = $2; }
      r53: SelectionSetOpt → SelectionSet { $$ = $1; }
      r54: SelectionSetOpt → ε { $$ = null; }
      r55: SelectionList → Selection { $$ = [$1]; }
      r56: SelectionList → SelectionList Selection { $1.push($2); $$ = $1; }
      r57: Selection → Field { $$ = $1; }
      r58: Selection → FragmentSpread { $$ = $1; }
      r59: Field → NAME ArgumentsOpt DirectivesOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: null,
          arguments: $2,
          directives: $3,
          name: $1.contents,
          selections: $4,
        };
      }
      r60: Field → Alias NAME ArgumentsOpt DirectivesOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: $1,
          arguments: $3,
          directives: $4,
          name: $2.contents,
          selections: $5,
        };
      }
      r61: Alias → NAME COLON { $$ = $1.contents; }
      r62: ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN { $$ = $2; }
      r63: ArgumentsOpt → ε { $$ = null; }
      r64: ArgumentList → Argument { $$ = [$1]; }
      r65: ArgumentList → ArgumentList Argument { $1.push($2); $$ = $1; }
      r66: Argument → NAME COLON Value {
        $$ = {
          kind: 'ARGUMENT',
          name: $1.contents,
          value: $3,
        };
      }
      r67: ArgumentsConstOpt → OPENING_PAREN ArgumentConstList CLOSING_PAREN { $$ = $2; }
      r68: ArgumentsConstOpt → ε { $$ = null; }
      r69: ArgumentConstList → ArgumentConst { $$ = [$1]; }
      r70: ArgumentConstList → ArgumentConstList ArgumentConst { $1.push($2); $$ = $1; }
      r71: ArgumentConst → NAME COLON ValueConst {
        $$ = {
          kind: 'ARGUMENT',
          name: $1.contents,
          value: $3,
        };
      }
      r72: Value → Variable { $$ = $1; }
      r73: Value → NumberValue { $$ = $1; }
      r74: Value → StringValue { $$ = $1; }
      r75: Value → NamedValue { $$ = $1; }
      r76: Value → ListValue { $$ = $1; }
      r77: Value → ObjectValue { $$ = $1; }
      r78: StringValue → STRING_VALUE {
        $$ = {
          kind: 'STRING',
          block: false,
          // TODO: consider doing this slice in the lexer
          value: $1.contents.slice(1, -1),
        };
      }
      r79: StringValue → BLOCK_STRING_VALUE {
        $$ = {
          kind: 'STRING',
          block: true,
          // TODO: preprocess value here...
          value: $1.contents,
        };
      }
      r80: ListValue → OPENING_BRACKET CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: [],
        };
      }
      r81: ListValue → OPENING_BRACKET ListValueList CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: $2,
        };
      }
      r82: ListValueList → Value { $$ = [$1]; }
      r83: ListValueList → ListValueList Value { $1.push($2); $$ = $1; }
      r84: ObjectValue → OPENING_BRACE CLOSING_BRACE {
        $$  = {
          kind: 'OBJECT_VALUE',
          fields: [],
        };
      }
      r85: ObjectValue → OPENING_BRACE ObjectFieldList CLOSING_BRACE {
        $$ = {
          kind: 'OBJECT_VALUE',
          fields: $2,
        };
      }
      r86: ObjectFieldList → ObjectField { $$ = [$1]; }
      r87: ObjectFieldList → ObjectFieldList ObjectField { $1.push($2); $$ = $1; }
      r88: ObjectField → NAME COLON Value {
        $$ = {
          name: $1.contents,
          value: $3,
        };
      }
      r89: FragmentDefinition → FragmentKeyword FragmentName OnKeyword NamedType DirectivesOpt SelectionSet {
        $$ = {
          kind: 'FRAGMENT',
          directives: $5,
          name: $2,
          on: $4,
          selections: $6,
        };
      }
      r90: FragmentKeyword → NAME {
        const {contents} = $1;
        if (contents !== 'fragment') {
          throw new Error(\`Expected \\"fragment\\" keyword, got: \${contents}\`);
        }
        $$ = null;
      }
      r91: FragmentName → NAME {
        const {contents} = $1;
        if (contents === 'on') {
          throw new Error('Invalid FragmentName \\"on\\"');
        }
        $$ = contents;
      }
      r92: OnKeyword → NAME {
        const {contents} = $1;
        if (contents !== 'on') {
          throw new Error(\`Expected \\"on\\" keyword, got: \${contents}\`);
        }
        $$ = null;
      }
      r93: FragmentSpread → ELLIPSIS NAME DirectivesOpt {
        $$ = {
          kind: 'FRAGMENT_SPREAD',
          name: $2.contents,
          directives: $3,
        };
      }
      "
    `);
  });
});
