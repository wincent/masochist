import {dedent} from '@masochist/common';

import {
  getFirstSets,
  getItemSets,
  parseDSL,
  grammar,
  grammarDeclaration,
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
