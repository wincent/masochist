import {dedent} from '@masochist/common';

import {
  extendedGrammarForItemSets,
  getAugmentedGrammar,
  getFirstSets,
  getFollowSets,
  getItemSets,
  getParseTable,
  itemSetsToTransitionTable,
  parseDSL,
  parseWithTable,
  stringifyGrammar,
  stringifyItemSets,
  stringifyParseTable,
} from '..';

import type {Grammar, Token} from '..';

// TODO: keep this around as `subsetGrammar`, but also add tests for full
// GraphQL grammar.
const grammar: Grammar = {
  tokens: ['CLOSING_BRACE', 'NAME', 'OPENING_BRACE'],
  rules: [
    {lhs: 'Document', rhs: ['DefinitionList']},
    {lhs: 'DefinitionList', rhs: ['Definition']},
    {
      lhs: 'DefinitionList',
      rhs: ['DefinitionList', 'Definition'],
      action: '{ $$ = $1.push($2) }',
    },
    {lhs: 'Definition', rhs: ['ExecutableDefinition']},
    {lhs: 'ExecutableDefinition', rhs: ['OperationDefinition']},
    {lhs: 'OperationDefinition', rhs: ['SelectionSet']},
    {
      lhs: 'SelectionSet',
      rhs: ['OPENING_BRACE', 'SelectionList', 'CLOSING_BRACE'],
    },
    {lhs: 'SelectionList', rhs: ['Selection']},
    {
      lhs: 'SelectionList',
      rhs: ['SelectionList', 'Selection'],
      action: '{ $$ = $1.push($2) }',
    },
    {lhs: 'Selection', rhs: ['Field']},
    {lhs: 'Field', rhs: ['NAME']},
  ],
};

const grammarDeclaration = `
  %token CLOSING_BRACE NAME OPENING_BRACE

  Document → DefinitionList
  DefinitionList → Definition
  DefinitionList → DefinitionList Definition { $$ = $1.push($2) }
  Definition → ExecutableDefinition
  ExecutableDefinition → OperationDefinition
  OperationDefinition → SelectionSet
  SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE
  SelectionList → Selection
  SelectionList → SelectionList Selection { $$ = $1.push($2) }
  Selection → Field
  Field → NAME
`;

// Based on grammar used in:
// http://web.archive.org/web/20211216015406/https://web.cs.dal.ca/~sjackson/lalr1.html
const toy = `
  %token eq star x

  S → N
  N → V eq E
  N → E
  E → V
  V → x
  V → star E
`;

