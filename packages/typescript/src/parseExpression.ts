// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make typescript" instead
 *
 * @generated
 */
import type {Gotos} from '@masochist/types';
import {Lexer, Token} from './lex';
function r0() {
  return null;
}
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
    lhs: $1,
    operator: '===',
    rhs: $3,
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
const actions: Array<{[token: string]: number}> = [{
  IDENTIFIER: 4,
  NUMBER: 7,
  OPENING_PAREN: 8,
}, {
  $: 0,
  STRICT_EQUALS: 9,
}, {
  STRICT_EQUALS: -1,
  $: -1,
  CLOSING_PAREN: -1,
}, {
  STRICT_EQUALS: -2,
  $: -2,
  CLOSING_PAREN: -2,
}, {
  STRICT_EQUALS: -6,
  $: -6,
  CLOSING_PAREN: -6,
}, {
  STRICT_EQUALS: -3,
  $: -3,
  CLOSING_PAREN: -3,
}, {
  STRICT_EQUALS: -7,
  $: -7,
  CLOSING_PAREN: -7,
}, {
  STRICT_EQUALS: -8,
  $: -8,
  CLOSING_PAREN: -8,
}, {
  IDENTIFIER: 4,
  NUMBER: 7,
  OPENING_PAREN: 8,
}, {
  IDENTIFIER: 4,
  NUMBER: 7,
  OPENING_PAREN: 8,
}, {
  CLOSING_PAREN: 12,
  STRICT_EQUALS: 9,
}, {
  STRICT_EQUALS: 9,
  $: -5,
  CLOSING_PAREN: -5,
}, {
  STRICT_EQUALS: -4,
  $: -4,
  CLOSING_PAREN: -4,
}];
const gotos: Array<Gotos> = [
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
const rules = [{
  production: "Expression'",
  pop: 1,
  action: r0,
}, {
  production: 'Expression',
  pop: 1,
  action: r1,
}, {
  production: 'Expression',
  pop: 1,
  action: r2,
}, {
  production: 'Expression',
  pop: 1,
  action: r3,
}, {
  production: 'Expression',
  pop: 3,
  action: r4,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r5,
}, {
  production: 'Identifier',
  pop: 1,
  action: r6,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r7,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r8,
}];
const EOF = new Token('$', -1, -1, '');
export default function parseExpression(input: string) {
  const stack: Array<[Production | Token | null, number]> = [[null, 0]];
  const lexer = new Lexer(input);
  let token = lexer.next() || EOF;
  while (true) {
    const current = stack[stack.length - 1][1];
    const action = actions[current][token.name];
    if (action === undefined) {
      // TODO: maybe show stack here?
      throw new Error('syntax error at symbol ' + token.name);
    } else if (action < 0) {
      // Reduce.
      // TODO: compare Math.abs with -, but will have to implement
      // unary minus (currently only have it for literals)
      const {production, pop, action: code} = rules[Math.abs(action)];
      const popped: Array<Production | Token | null> = new Array(pop);
      for (let i = 0; i < pop; i++) {
        const last = stack.pop()!;
        popped[pop - i - 1] = last[0];
      }
      const next = stack[stack.length - 1][1];
      const target = gotos[next][production];
      // Use "as any" cast to suppress:
      // - TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
      stack.push([(code as any)(...popped), target]);
    } else if (action > 0) {
      // Shift.
      stack.push([token, action]);
      token = lexer.next() || EOF;
    } else if (action === 0) {
      // Accept.
      const [tree] = stack[1];
      return tree;
    }
  }
}
