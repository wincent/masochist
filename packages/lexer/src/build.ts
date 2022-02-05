import {invariant} from '@masochist/common';

import keyToTransition from './NFA/keyToTransition';

import type {Transition} from './NFA/NFA';
import type {TransitionTable} from './NFA/TransitionTable';

type ArrayValue = {
  kind: 'ArrayValue';
  items: Array<Expression>;
};

type AssignmentStatement = {
  kind: 'AssignmentStatement';
  binding: 'const' | 'let' | 'var' | null;
  // Note: Could need to support destructuring etc in the future.
  lhs: string;
  rhs: Expression;
};

type BinaryExpression = {
  kind: 'BinaryExpression';
  lexpr: Expression;
  operator:
    | '!='
    | '!=='
    | '&&'
    | '<'
    | '<='
    | '=='
    | '==='
    | '>'
    | '>='
    | '||'
    | '+';
  rexpr: Expression;
};

type BooleanValue = {
  kind: 'BooleanValue';
  value: boolean;
};

type BreakStatement = {
  kind: 'BreakStatement';
  label?: string;
};

type CallExpression = {
  kind: 'CallExpression';
  callee: Expression;
  arguments: Array<Expression>;
};

type Consequent = {
  kind: 'Consequent';
  condition: Expression;
  block: Array<Statement>;
};

type Expression =
  | BinaryExpression
  | CallExpression
  | Identifier
  | IndexExpression
  | MemberExpression
  | NewExpression
  | PrimitiveValue
  | TernaryExpression
  | UnaryExpression
  | YieldExpression;

type ExpressionStatement = {
  kind: 'ExpressionStatement';
  expression: Expression;
};

type Identifier = {
  kind: 'Identifier';
  name: string;
};

type IfStatement = {
  kind: 'IfStatement';
  consequents: Array<Consequent>;
  alternate?: Array<Statement>;
};

type IndexExpression = {
  kind: 'IndexExpression';
  index: Expression;
  indexee: Expression;
};

type LabelStatement = {
  kind: 'LabelStatement';
  label: string;
  statement: Statement;
};

type LineComment = {
  kind: 'LineComment';
  contents: string;
};

type MemberExpression = {
  kind: 'MemberExpression';
  object: Expression;
  property: Expression;
};

type NewExpression = {
  kind: 'NewExpression';
  object: Expression;
  arguments?: Array<Expression>;
};

type NullValue = {
  kind: 'NullValue';
};

type NumberValue = {
  kind: 'NumberValue';
  value: number;
};

type ObjectValue = {
  kind: 'ObjectValue';
  entries: Array<[number | string, Expression]>;
};

type PrimitiveValue =
  | ArrayValue
  | BooleanValue
  | NullValue
  | NumberValue
  | ObjectValue
  | StringValue
  | UndefinedValue;

type Program = {
  kind: 'Program';
  statements: Array<Statement>;
};

type Statement =
  | AssignmentStatement
  | BreakStatement
  | ExpressionStatement
  | IfStatement
  | LabelStatement
  | LineComment
  | SwitchStatement
  | ThrowStatement
  | WhileStatement;

type SwitchCase = {
  kind: 'SwitchCase';
  determinant: Expression;
  block: Array<Statement>;
};

type SwitchStatement = {
  kind: 'SwitchStatement';
  cases: Array<SwitchCase>;
  condition: Expression;
};

type TernaryExpression = {
  kind: 'TernaryExpression';
  condition: Expression;
  consequent: Expression;
  alternate: Expression;
};

type UnaryExpression = {
  kind: 'UnaryExpression';
  operator:
    | '!'
    | '++' // TODO: distinguish pre and postfix operators
    | '--'
    | '~';
  operand: Expression;
};

type UndefinedValue = {
  kind: 'UndefinedValue';
};

type StringValue = {
  kind: 'StringValue';
  value: string;
};

type ThrowStatement = {
  kind: 'ThrowStatement';
  expression: Expression;
};

type WhileStatement = {
  kind: 'WhileStatement';
  condition: Expression;
  block: Array<Statement>;
};

type YieldExpression = {
  kind: 'YieldExpression';
  expression: Expression;
};

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

// Convenience methods.
//
// These will do for now, until I come up with something even fancier that can
// parse simple JS (eg. ast`const REJECT = -1` and such).