describe('getFirstSets()', () => {
  it('produces first sets for the toy grammar', () => {
    expect(getFirstSets(parseDSL(toy))).toEqual({
      E: new Set(['star', 'x']),
      N: new Set(['star', 'x']),
      S: new Set(['star', 'x']),
      V: new Set(['star', 'x']),
    });
  });

  it('produces first sets for the extended toy grammar', () => {
    const toyGrammar = parseDSL(toy);
    const itemSets = getItemSets(toyGrammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, toyGrammar);
    expect(getFirstSets(extendedGrammar)).toEqual({
      '0/E/6': new Set(['0/star/5', '0/x/4']),
      '0/N/2': new Set(['0/star/5', '0/x/4']),
      "0/S'/$": new Set(['0/star/5', '0/x/4']),
      '0/S/1': new Set(['0/star/5', '0/x/4']),
      '0/V/3': new Set(['0/star/5', '0/x/4']),
      '5/E/8': new Set(['5/star/5', '5/x/4']),
      '5/V/9': new Set(['5/star/5', '5/x/4']),
      '7/E/10': new Set(['7/star/5', '7/x/4']),
      '7/V/9': new Set(['7/star/5', '7/x/4']),
    });
  });

  it('produces first sets for the subset grammar', () => {
    expect(getFirstSets(grammar)).toEqual({
      Definition: new Set(['OPENING_BRACE']),
      DefinitionList: new Set(['OPENING_BRACE']),
      Document: new Set(['OPENING_BRACE']),
      ExecutableDefinition: new Set(['OPENING_BRACE']),
      Field: new Set(['NAME']),
      OperationDefinition: new Set(['OPENING_BRACE']),
      Selection: new Set(['NAME']),
      SelectionList: new Set(['NAME']),
      SelectionSet: new Set(['OPENING_BRACE']),
    });
  });

  it('produces first sets for the extended subset grammar', () => {
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect(getFirstSets(extendedGrammar)).toEqual({
      '0/Definition/3': new Set(['0/OPENING_BRACE/7']),
      '0/DefinitionList/2': new Set(['0/OPENING_BRACE/7']),
      "0/Document'/$": new Set(['0/OPENING_BRACE/7']),
      '0/Document/1': new Set(['0/OPENING_BRACE/7']),
      '0/ExecutableDefinition/4': new Set(['0/OPENING_BRACE/7']),
      '0/OperationDefinition/5': new Set(['0/OPENING_BRACE/7']),
      '0/SelectionSet/6': new Set(['0/OPENING_BRACE/7']),
      '2/Definition/8': new Set(['2/OPENING_BRACE/7']),
      '2/ExecutableDefinition/4': new Set(['2/OPENING_BRACE/7']),
      '2/OperationDefinition/5': new Set(['2/OPENING_BRACE/7']),
      '2/SelectionSet/6': new Set(['2/OPENING_BRACE/7']),
      '7/Field/11': new Set(['7/NAME/12']),
      '7/Selection/10': new Set(['7/NAME/12']),
      '7/SelectionList/9': new Set(['7/NAME/12']),
      '9/Field/11': new Set(['9/NAME/12']),
      '9/Selection/14': new Set(['9/NAME/12']),
    });
  });
});

describe('getFollowSets()', () => {
  it('produces follow sets for the toy grammar', () => {
    expect(getFollowSets(parseDSL(toy))).toEqual({
      E: new Set(['eq', null]),
      N: new Set([null]),
      S: new Set([null]),
      V: new Set(['eq', null]),
    });
  });

  it('produces follow sets for the extended toy grammar', () => {
    const grammar = parseDSL(toy);
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect(getFollowSets(extendedGrammar)).toEqual({
      "0/S'/$": new Set([null]),
      '0/V/3': new Set(['3/eq/7', null]),
      '0/S/1': new Set([null]),
      '0/N/2': new Set([null]),
      '7/E/10': new Set([null]),
      '5/E/8': new Set(['3/eq/7', null]),
      '0/E/6': new Set([null]),
      '5/V/9': new Set(['3/eq/7', null]),
      '7/V/9': new Set([null]),
    });
  });

  it('produces follow sets for the subset grammar', () => {
    expect(getFollowSets(grammar)).toEqual({
      Document: new Set([null]),
      DefinitionList: new Set(['OPENING_BRACE', null]),
      SelectionList: new Set(['CLOSING_BRACE', 'NAME']),
      Definition: new Set(['OPENING_BRACE', null]),
      ExecutableDefinition: new Set(['OPENING_BRACE', null]),
      OperationDefinition: new Set(['OPENING_BRACE', null]),
      SelectionSet: new Set(['OPENING_BRACE', null]),
      Selection: new Set(['CLOSING_BRACE', 'NAME']),
      Field: new Set(['CLOSING_BRACE', 'NAME']),
    });
  });

  it('produces follow sets for the extended subset grammar', () => {
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect(getFollowSets(extendedGrammar)).toEqual({
      "0/Document'/$": new Set([null]),
      '0/Document/1': new Set([null]),
      '0/DefinitionList/2': new Set(['2/OPENING_BRACE/7', null]),
      '7/SelectionList/9': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '0/Definition/3': new Set(['2/OPENING_BRACE/7', null]),
      '2/Definition/8': new Set(['2/OPENING_BRACE/7', null]),
      '0/ExecutableDefinition/4': new Set(['2/OPENING_BRACE/7', null]),
      '0/OperationDefinition/5': new Set(['2/OPENING_BRACE/7', null]),
      '0/SelectionSet/6': new Set(['2/OPENING_BRACE/7', null]),
      '2/ExecutableDefinition/4': new Set(['2/OPENING_BRACE/7', null]),
      '2/OperationDefinition/5': new Set(['2/OPENING_BRACE/7', null]),
      '2/SelectionSet/6': new Set(['2/OPENING_BRACE/7', null]),
      '7/Selection/10': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '9/Selection/14': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '7/Field/11': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
      '9/Field/11': new Set(['9/CLOSING_BRACE/13', '9/NAME/12']),
    });
  });
});

