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
function r15($1) {
  return $1;
}
function r16($1) {
  return $1;
}
function r17($1, _$2, $3, _$4, $5) {
  if (
    $5.some(({name}) => {
      return (
        name === 'true' ||
        name === 'false' ||
        name === 'null'
      );
    })
  ) {
    throw new Error('enum values may not include "true", "false" or "null"');
  }
  return {
    kind: 'ENUM_TYPE',
    name: $3.contents,
    description: $1.value.trim(),
    values: $5,
  };
}
function r18(_$1, $2, _$3, $4) {
  if (
    $4.some(({name}) => {
      return (
        name === 'true' ||
        name === 'false' ||
        name === 'null'
      );
    })
  ) {
    throw new Error('enum values may not include "true", "false" or "null"');
  }
  return {
    kind: 'ENUM_TYPE',
    name: $2.contents,
    values: $4,
  };
}
function r19($1) {
  return [$1];
}
function r20($1, $2) {
  $1.push($2);
  return $1;
}
function r21($1, $2) {
  return {
    kind: 'ENUM_VALUE',
    name: $2.contents,
    description: $1.value.trim(),
  };
}
function r22($1) {
  return {
    kind: 'ENUM_VALUE',
    name: $1.contents,
  };
}
function r23($1, _$2, $3, $4, _$5, $6) {
  return {
    kind: 'OBJECT_TYPE',
    name: $3.contents,
    description: $1.value.trim(),
    implements: $4,
    fields: $6,
  };
}
function r24($1, _$2, $3, _$4, $5) {
  return {
    kind: 'OBJECT_TYPE',
    name: $3.contents,
    description: $1.value.trim(),
    implements: [],
    fields: $5,
  };
}
function r25(_$1, $2, $3, _$4, $5) {
  return {
    kind: 'OBJECT_TYPE',
    name: $2.contents,
    implements: $3,
    fields: $5,
  };
}
function r26(_$1, $2, _$3, $4) {
  return {
    kind: 'OBJECT_TYPE',
    name: $2.contents,
    implements: [],
    fields: $4,
  };
}
function r27(_$1, _$2, $3) {
  return $3;
}
function r28(_$1, $2) {
  return $2;
}
function r29($1) {
  return [$1.contents];
}
function r30($1, _$2, $3) {
  $1.push($3.contents);
  return $1;
}
function r31($1) {
  return [$1];
}
function r32($1, $2) {
  $1.push($2);
  return $1;
}
function r33($1, $2, $3, _$4, $5) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    description: $1.value.trim(),
    arguments: $3,
    type: $5,
  };
}
function r34(_$1, $2, _$3, $4) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    arguments: $2,
    type: $4,
  };
}
function r35($1, $2, _$3, $4) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    description: $1.value.trim(),
    arguments: [],
    type: $4,
  };
}
function r36($1, _$2, $3) {
  return {
    kind: 'FIELD',
    name: $1.contents,
    arguments: [],
    type: $3,
  };
}
function r37(_$1, $2) {
  return $2;
}
function r38($1) {
  return [$1];
}
function r39($1, $2) {
  $1.push($2);
  return $1;
}
function r40($1, $2, _$3, $4) {
  return {
    kind: 'INPUT_VALUE',
    name: $2.contents,
    // TODO: going to have to dedent these because, unlike the other
    // descriptions, these appear indented.
    description: $1.value.trim(),
    type: $4,
  };
}
function r41($1, _$2, $3) {
  return {
    kind: 'INPUT_VALUE',
    name: $1.contents,
    type: $3,
  };
}
function r42($1, _$2, $3) {
  return {
    kind: 'SCALAR',
    name: $3.contents,
    description: $1.value.trim(),
  };
}
function r43(_$1, $2) {
  return {
    kind: 'SCALAR',
    name: $2.contents,
  };
}
function r44($1, _$2, $3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $5,
    description: $1.value.trim(),
  };
}
function r45($1, _$2, $3, _$4, _$5, $6) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $6,
    description: $1.value.trim(),
  };
}
function r46(_$1, $2, _$3, $4) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $4,
  };
}
function r47(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $5,
  };
}
function r48($1) {
  return [$1];
}
function r49($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r50($1) {
  return $1.contents;
}
function r51($1) {
  return $1;
}
function r52($1) {
  return {
    kind: 'STRING',
    block: false,
    value: $1.contents.slice(1, -1),
  };
}
function r53($1) {
  return {
    kind: 'STRING',
    block: true,
    value: $1.contents.slice(3, -3),
  };
}
function r54($1) {
  return $1;
}
function r55($1) {
  return $1;
}
function r56($1) {
  return $1;
}
function r57($1) {
  return {
    kind: 'NAMED_TYPE',
    name: $1.contents,
  };
}
function r58($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r59($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r60(_$1, $2) {
  return {
    kind: 'LIST_TYPE',
    type: $2,
  };
}
const actions: Array<{[token: string]: number}> = [{
  BLOCK_STRING_VALUE: 8,
  ENUM: 12,
  SCALAR: 16,
  SCHEMA: 9,
  STRING_VALUE: 7,
  TYPE: 14,
  UNION: 18,
}, {
  $: 0,
  BLOCK_STRING_VALUE: 8,
  ENUM: 12,
  SCALAR: 16,
  SCHEMA: 9,
  STRING_VALUE: 7,
  TYPE: 14,
  UNION: 18,
}, {
  SCHEMA: -1,
  ENUM: -1,
  TYPE: -1,
  SCALAR: -1,
  UNION: -1,
  STRING_VALUE: -1,
  BLOCK_STRING_VALUE: -1,
  $: -1,
}, {
  SCHEMA: -2,
  ENUM: -2,
  TYPE: -2,
  SCALAR: -2,
  UNION: -2,
  STRING_VALUE: -2,
  BLOCK_STRING_VALUE: -2,
  $: -2,
}, {
  SCHEMA: -4,
  ENUM: -4,
  TYPE: -4,
  SCALAR: -4,
  UNION: -4,
  STRING_VALUE: -4,
  BLOCK_STRING_VALUE: -4,
  $: -4,
}, {
  ENUM: 21,
  SCALAR: 23,
  SCHEMA: 20,
  TYPE: 22,
  UNION: 24,
}, {
  SCHEMA: -51,
  ENUM: -51,
  TYPE: -51,
  SCALAR: -51,
  UNION: -51,
  NAME: -51,
}, {
  SCHEMA: -52,
  ENUM: -52,
  TYPE: -52,
  SCALAR: -52,
  UNION: -52,
  NAME: -52,
}, {
  SCHEMA: -53,
  ENUM: -53,
  TYPE: -53,
  SCALAR: -53,
  UNION: -53,
  NAME: -53,
}, {
  OPENING_BRACE: 25,
}, {
  SCHEMA: -5,
  ENUM: -5,
  TYPE: -5,
  SCALAR: -5,
  UNION: -5,
  STRING_VALUE: -5,
  BLOCK_STRING_VALUE: -5,
  $: -5,
}, {
  SCHEMA: -13,
  ENUM: -13,
  TYPE: -13,
  SCALAR: -13,
  UNION: -13,
  STRING_VALUE: -13,
  BLOCK_STRING_VALUE: -13,
  $: -13,
}, {
  NAME: 26,
}, {
  SCHEMA: -14,
  ENUM: -14,
  TYPE: -14,
  SCALAR: -14,
  UNION: -14,
  STRING_VALUE: -14,
  BLOCK_STRING_VALUE: -14,
  $: -14,
}, {
  NAME: 27,
}, {
  SCHEMA: -15,
  ENUM: -15,
  TYPE: -15,
  SCALAR: -15,
  UNION: -15,
  STRING_VALUE: -15,
  BLOCK_STRING_VALUE: -15,
  $: -15,
}, {
  NAME: 28,
}, {
  SCHEMA: -16,
  ENUM: -16,
  TYPE: -16,
  SCALAR: -16,
  UNION: -16,
  STRING_VALUE: -16,
  BLOCK_STRING_VALUE: -16,
  $: -16,
}, {
  NAME: 29,
}, {
  SCHEMA: -3,
  ENUM: -3,
  TYPE: -3,
  SCALAR: -3,
  UNION: -3,
  STRING_VALUE: -3,
  BLOCK_STRING_VALUE: -3,
  $: -3,
}, {
  OPENING_BRACE: 30,
}, {
  NAME: 31,
}, {
  NAME: 32,
}, {
  NAME: 33,
}, {
  NAME: 34,
}, {
  MUTATION: 38,
  QUERY: 37,
  SUBSCRIPTION: 39,
}, {
  OPENING_BRACE: 40,
}, {
  IMPLEMENTS: 43,
  OPENING_BRACE: 42,
}, {
  SCHEMA: -43,
  ENUM: -43,
  TYPE: -43,
  SCALAR: -43,
  UNION: -43,
  STRING_VALUE: -43,
  BLOCK_STRING_VALUE: -43,
  $: -43,
}, {
  EQUALS: 44,
}, {
  MUTATION: 38,
  QUERY: 37,
  SUBSCRIPTION: 39,
}, {
  OPENING_BRACE: 46,
}, {
  IMPLEMENTS: 43,
  OPENING_BRACE: 48,
}, {
  SCHEMA: -42,
  ENUM: -42,
  TYPE: -42,
  SCALAR: -42,
  UNION: -42,
  STRING_VALUE: -42,
  BLOCK_STRING_VALUE: -42,
  $: -42,
}, {
  EQUALS: 49,
}, {
  CLOSING_BRACE: 50,
  MUTATION: 38,
  QUERY: 37,
  SUBSCRIPTION: 39,
}, {
  CLOSING_BRACE: -8,
  QUERY: -8,
  MUTATION: -8,
  SUBSCRIPTION: -8,
}, {
  COLON: 52,
}, {
  COLON: 53,
}, {
  COLON: 54,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 58,
  STRING_VALUE: 7,
}, {
  OPENING_BRACE: 59,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  AMPERSAND: 64,
  NAME: 66,
}, {
  BAR: 68,
  NAME: 70,
}, {
  CLOSING_BRACE: 71,
  MUTATION: 38,
  QUERY: 37,
  SUBSCRIPTION: 39,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 58,
  STRING_VALUE: 7,
}, {
  OPENING_BRACE: 73,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  BAR: 76,
  NAME: 70,
}, {
  SCHEMA: -7,
  ENUM: -7,
  TYPE: -7,
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
  NAME: 77,
}, {
  NAME: 78,
}, {
  NAME: 79,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 80,
  NAME: 58,
  STRING_VALUE: 7,
}, {
  CLOSING_BRACE: -19,
  NAME: -19,
  STRING_VALUE: -19,
  BLOCK_STRING_VALUE: -19,
}, {
  NAME: 82,
}, {
  CLOSING_BRACE: -22,
  NAME: -22,
  STRING_VALUE: -22,
  BLOCK_STRING_VALUE: -22,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 84,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  CLOSING_BRACE: -31,
  NAME: -31,
  STRING_VALUE: -31,
  BLOCK_STRING_VALUE: -31,
}, {
  NAME: 86,
}, {
  COLON: 88,
  OPENING_PAREN: 89,
}, {
  NAME: 66,
}, {
  AMPERSAND: 91,
  OPENING_BRACE: -28,
}, {
  AMPERSAND: -29,
  OPENING_BRACE: -29,
}, {
  BAR: 92,
  SCHEMA: -46,
  ENUM: -46,
  TYPE: -46,
  SCALAR: -46,
  UNION: -46,
  STRING_VALUE: -46,
  BLOCK_STRING_VALUE: -46,
  $: -46,
}, {
  NAME: 70,
}, {
  BAR: -48,
  SCHEMA: -48,
  ENUM: -48,
  TYPE: -48,
  SCALAR: -48,
  UNION: -48,
  STRING_VALUE: -48,
  BLOCK_STRING_VALUE: -48,
  $: -48,
}, {
  BAR: -50,
  SCHEMA: -50,
  ENUM: -50,
  TYPE: -50,
  SCALAR: -50,
  UNION: -50,
  STRING_VALUE: -50,
  BLOCK_STRING_VALUE: -50,
  $: -50,
}, {
  SCHEMA: -6,
  ENUM: -6,
  TYPE: -6,
  SCALAR: -6,
  UNION: -6,
  STRING_VALUE: -6,
  BLOCK_STRING_VALUE: -6,
  $: -6,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 94,
  NAME: 58,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 96,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  BAR: 92,
  SCHEMA: -44,
  ENUM: -44,
  TYPE: -44,
  SCALAR: -44,
  UNION: -44,
  STRING_VALUE: -44,
  BLOCK_STRING_VALUE: -44,
  $: -44,
}, {
  NAME: 70,
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
  SCHEMA: -18,
  ENUM: -18,
  TYPE: -18,
  SCALAR: -18,
  UNION: -18,
  STRING_VALUE: -18,
  BLOCK_STRING_VALUE: -18,
  $: -18,
}, {
  CLOSING_BRACE: -20,
  NAME: -20,
  STRING_VALUE: -20,
  BLOCK_STRING_VALUE: -20,
}, {
  CLOSING_BRACE: -21,
  NAME: -21,
  STRING_VALUE: -21,
  BLOCK_STRING_VALUE: -21,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 98,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  SCHEMA: -26,
  ENUM: -26,
  TYPE: -26,
  SCALAR: -26,
  UNION: -26,
  STRING_VALUE: -26,
  BLOCK_STRING_VALUE: -26,
  $: -26,
}, {
  CLOSING_BRACE: -32,
  NAME: -32,
  STRING_VALUE: -32,
  BLOCK_STRING_VALUE: -32,
}, {
  COLON: 100,
  OPENING_PAREN: 89,
}, {
  COLON: 101,
}, {
  NAME: 104,
  OPENING_BRACKET: 107,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 111,
  STRING_VALUE: 7,
}, {
  AMPERSAND: 91,
  OPENING_BRACE: -27,
}, {
  NAME: 112,
}, {
  NAME: 70,
}, {
  BAR: 92,
  SCHEMA: -47,
  ENUM: -47,
  TYPE: -47,
  SCALAR: -47,
  UNION: -47,
  STRING_VALUE: -47,
  BLOCK_STRING_VALUE: -47,
  $: -47,
}, {
  SCHEMA: -17,
  ENUM: -17,
  TYPE: -17,
  SCALAR: -17,
  UNION: -17,
  STRING_VALUE: -17,
  BLOCK_STRING_VALUE: -17,
  $: -17,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 114,
  NAME: 63,
  STRING_VALUE: 7,
}, {
  SCHEMA: -24,
  ENUM: -24,
  TYPE: -24,
  SCALAR: -24,
  UNION: -24,
  STRING_VALUE: -24,
  BLOCK_STRING_VALUE: -24,
  $: -24,
}, {
  BAR: 92,
  SCHEMA: -45,
  ENUM: -45,
  TYPE: -45,
  SCALAR: -45,
  UNION: -45,
  STRING_VALUE: -45,
  BLOCK_STRING_VALUE: -45,
  $: -45,
}, {
  SCHEMA: -25,
  ENUM: -25,
  TYPE: -25,
  SCALAR: -25,
  UNION: -25,
  STRING_VALUE: -25,
  BLOCK_STRING_VALUE: -25,
  $: -25,
}, {
  COLON: 115,
}, {
  NAME: 104,
  OPENING_BRACKET: 107,
}, {
  NAME: 104,
  OPENING_BRACKET: 107,
}, {
  CLOSING_BRACE: -36,
  NAME: -36,
  STRING_VALUE: -36,
  BLOCK_STRING_VALUE: -36,
}, {
  BANG: 118,
  CLOSING_BRACE: -54,
  NAME: -54,
  STRING_VALUE: -54,
  BLOCK_STRING_VALUE: -54,
  CLOSING_BRACKET: -54,
  CLOSING_PAREN: -54,
}, {
  BANG: -57,
  CLOSING_BRACE: -57,
  NAME: -57,
  STRING_VALUE: -57,
  BLOCK_STRING_VALUE: -57,
  CLOSING_BRACKET: -57,
  CLOSING_PAREN: -57,
}, {
  CLOSING_BRACE: -55,
  NAME: -55,
  STRING_VALUE: -55,
  BLOCK_STRING_VALUE: -55,
  CLOSING_BRACKET: -55,
  CLOSING_PAREN: -55,
}, {
  BANG: 119,
  CLOSING_BRACE: -56,
  NAME: -56,
  STRING_VALUE: -56,
  BLOCK_STRING_VALUE: -56,
  CLOSING_BRACKET: -56,
  CLOSING_PAREN: -56,
}, {
  NAME: 104,
  OPENING_BRACKET: 107,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_PAREN: 121,
  NAME: 111,
  STRING_VALUE: 7,
}, {
  CLOSING_PAREN: -38,
  NAME: -38,
  STRING_VALUE: -38,
  BLOCK_STRING_VALUE: -38,
}, {
  NAME: 123,
}, {
  COLON: 124,
}, {
  AMPERSAND: -30,
  OPENING_BRACE: -30,
}, {
  BAR: -49,
  SCHEMA: -49,
  ENUM: -49,
  TYPE: -49,
  SCALAR: -49,
  UNION: -49,
  STRING_VALUE: -49,
  BLOCK_STRING_VALUE: -49,
  $: -49,
}, {
  SCHEMA: -23,
  ENUM: -23,
  TYPE: -23,
  SCALAR: -23,
  UNION: -23,
  STRING_VALUE: -23,
  BLOCK_STRING_VALUE: -23,
  $: -23,
}, {
  NAME: 104,
  OPENING_BRACKET: 107,
}, {
  CLOSING_BRACE: -35,
  NAME: -35,
  STRING_VALUE: -35,
  BLOCK_STRING_VALUE: -35,
}, {
  CLOSING_BRACE: -34,
  NAME: -34,
  STRING_VALUE: -34,
  BLOCK_STRING_VALUE: -34,
}, {
  CLOSING_BRACE: -58,
  NAME: -58,
  STRING_VALUE: -58,
  BLOCK_STRING_VALUE: -58,
  CLOSING_BRACKET: -58,
  CLOSING_PAREN: -58,
}, {
  CLOSING_BRACE: -59,
  NAME: -59,
  STRING_VALUE: -59,
  BLOCK_STRING_VALUE: -59,
  CLOSING_BRACKET: -59,
  CLOSING_PAREN: -59,
}, {
  CLOSING_BRACKET: 126,
}, {
  COLON: -37,
}, {
  CLOSING_PAREN: -39,
  NAME: -39,
  STRING_VALUE: -39,
  BLOCK_STRING_VALUE: -39,
}, {
  COLON: 127,
}, {
  NAME: 104,
  OPENING_BRACKET: 107,
}, {
  CLOSING_BRACE: -33,
  NAME: -33,
  STRING_VALUE: -33,
  BLOCK_STRING_VALUE: -33,
}, {
  BANG: -60,
  CLOSING_BRACE: -60,
  NAME: -60,
  STRING_VALUE: -60,
  BLOCK_STRING_VALUE: -60,
  CLOSING_BRACKET: -60,
  CLOSING_PAREN: -60,
}, {
  NAME: 104,
  OPENING_BRACKET: 107,
}, {
  CLOSING_PAREN: -41,
  NAME: -41,
  STRING_VALUE: -41,
  BLOCK_STRING_VALUE: -41,
}, {
  CLOSING_PAREN: -40,
  NAME: -40,
  STRING_VALUE: -40,
  BLOCK_STRING_VALUE: -40,
}];
const gotos: Array<Gotos> = [
  {
    Description: 5,
    EnumTypeDefinition: 11,
    ObjectTypeDefinition: 13,
    ScalarTypeDefinition: 15,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 3,
    TypeSystemDefinitionList: 2,
    TypeSystemDocument: 1,
    UnionTypeDefinition: 17,
  },
  {
    Description: 5,
    EnumTypeDefinition: 11,
    ObjectTypeDefinition: 13,
    ScalarTypeDefinition: 15,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 19,
    UnionTypeDefinition: 17,
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
  {},
  {},
  {},
  {},
  {},
  {
    OperationTypeList: 35,
    OperationTypeListItem: 36,
  },
  {},
  {
    Implements: 41,
  },
  {},
  {},
  {
    OperationTypeList: 45,
    OperationTypeListItem: 36,
  },
  {},
  {
    Implements: 47,
  },
  {},
  {},
  {
    OperationTypeListItem: 51,
  },
  {},
  {},
  {},
  {},
  {
    Description: 57,
    EnumValuesList: 55,
    EnumValuesListItem: 56,
    StringValue: 6,
  },
  {},
  {
    Description: 62,
    FieldDefinition: 61,
    FieldDefinitionList: 60,
    StringValue: 6,
  },
  {
    ImplementsList: 65,
  },
  {
    UnionTypeList: 67,
    UnionTypeListItem: 69,
  },
  {
    OperationTypeListItem: 51,
  },
  {
    Description: 57,
    EnumValuesList: 72,
    EnumValuesListItem: 56,
    StringValue: 6,
  },
  {},
  {
    Description: 62,
    FieldDefinition: 61,
    FieldDefinitionList: 74,
    StringValue: 6,
  },
  {
    UnionTypeList: 75,
    UnionTypeListItem: 69,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Description: 57,
    EnumValuesListItem: 81,
    StringValue: 6,
  },
  {},
  {},
  {},
  {
    Description: 62,
    FieldDefinition: 61,
    FieldDefinitionList: 83,
    StringValue: 6,
  },
  {
    Description: 62,
    FieldDefinition: 85,
    StringValue: 6,
  },
  {},
  {},
  {
    Arguments: 87,
  },
  {
    ImplementsList: 90,
  },
  {},
  {},
  {},
  {
    UnionTypeList: 93,
    UnionTypeListItem: 69,
  },
  {},
  {},
  {},
  {
    Description: 57,
    EnumValuesListItem: 81,
    StringValue: 6,
  },
  {
    Description: 62,
    FieldDefinition: 61,
    FieldDefinitionList: 95,
    StringValue: 6,
  },
  {
    Description: 62,
    FieldDefinition: 85,
    StringValue: 6,
  },
  {},
  {
    UnionTypeList: 97,
    UnionTypeListItem: 69,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    Description: 62,
    FieldDefinition: 85,
    StringValue: 6,
  },
  {},
  {},
  {
    Arguments: 99,
  },
  {},
  {
    ListType: 106,
    NamedType: 103,
    NonNullType: 105,
    Type: 102,
  },
  {
    Description: 110,
    InputValueDefinition: 109,
    InputValueDefinitionList: 108,
    StringValue: 6,
  },
  {},
  {},
  {
    UnionTypeListItem: 113,
  },
  {},
  {},
  {
    Description: 62,
    FieldDefinition: 85,
    StringValue: 6,
  },
  {},
  {},
  {},
  {},
  {
    ListType: 106,
    NamedType: 103,
    NonNullType: 105,
    Type: 116,
  },
  {
    ListType: 106,
    NamedType: 103,
    NonNullType: 105,
    Type: 117,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListType: 106,
    NamedType: 103,
    NonNullType: 105,
    Type: 120,
  },
  {
    Description: 110,
    InputValueDefinition: 122,
    StringValue: 6,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ListType: 106,
    NamedType: 103,
    NonNullType: 105,
    Type: 125,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ListType: 106,
    NamedType: 103,
    NonNullType: 105,
    Type: 128,
  },
  {},
  {},
  {
    ListType: 106,
    NamedType: 103,
    NonNullType: 105,
    Type: 129,
  },
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
  production: 'TypeDefinition',
  pop: 1,
  action: r15,
}, {
  production: 'TypeDefinition',
  pop: 1,
  action: r16,
}, {
  production: 'EnumTypeDefinition',
  pop: 6,
  action: r17,
}, {
  production: 'EnumTypeDefinition',
  pop: 5,
  action: r18,
}, {
  production: 'EnumValuesList',
  pop: 1,
  action: r19,
}, {
  production: 'EnumValuesList',
  pop: 2,
  action: r20,
}, {
  production: 'EnumValuesListItem',
  pop: 2,
  action: r21,
}, {
  production: 'EnumValuesListItem',
  pop: 1,
  action: r22,
}, {
  production: 'ObjectTypeDefinition',
  pop: 7,
  action: r23,
}, {
  production: 'ObjectTypeDefinition',
  pop: 6,
  action: r24,
}, {
  production: 'ObjectTypeDefinition',
  pop: 6,
  action: r25,
}, {
  production: 'ObjectTypeDefinition',
  pop: 5,
  action: r26,
}, {
  production: 'Implements',
  pop: 3,
  action: r27,
}, {
  production: 'Implements',
  pop: 2,
  action: r28,
}, {
  production: 'ImplementsList',
  pop: 1,
  action: r29,
}, {
  production: 'ImplementsList',
  pop: 3,
  action: r30,
}, {
  production: 'FieldDefinitionList',
  pop: 1,
  action: r31,
}, {
  production: 'FieldDefinitionList',
  pop: 2,
  action: r32,
}, {
  production: 'FieldDefinition',
  pop: 5,
  action: r33,
}, {
  production: 'FieldDefinition',
  pop: 4,
  action: r34,
}, {
  production: 'FieldDefinition',
  pop: 4,
  action: r35,
}, {
  production: 'FieldDefinition',
  pop: 3,
  action: r36,
}, {
  production: 'Arguments',
  pop: 3,
  action: r37,
}, {
  production: 'InputValueDefinitionList',
  pop: 1,
  action: r38,
}, {
  production: 'InputValueDefinitionList',
  pop: 2,
  action: r39,
}, {
  production: 'InputValueDefinition',
  pop: 4,
  action: r40,
}, {
  production: 'InputValueDefinition',
  pop: 3,
  action: r41,
}, {
  production: 'ScalarTypeDefinition',
  pop: 3,
  action: r42,
}, {
  production: 'ScalarTypeDefinition',
  pop: 2,
  action: r43,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r44,
}, {
  production: 'UnionTypeDefinition',
  pop: 6,
  action: r45,
}, {
  production: 'UnionTypeDefinition',
  pop: 4,
  action: r46,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r47,
}, {
  production: 'UnionTypeList',
  pop: 1,
  action: r48,
}, {
  production: 'UnionTypeList',
  pop: 3,
  action: r49,
}, {
  production: 'UnionTypeListItem',
  pop: 1,
  action: r50,
}, {
  production: 'Description',
  pop: 1,
  action: r51,
}, {
  production: 'StringValue',
  pop: 1,
  action: r52,
}, {
  production: 'StringValue',
  pop: 1,
  action: r53,
}, {
  production: 'Type',
  pop: 1,
  action: r54,
}, {
  production: 'Type',
  pop: 1,
  action: r55,
}, {
  production: 'Type',
  pop: 1,
  action: r56,
}, {
  production: 'NamedType',
  pop: 1,
  action: r57,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r58,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r59,
}, {
  production: 'ListType',
  pop: 3,
  action: r60,
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
