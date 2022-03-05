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
      | State | CLOSING_BRACE | COLON | NAME | OPENING_BRACE |      $ |Alias |Definition |DefinitionList |Document |ExecutableDefinition |Field |OperationDefinition |OperationNameOpt |OperationType |Selection |SelectionList |SelectionSet |SelectionSetOpt |
      |-------|---------------|-------|------|---------------|--------|------|-----------|---------------|---------|---------------------|------|--------------------|-----------------|--------------|----------|--------------|-------------|----------------|
      |     0 |               |       |   s7 |            s9 |        |      |         3 |             2 |       1 |                   4 |      |                  5 |                 |            6 |          |              |           8 |                |
      |     1 |               |       |      |               | accept |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |     2 |               |       |   s7 |            s9 |     r1 |      |        10 |               |         |                   4 |      |                  5 |                 |            6 |          |              |           8 |                |
      |     3 |               |       |   r2 |            r2 |     r2 |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |     4 |               |       |   r4 |            r4 |     r4 |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |     5 |               |       |   r5 |            r5 |     r5 |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |     6 |               |       |  s12 |           r10 |        |      |           |               |         |                     |      |                    |              11 |              |          |              |             |                |
      |     7 |               |       |   r8 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |     8 |               |       |   r7 |            r7 |     r7 |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |     9 |               |       |  s16 |               |        |   17 |           |               |         |                     |   15 |                    |                 |              |       14 |           13 |             |                |
      |    10 |               |       |   r3 |            r3 |     r3 |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    11 |               |       |      |            s9 |        |      |           |               |         |                     |      |                    |                 |              |          |              |          18 |                |
      |    12 |               |       |      |            r9 |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    13 |           s19 |       |  s16 |               |        |   17 |           |               |         |                     |   15 |                    |                 |              |       20 |              |             |                |
      |    14 |           r14 |       |  r14 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    15 |           r16 |       |  r16 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    16 |           r13 |   s22 |  r13 |            s9 |        |      |           |               |         |                     |      |                    |                 |              |          |              |          23 |             21 |
      |    17 |               |       |  s24 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    18 |               |       |   r6 |            r6 |     r6 |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    19 |           r11 |       |  r11 |           r11 |    r11 |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    20 |           r15 |       |  r15 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    21 |           r17 |       |  r17 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    22 |               |       |  r19 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    23 |           r12 |       |  r12 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
      |    24 |           r13 |       |  r13 |            s9 |        |      |           |               |         |                     |      |                    |                 |              |          |              |          23 |             25 |
      |    25 |           r18 |       |  r18 |               |        |      |           |               |         |                     |      |                    |                 |              |          |              |             |                |
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
      r1: Document → DefinitionList
      r2: DefinitionList → Definition { $$ = [$1]; }
      r3: DefinitionList → DefinitionList Definition { $1.push($2); $$ = $1; }
      r4: Definition → ExecutableDefinition
      r5: ExecutableDefinition → OperationDefinition
      r6: OperationDefinition → OperationType OperationNameOpt SelectionSet {
          $$ = {
            kind: 'OPERATION',
            name: $2,
            selections: $3,
            type: $1,
          };
        }
      r7: OperationDefinition → SelectionSet {
          $$ = {
            kind: 'OPERATION',
            name: null,
            selections: $1,
            type: 'QUERY',
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
            throw new Error('Unsupported operation type: ' + contents);
          }
        }}
      r9: OperationNameOpt → NAME { $$ = $1.contents; }
      r10: OperationNameOpt → ε { $$ = null; }
      r11: SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE { $$ = $2; }
      r12: SelectionSetOpt → SelectionSet { $$ = $1; }
      r13: SelectionSetOpt → ε { $$ = null; }
      r14: SelectionList → Selection { $$ = [$1]; }
      r15: SelectionList → SelectionList Selection { $1.push($2); $$ = $1; }
      r16: Selection → Field { $$ = $1; }
      r17: Field → NAME SelectionSetOpt {
          $$ = {
            kind: 'FIELD',
            alias: null,
            name: $1.contents,
            selections: $2,
          };
        }
      r18: Field → Alias NAME SelectionSetOpt {
          $$ = {
            kind: 'FIELD',
            alias: $1,
            name: $2.contents,
            selections: $3,
          };
        }
      r19: Alias → NAME COLON { $$ = $1.contents; }
      "
    `);
  });
});
