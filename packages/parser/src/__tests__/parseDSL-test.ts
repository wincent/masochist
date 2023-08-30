import {describe, expect, it} from '@jest/globals';
import {dedent} from '@masochist/common';

import parseDSL from '../parseDSL';
import {subsetGrammarDeclaration, toyGrammarDeclaration} from './grammars';

describe('parseDSL()', () => {
  it('parses the toy grammar declaration', () => {
    expect(parseDSL(toyGrammarDeclaration)).toEqual({
      rules: [
        {lhs: 'S', rhs: ['N']},
        {lhs: 'N', rhs: ['V', 'eq', 'E']},
        {lhs: 'N', rhs: ['E']},
        {lhs: 'E', rhs: ['V']},
        {lhs: 'V', rhs: ['x']},
        {lhs: 'V', rhs: ['star', 'E']},
      ],
      tokens: new Set(['eq', 'star', 'x']),
    });
  });

  it('produces grammar from subsetGrammarDeclaration', () => {
    expect(parseDSL(subsetGrammarDeclaration)).toEqual({
      tokens: new Set(['CLOSING_BRACE', 'NAME', 'OPENING_BRACE']),
      rules: [
        {lhs: 'Document', rhs: ['DefinitionList']},
        {
          lhs: 'DefinitionList',
          rhs: ['Definition'],
          action: '{ $$ = [$1]; }',
        },
        {
          lhs: 'DefinitionList',
          rhs: ['DefinitionList', 'Definition'],
          action: '{ $1.push($2); $$ = $1; }',
        },
        {lhs: 'Definition', rhs: ['ExecutableDefinition']},
        {lhs: 'ExecutableDefinition', rhs: ['OperationDefinition']},
        {lhs: 'OperationDefinition', rhs: ['SelectionSet']},
        {
          lhs: 'SelectionSet',
          rhs: ['OPENING_BRACE', 'SelectionList', 'CLOSING_BRACE'],
          action: '{ $$ = $2; }',
        },
        {
          lhs: 'SelectionList',
          rhs: ['Selection'],
          action: '{ $$ = [$1]; }',
        },
        {
          lhs: 'SelectionList',
          rhs: ['SelectionList', 'Selection'],
          action: '{ $1.push($2); $$ = $1; }',
        },
        {lhs: 'Selection', rhs: ['Field']},
        {lhs: 'Field', rhs: ['NAME']},
      ],
    });
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
      tokens: new Set(['A', 'B', 'C']),
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
    expect(parseDSL('%token FOO')).toEqual({
      rules: [],
      tokens: new Set(['FOO']),
    });

    // As are multiple tokens on a single line.
    expect(parseDSL('%token FOO BAR')).toEqual({
      rules: [],
      tokens: new Set(['FOO', 'BAR']),
    });

    // Or multiple lines with tokens.
    expect(
      parseDSL(`
        %token FOO BAR
        %token MORE
        %token OTHER
    `),
    ).toEqual({rules: [], tokens: new Set(['FOO', 'BAR', 'MORE', 'OTHER'])});
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
