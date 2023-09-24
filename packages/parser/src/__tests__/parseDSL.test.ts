import {dedent} from '@masochist/common';
import {describe, expect, it} from 'bun:test';

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
      tokens: new Map([
        ['eq', {}],
        ['star', {}],
        ['x', {}],
      ]),
    });
  });

  it('produces grammar from subsetGrammarDeclaration', () => {
    expect(parseDSL(subsetGrammarDeclaration)).toEqual({
      tokens: new Map([
        ['CLOSING_BRACE', {}],
        ['NAME', {}],
        ['OPENING_BRACE', {}],
      ]),
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
          action: '{\n' +
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
      tokens: new Map([
        ['A', {}],
        ['B', {}],
        ['C', {}],
      ]),
    });
  });

  it('parses %left and %right precedence declarations', () => {
    expect(
      parseDSL(`
        %token EXPONENT MINUS NUMBER PLUS

        %left MINUS PLUS
        %right EXPONENT

        Expression → Expression MINUS Expression
        Expression → Expression PLUS Expression
        Expression → Expression EXPONENT Expression
        Expression → NUMBER
      `),
    ).toEqual({
      rules: [
        {
          lhs: 'Expression',
          rhs: ['Expression', 'MINUS', 'Expression'],
          precedence: 1,
        },
        {
          lhs: 'Expression',
          rhs: ['Expression', 'PLUS', 'Expression'],
          precedence: 1,
        },
        {
          lhs: 'Expression',
          rhs: ['Expression', 'EXPONENT', 'Expression'],
          precedence: 2,
        },
        {lhs: 'Expression', rhs: ['NUMBER']},
      ],
      tokens: new Map([
        ['EXPONENT', {associativity: 'right', precedence: 2}],
        ['MINUS', {associativity: 'left', precedence: 1}],
        ['NUMBER', {}],
        ['PLUS', {associativity: 'left', precedence: 1}],
      ]),
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
      Expected at least one symbol after %token at line 1, column 7 of input string

      > 1 | %token
          |       ^
    `);

    // But one token is fine.
    expect(parseDSL('%token FOO')).toEqual({
      rules: [],
      tokens: new Map([['FOO', {}]]),
    });

    // As are multiple tokens on a single line.
    expect(parseDSL('%token FOO BAR')).toEqual({
      rules: [],
      tokens: new Map([
        ['FOO', {}],
        ['BAR', {}],
      ]),
    });

    // Or multiple lines with tokens.
    expect(
      parseDSL(`
        %token FOO BAR
        %token MORE
        %token OTHER
    `),
    ).toEqual({
      rules: [],
      tokens: new Map([
        ['FOO', {}],
        ['BAR', {}],
        ['MORE', {}],
        ['OTHER', {}],
      ]),
    });
  });

  it('complains if a %token is redeclared', () => {
    expect(() =>
      parseDSL(`
      %token foo bar
      %token baz foo
    `)
    ).toThrow(dedent`
      Cannot redeclare token foo at line 3, column 18 of input string

        1 |
        2 |       %token foo bar
      > 3 |       %token baz foo
          |                  ^
        4 |
    `);
  });

  it('complains if %left/%right refer to undeclared tokens', () => {
    expect(() =>
      parseDSL(`
      %token foo bar
      %left qux
    `)
    ).toThrow(dedent`
      Cannot specify precedence for unknown token qux at line 3, column 13 of input string

        1 |
        2 |       %token foo bar
      > 3 |       %left qux
          |             ^
        4 |
    `);
  });

  it('complains if %left/%right directives are redeclared', () => {
    expect(() =>
      parseDSL(`
      %token foo bar
      %left foo foo
    `)
    ).toThrow(dedent`
      Cannot redeclare precedence for token foo at line 3, column 17 of input string

        1 |
        2 |       %token foo bar
      > 3 |       %left foo foo
          |                 ^
        4 |
    `);
  });

  it('complains if %left/%right directives have no symbols', () => {
    expect(() =>
      parseDSL(`
      %token foo bar
      %left
    `)
    ).toThrow(dedent`
      Expected at least one symbol after %left at line 3, column 12 of input string

        1 |
        2 |       %token foo bar
      > 3 |       %left
          |            ^
        4 |
    `);
  });

  it('complains if actions have unbalanced parens', () => {
    expect(() =>
      parseDSL(`
      Rule → Symbol {
        if (true) {
          doSomething();
      }
    `)
    ).toThrow(dedent`
      Unbalanced braces in action at line 6, column 5 of input string

        4 |           doSomething();
        5 |       }
      > 6 |
          |     ^
    `);
  });
});