const ast = {
  assign(
    binding: 'const' | 'let' | 'var' | null,
    lhs: string,
    rhs: Expression | number,
  ): AssignmentStatement {
    if (typeof rhs === 'number') {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs,
        rhs: ast.number(rhs),
      };
    } else {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs,
        rhs,
      };
    }
  },

  binop(lexpr: Expression, operator: '<', rexpr: Expression): BinaryExpression {
    return {
      kind: 'BinaryExpression',
      lexpr,
      operator,
      rexpr,
    };
  },

  comment(contents: string): LineComment {
    return {
      kind: 'LineComment',
      contents: ` ${contents}`,
    };
  },

  const(lhs: string, rhs: Expression | number): AssignmentStatement {
    return ast.assign('const', lhs, rhs);
  },

  expression(template: string): Expression {
    if (/^\d+$/.test(template)) {
      return ast.number(parseInt(template));
    }

    let match = template.match(/^(\w+)\[(\w+)\]$/);
    if (match) {
      const indexee = match[1];
      const index = match[2];
      return ast.index(ast.identifier(indexee), ast.identifier(index));
    }

    match = template.match(/^(\S+)\s*(<|<=|>=|\+|===)\s*(.+?)\s*$/);
    if (match) {
      const lexpr = match[1];
      const operator = match[2];
      invariant(
        operator === '<' ||
          operator === '<=' ||
          operator === '>=' ||
          operator === '+' ||
          operator === '===',
      );
      const rexpr = match[3];

      match = rexpr.match(/^\d+$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: {kind: 'NumberValue', value: parseInt(match[0])},
        };
      }

      match = rexpr.match(/^'(.+)'$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: {kind: 'StringValue', value: match[1]},
        };
      }

      match = rexpr.match(/^(\S+)\.(\S+)$/);
      if (match) {
        const object: Expression = {kind: 'Identifier', name: match[1]};
        const property: Expression = {kind: 'Identifier', name: match[2]};
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: {kind: 'MemberExpression', object, property},
        };
      }
    }

    return ast.identifier(template);
  },

  identifier(name: string): Identifier {
    return {kind: 'Identifier', name};
  },

  index(indexee: Expression, index: Expression): IndexExpression {
    return {kind: 'IndexExpression', indexee, index};
  },

  let(lhs: string, rhs: Expression | number): AssignmentStatement {
    return ast.assign('let', lhs, rhs);
  },

  member(object: Expression, property: Expression): MemberExpression {
    return {kind: 'MemberExpression', object, property};
  },

  number(value: number): NumberValue {
    return {kind: 'NumberValue', value};
  },

  statement(template: string): Statement {
    let match = template.match(/^break(?:\s+(\w+))?$/);
    if (match) {
      const label = match[1];
      if (label) {
        return {kind: 'BreakStatement', label};
      } else {
        return {kind: 'BreakStatement'};
      }
    }

    match = template.match(/^(\w+)(\+\+)$/);
    if (match) {
      const name = match[1];
      const operator = match[2];
      invariant(operator === '++');
      return {
        kind: 'ExpressionStatement',
        expression: {
          kind: 'UnaryExpression',
          operator,
          operand: {kind: 'Identifier', name},
        },
      };
    }

    match = template.match(/^(?:(const|let|var)\s+)?(\w+)\s*=\s*(.+?)\s*$/);
    if (match) {
      const binding = match[1];
      invariant(
        binding === 'const' ||
          binding === 'let' ||
          binding === 'var' ||
          binding === undefined,
      );
      const lhs = match[2];
      const rhs = ast.expression(match[3]);

      return {
        kind: 'AssignmentStatement',
        binding: binding ?? null,
        lhs,
        rhs,
      };
    }
    throw new Error('Not implemented');
  },

  string(value: string): StringValue {
    return {kind: 'StringValue', value};
  },

  var(lhs: string, rhs: Expression | number): AssignmentStatement {
    return ast.assign('var', lhs, rhs);
  },

  get break(): BreakStatement {
    return {kind: 'BreakStatement'};
  },

  get false(): BooleanValue {
    return {kind: 'BooleanValue', value: false};
  },

  get true(): BooleanValue {
    return {kind: 'BooleanValue', value: true};
  },
};

