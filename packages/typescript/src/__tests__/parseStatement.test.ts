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
  describe.each([[
    'parser derived from grammar',
    await getParser(grammar, table, lexer),
  ], ['parser persisted to disk', parseStatement as any /* TODO: fix type */]])(
    '%s',
    (_description, parseStatement: Awaited<ReturnType<typeof getParser>>) => {
      it('parses a call', () => {
        const input = 'click();';
        expect(parseStatement(input)).toEqual([{
          kind: 'ExpressionStatement',
          expression: {
            kind: 'CallExpression',
            arguments: [],
            callee: {
              kind: 'Identifier',
              name: 'click',
            },
          },
        }]);
      });

      it('parses multiple calls', () => {
        const input = `
          click();
          click();
        `;
        const statement = {
          kind: 'ExpressionStatement',
          expression: {
            kind: 'CallExpression',
            arguments: [],
            callee: {
              kind: 'Identifier',
              name: 'click',
            },
          },
        };
        expect(parseStatement(input)).toEqual([statement, statement]);
      });

      it('parses a `new` expression', () => {
        const input = 'const lexer = new Lexer(input);';
        expect(parseStatement(input)).toEqual([{
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
            arguments: [{
              kind: 'Identifier',
              name: 'input',
            }],
          },
        }]);
      });

      it('parses a logical OR expression', () => {
        const input = 'let token = lexer.next() || EOF;';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'let',
          lhs: {
            kind: 'Identifier',
            name: 'token',
          },
          rhs: {
            kind: 'BinaryExpression',
            lhs: {
              kind: 'CallExpression',
              callee: {
                kind: 'MemberExpression',
                object: {
                  kind: 'Identifier',
                  name: 'lexer',
                },
                property: {
                  kind: 'Identifier',
                  name: 'next',
                },
              },
              arguments: [],
            },
            operator: '||',
            rhs: {
              kind: 'Identifier',
              name: 'EOF',
            },
          },
        }]);
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

      it('parses a named type const assignment', () => {
        const input = 'const stack: Foo = [[null, 0]];';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'stack',
          },
          type: {
            kind: 'NamedType',
            name: 'Foo',
          },
          rhs: {
            kind: 'ArrayValue',
            items: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'NullValue',
              }, {
                kind: 'NumberValue',
                value: 0,
                base: 10,
              }],
            }],
          },
        }]);
      });

      it('parses a generic type const assignment (single parameter)', () => {
        const input = 'const stack: Foo<Qux> = [[null, 0]];';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'stack',
          },
          type: {
            kind: 'GenericType',
            name: 'Foo',
            parameters: [{
              kind: 'NamedType',
              name: 'Qux',
            }],
          },
          rhs: {
            kind: 'ArrayValue',
            items: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'NullValue',
              }, {
                kind: 'NumberValue',
                value: 0,
                base: 10,
              }],
            }],
          },
        }]);
      });

      it('parses a generic type const assignment (multiple parameter)', () => {
        const input = 'const stack: Foo<T, K> = [[null, 0]];';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'stack',
          },
          type: {
            kind: 'GenericType',
            name: 'Foo',
            parameters: [{
              kind: 'NamedType',
              name: 'T',
            }, {
              kind: 'NamedType',
              name: 'K',
            }],
          },
          rhs: {
            kind: 'ArrayValue',
            items: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'NullValue',
              }, {
                kind: 'NumberValue',
                value: 0,
                base: 10,
              }],
            }],
          },
        }]);
      });

      it('parses a tuple type const assignment (single parameter)', () => {
        const input = 'const stack: [Qux] = [[null, 0]];';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'stack',
          },
          type: {
            kind: 'TupleType',
            elements: [{
              kind: 'NamedType',
              name: 'Qux',
            }],
          },
          rhs: {
            kind: 'ArrayValue',
            items: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'NullValue',
              }, {
                kind: 'NumberValue',
                value: 0,
                base: 10,
              }],
            }],
          },
        }]);
      });

      it('parses a tuple type const assignment (multiple parameter)', () => {
        const input = 'const stack: [T, K] = [[null, 0]];';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'stack',
          },
          type: {
            kind: 'TupleType',
            elements: [{
              kind: 'NamedType',
              name: 'T',
            }, {
              kind: 'NamedType',
              name: 'K',
            }],
          },
          rhs: {
            kind: 'ArrayValue',
            items: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'NullValue',
              }, {
                kind: 'NumberValue',
                value: 0,
                base: 10,
              }],
            }],
          },
        }]);
      });

      it('parses a union type const assignment', () => {
        const input = 'const stack: A | B | C = [[null, 0]];';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'stack',
          },
          type: {
            kind: 'UnionType',
            variants: [{
              kind: 'NamedType',
              name: 'A',
            }, {
              kind: 'NamedType',
              name: 'B',
            }, {
              kind: 'NamedType',
              name: 'C',
            }],
          },
          rhs: {
            kind: 'ArrayValue',
            items: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'NullValue',
              }, {
                kind: 'NumberValue',
                value: 0,
                base: 10,
              }],
            }],
          },
        }]);
      });

      it('parses a nested type const assignment', () => {
        const input =
          'const stack: Array<[Production | Token | null, number]> = [[null, 0]];';
        expect(parseStatement(input)).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'const',
          lhs: {
            kind: 'Identifier',
            name: 'stack',
          },
          type: {
            kind: 'GenericType',
            name: 'Array',
            parameters: [{
              kind: 'TupleType',
              elements: [{
                kind: 'UnionType',
                variants: [{
                  kind: 'NamedType',
                  name: 'Production',
                }, {
                  kind: 'NamedType',
                  name: 'Token',
                }, {
                  kind: 'NamedType',
                  name: 'null',
                }],
              }, {
                kind: 'NamedType',
                name: 'number',
              }],
            }],
          },
          rhs: {
            kind: 'ArrayValue',
            items: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'NullValue',
              }, {
                kind: 'NumberValue',
                value: 0,
                base: 10,
              }],
            }],
          },
        }]);
      });

      it('parses a cast', () => {
        const input = 'stack.push([(code as any)(...popped), target]);';
        expect(parseStatement(input)).toEqual([{
          kind: 'ExpressionStatement',
          expression: {
            kind: 'CallExpression',
            callee: {
              kind: 'MemberExpression',
              object: {
                kind: 'Identifier',
                name: 'stack',
              },
              property: {
                kind: 'Identifier',
                name: 'push',
              },
            },
            arguments: [{
              kind: 'ArrayValue',
              items: [{
                kind: 'CallExpression',
                callee: {
                  kind: 'Identifier',
                  name: 'code',
                  cast: {
                    kind: 'NamedType',
                    name: 'any',
                  },
                },
                arguments: [{
                  kind: 'SpreadElement',
                  expression: {
                    kind: 'Identifier',
                    name: 'popped',
                  },
                }],
              }, {
                kind: 'Identifier',
                name: 'target',
              }],
            }],
          },
        }]);
      });

      it('parses an object with shorthand property', () => {
        const input = "Object.defineProperty(this, 'contents', {value});";
        expect(parseStatement(input)).toEqual([{
          kind: 'ExpressionStatement',
          expression: {
            kind: 'CallExpression',
            callee: {
              kind: 'MemberExpression',
              object: {
                kind: 'Identifier',
                name: 'Object',
              },
              property: {
                kind: 'Identifier',
                name: 'defineProperty',
              },
            },
            arguments: [{
              kind: 'Identifier',
              name: 'this',
            }, {
              kind: 'StringValue',
              value: "'contents'",
            }, {
              kind: 'ObjectValue',
              properties: [{
                kind: 'ObjectProperty',
                key: {
                  kind: 'Identifier',
                  name: 'value',
                },
                value: {
                  kind: 'Identifier',
                  name: 'value',
                },
                computed: false,
                shorthand: true,
              }],
            }],
          },
        }]);
      });

      it('parses an empty class declaration', () => {
        const input = 'class Foo {}';
        expect(parseStatement(input)).toEqual([{
          kind: 'ClassDeclaration',
          id: 'Foo',
          body: [],
        }]);
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

            get contents() {
              const value = this.source.slice(this.start, this.end);
              Object.defineProperty(this, 'contents', {value});
              return value;
            }
          }
        `;
        expect(parseStatement(input)).toMatchSnapshot();
        // TODO: add rest of Token.ts example here ^^^
      });

      it('recognizes "get" as an identifier in non-accessor positions', () => {
        expect(parseStatement('let get = true;')).toEqual([{
          kind: 'AssignmentStatement',
          binding: 'let',
          lhs: {
            kind: 'Identifier',
            name: 'get',
          },
          rhs: {
            kind: 'BooleanValue',
            value: true,
          },
        }]);

        // Hard mode: `get` in a place you'd normally expect to see an accessor.
        expect(parseStatement(`
          class Foo {
            get(stuff) {
              return stuff;
            }
          }
        `)).toEqual([{
          kind: 'ClassDeclaration',
          id: 'Foo',
          body: [{
            kind: 'MethodDefinition',
            key: {
              kind: 'Identifier',
              name: 'get',
            },
            value: {
              kind: 'FunctionExpression',
              arguments: [{
                kind: 'Argument',
                name: 'stuff',
              }],
              body: [{
                kind: 'ReturnStatement',
                expression: {
                  kind: 'Identifier',
                  name: 'stuff',
                },
              }],
            },
          }],
        }]);
      });

      it('implements right-associativity for chained assignment expressions', () => {
        // Single item in "chain".
        expect(parseStatement('a = b;')).toEqual([{
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
        }]);

        // Two items in "chain".
        expect(parseStatement('a = b = c;')).toEqual([{
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
        }]);

        // Six items in "chain", using another way of showing right-associativity.
        expect(parseStatement('a = b = c = d = e = f;')).toEqual(
          parseStatement('a = (b = (c = (d = (e = f))));'),
        );
      });

      it('implements left-associativity for chained additions', () => {
        // Single item in "chain".
        expect(parseStatement('a + b;')).toEqual([{
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
        }]);

        // Two items in "chain".
        expect(parseStatement('a + b + c;')).toEqual([{
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
        }]);

        // Six items in "chain", using another way of showing left-associativity.
        expect(parseStatement('a + b + c + d + e + f;')).toEqual(
          parseStatement('((((a + b) + c) + d) + e) + f;'),
        );
      });

      it('implements left-associativity for chained subtractions', () => {
        // Single item in "chain".
        expect(parseStatement('a - b;')).toEqual([{
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
        }]);

        // Two items in "chain".
        expect(parseStatement('a - b - c;')).toEqual([{
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
        }]);

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

        expect(parsed).toEqual([{
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
        }]);

        // Showing that we can go deeper:
        expect(parseStatement(`const a = b.c.d.e.f.g;`)).toEqual(
          parseStatement(`const a = ((((b.c).d).e).f).g;`),
        );
      });

      it('parses a chained member expression as a call expression callee', () => {
        const input = 'const a = b.c.d();';
        const parsed = parseStatement(input);

        expect(parsed).toEqual([{
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
        }]);
      });

      it('parses an empty while statement', () => {
        expect(parseStatement('while (true) {}')).toEqual([{
          kind: 'WhileStatement',
          condition: {
            kind: 'BooleanValue',
            value: true,
          },
          block: [],
        }]);
      });

      it('parses a non-empty while statement', () => {
        expect(
          parseStatement(`
          while (foo() === 0) {
            bar(true);
          }
        `),
        ).toEqual([{
          kind: 'WhileStatement',
          condition: {
            kind: 'BinaryExpression',
            lhs: {
              kind: 'CallExpression',
              callee: {
                kind: 'Identifier',
                name: 'foo',
              },
              arguments: [],
            },
            operator: '===',
            rhs: {
              kind: 'NumberValue',
              value: 0,
              base: 10,
            },
          },
          block: [{
            kind: 'ExpressionStatement',
            expression: {
              kind: 'CallExpression',
              callee: {
                kind: 'Identifier',
                name: 'bar',
              },
              arguments: [{
                kind: 'BooleanValue',
                value: true,
              }],
            },
          }],
        }]);
      });

      it('parses a conditional', () => {
        expect(parseStatement(`
            if (true) {
              alert("It's true. All of it.");
            }
        `)).toEqual([{
          kind: 'IfStatement',
          consequents: [{
            kind: 'Consequent',
            condition: {
              kind: 'BooleanValue',
              value: true,
            },
            block: [{
              kind: 'ExpressionStatement',
              expression: {
                kind: 'CallExpression',
                callee: {
                  kind: 'Identifier',
                  name: 'alert',
                },
                arguments: [{
                  kind: 'StringValue',
                  value: `"It's true. All of it."`,
                }],
              },
            }],
          }],
        }]);
      });

      it('parses index expressions', () => {
        expect(parseStatement(`
          rules[action.rule];
          gotos[next][production];
        `)).toEqual([{
          kind: 'ExpressionStatement',
          expression: {
            kind: 'IndexExpression',
            indexee: {
              kind: 'Identifier',
              name: 'rules',
            },
            index: {
              kind: 'MemberExpression',
              object: {
                kind: 'Identifier',
                name: 'action',
              },
              property: {
                kind: 'Identifier',
                name: 'rule',
              },
            },
          },
        }, {
          kind: 'ExpressionStatement',
          expression: {
            kind: 'IndexExpression',
            indexee: {
              kind: 'IndexExpression',
              indexee: {
                kind: 'Identifier',
                name: 'gotos',
              },
              index: {
                kind: 'Identifier',
                name: 'next',
              },
            },
            index: {
              kind: 'Identifier',
              name: 'production',
            },
          },
        }]);
      });

      it('parses increment and decrement expressions', () => {
        expect(parseStatement(`
          i++;
          ++i;
          j--;
          --j;
        `)).toEqual([{
          kind: 'ExpressionStatement',
          expression: {
            kind: 'IncrementExpression',
            operand: {
              kind: 'Identifier',
              name: 'i',
            },
            position: 'postfix',
          },
        }, {
          kind: 'ExpressionStatement',
          expression: {
            kind: 'IncrementExpression',
            operand: {
              kind: 'Identifier',
              name: 'i',
            },
            position: 'prefix',
          },
        }, {
          kind: 'ExpressionStatement',
          expression: {
            kind: 'DecrementExpression',
            operand: {
              kind: 'Identifier',
              name: 'j',
            },
            position: 'postfix',
          },
        }, {
          kind: 'ExpressionStatement',
          expression: {
            kind: 'DecrementExpression',
            operand: {
              kind: 'Identifier',
              name: 'j',
            },
            position: 'prefix',
          },
        }]);
      });

      // TODO: ForStatement
      // TODO: LineComment
      // TODO: ability to omit elements in ArrayPattern
      it('parses a large chunk of the static parser definition', () => {
        expect(
          parseStatement(`
            const stack: Array<[Production | Token | null, number]> = [[null, 0]];
            const lexer = new Lexer(input);
            let token = lexer.next() || EOF;
            while (true) {
              if (!action) {
                throw new Error('syntax error at symbol ' + token.name);
              } else if (action.kind === 'Accept') {
                const [tree] = stack[1];
                return tree;
              } else if (action.kind === 'Shift') {
                stack.push([token, action.state]);
                token = lexer.next() || EOF;
              } else if (action.kind === 'Reduce') {
                const {production, pop, action: code} = rules[action.rule];
                const popped: Array<Production | Token | null> = [];
                stack.push([(code as any)(...popped), target]);
              }
            }
        `),
        ).toEqual(
          [{
            kind: 'AssignmentStatement',
            binding: 'const',
            lhs: {
              kind: 'Identifier',
              name: 'stack',
            },
            type: {
              kind: 'GenericType',
              name: 'Array',
              parameters: [{
                kind: 'TupleType',
                elements: [{
                  kind: 'UnionType',
                  variants: [{
                    kind: 'NamedType',
                    name: 'Production',
                  }, {
                    kind: 'NamedType',
                    name: 'Token',
                  }, {
                    kind: 'NamedType',
                    name: 'null',
                  }],
                }, {
                  kind: 'NamedType',
                  name: 'number',
                }],
              }],
            },
            rhs: {
              kind: 'ArrayValue',
              items: [{
                kind: 'ArrayValue',
                items: [{
                  kind: 'NullValue',
                }, {
                  kind: 'NumberValue',
                  value: 0,
                  base: 10,
                }],
              }],
            },
          }, {
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
              arguments: [{
                kind: 'Identifier',
                name: 'input',
              }],
            },
          }, {
            kind: 'AssignmentStatement',
            binding: 'let',
            lhs: {
              kind: 'Identifier',
              name: 'token',
            },
            rhs: {
              kind: 'BinaryExpression',
              lhs: {
                kind: 'CallExpression',
                callee: {
                  kind: 'MemberExpression',
                  object: {
                    kind: 'Identifier',
                    name: 'lexer',
                  },
                  property: {
                    kind: 'Identifier',
                    name: 'next',
                  },
                },
                arguments: [],
              },
              operator: '||',
              rhs: {
                kind: 'Identifier',
                name: 'EOF',
              },
            },
          }, {
            kind: 'WhileStatement',
            condition: {
              kind: 'BooleanValue',
              value: true,
            },
            block: [{
              kind: 'IfStatement',
              consequents: [{
                kind: 'Consequent',
                condition: {
                  kind: 'LogicalNotExpression',
                  operand: {
                    kind: 'Identifier',
                    name: 'action',
                  },
                },
                block: [{
                  kind: 'ThrowStatement',
                  expression: {
                    kind: 'NewExpression',
                    object: {
                      kind: 'Identifier',
                      name: 'Error',
                    },
                    arguments: [{
                      kind: 'BinaryExpression',
                      lhs: {
                        kind: 'StringValue',
                        value: "'syntax error at symbol '",
                      },
                      operator: '+',
                      rhs: {
                        kind: 'MemberExpression',
                        object: {
                          kind: 'Identifier',
                          name: 'token',
                        },
                        property: {
                          kind: 'Identifier',
                          name: 'name',
                        },
                      },
                    }],
                  },
                }],
              }, {
                kind: 'Consequent',
                condition: {
                  kind: 'BinaryExpression',
                  lhs: {
                    kind: 'MemberExpression',
                    object: {
                      kind: 'Identifier',
                      name: 'action',
                    },
                    property: {
                      kind: 'Identifier',
                      name: 'kind',
                    },
                  },
                  operator: '===',
                  rhs: {
                    kind: 'StringValue',
                    value: "'Accept'",
                  },
                },
                block: [{
                  kind: 'AssignmentStatement',
                  binding: 'const',
                  lhs: {
                    kind: 'ArrayPattern',
                    elements: [{
                      kind: 'Identifier',
                      name: 'tree',
                    }],
                  },
                  rhs: {
                    kind: 'IndexExpression',
                    indexee: {
                      kind: 'Identifier',
                      name: 'stack',
                    },
                    index: {
                      kind: 'NumberValue',
                      value: 1,
                      base: 10,
                    },
                  },
                }, {
                  kind: 'ReturnStatement',
                  expression: {
                    kind: 'Identifier',
                    name: 'tree',
                  },
                }],
              }, {
                kind: 'Consequent',
                condition: {
                  kind: 'BinaryExpression',
                  lhs: {
                    kind: 'MemberExpression',
                    object: {
                      kind: 'Identifier',
                      name: 'action',
                    },
                    property: {
                      kind: 'Identifier',
                      name: 'kind',
                    },
                  },
                  operator: '===',
                  rhs: {
                    kind: 'StringValue',
                    value: "'Shift'",
                  },
                },
                block: [{
                  kind: 'ExpressionStatement',
                  expression: {
                    kind: 'CallExpression',
                    callee: {
                      kind: 'MemberExpression',
                      object: {
                        kind: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        kind: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [{
                      kind: 'ArrayValue',
                      items: [{
                        kind: 'Identifier',
                        name: 'token',
                      }, {
                        kind: 'MemberExpression',
                        object: {
                          kind: 'Identifier',
                          name: 'action',
                        },
                        property: {
                          kind: 'Identifier',
                          name: 'state',
                        },
                      }],
                    }],
                  },
                }, {
                  kind: 'AssignmentStatement',
                  binding: null,
                  lhs: {
                    kind: 'Identifier',
                    name: 'token',
                  },
                  rhs: {
                    kind: 'BinaryExpression',
                    lhs: {
                      kind: 'CallExpression',
                      callee: {
                        kind: 'MemberExpression',
                        object: {
                          kind: 'Identifier',
                          name: 'lexer',
                        },
                        property: {
                          kind: 'Identifier',
                          name: 'next',
                        },
                      },
                      arguments: [],
                    },
                    operator: '||',
                    rhs: {
                      kind: 'Identifier',
                      name: 'EOF',
                    },
                  },
                }],
              }, {
                kind: 'Consequent',
                condition: {
                  kind: 'BinaryExpression',
                  lhs: {
                    kind: 'MemberExpression',
                    object: {
                      kind: 'Identifier',
                      name: 'action',
                    },
                    property: {
                      kind: 'Identifier',
                      name: 'kind',
                    },
                  },
                  operator: '===',
                  rhs: {
                    kind: 'StringValue',
                    value: "'Reduce'",
                  },
                },
                block: [{
                  kind: 'AssignmentStatement',
                  binding: 'const',
                  lhs: {
                    kind: 'ObjectPattern',
                    properties: [{
                      kind: 'ObjectProperty',
                      key: {
                        kind: 'Identifier',
                        name: 'production',
                      },
                      value: {
                        kind: 'Identifier',
                        name: 'production',
                      },
                      computed: false,
                      shorthand: true,
                    }, {
                      kind: 'ObjectProperty',
                      key: {
                        kind: 'Identifier',
                        name: 'pop',
                      },
                      value: {
                        kind: 'Identifier',
                        name: 'pop',
                      },
                      computed: false,
                      shorthand: true,
                    }, {
                      kind: 'ObjectProperty',
                      key: {
                        kind: 'Identifier',
                        name: 'action',
                      },
                      value: {
                        kind: 'Identifier',
                        name: 'code',
                      },
                      computed: false,
                      shorthand: false,
                    }],
                  },
                  rhs: {
                    kind: 'IndexExpression',
                    index: {
                      kind: 'MemberExpression',
                      object: {
                        kind: 'Identifier',
                        name: 'action',
                      },
                      property: {
                        kind: 'Identifier',
                        name: 'rule',
                      },
                    },
                    indexee: {
                      kind: 'Identifier',
                      name: 'rules',
                    },
                  },
                }, {
                  kind: 'AssignmentStatement',
                  binding: 'const',
                  lhs: {
                    kind: 'Identifier',
                    name: 'popped',
                  },
                  type: {
                    kind: 'GenericType',
                    name: 'Array',
                    parameters: [{
                      kind: 'UnionType',
                      variants: [{
                        kind: 'NamedType',
                        name: 'Production',
                      }, {
                        kind: 'NamedType',
                        name: 'Token',
                      }, {
                        kind: 'NamedType',
                        name: 'null',
                      }],
                    }],
                  },
                  rhs: {
                    kind: 'ArrayValue',
                    items: [],
                  },
                }, {
                  kind: 'ExpressionStatement',
                  expression: {
                    kind: 'CallExpression',
                    callee: {
                      kind: 'MemberExpression',
                      object: {
                        kind: 'Identifier',
                        name: 'stack',
                      },
                      property: {
                        kind: 'Identifier',
                        name: 'push',
                      },
                    },
                    arguments: [{
                      kind: 'ArrayValue',
                      items: [{
                        kind: 'CallExpression',
                        callee: {
                          kind: 'Identifier',
                          name: 'code',
                          cast: {
                            kind: 'NamedType',
                            name: 'any',
                          },
                        },
                        arguments: [{
                          kind: 'SpreadElement',
                          expression: {
                            kind: 'Identifier',
                            name: 'popped',
                          },
                        }],
                      }, {
                        kind: 'Identifier',
                        name: 'target',
                      }],
                    }],
                  },
                }],
              }],
            }],
          }],
        );
      });
    },
  );
});
