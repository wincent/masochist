// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make graphql" instead
 *
 * @generated
 */
import type {Gotos} from '@masochist/types';
import {Lexer, Token} from './lex';
function r0() {
  return null;
}
function r1($1) {
  return {
    kind: 'TYPE_SYSTEM_DOCUMENT',
    definitions: $1,
  };
}
function r2($1) {
  return [$1];
}
function r3($1, $2) {
  $1.push($2);
  return $1;
}
function r4($1) {
  return $1;
}
function r5($1) {
  return $1;
}
function r6($1, _$2, $3) {
  return {
    kind: 'SCALAR',
    name: $3.contents,
    description: $1.value.trim(),
  };
}
function r7(_$1, $2) {
  return {
    kind: 'SCALAR',
    name: $2.contents,
  };
}
function r8($1) {
  return $1;
}
function r9($1) {
  return {
    kind: 'STRING',
    block: false,
    value: $1.contents.slice(1, -1),
  };
}
function r10($1) {
  return {
    kind: 'STRING',
    block: true,
    value: $1.contents.slice(3, -3),
  };
}
const actions: Array<{[token: string]: number}> = [{
  BLOCK_STRING_VALUE: 9,
  SCALAR: 10,
  STRING_VALUE: 8,
}, {
  $: 0,
  BLOCK_STRING_VALUE: 9,
  SCALAR: 10,
  STRING_VALUE: 8,
}, {
  SCALAR: -1,
  STRING_VALUE: -1,
  BLOCK_STRING_VALUE: -1,
  $: -1,
}, {
  SCALAR: -2,
  STRING_VALUE: -2,
  BLOCK_STRING_VALUE: -2,
  $: -2,
}, {
  SCALAR: -4,
  STRING_VALUE: -4,
  BLOCK_STRING_VALUE: -4,
  $: -4,
}, {
  SCALAR: -5,
  STRING_VALUE: -5,
  BLOCK_STRING_VALUE: -5,
  $: -5,
}, {
  SCALAR: 12,
}, {
  SCALAR: -8,
}, {
  SCALAR: -9,
}, {
  SCALAR: -10,
}, {
  NAME: 13,
}, {
  SCALAR: -3,
  STRING_VALUE: -3,
  BLOCK_STRING_VALUE: -3,
  $: -3,
}, {
  NAME: 14,
}, {
  SCALAR: -7,
  STRING_VALUE: -7,
  BLOCK_STRING_VALUE: -7,
  $: -7,
}, {
  SCALAR: -6,
  STRING_VALUE: -6,
  BLOCK_STRING_VALUE: -6,
  $: -6,
}];
const gotos: Array<Gotos> = [
  {
    Description: 6,
    ScalarTypeDefinition: 5,
    StringValue: 7,
    TypeDefinition: 4,
    TypeSystemDefinition: 3,
    TypeSystemDefinitionList: 2,
    TypeSystemDocument: 1,
  },
  {
    Description: 6,
    ScalarTypeDefinition: 5,
    StringValue: 7,
    TypeDefinition: 4,
    TypeSystemDefinition: 11,
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
  {},
  {},
];
const rules = [{
  production: "TypeSystemDocument'",
  pop: 1,
  action: r0,
}, {
  production: 'TypeSystemDocument',
  pop: 1,
  action: r1,
}, {
  production: 'TypeSystemDefinitionList',
  pop: 1,
  action: r2,
}, {
  production: 'TypeSystemDefinitionList',
  pop: 2,
  action: r3,
}, {
  production: 'TypeSystemDefinition',
  pop: 1,
  action: r4,
}, {
  production: 'TypeDefinition',
  pop: 1,
  action: r5,
}, {
  production: 'ScalarTypeDefinition',
  pop: 3,
  action: r6,
}, {
  production: 'ScalarTypeDefinition',
  pop: 2,
  action: r7,
}, {
  production: 'Description',
  pop: 1,
  action: r8,
}, {
  production: 'StringValue',
  pop: 1,
  action: r9,
}, {
  production: 'StringValue',
  pop: 1,
  action: r10,
}];
const EOF = new Token('$', -1, -1, '');
export default function parseSchema(input: string) {
  const stack: Array<[Production | Token | null, number]> = [[null, 0]];
  const lexer = new Lexer(input);
  let token = lexer.next() || EOF;
  while (true) {
    const [, current] = stack[stack.length - 1];
    const action = actions[current][token.name];
    if (action === undefined) {
      // TODO: maybe show stack here?
      throw new Error('syntax error at symbol ' + token.name);
    } else if (action < 0) {
      // Reduce.
      // TODO: compare Math.abs with -, but will have to implement
      // unary minus (currently only have it for literals)
      const {production, pop, action: code} = rules[Math.abs(action)];
      const popped: Array<Production | Token | null> = [];
      for (let i = 0; i < pop; i++) {
        const [node] = stack.pop()!;
        popped[pop - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
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
