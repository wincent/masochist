import {ast, walk} from '@masochist/codegen';
import {assertIsStatement} from '@masochist/codegen/src/internal';
import {invariant} from '@masochist/common';
import assert from 'node:assert';
import path from 'node:path';

import type {
  Consequent,
  Expression,
  IfStatement,
  Node,
  Program,
  Statement,
  WhileStatement,
} from '@masochist/codegen';
import type {Transition} from './NFA/NFA';
import type {TransitionTable} from './NFA/TransitionTable';
import keyToTransition from './NFA/keyToTransition';

type Options = {
  buildCommand?: string;
};

export type Stats = {
  [buildStat: string]: number;
};

// TODO: see if i can avoid so many ternaries
export default async function build(
  table: TransitionTable,
  stats: Stats = {},
  options: Options = {},
): Promise<Program> {
  invariant(table.startStates.size === 1, 'Need exactly one start state');
  const START = Array.from(table.startStates)[0];

  stats['startStates'] = table.startStates.size;
  stats['acceptStates'] = table.acceptStates.size;
  stats['totalStates'] = table.transitions.length;
  stats['ignoredTokens'] = (table.labels || []).filter(
    (label) => label?.has('IGNORED'),
  ).length;

  // Should be same as 'acceptStates'.
  stats['totalTokens'] = (table.labels || []).filter(
    (label) => label?.size,
  ).length;

  // Optimization stats.
  stats['inlineableAcceptStates'] = 0;
  stats['inlinedAcceptStates'] = 0; // Should match 'inlineableAcceptStates'.
  stats['inlinedSelfTransitions'] = 0;

  const whileStatement: WhileStatement = {
    kind: 'WhileStatement',
    condition: ast.expression('this.index <= length'),
    block: [
      ast.const('state', 'this.state'),
      ast.statement(
        'let ch = this.index < length ? input.charCodeAt(this.index) : -1',
      ),
    ],
  };

  // Will make one consequent for each state.
  const consequents: Array<Consequent> = [];
  whileStatement.block.push(
    {
      kind: 'IfStatement',
      consequents,
      alternate: [{
        kind: 'ThrowStatement',
        // TODO: include state id in error
        expression: ast.new('Error', ast.string('Unexpected state')),
      }],
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
  stats['inlineableAcceptStates'] = inlineableStates.size;

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
        ast.identifier('state'),
        i === START ? ast.identifier('START') : ast.number(i),
      ),
      block: [],
    };
    const isAccept = (state: number) =>
      table.acceptStates.has(state)
        ? Array.from(table.labels?.[state] ?? [])[0]
        : undefined;

    const isIgnored = (state: number) => isAccept(state) === 'IGNORED';

    const ignoreToken = isIgnored(i)
      ? filterEmpty(
        ast.comment('IGNORED token.'),
        ast.statement('this.tokenStart = this.index'),
        // TODO: deal with these self-transitions as well
        i === START ? ast.empty : ast.statement('this.state = START'),
        ast.continue(),
      )
      : undefined;

    let name;
    const acceptToken = (name = isAccept(i))
      ? filterEmpty(
        i === START ? ast.empty : ast.statement('this.state = START'),
        ast.return(
          ast.call('this.emit', ast.string(name), 'this.index', 'input'),
        ),
      )
      : undefined;

    if (!conditions.length) {
      if (ignoreToken) {
        consequent.block.push(...ignoreToken);
      } else if (acceptToken) {
        consequent.block.push(...acceptToken);
      } else {
        throw new Error('build(): no transitions to follow');
      }
    } else {
      // Process conditions for self-transitions first, because we want to deal
      // with these in a `while` loop first, before we enter the following `if`.
      const selfCondition = conditions[i];
      if (selfCondition) {
        stats['inlinedSelfTransitions']++;
        conditions[i] = undefined;
        const loop = ast.while(expressionForTransitions(selfCondition), []);
        loop.block.push(
          ast.statement('this.index++'),
          ast.statement(
            'ch = this.index < length ? input.charCodeAt(this.index) : -1',
          ),
        );
        consequent.block.push(loop);
      }

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
            if (isIgnored(j)) {
              block.push(
                ...filterEmpty(
                  ast.comment('IGNORED token.'),
                  ast.statement('this.index = this.index + 1'),
                  ast.statement('this.tokenStart = this.index'),
                  i === START ? ast.empty : ast.statement('this.state = START'),
                  ast.continue(),
                ),
              );
            } else if ((name = isAccept(j))) {
              block.push(
                ...filterEmpty(
                  i === START ? ast.empty : ast.statement('this.state = START'),
                  ast.return(
                    ast.call(
                      'this.emit',
                      ast.string(name),
                      'this.index + 1',
                      'input',
                    ),
                  ),
                ),
              );
            }
            stats['inlinedAcceptStates']++;
          } else {
            invariant(
              i !== j,
              'Self-transitions should have been excised by now',
            );
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
    condition: ast.expression('state === REJECT'),
    block: [{
      kind: 'ThrowStatement',
      expression: ast.new('Error', ast.string('Failed to recognize token')),
    }],
  });

  const source = await Bun.file(path.join(import.meta.dir, 'Token.ts')).text();
  const statements = ast.statements(source);
  assert(statements.length === 1);
  let tokenClass: Node | null | undefined = statements[0];
  tokenClass = walk(tokenClass, {
    // Turn: `export default class Token { ... }`
    // Into: `export class Token { ... }`
    ExportDefaultDeclaration(declaration) {
      return {
        kind: 'ExportNamedDeclaration',
        declaration: declaration.declaration,
      };
    },
  });
  assert(tokenClass);
  assertIsStatement(tokenClass);

  const buildCommand = options.buildCommand
    ? `edit "build.ts", run "${options.buildCommand}" instead`
    : 'edit "build.ts" instead';
  const program: Program = {
    kind: 'Program',
    statements: [
      ast.docComment(
        `vim: set nomodifiable : DO NOT EDIT - ${buildCommand}`,
        '',
        '@generated',
      ),
      tokenClass,
      ast.statement('const REJECT = -1'),
      ast.statement('const START = 0'),
      ast.export(
        ast.class('Lexer', [
          ast.propertyDeclaration('input', 'string'),
          ast.propertyDeclaration('state', 'number'),
          ast.propertyDeclaration('tokenStart', 'number'),
          ast.propertyDeclaration('index', 'number'),

          // Cosmetic only, due to: https://github.com/microsoft/TypeScript/issues/9694
          ast.docComment('@param {string} input'),

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
          // Cosmetic only, due to: https://github.com/microsoft/TypeScript/issues/9694
          ast.docComment(
            '@param {string} name',
            '@param {number} end',
            '@param {string} input',
          ),
          ast.method(
            'emit',
            ['name: string', 'end: number', 'input: string'],
            [
              ast.const(
                'token',
                ast.new('Token', 'name', 'this.tokenStart', 'end', 'input'),
              ),
              ast.statement('this.tokenStart = end'),
              ast.statement('this.index = end'),
              ast.statement('return token'),
            ],
          ),
          ast.method(
            'next',
            [],
            [
              ast.const('input', 'this.input'),
              ast.const('length', 'input.length'),
              whileStatement,
              ast.statement('return null'),
            ],
          ),
        ]),
      ),
      // Cosmetic only, due to: https://github.com/microsoft/TypeScript/issues/9694
      ast.docComment(
        '@param {string} input',
        '@returns {Generator<Token, void, unknown>}',
      ),
      ast.default(
        // Note the TS annotation in the argument here; it's one of few explicit
        // annotations required to make `tsc` accept the generated lexer without
        // any errors or warnings. Without this, we'd get:
        //
        //    error TS7006: Parameter 'input' implicitly has an 'any' type.
        //
        ast.function(
          '*lex',
          ['input: string'],
          [
            ast.const('lexer', ast.new('Lexer', 'input')),
            ast.while(ast.true, [
              ast.const('token', ast.call(ast.member('lexer', 'next'))),
              {
                kind: 'IfStatement',
                consequents: [{
                  kind: 'Consequent',
                  condition: ast.expression('token === null'),
                  block: [ast.return()],
                }],
                alternate: [ast.yield('token')],
              },
            ]),
          ],
        ),
      ),
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
