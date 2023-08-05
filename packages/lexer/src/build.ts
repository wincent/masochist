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
  invariant(table.startStates.size === 1, 'Need exactly one start state');
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

  // Identify accept states reachable from exactly one other state, which
  // themselves have no outgoing edges. These will be inlined inside the other
  // state and won't exist as separate states within the machine.
  const inlineableStates = new Set<number>();
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
  statesLeadingToAcceptStates.forEach((set, i) => {
    if (set?.size === 1) {
      inlineableStates.add(i);
    }
  });

  // Now actually generate code for the states.
  table.transitions.forEach((transitionMap, i) => {
    if (inlineableStates.has(i)) {
      return;
    }

    // 1. Group conditions by target states.
    const conditions: Array<Array<NonNullable<Transition>> | undefined> = [];
    for (const [key, targets] of transitionMap) {
      invariant(targets.size === 1, 'Transitions must be deterministic');
      const target = Array.from(targets)[0];
      const transition = keyToTransition(key);
      invariant(transition !== null, 'Epsilon transitions are not allowed');
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
      // Should only get here for an ignored state.
      invariant(isIgnored);
      consequent.block.push(
        ...filterEmpty(
          ast.comment('IGNORED token.'),
          ast.statement('this.tokenStart = this.index'),
          i === START ? ast.empty : ast.statement('this.state = START'),
          ast.continue(),
        ),
      );
    } else {
      // Process conditions for self-transitions first, because we want to deal
      // with these in a `while` loop first, before we enter the following `if`.
      const selfCondition = conditions[i];
      if (selfCondition) {
        conditions[i] = undefined;
        consequent.block.push(ast.let('peek', 'ch'));
        const loop = ast.while(
          expressionForTransitions(selfCondition, 'peek'),
          [],
        );
        loop.block.push(
          ast.statement('this.index++'),
          ast.statement(
            'peek = this.index < this.input.length ? this.input.charCodeAt(this.index) : -1',
          ),
        );
        consequent.block.push(loop);
      }

      const hasSelfTransition = Array.from(table.transitions[i].values()).some(
        (targets) => targets.has(i),
      );
      const ignoreToken = isIgnored
        ? // TODO: deal with these self-transitions as well
          filterEmpty(
            ast.comment('IGNORED token.'),
            ast.statement('this.tokenStart = this.index'),
            i === START ? ast.empty : ast.statement('this.state = START'),
            hasSelfTransition ? ast.continue() : ast.break,
          )
        : undefined;
      const acceptToken = isAccept
        ? filterEmpty(
            ast.const(
              'token',
              ast.new(
                'Token',
                ast.string(isAccept),
                'this.tokenStart',
                'this.index',
                'this.input',
              ),
            ),
            ast.statement('this.tokenStart = this.index'),
            i === START ? ast.empty : ast.statement('this.state = START'),
            ast.statement('return token'),
          )
        : undefined;

      const remainingConditions = conditions.filter(Boolean).length;
      if (remainingConditions) {
        // We need to add our `if` statement.
        const ifStatement: IfStatement = {
          kind: 'IfStatement',
          consequents: [],
        };
        conditions.forEach((transitions, j) => {
          if (!transitions) {
            // Only previously processed self-transitions can be undefined.
            invariant(i === j);
            return;
          }
          const condition = expressionForTransitions(transitions);
          const block: Array<Statement> = [];
          if (inlineableStates.has(j)) {
            block.push(
              ...filterEmpty(
                ast.assign(
                  'const',
                  'token',
                  ast.new(
                    'Token',
                    ast.string(Array.from(table.labels?.[j] ?? [])[0]),
                    'this.tokenStart',
                    'this.index + 1',
                    'this.input',
                  ),
                ),
                ast.statement('this.index++'),
                ast.statement('this.tokenStart = this.index'),
                i === START ? ast.empty : ast.statement('this.state = START'),
                ast.statement('return token'),
              ),
            );
          } else {
            invariant(i !== j, 'Self-transitions should have been excised by now');
            block.push(ast.statement(`this.state = ${j}`));
          }
          ifStatement.consequents.push({
            kind: 'Consequent',
            condition,
            block,
          });
        });

        if (ignoreToken) {
          ifStatement.alternate = ignoreToken;
        } else if (acceptToken) {
          ifStatement.alternate = acceptToken;
        } else {
          ifStatement.alternate = [
            // TODO: only do this if consequents don't provide complete coverage
            ast.statement('this.state = REJECT'),
          ];
        }
        consequent.block.push(ifStatement);
      } else {
        // There was no `if` statement, only a `while` loop. Fall through to
        // what would have been the `alternate`:
        if (ignoreToken) {
          consequent.block.push(...ignoreToken);
        } else if (acceptToken) {
          consequent.block.push(...acceptToken);
        } else {
          consequent.block.push(ast.statement('this.state = REJECT'));
        }
      }
    }
    consequents.push(consequent);
  });

  consequents.push({
    kind: 'Consequent',
    condition: ast.expression('this.state === REJECT'),
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
  invariant(value.length === 1);
  const charCode = value.charCodeAt(0);
  if (charCode <= 0xff) {
    return '0x' + charCode.toString(16).padStart(2, '0');
  } else {
    return '0x' + charCode.toString(16).padStart(4, '0');
  }
}

/**
 * Returns a conditional expression for a set of transitions that have
 * previously been grouped by target state. eg.
 *
 *    ch === 0x20 || ch >= 0x30 && ch <= 0xffff
 *
 */
function expressionForTransitions(
  transitions: Array<NonNullable<Transition>>,
  identifier: string = 'ch',
): Expression {
  invariant(transitions.length);
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
        ast.expression(
          `${identifier} === ${charForComparison(transition.value)}`,
        ),
      );
    } else {
      expressions.push(
        ast.binop(
          ast.expression(
            `${identifier} >= ${charForComparison(transition.from)}`,
          ),
          '&&',
          ast.expression(
            `${identifier} <= ${charForComparison(transition.to)}`,
          ),
        ),
      );
    }
  }

  if (expressions.length === 1) {
    return expressions[0];
  } else {
    return expressions.reduce((acc, expression) => {
      if (acc) {
        return ast.binop(acc, '||', expression);
      } else {
        return expression;
      }
    });
  }
}

function filterEmpty(...statements: Array<Statement>): Array<Statement> {
  return statements.filter((statement) => statement.kind !== 'EmptyStatement');
}
