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
function r6($1) {
  return $1;
}
function r7($1, _$2, $3) {
  return {
    kind: 'SCALAR',
    name: $3.contents,
    description: $1.value.trim(),
  };
}
function r8(_$1, $2) {
  return {
    kind: 'SCALAR',
    name: $2.contents,
  };
}
function r9($1, _$2, $3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $5,
    description: $1.value.trim(),
  };
}
function r10($1, _$2, $3, _$4, _$5, $6) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $6,
    description: $1.value.trim(),
  };
}
function r11(_$1, $2, _$3, $4) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $4,
  };
}
function r12(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $5,
  };
}
function r13($1) {
  return [$1];
}
function r14($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r15($1) {
  return $1.contents;
}
function r16($1) {
  return $1;
}
function r17($1) {
  return {
    kind: 'STRING',
    block: false,
    value: $1.contents.slice(1, -1),
  };
}
function r18($1) {
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
  UNION: 12,
}, {
  $: 0,
  BLOCK_STRING_VALUE: 9,
  SCALAR: 10,
  STRING_VALUE: 8,
  UNION: 12,
}, {
  SCALAR: -1,
  UNION: -1,
  STRING_VALUE: -1,
  BLOCK_STRING_VALUE: -1,
  $: -1,
}, {
  SCALAR: -2,
  UNION: -2,
  STRING_VALUE: -2,
  BLOCK_STRING_VALUE: -2,
  $: -2,
}, {
  SCALAR: -4,
  UNION: -4,
  STRING_VALUE: -4,
  BLOCK_STRING_VALUE: -4,
  $: -4,
}, {
  SCALAR: -5,
  UNION: -5,
  STRING_VALUE: -5,
  BLOCK_STRING_VALUE: -5,
  $: -5,
}, {
  SCALAR: 14,
  UNION: 15,
}, {
  SCALAR: -16,
  UNION: -16,
}, {
  SCALAR: -17,
  UNION: -17,
}, {
  SCALAR: -18,
  UNION: -18,
}, {
  NAME: 16,
}, {
  SCALAR: -6,
  UNION: -6,
  STRING_VALUE: -6,
  BLOCK_STRING_VALUE: -6,
  $: -6,
}, {
  NAME: 17,
}, {
  SCALAR: -3,
  UNION: -3,
  STRING_VALUE: -3,
  BLOCK_STRING_VALUE: -3,
  $: -3,
}, {
  NAME: 18,
}, {
  NAME: 19,
}, {
  SCALAR: -8,
  UNION: -8,
  STRING_VALUE: -8,
  BLOCK_STRING_VALUE: -8,
  $: -8,
}, {
  EQUALS: 20,
}, {
  SCALAR: -7,
  UNION: -7,
  STRING_VALUE: -7,
  BLOCK_STRING_VALUE: -7,
  $: -7,
}, {
  EQUALS: 21,
}, {
  BAR: 23,
  NAME: 25,
}, {
  BAR: 27,
  NAME: 25,
}, {
  BAR: 28,
  SCALAR: -11,
  UNION: -11,
  STRING_VALUE: -11,
  BLOCK_STRING_VALUE: -11,
  $: -11,
}, {
  NAME: 25,
}, {
  BAR: -13,
  SCALAR: -13,
  UNION: -13,
  STRING_VALUE: -13,
  BLOCK_STRING_VALUE: -13,
  $: -13,
}, {
  BAR: -15,
  SCALAR: -15,
  UNION: -15,
  STRING_VALUE: -15,
  BLOCK_STRING_VALUE: -15,
  $: -15,
}, {
  BAR: 28,
  SCALAR: -9,
  UNION: -9,
  STRING_VALUE: -9,
  BLOCK_STRING_VALUE: -9,
  $: -9,
}, {
  NAME: 25,
}, {
  NAME: 25,
}, {
  BAR: 28,
  SCALAR: -12,
  UNION: -12,
  STRING_VALUE: -12,
  BLOCK_STRING_VALUE: -12,
  $: -12,
}, {
  BAR: 28,
  SCALAR: -10,
  UNION: -10,
  STRING_VALUE: -10,
  BLOCK_STRING_VALUE: -10,
  $: -10,
}, {
  BAR: -14,
  SCALAR: -14,
  UNION: -14,
  STRING_VALUE: -14,
  BLOCK_STRING_VALUE: -14,
  $: -14,
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
    UnionTypeDefinition: 11,
  },
  {
    Description: 6,
    ScalarTypeDefinition: 5,
    StringValue: 7,
    TypeDefinition: 4,
    TypeSystemDefinition: 13,
    UnionTypeDefinition: 11,
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
  {},
  {},
  {},
  {},
  {},
  {
    UnionTypeList: 22,
    UnionTypeListItem: 24,
  },
  {
    UnionTypeList: 26,
    UnionTypeListItem: 24,
  },
  {},
  {
    UnionTypeList: 29,
    UnionTypeListItem: 24,
  },
  {},
  {},
  {},
  {
    UnionTypeList: 30,
    UnionTypeListItem: 24,
  },
  {
    UnionTypeListItem: 31,
  },
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
  production: 'TypeDefinition',
  pop: 1,
  action: r6,
}, {
  production: 'ScalarTypeDefinition',
  pop: 3,
  action: r7,
}, {
  production: 'ScalarTypeDefinition',
  pop: 2,
  action: r8,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r9,
}, {
  production: 'UnionTypeDefinition',
  pop: 6,
  action: r10,
}, {
  production: 'UnionTypeDefinition',
  pop: 4,
  action: r11,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r12,
}, {
  production: 'UnionTypeList',
  pop: 1,
  action: r13,
}, {
  production: 'UnionTypeList',
  pop: 3,
  action: r14,
}, {
  production: 'UnionTypeListItem',
  pop: 1,
  action: r15,
}, {
  production: 'Description',
  pop: 1,
  action: r16,
}, {
  production: 'StringValue',
  pop: 1,
  action: r17,
}, {
  production: 'StringValue',
  pop: 1,
  action: r18,
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
