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
      | State |  AT | BANG | BLOCK_STRING_VALUE | CLOSING_BRACE | CLOSING_BRACKET | CLOSING_PAREN | COLON | DOLLAR | EQUALS | NAME | NUMBER | OPENING_BRACE | OPENING_BRACKET | OPENING_PAREN | STRING_VALUE |      $ |Alias |Argument |ArgumentConst |ArgumentConstList |ArgumentList |ArgumentsConstOpt |ArgumentsOpt |DefaultValueOpt |Definition |DefinitionList |Directive |DirectiveConst |DirectiveConstList |DirectiveList |DirectivesConstOpt |DirectivesOpt |Document |ExecutableDefinition |Field |ListType |ListValue |ListValueConst |ListValueConstList |ListValueList |NamedType |NamedValue |NonNullType |NumberValue |ObjectField |ObjectFieldConst |ObjectFieldConstList |ObjectFieldList |ObjectValue |ObjectValueConst |OperationDefinition |OperationNameOpt |OperationType |Selection |SelectionList |SelectionSet |SelectionSetOpt |StringValue |Type |Value |ValueConst |Variable |VariableDefinition |VariableDefinitionList |VariableDefinitionsOpt |
      |-------|-----|------|--------------------|---------------|-----------------|---------------|-------|--------|--------|------|--------|---------------|-----------------|---------------|--------------|--------|------|---------|--------------|------------------|-------------|------------------|-------------|----------------|-----------|---------------|----------|---------------|-------------------|--------------|-------------------|--------------|---------|---------------------|------|---------|----------|---------------|-------------------|--------------|----------|-----------|------------|------------|------------|-----------------|---------------------|----------------|------------|-----------------|--------------------|-----------------|--------------|----------|--------------|-------------|----------------|------------|-----|------|-----------|---------|-------------------|-----------------------|-----------------------|
      |     0 |     |      |                    |               |                 |               |       |        |        |   s7 |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |         3 |             2 |          |               |                   |              |                   |              |       1 |                   4 |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                  5 |                 |            6 |          |              |           8 |                |            |     |      |           |         |                   |                       |                       |
      |     1 |     |      |                    |               |                 |               |       |        |        |      |        |               |                 |               |              | accept |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     2 |     |      |                    |               |                 |               |       |        |        |   s7 |        |            s9 |                 |               |              |     r1 |      |         |              |                  |             |                  |             |                |        10 |               |          |               |                   |              |                   |              |         |                   4 |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                  5 |                 |            6 |          |              |           8 |                |            |     |      |           |         |                   |                       |                       |
      |     3 |     |      |                    |               |                 |               |       |        |        |   r2 |        |            r2 |                 |               |              |     r2 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     4 |     |      |                    |               |                 |               |       |        |        |   r4 |        |            r4 |                 |               |              |     r4 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     5 |     |      |                    |               |                 |               |       |        |        |   r5 |        |            r5 |                 |               |              |     r5 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     6 | r10 |      |                    |               |                 |               |       |        |        |  s12 |        |           r10 |                 |           r10 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |              11 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     7 |  r8 |      |                    |               |                 |               |       |        |        |   r8 |        |            r8 |                 |            r8 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     8 |     |      |                    |               |                 |               |       |        |        |   r7 |        |            r7 |                 |               |              |     r7 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |     9 |     |      |                    |               |                 |               |       |        |        |  s16 |        |               |                 |               |              |        |   17 |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |   15 |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |       14 |           13 |             |                |            |     |      |           |         |                   |                       |                       |
      |    10 |     |      |                    |               |                 |               |       |        |        |   r3 |        |            r3 |                 |               |              |     r3 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    11 | r12 |      |                    |               |                 |               |       |        |        |      |        |           r12 |                 |           s19 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                    18 |
      |    12 |  r9 |      |                    |               |                 |               |       |        |        |      |        |            r9 |                 |            r9 |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    13 |     |      |                    |           s20 |                 |               |       |        |        |  s16 |        |               |                 |               |              |        |   17 |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |   15 |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |       21 |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    14 |     |      |                    |           r55 |                 |               |       |        |        |  r55 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    15 |     |      |                    |           r57 |                 |               |       |        |        |  r57 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    16 | r62 |      |                    |           r62 |                 |               |   s23 |        |        |  r62 |        |           r62 |                 |           s24 |              |        |      |         |              |                  |             |                  |          22 |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    17 |     |      |                    |               |                 |               |       |        |        |  s25 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    18 | s29 |      |                    |               |                 |               |       |        |        |      |        |           r43 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       28 |               |                   |           27 |                   |           26 |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    19 |     |      |                    |               |                 |               |       |    s33 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |      32 |                31 |                    30 |                       |
      |    20 |     |      |                    |           r52 |                 |               |       |        |        |  r52 |        |           r52 |                 |               |              |    r52 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    21 |     |      |                    |           r56 |                 |               |       |        |        |  r56 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    22 | s29 |      |                    |           r43 |                 |               |       |        |        |  r43 |        |           r43 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       28 |               |                   |           27 |                   |           34 |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    23 |     |      |                    |               |                 |               |       |        |        |  r60 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    24 |     |      |                    |               |                 |               |       |        |        |  s37 |        |               |                 |               |              |        |      |      36 |              |                  |          35 |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    25 | r62 |      |                    |           r62 |                 |               |       |        |        |  r62 |        |           r62 |                 |           s24 |              |        |      |         |              |                  |             |                  |          38 |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    26 |     |      |                    |               |                 |               |       |        |        |      |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |          39 |                |            |     |      |           |         |                   |                       |                       |
      |    27 | s29 |      |                    |           r42 |                 |               |       |        |        |  r42 |        |           r42 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       40 |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    28 | r44 |      |                    |           r44 |                 |               |       |        |        |  r44 |        |           r44 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    29 |     |      |                    |               |                 |               |       |        |        |  s41 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    30 |     |      |                    |               |                 |           s42 |       |    s33 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |      32 |                43 |                       |                       |
      |    31 |     |      |                    |               |                 |           r13 |       |    r13 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    32 |     |      |                    |               |                 |               |   s44 |        |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    33 |     |      |                    |               |                 |               |       |        |        |  s45 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    34 |     |      |                    |           r54 |                 |               |       |        |        |  r54 |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |          47 |             46 |            |     |      |           |         |                   |                       |                       |
      |    35 |     |      |                    |               |                 |           s48 |       |        |        |  s37 |        |               |                 |               |              |        |      |      49 |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    36 |     |      |                    |               |                 |           r63 |       |        |        |  r63 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    37 |     |      |                    |               |                 |               |   s50 |        |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    38 | s29 |      |                    |           r43 |                 |               |       |        |        |  r43 |        |           r43 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |       28 |               |                   |           27 |                   |           51 |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    39 |     |      |                    |               |                 |               |       |        |        |   r6 |        |            r6 |                 |               |              |     r6 |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    40 | r45 |      |                    |           r45 |                 |               |       |        |        |  r45 |        |           r45 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    41 | r62 |      |                    |           r62 |                 |               |       |        |        |  r62 |        |           r62 |                 |           s24 |              |        |      |         |              |                  |             |                  |          52 |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    42 | r11 |      |                    |               |                 |               |       |        |        |      |        |           r11 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    43 |     |      |                    |               |                 |           r14 |       |    r14 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    44 |     |      |                    |               |                 |               |       |        |        |  s55 |        |               |             s57 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |      56 |          |               |                   |              |       54 |           |         58 |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |  53 |      |           |         |                   |                       |                       |
      |    45 |     |      |                r16 |           r16 |             r16 |           r16 |   r16 |    r16 |        |  r16 |    r16 |           r16 |             r16 |               |          r16 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    46 |     |      |                    |           r58 |                 |               |       |        |        |  r58 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    47 |     |      |                    |           r53 |                 |               |       |        |        |  r53 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    48 | r61 |      |                    |           r61 |                 |               |       |        |        |  r61 |        |           r61 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    49 |     |      |                    |               |                 |           r64 |       |        |        |  r64 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    50 |     |      |                s65 |               |                 |               |       |    s33 |        |  s67 |    s62 |           s71 |             s69 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |       68 |               |                   |              |          |        66 |            |         61 |            |                 |                     |                |         70 |                 |                    |                 |              |          |              |             |                |         63 |     |   59 |           |      60 |                   |                       |                       |
      |    51 |     |      |                    |           r54 |                 |               |       |        |        |  r54 |        |            s9 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |          47 |             72 |            |     |      |           |         |                   |                       |                       |
      |    52 | r46 |      |                    |           r46 |                 |               |       |        |        |  r46 |        |           r46 |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    53 | r25 |      |                    |               |                 |           r25 |       |    r25 |    s74 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |             73 |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    54 | r17 |  s75 |                    |               |             r17 |           r17 |       |    r17 |    r17 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    55 | r20 |  r20 |                    |               |             r20 |           r20 |       |    r20 |    r20 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    56 | r18 |  s76 |                    |               |             r18 |           r18 |       |    r18 |    r18 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    57 |     |      |                    |               |                 |               |       |        |        |  s55 |        |               |             s57 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |      56 |          |               |                   |              |       54 |           |         58 |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |  77 |      |           |         |                   |                       |                       |
      |    58 | r19 |      |                    |               |             r19 |           r19 |       |    r19 |    r19 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    59 |     |      |                    |               |                 |           r65 |       |        |        |  r65 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    60 |     |      |                r71 |           r71 |             r71 |           r71 |       |    r71 |        |  r71 |    r71 |           r71 |             r71 |               |          r71 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    61 |     |      |                r72 |           r72 |             r72 |           r72 |       |    r72 |        |  r72 |    r72 |           r72 |             r72 |               |          r72 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    62 | r31 |      |                r31 |           r31 |             r31 |           r31 |       |    r31 |        |  r31 |    r31 |           r31 |             r31 |               |          r31 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    63 |     |      |                r73 |           r73 |             r73 |           r73 |       |    r73 |        |  r73 |    r73 |           r73 |             r73 |               |          r73 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    64 | r77 |      |                r77 |           r77 |             r77 |           r77 |       |    r77 |        |  r77 |    r77 |           r77 |             r77 |               |          r77 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    65 | r78 |      |                r78 |           r78 |             r78 |           r78 |       |    r78 |        |  r78 |    r78 |           r78 |             r78 |               |          r78 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    66 |     |      |                r74 |           r74 |             r74 |           r74 |       |    r74 |        |  r74 |    r74 |           r74 |             r74 |               |          r74 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    67 | r32 |      |                r32 |           r32 |             r32 |           r32 |       |    r32 |        |  r32 |    r32 |           r32 |             r32 |               |          r32 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    68 |     |      |                r75 |           r75 |             r75 |           r75 |       |    r75 |        |  r75 |    r75 |           r75 |             r75 |               |          r75 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    69 |     |      |                s65 |               |             s78 |               |       |    s33 |        |  s67 |    s62 |           s71 |             s69 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |       68 |               |                   |           79 |          |        66 |            |         61 |            |                 |                     |                |         70 |                 |                    |                 |              |          |              |             |                |         63 |     |   80 |           |      60 |                   |                       |                       |
      |    70 |     |      |                r76 |           r76 |             r76 |           r76 |       |    r76 |        |  r76 |    r76 |           r76 |             r76 |               |          r76 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    71 |     |      |                    |           s81 |                 |               |       |        |        |  s84 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |         83 |                 |                     |             82 |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    72 |     |      |                    |           r59 |                 |               |       |        |        |  r59 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    73 | s88 |      |                    |               |                 |           r48 |       |    r48 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |            87 |                86 |              |                85 |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    74 |     |      |                s65 |               |                 |               |       |        |        |  s67 |    s62 |           s96 |             s94 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |            93 |                   |              |          |        92 |            |         90 |            |                 |                     |                |            |              95 |                    |                 |              |          |              |             |                |         91 |     |      |        89 |         |                   |                       |                       |
      |    75 | r23 |      |                    |               |             r23 |           r23 |       |    r23 |    r23 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    76 | r22 |      |                    |               |             r22 |           r22 |       |    r22 |    r22 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    77 |     |      |                    |               |             s97 |               |       |        |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    78 |     |      |                r79 |           r79 |             r79 |           r79 |       |    r79 |        |  r79 |    r79 |           r79 |             r79 |               |          r79 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    79 |     |      |                s65 |               |             s98 |               |       |    s33 |        |  s67 |    s62 |           s71 |             s69 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |       68 |               |                   |              |          |        66 |            |         61 |            |                 |                     |                |         70 |                 |                    |                 |              |          |              |             |                |         63 |     |   99 |           |      60 |                   |                       |                       |
      |    80 |     |      |                r81 |               |             r81 |               |       |    r81 |        |  r81 |    r81 |           r81 |             r81 |               |          r81 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    81 |     |      |                r83 |           r83 |             r83 |           r83 |       |    r83 |        |  r83 |    r83 |           r83 |             r83 |               |          r83 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    82 |     |      |                    |          s100 |                 |               |       |        |        |  s84 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |        101 |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    83 |     |      |                    |           r85 |                 |               |       |        |        |  r85 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    84 |     |      |                    |               |                 |               |  s102 |        |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    85 |     |      |                    |               |                 |           r15 |       |    r15 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    86 | s88 |      |                    |               |                 |           r47 |       |    r47 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |           103 |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    87 | r49 |      |                    |               |                 |           r49 |       |    r49 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    88 |     |      |                    |               |                 |               |       |        |        | s104 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    89 | r24 |      |                    |               |                 |           r24 |       |    r24 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    90 | r26 |      |                r26 |           r26 |             r26 |           r26 |       |    r26 |        |  r26 |    r26 |           r26 |             r26 |               |          r26 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    91 | r27 |      |                r27 |           r27 |             r27 |           r27 |       |    r27 |        |  r27 |    r27 |           r27 |             r27 |               |          r27 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    92 | r28 |      |                r28 |           r28 |             r28 |           r28 |       |    r28 |        |  r28 |    r28 |           r28 |             r28 |               |          r28 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    93 | r29 |      |                r29 |           r29 |             r29 |           r29 |       |    r29 |        |  r29 |    r29 |           r29 |             r29 |               |          r29 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    94 |     |      |                s65 |               |            s105 |               |       |        |        |  s67 |    s62 |           s96 |             s94 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |            93 |               106 |              |          |        92 |            |         90 |            |                 |                     |                |            |              95 |                    |                 |              |          |              |             |                |         91 |     |      |       107 |         |                   |                       |                       |
      |    95 | r30 |      |                r30 |           r30 |             r30 |           r30 |       |    r30 |        |  r30 |    r30 |           r30 |             r30 |               |          r30 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    96 |     |      |                    |          s108 |                 |               |       |        |        | s111 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |             110 |                 109 |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    97 | r21 |  r21 |                    |               |             r21 |           r21 |       |    r21 |    r21 |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    98 |     |      |                r80 |           r80 |             r80 |           r80 |       |    r80 |        |  r80 |    r80 |           r80 |             r80 |               |          r80 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |    99 |     |      |                r82 |               |             r82 |               |       |    r82 |        |  r82 |    r82 |           r82 |             r82 |               |          r82 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   100 |     |      |                r84 |           r84 |             r84 |           r84 |       |    r84 |        |  r84 |    r84 |           r84 |             r84 |               |          r84 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   101 |     |      |                    |           r86 |                 |               |       |        |        |  r86 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   102 |     |      |                s65 |               |                 |               |       |    s33 |        |  s67 |    s62 |           s71 |             s69 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |       68 |               |                   |              |          |        66 |            |         61 |            |                 |                     |                |         70 |                 |                    |                 |              |          |              |             |                |         63 |     |  112 |           |      60 |                   |                       |                       |
      |   103 | r50 |      |                    |               |                 |           r50 |       |    r50 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   104 | r67 |      |                    |               |                 |           r67 |       |    r67 |        |      |        |               |                 |          s114 |              |        |      |         |              |                  |             |              113 |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   105 | r33 |      |                r33 |           r33 |             r33 |           r33 |       |    r33 |        |  r33 |    r33 |           r33 |             r33 |               |          r33 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   106 |     |      |                s65 |               |            s115 |               |       |        |        |  s67 |    s62 |           s96 |             s94 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |            93 |                   |              |          |        92 |            |         90 |            |                 |                     |                |            |              95 |                    |                 |              |          |              |             |                |         91 |     |      |       116 |         |                   |                       |                       |
      |   107 |     |      |                r35 |               |             r35 |               |       |        |        |  r35 |    r35 |           r35 |             r35 |               |          r35 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   108 | r37 |      |                r37 |           r37 |             r37 |           r37 |       |    r37 |        |  r37 |    r37 |           r37 |             r37 |               |          r37 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   109 |     |      |                    |          s117 |                 |               |       |        |        | s111 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |             118 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   110 |     |      |                    |           r39 |                 |               |       |        |        |  r39 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   111 |     |      |                    |               |                 |               |  s119 |        |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   112 |     |      |                    |           r87 |                 |               |       |        |        |  r87 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   113 | r51 |      |                    |               |                 |           r51 |       |    r51 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   114 |     |      |                    |               |                 |               |       |        |        | s122 |        |               |                 |               |              |        |      |         |          121 |              120 |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   115 | r34 |      |                r34 |           r34 |             r34 |           r34 |       |    r34 |        |  r34 |    r34 |           r34 |             r34 |               |          r34 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   116 |     |      |                r36 |               |             r36 |               |       |        |        |  r36 |    r36 |           r36 |             r36 |               |          r36 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   117 | r38 |      |                r38 |           r38 |             r38 |           r38 |       |    r38 |        |  r38 |    r38 |           r38 |             r38 |               |          r38 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   118 |     |      |                    |           r40 |                 |               |       |        |        |  r40 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   119 |     |      |                s65 |               |                 |               |       |        |        |  s67 |    s62 |           s96 |             s94 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |            93 |                   |              |          |        92 |            |         90 |            |                 |                     |                |            |              95 |                    |                 |              |          |              |             |                |         91 |     |      |       123 |         |                   |                       |                       |
      |   120 |     |      |                    |               |                 |          s124 |       |        |        | s122 |        |               |                 |               |              |        |      |         |          125 |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   121 |     |      |                    |               |                 |           r68 |       |        |        |  r68 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   122 |     |      |                    |               |                 |               |  s126 |        |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   123 |     |      |                    |           r41 |                 |               |       |        |        |  r41 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   124 | r66 |      |                    |               |                 |           r66 |       |    r66 |        |      |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   125 |     |      |                    |               |                 |           r69 |       |        |        |  r69 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
      |   126 |     |      |                s65 |               |                 |               |       |        |        |  s67 |    s62 |           s96 |             s94 |               |          s64 |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |            93 |                   |              |          |        92 |            |         90 |            |                 |                     |                |            |              95 |                    |                 |              |          |              |             |                |         91 |     |      |       127 |         |                   |                       |                       |
      |   127 |     |      |                    |               |                 |           r70 |       |        |        |  r70 |        |               |                 |               |              |        |      |         |              |                  |             |                  |             |                |           |               |          |               |                   |              |                   |              |         |                     |      |         |          |               |                   |              |          |           |            |            |            |                 |                     |                |            |                 |                    |                 |              |          |              |             |                |            |     |      |           |         |                   |                       |                       |
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
      r58: Field → NAME ArgumentsOpt DirectivesOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: null,
          arguments: $2,
          directives: $3,
          name: $1.contents,
          selections: $4,
        };
      }
      r59: Field → Alias NAME ArgumentsOpt DirectivesOpt SelectionSetOpt {
        $$ = {
          kind: 'FIELD',
          alias: $1,
          arguments: $3,
          directives: $4,
          name: $2.contents,
          selections: $5,
        };
      }
      r60: Alias → NAME COLON { $$ = $1.contents; }
      r61: ArgumentsOpt → OPENING_PAREN ArgumentList CLOSING_PAREN { $$ = $2; }
      r62: ArgumentsOpt → ε { $$ = null; }
      r63: ArgumentList → Argument { $$ = [$1]; }
      r64: ArgumentList → ArgumentList Argument { $1.push($2); $$ = $1; }
      r65: Argument → NAME COLON Value {
        $$ = {
          kind: 'ARGUMENT',
          name: $1.contents,
          value: $3,
        };
      }
      r66: ArgumentsConstOpt → OPENING_PAREN ArgumentConstList CLOSING_PAREN { $$ = $2; }
      r67: ArgumentsConstOpt → ε { $$ = null; }
      r68: ArgumentConstList → ArgumentConst { $$ = [$1]; }
      r69: ArgumentConstList → ArgumentConstList ArgumentConst { $1.push($2); $$ = $1; }
      r70: ArgumentConst → NAME COLON ValueConst {
        $$ = {
          kind: 'ARGUMENT',
          name: $1.contents,
          value: $3,
        };
      }
      r71: Value → Variable { $$ = $1; }
      r72: Value → NumberValue { $$ = $1; }
      r73: Value → StringValue { $$ = $1; }
      r74: Value → NamedValue { $$ = $1; }
      r75: Value → ListValue { $$ = $1; }
      r76: Value → ObjectValue { $$ = $1; }
      r77: StringValue → STRING_VALUE {
        $$ = {
          kind: 'STRING',
          block: false,
          // TODO: consider doing this slice in the lexer
          value: $1.contents.slice(1, -1),
        };
      }
      r78: StringValue → BLOCK_STRING_VALUE {
        $$ = {
          kind: 'STRING',
          block: true,
          // TODO: preprocess value here...
          value: $1.contents,
        };
      }
      r79: ListValue → OPENING_BRACKET CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: [],
        };
      }
      r80: ListValue → OPENING_BRACKET ListValueList CLOSING_BRACKET {
        $$ = {
          kind: 'LIST_VALUE',
          value: $2,
        };
      }
      r81: ListValueList → Value { $$ = [$1]; }
      r82: ListValueList → ListValueList Value { $1.push($2); $$ = $1; }
      r83: ObjectValue → OPENING_BRACE CLOSING_BRACE {
        $$  = {
          kind: 'OBJECT_VALUE',
          fields: [],
        };
      }
      r84: ObjectValue → OPENING_BRACE ObjectFieldList CLOSING_BRACE {
        $$ = {
          kind: 'OBJECT_VALUE',
          fields: $2,
        };
      }
      r85: ObjectFieldList → ObjectField { $$ = [$1]; }
      r86: ObjectFieldList → ObjectFieldList ObjectField { $1.push($2); $$ = $1; }
      r87: ObjectField → NAME COLON Value {
        $$ = {
          name: $1.contents,
          value: $3,
        };
      }
      "
    `);
  });
});
