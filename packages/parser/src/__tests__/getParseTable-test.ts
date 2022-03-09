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
      | State |  AT | BANG | CLOSING_BRACE | CLOSING_BRACKET | CLOSING_PAREN | COLON | DOLLAR | EQUALS | NAME | NUMBER | OPENING_BRACE | OPENING_BRACKET | OPENING_PAREN |      $ |Alias |Argument |ArgumentList |ArgumentsOpt |DefaultValueOpt |Definition |DefinitionList |Directive |DirectiveList |DirectivesOpt |Document |ExecutableDefinition |Field |ListType |NamedType |NamedValue |NonNullType |NumberValue |OperationDefinition |OperationNameOpt |OperationType |Selection |SelectionList |SelectionSet |SelectionSetOpt |Type |Value |ValueConst |Variable |VariableDefinition |VariableDefinitionList |VariableDefinitionsOpt |
      |-------|-----|------|---------------|-----------------|---------------|-------|--------|--------|------|--------|---------------|-----------------|---------------|--------|------|---------|-------------|-------------|----------------|-----------|---------------|----------|--------------|--------------|---------|---------------------|------|---------|----------|-----------|------------|------------|--------------------|-----------------|--------------|----------|--------------|-------------|----------------|-----|------|-----------|---------|-------------------|-----------------------|-----------------------|
      |     0 |     |      |               |                 |               |       |        |        |   s7 |        |            s9 |                 |               |        |      |         |             |             |                |         3 |             2 |          |              |              |       1 |                   4 |      |         |          |           |            |            |                  5 |                 |            6 |          |              |           8 |                |     |      |           |         |                   |                       |                       |
      |     1 |     |      |               |                 |               |       |        |        |      |        |               |                 |               | accept |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |     2 |     |      |               |                 |               |       |        |        |   s7 |        |            s9 |                 |               |     r1 |      |         |             |             |                |        10 |               |          |              |              |         |                   4 |      |         |          |           |            |            |                  5 |                 |            6 |          |              |           8 |                |     |      |           |         |                   |                       |                       |
      |     3 |     |      |               |                 |               |       |        |        |   r2 |        |            r2 |                 |               |     r2 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |     4 |     |      |               |                 |               |       |        |        |   r4 |        |            r4 |                 |               |     r4 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |     5 |     |      |               |                 |               |       |        |        |   r5 |        |            r5 |                 |               |     r5 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |     6 | r10 |      |               |                 |               |       |        |        |  s12 |        |           r10 |                 |           r10 |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |              11 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |     7 |  r8 |      |               |                 |               |       |        |        |   r8 |        |            r8 |                 |            r8 |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |     8 |     |      |               |                 |               |       |        |        |   r7 |        |            r7 |                 |               |     r7 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |     9 |     |      |               |                 |               |       |        |        |  s16 |        |               |                 |               |        |   17 |         |             |             |                |           |               |          |              |              |         |                     |   15 |         |          |           |            |            |                    |                 |              |       14 |           13 |             |                |     |      |           |         |                   |                       |                       |
      |    10 |     |      |               |                 |               |       |        |        |   r3 |        |            r3 |                 |               |     r3 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    11 | r12 |      |               |                 |               |       |        |        |      |        |           r12 |                 |           s19 |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                    18 |
      |    12 |  r9 |      |               |                 |               |       |        |        |      |        |            r9 |                 |            r9 |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    13 |     |      |           s20 |                 |               |       |        |        |  s16 |        |               |                 |               |        |   17 |         |             |             |                |           |               |          |              |              |         |                     |   15 |         |          |           |            |            |                    |                 |              |       21 |              |             |                |     |      |           |         |                   |                       |                       |
      |    14 |     |      |           r38 |                 |               |       |        |        |  r38 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    15 |     |      |           r40 |                 |               |       |        |        |  r40 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    16 |     |      |           r45 |                 |               |   s23 |        |        |  r45 |        |           r45 |                 |           s24 |        |      |         |             |          22 |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    17 |     |      |               |                 |               |       |        |        |  s25 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    18 | s29 |      |               |                 |               |       |        |        |      |        |           r31 |                 |               |        |      |         |             |             |                |           |               |       28 |           27 |           26 |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    19 |     |      |               |                 |               |       |    s33 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |      32 |                31 |                    30 |                       |
      |    20 |     |      |           r35 |                 |               |       |        |        |  r35 |        |           r35 |                 |               |    r35 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    21 |     |      |           r39 |                 |               |       |        |        |  r39 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    22 |     |      |           r37 |                 |               |       |        |        |  r37 |        |            s9 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |          35 |             34 |     |      |           |         |                   |                       |                       |
      |    23 |     |      |               |                 |               |       |        |        |  r43 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    24 |     |      |               |                 |               |       |        |        |  s38 |        |               |                 |               |        |      |      37 |          36 |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    25 |     |      |           r45 |                 |               |       |        |        |  r45 |        |           r45 |                 |           s24 |        |      |         |             |          39 |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    26 |     |      |               |                 |               |       |        |        |      |        |            s9 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |          40 |                |     |      |           |         |                   |                       |                       |
      |    27 | s29 |      |               |                 |               |       |        |        |      |        |           r30 |                 |               |        |      |         |             |             |                |           |               |       41 |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    28 | r32 |      |               |                 |               |       |        |        |      |        |           r32 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    29 |     |      |               |                 |               |       |        |        |  s42 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    30 |     |      |               |                 |           s43 |       |    s33 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |      32 |                44 |                       |                       |
      |    31 |     |      |               |                 |           r13 |       |    r13 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    32 |     |      |               |                 |               |   s45 |        |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    33 |     |      |               |                 |               |       |        |        |  s46 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    34 |     |      |           r41 |                 |               |       |        |        |  r41 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    35 |     |      |           r36 |                 |               |       |        |        |  r36 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    36 |     |      |               |                 |           s47 |       |        |        |  s38 |        |               |                 |               |        |      |      48 |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    37 |     |      |               |                 |           r46 |       |        |        |  r46 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    38 |     |      |               |                 |               |   s49 |        |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    39 |     |      |           r37 |                 |               |       |        |        |  r37 |        |            s9 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |          35 |             50 |     |      |           |         |                   |                       |                       |
      |    40 |     |      |               |                 |               |       |        |        |   r6 |        |            r6 |                 |               |     r6 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    41 | r33 |      |               |                 |               |       |        |        |      |        |           r33 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    42 | r34 |      |               |                 |               |       |        |        |      |        |           r34 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    43 | r11 |      |               |                 |               |       |        |        |      |        |           r11 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    44 |     |      |               |                 |           r14 |       |    r14 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    45 |     |      |               |                 |               |       |        |        |  s53 |        |               |             s55 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |      54 |       52 |           |         56 |            |                    |                 |              |          |              |             |                |  51 |      |           |         |                   |                       |                       |
      |    46 |     |      |               |                 |           r16 |   r16 |        |        |  r16 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    47 |     |      |           r44 |                 |               |       |        |        |  r44 |        |           r44 |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    48 |     |      |               |                 |           r47 |       |        |        |  r47 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    49 |     |      |               |                 |               |       |    s33 |        |  s62 |    s60 |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |        61 |            |         59 |                    |                 |              |          |              |             |                |     |   57 |           |      58 |                   |                       |                       |
      |    50 |     |      |           r42 |                 |               |       |        |        |  r42 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    51 |     |      |               |                 |           r25 |       |    r25 |    s64 |      |        |               |                 |               |        |      |         |             |             |             63 |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    52 |     |  s65 |               |             r17 |           r17 |       |    r17 |    r17 |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    53 |     |  r20 |               |             r20 |           r20 |       |    r20 |    r20 |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    54 |     |  s66 |               |             r18 |           r18 |       |    r18 |    r18 |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    55 |     |      |               |                 |               |       |        |        |  s53 |        |               |             s55 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |      54 |       52 |           |         56 |            |                    |                 |              |          |              |             |                |  67 |      |           |         |                   |                       |                       |
      |    56 |     |      |               |             r19 |           r19 |       |    r19 |    r19 |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    57 |     |      |               |                 |           r48 |       |        |        |  r48 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    58 |     |      |               |                 |           r49 |       |        |        |  r49 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    59 |     |      |               |                 |           r50 |       |        |        |  r50 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    60 |     |      |               |                 |           r28 |       |    r28 |        |  r28 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    61 |     |      |               |                 |           r51 |       |        |        |  r51 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    62 |     |      |               |                 |           r29 |       |    r29 |        |  r29 |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    63 |     |      |               |                 |           r15 |       |    r15 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    64 |     |      |               |                 |               |       |        |        |  s62 |    s60 |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |        70 |            |         69 |                    |                 |              |          |              |             |                |     |      |        68 |         |                   |                       |                       |
      |    65 |     |      |               |             r23 |           r23 |       |    r23 |    r23 |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    66 |     |      |               |             r22 |           r22 |       |    r22 |    r22 |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    67 |     |      |               |             s71 |               |       |        |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    68 |     |      |               |                 |           r24 |       |    r24 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    69 |     |      |               |                 |           r26 |       |    r26 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    70 |     |      |               |                 |           r27 |       |    r27 |        |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
      |    71 |     |  r21 |               |             r21 |           r21 |       |    r21 |    r21 |      |        |               |                 |               |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |          |           |            |            |                    |                 |              |          |              |             |                |     |      |           |         |                   |                       |                       |
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
      r15: VariableDefinition → Variable COLON Type DefaultValueOpt {
        $$ = {
          kind: 'VARIABLE_DEFINITION',
          defaultValue: $4,
          directives: null,
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
      r27: ValueConst → NamedValue { $$ = $1; }
      r28: NumberValue → NUMBER {{
        const {contents} = $1;

        // TODO: Distinguish between these tokens in the lexer instead?
        if (/^-?\\\\d+$/.test(contents)) {
          $$ = {kind: 'INT', value: parseInt(contents, 10)};
        } else {
          $$ = {kind: 'FLOAT', value: contents};
        }
      }}
      r29: NamedValue → NAME {{
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
      r30: DirectivesOpt → DirectiveList { $$ = $1; }
      r31: DirectivesOpt → ε { $$ = null; }
      r32: DirectiveList → Directive { $$ = [$1]; }
      r33: DirectiveList → DirectiveList Directive { $1.push($2); $$ = $1; }
      r34: Directive → AT NAME {
        $$ = {
          kind: 'DIRECTIVE',
          name: $2.contents,
        };
      }
      r35: SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE { $$ = $2; }
      r36: SelectionSetOpt → SelectionSet { $$ = $1; }
      r37: SelectionSetOpt → ε { $$ = null; }
      r38: SelectionList → Selection { $$ = [$1]; }
      r39: SelectionList → SelectionList Selection { $1.push($2); $$ = $1; }
      r40: Selection → Field { $$ = $1; }
      r41: Field → NAME ArgumentsOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: null,
          arguments: $2,
          directives: null,
          name: $1.contents,
          selections: $3,
        };
      }
      r42: Field → Alias NAME ArgumentsOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: $1,
          arguments: $3,
          directives: null,
          name: $2.contents,
          selections: $4,
        };
      }
      r43: Alias → NAME COLON { $$ = $1.contents; }
      r44: ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN { $$ = $2; }
      r45: ArgumentsOpt → ε { $$ = null; }
      r46: ArgumentList → Argument { $$ = [$1]; }
      r47: ArgumentList → ArgumentList Argument { $1.push($2); $$ = $1; }
      r48: Argument → NAME COLON Value {
        $$ = {
          kind: 'ARGUMENT',
          name: $1.contents,
          value: $3,
        };
      }
      r49: Value → Variable { $$ = $1; }
      r50: Value → NumberValue { $$ = $1; }
      r51: Value → NamedValue { $$ = $1; }
      "
    `);
  });
});
