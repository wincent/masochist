import {getParser} from '@masochist/parser/src/internal';
import {describe, expect, it} from 'bun:test';

import lexer from '../lexer';
import parseStatement from '../parseStatement';
import {grammar, table} from '../statement';

describe('parseStatement()', async () => {
  // We run these tests against a fresh copy of the parser, derived at runtime
  // from "statement.grammar", but also against a copy of the parser as written
  // to "parseStatement.ts". This allows us to do hacky things like inject
  // debug statements into the parser on disk for trouble-shooting purposes, if
  // needed.
  describe.each([
    ['parser derived from grammar', await getParser(grammar, table, lexer)],
    ['parser persisted to disk', parseStatement as any /* TODO: fix type */],
  ])(
    '%s',
    (_description, parseStatement: Awaited<ReturnType<typeof getParser>>) => {
      it('parses a call', () => {
        const input = 'click();';
        expect(parseStatement(input)).toEqual({
          kind: 'ExpressionStatement',
          expression: {
            kind: 'CallExpression',
            arguments: [],
            callee: {
              kind: 'Identifier',
              name: 'click',
            },
          },
        });
      });

      it('parses a `new` expression', () => {
        const input = 'const lexer = new Lexer(input);';
        expect(parseStatement(input)).toEqual({
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'lexer',
          },
          rhs: {
            kind: 'NewExpression',
            object: {
              kind: 'Identifier',
              name: 'Lexer',
            },
            arguments: [
              {
                kind: 'Identifier',
                name: 'input',
              },
            ],
          },
        });
      });

      it('parses a const boolean assignment statement', () => {
        const input = 'const isFoo = true;';
        expect(parseStatement(input)).toMatchSnapshot();
      });

      it('parses a let boolean assignment statement', () => {
        const input = 'let isFoo = false;';
        expect(parseStatement(input)).toMatchSnapshot();
      });

      it('parses a const number assignment statement', () => {
        const input = 'const isFoo = 1;';
        expect(parseStatement(input)).toMatchSnapshot();
      });

      it('parses a let number assignment statement', () => {
        const input = 'let isFoo = 2;';
        expect(parseStatement(input)).toMatchSnapshot();
      });

      it('parses a const nested array assignment', () => {
        const input = 'const stack = [[null, 0]];';
        expect(parseStatement(input)).toMatchSnapshot();
      });

      it('parses an empty class declaration', () => {
        const input = 'class Foo {}';
        expect(parseStatement(input)).toEqual({
          kind: 'ClassDeclaration',
          id: 'Foo',
          body: [],
        });
      });

      it('parses a (default) export class declaration', () => {
        const input = `
          export default class Token {
            name: string;
            start: number;
            end: number;
            source: string;

            constructor(name: string, start: number, end: number, source: string) {
              // No validation, for speed; we trust the generated lexer to be flawless.
              this.name = name;
              this.start = start;
              this.end = end;
              this.source = source;
            }

            // Make this a getter. Add rest of real contents to it.
            contents() {
              const value = this.source.slice(this.start, this.end);
              return value;
            }
          }
        `;
        expect(parseStatement(input)).toMatchSnapshot();
        // TODO: add rest of Token.ts example here ^^^
      });

      it('implements right-associativity for chained assignment expressions', () => {
        // Single item in "chain".
        expect(parseStatement('a = b;')).toEqual({
          binding: null,
          kind: 'AssignmentStatement',
          lhs: {
            kind: 'Identifier',
            name: 'a',
          },
          rhs: {
            kind: 'Identifier',
            name: 'b',
          },
        });

        // Two items in "chain".
        expect(parseStatement('a = b = c;')).toEqual({
          binding: null,
          kind: 'AssignmentStatement',
          lhs: {
            kind: 'Identifier',
            name: 'a',
          },
          rhs: {
            kind: 'BinaryExpression',
            lhs: {
              kind: 'Identifier',
              name: 'b',
            },
            operator: '=',
            rhs: {
              kind: 'Identifier',
              name: 'c',
            },
          },
        });

        // Six items in "chain", using another way of showing right-associativity.
        expect(parseStatement('a = b = c = d = e = f;')).toEqual(
          parseStatement('a = (b = (c = (d = (e = f))));'),
        );
      });

      it('implements left-associativity for chained additions', () => {
        // Single item in "chain".
        expect(parseStatement('a + b;')).toEqual({
          kind: 'ExpressionStatement',
          expression: {
            kind: 'BinaryExpression',
            lhs: {
              kind: 'Identifier',
              name: 'a',
            },
            operator: '+',
            rhs: {
              kind: 'Identifier',
              name: 'b',
            },
          },
        });

        // Two items in "chain".
        expect(parseStatement('a + b + c;')).toEqual({
          kind: 'ExpressionStatement',
          expression: {
            kind: 'BinaryExpression',
            lhs: {
              kind: 'BinaryExpression',
              lhs: {
                kind: 'Identifier',
                name: 'a',
              },
              operator: '+',
              rhs: {
                kind: 'Identifier',
                name: 'b',
              },
            },
            operator: '+',
            rhs: {
              kind: 'Identifier',
              name: 'c',
            },
          },
        });

        // Six items in "chain", using another way of showing left-associativity.
        expect(parseStatement('a + b + c + d + e + f;')).toEqual(
          parseStatement('((((a + b) + c) + d) + e) + f;'),
        );
      });

      it('implements left-associativity for chained subtractions', () => {
        // Single item in "chain".
        expect(parseStatement('a - b;')).toEqual({
          kind: 'ExpressionStatement',
          expression: {
            kind: 'BinaryExpression',
            lhs: {
              kind: 'Identifier',
              name: 'a',
            },
            operator: '-',
            rhs: {
              kind: 'Identifier',
              name: 'b',
            },
          },
        });

        // Two items in "chain".
        expect(parseStatement('a - b - c;')).toEqual({
          kind: 'ExpressionStatement',
          expression: {
            kind: 'BinaryExpression',
            lhs: {
              kind: 'BinaryExpression',
              lhs: {
                kind: 'Identifier',
                name: 'a',
              },
              operator: '-',
              rhs: {
                kind: 'Identifier',
                name: 'b',
              },
            },
            operator: '-',
            rhs: {
              kind: 'Identifier',
              name: 'c',
            },
          },
        });

        // Six items in "chain", using another way of showing left-associativity.
        expect(parseStatement('a - b - c - d - e - f;')).toEqual(
          parseStatement('((((a - b) - c) - d) - e) - f;'),
        );
      });

      it('treats plus and minus operators as having the same precedence', () => {
        expect(parseStatement('a - b - c + d + e - f + g;')).toEqual(
          parseStatement('(((((a - b) - c) + d) + e) - f) + g;'),
        );
      });

      it('implements left-associativity for chained member expressions', () => {
        const input = 'const a = b.c.d;';
        const parsed = parseStatement(input);

        expect(parsed).toEqual({
          binding: 'const',
          kind: 'AssignmentStatement',
          lhs: {
            kind: 'Identifier',
            name: 'a',
          },
          rhs: {
            kind: 'MemberExpression',
            object: {
              kind: 'MemberExpression',
              object: {
                kind: 'Identifier',
                name: 'b',
              },
              property: {
                kind: 'Identifier',
                name: 'c',
              },
            },
            property: {
              kind: 'Identifier',
              name: 'd',
            },
          },
        });

        // Showing that we can go deeper:
        expect(parseStatement(`const a = b.c.d.e.f.g;`)).toEqual(
          parseStatement(`const a = ((((b.c).d).e).f).g;`),
        );
      });

      it('parses a chained member expression as a call expression callee', () => {
        const input = 'const a = b.c.d();';
        const parsed = parseStatement(input);

        expect(parsed).toEqual({
          binding: 'const',
          kind: 'AssignmentStatement',
          lhs: {
            kind: 'Identifier',
            name: 'a',
          },
          rhs: {
            kind: 'CallExpression',
            arguments: [],
            callee: {
              kind: 'MemberExpression',
              object: {
                kind: 'MemberExpression',
                object: {
                  kind: 'Identifier',
                  name: 'b',
                },
                property: {
                  kind: 'Identifier',
                  name: 'c',
                },
              },
              property: {
                kind: 'Identifier',
                name: 'd',
              },
            },
          },
        });
      });
    },
  );
});