describe('getItemSets()', () => {
  it('produces items sets for the toy grammar', () => {
    const itemSets = getItemSets(parseDSL(toy));

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
    expect(stringifyItemSets(getItemSets(grammar))).toBe(
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

describe('getParseTable()', () => {
  it('returns a parseTable for the toy grammar', () => {
    const grammar = parseDSL(toy);
    const itemSets = getItemSets(grammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, grammar);
    expect(getParseTable(itemSets, transitionTable, grammar)).toEqual([
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

  it('returns a parseTable for the subset grammar', () => {
    const itemSets = getItemSets(grammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, grammar);
    expect(getParseTable(itemSets, transitionTable, grammar)).toEqual([
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
});

describe('itemSetsToTransitionTable()', () => {
  it('returns a transition table for the toy grammar', () => {
    const grammar = parseDSL(toy);
    const itemSets = getItemSets(grammar);
    expect(itemSetsToTransitionTable(itemSets, grammar)).toEqual([
      /* 0 */ {
        E: 6,
        N: 2,
        S: 1,
        V: 3,
        star: 5,
        x: 4,
      },
      /* 1 */ {},
      /* 2 */ {},
      /* 3 */ {
        eq: 7,
      },
      /* 4 */ {},
      /* 5 */ {
        E: 8,
        V: 9,
        star: 5,
        x: 4,
      },
      /* 6 */ {},
      /* 7 */ {
        E: 10,
        V: 9,
        star: 5,
        x: 4,
      },
      /* 8 */ {},
      /* 9 */ {},
      /* 10 */ {},
    ]);
  });

  it('returns a transition table for the subset grammar', () => {
    const itemSets = getItemSets(grammar);
    expect(itemSetsToTransitionTable(itemSets, grammar)).toEqual([
      /* 0 */ {
        Definition: 3,
        DefinitionList: 2,
        Document: 1,
        ExecutableDefinition: 4,
        OPENING_BRACE: 7,
        OperationDefinition: 5,
        SelectionSet: 6,
      },
      /* 1 */ {},
      /* 2 */ {
        Definition: 8,
        ExecutableDefinition: 4,
        OPENING_BRACE: 7,
        OperationDefinition: 5,
        SelectionSet: 6,
      },
      /* 3 */ {},
      /* 4 */ {},
      /* 5 */ {},
      /* 6 */ {},
      /* 7 */ {Field: 11, NAME: 12, Selection: 10, SelectionList: 9},
      /* 8 */ {},
      /* 9 */ {CLOSING_BRACE: 13, Field: 11, NAME: 12, Selection: 14},
      /* 10 */ {},
      /* 11 */ {},
      /* 12 */ {},
      /* 13 */ {},
      /* 14 */ {},
    ]);
  });
});

describe('extendedGrammarForItemSets()', () => {
  it('returns an extended grammar for the toy grammar', () => {
    const grammar = parseDSL(toy);
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect(extendedGrammar).toEqual({
      tokens: [
        '3/eq/7',
        '0/x/4',
        '0/star/5',
        '5/x/4',
        '5/star/5',
        '7/x/4',
        '7/star/5',
      ],
      rules: [
        {lhs: "0/S'/$", rhs: ['0/S/1']},
        {lhs: '0/S/1', rhs: ['0/N/2']},
        {lhs: '0/N/2', rhs: ['0/V/3', '3/eq/7', '7/E/10']},
        {lhs: '0/V/3', rhs: ['0/x/4']},
        {lhs: '0/V/3', rhs: ['0/star/5', '5/E/8']},
        {lhs: '0/N/2', rhs: ['0/E/6']},
        {lhs: '0/E/6', rhs: ['0/V/3']},
        {lhs: '5/E/8', rhs: ['5/V/9']},
        {lhs: '5/V/9', rhs: ['5/x/4']},
        {lhs: '5/V/9', rhs: ['5/star/5', '5/E/8']},
        {lhs: '7/E/10', rhs: ['7/V/9']},
        {lhs: '7/V/9', rhs: ['7/x/4']},
        {lhs: '7/V/9', rhs: ['7/star/5', '5/E/8']},
      ],
    });
  });

  it('returns an extended grammar for the subset grammar', () => {
    const itemSets = getItemSets(grammar);
    const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
    expect(extendedGrammar).toEqual({
      tokens: [
        '0/OPENING_BRACE/7',
        '9/CLOSING_BRACE/13',
        '2/OPENING_BRACE/7',
        '7/NAME/12',
        '9/NAME/12',
      ],
      rules: [
        {lhs: "0/Document'/$", rhs: ['0/Document/1']},
        {lhs: '0/Document/1', rhs: ['0/DefinitionList/2']},
        {lhs: '0/DefinitionList/2', rhs: ['0/Definition/3']},
        {lhs: '0/Definition/3', rhs: ['0/ExecutableDefinition/4']},
        {
          lhs: '0/ExecutableDefinition/4',
          rhs: ['0/OperationDefinition/5'],
        },
        {lhs: '0/OperationDefinition/5', rhs: ['0/SelectionSet/6']},
        {
          lhs: '0/SelectionSet/6',
          rhs: ['0/OPENING_BRACE/7', '7/SelectionList/9', '9/CLOSING_BRACE/13'],
        },
        {
          lhs: '0/DefinitionList/2',
          rhs: ['0/DefinitionList/2', '2/Definition/8'],
        },
        {lhs: '2/Definition/8', rhs: ['2/ExecutableDefinition/4']},
        {
          lhs: '2/ExecutableDefinition/4',
          rhs: ['2/OperationDefinition/5'],
        },
        {lhs: '2/OperationDefinition/5', rhs: ['2/SelectionSet/6']},
        {
          lhs: '2/SelectionSet/6',
          rhs: ['2/OPENING_BRACE/7', '7/SelectionList/9', '9/CLOSING_BRACE/13'],
        },
        {lhs: '7/SelectionList/9', rhs: ['7/Selection/10']},
        {lhs: '7/Selection/10', rhs: ['7/Field/11']},
        {lhs: '7/Field/11', rhs: ['7/NAME/12']},
        {
          lhs: '7/SelectionList/9',
          rhs: ['7/SelectionList/9', '9/Selection/14'],
        },
        {lhs: '9/Selection/14', rhs: ['9/Field/11']},
        {lhs: '9/Field/11', rhs: ['9/NAME/12']},
      ],
    });
  });
});

describe('parseDSL()', () => {
  it('parses a the toy grammar declaration', () => {
    expect(parseDSL(toy)).toEqual({
      rules: [
        {lhs: 'S', rhs: ['N']},
        {lhs: 'N', rhs: ['V', 'eq', 'E']},
        {lhs: 'N', rhs: ['E']},
        {lhs: 'E', rhs: ['V']},
        {lhs: 'V', rhs: ['x']},
        {lhs: 'V', rhs: ['star', 'E']},
      ],
      tokens: ['eq', 'star', 'x'],
    });
  });

  it('produces grammar from grammarDeclaration', () => {
    expect(parseDSL(grammarDeclaration)).toEqual(grammar);
  });

  it('can handle multiline rules and actions', () => {
    expect(
      parseDSL(`
        %token A B C

        Start → Something
        Something → Another {
          // Oh look, this is a multiline action.
          $$ = thing() +
            $1 +
            other()
        }
        Another →
          First
          Second
          Third
        First → A
        Second → B { $$ = $1.toUpperCase() }
        Third → C
    `),
    ).toEqual({
      rules: [
        {lhs: 'Start', rhs: ['Something']},
        {
          lhs: 'Something',
          rhs: ['Another'],
          action:
            '{\n' +
            '          // Oh look, this is a multiline action.\n' +
            '          $$ = thing() +\n' +
            '            $1 +\n' +
            '            other()\n' +
            '        }',
        },
        {lhs: 'Another', rhs: ['First', 'Second', 'Third']},
        {lhs: 'First', rhs: ['A']},
        {lhs: 'Second', rhs: ['B'], action: '{ $$ = $1.toUpperCase() }'},
        {lhs: 'Third', rhs: ['C']},
      ],
      tokens: ['A', 'B', 'C'],
    });
  });

  it('complains when fed garbage', () => {
    expect(() => parseDSL('$FizzBuzz')).toThrow(dedent`
      Unexpected input at line 1, column 1 of input string

      > 1 | $FizzBuzz
          | ^
    `);
  });

  it('complains when %tokens is not passed any symbols', () => {
    expect(() => parseDSL('%token')).toThrow(dedent`
      expected at least one symbol after %token at line 1, column 7 of input string

      > 1 | %token
          |       ^
    `);

    // But one token is fine.
    expect(parseDSL('%token FOO')).toEqual({rules: [], tokens: ['FOO']});

    // As are multiple tokens on a single line.
    expect(parseDSL('%token FOO BAR')).toEqual({
      rules: [],
      tokens: ['FOO', 'BAR'],
    });

    // Or multiple lines with tokens.
    expect(
      parseDSL(`
        %token FOO BAR
        %token MORE
        %token OTHER
    `),
    ).toEqual({rules: [], tokens: ['FOO', 'BAR', 'MORE', 'OTHER']});
  });

  it('complains if actions have unbalanced parens', () => {
    expect(() =>
      parseDSL(`
      Rule → Symbol {
        if (true) {
          doSomething();
      }
    `),
    ).toThrow(dedent`
      Unbalanced braces in action at line 6, column 5 of input string

        4 |           doSomething();
        5 |       }
      > 6 |     
          |     ^
    `);
  });
});

describe('parseWithTable()', () => {
  it('parses samples for the toy grammar', () => {
    const grammar = parseDSL(toy);
    const itemSets = getItemSets(grammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, grammar);
    const table = getParseTable(itemSets, transitionTable, grammar);

    // Input (string): 5 = * 10
    // ie.   (tokens): x = * x
    const tokens: Array<Token> = [
      {name: 'x', contents: '5'},
      {name: 'eq'},
      {name: 'star'},
      {name: 'x', contents: '10'},
    ];

    expect(parseWithTable(table, tokens, grammar)).toEqual({
      kind: 'S',
      children: [
        {
          kind: 'N',
          children: [
            {
              kind: 'V',
              children: [{name: 'x', contents: '5'}],
            },
            {name: 'eq'},
            {
              kind: 'E',
              children: [
                {
                  kind: 'V',
                  children: [
                    {name: 'star'},
                    {
                      kind: 'E',
                      children: [
                        {
                          kind: 'V',
                          children: [{name: 'x', contents: '10'}],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  });
});

describe('stringifyGrammar()', () => {
  it('returns a stringified toy grammar', () => {
    const grammar = parseDSL(toy);
    const augmentedGrammar = getAugmentedGrammar(grammar);

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
    const grammar = parseDSL(toy);
    const itemSets = getItemSets(grammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, grammar);
    const parseTable = getParseTable(itemSets, transitionTable, grammar);
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
