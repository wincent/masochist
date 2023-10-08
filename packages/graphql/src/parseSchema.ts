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
function r16($1, _$2, $3, $4, _$5, $6) {
  return {
    kind: 'OBJECT_TYPE',
    name: $3.contents,
    description: $1.value.trim(),
    implements: $4,
    fields: $6,
  };
}
function r17($1, _$2, $3, _$4, $5) {
  return {
    kind: 'OBJECT_TYPE',
    name: $3.contents,
    description: $1.value.trim(),
    implements: [],
    fields: $5,
  };
}
function r18(_$1, $2, $3, _$4, $5) {
  return {
    kind: 'OBJECT_TYPE',
    name: $2.contents,
    implements: $3,
    fields: $5,
  };
}
function r19(_$1, $2, _$3, $4) {
  return {
    kind: 'OBJECT_TYPE',
    name: $2.contents,
    implements: [],
    fields: $4,
  };
}
function r20(_$1, _$2, $3) {
  return $3;
}
function r21(_$1, $2) {
  return $2;
}
function r22($1) {
  return [$1.contents];
}
function r23($1, _$2, $3) {
  $1.push($3.contents);
  return $1;
}
function r24($1) {
  return [$1];
}
function r25($1, $2) {
  $1.push($2);
  return $1;
}
function r26($1, $2, $3, _$4, $5) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    description: $1.value.trim(),
    arguments: $3,
    type: $5,
  };
}
function r27(_$1, $2, _$3, $4) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    arguments: $2,
    type: $4,
  };
}
function r28($1, $2, _$3, $4) {
  return {
    kind: 'FIELD',
    name: $2.contents,
    description: $1.value.trim(),
    arguments: [],
    type: $4,
  };
}
function r29($1, _$2, $3) {
  return {
    kind: 'FIELD',
    name: $1.contents,
    arguments: [],
    type: $3,
  };
}
function r30(_$1, $2) {
  return $2;
}
function r31($1) {
  return [$1];
}
function r32($1, $2) {
  $1.push($2);
  return $1;
}
function r33($1, $2, _$3, $4) {
  return {
    kind: 'INPUT_VALUE',
    name: $2.contents,
    // TODO: going to have to dedent these because, unlike the other
    // descriptions, these appear indented.
    description: $1.value.trim(),
    type: $4,
  };
}
function r34($1, _$2, $3) {
  return {
    kind: 'INPUT_VALUE',
    name: $1.contents,
    type: $3,
  };
}
function r35($1, _$2, $3) {
  return {
    kind: 'SCALAR',
    name: $3.contents,
    description: $1.value.trim(),
  };
}
function r36(_$1, $2) {
  return {
    kind: 'SCALAR',
    name: $2.contents,
  };
}
function r37($1, _$2, $3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $5,
    description: $1.value.trim(),
  };
}
function r38($1, _$2, $3, _$4, _$5, $6) {
  return {
    kind: 'UNION',
    name: $3.contents,
    members: $6,
    description: $1.value.trim(),
  };
}
function r39(_$1, $2, _$3, $4) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $4,
  };
}
function r40(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'UNION',
    name: $2.contents,
    members: $5,
  };
}
function r41($1) {
  return [$1];
}
function r42($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r43($1) {
  return $1.contents;
}
function r44($1) {
  return $1;
}
function r45($1) {
  return {
    kind: 'STRING',
    block: false,
    value: $1.contents.slice(1, -1),
  };
}
function r46($1) {
  return {
    kind: 'STRING',
    block: true,
    value: $1.contents.slice(3, -3),
  };
}
function r47($1) {
  return $1;
}
function r48($1) {
  return $1;
}
function r49($1) {
  return $1;
}
function r50($1) {
  return {
    kind: 'NAMED_TYPE',
    name: $1.contents,
  };
}
function r51($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r52($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r53(_$1, $2) {
  return {
    kind: 'LIST_TYPE',
    type: $2,
  };
}
const actions: Array<{[token: string]: number}> = [{
  BLOCK_STRING_VALUE: 8,
  SCALAR: 14,
  SCHEMA: 9,
  STRING_VALUE: 7,
  TYPE: 12,
  UNION: 16,
}, {
  $: 0,
  BLOCK_STRING_VALUE: 8,
  SCALAR: 14,
  SCHEMA: 9,
  STRING_VALUE: 7,
  TYPE: 12,
  UNION: 16,
}, {
  SCHEMA: -1,
  TYPE: -1,
  SCALAR: -1,
  UNION: -1,
  STRING_VALUE: -1,
  BLOCK_STRING_VALUE: -1,
  $: -1,
}, {
  SCHEMA: -2,
  TYPE: -2,
  SCALAR: -2,
  UNION: -2,
  STRING_VALUE: -2,
  BLOCK_STRING_VALUE: -2,
  $: -2,
}, {
  SCHEMA: -4,
  TYPE: -4,
  SCALAR: -4,
  UNION: -4,
  STRING_VALUE: -4,
  BLOCK_STRING_VALUE: -4,
  $: -4,
}, {
  SCALAR: 20,
  SCHEMA: 18,
  TYPE: 19,
  UNION: 21,
}, {
  SCHEMA: -44,
  TYPE: -44,
  SCALAR: -44,
  UNION: -44,
  NAME: -44,
}, {
  SCHEMA: -45,
  TYPE: -45,
  SCALAR: -45,
  UNION: -45,
  NAME: -45,
}, {
  SCHEMA: -46,
  TYPE: -46,
  SCALAR: -46,
  UNION: -46,
  NAME: -46,
}, {
  OPENING_BRACE: 22,
}, {
  SCHEMA: -5,
  TYPE: -5,
  SCALAR: -5,
  UNION: -5,
  STRING_VALUE: -5,
  BLOCK_STRING_VALUE: -5,
  $: -5,
}, {
  SCHEMA: -13,
  TYPE: -13,
  SCALAR: -13,
  UNION: -13,
  STRING_VALUE: -13,
  BLOCK_STRING_VALUE: -13,
  $: -13,
}, {
  NAME: 23,
}, {
  SCHEMA: -14,
  TYPE: -14,
  SCALAR: -14,
  UNION: -14,
  STRING_VALUE: -14,
  BLOCK_STRING_VALUE: -14,
  $: -14,
}, {
  NAME: 24,
}, {
  SCHEMA: -15,
  TYPE: -15,
  SCALAR: -15,
  UNION: -15,
  STRING_VALUE: -15,
  BLOCK_STRING_VALUE: -15,
  $: -15,
}, {
  NAME: 25,
}, {
  SCHEMA: -3,
  TYPE: -3,
  SCALAR: -3,
  UNION: -3,
  STRING_VALUE: -3,
  BLOCK_STRING_VALUE: -3,
  $: -3,
}, {
  OPENING_BRACE: 26,
}, {
  NAME: 27,
}, {
  NAME: 28,
}, {
  NAME: 29,
}, {
  MUTATION: 33,
  QUERY: 32,
  SUBSCRIPTION: 34,
}, {
  IMPLEMENTS: 37,
  OPENING_BRACE: 36,
}, {
  SCHEMA: -36,
  TYPE: -36,
  SCALAR: -36,
  UNION: -36,
  STRING_VALUE: -36,
  BLOCK_STRING_VALUE: -36,
  $: -36,
}, {
  EQUALS: 38,
}, {
  MUTATION: 33,
  QUERY: 32,
  SUBSCRIPTION: 34,
}, {
  IMPLEMENTS: 37,
  OPENING_BRACE: 41,
}, {
  SCHEMA: -35,
  TYPE: -35,
  SCALAR: -35,
  UNION: -35,
  STRING_VALUE: -35,
  BLOCK_STRING_VALUE: -35,
  $: -35,
}, {
  EQUALS: 42,
}, {
  CLOSING_BRACE: 43,
  MUTATION: 33,
  QUERY: 32,
  SUBSCRIPTION: 34,
}, {
  CLOSING_BRACE: -8,
  QUERY: -8,
  MUTATION: -8,
  SUBSCRIPTION: -8,
}, {
  COLON: 45,
}, {
  COLON: 46,
}, {
  COLON: 47,
}, {
  OPENING_BRACE: 48,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  AMPERSAND: 53,
  NAME: 55,
}, {
  BAR: 57,
  NAME: 59,
}, {
  CLOSING_BRACE: 60,
  MUTATION: 33,
  QUERY: 32,
  SUBSCRIPTION: 34,
}, {
  OPENING_BRACE: 61,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  BAR: 64,
  NAME: 59,
}, {
  SCHEMA: -7,
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
  NAME: 65,
}, {
  NAME: 66,
}, {
  NAME: 67,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 69,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  CLOSING_BRACE: -24,
  NAME: -24,
  STRING_VALUE: -24,
  BLOCK_STRING_VALUE: -24,
}, {
  NAME: 71,
}, {
  COLON: 73,
  OPENING_PAREN: 74,
}, {
  NAME: 55,
}, {
  AMPERSAND: 76,
  OPENING_BRACE: -21,
}, {
  AMPERSAND: -22,
  OPENING_BRACE: -22,
}, {
  BAR: 77,
  SCHEMA: -39,
  TYPE: -39,
  SCALAR: -39,
  UNION: -39,
  STRING_VALUE: -39,
  BLOCK_STRING_VALUE: -39,
  $: -39,
}, {
  NAME: 59,
}, {
  BAR: -41,
  SCHEMA: -41,
  TYPE: -41,
  SCALAR: -41,
  UNION: -41,
  STRING_VALUE: -41,
  BLOCK_STRING_VALUE: -41,
  $: -41,
}, {
  BAR: -43,
  SCHEMA: -43,
  TYPE: -43,
  SCALAR: -43,
  UNION: -43,
  STRING_VALUE: -43,
  BLOCK_STRING_VALUE: -43,
  $: -43,
}, {
  SCHEMA: -6,
  TYPE: -6,
  SCALAR: -6,
  UNION: -6,
  STRING_VALUE: -6,
  BLOCK_STRING_VALUE: -6,
  $: -6,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 80,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  BAR: 77,
  SCHEMA: -37,
  TYPE: -37,
  SCALAR: -37,
  UNION: -37,
  STRING_VALUE: -37,
  BLOCK_STRING_VALUE: -37,
  $: -37,
}, {
  NAME: 59,
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
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 82,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  SCHEMA: -19,
  TYPE: -19,
  SCALAR: -19,
  UNION: -19,
  STRING_VALUE: -19,
  BLOCK_STRING_VALUE: -19,
  $: -19,
}, {
  CLOSING_BRACE: -25,
  NAME: -25,
  STRING_VALUE: -25,
  BLOCK_STRING_VALUE: -25,
}, {
  COLON: 84,
  OPENING_PAREN: 74,
}, {
  COLON: 85,
}, {
  NAME: 88,
  OPENING_BRACKET: 91,
}, {
  BLOCK_STRING_VALUE: 8,
  NAME: 95,
  STRING_VALUE: 7,
}, {
  AMPERSAND: 76,
  OPENING_BRACE: -20,
}, {
  NAME: 96,
}, {
  NAME: 59,
}, {
  BAR: 77,
  SCHEMA: -40,
  TYPE: -40,
  SCALAR: -40,
  UNION: -40,
  STRING_VALUE: -40,
  BLOCK_STRING_VALUE: -40,
  $: -40,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_BRACE: 98,
  NAME: 52,
  STRING_VALUE: 7,
}, {
  SCHEMA: -17,
  TYPE: -17,
  SCALAR: -17,
  UNION: -17,
  STRING_VALUE: -17,
  BLOCK_STRING_VALUE: -17,
  $: -17,
}, {
  BAR: 77,
  SCHEMA: -38,
  TYPE: -38,
  SCALAR: -38,
  UNION: -38,
  STRING_VALUE: -38,
  BLOCK_STRING_VALUE: -38,
  $: -38,
}, {
  SCHEMA: -18,
  TYPE: -18,
  SCALAR: -18,
  UNION: -18,
  STRING_VALUE: -18,
  BLOCK_STRING_VALUE: -18,
  $: -18,
}, {
  COLON: 99,
}, {
  NAME: 88,
  OPENING_BRACKET: 91,
}, {
  NAME: 88,
  OPENING_BRACKET: 91,
}, {
  CLOSING_BRACE: -29,
  NAME: -29,
  STRING_VALUE: -29,
  BLOCK_STRING_VALUE: -29,
}, {
  BANG: 102,
  CLOSING_BRACE: -47,
  NAME: -47,
  STRING_VALUE: -47,
  BLOCK_STRING_VALUE: -47,
  CLOSING_BRACKET: -47,
  CLOSING_PAREN: -47,
}, {
  BANG: -50,
  CLOSING_BRACE: -50,
  NAME: -50,
  STRING_VALUE: -50,
  BLOCK_STRING_VALUE: -50,
  CLOSING_BRACKET: -50,
  CLOSING_PAREN: -50,
}, {
  CLOSING_BRACE: -48,
  NAME: -48,
  STRING_VALUE: -48,
  BLOCK_STRING_VALUE: -48,
  CLOSING_BRACKET: -48,
  CLOSING_PAREN: -48,
}, {
  BANG: 103,
  CLOSING_BRACE: -49,
  NAME: -49,
  STRING_VALUE: -49,
  BLOCK_STRING_VALUE: -49,
  CLOSING_BRACKET: -49,
  CLOSING_PAREN: -49,
}, {
  NAME: 88,
  OPENING_BRACKET: 91,
}, {
  BLOCK_STRING_VALUE: 8,
  CLOSING_PAREN: 105,
  NAME: 95,
  STRING_VALUE: 7,
}, {
  CLOSING_PAREN: -31,
  NAME: -31,
  STRING_VALUE: -31,
  BLOCK_STRING_VALUE: -31,
}, {
  NAME: 107,
}, {
  COLON: 108,
}, {
  AMPERSAND: -23,
  OPENING_BRACE: -23,
}, {
  BAR: -42,
  SCHEMA: -42,
  TYPE: -42,
  SCALAR: -42,
  UNION: -42,
  STRING_VALUE: -42,
  BLOCK_STRING_VALUE: -42,
  $: -42,
}, {
  SCHEMA: -16,
  TYPE: -16,
  SCALAR: -16,
  UNION: -16,
  STRING_VALUE: -16,
  BLOCK_STRING_VALUE: -16,
  $: -16,
}, {
  NAME: 88,
  OPENING_BRACKET: 91,
}, {
  CLOSING_BRACE: -28,
  NAME: -28,
  STRING_VALUE: -28,
  BLOCK_STRING_VALUE: -28,
}, {
  CLOSING_BRACE: -27,
  NAME: -27,
  STRING_VALUE: -27,
  BLOCK_STRING_VALUE: -27,
}, {
  CLOSING_BRACE: -51,
  NAME: -51,
  STRING_VALUE: -51,
  BLOCK_STRING_VALUE: -51,
  CLOSING_BRACKET: -51,
  CLOSING_PAREN: -51,
}, {
  CLOSING_BRACE: -52,
  NAME: -52,
  STRING_VALUE: -52,
  BLOCK_STRING_VALUE: -52,
  CLOSING_BRACKET: -52,
  CLOSING_PAREN: -52,
}, {
  CLOSING_BRACKET: 110,
}, {
  COLON: -30,
}, {
  CLOSING_PAREN: -32,
  NAME: -32,
  STRING_VALUE: -32,
  BLOCK_STRING_VALUE: -32,
}, {
  COLON: 111,
}, {
  NAME: 88,
  OPENING_BRACKET: 91,
}, {
  CLOSING_BRACE: -26,
  NAME: -26,
  STRING_VALUE: -26,
  BLOCK_STRING_VALUE: -26,
}, {
  BANG: -53,
  CLOSING_BRACE: -53,
  NAME: -53,
  STRING_VALUE: -53,
  BLOCK_STRING_VALUE: -53,
  CLOSING_BRACKET: -53,
  CLOSING_PAREN: -53,
}, {
  NAME: 88,
  OPENING_BRACKET: 91,
}, {
  CLOSING_PAREN: -34,
  NAME: -34,
  STRING_VALUE: -34,
  BLOCK_STRING_VALUE: -34,
}, {
  CLOSING_PAREN: -33,
  NAME: -33,
  STRING_VALUE: -33,
  BLOCK_STRING_VALUE: -33,
}];
const gotos: Array<Gotos> = [
  {
    Description: 5,
    ObjectTypeDefinition: 11,
    ScalarTypeDefinition: 13,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 3,
    TypeSystemDefinitionList: 2,
    TypeSystemDocument: 1,
    UnionTypeDefinition: 15,
  },
  {
    Description: 5,
    ObjectTypeDefinition: 11,
    ScalarTypeDefinition: 13,
    SchemaDefinition: 4,
    StringValue: 6,
    TypeDefinition: 10,
    TypeSystemDefinition: 17,
    UnionTypeDefinition: 15,
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
  {
    OperationTypeList: 30,
    OperationTypeListItem: 31,
  },
  {
    Implements: 35,
  },
  {},
  {},
  {
    OperationTypeList: 39,
    OperationTypeListItem: 31,
  },
  {
    Implements: 40,
  },
  {},
  {},
  {
    OperationTypeListItem: 44,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Description: 51,
    FieldDefinition: 50,
    FieldDefinitionList: 49,
    StringValue: 6,
  },
  {
    ImplementsList: 54,
  },
  {
    UnionTypeList: 56,
    UnionTypeListItem: 58,
  },
  {
    OperationTypeListItem: 44,
  },
  {},
  {
    Description: 51,
    FieldDefinition: 50,
    FieldDefinitionList: 62,
    StringValue: 6,
  },
  {
    UnionTypeList: 63,
    UnionTypeListItem: 58,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Description: 51,
    FieldDefinition: 50,
    FieldDefinitionList: 68,
    StringValue: 6,
  },
  {
    Description: 51,
    FieldDefinition: 70,
    StringValue: 6,
  },
  {},
  {},
  {
    Arguments: 72,
  },
  {
    ImplementsList: 75,
  },
  {},
  {},
  {},
  {
    UnionTypeList: 78,
    UnionTypeListItem: 58,
  },
  {},
  {},
  {},
  {
    Description: 51,
    FieldDefinition: 50,
    FieldDefinitionList: 79,
    StringValue: 6,
  },
  {
    Description: 51,
    FieldDefinition: 70,
    StringValue: 6,
  },
  {},
  {
    UnionTypeList: 81,
    UnionTypeListItem: 58,
  },
  {},
  {},
  {},
  {
    Description: 51,
    FieldDefinition: 70,
    StringValue: 6,
  },
  {},
  {},
  {
    Arguments: 83,
  },
  {},
  {
    ListType: 90,
    NamedType: 87,
    NonNullType: 89,
    Type: 86,
  },
  {
    Description: 94,
    InputValueDefinition: 93,
    InputValueDefinitionList: 92,
    StringValue: 6,
  },
  {},
  {},
  {
    UnionTypeListItem: 97,
  },
  {},
  {
    Description: 51,
    FieldDefinition: 70,
    StringValue: 6,
  },
  {},
  {},
  {},
  {},
  {
    ListType: 90,
    NamedType: 87,
    NonNullType: 89,
    Type: 100,
  },
  {
    ListType: 90,
    NamedType: 87,
    NonNullType: 89,
    Type: 101,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListType: 90,
    NamedType: 87,
    NonNullType: 89,
    Type: 104,
  },
  {
    Description: 94,
    InputValueDefinition: 106,
    StringValue: 6,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ListType: 90,
    NamedType: 87,
    NonNullType: 89,
    Type: 109,
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
    ListType: 90,
    NamedType: 87,
    NonNullType: 89,
    Type: 112,
  },
  {},
  {},
  {
    ListType: 90,
    NamedType: 87,
    NonNullType: 89,
    Type: 113,
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
  production: 'ObjectTypeDefinition',
  pop: 7,
  action: r16,
}, {
  production: 'ObjectTypeDefinition',
  pop: 6,
  action: r17,
}, {
  production: 'ObjectTypeDefinition',
  pop: 6,
  action: r18,
}, {
  production: 'ObjectTypeDefinition',
  pop: 5,
  action: r19,
}, {
  production: 'Implements',
  pop: 3,
  action: r20,
}, {
  production: 'Implements',
  pop: 2,
  action: r21,
}, {
  production: 'ImplementsList',
  pop: 1,
  action: r22,
}, {
  production: 'ImplementsList',
  pop: 3,
  action: r23,
}, {
  production: 'FieldDefinitionList',
  pop: 1,
  action: r24,
}, {
  production: 'FieldDefinitionList',
  pop: 2,
  action: r25,
}, {
  production: 'FieldDefinition',
  pop: 5,
  action: r26,
}, {
  production: 'FieldDefinition',
  pop: 4,
  action: r27,
}, {
  production: 'FieldDefinition',
  pop: 4,
  action: r28,
}, {
  production: 'FieldDefinition',
  pop: 3,
  action: r29,
}, {
  production: 'Arguments',
  pop: 3,
  action: r30,
}, {
  production: 'InputValueDefinitionList',
  pop: 1,
  action: r31,
}, {
  production: 'InputValueDefinitionList',
  pop: 2,
  action: r32,
}, {
  production: 'InputValueDefinition',
  pop: 4,
  action: r33,
}, {
  production: 'InputValueDefinition',
  pop: 3,
  action: r34,
}, {
  production: 'ScalarTypeDefinition',
  pop: 3,
  action: r35,
}, {
  production: 'ScalarTypeDefinition',
  pop: 2,
  action: r36,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r37,
}, {
  production: 'UnionTypeDefinition',
  pop: 6,
  action: r38,
}, {
  production: 'UnionTypeDefinition',
  pop: 4,
  action: r39,
}, {
  production: 'UnionTypeDefinition',
  pop: 5,
  action: r40,
}, {
  production: 'UnionTypeList',
  pop: 1,
  action: r41,
}, {
  production: 'UnionTypeList',
  pop: 3,
  action: r42,
}, {
  production: 'UnionTypeListItem',
  pop: 1,
  action: r43,
}, {
  production: 'Description',
  pop: 1,
  action: r44,
}, {
  production: 'StringValue',
  pop: 1,
  action: r45,
}, {
  production: 'StringValue',
  pop: 1,
  action: r46,
}, {
  production: 'Type',
  pop: 1,
  action: r47,
}, {
  production: 'Type',
  pop: 1,
  action: r48,
}, {
  production: 'Type',
  pop: 1,
  action: r49,
}, {
  production: 'NamedType',
  pop: 1,
  action: r50,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r51,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r52,
}, {
  production: 'ListType',
  pop: 3,
  action: r53,
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
