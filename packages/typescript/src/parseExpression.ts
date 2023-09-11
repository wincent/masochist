// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make graphql" instead
 *
 * @generated
 */
import {Token} from '@masochist/lexer';
import {Lexer} from './lex';
/**
 * r0: no production
 */
function r1($1) {
  return $1;
}
function r2($1) {
  return $1;
}
function r3($1) {
  return $1;
}
function r4(_$1, $2) {
  return $2;
}
function r5($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lexpr: $1,
    operator: '===',
    rexpr: $3,
  };
}
function r6($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r7($1) {
  return $1;
}
function r8($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
const actions = [
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 4,
    },
    NUMBER: {
      kind: 'Shift',
      state: 7,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    ['$']: {
      kind: 'Accept',
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 1,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 1,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 2,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 6,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 6,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 3,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 3,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 7,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 7,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 8,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 8,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 4,
    },
    NUMBER: {
      kind: 'Shift',
      state: 7,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 4,
    },
    NUMBER: {
      kind: 'Shift',
      state: 7,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 12,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 9,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 5,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 4,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 4,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 4,
    },
  },
];
const gotos = [
  {
    BinaryExpression: 2,
    Expression: 1,
    Identifier: 3,
    NumberValue: 6,
    PrimitiveValue: 5,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    BinaryExpression: 2,
    Expression: 10,
    Identifier: 3,
    NumberValue: 6,
    PrimitiveValue: 5,
  },
  {
    BinaryExpression: 2,
    Expression: 11,
    Identifier: 3,
    NumberValue: 6,
    PrimitiveValue: 5,
  },
  {},
  {},
  {},
];
const rules = [
  {
    production: "Expression'",
    pop: 1,
    action: () => {} /* dummy placeholder */,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r1,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r2,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r3,
  },
  {
    production: 'Expression',
    pop: 3,
    action: r4,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r5,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r6,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r7,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r8,
  },
];
const EOF = new Token('$', -1, -1, '');
export default function parseExpression(input) {
  const stack = [[null, 0]];
  const lexer = new Lexer(input);

  let token = lexer.next() || EOF;

  while (true) {
    const [, current] = stack[stack.length - 1];
    const action = actions[current][token.name];

    if (!action) {
      throw new Error('syntax error');
    }
    if (action.kind === 'Accept') {
      // Expect initial state + accept state.
      const [tree] = stack[1];
      return tree;
    } else if (action.kind === 'Shift') {
      stack.push([token, action.state]);
      token = lexer.next() || EOF;
    } else if (action.kind === 'Reduce') {
      // TODO: instead of pop, set length?
      const {production, pop, action: code} = rules[action.rule];
      const popped: Array<P | Token | null> = [];
      for (let i = 0; i < pop; i++) {
        const [node] = stack.pop()!;
        popped[pop - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
      const target = gotos[next][production];
      if (code) {
        stack.push([code(...popped), target]);
      } else {
        throw new Error(
          'to use static parser must provide semantic action for every production',
        );
      }
    }
  }
}
