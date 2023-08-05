import {ast} from '@masochist/codegen';
import {invariant} from '@masochist/common';

import keyToTransition from './NFA/keyToTransition';

import type {
  Consequent,
  Expression,
  IfStatement,
  Program,
  Statement,
  WhileStatement,
} from '@masochist/codegen';
import type {Transition} from './NFA/NFA';
import type {TransitionTable} from './NFA/TransitionTable';

export default function build(table: TransitionTable): Program {
  if (table.startStates.size !== 1) {
    throw new Error('Need exactly one start state');
  }
  const START = Array.from(table.startStates)[0];

  const whileStatement: WhileStatement = {
    kind: 'WhileStatement',
    condition: ast.expression('this.index <= this.input.length'),
    block: [
      ast.statement(
        'const ch = this.index < this.input.length ? this.input.charCodeAt(this.index) : -1',
      ),
    ],
  };

  // Will make one consequent for each state.
  const consequents: Array<Consequent> = [];
  whileStatement.block.push(
    {
      kind: 'IfStatement',
      consequents,
      alternate: [
        {
          kind: 'ThrowStatement',
          // TODO: include state id in error
          expression: ast.new('Error', ast.string('Unexpected state')),
        },
      ],
    },
    ast.statement('this.index++'),
  );

  // 0. Identify accept states reachable from exactly one other state, which
  // themselves have no outgoing edges.
  const statesLeadingToAcceptStates: Array<Set<number>> = [];
  table.transitions.forEach((transitionMap, i) => {
    for (const targets of transitionMap.values()) {
      for (const target of targets) {
        if (table.acceptStates.has(target) && !table.transitions[target].size) {
          if (statesLeadingToAcceptStates[target]) {
            statesLeadingToAcceptStates[target].add(i);
          } else {
            statesLeadingToAcceptStates[target] = new Set([i]);
          }
        }
      }
    }
  });
  const inlineableStates = new Set<number>();
  statesLeadingToAcceptStates.forEach((set, i) => {
    if (set?.size === 1) {
      inlineableStates.add(i);
    }
  });

  table.transitions.forEach((transitionMap, i) => {
    if (inlineableStates.has(i)) {
      return;
    }

    // 1. Group conditions by target states.
    const conditions: Array<Array<NonNullable<Transition>> | undefined> = [];
    for (const [key, targets] of transitionMap) {
      if (targets.size !== 1) {
        throw new Error('Non-deterministic transition');
      }
      const target = Array.from(targets)[0];
      const transition = keyToTransition(key);
      if (transition === null) {
        throw new Error('Epsilon transition');
      }
      conditions[target] = (conditions[target] || []).concat(transition);
    }

    // 2. Build state.
    const consequent: Consequent = {
      kind: 'Consequent',
      condition: ast.equals(
        ast.identifier('this.state'),
        i === START ? ast.identifier('START') : ast.number(i),
      ),
      block: [],
    };
    const isAccept = table.acceptStates.has(i)
      ? Array.from(table.labels?.[i] ?? [])[0]
      : undefined;

    const isIgnored = isAccept === 'IGNORED';

    if (!conditions.length) {
      if (isIgnored) {
        consequent.block.push(
          ...filterEmpty(
            ast.comment('IGNORED token.'),
            ast.statement('this.tokenStart = this.index'),
            i === START ? ast.empty : ast.statement('this.state = START'),
            ast.continue(),
          ),
        );
      } else if (isAccept) {
        throw new Error(
          'Unexpected accept state due to inlining of inlineable states',
        );
      } else {
        throw new Error('Dead state');
      }
    } else {
      const ifStatement: IfStatement = {
        kind: 'IfStatement',
        consequents: [],
      };
      conditions.forEach((transitions, j) => {
        invariant(transitions);
        const expressions: Array<Expression> = [];
        for (const transition of transitions) {
          if (transition.kind === 'Anything') {
            // TODO bite the bullet and make "." equal 0x0000 to 0xffff but not:
            //
            // - U+000A (\n)
            // - U+000D (\r)
            // - U+2028 LINE SEPARATOR
            // - U+2029 PARAGRAPH SEPARATOR
            //
            // Moot for now because I don't have it anywhere in my state machine.
            expressions.push(ast.true);
          } else if (transition.kind === 'Atom') {
            expressions.push(
              ast.expression(`ch === ${charForComparison(transition.value)}`),
            );
          } else {
            expressions.push(
              ast.binop(
                ast.expression(`ch >= ${charForComparison(transition.from)}`),
                '&&',
                ast.expression(`ch <= ${charForComparison(transition.to)}`),
              ),
            );
          }
        }
        const block: Array<Statement> = inlineableStates.has(j)
          ? filterEmpty(
              {
                kind: 'AssignmentStatement',
                binding: 'const',
                lhs: 'token',
                rhs: ast.new(
                  'Token',
                  ast.string(Array.from(table.labels?.[j] ?? [])[0]),
                  'this.tokenStart',
                  'this.index + 1',
                  'this.input',
                ),
              },
              ast.statement('this.index++'),
              ast.statement('this.tokenStart = this.index'),
              i === START ? ast.empty : ast.statement('this.state = START'),
              ast.statement('return token'),
            )
          : [i === j ? ast.empty : ast.statement(`this.state = ${j}`)];
        if (!expressions.length) {
          throw new Error('Expected a non-empty set of expressions');
        } else if (expressions.length === 1) {
          ifStatement.consequents.push({
            kind: 'Consequent',
            condition: expressions[0],
            block,
          });
        } else if (expressions.length > 1) {
          ifStatement.consequents.push({
            kind: 'Consequent',
            condition: expressions.reduce((acc, expression) => {
              if (acc) {
                return {
                  kind: 'BinaryExpression',
                  lexpr: acc,
                  operator: '||',
                  rexpr: expression,
                };
              } else {
                return expression;
              }
            }),
            block,
          });
        }
        if (isIgnored) {
          const hasSelfTransition = Array.from(
            table.transitions[i].values(),
          ).some((targets) => targets.has(i));
          ifStatement.alternate = filterEmpty(
            ast.comment('IGNORED token.'),
            ast.statement('this.tokenStart = this.index'),
            i === START ? ast.empty : ast.statement('this.state = START'),
            hasSelfTransition ? ast.continue() : ast.break,
          );
        } else if (isAccept) {
          ifStatement.alternate = filterEmpty(
            {
              kind: 'AssignmentStatement',
              binding: 'const',
              lhs: 'token',
              rhs: ast.new(
                'Token',
                ast.string(isAccept),
                'this.tokenStart',
                'this.index',
                'this.input',
              ),
            },
            ast.statement('this.tokenStart = this.index'),
            i === START ? ast.empty : ast.statement('this.state = START'),
            ast.statement('return token'),
          );
        } else {
          ifStatement.alternate = [
            // TODO: only do this is consequents don't provide complete coverage
            ast.statement('this.state = REJECT'),
          ];
        }
      });
      consequent.block.push(ifStatement);
    }
    consequents.push(consequent);
  });

  consequents.push({
    kind: 'Consequent',
    condition: ast.equals(
      ast.identifier('this.state'),
      ast.identifier('REJECT'),
    ),
    block: [
      {
        kind: 'ThrowStatement',
        expression: ast.new('Error', ast.string('Failed to recognize token')),
      },
    ],
  });

  const program: Program = {
    kind: 'Program',
    statements: [
      ast.docComment(
        'vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make lexer" instead',
        '',
        '@generated',
      ),
      {
        kind: 'ImportStatement',
        specifiers: [
          {
            kind: 'ImportDefaultSpecifier',
            identifier: ast.identifier('Token'),
          },
        ],
        source: ast.string('./Token'),
      },
      ast.statement('const REJECT = -1'),
      ast.statement('const START = 0'),
      ast.class('Lexer', [
        ast.propertyDeclaration('input', 'string'),
        ast.propertyDeclaration('state', 'number'),
        ast.propertyDeclaration('tokenStart', 'number'),
        ast.propertyDeclaration('index', 'number'),
        ast.method(
          'constructor',
          ['input: string'],
          [
            ast.statement('this.input = input'),
            ast.statement('this.state = START'),
            ast.statement('this.tokenStart = 0'),
            ast.statement('this.index = 0'),
          ],
        ),
        ast.method('next', [], [whileStatement, ast.statement('return null')]),
      ]),
      {
        kind: 'ExportDefaultDeclaration',
        // Note the TS annotation in the argument here; it's the only explicit
        // annotation required to make `tsc` accept the generated lexer without
        // any errors or warnings. Without this, we'd ge:
        //
        //    error TS7006: Parameter 'input' implicitly has an 'any' type.
        //
        declaration: ast.function(
          '*lex',
          ['input: string'],
          [
            ast.const('lexer', ast.new('Lexer', 'input')),
            ast.while(ast.true, [
              ast.const('token', ast.call(ast.member('lexer', 'next'))),
              {
                kind: 'IfStatement',
                consequents: [
                  {
                    kind: 'Consequent',
                    condition: ast.expression('token === null'),
                    block: [ast.return],
                  },
                ],
                alternate: [ast.yield('token')],
              },
            ]),
          ],
        ),
      },
    ],
  };

  return program;
}

function charForComparison(value: string): string {
  if (value.length !== 1) {
    throw new Error(
      `charForComparison(): Expected length 1, got length ${value.length}`,
    );
  }
  const charCode = value.charCodeAt(0);
  if (charCode <= 0xff) {
    return '0x' + charCode.toString(16).padStart(2, '0');
  } else {
    return '0x' + charCode.toString(16).padStart(4, '0');
  }
}
function filterEmpty(...statements: Array<Statement>): Array<Statement> {
  return statements.filter((statement) => statement.kind !== 'EmptyStatement');
}
