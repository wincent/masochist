import {ast} from '@masochist/codegen';
import {invariant} from '@masochist/common';

import keyToTransition from './NFA/keyToTransition';

// TODO: see if I can just inline Consequent; doesn't need its own type
import type {
  Expression,
  IfStatement,
  Program,
  Statement,
  SwitchCase,
  SwitchStatement,
  WhileStatement,
} from '@masochist/codegen';
import type {Transition} from './NFA/NFA';
import type {TransitionTable} from './NFA/TransitionTable';

export default function build(table: TransitionTable): Program {
  const statements: Array<Statement> = [];

  const program: Program = {
    kind: 'Program',
    statements: [
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
      {
        kind: 'ExportDefaultDeclaration',
        // Note the TS annotation in the argument here; it's the only explicit
        // annotation required to make `tsc` accept the generated lexer without
        // any errors or warnings. Without this, we'd ge:
        //
        //    error TS7006: Parameter 'input' implicitly has an 'any' type.
        //
        declaration: ast.function('*lex', ['input: string'], statements),
      },
    ],
  };

  statements.push(ast.statement('const REJECT = -1'));

  if (table.startStates.size !== 1) {
    throw new Error('Need exactly one start state');
  }
  const START = Array.from(table.startStates)[0];
  statements.push(ast.statement(`const START = ${START}`));

  statements.push(ast.statement('let state = START'));
  statements.push(ast.statement('let tokenStart = 0'));
  statements.push(ast.statement('let i = tokenStart'));

  const whileStatement: WhileStatement = {
    kind: 'WhileStatement',
    condition: ast.expression('i <= input.length'),
    block: [ast.statement('const ch = i < input.length ? input.charCodeAt(i) : -1')],
  };
  statements.push(whileStatement);

  const switchStatement: SwitchStatement = {
    kind: 'SwitchStatement',
    cases: [],
    condition: {
      kind: 'Identifier',
      name: 'state',
    },
  };
  whileStatement.block.push(switchStatement, ast.statement('i++'));

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

    // 2. Build case.
    const determinant = i === START ? ast.identifier('START') : ast.number(i);
    const switchCase: SwitchCase = {
      kind: 'SwitchCase',
      determinant,
      block: [],
    };
    const isAccept = table.acceptStates.has(i)
      ? Array.from(table.labels?.[i] ?? [])[0]
      : undefined;

    const isIgnored = isAccept === 'IGNORED';

    if (!conditions.length) {
      if (isIgnored) {
        switchCase.block.push(
          ast.comment('IGNORED token.'),
          ast.statement('tokenStart = i'),
          ast.statement('state = START'),
          ast.continue(),
        );
      } else if (isAccept) {
        switchCase.block.push(
          {
            kind: 'ExpressionStatement',
            expression: {
              kind: 'YieldExpression',
              expression: ast.new(
                'Token',
                ast.string(isAccept),
                'tokenStart',
                'i',
                'input',
              ),
            },
          },
          ast.statement('tokenStart = i'),
          ast.statement('state = START'),
          ast.continue(),
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
            expressions.push({
              kind: 'BinaryExpression',
              lexpr: ast.expression(
                `ch >= ${charForComparison(transition.from)}`,
              ),
              operator: '&&',
              rexpr: ast.expression(
                `ch <= ${charForComparison(transition.to)}`,
              ),
            });
          }
        }
        const block: Array<Statement> = inlineableStates.has(j)
          ? [
              {
                kind: 'ExpressionStatement',
                expression: {
                  kind: 'YieldExpression',
                  expression: ast.new(
                    'Token',
                    ast.string(Array.from(table.labels?.[j] ?? [])[0]),
                    'tokenStart',
                    'i + 1',
                    'input',
                  ),
                },
              },
              ast.statement('tokenStart = i + 1'),
              ast.statement('state = START'),
            ]
          : [ast.statement(`state = ${j}`)];
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
          ifStatement.alternate = [
            ast.comment('IGNORED token.'),
            ast.statement('tokenStart = i'),
            ast.statement('state = START'),
            ast.continue(),
          ];
        } else if (isAccept) {
          ifStatement.alternate = [
            {
              kind: 'ExpressionStatement',
              expression: {
                kind: 'YieldExpression',
                expression: ast.new(
                  'Token',
                  ast.string(isAccept),
                  'tokenStart',
                  'i',
                  'input',
                ),
              },
            },
            ast.statement('tokenStart = i'),
            ast.statement('state = START'),
            ast.continue(),
          ];
        } else {
          ifStatement.alternate = [
            // TODO: only do this is consequents don't provide complete coverage
            ast.statement('state = REJECT'),
          ];
        }
      });
      switchCase.block.push(ifStatement);
    }
    if (
      switchCase.block[switchCase.block.length - 1].kind !== 'ContinueStatement'
    ) {
      switchCase.block.push(ast.break);
    }
    switchStatement.cases.push(switchCase);
  });

  switchStatement.cases.push(
    {
      kind: 'SwitchCase',
      determinant: ast.identifier('REJECT'),
      block: [
        {
          kind: 'ThrowStatement',
          expression: ast.new('Error', ast.string('Failed to recognize token')),
        },
      ],
    },
    {
      kind: 'SwitchCase',
      determinant: null,
      block: [
        {
          kind: 'ThrowStatement',
          // TODO: include state id in error
          expression: ast.new('Error', ast.string('Unexpected state')),
        },
      ],
    },
  );

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
