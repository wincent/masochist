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
function r6($1, _$2, _$3, $4) {
  const query = $4.find(({kind}) => kind === 'QUERY')?.name;
  const mutation = $4.find(({kind}) => kind === 'MUTATION')?.name;
  const subscription = $4.find(({kind}) => kind === 'SUBSCRIPTION')?.name;
  if (!query) {
    throw new Error('SCHEMA type requires a "query" operation type');
  }
  if (new Set($4.map(({kind}) => kind)).size !== $4.length) {
    throw new Error('operation types may only appear once each in SCHEMA type');
  }
  return {
    kind: 'SCHEMA',
    description: $1.value.trim(),
    query,
    mutation,
    subscription,
  };
}
function r7(_$1, _$2, $3) {
  const query = $3.find(({kind}) => kind === 'QUERY')?.name;
  const mutation = $3.find(({kind}) => kind === 'MUTATION')?.name;
  const subscription = $3.find(({kind}) => kind === 'SUBSCRIPTION')?.name;
  if (!query) {
    throw new Error('SCHEMA type requires a "query" operation type');
  }
  if (new Set($3.map(({kind}) => kind)).size !== $3.length) {
    throw new Error('operation types may only appear once each in SCHEMA type');
  }
  return {
    kind: 'SCHEMA',
    query,
    mutation,
    subscription,
  };
}
function r8($1) {
  return [$1];
}
function r9($1, $2) {
  $1.push($2);
  return $1;
}
function r10(_$1, _$2, $3) {
  return {
    kind: 'QUERY',
    name: $3.contents,
  };
}
function r11(_$1, _$2, $3) {
  return {
    kind: 'MUTATION',
    name: $3.contents,
  };
}
function r12(_$1, _$2, $3) {
  return {
    kind: 'SUBSCRIPTION',
    name: $3.contents,
  };
}
function r13($1) {
  return $1;
}
function r14($1) {
  return $1;
}
function r15($1, _$2, $3) {
  return {
    kind: 'SCALAR',
    name: $3.contents,
    description: $1.value.trim(),
  };
}
function r16(_$1, $2) {
  return {
    kind: 'SCALAR',
    name: $2.contents,
  };
}
function r17($1, _$2, $3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $5,
    description: $1.value.trim(),
  };
}
function r18($1, _$2, $3, _$4, _$5, $6) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $6,
    description: $1.value.trim(),
  };
}
function r19(_$1, $2, _$3, $4) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $4,
  };
}
function r20(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $5,
  };
}
function r21($1) {
  return [$1];
}
function r22($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r23($1) {
  return $1.contents;
}
function r24($1) {
  return $1;
}
function r25($1) {
  return {
    kind: 'STRING',
    block: false,
    value: $1.contents.slice(1, -1),
  };
}
function r26($1) {
  return {
    kind: 'STRING',
    block: true,
    value: $1.contents.slice(3, -3),
  };
}
const actions: Array<{[token: string]: number}> = [{
  BLOCK_STRING_VALUE: 8,
  SCALAR: 12,
  SCHEMA: 9,
  STRING_VALUE: 7,
  UNION: 14,
}, {
  $: 0,
  BLOCK_STRING_VALUE: 8,
  SCALAR: 12,
  SCHEMA: 9,
  STRING_VALUE: 7,
  UNION: 14,
}, {
  SCHEMA: -1,
  SCALAR: -1,
  UNION: -1,
  STRING_VALUE: -1,
  BLOCK_STRING_VALUE: -1,
  $: -1,
}, {
  SCHEMA: -2,
  SCALAR: -2,
  UNION: -2,
  STRING_VALUE: -2,
  BLOCK_STRING_VALUE: -2,
  $: -2,
}, {
  SCHEMA: -4,
  SCALAR: -4,
  UNION: -4,
  STRING_VALUE: -4,
  BLOCK_STRING_VALUE: -4,
  $: -4,
}, {
  SCALAR: 17,
  SCHEMA: 16,
  UNION: 18,
}, {
  SCHEMA: -24,
  SCALAR: -24,
  UNION: -24,
}, {
  SCHEMA: -25,
  SCALAR: -25,
  UNION: -25,
}, {
  SCHEMA: -26,
  SCALAR: -26,
  UNION: -26,
}, {
  OPENING_BRACE: 19,
}, {
  SCHEMA: -5,
  SCALAR: -5,
  UNION: -5,
  STRING_VALUE: -5,
  BLOCK_STRING_VALUE: -5,
  $: -5,
}, {
  SCHEMA: -13,
  SCALAR: -13,
  UNION: -13,
  STRING_VALUE: -13,
  BLOCK_STRING_VALUE: -13,
  $: -13,
}, {
  NAME: 20,
}, {
  SCHEMA: -14,
  SCALAR: -14,
  UNION: -14,
  STRING_VALUE: -14,
  BLOCK_STRING_VALUE: -14,
  $: -14,
}, {
  NAME: 21,
}, {
  SCHEMA: -3,
  SCALAR: -3,
  UNION: -3,
  STRING_VALUE: -3,
  BLOCK_STRING_VALUE: -3,
  $: -3,
}, {
  OPENING_BRACE: 22,
}, {
  NAME: 23,
}, {
  NAME: 24,
}, {
  MUTATION: 28,
  QUERY: 27,
  SUBSCRIPTION: 29,
}, {
  SCHEMA: -16,
  SCALAR: -16,
  UNION: -16,
  STRING_VALUE: -16,
  BLOCK_STRING_VALUE: -16,
  $: -16,
}, {
  EQUALS: 30,
}, {
  MUTATION: 28,
  QUERY: 27,
  SUBSCRIPTION: 29,
}, {
  SCHEMA: -15,
  SCALAR: -15,
  UNION: -15,
  STRING_VALUE: -15,
  BLOCK_STRING_VALUE: -15,
  $: -15,
}, {
  EQUALS: 32,
}, {
  CLOSING_BRACE: 33,
  MUTATION: 28,
  QUERY: 27,
  SUBSCRIPTION: 29,
}, {
  CLOSING_BRACE: -8,
  QUERY: -8,
  MUTATION: -8,
  SUBSCRIPTION: -8,
}, {
  COLON: 35,
}, {
  COLON: 36,
}, {
  COLON: 37,
}, {
  BAR: 39,
  NAME: 41,
}, {
  CLOSING_BRACE: 42,
  MUTATION: 28,
  QUERY: 27,
  SUBSCRIPTION: 29,
}, {
  BAR: 44,
  NAME: 41,
}, {
  SCHEMA: -7,
  SCALAR: -7,
  UNION: -7,
  STRING_VALUE: -7,
  BLOCK_STRING_VALUE: -7,
  $: -7,
}, {
  CLOSING_BRACE: -9,
  QUERY: -9,
  MUTATION: -9,
  SUBSCRIPTION: -9,
}, {
  NAME: 45,
}, {
  NAME: 46,
}, {
  NAME: 47,
}, {
  BAR: 48,
  SCHEMA: -19,
  SCALAR: -19,
  UNION: -19,
  STRING_VALUE: -19,
  BLOCK_STRING_VALUE: -19,
  $: -19,
}, {
  NAME: 41,
}, {
  BAR: -21,
  SCHEMA: -21,
  SCALAR: -21,
  UNION: -21,
  STRING_VALUE: -21,
  BLOCK_STRING_VALUE: -21,
  $: -21,
}, {
  BAR: -23,
  SCHEMA: -23,
  SCALAR: -23,
  UNION: -23,
  STRING_VALUE: -23,
  BLOCK_STRING_VALUE: -23,
  $: -23,
}, {
  SCHEMA: -6,
  SCALAR: -6,
  UNION: -6,
  STRING_VALUE: -6,
  BLOCK_STRING_VALUE: -6,
  $: -6,
}, {
  BAR: 48,
  SCHEMA: -17,
  SCALAR: -17,
  UNION: -17,
  STRING_VALUE: -17,
  BLOCK_STRING_VALUE: -17,
  $: -17,
}, {
  NAME: 41,
}, {
  CLOSING_BRACE: -10,
  QUERY: -10,
  MUTATION: -10,
  SUBSCRIPTION: -10,
}, {
  CLOSING_BRACE: -11,
  QUERY: -11,
  MUTATION: -11,
  SUBSCRIPTION: -11,
}, {
  CLOSING_BRACE: -12,
  QUERY: -12,
  MUTATION: -12,
  SUBSCRIPTION: -12,
}, {
  NAME: 41,
}, {
  BAR: 48,
  SCHEMA: -20,
  SCALAR: -20,
  UNION: -20,
  STRING_VALUE: -20,
  BLOCK_STRING_VALUE: -20,
  $: -20,
}, {
  BAR: 48,
  SCHEMA: -18,
  SCALAR: -18,
  UNION: -18,
  STRING_VALUE: -18,
  BLOCK_STRING_VALUE: -18,
  $: -18,
}, {
  BAR: -22,
  SCHEMA: -22,
  SCALAR: -22,
  UNION: -22,
  STRING_VALUE: -22,
  BLOCK_STRING_VALUE: -22,
  $: -22,
}];
const gotos: Array<Gotos> = [
  {
    Description: 5,
    ScalarTypeDefinition: 11,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 3,
    TypeSystemDefinitionList: 2,
    TypeSystemDocument: 1,
    UnionTypeDefinition: 13,
  },
  {
    Description: 5,
    ScalarTypeDefinition: 11,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 15,
    UnionTypeDefinition: 13,
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
  {
    OperationTypeList: 25,
    OperationTypeListItem: 26,
  },
  {},
  {},
  {
    OperationTypeList: 31,
    OperationTypeListItem: 26,
  },
  {},
  {},
  {
    OperationTypeListItem: 34,
  },
  {},
  {},
  {},
  {},
  {
    UnionTypeList: 38,
    UnionTypeListItem: 40,
  },
  {
    OperationTypeListItem: 34,
  },
  {
    UnionTypeList: 43,
    UnionTypeListItem: 40,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    UnionTypeList: 49,
    UnionTypeListItem: 40,
  },
  {},
  {},
  {},
  {},
  {
    UnionTypeList: 50,
    UnionTypeListItem: 40,
  },
  {},
  {},
  {},
  {
    UnionTypeListItem: 51,
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
  production: 'TypeSystemDefinition',
  pop: 1,
  action: r5,
}, {
  production: 'SchemaDefinition',
  pop: 5,
  action: r6,
}, {
  production: 'SchemaDefinition',
  pop: 4,
  action: r7,
}, {
  production: 'OperationTypeList',
  pop: 1,
  action: r8,
}, {
  production: 'OperationTypeList',
  pop: 2,
  action: r9,
}, {
  production: 'OperationTypeListItem',
  pop: 3,
  action: r10,
}, {
  production: 'OperationTypeListItem',
  pop: 3,
  action: r11,
}, {
  production: 'OperationTypeListItem',
  pop: 3,
  action: r12,
}, {
  production: 'TypeDefinition',
  pop: 1,
  action: r13,
}, {
  production: 'TypeDefinition',
  pop: 1,
  action: r14,
}, {
  production: 'ScalarTypeDefinition',
  pop: 3,
  action: r15,
}, {
  production: 'ScalarTypeDefinition',
  pop: 2,
  action: r16,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r17,
}, {
  production: 'UnionTypeDefinition',
  pop: 6,
  action: r18,
}, {
  production: 'UnionTypeDefinition',
  pop: 4,
  action: r19,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r20,
}, {
  production: 'UnionTypeList',
  pop: 1,
  action: r21,
}, {
  production: 'UnionTypeList',
  pop: 3,
  action: r22,
}, {
  production: 'UnionTypeListItem',
  pop: 1,
  action: r23,
}, {
  production: 'Description',
  pop: 1,
  action: r24,
}, {
  production: 'StringValue',
  pop: 1,
  action: r25,
}, {
  production: 'StringValue',
  pop: 1,
  action: r26,
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