// TODO: DRY some of this up to make it easier to write
// (but wait until I'm sure the AST is the right shape first)
export function wip(): Program {
  const statements: Array<Statement> = [];

  statements.push(ast.statement('const REJECT = -1'));

  if (table.startStates.size !== 1) {
    throw new Error('Need exactly one start state');
  }
  const START = Array.from(table.startStates)[0];
  statements.push(ast.statement(`const START = ${START}`));

  statements.push(ast.statement('let state = START'));
  statements.push(ast.statement('let tokenStart = 0'));
  statements.push(ast.statement('let i = tokenStart'));

  const ch = ast.identifier('ch');

  const whileStatement: WhileStatement = {
    kind: 'WhileStatement',
    condition: ast.expression('i < input.length'),
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

  const ignored = [
    ast.comment('IGNORED token.'),
    ast.statement('tokenStart = i + 1'),
    ast.statement('state = START'),
  ];

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
        switchCase.block.push(...ignored);
      } else if (isAccept) {
        switchCase.block.push({
          // TODO: emit proper token
          // return will probably be faster than yield
          // yield {
          //   token: 'LABEL',
          //   tokenStart, // <-- note use of shorthand here; teach printer to do that
          //   tokenEnd: i,
          // };
          kind: 'ExpressionStatement',
          expression: {
            kind: 'CallExpression',
            callee: {kind: 'Identifier', name: 'emit'},
            arguments: [{kind: 'StringValue', value: isAccept}],
          },
        });
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
              lexpr: ast.expression(`ch >= ${charForComparison(transition.from)}`),
              operator: '&&',
              rexpr: ast.expression(`ch <= ${charForComparison(transition.to)}`),
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
          ifStatement.alternate = [...ignored];
        } else if (isAccept) {
          ifStatement.alternate = [
            // TODO: emit proper token
            {
              kind: 'ExpressionStatement',
              expression: {
                kind: 'CallExpression',
                callee: {kind: 'Identifier', name: 'emit'},
                arguments: [{kind: 'StringValue', value: isAccept}],
              },
            },
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
    switchCase.block.push(ast.break);
    switchStatement.cases.push(switchCase);
  });

  switchStatement.cases.push({
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
  });

  return {
    kind: 'Program',
    statements,
  };
}

const TAB_WIDTH = 2;

export function print(ast: Program) {
  return ast.statements
    .map((statement) => {
      return printStatement(statement, 0);
    })
    .join('');
}

function printExpression(expression: Expression, indent: number): string {
  if (expression.kind === 'ArrayValue') {
    return (
      '[' +
      expression.items.map((item) => printExpression(item, indent)).join(', ') +
      ']'
    );
  } else if (expression.kind === 'BinaryExpression') {
    return (
      printExpression(expression.lexpr, indent + 1) +
      ` ${expression.operator} ` +
      printExpression(expression.rexpr, indent + 1)
    );
  } else if (expression.kind === 'BooleanValue') {
    return expression.value ? 'true' : 'false';
  } else if (expression.kind === 'CallExpression') {
    return (
      printExpression(expression.callee, indent) +
      '(' +
      expression.arguments
        .map((argument) => {
          return printExpression(argument, indent);
        })
        .join(', ') +
      ')'
    );
  } else if (expression.kind === 'Identifier') {
    return expression.name;
  } else if (expression.kind === 'IndexExpression') {
    return (
      printExpression(expression.indexee, indent) +
      '[' +
      printExpression(expression.index, indent) +
      ']'
    );
  } else if (expression.kind === 'MemberExpression') {
    return (
      printExpression(expression.object, indent + 1) +
      (expression.property.kind === 'Identifier'
        ? `.${expression.property.name}`
        : `[${printExpression(expression.property, indent + 1)}]`)
    );
  } else if (expression.kind === 'NewExpression') {
    return (
      'new ' +
      printExpression(expression.object, indent) +
      (expression.arguments
        ? '(' +
          expression.arguments
            .map((argument) => printExpression(argument, indent))
            .join(', ') +
          ')'
        : '')
    );
  } else if (expression.kind === 'NullValue') {
    return 'null';
  } else if (expression.kind === 'NumberValue') {
    return expression.value.toString();
  } else if (expression.kind === 'ObjectValue') {
    return (
      '{\n' +
      expression.entries
        .map(([property, value]) => {
          if (typeof property === 'number') {
            return `${property}: ${printExpression(value, indent + 1)},\n`;
          } else {
            // TODO: quote these IFF necessary
            return `[${JSON.stringify(property)}]: ${printExpression(
              value,
              indent + 1,
            )},\n`;
          }
        })
        .join('\n') +
      '}'
    );
  } else if (expression.kind === 'StringValue') {
    // TODO: prefer single quotes; I have a quote() function for this elsewhere
    return JSON.stringify(expression.value);
  } else if (expression.kind === 'TernaryExpression') {
    return (
      // TODO: add smarts to use newlines if needed, and only use parens if
      // needed
      '(' +
      printExpression(expression.condition, indent + 1) +
      ' ? ' +
      printExpression(expression.consequent, indent + 1) +
      ' : ' +
      printExpression(expression.alternate, indent + 1) +
      ')'
    );
  } else if (expression.kind === 'UnaryExpression') {
    if (expression.operator === '!' || expression.operator === '~') {
      return expression.operator + printExpression(expression.operand, indent);
    } else if (expression.operator === '++' || expression.operator === '--') {
      return printExpression(expression.operand, indent) + expression.operator;
    }
  } else if (expression.kind === 'UndefinedValue') {
    return 'undefined';
  }
  throw new Error('printExpression(): Unreachable');
}

