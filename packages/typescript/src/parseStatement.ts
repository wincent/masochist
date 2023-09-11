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
function r2(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2,
    rhs: $4,
  };
}
function r3(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2,
    rhs: $4,
  };
}
function r4($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r5($1) {
  return $1;
}
function r6($1) {
  return $1;
}
function r7($1) {
  return $1;
}
function r8($1) {
  return $1;
}
function r9() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r10() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r11($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
const actions = [
  {
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
  },
  {
    ['$']: {
      kind: 'Accept',
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 6,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 6,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 4,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 6,
    },
    NUMBER: {
      kind: 'Shift',
      state: 17,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 6,
    },
    NUMBER: {
      kind: 'Shift',
      state: 17,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 9,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 10,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 20,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 3,
    },
  },
];
const gotos = [
  {
    AssignmentStatement: 2,
    Statement: 1,
  },
  {},
  {},
  {
    Identifier: 5,
  },
  {
    Identifier: 7,
  },
  {},
  {},
  {},
  {
    BooleanValue: 13,
    Expression: 10,
    Identifier: 11,
    NumberValue: 16,
    PrimitiveValue: 12,
  },
  {
    BooleanValue: 13,
    Expression: 18,
    Identifier: 11,
    NumberValue: 16,
    PrimitiveValue: 12,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
const rules = [
  {
    production: "Statement'",
    pop: 1,
    action: () => {} /* dummy placeholder */,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r1,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r2,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r3,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r4,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r5,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r6,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r7,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r8,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r9,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r10,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r11,
  },
];
const EOF = new Token('$', -1, -1, '');
export default function parseStatement(input) {
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
