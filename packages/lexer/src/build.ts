import {ast, print} from '@masochist/codegen';
import {invariant} from '@masochist/common';

import keyToTransition from './NFA/keyToTransition';

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

const table: TransitionTable = {
  acceptStates: new Set([
    1, 2, 3, 4, 30, 25, 44, 6, 7, 8, 9, 10, 13, 35, 37, 14, 34, 15, 16, 17, 18,
    19, 20, 21, 22, 23,
  ]),
  startStates: new Set([0]),
  transitions: [
    /* 0 */ new Map([
      ['Atom:\t', new Set([1])],
      ['Atom:\n', new Set([2])],
      ['Atom:\r', new Set([3])],
      ['Atom: ', new Set([1])],
      ['Atom:!', new Set([4])],
      ['Atom:"', new Set([5])],
      ['Atom:#', new Set([6])],
      ['Atom:$', new Set([7])],
      ['Atom:&', new Set([8])],
      ['Atom:(', new Set([9])],
      ['Atom:)', new Set([10])],
      ['Atom:,', new Set([2])],
      ['Atom:-', new Set([11])],
      ['Atom:.', new Set([12])],
      ['Atom:0', new Set([13])],
      ['Range:1-9', new Set([14])],
      ['Atom::', new Set([15])],
      ['Atom:=', new Set([16])],
      ['Atom:@', new Set([17])],
      ['Range:A-Z', new Set([18])],
      ['Atom:[', new Set([19])],
      ['Atom:]', new Set([20])],
      ['Atom:_', new Set([18])],
      ['Range:a-z', new Set([18])],
      ['Atom:{', new Set([21])],
      ['Atom:|', new Set([22])],
      ['Atom:}', new Set([23])],
      ['Atom:\ufeff', new Set([2])],
    ]),
    /* 1 */ new Map([
      ['Atom:\t', new Set([1])],
      ['Atom: ', new Set([1])],
    ]),
    /* 2 */ new Map(),
    /* 3 */ new Map([['Atom:\n', new Set([2])]]),
    /* 4 */ new Map(),
    /* 5 */ new Map([
      ['Atom:\t', new Set([24])],
      ['Range: -!', new Set([24])],
      ['Atom:"', new Set([25])],
      ['Range:#-[', new Set([24])],
      ['Atom:\\', new Set([26])],
      ['Range:]-\uffff', new Set([24])],
    ]),
    /* 6 */ new Map([
      ['Atom:\t', new Set([6])],
      ['Range: -\uffff', new Set([6])],
    ]),
    /* 7 */ new Map(),
    /* 8 */ new Map(),
    /* 9 */ new Map(),
    /* 10 */ new Map(),
    /* 11 */ new Map([
      ['Atom:0', new Set([13])],
      ['Range:1-9', new Set([14])],
    ]),
    /* 12 */ new Map([['Atom:.', new Set([27])]]),
    /* 13 */ new Map([
      ['Atom:.', new Set([28])],
      ['Atom:E', new Set([29])],
      ['Atom:e', new Set([29])],
    ]),
    /* 14 */ new Map([
      ['Atom:.', new Set([28])],
      ['Range:0-9', new Set([14])],
      ['Atom:E', new Set([29])],
      ['Atom:e', new Set([29])],
    ]),
    /* 15 */ new Map(),
    /* 16 */ new Map(),
    /* 17 */ new Map(),
    /* 18 */ new Map([
      ['Range:0-9', new Set([18])],
      ['Range:A-Z', new Set([18])],
      ['Atom:_', new Set([18])],
      ['Range:a-z', new Set([18])],
    ]),
    /* 19 */ new Map(),
    /* 20 */ new Map(),
    /* 21 */ new Map(),
    /* 22 */ new Map(),
    /* 23 */ new Map(),
    /* 24 */ new Map([
      ['Atom:\t', new Set([24])],
      ['Range: -!', new Set([24])],
      ['Atom:"', new Set([30])],
      ['Range:#-[', new Set([24])],
      ['Atom:\\', new Set([26])],
      ['Range:]-\uffff', new Set([24])],
    ]),
    /* 25 */ new Map([['Atom:"', new Set([31])]]),
    /* 26 */ new Map([
      ['Atom:"', new Set([24])],
      ['Atom:/', new Set([24])],
      ['Atom:\\', new Set([32])],
      ['Atom:b', new Set([24])],
      ['Atom:f', new Set([24])],
      ['Atom:n', new Set([24])],
      ['Atom:r', new Set([24])],
      ['Atom:t', new Set([24])],
      ['Atom:u', new Set([33])],
    ]),
    /* 27 */ new Map([['Atom:.', new Set([34])]]),
    /* 28 */ new Map([['Range:0-9', new Set([35])]]),
    /* 29 */ new Map([
      ['Atom:+', new Set([36])],
      ['Atom:-', new Set([36])],
      ['Range:0-9', new Set([37])],
    ]),
    /* 30 */ new Map(),
    /* 31 */ new Map([
      ['Range:\t-\n', new Set([31])],
      ['Atom:\r', new Set([31])],
      ['Range: -!', new Set([31])],
      ['Atom:"', new Set([38])],
      ['Range:#-[', new Set([31])],
      ['Atom:\\', new Set([39])],
      ['Range:]-\uffff', new Set([31])],
    ]),
    /* 32 */ new Map([
      ['Atom:/', new Set([24])],
      ['Atom:\\', new Set([32])],
      ['Atom:b', new Set([24])],
      ['Atom:f', new Set([24])],
      ['Atom:n', new Set([24])],
      ['Atom:r', new Set([24])],
      ['Atom:t', new Set([24])],
      ['Atom:u', new Set([33])],
    ]),
    /* 33 */ new Map([
      ['Range:0-9', new Set([40])],
      ['Range:A-F', new Set([40])],
      ['Range:a-f', new Set([40])],
    ]),
    /* 34 */ new Map(),
    /* 35 */ new Map([
      ['Range:0-9', new Set([35])],
      ['Atom:E', new Set([29])],
      ['Atom:e', new Set([29])],
    ]),
    /* 36 */ new Map([['Range:0-9', new Set([37])]]),
    /* 37 */ new Map([['Range:0-9', new Set([37])]]),
    /* 38 */ new Map([
      ['Range:\t-\n', new Set([31])],
      ['Atom:\r', new Set([31])],
      ['Range: -!', new Set([31])],
      ['Atom:"', new Set([41])],
      ['Range:#-[', new Set([31])],
      ['Atom:\\', new Set([39])],
      ['Range:]-\uffff', new Set([31])],
    ]),
    /* 39 */ new Map([
      ['Range:\t-\n', new Set([31])],
      ['Atom:\r', new Set([31])],
      ['Range: -!', new Set([31])],
      ['Atom:"', new Set([42])],
      ['Range:#-[', new Set([31])],
      ['Atom:\\', new Set([39])],
      ['Range:]-\uffff', new Set([31])],
    ]),
    /* 40 */ new Map([
      ['Range:0-9', new Set([43])],
      ['Range:A-F', new Set([43])],
      ['Range:a-f', new Set([43])],
    ]),
    /* 41 */ new Map([
      ['Range:\t-\n', new Set([31])],
      ['Atom:\r', new Set([31])],
      ['Range: -!', new Set([31])],
      ['Atom:"', new Set([44])],
      ['Range:#-[', new Set([31])],
      ['Atom:\\', new Set([39])],
      ['Range:]-\uffff', new Set([31])],
    ]),
    /* 42 */ new Map([
      ['Range:\t-\n', new Set([31])],
      ['Atom:\r', new Set([31])],
      ['Range: -!', new Set([31])],
      ['Atom:"', new Set([45])],
      ['Range:#-[', new Set([31])],
      ['Atom:\\', new Set([39])],
      ['Range:]-\uffff', new Set([31])],
    ]),
    /* 43 */ new Map([
      ['Range:0-9', new Set([46])],
      ['Range:A-F', new Set([46])],
      ['Range:a-f', new Set([46])],
    ]),
    /* 44 */ new Map(),
    /* 45 */ new Map([
      ['Atom:\n', new Set([31])],
      ['Atom:\r', new Set([31])],
      ['Range: -[', new Set([31])],
      ['Atom:\\', new Set([39])],
      ['Range:]-\uffff', new Set([31])],
    ]),
    /* 46 */ new Map([
      ['Range:0-9', new Set([24])],
      ['Range:A-F', new Set([24])],
      ['Range:a-f', new Set([24])],
    ]),
  ],
  labels: [
    /* 0 */ undefined,
    /* 1 */ new Set(['IGNORED']),
    /* 2 */ new Set(['IGNORED']),
    /* 3 */ new Set(['IGNORED']),
    /* 4 */ new Set(['BANG']),
    /* 5 */ undefined,
    /* 6 */ new Set(['IGNORED']),
    /* 7 */ new Set(['DOLLAR']),
    /* 8 */ new Set(['AMPERSAND']),
    /* 9 */ new Set(['OPENING_PAREN']),
    /* 10 */ new Set(['CLOSING_PAREN']),
    /* 11 */ undefined,
    /* 12 */ undefined,
    /* 13 */ new Set(['NUMBER']),
    /* 14 */ new Set(['NUMBER']),
    /* 15 */ new Set(['COLON']),
    /* 16 */ new Set(['EQUALS']),
    /* 17 */ new Set(['AT']),
    /* 18 */ new Set(['NAME']),
    /* 19 */ new Set(['OPENING_BRACKET']),
    /* 20 */ new Set(['CLOSING_BRACKET']),
    /* 21 */ new Set(['OPENING_BRACE']),
    /* 22 */ new Set(['BAR']),
    /* 23 */ new Set(['CLOSING_BRACE']),
    /* 24 */ undefined,
    /* 25 */ new Set(['STRING_VALUE']),
    /* 26 */ undefined,
    /* 27 */ undefined,
    /* 28 */ undefined,
    /* 29 */ undefined,
    /* 30 */ new Set(['STRING_VALUE']),
    /* 31 */ undefined,
    /* 32 */ undefined,
    /* 33 */ undefined,
    /* 34 */ new Set(['ELLIPSIS']),
    /* 35 */ new Set(['NUMBER']),
    /* 36 */ undefined,
    /* 37 */ new Set(['NUMBER']),
    /* 38 */ undefined,
    /* 39 */ undefined,
    /* 40 */ undefined,
    /* 41 */ undefined,
    /* 42 */ undefined,
    /* 43 */ undefined,
    /* 44 */ new Set(['BLOCK_STRING_VALUE']),
    /* 45 */ undefined,
    /* 46 */ undefined,
  ],
};

