import type {TransitionTable} from './NFA/TransitionTable';

type AssignmentStatement = {
  kind: 'AssignmentStatement';
  binding: 'const' | 'let' | 'var';
  lhs: string;
  rhs: Expression;
};

type BinaryExpression = {
  kind: 'BinaryExpression';
  lexpr: Expression;
  operator: '<' | '<=' | '==' | '===' | '!=' | '!==' | '>' | '>=';
  rexpr: Expression;
};

type BooleanValue = {
  kind: 'BooleanValue';
  value: boolean;
};

type BreakStatement = {
  kind: 'BreakStatement';
};

type Case = {
  kind: 'Case';
  determinant: Expression;
  block: Array<Statement>;
};

type Consequent = {
  kind: 'Consequent';
  condition: Expression;
  block: Array<Statement>;
};

type Expression =
  | BinaryExpression
  | Identifier
  | IndexExpression
  | PrimitiveValue
  | TernaryExpression
  | UnaryExpression;

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

type NullValue = {
  kind: 'NullValue';
};

type NumberValue = {
  kind: 'NumberValue';
  value: number;
};

type PrimitiveValue =
  | BooleanValue
  | NullValue
  | NumberValue
  | StringValue
  | UndefinedValue;

type Statement =
  | AssignmentStatement
  | BreakStatement
  | IfStatement
  | LabelStatement
  | SwitchStatement
  | WhileStatement;

type SwitchStatement = {
  kind: 'SwitchStatement';
  cases: Array<Case>;
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
};

type UndefinedValue = {
  kind: 'UndefinedValue';
};

type StringValue = {
  kind: 'StringValue';
  value: string;
};

type WhileStatement = {
  kind: 'WhileStatement';
  condition: Expression;
  block: Array<Statement>;
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

export default function wip() {
  const switchStatement: SwitchStatement = {
    kind: 'SwitchStatement',
    cases: [],
    condition: {
      kind: 'Identifier',
      name: 'state',
    },
  };

  table.transitions.forEach((transition, i) => {
    switchStatement.cases.push({
      kind: 'Case',
      determinant: {kind: 'NumberValue', value: i},
      block: [],
    });
  });

  return switchStatement;
}

// want to make something like:
const input = 'something';
let i = 0;
const start = 0;
let state = 0;
let accept = null;

const ACCEPT = -2;
const REJECT = -1;

main_loop: while (i < input.length) {
  const ch = input[i];
  switch (state) {
    case 0:
      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch === '_') {
        state = 1;
      } else {
        state = REJECT;
      }
      break;
    case 1:
      if (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        ch === '_' ||
        (ch >= '9' && ch <= '9')
      ) {
        state = 1;
      } else {
        state = ACCEPT;
      }
      break;
    case REJECT:
      // We shouldn't even be trying to recognize a token unless lookahead tells
      // us to, so failure means invalid input.
      throw new Error('failed to recognize token');
    case ACCEPT:
      accept = 'NAME';
      break main_loop;
  }
  i++;
}
