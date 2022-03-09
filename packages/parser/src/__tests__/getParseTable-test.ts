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
      | State |  AT | BANG | BLOCK_STRING_VALUE | CLOSING_BRACE | CLOSING_BRACKET | CLOSING_PAREN | COLON | DOLLAR | EQUALS | NAME | NUMBER | OPENING_BRACE | OPENING_BRACKET | OPENING_PAREN | STRING_VALUE |      $ |Alias |Argument |ArgumentList |ArgumentsOpt |DefaultValueOpt |Definition |DefinitionList |Directive |DirectiveList |DirectivesOpt |Document |ExecutableDefinition |Field |ListType |ListValueConst |ListValueConstList |NamedType |NamedValue |NonNullType |NumberValue |ObjectFieldConst |ObjectFieldConstList |ObjectValueConst |OperationDefinition |OperationNameOpt |OperationType |Selection |SelectionList |SelectionSet |SelectionSetOpt |StringValue |Type |Value |ValueConst |Variable |VariableDefinition |VariableDefinitionList |VariableDefinitionsOpt |
      |-------|-----|------|--------------------|---------------|-----------------|---------------|-------|--------|--------|------|--------|---------------|-----------------|---------------|--------------|--------|------|---------|-------------|-------------|----------------|-----------|---------------|----------|--------------|--------------|---------|---------------------|------|---------|---------------|-------------------|----------|-----------|------------|------------|-----------------|---------------------|-----------------|--------------------|-----------------|--------------|----------|--------------|-------------|----------------|------------|-----|------|-----------|---------|-------------------|-----------------------|-----------------------|
      |     0 |     |      |                    |               |                 |               |       |        |        |   s7 |        |            s9 |                 |               |              |        |      |         |             |             |                |         3 |             2 |          |              |              |       1 |                   4 |      |         |               |                   |          |           |            |            |                 |                     |                 |                  5 |                 |            6 |          |              |           8 |                |            |     |      |           |         |                   |                       |                       |
      |     1 |     |      |                    |               |                 |               |       |        |        |      |        |               |                 |               |              | accept |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     2 |     |      |                    |               |                 |               |       |        |        |   s7 |        |            s9 |                 |               |              |     r1 |      |         |             |             |                |        10 |               |          |              |              |         |                   4 |      |         |               |                   |          |           |            |            |                 |                     |                 |                  5 |                 |            6 |          |              |           8 |                |            |     |      |           |         |                   |                       |                       |
      |     3 |     |      |                    |               |                 |               |       |        |        |   r2 |        |            r2 |                 |               |              |     r2 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     4 |     |      |                    |               |                 |               |       |        |        |   r4 |        |            r4 |                 |               |              |     r4 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     5 |     |      |                    |               |                 |               |       |        |        |   r5 |        |            r5 |                 |               |              |     r5 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     6 | r10 |      |                    |               |                 |               |       |        |        |  s12 |        |           r10 |                 |           r10 |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |              11 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     7 |  r8 |      |                    |               |                 |               |       |        |        |   r8 |        |            r8 |                 |            r8 |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     8 |     |      |                    |               |                 |               |       |        |        |   r7 |        |            r7 |                 |               |              |     r7 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     9 |     |      |                    |               |                 |               |       |        |        |  s16 |        |               |                 |               |              |        |   17 |         |             |             |                |           |               |          |              |              |         |                     |   15 |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |       14 |           13 |             |                |            |     |      |           |         |                   |                       |                       |
      |    10 |     |      |                    |               |                 |               |       |        |        |   r3 |        |            r3 |                 |               |              |     r3 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    11 | r12 |      |                    |               |                 |               |       |        |        |      |        |           r12 |                 |           s19 |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                    18 |
      |    12 |  r9 |      |                    |               |                 |               |       |        |        |      |        |            r9 |                 |            r9 |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    13 |     |      |                    |           s20 |                 |               |       |        |        |  s16 |        |               |                 |               |              |        |   17 |         |             |             |                |           |               |          |              |              |         |                     |   15 |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |       21 |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    14 |     |      |                    |           r49 |                 |               |       |        |        |  r49 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    15 |     |      |                    |           r51 |                 |               |       |        |        |  r51 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    16 |     |      |                    |           r56 |                 |               |   s23 |        |        |  r56 |        |           r56 |                 |           s24 |              |        |      |         |             |          22 |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    17 |     |      |                    |               |                 |               |       |        |        |  s25 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    18 | s29 |      |                    |               |                 |               |       |        |        |      |        |           r42 |                 |               |              |        |      |         |             |             |                |           |               |       28 |           27 |           26 |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    19 |     |      |                    |               |                 |               |       |    s33 |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |      32 |                31 |                    30 |                       |
      |    20 |     |      |                    |           r46 |                 |               |       |        |        |  r46 |        |           r46 |                 |               |              |    r46 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    21 |     |      |                    |           r50 |                 |               |       |        |        |  r50 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    22 |     |      |                    |           r48 |                 |               |       |        |        |  r48 |        |            s9 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |          35 |             34 |            |     |      |           |         |                   |                       |                       |
      |    23 |     |      |                    |               |                 |               |       |        |        |  r54 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    24 |     |      |                    |               |                 |               |       |        |        |  s38 |        |               |                 |               |              |        |      |      37 |          36 |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    25 |     |      |                    |           r56 |                 |               |       |        |        |  r56 |        |           r56 |                 |           s24 |              |        |      |         |             |          39 |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    26 |     |      |                    |               |                 |               |       |        |        |      |        |            s9 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |          40 |                |            |     |      |           |         |                   |                       |                       |
      |    27 | s29 |      |                    |               |                 |               |       |        |        |      |        |           r41 |                 |               |              |        |      |         |             |             |                |           |               |       41 |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    28 | r43 |      |                    |               |                 |               |       |        |        |      |        |           r43 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    29 |     |      |                    |               |                 |               |       |        |        |  s42 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    30 |     |      |                    |               |                 |           s43 |       |    s33 |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |      32 |                44 |                       |                       |
      |    31 |     |      |                    |               |                 |           r13 |       |    r13 |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    32 |     |      |                    |               |                 |               |   s45 |        |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    33 |     |      |                    |               |                 |               |       |        |        |  s46 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    34 |     |      |                    |           r52 |                 |               |       |        |        |  r52 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    35 |     |      |                    |           r47 |                 |               |       |        |        |  r47 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    36 |     |      |                    |               |                 |           s47 |       |        |        |  s38 |        |               |                 |               |              |        |      |      48 |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    37 |     |      |                    |               |                 |           r57 |       |        |        |  r57 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    38 |     |      |                    |               |                 |               |   s49 |        |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    39 |     |      |                    |           r48 |                 |               |       |        |        |  r48 |        |            s9 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |          35 |             50 |            |     |      |           |         |                   |                       |                       |
      |    40 |     |      |                    |               |                 |               |       |        |        |   r6 |        |            r6 |                 |               |              |     r6 |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    41 | r44 |      |                    |               |                 |               |       |        |        |      |        |           r44 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    42 | r56 |      |                    |               |                 |               |       |        |        |      |        |           r56 |                 |           s24 |              |        |      |         |             |          51 |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    43 | r11 |      |                    |               |                 |               |       |        |        |      |        |           r11 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    44 |     |      |                    |               |                 |           r14 |       |    r14 |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    45 |     |      |                    |               |                 |               |       |        |        |  s54 |        |               |             s56 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |      55 |               |                   |       53 |           |         57 |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |  52 |      |           |         |                   |                       |                       |
      |    46 |     |      |                    |               |                 |           r16 |   r16 |        |        |  r16 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    47 | r55 |      |                    |           r55 |                 |               |       |        |        |  r55 |        |           r55 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    48 |     |      |                    |               |                 |           r58 |       |        |        |  r58 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    49 |     |      |                s64 |               |                 |               |       |    s33 |        |  s66 |    s61 |               |                 |               |          s63 |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |        65 |            |         60 |                 |                     |                 |                    |                 |              |          |              |             |                |         62 |     |   58 |           |      59 |                   |                       |                       |
      |    50 |     |      |                    |           r53 |                 |               |       |        |        |  r53 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    51 | r45 |      |                    |               |                 |               |       |        |        |      |        |           r45 |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    52 |     |      |                    |               |                 |           r25 |       |    r25 |    s68 |      |        |               |                 |               |              |        |      |         |             |             |             67 |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    53 |     |  s69 |                    |               |             r17 |           r17 |       |    r17 |    r17 |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    54 |     |  r20 |                    |               |             r20 |           r20 |       |    r20 |    r20 |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    55 |     |  s70 |                    |               |             r18 |           r18 |       |    r18 |    r18 |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    56 |     |      |                    |               |                 |               |       |        |        |  s54 |        |               |             s56 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |      55 |               |                   |       53 |           |         57 |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |  71 |      |           |         |                   |                       |                       |
      |    57 |     |      |                    |               |             r19 |           r19 |       |    r19 |    r19 |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    58 |     |      |                    |               |                 |           r59 |       |        |        |  r59 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    59 |     |      |                    |               |                 |           r60 |       |        |        |  r60 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    60 |     |      |                    |               |                 |           r61 |       |        |        |  r61 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    61 |     |      |                    |           r30 |             r30 |           r30 |       |    r30 |        |  r30 |    r30 |           r30 |             r30 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    62 |     |      |                    |               |                 |           r62 |       |        |        |  r62 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    63 |     |      |                    |               |                 |           r64 |       |        |        |  r64 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    64 |     |      |                    |               |                 |           r65 |       |        |        |  r65 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    65 |     |      |                    |               |                 |           r63 |       |        |        |  r63 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    66 |     |      |                    |           r31 |             r31 |           r31 |       |    r31 |        |  r31 |    r31 |           r31 |             r31 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    67 |     |      |                    |               |                 |           r15 |       |    r15 |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    68 |     |      |                    |               |                 |               |       |        |        |  s66 |    s61 |           s78 |             s76 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |            75 |                   |          |        74 |            |         73 |                 |                     |              77 |                    |                 |              |          |              |             |                |            |     |      |        72 |         |                   |                       |                       |
      |    69 |     |      |                    |               |             r23 |           r23 |       |    r23 |    r23 |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    70 |     |      |                    |               |             r22 |           r22 |       |    r22 |    r22 |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    71 |     |      |                    |               |             s79 |               |       |        |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    72 |     |      |                    |               |                 |           r24 |       |    r24 |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    73 |     |      |                    |           r26 |             r26 |           r26 |       |    r26 |        |  r26 |    r26 |           r26 |             r26 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    74 |     |      |                    |           r27 |             r27 |           r27 |       |    r27 |        |  r27 |    r27 |           r27 |             r27 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    75 |     |      |                    |           r28 |             r28 |           r28 |       |    r28 |        |  r28 |    r28 |           r28 |             r28 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    76 |     |      |                    |               |             s80 |               |       |        |        |  s66 |    s61 |           s78 |             s76 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |            75 |                81 |          |        74 |            |         73 |                 |                     |              77 |                    |                 |              |          |              |             |                |            |     |      |        82 |         |                   |                       |                       |
      |    77 |     |      |                    |           r29 |             r29 |           r29 |       |    r29 |        |  r29 |    r29 |           r29 |             r29 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    78 |     |      |                    |           s83 |                 |               |       |        |        |  s86 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |              85 |                  84 |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    79 |     |  r21 |                    |               |             r21 |           r21 |       |    r21 |    r21 |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    80 |     |      |                    |           r32 |             r32 |           r32 |       |    r32 |        |  r32 |    r32 |           r32 |             r32 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    81 |     |      |                    |               |             s87 |               |       |        |        |  s66 |    s61 |           s78 |             s76 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |            75 |                   |          |        74 |            |         73 |                 |                     |              77 |                    |                 |              |          |              |             |                |            |     |      |        88 |         |                   |                       |                       |
      |    82 |     |      |                    |               |             r34 |               |       |        |        |  r34 |    r34 |           r34 |             r34 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    83 |     |      |                    |           r36 |             r36 |           r36 |       |    r36 |        |  r36 |    r36 |           r36 |             r36 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    84 |     |      |                    |           s89 |                 |               |       |        |        |  s86 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |              90 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    85 |     |      |                    |           r38 |                 |               |       |        |        |  r38 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    86 |     |      |                    |               |                 |               |   s91 |        |        |      |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    87 |     |      |                    |           r33 |             r33 |           r33 |       |    r33 |        |  r33 |    r33 |           r33 |             r33 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    88 |     |      |                    |               |             r35 |               |       |        |        |  r35 |    r35 |           r35 |             r35 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    89 |     |      |                    |           r37 |             r37 |           r37 |       |    r37 |        |  r37 |    r37 |           r37 |             r37 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    90 |     |      |                    |           r39 |                 |               |       |        |        |  r39 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    91 |     |      |                    |               |                 |               |       |        |        |  s66 |    s61 |           s78 |             s76 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |            75 |                   |          |        74 |            |         73 |                 |                     |              77 |                    |                 |              |          |              |             |                |            |     |      |        92 |         |                   |                       |                       |
      |    92 |     |      |                    |           r40 |                 |               |       |        |        |  r40 |        |               |                 |               |              |        |      |         |             |             |                |           |               |          |              |              |         |                     |      |         |               |                   |          |           |            |            |                 |                     |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
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
      r28: ValueConst → ListValueConst { $$ = $1; }
      r29: ValueConst → ObjectValueConst { $$ = $1; }
      r30: NumberValue → NUMBER {{
        const {contents} = $1;

        // TODO: Distinguish between these tokens in the lexer instead?
        if (/^-?\\\\d+$/.test(contents)) {
          $$ = {kind: 'INT', value: parseInt(contents, 10)};
        } else {
          $$ = {kind: 'FLOAT', value: contents};
        }
      }}
      r31: NamedValue → NAME {{
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
      r32: ListValueConst → OPENING_BRACKET CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: [],
        };
      }
      r33: ListValueConst → OPENING_BRACKET ListValueConstList CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: $2,
        };
      }
      r34: ListValueConstList → ValueConst { $$ = [$1]; }
      r35: ListValueConstList → ListValueConstList ValueConst { $1.push($2); $$ = $1; }
      r36: ObjectValueConst → OPENING_BRACE CLOSING_BRACE {
        $$  = {
          kind: 'OBJECT_VALUE',
          fields: [],
        };
      }
      r37: ObjectValueConst → OPENING_BRACE ObjectFieldConstList CLOSING_BRACE {
        $$ = {
          kind: 'OBJECT_VALUE',
          fields: $2,
        };
      }
      r38: ObjectFieldConstList → ObjectFieldConst { $$ = [$1]; }
      r39: ObjectFieldConstList → ObjectFieldConstList ObjectFieldConst { $1.push($2); $$ = $1; }
      r40: ObjectFieldConst → NAME COLON ValueConst {
        $$ = {
          name: $1.contents,
          value: $3,
        };
      }
      r41: DirectivesOpt → DirectiveList { $$ = $1; }
      r42: DirectivesOpt → ε { $$ = null; }
      r43: DirectiveList → Directive { $$ = [$1]; }
      r44: DirectiveList → DirectiveList Directive { $1.push($2); $$ = $1; }
      r45: Directive → AT NAME ArgumentsOpt {
        $$ = {
          kind: 'DIRECTIVE',
          arguments: $3,
          name: $2.contents,
        };
      }
      r46: SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE { $$ = $2; }
      r47: SelectionSetOpt → SelectionSet { $$ = $1; }
      r48: SelectionSetOpt → ε { $$ = null; }
      r49: SelectionList → Selection { $$ = [$1]; }
      r50: SelectionList → SelectionList Selection { $1.push($2); $$ = $1; }
      r51: Selection → Field { $$ = $1; }
      r52: Field → NAME ArgumentsOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: null,
          arguments: $2,
          directives: null,
          name: $1.contents,
          selections: $3,
        };
      }
      r53: Field → Alias NAME ArgumentsOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: $1,
          arguments: $3,
          directives: null,
          name: $2.contents,
          selections: $4,
        };
      }
      r54: Alias → NAME COLON { $$ = $1.contents; }
      r55: ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN { $$ = $2; }
      r56: ArgumentsOpt → ε { $$ = null; }
      r57: ArgumentList → Argument { $$ = [$1]; }
      r58: ArgumentList → ArgumentList Argument { $1.push($2); $$ = $1; }
      r59: Argument → NAME COLON Value {
        $$ = {
          kind: 'ARGUMENT',
          name: $1.contents,
          value: $3,
        };
      }
      r60: Value → Variable { $$ = $1; }
      r61: Value → NumberValue { $$ = $1; }
      r62: Value → StringValue { $$ = $1; }
      r63: Value → NamedValue { $$ = $1; }
      r64: StringValue → STRING_VALUE {
        $$ = {
          kind: 'STRING',
          block: false,
          value: $1.contents.slice(1, -1),
        };
      }
      r65: StringValue → BLOCK_STRING_VALUE {
        $$ = {
          kind: 'STRING',
          block: true,
          // TODO: preprocess value here...
          value: $1.contents,
        };
      }
      "
    `);
  });
});
