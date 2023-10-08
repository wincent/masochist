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
    kind: 'DOCUMENT',
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
function r7($1, $2, $3, $4, $5) {
  return {
    kind: 'OPERATION',
    name: $2,
    directives: $4,
    selections: $5,
    type: $1,
    variables: $3,
  };
}
function r8($1) {
  return {
    kind: 'OPERATION',
    name: null,
    directives: null,
    selections: $1,
    type: 'QUERY',
    variables: null,
  };
}
function r9() {
  return 'QUERY';
}
function r10() {
  return 'MUTATION';
}
function r11() {
  return 'SUBSCRIPTION';
}
function r12($1) {
  return $1;
}
function r13() {
  return null;
}
function r14($1) {
  return $1.contents;
}
function r15() {
  return 'enum';
}
function r16() {
  return 'fragment';
}
function r17() {
  return 'implements';
}
function r18() {
  return 'interface';
}
function r19() {
  return 'on';
}
function r20() {
  return 'query';
}
function r21() {
  return 'scalar';
}
function r22() {
  return 'schema';
}
function r23() {
  return 'subscription';
}
function r24() {
  return 'type';
}
function r25() {
  return 'union';
}
function r26(_$1, $2) {
  return $2;
}
function r27() {
  return null;
}
function r28($1) {
  return [$1];
}
function r29($1, $2) {
  $1.push($2);
  return $1;
}
function r30($1, _$2, $3, $4, $5) {
  return {
    kind: 'VARIABLE_DEFINITION',
    defaultValue: $4,
    directives: $5,
    type: $3,
    variable: $1,
  };
}
function r31(_$1, $2) {
  return {
    kind: 'VARIABLE',
    name: $2,
  };
}
function r32($1) {
  return $1;
}
function r33($1) {
  return $1;
}
function r34($1) {
  return $1;
}
function r35($1) {
  return {
    kind: 'NAMED_TYPE',
    name: $1,
  };
}
function r36(_$1, $2) {
  return {
    kind: 'LIST_TYPE',
    type: $2,
  };
}
function r37($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r38($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r39(_$1, $2) {
  return $2;
}
function r40() {
  return null;
}
function r41($1) {
  return $1;
}
function r42($1) {
  return $1;
}
function r43($1) {
  return $1;
}
function r44($1) {
  return $1;
}
function r45($1) {
  return $1;
}
function r46($1) {
  {
    const {contents} = $1;

    // TODO: Distinguish between these tokens in the lexer instead?
    if (/^-?\d+$/.test(contents)) {
      return {kind: 'INT', value: parseInt(contents, 10)};
    } else {
      return {kind: 'FLOAT', value: contents};
    }
  }
}
function r47($1) {
  {
    const name = $1;
    if (name === 'true') {
      return {kind: 'BOOLEAN', value: true};
    } else if (name === 'false') {
      return {kind: 'BOOLEAN', value: false};
    } else if (name === 'null') {
      return {kind: 'NULL'};
    } else {
      return {kind: 'ENUM', value: name};
    }
  }
}
function r48() {
  return {
    kind: 'LIST_VALUE',
    value: [],
  };
}
function r49(_$1, $2) {
  return {
    kind: 'LIST_VALUE',
    value: $2,
  };
}
function r50($1) {
  return [$1];
}
function r51($1, $2) {
  $1.push($2);
  return $1;
}
function r52() {
  return {
    kind: 'OBJECT_VALUE',
    fields: [],
  };
}
function r53(_$1, $2) {
  return {
    kind: 'OBJECT_VALUE',
    fields: $2,
  };
}
function r54($1) {
  return [$1];
}
function r55($1, $2) {
  $1.push($2);
  return $1;
}
function r56($1, _$2, $3) {
  return {
    name: $1,
    value: $3,
  };
}
function r57($1) {
  return $1;
}
function r58() {
  return null;
}
function r59($1) {
  return [$1];
}
function r60($1, $2) {
  $1.push($2);
  return $1;
}
function r61(_$1, $2, $3) {
  return {
    kind: 'DIRECTIVE',
    arguments: $3,
    name: $2,
  };
}
function r62($1) {
  return $1;
}
function r63() {
  return null;
}
function r64($1) {
  return [$1];
}
function r65($1, $2) {
  $1.push($2);
  return $1;
}
function r66(_$1, $2, $3) {
  return {
    kind: 'DIRECTIVE',
    arguments: $3,
    name: $2,
  };
}
function r67(_$1, $2) {
  return $2;
}
function r68($1) {
  return $1;
}
function r69() {
  return null;
}
function r70($1) {
  return [$1];
}
function r71($1, $2) {
  $1.push($2);
  return $1;
}
function r72($1) {
  return $1;
}
function r73($1) {
  return $1;
}
function r74($1) {
  return $1;
}
function r75($1, $2, $3, $4) {
  return {
    kind: 'FIELD',
    alias: null,
    arguments: $2,
    directives: $3,
    name: $1,
    selections: $4,
  };
}
function r76($1, $2, $3, $4, $5) {
  return {
    kind: 'FIELD',
    alias: $1,
    arguments: $3,
    directives: $4,
    name: $2,
    selections: $5,
  };
}
function r77($1) {
  return $1;
}
function r78(_$1, $2) {
  return $2;
}
function r79() {
  return null;
}
function r80($1) {
  return [$1];
}
function r81($1, $2) {
  $1.push($2);
  return $1;
}
function r82($1, _$2, $3) {
  return {
    kind: 'ARGUMENT',
    name: $1,
    value: $3,
  };
}
function r83(_$1, $2) {
  return $2;
}
function r84() {
  return null;
}
function r85($1) {
  return [$1];
}
function r86($1, $2) {
  $1.push($2);
  return $1;
}
function r87($1, _$2, $3) {
  return {
    kind: 'ARGUMENT',
    name: $1,
    value: $3,
  };
}
function r88($1) {
  return $1;
}
function r89($1) {
  return $1;
}
function r90($1) {
  return $1;
}
function r91($1) {
  return $1;
}
function r92($1) {
  return $1;
}
function r93($1) {
  return $1;
}
function r94($1) {
  return {
    kind: 'STRING',
    block: false,
    // TODO: consider doing this slice in the lexer
    value: $1.contents.slice(1, -1),
  };
}
function r95($1) {
  return {
    kind: 'STRING',
    block: true,
    // TODO: preprocess value here...
    value: $1.contents,
  };
}
function r96() {
  return {
    kind: 'LIST_VALUE',
    value: [],
  };
}
function r97(_$1, $2) {
  return {
    kind: 'LIST_VALUE',
    value: $2,
  };
}
function r98($1) {
  return [$1];
}
function r99($1, $2) {
  $1.push($2);
  return $1;
}
function r100() {
  return {
    kind: 'OBJECT_VALUE',
    fields: [],
  };
}
function r101(_$1, $2) {
  return {
    kind: 'OBJECT_VALUE',
    fields: $2,
  };
}
function r102($1) {
  return [$1];
}
function r103($1, $2) {
  $1.push($2);
  return $1;
}
function r104($1, _$2, $3) {
  return {
    name: $1,
    value: $3,
  };
}
function r105(_$1, $2, _$3, $4, $5, $6) {
  return {
    kind: 'FRAGMENT',
    directives: $5,
    name: $2,
    on: $4,
    selections: $6,
  };
}
function r106($1) {
  return $1.contents;
}
function r107(_$1, $2, $3) {
  return {
    kind: 'FRAGMENT_SPREAD',
    name: $2,
    directives: $3,
  };
}
function r108(_$1, $2, $3, $4) {
  return {
    kind: 'INLINE_FRAGMENT',
    directives: $3,
    on: $2,
    selections: $4,
  };
}
function r109(_$1, $2) {
  return $2;
}
function r110() {
  return null;
}
const actions: Array<{[token: string]: number}> = [{
  FRAGMENT: 13,
  MUTATION: 8,
  OPENING_BRACE: 11,
  QUERY: 7,
  SUBSCRIPTION: 9,
}, {
  $: 0,
}, {
  FRAGMENT: 13,
  MUTATION: 8,
  OPENING_BRACE: 11,
  QUERY: 7,
  SUBSCRIPTION: 9,
  $: -1,
}, {
  FRAGMENT: -2,
  QUERY: -2,
  MUTATION: -2,
  SUBSCRIPTION: -2,
  OPENING_BRACE: -2,
  $: -2,
}, {
  FRAGMENT: -4,
  QUERY: -4,
  MUTATION: -4,
  SUBSCRIPTION: -4,
  OPENING_BRACE: -4,
  $: -4,
}, {
  FRAGMENT: -6,
  QUERY: -6,
  MUTATION: -6,
  SUBSCRIPTION: -6,
  OPENING_BRACE: -6,
  $: -6,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
  OPENING_PAREN: -13,
  AT: -13,
  OPENING_BRACE: -13,
}, {
  NAME: -9,
  ENUM: -9,
  FRAGMENT: -9,
  IMPLEMENTS: -9,
  INTERFACE: -9,
  ON: -9,
  QUERY: -9,
  SCALAR: -9,
  SCHEMA: -9,
  SUBSCRIPTION: -9,
  TYPE: -9,
  UNION: -9,
  OPENING_PAREN: -9,
  AT: -9,
  OPENING_BRACE: -9,
}, {
  NAME: -10,
  ENUM: -10,
  FRAGMENT: -10,
  IMPLEMENTS: -10,
  INTERFACE: -10,
  ON: -10,
  QUERY: -10,
  SCALAR: -10,
  SCHEMA: -10,
  SUBSCRIPTION: -10,
  TYPE: -10,
  UNION: -10,
  OPENING_PAREN: -10,
  AT: -10,
  OPENING_BRACE: -10,
}, {
  NAME: -11,
  ENUM: -11,
  FRAGMENT: -11,
  IMPLEMENTS: -11,
  INTERFACE: -11,
  ON: -11,
  QUERY: -11,
  SCALAR: -11,
  SCHEMA: -11,
  SUBSCRIPTION: -11,
  TYPE: -11,
  UNION: -11,
  OPENING_PAREN: -11,
  AT: -11,
  OPENING_BRACE: -11,
}, {
  FRAGMENT: -8,
  QUERY: -8,
  MUTATION: -8,
  SUBSCRIPTION: -8,
  OPENING_BRACE: -8,
  $: -8,
}, {
  ELLIPSIS: 35,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  FRAGMENT: -5,
  QUERY: -5,
  MUTATION: -5,
  SUBSCRIPTION: -5,
  OPENING_BRACE: -5,
  $: -5,
}, {
  NAME: 38,
}, {
  FRAGMENT: -3,
  QUERY: -3,
  MUTATION: -3,
  SUBSCRIPTION: -3,
  OPENING_BRACE: -3,
  $: -3,
}, {
  OPENING_PAREN: 40,
  AT: -27,
  OPENING_BRACE: -27,
}, {
  OPENING_PAREN: -12,
  AT: -12,
  OPENING_BRACE: -12,
}, {
  OPENING_PAREN: -14,
  AT: -14,
  OPENING_BRACE: -14,
  COLON: -14,
  CLOSING_BRACE: -14,
  ELLIPSIS: -14,
  NAME: -14,
  ENUM: -14,
  FRAGMENT: -14,
  IMPLEMENTS: -14,
  INTERFACE: -14,
  ON: -14,
  QUERY: -14,
  SCALAR: -14,
  SCHEMA: -14,
  SUBSCRIPTION: -14,
  TYPE: -14,
  UNION: -14,
  CLOSING_PAREN: -14,
  CLOSING_BRACKET: -14,
  DOLLAR: -14,
  NUMBER: -14,
  STRING_VALUE: -14,
  BLOCK_STRING_VALUE: -14,
  OPENING_BRACKET: -14,
  BANG: -14,
  EQUALS: -14,
}, {
  OPENING_PAREN: -15,
  AT: -15,
  OPENING_BRACE: -15,
  COLON: -15,
  CLOSING_BRACE: -15,
  ELLIPSIS: -15,
  NAME: -15,
  ENUM: -15,
  FRAGMENT: -15,
  IMPLEMENTS: -15,
  INTERFACE: -15,
  ON: -15,
  QUERY: -15,
  SCALAR: -15,
  SCHEMA: -15,
  SUBSCRIPTION: -15,
  TYPE: -15,
  UNION: -15,
  CLOSING_PAREN: -15,
  CLOSING_BRACKET: -15,
  DOLLAR: -15,
  NUMBER: -15,
  STRING_VALUE: -15,
  BLOCK_STRING_VALUE: -15,
  OPENING_BRACKET: -15,
  BANG: -15,
  EQUALS: -15,
}, {
  OPENING_PAREN: -16,
  AT: -16,
  OPENING_BRACE: -16,
  COLON: -16,
  CLOSING_BRACE: -16,
  ELLIPSIS: -16,
  NAME: -16,
  ENUM: -16,
  FRAGMENT: -16,
  IMPLEMENTS: -16,
  INTERFACE: -16,
  ON: -16,
  QUERY: -16,
  SCALAR: -16,
  SCHEMA: -16,
  SUBSCRIPTION: -16,
  TYPE: -16,
  UNION: -16,
  CLOSING_PAREN: -16,
  CLOSING_BRACKET: -16,
  DOLLAR: -16,
  NUMBER: -16,
  STRING_VALUE: -16,
  BLOCK_STRING_VALUE: -16,
  OPENING_BRACKET: -16,
  BANG: -16,
  EQUALS: -16,
}, {
  OPENING_PAREN: -17,
  AT: -17,
  OPENING_BRACE: -17,
  COLON: -17,
  CLOSING_BRACE: -17,
  ELLIPSIS: -17,
  NAME: -17,
  ENUM: -17,
  FRAGMENT: -17,
  IMPLEMENTS: -17,
  INTERFACE: -17,
  ON: -17,
  QUERY: -17,
  SCALAR: -17,
  SCHEMA: -17,
  SUBSCRIPTION: -17,
  TYPE: -17,
  UNION: -17,
  CLOSING_PAREN: -17,
  CLOSING_BRACKET: -17,
  DOLLAR: -17,
  NUMBER: -17,
  STRING_VALUE: -17,
  BLOCK_STRING_VALUE: -17,
  OPENING_BRACKET: -17,
  BANG: -17,
  EQUALS: -17,
}, {
  OPENING_PAREN: -18,
  AT: -18,
  OPENING_BRACE: -18,
  COLON: -18,
  CLOSING_BRACE: -18,
  ELLIPSIS: -18,
  NAME: -18,
  ENUM: -18,
  FRAGMENT: -18,
  IMPLEMENTS: -18,
  INTERFACE: -18,
  ON: -18,
  QUERY: -18,
  SCALAR: -18,
  SCHEMA: -18,
  SUBSCRIPTION: -18,
  TYPE: -18,
  UNION: -18,
  CLOSING_PAREN: -18,
  CLOSING_BRACKET: -18,
  DOLLAR: -18,
  NUMBER: -18,
  STRING_VALUE: -18,
  BLOCK_STRING_VALUE: -18,
  OPENING_BRACKET: -18,
  BANG: -18,
  EQUALS: -18,
}, {
  OPENING_PAREN: -19,
  AT: -19,
  OPENING_BRACE: -19,
  COLON: -19,
  CLOSING_BRACE: -19,
  ELLIPSIS: -19,
  NAME: -19,
  ENUM: -19,
  FRAGMENT: -19,
  IMPLEMENTS: -19,
  INTERFACE: -19,
  ON: -19,
  QUERY: -19,
  SCALAR: -19,
  SCHEMA: -19,
  SUBSCRIPTION: -19,
  TYPE: -19,
  UNION: -19,
  CLOSING_PAREN: -19,
  CLOSING_BRACKET: -19,
  DOLLAR: -19,
  NUMBER: -19,
  STRING_VALUE: -19,
  BLOCK_STRING_VALUE: -19,
  OPENING_BRACKET: -19,
  BANG: -19,
  EQUALS: -19,
}, {
  OPENING_PAREN: -20,
  AT: -20,
  OPENING_BRACE: -20,
  COLON: -20,
  CLOSING_BRACE: -20,
  ELLIPSIS: -20,
  NAME: -20,
  ENUM: -20,
  FRAGMENT: -20,
  IMPLEMENTS: -20,
  INTERFACE: -20,
  ON: -20,
  QUERY: -20,
  SCALAR: -20,
  SCHEMA: -20,
  SUBSCRIPTION: -20,
  TYPE: -20,
  UNION: -20,
  CLOSING_PAREN: -20,
  CLOSING_BRACKET: -20,
  DOLLAR: -20,
  NUMBER: -20,
  STRING_VALUE: -20,
  BLOCK_STRING_VALUE: -20,
  OPENING_BRACKET: -20,
  BANG: -20,
  EQUALS: -20,
}, {
  OPENING_PAREN: -21,
  AT: -21,
  OPENING_BRACE: -21,
  COLON: -21,
  CLOSING_BRACE: -21,
  ELLIPSIS: -21,
  NAME: -21,
  ENUM: -21,
  FRAGMENT: -21,
  IMPLEMENTS: -21,
  INTERFACE: -21,
  ON: -21,
  QUERY: -21,
  SCALAR: -21,
  SCHEMA: -21,
  SUBSCRIPTION: -21,
  TYPE: -21,
  UNION: -21,
  CLOSING_PAREN: -21,
  CLOSING_BRACKET: -21,
  DOLLAR: -21,
  NUMBER: -21,
  STRING_VALUE: -21,
  BLOCK_STRING_VALUE: -21,
  OPENING_BRACKET: -21,
  BANG: -21,
  EQUALS: -21,
}, {
  OPENING_PAREN: -22,
  AT: -22,
  OPENING_BRACE: -22,
  COLON: -22,
  CLOSING_BRACE: -22,
  ELLIPSIS: -22,
  NAME: -22,
  ENUM: -22,
  FRAGMENT: -22,
  IMPLEMENTS: -22,
  INTERFACE: -22,
  ON: -22,
  QUERY: -22,
  SCALAR: -22,
  SCHEMA: -22,
  SUBSCRIPTION: -22,
  TYPE: -22,
  UNION: -22,
  CLOSING_PAREN: -22,
  CLOSING_BRACKET: -22,
  DOLLAR: -22,
  NUMBER: -22,
  STRING_VALUE: -22,
  BLOCK_STRING_VALUE: -22,
  OPENING_BRACKET: -22,
  BANG: -22,
  EQUALS: -22,
}, {
  OPENING_PAREN: -23,
  AT: -23,
  OPENING_BRACE: -23,
  COLON: -23,
  CLOSING_BRACE: -23,
  ELLIPSIS: -23,
  NAME: -23,
  ENUM: -23,
  FRAGMENT: -23,
  IMPLEMENTS: -23,
  INTERFACE: -23,
  ON: -23,
  QUERY: -23,
  SCALAR: -23,
  SCHEMA: -23,
  SUBSCRIPTION: -23,
  TYPE: -23,
  UNION: -23,
  CLOSING_PAREN: -23,
  CLOSING_BRACKET: -23,
  DOLLAR: -23,
  NUMBER: -23,
  STRING_VALUE: -23,
  BLOCK_STRING_VALUE: -23,
  OPENING_BRACKET: -23,
  BANG: -23,
  EQUALS: -23,
}, {
  OPENING_PAREN: -24,
  AT: -24,
  OPENING_BRACE: -24,
  COLON: -24,
  CLOSING_BRACE: -24,
  ELLIPSIS: -24,
  NAME: -24,
  ENUM: -24,
  FRAGMENT: -24,
  IMPLEMENTS: -24,
  INTERFACE: -24,
  ON: -24,
  QUERY: -24,
  SCALAR: -24,
  SCHEMA: -24,
  SUBSCRIPTION: -24,
  TYPE: -24,
  UNION: -24,
  CLOSING_PAREN: -24,
  CLOSING_BRACKET: -24,
  DOLLAR: -24,
  NUMBER: -24,
  STRING_VALUE: -24,
  BLOCK_STRING_VALUE: -24,
  OPENING_BRACKET: -24,
  BANG: -24,
  EQUALS: -24,
}, {
  OPENING_PAREN: -25,
  AT: -25,
  OPENING_BRACE: -25,
  COLON: -25,
  CLOSING_BRACE: -25,
  ELLIPSIS: -25,
  NAME: -25,
  ENUM: -25,
  FRAGMENT: -25,
  IMPLEMENTS: -25,
  INTERFACE: -25,
  ON: -25,
  QUERY: -25,
  SCALAR: -25,
  SCHEMA: -25,
  SUBSCRIPTION: -25,
  TYPE: -25,
  UNION: -25,
  CLOSING_PAREN: -25,
  CLOSING_BRACKET: -25,
  DOLLAR: -25,
  NUMBER: -25,
  STRING_VALUE: -25,
  BLOCK_STRING_VALUE: -25,
  OPENING_BRACKET: -25,
  BANG: -25,
  EQUALS: -25,
}, {
  CLOSING_BRACE: 41,
  ELLIPSIS: 35,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_BRACE: -70,
  ELLIPSIS: -70,
  NAME: -70,
  ENUM: -70,
  FRAGMENT: -70,
  IMPLEMENTS: -70,
  INTERFACE: -70,
  ON: -70,
  QUERY: -70,
  SCALAR: -70,
  SCHEMA: -70,
  SUBSCRIPTION: -70,
  TYPE: -70,
  UNION: -70,
}, {
  CLOSING_BRACE: -72,
  ELLIPSIS: -72,
  NAME: -72,
  ENUM: -72,
  FRAGMENT: -72,
  IMPLEMENTS: -72,
  INTERFACE: -72,
  ON: -72,
  QUERY: -72,
  SCALAR: -72,
  SCHEMA: -72,
  SUBSCRIPTION: -72,
  TYPE: -72,
  UNION: -72,
}, {
  COLON: 44,
  OPENING_PAREN: 45,
  AT: -79,
  OPENING_BRACE: -79,
  CLOSING_BRACE: -79,
  ELLIPSIS: -79,
  NAME: -79,
  ENUM: -79,
  FRAGMENT: -79,
  IMPLEMENTS: -79,
  INTERFACE: -79,
  ON: -79,
  QUERY: -79,
  SCALAR: -79,
  SCHEMA: -79,
  SUBSCRIPTION: -79,
  TYPE: -79,
  UNION: -79,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_BRACE: -73,
  ELLIPSIS: -73,
  NAME: -73,
  ENUM: -73,
  FRAGMENT: -73,
  IMPLEMENTS: -73,
  INTERFACE: -73,
  ON: -73,
  QUERY: -73,
  SCALAR: -73,
  SCHEMA: -73,
  SUBSCRIPTION: -73,
  TYPE: -73,
  UNION: -73,
}, {
  NAME: 38,
  ON: 49,
  AT: -110,
  OPENING_BRACE: -110,
}, {
  CLOSING_BRACE: -74,
  ELLIPSIS: -74,
  NAME: -74,
  ENUM: -74,
  FRAGMENT: -74,
  IMPLEMENTS: -74,
  INTERFACE: -74,
  ON: -74,
  QUERY: -74,
  SCALAR: -74,
  SCHEMA: -74,
  SUBSCRIPTION: -74,
  TYPE: -74,
  UNION: -74,
}, {
  ON: 50,
}, {
  ON: -106,
  AT: -106,
  CLOSING_BRACE: -106,
  ELLIPSIS: -106,
  NAME: -106,
  ENUM: -106,
  FRAGMENT: -106,
  IMPLEMENTS: -106,
  INTERFACE: -106,
  QUERY: -106,
  SCALAR: -106,
  SCHEMA: -106,
  SUBSCRIPTION: -106,
  TYPE: -106,
  UNION: -106,
}, {
  AT: 54,
  OPENING_BRACE: -58,
}, {
  DOLLAR: 58,
}, {
  FRAGMENT: -67,
  QUERY: -67,
  MUTATION: -67,
  SUBSCRIPTION: -67,
  OPENING_BRACE: -67,
  $: -67,
  CLOSING_BRACE: -67,
  ELLIPSIS: -67,
  NAME: -67,
  ENUM: -67,
  IMPLEMENTS: -67,
  INTERFACE: -67,
  ON: -67,
  SCALAR: -67,
  SCHEMA: -67,
  TYPE: -67,
  UNION: -67,
}, {
  CLOSING_BRACE: -71,
  ELLIPSIS: -71,
  NAME: -71,
  ENUM: -71,
  FRAGMENT: -71,
  IMPLEMENTS: -71,
  INTERFACE: -71,
  ON: -71,
  QUERY: -71,
  SCALAR: -71,
  SCHEMA: -71,
  SUBSCRIPTION: -71,
  TYPE: -71,
  UNION: -71,
}, {
  AT: 54,
  OPENING_BRACE: -58,
  CLOSING_BRACE: -58,
  ELLIPSIS: -58,
  NAME: -58,
  ENUM: -58,
  FRAGMENT: -58,
  IMPLEMENTS: -58,
  INTERFACE: -58,
  ON: -58,
  QUERY: -58,
  SCALAR: -58,
  SCHEMA: -58,
  SUBSCRIPTION: -58,
  TYPE: -58,
  UNION: -58,
}, {
  NAME: -77,
  ENUM: -77,
  FRAGMENT: -77,
  IMPLEMENTS: -77,
  INTERFACE: -77,
  ON: -77,
  QUERY: -77,
  SCALAR: -77,
  SCHEMA: -77,
  SUBSCRIPTION: -77,
  TYPE: -77,
  UNION: -77,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  OPENING_PAREN: 45,
  AT: -79,
  OPENING_BRACE: -79,
  CLOSING_BRACE: -79,
  ELLIPSIS: -79,
  NAME: -79,
  ENUM: -79,
  FRAGMENT: -79,
  IMPLEMENTS: -79,
  INTERFACE: -79,
  ON: -79,
  QUERY: -79,
  SCALAR: -79,
  SCHEMA: -79,
  SUBSCRIPTION: -79,
  TYPE: -79,
  UNION: -79,
}, {
  AT: 54,
  CLOSING_BRACE: -58,
  ELLIPSIS: -58,
  NAME: -58,
  ENUM: -58,
  FRAGMENT: -58,
  IMPLEMENTS: -58,
  INTERFACE: -58,
  ON: -58,
  QUERY: -58,
  SCALAR: -58,
  SCHEMA: -58,
  SUBSCRIPTION: -58,
  TYPE: -58,
  UNION: -58,
}, {
  AT: 54,
  OPENING_BRACE: -58,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  OPENING_BRACE: 11,
}, {
  AT: 54,
  OPENING_BRACE: -57,
  CLOSING_BRACE: -57,
  ELLIPSIS: -57,
  NAME: -57,
  ENUM: -57,
  FRAGMENT: -57,
  IMPLEMENTS: -57,
  INTERFACE: -57,
  ON: -57,
  QUERY: -57,
  SCALAR: -57,
  SCHEMA: -57,
  SUBSCRIPTION: -57,
  TYPE: -57,
  UNION: -57,
}, {
  AT: -59,
  OPENING_BRACE: -59,
  CLOSING_BRACE: -59,
  ELLIPSIS: -59,
  NAME: -59,
  ENUM: -59,
  FRAGMENT: -59,
  IMPLEMENTS: -59,
  INTERFACE: -59,
  ON: -59,
  QUERY: -59,
  SCALAR: -59,
  SCHEMA: -59,
  SUBSCRIPTION: -59,
  TYPE: -59,
  UNION: -59,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_PAREN: 72,
  DOLLAR: 58,
}, {
  CLOSING_PAREN: -28,
  DOLLAR: -28,
}, {
  COLON: 74,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  OPENING_BRACE: 11,
  CLOSING_BRACE: -69,
  ELLIPSIS: -69,
  NAME: -69,
  ENUM: -69,
  FRAGMENT: -69,
  IMPLEMENTS: -69,
  INTERFACE: -69,
  ON: -69,
  QUERY: -69,
  SCALAR: -69,
  SCHEMA: -69,
  SUBSCRIPTION: -69,
  TYPE: -69,
  UNION: -69,
}, {
  CLOSING_PAREN: 78,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_PAREN: -80,
  NAME: -80,
  ENUM: -80,
  FRAGMENT: -80,
  IMPLEMENTS: -80,
  INTERFACE: -80,
  ON: -80,
  QUERY: -80,
  SCALAR: -80,
  SCHEMA: -80,
  SUBSCRIPTION: -80,
  TYPE: -80,
  UNION: -80,
}, {
  COLON: 80,
}, {
  AT: 54,
  OPENING_BRACE: -58,
  CLOSING_BRACE: -58,
  ELLIPSIS: -58,
  NAME: -58,
  ENUM: -58,
  FRAGMENT: -58,
  IMPLEMENTS: -58,
  INTERFACE: -58,
  ON: -58,
  QUERY: -58,
  SCALAR: -58,
  SCHEMA: -58,
  SUBSCRIPTION: -58,
  TYPE: -58,
  UNION: -58,
}, {
  CLOSING_BRACE: -107,
  ELLIPSIS: -107,
  NAME: -107,
  ENUM: -107,
  FRAGMENT: -107,
  IMPLEMENTS: -107,
  INTERFACE: -107,
  ON: -107,
  QUERY: -107,
  SCALAR: -107,
  SCHEMA: -107,
  SUBSCRIPTION: -107,
  TYPE: -107,
  UNION: -107,
}, {
  OPENING_BRACE: 11,
}, {
  AT: -109,
  OPENING_BRACE: -109,
}, {
  AT: -35,
  OPENING_BRACE: -35,
  BANG: -35,
  EQUALS: -35,
  CLOSING_PAREN: -35,
  DOLLAR: -35,
  CLOSING_BRACKET: -35,
}, {
  AT: 54,
  OPENING_BRACE: -58,
}, {
  FRAGMENT: -7,
  QUERY: -7,
  MUTATION: -7,
  SUBSCRIPTION: -7,
  OPENING_BRACE: -7,
  $: -7,
}, {
  AT: -60,
  OPENING_BRACE: -60,
  CLOSING_BRACE: -60,
  ELLIPSIS: -60,
  NAME: -60,
  ENUM: -60,
  FRAGMENT: -60,
  IMPLEMENTS: -60,
  INTERFACE: -60,
  ON: -60,
  QUERY: -60,
  SCALAR: -60,
  SCHEMA: -60,
  SUBSCRIPTION: -60,
  TYPE: -60,
  UNION: -60,
}, {
  OPENING_PAREN: 45,
  AT: -79,
  OPENING_BRACE: -79,
  CLOSING_BRACE: -79,
  ELLIPSIS: -79,
  NAME: -79,
  ENUM: -79,
  FRAGMENT: -79,
  IMPLEMENTS: -79,
  INTERFACE: -79,
  ON: -79,
  QUERY: -79,
  SCALAR: -79,
  SCHEMA: -79,
  SUBSCRIPTION: -79,
  TYPE: -79,
  UNION: -79,
}, {
  AT: -26,
  OPENING_BRACE: -26,
}, {
  CLOSING_PAREN: -29,
  DOLLAR: -29,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  OPENING_BRACKET: 88,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  COLON: -31,
  CLOSING_PAREN: -31,
  NAME: -31,
  ENUM: -31,
  FRAGMENT: -31,
  IMPLEMENTS: -31,
  INTERFACE: -31,
  ON: -31,
  QUERY: -31,
  SCALAR: -31,
  SCHEMA: -31,
  SUBSCRIPTION: -31,
  TYPE: -31,
  UNION: -31,
  CLOSING_BRACKET: -31,
  DOLLAR: -31,
  NUMBER: -31,
  STRING_VALUE: -31,
  BLOCK_STRING_VALUE: -31,
  OPENING_BRACKET: -31,
  OPENING_BRACE: -31,
  CLOSING_BRACE: -31,
}, {
  CLOSING_BRACE: -75,
  ELLIPSIS: -75,
  NAME: -75,
  ENUM: -75,
  FRAGMENT: -75,
  IMPLEMENTS: -75,
  INTERFACE: -75,
  ON: -75,
  QUERY: -75,
  SCALAR: -75,
  SCHEMA: -75,
  SUBSCRIPTION: -75,
  TYPE: -75,
  UNION: -75,
}, {
  CLOSING_BRACE: -68,
  ELLIPSIS: -68,
  NAME: -68,
  ENUM: -68,
  FRAGMENT: -68,
  IMPLEMENTS: -68,
  INTERFACE: -68,
  ON: -68,
  QUERY: -68,
  SCALAR: -68,
  SCHEMA: -68,
  SUBSCRIPTION: -68,
  TYPE: -68,
  UNION: -68,
}, {
  AT: -78,
  OPENING_BRACE: -78,
  CLOSING_BRACE: -78,
  ELLIPSIS: -78,
  NAME: -78,
  ENUM: -78,
  FRAGMENT: -78,
  IMPLEMENTS: -78,
  INTERFACE: -78,
  ON: -78,
  QUERY: -78,
  SCALAR: -78,
  SCHEMA: -78,
  SUBSCRIPTION: -78,
  TYPE: -78,
  UNION: -78,
}, {
  CLOSING_PAREN: -81,
  NAME: -81,
  ENUM: -81,
  FRAGMENT: -81,
  IMPLEMENTS: -81,
  INTERFACE: -81,
  ON: -81,
  QUERY: -81,
  SCALAR: -81,
  SCHEMA: -81,
  SUBSCRIPTION: -81,
  TYPE: -81,
  UNION: -81,
}, {
  BLOCK_STRING_VALUE: 96,
  DOLLAR: 58,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 102,
  OPENING_BRACKET: 100,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  OPENING_BRACE: 11,
  CLOSING_BRACE: -69,
  ELLIPSIS: -69,
  NAME: -69,
  ENUM: -69,
  FRAGMENT: -69,
  IMPLEMENTS: -69,
  INTERFACE: -69,
  ON: -69,
  QUERY: -69,
  SCALAR: -69,
  SCHEMA: -69,
  SUBSCRIPTION: -69,
  TYPE: -69,
  UNION: -69,
}, {
  CLOSING_BRACE: -108,
  ELLIPSIS: -108,
  NAME: -108,
  ENUM: -108,
  FRAGMENT: -108,
  IMPLEMENTS: -108,
  INTERFACE: -108,
  ON: -108,
  QUERY: -108,
  SCALAR: -108,
  SCHEMA: -108,
  SUBSCRIPTION: -108,
  TYPE: -108,
  UNION: -108,
}, {
  OPENING_BRACE: 11,
}, {
  AT: -61,
  OPENING_BRACE: -61,
  CLOSING_BRACE: -61,
  ELLIPSIS: -61,
  NAME: -61,
  ENUM: -61,
  FRAGMENT: -61,
  IMPLEMENTS: -61,
  INTERFACE: -61,
  ON: -61,
  QUERY: -61,
  SCALAR: -61,
  SCHEMA: -61,
  SUBSCRIPTION: -61,
  TYPE: -61,
  UNION: -61,
}, {
  EQUALS: 106,
  AT: -40,
  CLOSING_PAREN: -40,
  DOLLAR: -40,
}, {
  BANG: 107,
  EQUALS: -32,
  AT: -32,
  CLOSING_PAREN: -32,
  DOLLAR: -32,
  CLOSING_BRACKET: -32,
}, {
  BANG: 108,
  EQUALS: -33,
  AT: -33,
  CLOSING_PAREN: -33,
  DOLLAR: -33,
  CLOSING_BRACKET: -33,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  OPENING_BRACKET: 88,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  EQUALS: -34,
  AT: -34,
  CLOSING_PAREN: -34,
  DOLLAR: -34,
  CLOSING_BRACKET: -34,
}, {
  CLOSING_PAREN: -82,
  NAME: -82,
  ENUM: -82,
  FRAGMENT: -82,
  IMPLEMENTS: -82,
  INTERFACE: -82,
  ON: -82,
  QUERY: -82,
  SCALAR: -82,
  SCHEMA: -82,
  SUBSCRIPTION: -82,
  TYPE: -82,
  UNION: -82,
}, {
  CLOSING_PAREN: -88,
  NAME: -88,
  ENUM: -88,
  FRAGMENT: -88,
  IMPLEMENTS: -88,
  INTERFACE: -88,
  ON: -88,
  QUERY: -88,
  SCALAR: -88,
  SCHEMA: -88,
  SUBSCRIPTION: -88,
  TYPE: -88,
  UNION: -88,
  CLOSING_BRACKET: -88,
  DOLLAR: -88,
  NUMBER: -88,
  STRING_VALUE: -88,
  BLOCK_STRING_VALUE: -88,
  OPENING_BRACKET: -88,
  OPENING_BRACE: -88,
  CLOSING_BRACE: -88,
}, {
  CLOSING_PAREN: -89,
  NAME: -89,
  ENUM: -89,
  FRAGMENT: -89,
  IMPLEMENTS: -89,
  INTERFACE: -89,
  ON: -89,
  QUERY: -89,
  SCALAR: -89,
  SCHEMA: -89,
  SUBSCRIPTION: -89,
  TYPE: -89,
  UNION: -89,
  CLOSING_BRACKET: -89,
  DOLLAR: -89,
  NUMBER: -89,
  STRING_VALUE: -89,
  BLOCK_STRING_VALUE: -89,
  OPENING_BRACKET: -89,
  OPENING_BRACE: -89,
  CLOSING_BRACE: -89,
}, {
  CLOSING_PAREN: -46,
  NAME: -46,
  ENUM: -46,
  FRAGMENT: -46,
  IMPLEMENTS: -46,
  INTERFACE: -46,
  ON: -46,
  QUERY: -46,
  SCALAR: -46,
  SCHEMA: -46,
  SUBSCRIPTION: -46,
  TYPE: -46,
  UNION: -46,
  CLOSING_BRACKET: -46,
  DOLLAR: -46,
  NUMBER: -46,
  STRING_VALUE: -46,
  BLOCK_STRING_VALUE: -46,
  OPENING_BRACKET: -46,
  OPENING_BRACE: -46,
  AT: -46,
  CLOSING_BRACE: -46,
}, {
  CLOSING_PAREN: -90,
  NAME: -90,
  ENUM: -90,
  FRAGMENT: -90,
  IMPLEMENTS: -90,
  INTERFACE: -90,
  ON: -90,
  QUERY: -90,
  SCALAR: -90,
  SCHEMA: -90,
  SUBSCRIPTION: -90,
  TYPE: -90,
  UNION: -90,
  CLOSING_BRACKET: -90,
  DOLLAR: -90,
  NUMBER: -90,
  STRING_VALUE: -90,
  BLOCK_STRING_VALUE: -90,
  OPENING_BRACKET: -90,
  OPENING_BRACE: -90,
  CLOSING_BRACE: -90,
}, {
  CLOSING_PAREN: -94,
  NAME: -94,
  ENUM: -94,
  FRAGMENT: -94,
  IMPLEMENTS: -94,
  INTERFACE: -94,
  ON: -94,
  QUERY: -94,
  SCALAR: -94,
  SCHEMA: -94,
  SUBSCRIPTION: -94,
  TYPE: -94,
  UNION: -94,
  CLOSING_BRACKET: -94,
  DOLLAR: -94,
  NUMBER: -94,
  STRING_VALUE: -94,
  BLOCK_STRING_VALUE: -94,
  OPENING_BRACKET: -94,
  OPENING_BRACE: -94,
  AT: -94,
  CLOSING_BRACE: -94,
}, {
  CLOSING_PAREN: -95,
  NAME: -95,
  ENUM: -95,
  FRAGMENT: -95,
  IMPLEMENTS: -95,
  INTERFACE: -95,
  ON: -95,
  QUERY: -95,
  SCALAR: -95,
  SCHEMA: -95,
  SUBSCRIPTION: -95,
  TYPE: -95,
  UNION: -95,
  CLOSING_BRACKET: -95,
  DOLLAR: -95,
  NUMBER: -95,
  STRING_VALUE: -95,
  BLOCK_STRING_VALUE: -95,
  OPENING_BRACKET: -95,
  OPENING_BRACE: -95,
  AT: -95,
  CLOSING_BRACE: -95,
}, {
  CLOSING_PAREN: -91,
  NAME: -91,
  ENUM: -91,
  FRAGMENT: -91,
  IMPLEMENTS: -91,
  INTERFACE: -91,
  ON: -91,
  QUERY: -91,
  SCALAR: -91,
  SCHEMA: -91,
  SUBSCRIPTION: -91,
  TYPE: -91,
  UNION: -91,
  CLOSING_BRACKET: -91,
  DOLLAR: -91,
  NUMBER: -91,
  STRING_VALUE: -91,
  BLOCK_STRING_VALUE: -91,
  OPENING_BRACKET: -91,
  OPENING_BRACE: -91,
  CLOSING_BRACE: -91,
}, {
  CLOSING_PAREN: -47,
  NAME: -47,
  ENUM: -47,
  FRAGMENT: -47,
  IMPLEMENTS: -47,
  INTERFACE: -47,
  ON: -47,
  QUERY: -47,
  SCALAR: -47,
  SCHEMA: -47,
  SUBSCRIPTION: -47,
  TYPE: -47,
  UNION: -47,
  CLOSING_BRACKET: -47,
  DOLLAR: -47,
  NUMBER: -47,
  STRING_VALUE: -47,
  BLOCK_STRING_VALUE: -47,
  OPENING_BRACKET: -47,
  OPENING_BRACE: -47,
  AT: -47,
  CLOSING_BRACE: -47,
}, {
  CLOSING_PAREN: -92,
  NAME: -92,
  ENUM: -92,
  FRAGMENT: -92,
  IMPLEMENTS: -92,
  INTERFACE: -92,
  ON: -92,
  QUERY: -92,
  SCALAR: -92,
  SCHEMA: -92,
  SUBSCRIPTION: -92,
  TYPE: -92,
  UNION: -92,
  CLOSING_BRACKET: -92,
  DOLLAR: -92,
  NUMBER: -92,
  STRING_VALUE: -92,
  BLOCK_STRING_VALUE: -92,
  OPENING_BRACKET: -92,
  OPENING_BRACE: -92,
  CLOSING_BRACE: -92,
}, {
  BLOCK_STRING_VALUE: 96,
  CLOSING_BRACKET: 110,
  DOLLAR: 58,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 102,
  OPENING_BRACKET: 100,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_PAREN: -93,
  NAME: -93,
  ENUM: -93,
  FRAGMENT: -93,
  IMPLEMENTS: -93,
  INTERFACE: -93,
  ON: -93,
  QUERY: -93,
  SCALAR: -93,
  SCHEMA: -93,
  SUBSCRIPTION: -93,
  TYPE: -93,
  UNION: -93,
  CLOSING_BRACKET: -93,
  DOLLAR: -93,
  NUMBER: -93,
  STRING_VALUE: -93,
  BLOCK_STRING_VALUE: -93,
  OPENING_BRACKET: -93,
  OPENING_BRACE: -93,
  CLOSING_BRACE: -93,
}, {
  CLOSING_BRACE: 113,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_BRACE: -76,
  ELLIPSIS: -76,
  NAME: -76,
  ENUM: -76,
  FRAGMENT: -76,
  IMPLEMENTS: -76,
  INTERFACE: -76,
  ON: -76,
  QUERY: -76,
  SCALAR: -76,
  SCHEMA: -76,
  SUBSCRIPTION: -76,
  TYPE: -76,
  UNION: -76,
}, {
  FRAGMENT: -105,
  QUERY: -105,
  MUTATION: -105,
  SUBSCRIPTION: -105,
  OPENING_BRACE: -105,
  $: -105,
}, {
  AT: 120,
  CLOSING_PAREN: -63,
  DOLLAR: -63,
}, {
  BLOCK_STRING_VALUE: 96,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 128,
  OPENING_BRACKET: 126,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  EQUALS: -38,
  AT: -38,
  CLOSING_PAREN: -38,
  DOLLAR: -38,
  CLOSING_BRACKET: -38,
}, {
  EQUALS: -37,
  AT: -37,
  CLOSING_PAREN: -37,
  DOLLAR: -37,
  CLOSING_BRACKET: -37,
}, {
  CLOSING_BRACKET: 129,
}, {
  CLOSING_PAREN: -96,
  NAME: -96,
  ENUM: -96,
  FRAGMENT: -96,
  IMPLEMENTS: -96,
  INTERFACE: -96,
  ON: -96,
  QUERY: -96,
  SCALAR: -96,
  SCHEMA: -96,
  SUBSCRIPTION: -96,
  TYPE: -96,
  UNION: -96,
  CLOSING_BRACKET: -96,
  DOLLAR: -96,
  NUMBER: -96,
  STRING_VALUE: -96,
  BLOCK_STRING_VALUE: -96,
  OPENING_BRACKET: -96,
  OPENING_BRACE: -96,
  CLOSING_BRACE: -96,
}, {
  BLOCK_STRING_VALUE: 96,
  CLOSING_BRACKET: 130,
  DOLLAR: 58,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 102,
  OPENING_BRACKET: 100,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_BRACKET: -98,
  DOLLAR: -98,
  NUMBER: -98,
  STRING_VALUE: -98,
  BLOCK_STRING_VALUE: -98,
  OPENING_BRACKET: -98,
  OPENING_BRACE: -98,
  NAME: -98,
  ENUM: -98,
  FRAGMENT: -98,
  IMPLEMENTS: -98,
  INTERFACE: -98,
  ON: -98,
  QUERY: -98,
  SCALAR: -98,
  SCHEMA: -98,
  SUBSCRIPTION: -98,
  TYPE: -98,
  UNION: -98,
}, {
  CLOSING_PAREN: -100,
  NAME: -100,
  ENUM: -100,
  FRAGMENT: -100,
  IMPLEMENTS: -100,
  INTERFACE: -100,
  ON: -100,
  QUERY: -100,
  SCALAR: -100,
  SCHEMA: -100,
  SUBSCRIPTION: -100,
  TYPE: -100,
  UNION: -100,
  CLOSING_BRACKET: -100,
  DOLLAR: -100,
  NUMBER: -100,
  STRING_VALUE: -100,
  BLOCK_STRING_VALUE: -100,
  OPENING_BRACKET: -100,
  OPENING_BRACE: -100,
  CLOSING_BRACE: -100,
}, {
  CLOSING_BRACE: 132,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_BRACE: -102,
  NAME: -102,
  ENUM: -102,
  FRAGMENT: -102,
  IMPLEMENTS: -102,
  INTERFACE: -102,
  ON: -102,
  QUERY: -102,
  SCALAR: -102,
  SCHEMA: -102,
  SUBSCRIPTION: -102,
  TYPE: -102,
  UNION: -102,
}, {
  COLON: 134,
}, {
  CLOSING_PAREN: -30,
  DOLLAR: -30,
}, {
  AT: 120,
  CLOSING_PAREN: -62,
  DOLLAR: -62,
}, {
  AT: -64,
  CLOSING_PAREN: -64,
  DOLLAR: -64,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  AT: -39,
  CLOSING_PAREN: -39,
  DOLLAR: -39,
}, {
  AT: -41,
  CLOSING_PAREN: -41,
  DOLLAR: -41,
  CLOSING_BRACKET: -41,
  NUMBER: -41,
  STRING_VALUE: -41,
  BLOCK_STRING_VALUE: -41,
  OPENING_BRACKET: -41,
  OPENING_BRACE: -41,
  NAME: -41,
  ENUM: -41,
  FRAGMENT: -41,
  IMPLEMENTS: -41,
  INTERFACE: -41,
  ON: -41,
  QUERY: -41,
  SCALAR: -41,
  SCHEMA: -41,
  SUBSCRIPTION: -41,
  TYPE: -41,
  UNION: -41,
  CLOSING_BRACE: -41,
}, {
  AT: -42,
  CLOSING_PAREN: -42,
  DOLLAR: -42,
  CLOSING_BRACKET: -42,
  NUMBER: -42,
  STRING_VALUE: -42,
  BLOCK_STRING_VALUE: -42,
  OPENING_BRACKET: -42,
  OPENING_BRACE: -42,
  NAME: -42,
  ENUM: -42,
  FRAGMENT: -42,
  IMPLEMENTS: -42,
  INTERFACE: -42,
  ON: -42,
  QUERY: -42,
  SCALAR: -42,
  SCHEMA: -42,
  SUBSCRIPTION: -42,
  TYPE: -42,
  UNION: -42,
  CLOSING_BRACE: -42,
}, {
  AT: -43,
  CLOSING_PAREN: -43,
  DOLLAR: -43,
  CLOSING_BRACKET: -43,
  NUMBER: -43,
  STRING_VALUE: -43,
  BLOCK_STRING_VALUE: -43,
  OPENING_BRACKET: -43,
  OPENING_BRACE: -43,
  NAME: -43,
  ENUM: -43,
  FRAGMENT: -43,
  IMPLEMENTS: -43,
  INTERFACE: -43,
  ON: -43,
  QUERY: -43,
  SCALAR: -43,
  SCHEMA: -43,
  SUBSCRIPTION: -43,
  TYPE: -43,
  UNION: -43,
  CLOSING_BRACE: -43,
}, {
  AT: -44,
  CLOSING_PAREN: -44,
  DOLLAR: -44,
  CLOSING_BRACKET: -44,
  NUMBER: -44,
  STRING_VALUE: -44,
  BLOCK_STRING_VALUE: -44,
  OPENING_BRACKET: -44,
  OPENING_BRACE: -44,
  NAME: -44,
  ENUM: -44,
  FRAGMENT: -44,
  IMPLEMENTS: -44,
  INTERFACE: -44,
  ON: -44,
  QUERY: -44,
  SCALAR: -44,
  SCHEMA: -44,
  SUBSCRIPTION: -44,
  TYPE: -44,
  UNION: -44,
  CLOSING_BRACE: -44,
}, {
  BLOCK_STRING_VALUE: 96,
  CLOSING_BRACKET: 137,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 128,
  OPENING_BRACKET: 126,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  AT: -45,
  CLOSING_PAREN: -45,
  DOLLAR: -45,
  CLOSING_BRACKET: -45,
  NUMBER: -45,
  STRING_VALUE: -45,
  BLOCK_STRING_VALUE: -45,
  OPENING_BRACKET: -45,
  OPENING_BRACE: -45,
  NAME: -45,
  ENUM: -45,
  FRAGMENT: -45,
  IMPLEMENTS: -45,
  INTERFACE: -45,
  ON: -45,
  QUERY: -45,
  SCALAR: -45,
  SCHEMA: -45,
  SUBSCRIPTION: -45,
  TYPE: -45,
  UNION: -45,
  CLOSING_BRACE: -45,
}, {
  CLOSING_BRACE: 140,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  BANG: -36,
  EQUALS: -36,
  AT: -36,
  CLOSING_PAREN: -36,
  DOLLAR: -36,
  CLOSING_BRACKET: -36,
}, {
  CLOSING_PAREN: -97,
  NAME: -97,
  ENUM: -97,
  FRAGMENT: -97,
  IMPLEMENTS: -97,
  INTERFACE: -97,
  ON: -97,
  QUERY: -97,
  SCALAR: -97,
  SCHEMA: -97,
  SUBSCRIPTION: -97,
  TYPE: -97,
  UNION: -97,
  CLOSING_BRACKET: -97,
  DOLLAR: -97,
  NUMBER: -97,
  STRING_VALUE: -97,
  BLOCK_STRING_VALUE: -97,
  OPENING_BRACKET: -97,
  OPENING_BRACE: -97,
  CLOSING_BRACE: -97,
}, {
  CLOSING_BRACKET: -99,
  DOLLAR: -99,
  NUMBER: -99,
  STRING_VALUE: -99,
  BLOCK_STRING_VALUE: -99,
  OPENING_BRACKET: -99,
  OPENING_BRACE: -99,
  NAME: -99,
  ENUM: -99,
  FRAGMENT: -99,
  IMPLEMENTS: -99,
  INTERFACE: -99,
  ON: -99,
  QUERY: -99,
  SCALAR: -99,
  SCHEMA: -99,
  SUBSCRIPTION: -99,
  TYPE: -99,
  UNION: -99,
}, {
  CLOSING_PAREN: -101,
  NAME: -101,
  ENUM: -101,
  FRAGMENT: -101,
  IMPLEMENTS: -101,
  INTERFACE: -101,
  ON: -101,
  QUERY: -101,
  SCALAR: -101,
  SCHEMA: -101,
  SUBSCRIPTION: -101,
  TYPE: -101,
  UNION: -101,
  CLOSING_BRACKET: -101,
  DOLLAR: -101,
  NUMBER: -101,
  STRING_VALUE: -101,
  BLOCK_STRING_VALUE: -101,
  OPENING_BRACKET: -101,
  OPENING_BRACE: -101,
  CLOSING_BRACE: -101,
}, {
  CLOSING_BRACE: -103,
  NAME: -103,
  ENUM: -103,
  FRAGMENT: -103,
  IMPLEMENTS: -103,
  INTERFACE: -103,
  ON: -103,
  QUERY: -103,
  SCALAR: -103,
  SCHEMA: -103,
  SUBSCRIPTION: -103,
  TYPE: -103,
  UNION: -103,
}, {
  BLOCK_STRING_VALUE: 96,
  DOLLAR: 58,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 102,
  OPENING_BRACKET: 100,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  AT: -65,
  CLOSING_PAREN: -65,
  DOLLAR: -65,
}, {
  OPENING_PAREN: 146,
  AT: -84,
  CLOSING_PAREN: -84,
  DOLLAR: -84,
}, {
  AT: -48,
  CLOSING_PAREN: -48,
  DOLLAR: -48,
  CLOSING_BRACKET: -48,
  NUMBER: -48,
  STRING_VALUE: -48,
  BLOCK_STRING_VALUE: -48,
  OPENING_BRACKET: -48,
  OPENING_BRACE: -48,
  NAME: -48,
  ENUM: -48,
  FRAGMENT: -48,
  IMPLEMENTS: -48,
  INTERFACE: -48,
  ON: -48,
  QUERY: -48,
  SCALAR: -48,
  SCHEMA: -48,
  SUBSCRIPTION: -48,
  TYPE: -48,
  UNION: -48,
  CLOSING_BRACE: -48,
}, {
  BLOCK_STRING_VALUE: 96,
  CLOSING_BRACKET: 147,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 128,
  OPENING_BRACKET: 126,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_BRACKET: -50,
  NUMBER: -50,
  STRING_VALUE: -50,
  BLOCK_STRING_VALUE: -50,
  OPENING_BRACKET: -50,
  OPENING_BRACE: -50,
  NAME: -50,
  ENUM: -50,
  FRAGMENT: -50,
  IMPLEMENTS: -50,
  INTERFACE: -50,
  ON: -50,
  QUERY: -50,
  SCALAR: -50,
  SCHEMA: -50,
  SUBSCRIPTION: -50,
  TYPE: -50,
  UNION: -50,
}, {
  AT: -52,
  CLOSING_PAREN: -52,
  DOLLAR: -52,
  CLOSING_BRACKET: -52,
  NUMBER: -52,
  STRING_VALUE: -52,
  BLOCK_STRING_VALUE: -52,
  OPENING_BRACKET: -52,
  OPENING_BRACE: -52,
  NAME: -52,
  ENUM: -52,
  FRAGMENT: -52,
  IMPLEMENTS: -52,
  INTERFACE: -52,
  ON: -52,
  QUERY: -52,
  SCALAR: -52,
  SCHEMA: -52,
  SUBSCRIPTION: -52,
  TYPE: -52,
  UNION: -52,
  CLOSING_BRACE: -52,
}, {
  CLOSING_BRACE: 149,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_BRACE: -54,
  NAME: -54,
  ENUM: -54,
  FRAGMENT: -54,
  IMPLEMENTS: -54,
  INTERFACE: -54,
  ON: -54,
  QUERY: -54,
  SCALAR: -54,
  SCHEMA: -54,
  SUBSCRIPTION: -54,
  TYPE: -54,
  UNION: -54,
}, {
  COLON: 151,
}, {
  CLOSING_BRACE: -104,
  NAME: -104,
  ENUM: -104,
  FRAGMENT: -104,
  IMPLEMENTS: -104,
  INTERFACE: -104,
  ON: -104,
  QUERY: -104,
  SCALAR: -104,
  SCHEMA: -104,
  SUBSCRIPTION: -104,
  TYPE: -104,
  UNION: -104,
}, {
  AT: -66,
  CLOSING_PAREN: -66,
  DOLLAR: -66,
}, {
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  AT: -49,
  CLOSING_PAREN: -49,
  DOLLAR: -49,
  CLOSING_BRACKET: -49,
  NUMBER: -49,
  STRING_VALUE: -49,
  BLOCK_STRING_VALUE: -49,
  OPENING_BRACKET: -49,
  OPENING_BRACE: -49,
  NAME: -49,
  ENUM: -49,
  FRAGMENT: -49,
  IMPLEMENTS: -49,
  INTERFACE: -49,
  ON: -49,
  QUERY: -49,
  SCALAR: -49,
  SCHEMA: -49,
  SUBSCRIPTION: -49,
  TYPE: -49,
  UNION: -49,
  CLOSING_BRACE: -49,
}, {
  CLOSING_BRACKET: -51,
  NUMBER: -51,
  STRING_VALUE: -51,
  BLOCK_STRING_VALUE: -51,
  OPENING_BRACKET: -51,
  OPENING_BRACE: -51,
  NAME: -51,
  ENUM: -51,
  FRAGMENT: -51,
  IMPLEMENTS: -51,
  INTERFACE: -51,
  ON: -51,
  QUERY: -51,
  SCALAR: -51,
  SCHEMA: -51,
  SUBSCRIPTION: -51,
  TYPE: -51,
  UNION: -51,
}, {
  AT: -53,
  CLOSING_PAREN: -53,
  DOLLAR: -53,
  CLOSING_BRACKET: -53,
  NUMBER: -53,
  STRING_VALUE: -53,
  BLOCK_STRING_VALUE: -53,
  OPENING_BRACKET: -53,
  OPENING_BRACE: -53,
  NAME: -53,
  ENUM: -53,
  FRAGMENT: -53,
  IMPLEMENTS: -53,
  INTERFACE: -53,
  ON: -53,
  QUERY: -53,
  SCALAR: -53,
  SCHEMA: -53,
  SUBSCRIPTION: -53,
  TYPE: -53,
  UNION: -53,
  CLOSING_BRACE: -53,
}, {
  CLOSING_BRACE: -55,
  NAME: -55,
  ENUM: -55,
  FRAGMENT: -55,
  IMPLEMENTS: -55,
  INTERFACE: -55,
  ON: -55,
  QUERY: -55,
  SCALAR: -55,
  SCHEMA: -55,
  SUBSCRIPTION: -55,
  TYPE: -55,
  UNION: -55,
}, {
  BLOCK_STRING_VALUE: 96,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 128,
  OPENING_BRACKET: 126,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_PAREN: 156,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  ON: 22,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_PAREN: -85,
  NAME: -85,
  ENUM: -85,
  FRAGMENT: -85,
  IMPLEMENTS: -85,
  INTERFACE: -85,
  ON: -85,
  QUERY: -85,
  SCALAR: -85,
  SCHEMA: -85,
  SUBSCRIPTION: -85,
  TYPE: -85,
  UNION: -85,
}, {
  COLON: 158,
}, {
  CLOSING_BRACE: -56,
  NAME: -56,
  ENUM: -56,
  FRAGMENT: -56,
  IMPLEMENTS: -56,
  INTERFACE: -56,
  ON: -56,
  QUERY: -56,
  SCALAR: -56,
  SCHEMA: -56,
  SUBSCRIPTION: -56,
  TYPE: -56,
  UNION: -56,
}, {
  AT: -83,
  CLOSING_PAREN: -83,
  DOLLAR: -83,
}, {
  CLOSING_PAREN: -86,
  NAME: -86,
  ENUM: -86,
  FRAGMENT: -86,
  IMPLEMENTS: -86,
  INTERFACE: -86,
  ON: -86,
  QUERY: -86,
  SCALAR: -86,
  SCHEMA: -86,
  SUBSCRIPTION: -86,
  TYPE: -86,
  UNION: -86,
}, {
  BLOCK_STRING_VALUE: 96,
  ENUM: 18,
  FRAGMENT: 19,
  IMPLEMENTS: 20,
  INTERFACE: 21,
  NAME: 17,
  NUMBER: 93,
  ON: 22,
  OPENING_BRACE: 128,
  OPENING_BRACKET: 126,
  QUERY: 23,
  SCALAR: 24,
  SCHEMA: 25,
  STRING_VALUE: 95,
  SUBSCRIPTION: 26,
  TYPE: 27,
  UNION: 28,
}, {
  CLOSING_PAREN: -87,
  NAME: -87,
  ENUM: -87,
  FRAGMENT: -87,
  IMPLEMENTS: -87,
  INTERFACE: -87,
  ON: -87,
  QUERY: -87,
  SCALAR: -87,
  SCHEMA: -87,
  SUBSCRIPTION: -87,
  TYPE: -87,
  UNION: -87,
}];
const gotos: Array<Gotos> = [
  {
    Definition: 3,
    DefinitionList: 2,
    Document: 1,
    ExecutableDefinition: 4,
    FragmentDefinition: 12,
    OperationDefinition: 5,
    OperationType: 6,
    SelectionSet: 10,
  },
  {},
  {
    Definition: 14,
    ExecutableDefinition: 4,
    FragmentDefinition: 12,
    OperationDefinition: 5,
    OperationType: 6,
    SelectionSet: 10,
  },
  {},
  {},
  {},
  {
    Name: 16,
    OperationNameOpt: 15,
  },
  {},
  {},
  {},
  {},
  {
    Alias: 33,
    Field: 31,
    FragmentSpread: 34,
    InlineFragment: 36,
    Name: 32,
    Selection: 30,
    SelectionList: 29,
  },
  {},
  {
    FragmentName: 37,
  },
  {},
  {
    VariableDefinitionsOpt: 39,
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
  {
    Alias: 33,
    Field: 31,
    FragmentSpread: 34,
    InlineFragment: 36,
    Name: 32,
    Selection: 42,
  },
  {},
  {},
  {
    ArgumentsOpt: 43,
  },
  {
    Name: 46,
  },
  {},
  {
    FragmentName: 47,
    TypeConditionOpt: 48,
  },
  {},
  {},
  {},
  {
    Directive: 53,
    DirectiveList: 52,
    DirectivesOpt: 51,
  },
  {
    Variable: 57,
    VariableDefinition: 56,
    VariableDefinitionList: 55,
  },
  {},
  {},
  {
    Directive: 53,
    DirectiveList: 52,
    DirectivesOpt: 59,
  },
  {},
  {
    Argument: 61,
    ArgumentList: 60,
    Name: 62,
  },
  {
    ArgumentsOpt: 63,
  },
  {
    Directive: 53,
    DirectiveList: 52,
    DirectivesOpt: 64,
  },
  {
    Directive: 53,
    DirectiveList: 52,
    DirectivesOpt: 65,
  },
  {
    Name: 67,
    NamedType: 66,
  },
  {
    Name: 67,
    NamedType: 68,
  },
  {
    SelectionSet: 69,
  },
  {
    Directive: 70,
  },
  {},
  {
    Name: 71,
  },
  {
    Variable: 57,
    VariableDefinition: 73,
  },
  {},
  {},
  {
    Name: 75,
  },
  {
    SelectionSet: 77,
    SelectionSetOpt: 76,
  },
  {
    Argument: 79,
    Name: 62,
  },
  {},
  {},
  {
    Directive: 53,
    DirectiveList: 52,
    DirectivesOpt: 81,
  },
  {},
  {
    SelectionSet: 82,
  },
  {},
  {},
  {
    Directive: 53,
    DirectiveList: 52,
    DirectivesOpt: 83,
  },
  {},
  {},
  {
    ArgumentsOpt: 84,
  },
  {},
  {},
  {
    ListType: 87,
    Name: 67,
    NamedType: 86,
    NonNullType: 89,
    Type: 85,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValue: 99,
    Name: 98,
    NamedValue: 97,
    NumberValue: 92,
    ObjectValue: 101,
    StringValue: 94,
    Value: 90,
    Variable: 91,
  },
  {
    SelectionSet: 77,
    SelectionSetOpt: 103,
  },
  {},
  {
    SelectionSet: 104,
  },
  {},
  {
    DefaultValueOpt: 105,
  },
  {},
  {},
  {
    ListType: 87,
    Name: 67,
    NamedType: 86,
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
  {},
  {},
  {},
  {
    ListValue: 99,
    ListValueList: 111,
    Name: 98,
    NamedValue: 97,
    NumberValue: 92,
    ObjectValue: 101,
    StringValue: 94,
    Value: 112,
    Variable: 91,
  },
  {},
  {
    Name: 116,
    ObjectField: 115,
    ObjectFieldList: 114,
  },
  {},
  {},
  {
    DirectiveConst: 119,
    DirectiveConstList: 118,
    DirectivesConstOpt: 117,
  },
  {
    ListValueConst: 125,
    Name: 98,
    NamedValue: 124,
    NumberValue: 122,
    ObjectValueConst: 127,
    StringValue: 123,
    ValueConst: 121,
  },
  {},
  {},
  {},
  {},
  {
    ListValue: 99,
    Name: 98,
    NamedValue: 97,
    NumberValue: 92,
    ObjectValue: 101,
    StringValue: 94,
    Value: 131,
    Variable: 91,
  },
  {},
  {},
  {
    Name: 116,
    ObjectField: 133,
  },
  {},
  {},
  {},
  {
    DirectiveConst: 135,
  },
  {},
  {
    Name: 136,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValueConst: 125,
    ListValueConstList: 138,
    Name: 98,
    NamedValue: 124,
    NumberValue: 122,
    ObjectValueConst: 127,
    StringValue: 123,
    ValueConst: 139,
  },
  {},
  {
    Name: 143,
    ObjectFieldConst: 142,
    ObjectFieldConstList: 141,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValue: 99,
    Name: 98,
    NamedValue: 97,
    NumberValue: 92,
    ObjectValue: 101,
    StringValue: 94,
    Value: 144,
    Variable: 91,
  },
  {},
  {
    ArgumentsConstOpt: 145,
  },
  {},
  {
    ListValueConst: 125,
    Name: 98,
    NamedValue: 124,
    NumberValue: 122,
    ObjectValueConst: 127,
    StringValue: 123,
    ValueConst: 148,
  },
  {},
  {},
  {
    Name: 143,
    ObjectFieldConst: 150,
  },
  {},
  {},
  {},
  {},
  {
    ArgumentConst: 153,
    ArgumentConstList: 152,
    Name: 154,
  },
  {},
  {},
  {},
  {},
  {
    ListValueConst: 125,
    Name: 98,
    NamedValue: 124,
    NumberValue: 122,
    ObjectValueConst: 127,
    StringValue: 123,
    ValueConst: 155,
  },
  {
    ArgumentConst: 157,
    Name: 154,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValueConst: 125,
    Name: 98,
    NamedValue: 124,
    NumberValue: 122,
    ObjectValueConst: 127,
    StringValue: 123,
    ValueConst: 159,
  },
  {},
];
const rules = [{
  production: "Document'",
  pop: 1,
  action: r0,
}, {
  production: 'Document',
  pop: 1,
  action: r1,
}, {
  production: 'DefinitionList',
  pop: 1,
  action: r2,
}, {
  production: 'DefinitionList',
  pop: 2,
  action: r3,
}, {
  production: 'Definition',
  pop: 1,
  action: r4,
}, {
  production: 'Definition',
  pop: 1,
  action: r5,
}, {
  production: 'ExecutableDefinition',
  pop: 1,
  action: r6,
}, {
  production: 'OperationDefinition',
  pop: 5,
  action: r7,
}, {
  production: 'OperationDefinition',
  pop: 1,
  action: r8,
}, {
  production: 'OperationType',
  pop: 1,
  action: r9,
}, {
  production: 'OperationType',
  pop: 1,
  action: r10,
}, {
  production: 'OperationType',
  pop: 1,
  action: r11,
}, {
  production: 'OperationNameOpt',
  pop: 1,
  action: r12,
}, {
  production: 'OperationNameOpt',
  pop: 0,
  action: r13,
}, {
  production: 'Name',
  pop: 1,
  action: r14,
}, {
  production: 'Name',
  pop: 1,
  action: r15,
}, {
  production: 'Name',
  pop: 1,
  action: r16,
}, {
  production: 'Name',
  pop: 1,
  action: r17,
}, {
  production: 'Name',
  pop: 1,
  action: r18,
}, {
  production: 'Name',
  pop: 1,
  action: r19,
}, {
  production: 'Name',
  pop: 1,
  action: r20,
}, {
  production: 'Name',
  pop: 1,
  action: r21,
}, {
  production: 'Name',
  pop: 1,
  action: r22,
}, {
  production: 'Name',
  pop: 1,
  action: r23,
}, {
  production: 'Name',
  pop: 1,
  action: r24,
}, {
  production: 'Name',
  pop: 1,
  action: r25,
}, {
  production: 'VariableDefinitionsOpt',
  pop: 3,
  action: r26,
}, {
  production: 'VariableDefinitionsOpt',
  pop: 0,
  action: r27,
}, {
  production: 'VariableDefinitionList',
  pop: 1,
  action: r28,
}, {
  production: 'VariableDefinitionList',
  pop: 2,
  action: r29,
}, {
  production: 'VariableDefinition',
  pop: 5,
  action: r30,
}, {
  production: 'Variable',
  pop: 2,
  action: r31,
}, {
  production: 'Type',
  pop: 1,
  action: r32,
}, {
  production: 'Type',
  pop: 1,
  action: r33,
}, {
  production: 'Type',
  pop: 1,
  action: r34,
}, {
  production: 'NamedType',
  pop: 1,
  action: r35,
}, {
  production: 'ListType',
  pop: 3,
  action: r36,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r37,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r38,
}, {
  production: 'DefaultValueOpt',
  pop: 2,
  action: r39,
}, {
  production: 'DefaultValueOpt',
  pop: 0,
  action: r40,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r41,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r42,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r43,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r44,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r45,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r46,
}, {
  production: 'NamedValue',
  pop: 1,
  action: r47,
}, {
  production: 'ListValueConst',
  pop: 2,
  action: r48,
}, {
  production: 'ListValueConst',
  pop: 3,
  action: r49,
}, {
  production: 'ListValueConstList',
  pop: 1,
  action: r50,
}, {
  production: 'ListValueConstList',
  pop: 2,
  action: r51,
}, {
  production: 'ObjectValueConst',
  pop: 2,
  action: r52,
}, {
  production: 'ObjectValueConst',
  pop: 3,
  action: r53,
}, {
  production: 'ObjectFieldConstList',
  pop: 1,
  action: r54,
}, {
  production: 'ObjectFieldConstList',
  pop: 2,
  action: r55,
}, {
  production: 'ObjectFieldConst',
  pop: 3,
  action: r56,
}, {
  production: 'DirectivesOpt',
  pop: 1,
  action: r57,
}, {
  production: 'DirectivesOpt',
  pop: 0,
  action: r58,
}, {
  production: 'DirectiveList',
  pop: 1,
  action: r59,
}, {
  production: 'DirectiveList',
  pop: 2,
  action: r60,
}, {
  production: 'Directive',
  pop: 3,
  action: r61,
}, {
  production: 'DirectivesConstOpt',
  pop: 1,
  action: r62,
}, {
  production: 'DirectivesConstOpt',
  pop: 0,
  action: r63,
}, {
  production: 'DirectiveConstList',
  pop: 1,
  action: r64,
}, {
  production: 'DirectiveConstList',
  pop: 2,
  action: r65,
}, {
  production: 'DirectiveConst',
  pop: 3,
  action: r66,
}, {
  production: 'SelectionSet',
  pop: 3,
  action: r67,
}, {
  production: 'SelectionSetOpt',
  pop: 1,
  action: r68,
}, {
  production: 'SelectionSetOpt',
  pop: 0,
  action: r69,
}, {
  production: 'SelectionList',
  pop: 1,
  action: r70,
}, {
  production: 'SelectionList',
  pop: 2,
  action: r71,
}, {
  production: 'Selection',
  pop: 1,
  action: r72,
}, {
  production: 'Selection',
  pop: 1,
  action: r73,
}, {
  production: 'Selection',
  pop: 1,
  action: r74,
}, {
  production: 'Field',
  pop: 4,
  action: r75,
}, {
  production: 'Field',
  pop: 5,
  action: r76,
}, {
  production: 'Alias',
  pop: 2,
  action: r77,
}, {
  production: 'ArgumentsOpt',
  pop: 3,
  action: r78,
}, {
  production: 'ArgumentsOpt',
  pop: 0,
  action: r79,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r80,
}, {
  production: 'ArgumentList',
  pop: 2,
  action: r81,
}, {
  production: 'Argument',
  pop: 3,
  action: r82,
}, {
  production: 'ArgumentsConstOpt',
  pop: 3,
  action: r83,
}, {
  production: 'ArgumentsConstOpt',
  pop: 0,
  action: r84,
}, {
  production: 'ArgumentConstList',
  pop: 1,
  action: r85,
}, {
  production: 'ArgumentConstList',
  pop: 2,
  action: r86,
}, {
  production: 'ArgumentConst',
  pop: 3,
  action: r87,
}, {
  production: 'Value',
  pop: 1,
  action: r88,
}, {
  production: 'Value',
  pop: 1,
  action: r89,
}, {
  production: 'Value',
  pop: 1,
  action: r90,
}, {
  production: 'Value',
  pop: 1,
  action: r91,
}, {
  production: 'Value',
  pop: 1,
  action: r92,
}, {
  production: 'Value',
  pop: 1,
  action: r93,
}, {
  production: 'StringValue',
  pop: 1,
  action: r94,
}, {
  production: 'StringValue',
  pop: 1,
  action: r95,
}, {
  production: 'ListValue',
  pop: 2,
  action: r96,
}, {
  production: 'ListValue',
  pop: 3,
  action: r97,
}, {
  production: 'ListValueList',
  pop: 1,
  action: r98,
}, {
  production: 'ListValueList',
  pop: 2,
  action: r99,
}, {
  production: 'ObjectValue',
  pop: 2,
  action: r100,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r101,
}, {
  production: 'ObjectFieldList',
  pop: 1,
  action: r102,
}, {
  production: 'ObjectFieldList',
  pop: 2,
  action: r103,
}, {
  production: 'ObjectField',
  pop: 3,
  action: r104,
}, {
  production: 'FragmentDefinition',
  pop: 6,
  action: r105,
}, {
  production: 'FragmentName',
  pop: 1,
  action: r106,
}, {
  production: 'FragmentSpread',
  pop: 3,
  action: r107,
}, {
  production: 'InlineFragment',
  pop: 4,
  action: r108,
}, {
  production: 'TypeConditionOpt',
  pop: 2,
  action: r109,
}, {
  production: 'TypeConditionOpt',
  pop: 0,
  action: r110,
}];
const EOF = new Token('$', -1, -1, '');
export default function parseDocument(input: string) {
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
