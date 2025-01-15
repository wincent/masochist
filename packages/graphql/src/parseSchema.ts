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
function r17($1) {
  return $1;
}
function r18($1, _$2, $3, _$4, $5) {
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
function r19(_$1, $2, _$3, $4) {
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
function r20($1) {
  return [$1];
}
function r21($1, $2) {
  $1.push($2);
  return $1;
}
function r22($1, $2) {
  return {
    kind: 'ENUM_VALUE',
    name: $2.contents,
    description: $1.value.trim(),
  };
}
function r23($1) {
  return {
    kind: 'ENUM_VALUE',
    name: $1.contents,
  };
}
function r24($1, _$2, $3, _$4, $5) {
  return {
    kind: 'INTERFACE',
    name: $3.contents,
    description: $1.value.trim(),
    fields: $5,
  };
}
function r25(_$1, $2, _$3, $4) {
  return {
    kind: 'INTERFACE',
    name: $2.contents,
    fields: $4,
  };
}
function r26($1, _$2, $3, $4, _$5, $6) {
  return {
    kind: 'OBJECT_TYPE',
    name: $3.contents,
    description: $1.value.trim(),
    implements: $4,
    fields: $6,
  };
}
function r27($1, _$2, $3, _$4, $5) {
  return {
    kind: 'OBJECT_TYPE',
    name: $3.contents,
    description: $1.value.trim(),
    implements: [],
    fields: $5,
  };
}
function r28(_$1, $2, $3, _$4, $5) {
  return {
    kind: 'OBJECT_TYPE',
    name: $2.contents,
    implements: $3,
    fields: $5,
  };
}
function r29(_$1, $2, _$3, $4) {
  return {
    kind: 'OBJECT_TYPE',
    name: $2.contents,
    implements: [],
    fields: $4,
  };
}
function r30(_$1, _$2, $3) {
  return $3;
}
function r31(_$1, $2) {
  return $2;
}
function r32($1) {
  return [$1.contents];
}
function r33($1, _$2, $3) {
  $1.push($3.contents);
  return $1;
}
function r34($1) {
  return [$1];
}
function r35($1, $2) {
  $1.push($2);
  return $1;
}
function r36($1, $2, $3, _$4, $5) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    description: $1.value.trim(),
    arguments: $3,
    type: $5,
  };
}
function r37(_$1, $2, _$3, $4) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    arguments: $2,
    type: $4,
  };
}
function r38($1, $2, _$3, $4) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    description: $1.value.trim(),
    arguments: [],
    type: $4,
  };
}
function r39($1, _$2, $3) {
  return {
    kind: 'FIELD',
    name: $1.contents,
    arguments: [],
    type: $3,
  };
}
function r40(_$1, $2) {
  return $2;
}
function r41($1) {
  return [$1];
}
function r42($1, $2) {
  $1.push($2);
  return $1;
}
function r43($1, $2, _$3, $4) {
  return {
    kind: 'INPUT_VALUE',
    name: $2.contents,
    // TODO: going to have to dedent these because, unlike the other
    // descriptions, these appear indented.
    description: $1.value.trim(),
    type: $4,
  };
}
function r44($1, _$2, $3) {
  return {
    kind: 'INPUT_VALUE',
    name: $1.contents,
    type: $3,
  };
}
function r45($1, _$2, $3) {
  return {
    kind: 'SCALAR',
    name: $3.contents,
    description: $1.value.trim(),
  };
}
function r46(_$1, $2) {
  return {
    kind: 'SCALAR',
    name: $2.contents,
  };
}
function r47($1, _$2, $3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $5,
    description: $1.value.trim(),
  };
}
function r48($1, _$2, $3, _$4, _$5, $6) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $6,
    description: $1.value.trim(),
  };
}
function r49(_$1, $2, _$3, $4) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $4,
  };
}
function r50(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $5,
  };
}
function r51($1) {
  return [$1];
}
function r52($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r53($1) {
  return $1.contents;
}
function r54($1) {
  return $1;
}
function r55($1) {
  return {
    kind: 'STRING',
    block: false,
    value: $1.contents.slice(1, -1),
  };
}
function r56($1) {
  return {
    kind: 'STRING',
    block: true,
    value: $1.contents.slice(3, -3),
  };
}
function r57($1) {
  return $1;
}
function r58($1) {
  return $1;
}
function r59($1) {
  return $1;
}
function r60($1) {
  return {
    kind: 'NAMED_TYPE',
    name: $1.contents,
  };
}
function r61($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r62($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r63(_$1, $2) {
  return {
    kind: 'LIST_TYPE',
    type: $2,
  };
}
const actions: Array<{[token: string]: number}> = [{
  BLOCK_STRING_VALUE: 8,
  ENUM: 12,
  INTERFACE: 14,
  SCALAR: 18,
  SCHEMA: 9,
  STRING_VALUE: 7,
  TYPE: 16,
  UNION: 20,
}, {
  $: 0,
}, {
  BLOCK_STRING_VALUE: 8,
  ENUM: 12,
  INTERFACE: 14,
  SCALAR: 18,
  SCHEMA: 9,
  STRING_VALUE: 7,
  TYPE: 16,
  UNION: 20,
  $: -1,
}, {
  SCHEMA: -2,
  ENUM: -2,
  INTERFACE: -2,
  TYPE: -2,
  SCALAR: -2,
  UNION: -2,
  STRING_VALUE: -2,
  BLOCK_STRING_VALUE: -2,
  $: -2,
}, {
  SCHEMA: -4,
  ENUM: -4,
  INTERFACE: -4,
  TYPE: -4,
  SCALAR: -4,
  UNION: -4,
  STRING_VALUE: -4,
  BLOCK_STRING_VALUE: -4,
  $: -4,
}, {
  ENUM: 23,
  INTERFACE: 24,
  SCALAR: 26,
  SCHEMA: 22,
  TYPE: 25,
  UNION: 27,
}, {
  SCHEMA: -54,
  ENUM: -54,
  INTERFACE: -54,
  TYPE: -54,
  SCALAR: -54,
  UNION: -54,
  NAME: -54,
}, {
  SCHEMA: -55,
  ENUM: -55,
  INTERFACE: -55,
  TYPE: -55,
  SCALAR: -55,
  UNION: -55,
  NAME: -55,
}, {
  SCHEMA: -56,
  ENUM: -56,
  INTERFACE: -56,
  TYPE: -56,
  SCALAR: -56,
  UNION: -56,
  NAME: -56,
}, {
  OPENING_BRACE: 28,
}, {
  SCHEMA: -5,
  ENUM: -5,
  INTERFACE: -5,
  TYPE: -5,
  SCALAR: -5,
  UNION: -5,
  STRING_VALUE: -5,
  BLOCK_STRING_VALUE: -5,
  $: -5,
}, {
  SCHEMA: -13,
  ENUM: -13,
  INTERFACE: -13,
  TYPE: -13,
  SCALAR: -13,
  UNION: -13,
  STRING_VALUE: -13,
  BLOCK_STRING_VALUE: -13,
  $: -13,
}, {
  NAME: 29,
}, {
  SCHEMA: -14,
  ENUM: -14,
  INTERFACE: -14,
  TYPE: -14,
  SCALAR: -14,
  UNION: -14,
  STRING_VALUE: -14,
  BLOCK_STRING_VALUE: -14,
  $: -14,
}, {
  NAME: 30,
}, {
  SCHEMA: -15,
  ENUM: -15,
  INTERFACE: -15,
  TYPE: -15,
  SCALAR: -15,
  UNION: -15,
  STRING_VALUE: -15,
  BLOCK_STRING_VALUE: -15,
  $: -15,
}, {
  NAME: 31,
}, {
  SCHEMA: -16,
  ENUM: -16,
  INTERFACE: -16,
  TYPE: -16,
  SCALAR: -16,
  UNION: -16,
  STRING_VALUE: -16,
  BLOCK_STRING_VALUE: -16,
  $: -16,
}, {
  NAME: 32,
}, {
  SCHEMA: -17,
  ENUM: -17,
  INTERFACE: -17,
  TYPE: -17,
  SCALAR: -17,
  UNION: -17,
  STRING_VALUE: -17,
  BLOCK_STRING_VALUE: -17,
  $: -17,
}, {
  NAME: 33,
}, {
  SCHEMA: -3,
  ENUM: -3,
  INTERFACE: -3,
  TYPE: -3,
  SCALAR: -3,
  UNION: -3,
  STRING_VALUE: -3,
  BLOCK_STRING_VALUE: -3,
  $: -3,
}, {
  OPENING_BRACE: 34,
}, {
  NAME: 35,
}, {
  NAME: 36,
}, {
  NAME: 37,
}, {
  NAME: 38,
}, {
  NAME: 39,
}, {
  MUTATION: 43,
  QUERY: 42,
  SUBSCRIPTION: 44,
}, {
  OPENING_BRACE: 45,
}, {
  OPENING_BRACE: 46,
}, {
  IMPLEMENTS: 49,
  OPENING_BRACE: 48,
}, {
  SCHEMA: -46,
  ENUM: -46,
  INTERFACE: -46,
  TYPE: -46,
  SCALAR: -46,
  UNION: -46,
  STRING_VALUE: -46,
  BLOCK_STRING_VALUE: -46,
  $: -46,
}, {
  EQUALS: 50,
}, {
  MUTATION: 43,
  QUERY: 42,
  SUBSCRIPTION: 44,
}, {
  OPENING_BRACE: 52,
}, {
  OPENING_BRACE: 53,
}, {
  IMPLEMENTS: 49,
  OPENING_BRACE: 55,
}, {
  SCHEMA: -45,
  ENUM: -45,
  INTERFACE: -45,
  TYPE: -45,
  SCALAR: -45,
  UNION: -45,
  STRING_VALUE: -45,
  BLOCK_STRING_VALUE: -45,
  $: -45,
}, {
  EQUALS: 56,
}, {
  CLOSING_BRACE: 57,
  MUTATION: 43,
  QUERY: 42,
  SUBSCRIPTION: 44,
}, {
  CLOSING_BRACE: -8,
  QUERY: -8,
  MUTATION: -8,
  SUBSCRIPTION: -8,
}, {
  COLON: 59,
}, {
  COLON: 60,
}, {
  COLON: 61,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 65,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  OPENING_BRACE: 70,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  AMPERSAND: 72,
  NAME: 74,
}, {
  BAR: 76,
  NAME: 78,
}, {
  CLOSING_BRACE: 79,
  MUTATION: 43,
  QUERY: 42,
  SUBSCRIPTION: 44,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 65,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  OPENING_BRACE: 82,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  BAR: 85,
  NAME: 78,
}, {
  SCHEMA: -7,
  ENUM: -7,
  INTERFACE: -7,
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
  NAME: 86,
}, {
  NAME: 87,
}, {
  NAME: 88,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 89,
  NAME: 65,
  STRING_VALUE: 7,
}, {
  CLOSING_BRACE: -20,
  NAME: -20,
  STRING_VALUE: -20,
  BLOCK_STRING_VALUE: -20,
}, {
  NAME: 91,
}, {
  CLOSING_BRACE: -23,
  NAME: -23,
  STRING_VALUE: -23,
  BLOCK_STRING_VALUE: -23,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 92,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  CLOSING_BRACE: -34,
  NAME: -34,
  STRING_VALUE: -34,
  BLOCK_STRING_VALUE: -34,
}, {
  NAME: 94,
}, {
  COLON: 96,
  OPENING_PAREN: 97,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 99,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  NAME: 74,
}, {
  AMPERSAND: 101,
  OPENING_BRACE: -31,
}, {
  AMPERSAND: -32,
  OPENING_BRACE: -32,
}, {
  BAR: 102,
  SCHEMA: -49,
  ENUM: -49,
  INTERFACE: -49,
  TYPE: -49,
  SCALAR: -49,
  UNION: -49,
  STRING_VALUE: -49,
  BLOCK_STRING_VALUE: -49,
  $: -49,
}, {
  NAME: 78,
}, {
  BAR: -51,
  SCHEMA: -51,
  ENUM: -51,
  INTERFACE: -51,
  TYPE: -51,
  SCALAR: -51,
  UNION: -51,
  STRING_VALUE: -51,
  BLOCK_STRING_VALUE: -51,
  $: -51,
}, {
  BAR: -53,
  SCHEMA: -53,
  ENUM: -53,
  INTERFACE: -53,
  TYPE: -53,
  SCALAR: -53,
  UNION: -53,
  STRING_VALUE: -53,
  BLOCK_STRING_VALUE: -53,
  $: -53,
}, {
  SCHEMA: -6,
  ENUM: -6,
  INTERFACE: -6,
  TYPE: -6,
  SCALAR: -6,
  UNION: -6,
  STRING_VALUE: -6,
  BLOCK_STRING_VALUE: -6,
  $: -6,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 104,
  NAME: 65,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 105,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 107,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  BAR: 102,
  SCHEMA: -47,
  ENUM: -47,
  INTERFACE: -47,
  TYPE: -47,
  SCALAR: -47,
  UNION: -47,
  STRING_VALUE: -47,
  BLOCK_STRING_VALUE: -47,
  $: -47,
}, {
  NAME: 78,
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
  SCHEMA: -19,
  ENUM: -19,
  INTERFACE: -19,
  TYPE: -19,
  SCALAR: -19,
  UNION: -19,
  STRING_VALUE: -19,
  BLOCK_STRING_VALUE: -19,
  $: -19,
}, {
  CLOSING_BRACE: -21,
  NAME: -21,
  STRING_VALUE: -21,
  BLOCK_STRING_VALUE: -21,
}, {
  CLOSING_BRACE: -22,
  NAME: -22,
  STRING_VALUE: -22,
  BLOCK_STRING_VALUE: -22,
}, {
  SCHEMA: -25,
  ENUM: -25,
  INTERFACE: -25,
  TYPE: -25,
  SCALAR: -25,
  UNION: -25,
  STRING_VALUE: -25,
  BLOCK_STRING_VALUE: -25,
  $: -25,
}, {
  CLOSING_BRACE: -35,
  NAME: -35,
  STRING_VALUE: -35,
  BLOCK_STRING_VALUE: -35,
}, {
  COLON: 110,
  OPENING_PAREN: 97,
}, {
  COLON: 111,
}, {
  NAME: 114,
  OPENING_BRACKET: 117,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 121,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 122,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  SCHEMA: -29,
  ENUM: -29,
  INTERFACE: -29,
  TYPE: -29,
  SCALAR: -29,
  UNION: -29,
  STRING_VALUE: -29,
  BLOCK_STRING_VALUE: -29,
  $: -29,
}, {
  AMPERSAND: 101,
  OPENING_BRACE: -30,
}, {
  NAME: 123,
}, {
  NAME: 78,
}, {
  BAR: 102,
  SCHEMA: -50,
  ENUM: -50,
  INTERFACE: -50,
  TYPE: -50,
  SCALAR: -50,
  UNION: -50,
  STRING_VALUE: -50,
  BLOCK_STRING_VALUE: -50,
  $: -50,
}, {
  SCHEMA: -18,
  ENUM: -18,
  INTERFACE: -18,
  TYPE: -18,
  SCALAR: -18,
  UNION: -18,
  STRING_VALUE: -18,
  BLOCK_STRING_VALUE: -18,
  $: -18,
}, {
  SCHEMA: -24,
  ENUM: -24,
  INTERFACE: -24,
  TYPE: -24,
  SCALAR: -24,
  UNION: -24,
  STRING_VALUE: -24,
  BLOCK_STRING_VALUE: -24,
  $: -24,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 125,
  NAME: 69,
  STRING_VALUE: 7,
}, {
  SCHEMA: -27,
  ENUM: -27,
  INTERFACE: -27,
  TYPE: -27,
  SCALAR: -27,
  UNION: -27,
  STRING_VALUE: -27,
  BLOCK_STRING_VALUE: -27,
  $: -27,
}, {
  BAR: 102,
  SCHEMA: -48,
  ENUM: -48,
  INTERFACE: -48,
  TYPE: -48,
  SCALAR: -48,
  UNION: -48,
  STRING_VALUE: -48,
  BLOCK_STRING_VALUE: -48,
  $: -48,
}, {
  COLON: 126,
}, {
  NAME: 114,
  OPENING_BRACKET: 117,
}, {
  NAME: 114,
  OPENING_BRACKET: 117,
}, {
  CLOSING_BRACE: -39,
  NAME: -39,
  STRING_VALUE: -39,
  BLOCK_STRING_VALUE: -39,
}, {
  BANG: 129,
  CLOSING_BRACE: -57,
  NAME: -57,
  STRING_VALUE: -57,
  BLOCK_STRING_VALUE: -57,
  CLOSING_BRACKET: -57,
  CLOSING_PAREN: -57,
}, {
  BANG: -60,
  CLOSING_BRACE: -60,
  NAME: -60,
  STRING_VALUE: -60,
  BLOCK_STRING_VALUE: -60,
  CLOSING_BRACKET: -60,
  CLOSING_PAREN: -60,
}, {
  CLOSING_BRACE: -58,
  NAME: -58,
  STRING_VALUE: -58,
  BLOCK_STRING_VALUE: -58,
  CLOSING_BRACKET: -58,
  CLOSING_PAREN: -58,
}, {
  BANG: 130,
  CLOSING_BRACE: -59,
  NAME: -59,
  STRING_VALUE: -59,
  BLOCK_STRING_VALUE: -59,
  CLOSING_BRACKET: -59,
  CLOSING_PAREN: -59,
}, {
  NAME: 114,
  OPENING_BRACKET: 117,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_PAREN: 132,
  NAME: 121,
  STRING_VALUE: 7,
}, {
  CLOSING_PAREN: -41,
  NAME: -41,
  STRING_VALUE: -41,
  BLOCK_STRING_VALUE: -41,
}, {
  NAME: 134,
}, {
  COLON: 135,
}, {
  SCHEMA: -28,
  ENUM: -28,
  INTERFACE: -28,
  TYPE: -28,
  SCALAR: -28,
  UNION: -28,
  STRING_VALUE: -28,
  BLOCK_STRING_VALUE: -28,
  $: -28,
}, {
  AMPERSAND: -33,
  OPENING_BRACE: -33,
}, {
  BAR: -52,
  SCHEMA: -52,
  ENUM: -52,
  INTERFACE: -52,
  TYPE: -52,
  SCALAR: -52,
  UNION: -52,
  STRING_VALUE: -52,
  BLOCK_STRING_VALUE: -52,
  $: -52,
}, {
  SCHEMA: -26,
  ENUM: -26,
  INTERFACE: -26,
  TYPE: -26,
  SCALAR: -26,
  UNION: -26,
  STRING_VALUE: -26,
  BLOCK_STRING_VALUE: -26,
  $: -26,
}, {
  NAME: 114,
  OPENING_BRACKET: 117,
}, {
  CLOSING_BRACE: -38,
  NAME: -38,
  STRING_VALUE: -38,
  BLOCK_STRING_VALUE: -38,
}, {
  CLOSING_BRACE: -37,
  NAME: -37,
  STRING_VALUE: -37,
  BLOCK_STRING_VALUE: -37,
}, {
  CLOSING_BRACE: -61,
  NAME: -61,
  STRING_VALUE: -61,
  BLOCK_STRING_VALUE: -61,
  CLOSING_BRACKET: -61,
  CLOSING_PAREN: -61,
}, {
  CLOSING_BRACE: -62,
  NAME: -62,
  STRING_VALUE: -62,
  BLOCK_STRING_VALUE: -62,
  CLOSING_BRACKET: -62,
  CLOSING_PAREN: -62,
}, {
  CLOSING_BRACKET: 137,
}, {
  COLON: -40,
}, {
  CLOSING_PAREN: -42,
  NAME: -42,
  STRING_VALUE: -42,
  BLOCK_STRING_VALUE: -42,
}, {
  COLON: 138,
}, {
  NAME: 114,
  OPENING_BRACKET: 117,
}, {
  CLOSING_BRACE: -36,
  NAME: -36,
  STRING_VALUE: -36,
  BLOCK_STRING_VALUE: -36,
}, {
  BANG: -63,
  CLOSING_BRACE: -63,
  NAME: -63,
  STRING_VALUE: -63,
  BLOCK_STRING_VALUE: -63,
  CLOSING_BRACKET: -63,
  CLOSING_PAREN: -63,
}, {
  NAME: 114,
  OPENING_BRACKET: 117,
}, {
  CLOSING_PAREN: -44,
  NAME: -44,
  STRING_VALUE: -44,
  BLOCK_STRING_VALUE: -44,
}, {
  CLOSING_PAREN: -43,
  NAME: -43,
  STRING_VALUE: -43,
  BLOCK_STRING_VALUE: -43,
}];
const gotos: Array<Gotos> = [
  {
    Description: 5,
    EnumTypeDefinition: 11,
    InterfaceTypeDefinition: 13,
    ObjectTypeDefinition: 15,
    ScalarTypeDefinition: 17,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 3,
    TypeSystemDefinitionList: 2,
    TypeSystemDocument: 1,
    UnionTypeDefinition: 19,
  },
  {},
  {
    Description: 5,
    EnumTypeDefinition: 11,
    InterfaceTypeDefinition: 13,
    ObjectTypeDefinition: 15,
    ScalarTypeDefinition: 17,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 21,
    UnionTypeDefinition: 19,
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
  {},
  {},
  {
    OperationTypeList: 40,
    OperationTypeListItem: 41,
  },
  {},
  {},
  {
    Implements: 47,
  },
  {},
  {},
  {
    OperationTypeList: 51,
    OperationTypeListItem: 41,
  },
  {},
  {},
  {
    Implements: 54,
  },
  {},
  {},
  {
    OperationTypeListItem: 58,
  },
  {},
  {},
  {},
  {},
  {
    Description: 64,
    EnumValuesList: 62,
    EnumValuesListItem: 63,
    StringValue: 6,
  },
  {
    Description: 68,
    FieldDefinition: 67,
    FieldDefinitionList: 66,
    StringValue: 6,
  },
  {},
  {
    Description: 68,
    FieldDefinition: 67,
    FieldDefinitionList: 71,
    StringValue: 6,
  },
  {
    ImplementsList: 73,
  },
  {
    UnionTypeList: 75,
    UnionTypeListItem: 77,
  },
  {
    OperationTypeListItem: 58,
  },
  {
    Description: 64,
    EnumValuesList: 80,
    EnumValuesListItem: 63,
    StringValue: 6,
  },
  {
    Description: 68,
    FieldDefinition: 67,
    FieldDefinitionList: 81,
    StringValue: 6,
  },
  {},
  {
    Description: 68,
    FieldDefinition: 67,
    FieldDefinitionList: 83,
    StringValue: 6,
  },
  {
    UnionTypeList: 84,
    UnionTypeListItem: 77,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Description: 64,
    EnumValuesListItem: 90,
    StringValue: 6,
  },
  {},
  {},
  {},
  {
    Description: 68,
    FieldDefinition: 93,
    StringValue: 6,
  },
  {},
  {},
  {
    Arguments: 95,
  },
  {
    Description: 68,
    FieldDefinition: 67,
    FieldDefinitionList: 98,
    StringValue: 6,
  },
  {
    Description: 68,
    FieldDefinition: 93,
    StringValue: 6,
  },
  {
    ImplementsList: 100,
  },
  {},
  {},
  {},
  {
    UnionTypeList: 103,
    UnionTypeListItem: 77,
  },
  {},
  {},
  {},
  {
    Description: 64,
    EnumValuesListItem: 90,
    StringValue: 6,
  },
  {
    Description: 68,
    FieldDefinition: 93,
    StringValue: 6,
  },
  {
    Description: 68,
    FieldDefinition: 67,
    FieldDefinitionList: 106,
    StringValue: 6,
  },
  {
    Description: 68,
    FieldDefinition: 93,
    StringValue: 6,
  },
  {},
  {
    UnionTypeList: 108,
    UnionTypeListItem: 77,
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
    Arguments: 109,
  },
  {},
  {
    ListType: 116,
    NamedType: 113,
    NonNullType: 115,
    Type: 112,
  },
  {
    Description: 120,
    InputValueDefinition: 119,
    InputValueDefinitionList: 118,
    StringValue: 6,
  },
  {
    Description: 68,
    FieldDefinition: 93,
    StringValue: 6,
  },
  {},
  {},
  {},
  {
    UnionTypeListItem: 124,
  },
  {},
  {},
  {},
  {
    Description: 68,
    FieldDefinition: 93,
    StringValue: 6,
  },
  {},
  {},
  {},
  {
    ListType: 116,
    NamedType: 113,
    NonNullType: 115,
    Type: 127,
  },
  {
    ListType: 116,
    NamedType: 113,
    NonNullType: 115,
    Type: 128,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListType: 116,
    NamedType: 113,
    NonNullType: 115,
    Type: 131,
  },
  {
    Description: 120,
    InputValueDefinition: 133,
    StringValue: 6,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ListType: 116,
    NamedType: 113,
    NonNullType: 115,
    Type: 136,
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
    ListType: 116,
    NamedType: 113,
    NonNullType: 115,
    Type: 139,
  },
  {},
  {},
  {
    ListType: 116,
    NamedType: 113,
    NonNullType: 115,
    Type: 140,
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
  production: 'TypeDefinition',
  pop: 1,
  action: r17,
}, {
  production: 'EnumTypeDefinition',
  pop: 6,
  action: r18,
}, {
  production: 'EnumTypeDefinition',
  pop: 5,
  action: r19,
}, {
  production: 'EnumValuesList',
  pop: 1,
  action: r20,
}, {
  production: 'EnumValuesList',
  pop: 2,
  action: r21,
}, {
  production: 'EnumValuesListItem',
  pop: 2,
  action: r22,
}, {
  production: 'EnumValuesListItem',
  pop: 1,
  action: r23,
}, {
  production: 'InterfaceTypeDefinition',
  pop: 6,
  action: r24,
}, {
  production: 'InterfaceTypeDefinition',
  pop: 5,
  action: r25,
}, {
  production: 'ObjectTypeDefinition',
  pop: 7,
  action: r26,
}, {
  production: 'ObjectTypeDefinition',
  pop: 6,
  action: r27,
}, {
  production: 'ObjectTypeDefinition',
  pop: 6,
  action: r28,
}, {
  production: 'ObjectTypeDefinition',
  pop: 5,
  action: r29,
}, {
  production: 'Implements',
  pop: 3,
  action: r30,
}, {
  production: 'Implements',
  pop: 2,
  action: r31,
}, {
  production: 'ImplementsList',
  pop: 1,
  action: r32,
}, {
  production: 'ImplementsList',
  pop: 3,
  action: r33,
}, {
  production: 'FieldDefinitionList',
  pop: 1,
  action: r34,
}, {
  production: 'FieldDefinitionList',
  pop: 2,
  action: r35,
}, {
  production: 'FieldDefinition',
  pop: 5,
  action: r36,
}, {
  production: 'FieldDefinition',
  pop: 4,
  action: r37,
}, {
  production: 'FieldDefinition',
  pop: 4,
  action: r38,
}, {
  production: 'FieldDefinition',
  pop: 3,
  action: r39,
}, {
  production: 'Arguments',
  pop: 3,
  action: r40,
}, {
  production: 'InputValueDefinitionList',
  pop: 1,
  action: r41,
}, {
  production: 'InputValueDefinitionList',
  pop: 2,
  action: r42,
}, {
  production: 'InputValueDefinition',
  pop: 4,
  action: r43,
}, {
  production: 'InputValueDefinition',
  pop: 3,
  action: r44,
}, {
  production: 'ScalarTypeDefinition',
  pop: 3,
  action: r45,
}, {
  production: 'ScalarTypeDefinition',
  pop: 2,
  action: r46,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r47,
}, {
  production: 'UnionTypeDefinition',
  pop: 6,
  action: r48,
}, {
  production: 'UnionTypeDefinition',
  pop: 4,
  action: r49,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r50,
}, {
  production: 'UnionTypeList',
  pop: 1,
  action: r51,
}, {
  production: 'UnionTypeList',
  pop: 3,
  action: r52,
}, {
  production: 'UnionTypeListItem',
  pop: 1,
  action: r53,
}, {
  production: 'Description',
  pop: 1,
  action: r54,
}, {
  production: 'StringValue',
  pop: 1,
  action: r55,
}, {
  production: 'StringValue',
  pop: 1,
  action: r56,
}, {
  production: 'Type',
  pop: 1,
  action: r57,
}, {
  production: 'Type',
  pop: 1,
  action: r58,
}, {
  production: 'Type',
  pop: 1,
  action: r59,
}, {
  production: 'NamedType',
  pop: 1,
  action: r60,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r61,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r62,
}, {
  production: 'ListType',
  pop: 3,
  action: r63,
}];
const EOF = new Token('$', -1, -1, '');
export default function parseSchema(input: string) {
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
      const rule = rules[Math.abs(action)];
      const production = rule.production;
      const pop = rule.pop;
      const code: any = rule.action;
      const popped: Array<Production | Token | null> = new Array(pop);
      for (let i = 0; i < pop; i++) {
        const last = stack.pop()!;
        popped[pop - i - 1] = last[0];
      }
      const next = stack[stack.length - 1][1];
      const target = gotos[next][production];
      if (pop === 0) {
        stack.push([code(), target]);
      } else if (pop === 1) {
        stack.push([code(popped[0]), target]);
      } else if (pop === 2) {
        stack.push([code(popped[0], popped[1]), target]);
      } else if (pop === 3) {
        stack.push([code(popped[0], popped[1], popped[2]), target]);
      } else if (pop === 4) {
        stack.push([code(popped[0], popped[1], popped[2], popped[3]), target]);
      } else if (pop === 5) {
        stack.push([
          code(popped[0], popped[1], popped[2], popped[3], popped[4]),
          target,
        ]);
      } else if (pop === 6) {
        stack.push([
          code(
            popped[0],
            popped[1],
            popped[2],
            popped[3],
            popped[4],
            popped[5],
          ),
          target,
        ]);
      } else if (pop === 7) {
        stack.push([
          code(
            popped[0],
            popped[1],
            popped[2],
            popped[3],
            popped[4],
            popped[5],
            popped[6],
          ),
          target,
        ]);
      }
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
