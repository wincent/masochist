import {dedent} from '@masochist/common';

import {
  extendedGrammarForItemSets,
  getFirstSets,
  getItemSets,
  grammar,
  grammarDeclaration,
  itemSetsToTransitionTable,
  parseDSL,
  stringifyItemSets,
} from '..';

describe('getFirstSets()', () => {
  it('produces first sets for grammar', () => {
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

  it('produces first sets for the extended grammar', () => {
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

describe('getItemSets()', () => {
  it('produces items sets for grammar', () => {
    const itemSets = getItemSets(grammar);

    expect(itemSets.length).toBe(15);

    expect(stringifyItemSets(itemSets)).toBe(
      dedent`
        I0:
          Document' → · Document, {$}
          Document → · DefinitionList, {$}
          DefinitionList → · Definition, {$}
          DefinitionList → · DefinitionList Definition, {$}
          Definition → · ExecutableDefinition, {$}
          ExecutableDefinition → · OperationDefinition, {$}
          OperationDefinition → · SelectionSet, {$}
          SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE, {$}

        I1:
          Document' → Document ·, {$}

        I2:
          Document → DefinitionList ·, {$}
          DefinitionList → DefinitionList · Definition, {$}
          Definition → · ExecutableDefinition, {$}
          ExecutableDefinition → · OperationDefinition, {$}
          OperationDefinition → · SelectionSet, {$}
          SelectionSet → · OPENING_BRACE SelectionList CLOSING_BRACE, {$}

        I3:
          DefinitionList → Definition ·, {$}

        I4:
          Definition → ExecutableDefinition ·, {$}

        I5:
          ExecutableDefinition → OperationDefinition ·, {$}

        I6:
          OperationDefinition → SelectionSet ·, {$}

        I7:
          SelectionSet → OPENING_BRACE · SelectionList CLOSING_BRACE, {$}
          SelectionList → · Selection, {CLOSING_BRACE}
          SelectionList → · SelectionList Selection, {CLOSING_BRACE}
          Selection → · Field, {$}
          Field → · NAME, {$}

        I8:
          DefinitionList → DefinitionList Definition ·, {$}

        I9:
          SelectionSet → OPENING_BRACE SelectionList · CLOSING_BRACE, {$}
          SelectionList → SelectionList · Selection, {CLOSING_BRACE}
          Selection → · Field, {$}
          Field → · NAME, {$}

        I10:
          SelectionList → Selection ·, {CLOSING_BRACE}

        I11:
          Selection → Field ·, {$}

        I12:
          Field → NAME ·, {$}

        I13:
          SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE ·, {$}

        I14:
          SelectionList → SelectionList Selection ·, {CLOSING_BRACE}
      ` + '\n',
    );
  });
});

describe('itemSetsToTransitionTable()', () => {
  it('returns a transition table for grammar', () => {
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
  it('returns an extended grammar', () => {
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
        // TODO: figure out whether this first rule makes sense
        {lhs: "0/Document'/$", rhs: ['0/Document/1']},
        {lhs: '0/Document/1', rhs: ['0/DefinitionList/2']},
        {lhs: '0/DefinitionList/2', rhs: ['0/Definition/3']},
        {
          lhs: '0/DefinitionList/2',
          rhs: ['0/DefinitionList/2', '2/Definition/8'],
        },
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
        {
          lhs: '7/SelectionList/9',
          rhs: ['7/SelectionList/9', '9/Selection/14'],
        },
        {lhs: '7/Selection/10', rhs: ['7/Field/11']},
        {lhs: '7/Field/11', rhs: ['7/NAME/12']},
        {lhs: '9/Selection/14', rhs: ['9/Field/11']},
        {lhs: '9/Field/11', rhs: ['9/NAME/12']},
      ],
    });
  });
});

describe('parseDSL()', () => {
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