function printIndent(indent: number): string {
  return ' '.repeat(indent * TAB_WIDTH);
}

function printStatement(statement: Statement, indent: number): string {
  if (statement.kind === 'AssignmentStatement') {
    const binding = statement.binding ? `${statement.binding} ` : '';
    return (
      printIndent(indent) +
      binding +
      statement.lhs +
      ' = ' +
      printExpression(statement.rhs, indent + 1) +
      ';\n'
    );
  } else if (statement.kind === 'BreakStatement') {
    if (statement.label) {
      return printIndent(indent) + `break ${statement.label};\n`;
    } else {
      return printIndent(indent) + 'break;\n';
    }
  } else if (statement.kind === 'ExpressionStatement') {
    return (
      printIndent(indent) +
      printExpression(statement.expression, indent) +
      ';\n'
    );
  } else if (statement.kind === 'IfStatement') {
    const lines = [];
    for (let i = 0; i < statement.consequents.length; i++) {
      const consequent = statement.consequents[i];
      const condition = printExpression(consequent.condition, indent);
      if (i === 0) {
        lines.push(printIndent(indent) + 'if (' + condition + ') {\n');
      } else {
        lines.push(printIndent(indent) + '} else if (' + condition + ') {\n');
      }
      lines.push(
        ...consequent.block.map((statement) => {
          return printStatement(statement, indent + 1);
        }),
      );
    }
    if (statement.alternate) {
      lines.push(printIndent(indent) + '} else {\n');
      lines.push(
        ...statement.alternate.map((alternate) => {
          return printStatement(alternate, indent + 1);
        }),
      );
    }
    lines.push(printIndent(indent) + '}\n');
    return lines.join('');
  } else if (statement.kind === 'LabelStatement') {
    return (
      printIndent(indent) +
      statement.label +
      ': ' +
      printStatement(statement.statement, indent).trimStart()
    );
  } else if (statement.kind === 'LineComment') {
    return printIndent(indent) + '//' + statement.contents + '\n';
  } else if (statement.kind === 'SwitchStatement') {
    return (
      printIndent(indent) +
      'switch (' +
      printExpression(statement.condition, indent) +
      ') {\n' +
      statement.cases
        .map((switchCase) => {
          return printSwitchCase(switchCase, indent + 1);
        })
        .join('') +
      printIndent(indent) +
      '}\n'
    );
  } else if (statement.kind === 'ThrowStatement') {
    return (
      printIndent(indent) +
      'throw ' +
      printExpression(statement.expression, indent) +
      ';\n'
    );
  } else if (statement.kind === 'WhileStatement') {
    return (
      'while (' +
      printExpression(statement.condition, indent) +
      ') {\n' +
      statement.block
        .map((statement) => {
          return printStatement(statement, indent + 1);
        })
        .join('') +
      printIndent(indent) +
      '}\n'
    );
  }
  throw new Error('printStatement(): Unreachable');
}

// TODO: if declares any block-scoped variables, wrap in curlies
function printSwitchCase(switchCase: SwitchCase, indent: number): string {
  return (
    printIndent(indent) +
    printExpression(switchCase.determinant, indent) +
    ':\n' +
    switchCase.block
      .map((statement) => {
        return printStatement(statement, indent + 1);
      })
      .join('')
  );
}

function charForComparison(value: string): string {
  if (value.length !== 1) {
    throw new Error(`charForComparison(): Expected length 1, got length ${value.length}`);
  }
  const charCode = value.charCodeAt(0);
  if (charCode <= 0xff) {
    return '0x' + charCode.toString(16).padStart(2, '0');
  } else {
    return '0x' + charCode.toString(16).padStart(4, '0');
  }
}