export function wip(): Program {
  const statements: Array<Statement> = [];

  // Note the TS annotation in the argument here; it's the only explicit
  // annotation required to make `tsc` accept the generated lexer without any
  // errors or warnings. Without this, we'd ge:
  //
  //    error TS7006: Parameter 'input' implicitly has an 'any' type.
  //
  const fn = ast.function('*lex', ['input: string'], statements);

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
    block: [ast.statement('const ch = input.charCodeAt(i)')],
  };
  statements.push({
    kind: 'LabelStatement',
    label: 'loop',
    statement: whileStatement,
  });

  const switchStatement: SwitchStatement = {
    kind: 'SwitchStatement',
    cases: [],
    condition: {
      kind: 'Identifier',
      name: 'state',
    },
  };
  whileStatement.block.push(switchStatement, ast.statement('i++'));

  table.transitions.forEach((transitionMap, i) => {
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
          ast.statement('tokenStart = i + 1'),
          ast.statement('state = START'),
        );
      } else if (isAccept) {
        // TODO: eventually this stuff will get folded inline where applicable
        // eg. instead of going from state N to M only to yield
        // if there is only one place going from N to M, yield directly from N
        switchCase.block.push(
          {
            kind: 'ExpressionStatement',
            expression: {
              kind: 'YieldExpression',
              expression: ast.object({
                token: ast.string(isAccept),
                tokenStart: ast.identifier('tokenStart'),
                tokenEnd: ast.expression('i + 1'), // shoud be just i?
                // TODO: include value if this is a token with content, like
                // NAME, NUMBER, STRING_VALUE etc
              }),
            },
          },
          ast.statement('tokenStart = i + 1'), // should be just i?
          ast.statement('state = START'),
          ast.continue('loop'),
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
        const block: Array<Statement> = [ast.statement(`state = ${j}`)];
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
            ast.continue('loop'),
          ];
        } else if (isAccept) {
          ifStatement.alternate = [
            {
              kind: 'ExpressionStatement',
              expression: {
                kind: 'YieldExpression',
                expression: ast.object({
                  token: ast.string(isAccept),
                  tokenStart: ast.identifier('tokenStart'),
                  tokenEnd: ast.expression('i'),
                  // TODO: include value if this is a token with content, like
                  // NAME, NUMBER, STRING_VALUE etc
                }),
              },
            },
            ast.statement('tokenStart = i'),
            ast.statement('state = START'),
            ast.continue('loop'),
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
          expression: {
            kind: 'NewExpression',
            object: ast.identifier('Error'),
            arguments: [ast.string('Failed to recognize token')],
          },
        },
      ],
    },
    {
      kind: 'SwitchCase',
      determinant: null,
      block: [
        {
          kind: 'ThrowStatement',
          expression: {
            kind: 'NewExpression',
            object: ast.identifier('Error'),
            // TODO: include state id in error
            arguments: [ast.string('Unexpected state')],
          },
        },
      ],
    },
  );

  return {
    kind: 'Program',
    statements: [fn],
  };
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
