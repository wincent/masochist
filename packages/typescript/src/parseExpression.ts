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
function r2($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lexpr: {
      kind: 'Identifier',
      name: $1.contents,
    },
    operator: '===',
    rexpr: {
      kind: 'NumberValue',
      value: parseFloat($3.contents),
      base: 10,
    },
  };
}
const actions = [
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 3,
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
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 4,
    },
  },
  {
    NUMBER: {
      kind: 'Shift',
      state: 5,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
  },
];
const gotos = [
  {
    BinaryExpression: 2,
    Expression: 1,
  },
  {},
  {},
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
    production: 'BinaryExpression',
    pop: 3,
    action: r2,
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
