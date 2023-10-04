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
function r9($1) {
  {
    const {contents} = $1;
    if (contents === 'query') {
      return 'QUERY';
    } else if (contents === 'mutation') {
      return 'MUTATION';
    } else if (contents === 'subscription') {
      return 'SUBSCRIPTION';
    } else {
      throw new Error(`Unsupported operation type: ${contents}`);
    }
  }
}
function r10($1) {
  return $1;
}
function r11() {
  return null;
}
function r12($1) {
  return $1.contents;
}
function r13() {
  return null;
}
function r14() {
  return null;
}
function r15(_$1, $2) {
  return $2;
}
function r16() {
  return null;
}
function r17($1) {
  return [$1];
}
function r18($1, $2) {
  $1.push($2);
  return $1;
}
function r19($1, _$2, $3, $4, $5) {
  return {
    kind: 'VARIABLE_DEFINITION',
    defaultValue: $4,
    directives: $5,
    type: $3,
    variable: $1,
  };
}
function r20(_$1, $2) {
  return {
    kind: 'VARIABLE',
    name: $2,
  };
}
function r21($1) {
  return $1;
}
function r22($1) {
  return $1;
}
function r23($1) {
  return $1;
}
function r24($1) {
  return {
    kind: 'NAMED_TYPE',
    name: $1,
  };
}
function r25(_$1, $2) {
  return {
    kind: 'LIST_TYPE',
    type: $2,
  };
}
function r26($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r27($1) {
  return {
    kind: 'NON_NULL_TYPE',
    type: $1,
  };
}
function r28(_$1, $2) {
  return $2;
}
function r29() {
  return null;
}
function r30($1) {
  return $1;
}
function r31($1) {
  return $1;
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
function r36($1) {
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
function r37() {
  return {
    kind: 'LIST_VALUE',
    value: [],
  };
}
function r38(_$1, $2) {
  return {
    kind: 'LIST_VALUE',
    value: $2,
  };
}
function r39($1) {
  return [$1];
}
function r40($1, $2) {
  $1.push($2);
  return $1;
}
function r41() {
  return {
    kind: 'OBJECT_VALUE',
    fields: [],
  };
}
function r42(_$1, $2) {
  return {
    kind: 'OBJECT_VALUE',
    fields: $2,
  };
}
function r43($1) {
  return [$1];
}
function r44($1, $2) {
  $1.push($2);
  return $1;
}
function r45($1, _$2, $3) {
  return {
    name: $1,
    value: $3,
  };
}
function r46($1) {
  return $1;
}
function r47() {
  return null;
}
function r48($1) {
  return [$1];
}
function r49($1, $2) {
  $1.push($2);
  return $1;
}
function r50(_$1, $2, $3) {
  return {
    kind: 'DIRECTIVE',
    arguments: $3,
    name: $2,
  };
}
function r51($1) {
  return $1;
}
function r52() {
  return null;
}
function r53($1) {
  return [$1];
}
function r54($1, $2) {
  $1.push($2);
  return $1;
}
function r55(_$1, $2, $3) {
  return {
    kind: 'DIRECTIVE',
    arguments: $3,
    name: $2,
  };
}
function r56(_$1, $2) {
  return $2;
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
function r61($1) {
  return $1;
}
function r62($1) {
  return $1;
}
function r63($1) {
  return $1;
}
function r64($1, $2, $3, $4) {
  return {
    kind: 'FIELD',
    alias: null,
    arguments: $2,
    directives: $3,
    name: $1,
    selections: $4,
  };
}
function r65($1, $2, $3, $4, $5) {
  return {
    kind: 'FIELD',
    alias: $1,
    arguments: $3,
    directives: $4,
    name: $2,
    selections: $5,
  };
}
function r66($1) {
  return $1;
}
function r67(_$1, $2) {
  return $2;
}
function r68() {
  return null;
}
function r69($1) {
  return [$1];
}
function r70($1, $2) {
  $1.push($2);
  return $1;
}
function r71($1, _$2, $3) {
  return {
    kind: 'ARGUMENT',
    name: $1,
    value: $3,
  };
}
function r72(_$1, $2) {
  return $2;
}
function r73() {
  return null;
}
function r74($1) {
  return [$1];
}
function r75($1, $2) {
  $1.push($2);
  return $1;
}
function r76($1, _$2, $3) {
  return {
    kind: 'ARGUMENT',
    name: $1,
    value: $3,
  };
}
function r77($1) {
  return $1;
}
function r78($1) {
  return $1;
}
function r79($1) {
  return $1;
}
function r80($1) {
  return $1;
}
function r81($1) {
  return $1;
}
function r82($1) {
  return $1;
}
function r83($1) {
  return {
    kind: 'STRING',
    block: false,
    // TODO: consider doing this slice in the lexer
    value: $1.contents.slice(1, -1),
  };
}
function r84($1) {
  return {
    kind: 'STRING',
    block: true,
    // TODO: preprocess value here...
    value: $1.contents,
  };
}
function r85() {
  return {
    kind: 'LIST_VALUE',
    value: [],
  };
}
function r86(_$1, $2) {
  return {
    kind: 'LIST_VALUE',
    value: $2,
  };
}
function r87($1) {
  return [$1];
}
function r88($1, $2) {
  $1.push($2);
  return $1;
}
function r89() {
  return {
    kind: 'OBJECT_VALUE',
    fields: [],
  };
}
function r90(_$1, $2) {
  return {
    kind: 'OBJECT_VALUE',
    fields: $2,
  };
}
function r91($1) {
  return [$1];
}
function r92($1, $2) {
  $1.push($2);
  return $1;
}
function r93($1, _$2, $3) {
  return {
    name: $1,
    value: $3,
  };
}
function r94(_$1, $2, _$3, $4, $5, $6) {
  return {
    kind: 'FRAGMENT',
    directives: $5,
    name: $2,
    on: $4,
    selections: $6,
  };
}
function r95($1) {
  return $1.contents;
}
function r96(_$1, $2, $3) {
  return {
    kind: 'FRAGMENT_SPREAD',
    name: $2,
    directives: $3,
  };
}
function r97(_$1, $2, $3, $4) {
  return {
    kind: 'INLINE_FRAGMENT',
    directives: $3,
    on: $2,
    selections: $4,
  };
}
function r98(_$1, $2) {
  return $2;
}
function r99() {
  return null;
}
const actions: Array<{[token: string]: number}> = [{
  FRAGMENT: 11,
  NAME: 7,
  OPENING_BRACE: 9,
}, {
  $: 0,
}, {
  FRAGMENT: 11,
  NAME: 7,
  OPENING_BRACE: 9,
  $: -1,
}, {
  FRAGMENT: -2,
  NAME: -2,
  OPENING_BRACE: -2,
  $: -2,
}, {
  FRAGMENT: -4,
  NAME: -4,
  OPENING_BRACE: -4,
  $: -4,
}, {
  FRAGMENT: -6,
  NAME: -6,
  OPENING_BRACE: -6,
  $: -6,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
  OPENING_PAREN: -11,
  AT: -11,
  OPENING_BRACE: -11,
}, {
  NAME: -9,
  FRAGMENT: -9,
  ON: -9,
  OPENING_PAREN: -9,
  AT: -9,
  OPENING_BRACE: -9,
}, {
  FRAGMENT: -8,
  NAME: -8,
  OPENING_BRACE: -8,
  $: -8,
}, {
  ELLIPSIS: 24,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  FRAGMENT: -5,
  NAME: -5,
  OPENING_BRACE: -5,
  $: -5,
}, {
  NAME: 27,
}, {
  FRAGMENT: -3,
  NAME: -3,
  OPENING_BRACE: -3,
  $: -3,
}, {
  OPENING_PAREN: 29,
  AT: -16,
  OPENING_BRACE: -16,
}, {
  OPENING_PAREN: -10,
  AT: -10,
  OPENING_BRACE: -10,
}, {
  OPENING_PAREN: -12,
  AT: -12,
  OPENING_BRACE: -12,
  COLON: -12,
  CLOSING_BRACE: -12,
  ELLIPSIS: -12,
  NAME: -12,
  FRAGMENT: -12,
  ON: -12,
  CLOSING_PAREN: -12,
  CLOSING_BRACKET: -12,
  DOLLAR: -12,
  NUMBER: -12,
  STRING_VALUE: -12,
  BLOCK_STRING_VALUE: -12,
  OPENING_BRACKET: -12,
  BANG: -12,
  EQUALS: -12,
}, {
  OPENING_PAREN: -13,
  AT: -13,
  OPENING_BRACE: -13,
  COLON: -13,
  CLOSING_BRACE: -13,
  ELLIPSIS: -13,
  NAME: -13,
  FRAGMENT: -13,
  ON: -13,
  CLOSING_PAREN: -13,
  CLOSING_BRACKET: -13,
  DOLLAR: -13,
  NUMBER: -13,
  STRING_VALUE: -13,
  BLOCK_STRING_VALUE: -13,
  OPENING_BRACKET: -13,
  BANG: -13,
  EQUALS: -13,
}, {
  OPENING_PAREN: -14,
  AT: -14,
  OPENING_BRACE: -14,
  COLON: -14,
  CLOSING_BRACE: -14,
  ELLIPSIS: -14,
  NAME: -14,
  FRAGMENT: -14,
  ON: -14,
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
  CLOSING_BRACE: 30,
  ELLIPSIS: 24,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_BRACE: -59,
  ELLIPSIS: -59,
  NAME: -59,
  FRAGMENT: -59,
  ON: -59,
}, {
  CLOSING_BRACE: -61,
  ELLIPSIS: -61,
  NAME: -61,
  FRAGMENT: -61,
  ON: -61,
}, {
  COLON: 33,
  OPENING_PAREN: 34,
  AT: -68,
  OPENING_BRACE: -68,
  CLOSING_BRACE: -68,
  ELLIPSIS: -68,
  NAME: -68,
  FRAGMENT: -68,
  ON: -68,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_BRACE: -62,
  ELLIPSIS: -62,
  NAME: -62,
  FRAGMENT: -62,
  ON: -62,
}, {
  NAME: 27,
  ON: 38,
  AT: -99,
  OPENING_BRACE: -99,
}, {
  CLOSING_BRACE: -63,
  ELLIPSIS: -63,
  NAME: -63,
  FRAGMENT: -63,
  ON: -63,
}, {
  ON: 39,
}, {
  ON: -95,
  AT: -95,
  CLOSING_BRACE: -95,
  ELLIPSIS: -95,
  NAME: -95,
  FRAGMENT: -95,
}, {
  AT: 43,
  OPENING_BRACE: -47,
}, {
  DOLLAR: 47,
}, {
  FRAGMENT: -56,
  NAME: -56,
  OPENING_BRACE: -56,
  $: -56,
  CLOSING_BRACE: -56,
  ELLIPSIS: -56,
  ON: -56,
}, {
  CLOSING_BRACE: -60,
  ELLIPSIS: -60,
  NAME: -60,
  FRAGMENT: -60,
  ON: -60,
}, {
  AT: 43,
  OPENING_BRACE: -47,
  CLOSING_BRACE: -47,
  ELLIPSIS: -47,
  NAME: -47,
  FRAGMENT: -47,
  ON: -47,
}, {
  NAME: -66,
  FRAGMENT: -66,
  ON: -66,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  OPENING_PAREN: 34,
  AT: -68,
  OPENING_BRACE: -68,
  CLOSING_BRACE: -68,
  ELLIPSIS: -68,
  NAME: -68,
  FRAGMENT: -68,
  ON: -68,
}, {
  AT: 43,
  CLOSING_BRACE: -47,
  ELLIPSIS: -47,
  NAME: -47,
  FRAGMENT: -47,
  ON: -47,
}, {
  AT: 43,
  OPENING_BRACE: -47,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  OPENING_BRACE: 9,
}, {
  AT: 43,
  OPENING_BRACE: -46,
  CLOSING_BRACE: -46,
  ELLIPSIS: -46,
  NAME: -46,
  FRAGMENT: -46,
  ON: -46,
}, {
  AT: -48,
  OPENING_BRACE: -48,
  CLOSING_BRACE: -48,
  ELLIPSIS: -48,
  NAME: -48,
  FRAGMENT: -48,
  ON: -48,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_PAREN: 61,
  DOLLAR: 47,
}, {
  CLOSING_PAREN: -17,
  DOLLAR: -17,
}, {
  COLON: 63,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  OPENING_BRACE: 9,
  CLOSING_BRACE: -58,
  ELLIPSIS: -58,
  NAME: -58,
  FRAGMENT: -58,
  ON: -58,
}, {
  CLOSING_PAREN: 67,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_PAREN: -69,
  NAME: -69,
  FRAGMENT: -69,
  ON: -69,
}, {
  COLON: 69,
}, {
  AT: 43,
  OPENING_BRACE: -47,
  CLOSING_BRACE: -47,
  ELLIPSIS: -47,
  NAME: -47,
  FRAGMENT: -47,
  ON: -47,
}, {
  CLOSING_BRACE: -96,
  ELLIPSIS: -96,
  NAME: -96,
  FRAGMENT: -96,
  ON: -96,
}, {
  OPENING_BRACE: 9,
}, {
  AT: -98,
  OPENING_BRACE: -98,
}, {
  AT: -24,
  OPENING_BRACE: -24,
  BANG: -24,
  EQUALS: -24,
  CLOSING_PAREN: -24,
  DOLLAR: -24,
  CLOSING_BRACKET: -24,
}, {
  AT: 43,
  OPENING_BRACE: -47,
}, {
  FRAGMENT: -7,
  NAME: -7,
  OPENING_BRACE: -7,
  $: -7,
}, {
  AT: -49,
  OPENING_BRACE: -49,
  CLOSING_BRACE: -49,
  ELLIPSIS: -49,
  NAME: -49,
  FRAGMENT: -49,
  ON: -49,
}, {
  OPENING_PAREN: 34,
  AT: -68,
  OPENING_BRACE: -68,
  CLOSING_BRACE: -68,
  ELLIPSIS: -68,
  NAME: -68,
  FRAGMENT: -68,
  ON: -68,
}, {
  AT: -15,
  OPENING_BRACE: -15,
}, {
  CLOSING_PAREN: -18,
  DOLLAR: -18,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
  OPENING_BRACKET: 77,
}, {
  COLON: -20,
  CLOSING_PAREN: -20,
  NAME: -20,
  FRAGMENT: -20,
  ON: -20,
  CLOSING_BRACKET: -20,
  DOLLAR: -20,
  NUMBER: -20,
  STRING_VALUE: -20,
  BLOCK_STRING_VALUE: -20,
  OPENING_BRACKET: -20,
  OPENING_BRACE: -20,
  CLOSING_BRACE: -20,
}, {
  CLOSING_BRACE: -64,
  ELLIPSIS: -64,
  NAME: -64,
  FRAGMENT: -64,
  ON: -64,
}, {
  CLOSING_BRACE: -57,
  ELLIPSIS: -57,
  NAME: -57,
  FRAGMENT: -57,
  ON: -57,
}, {
  AT: -67,
  OPENING_BRACE: -67,
  CLOSING_BRACE: -67,
  ELLIPSIS: -67,
  NAME: -67,
  FRAGMENT: -67,
  ON: -67,
}, {
  CLOSING_PAREN: -70,
  NAME: -70,
  FRAGMENT: -70,
  ON: -70,
}, {
  BLOCK_STRING_VALUE: 85,
  DOLLAR: 47,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 91,
  OPENING_BRACKET: 89,
  STRING_VALUE: 84,
}, {
  OPENING_BRACE: 9,
  CLOSING_BRACE: -58,
  ELLIPSIS: -58,
  NAME: -58,
  FRAGMENT: -58,
  ON: -58,
}, {
  CLOSING_BRACE: -97,
  ELLIPSIS: -97,
  NAME: -97,
  FRAGMENT: -97,
  ON: -97,
}, {
  OPENING_BRACE: 9,
}, {
  AT: -50,
  OPENING_BRACE: -50,
  CLOSING_BRACE: -50,
  ELLIPSIS: -50,
  NAME: -50,
  FRAGMENT: -50,
  ON: -50,
}, {
  EQUALS: 95,
  AT: -29,
  CLOSING_PAREN: -29,
  DOLLAR: -29,
}, {
  BANG: 96,
  EQUALS: -21,
  AT: -21,
  CLOSING_PAREN: -21,
  DOLLAR: -21,
  CLOSING_BRACKET: -21,
}, {
  BANG: 97,
  EQUALS: -22,
  AT: -22,
  CLOSING_PAREN: -22,
  DOLLAR: -22,
  CLOSING_BRACKET: -22,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
  OPENING_BRACKET: 77,
}, {
  EQUALS: -23,
  AT: -23,
  CLOSING_PAREN: -23,
  DOLLAR: -23,
  CLOSING_BRACKET: -23,
}, {
  CLOSING_PAREN: -71,
  NAME: -71,
  FRAGMENT: -71,
  ON: -71,
}, {
  CLOSING_PAREN: -77,
  NAME: -77,
  FRAGMENT: -77,
  ON: -77,
  CLOSING_BRACKET: -77,
  DOLLAR: -77,
  NUMBER: -77,
  STRING_VALUE: -77,
  BLOCK_STRING_VALUE: -77,
  OPENING_BRACKET: -77,
  OPENING_BRACE: -77,
  CLOSING_BRACE: -77,
}, {
  CLOSING_PAREN: -78,
  NAME: -78,
  FRAGMENT: -78,
  ON: -78,
  CLOSING_BRACKET: -78,
  DOLLAR: -78,
  NUMBER: -78,
  STRING_VALUE: -78,
  BLOCK_STRING_VALUE: -78,
  OPENING_BRACKET: -78,
  OPENING_BRACE: -78,
  CLOSING_BRACE: -78,
}, {
  CLOSING_PAREN: -35,
  NAME: -35,
  FRAGMENT: -35,
  ON: -35,
  CLOSING_BRACKET: -35,
  DOLLAR: -35,
  NUMBER: -35,
  STRING_VALUE: -35,
  BLOCK_STRING_VALUE: -35,
  OPENING_BRACKET: -35,
  OPENING_BRACE: -35,
  AT: -35,
  CLOSING_BRACE: -35,
}, {
  CLOSING_PAREN: -79,
  NAME: -79,
  FRAGMENT: -79,
  ON: -79,
  CLOSING_BRACKET: -79,
  DOLLAR: -79,
  NUMBER: -79,
  STRING_VALUE: -79,
  BLOCK_STRING_VALUE: -79,
  OPENING_BRACKET: -79,
  OPENING_BRACE: -79,
  CLOSING_BRACE: -79,
}, {
  CLOSING_PAREN: -83,
  NAME: -83,
  FRAGMENT: -83,
  ON: -83,
  CLOSING_BRACKET: -83,
  DOLLAR: -83,
  NUMBER: -83,
  STRING_VALUE: -83,
  BLOCK_STRING_VALUE: -83,
  OPENING_BRACKET: -83,
  OPENING_BRACE: -83,
  AT: -83,
  CLOSING_BRACE: -83,
}, {
  CLOSING_PAREN: -84,
  NAME: -84,
  FRAGMENT: -84,
  ON: -84,
  CLOSING_BRACKET: -84,
  DOLLAR: -84,
  NUMBER: -84,
  STRING_VALUE: -84,
  BLOCK_STRING_VALUE: -84,
  OPENING_BRACKET: -84,
  OPENING_BRACE: -84,
  AT: -84,
  CLOSING_BRACE: -84,
}, {
  CLOSING_PAREN: -80,
  NAME: -80,
  FRAGMENT: -80,
  ON: -80,
  CLOSING_BRACKET: -80,
  DOLLAR: -80,
  NUMBER: -80,
  STRING_VALUE: -80,
  BLOCK_STRING_VALUE: -80,
  OPENING_BRACKET: -80,
  OPENING_BRACE: -80,
  CLOSING_BRACE: -80,
}, {
  CLOSING_PAREN: -36,
  NAME: -36,
  FRAGMENT: -36,
  ON: -36,
  CLOSING_BRACKET: -36,
  DOLLAR: -36,
  NUMBER: -36,
  STRING_VALUE: -36,
  BLOCK_STRING_VALUE: -36,
  OPENING_BRACKET: -36,
  OPENING_BRACE: -36,
  AT: -36,
  CLOSING_BRACE: -36,
}, {
  CLOSING_PAREN: -81,
  NAME: -81,
  FRAGMENT: -81,
  ON: -81,
  CLOSING_BRACKET: -81,
  DOLLAR: -81,
  NUMBER: -81,
  STRING_VALUE: -81,
  BLOCK_STRING_VALUE: -81,
  OPENING_BRACKET: -81,
  OPENING_BRACE: -81,
  CLOSING_BRACE: -81,
}, {
  BLOCK_STRING_VALUE: 85,
  CLOSING_BRACKET: 99,
  DOLLAR: 47,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 91,
  OPENING_BRACKET: 89,
  STRING_VALUE: 84,
}, {
  CLOSING_PAREN: -82,
  NAME: -82,
  FRAGMENT: -82,
  ON: -82,
  CLOSING_BRACKET: -82,
  DOLLAR: -82,
  NUMBER: -82,
  STRING_VALUE: -82,
  BLOCK_STRING_VALUE: -82,
  OPENING_BRACKET: -82,
  OPENING_BRACE: -82,
  CLOSING_BRACE: -82,
}, {
  CLOSING_BRACE: 102,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_BRACE: -65,
  ELLIPSIS: -65,
  NAME: -65,
  FRAGMENT: -65,
  ON: -65,
}, {
  FRAGMENT: -94,
  NAME: -94,
  OPENING_BRACE: -94,
  $: -94,
}, {
  AT: 109,
  CLOSING_PAREN: -52,
  DOLLAR: -52,
}, {
  BLOCK_STRING_VALUE: 85,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 117,
  OPENING_BRACKET: 115,
  STRING_VALUE: 84,
}, {
  EQUALS: -27,
  AT: -27,
  CLOSING_PAREN: -27,
  DOLLAR: -27,
  CLOSING_BRACKET: -27,
}, {
  EQUALS: -26,
  AT: -26,
  CLOSING_PAREN: -26,
  DOLLAR: -26,
  CLOSING_BRACKET: -26,
}, {
  CLOSING_BRACKET: 118,
}, {
  CLOSING_PAREN: -85,
  NAME: -85,
  FRAGMENT: -85,
  ON: -85,
  CLOSING_BRACKET: -85,
  DOLLAR: -85,
  NUMBER: -85,
  STRING_VALUE: -85,
  BLOCK_STRING_VALUE: -85,
  OPENING_BRACKET: -85,
  OPENING_BRACE: -85,
  CLOSING_BRACE: -85,
}, {
  BLOCK_STRING_VALUE: 85,
  CLOSING_BRACKET: 119,
  DOLLAR: 47,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 91,
  OPENING_BRACKET: 89,
  STRING_VALUE: 84,
}, {
  CLOSING_BRACKET: -87,
  DOLLAR: -87,
  NUMBER: -87,
  STRING_VALUE: -87,
  BLOCK_STRING_VALUE: -87,
  OPENING_BRACKET: -87,
  OPENING_BRACE: -87,
  NAME: -87,
  FRAGMENT: -87,
  ON: -87,
}, {
  CLOSING_PAREN: -89,
  NAME: -89,
  FRAGMENT: -89,
  ON: -89,
  CLOSING_BRACKET: -89,
  DOLLAR: -89,
  NUMBER: -89,
  STRING_VALUE: -89,
  BLOCK_STRING_VALUE: -89,
  OPENING_BRACKET: -89,
  OPENING_BRACE: -89,
  CLOSING_BRACE: -89,
}, {
  CLOSING_BRACE: 121,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_BRACE: -91,
  NAME: -91,
  FRAGMENT: -91,
  ON: -91,
}, {
  COLON: 123,
}, {
  CLOSING_PAREN: -19,
  DOLLAR: -19,
}, {
  AT: 109,
  CLOSING_PAREN: -51,
  DOLLAR: -51,
}, {
  AT: -53,
  CLOSING_PAREN: -53,
  DOLLAR: -53,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  AT: -28,
  CLOSING_PAREN: -28,
  DOLLAR: -28,
}, {
  AT: -30,
  CLOSING_PAREN: -30,
  DOLLAR: -30,
  CLOSING_BRACKET: -30,
  NUMBER: -30,
  STRING_VALUE: -30,
  BLOCK_STRING_VALUE: -30,
  OPENING_BRACKET: -30,
  OPENING_BRACE: -30,
  NAME: -30,
  FRAGMENT: -30,
  ON: -30,
  CLOSING_BRACE: -30,
}, {
  AT: -31,
  CLOSING_PAREN: -31,
  DOLLAR: -31,
  CLOSING_BRACKET: -31,
  NUMBER: -31,
  STRING_VALUE: -31,
  BLOCK_STRING_VALUE: -31,
  OPENING_BRACKET: -31,
  OPENING_BRACE: -31,
  NAME: -31,
  FRAGMENT: -31,
  ON: -31,
  CLOSING_BRACE: -31,
}, {
  AT: -32,
  CLOSING_PAREN: -32,
  DOLLAR: -32,
  CLOSING_BRACKET: -32,
  NUMBER: -32,
  STRING_VALUE: -32,
  BLOCK_STRING_VALUE: -32,
  OPENING_BRACKET: -32,
  OPENING_BRACE: -32,
  NAME: -32,
  FRAGMENT: -32,
  ON: -32,
  CLOSING_BRACE: -32,
}, {
  AT: -33,
  CLOSING_PAREN: -33,
  DOLLAR: -33,
  CLOSING_BRACKET: -33,
  NUMBER: -33,
  STRING_VALUE: -33,
  BLOCK_STRING_VALUE: -33,
  OPENING_BRACKET: -33,
  OPENING_BRACE: -33,
  NAME: -33,
  FRAGMENT: -33,
  ON: -33,
  CLOSING_BRACE: -33,
}, {
  BLOCK_STRING_VALUE: 85,
  CLOSING_BRACKET: 126,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 117,
  OPENING_BRACKET: 115,
  STRING_VALUE: 84,
}, {
  AT: -34,
  CLOSING_PAREN: -34,
  DOLLAR: -34,
  CLOSING_BRACKET: -34,
  NUMBER: -34,
  STRING_VALUE: -34,
  BLOCK_STRING_VALUE: -34,
  OPENING_BRACKET: -34,
  OPENING_BRACE: -34,
  NAME: -34,
  FRAGMENT: -34,
  ON: -34,
  CLOSING_BRACE: -34,
}, {
  CLOSING_BRACE: 129,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  BANG: -25,
  EQUALS: -25,
  AT: -25,
  CLOSING_PAREN: -25,
  DOLLAR: -25,
  CLOSING_BRACKET: -25,
}, {
  CLOSING_PAREN: -86,
  NAME: -86,
  FRAGMENT: -86,
  ON: -86,
  CLOSING_BRACKET: -86,
  DOLLAR: -86,
  NUMBER: -86,
  STRING_VALUE: -86,
  BLOCK_STRING_VALUE: -86,
  OPENING_BRACKET: -86,
  OPENING_BRACE: -86,
  CLOSING_BRACE: -86,
}, {
  CLOSING_BRACKET: -88,
  DOLLAR: -88,
  NUMBER: -88,
  STRING_VALUE: -88,
  BLOCK_STRING_VALUE: -88,
  OPENING_BRACKET: -88,
  OPENING_BRACE: -88,
  NAME: -88,
  FRAGMENT: -88,
  ON: -88,
}, {
  CLOSING_PAREN: -90,
  NAME: -90,
  FRAGMENT: -90,
  ON: -90,
  CLOSING_BRACKET: -90,
  DOLLAR: -90,
  NUMBER: -90,
  STRING_VALUE: -90,
  BLOCK_STRING_VALUE: -90,
  OPENING_BRACKET: -90,
  OPENING_BRACE: -90,
  CLOSING_BRACE: -90,
}, {
  CLOSING_BRACE: -92,
  NAME: -92,
  FRAGMENT: -92,
  ON: -92,
}, {
  BLOCK_STRING_VALUE: 85,
  DOLLAR: 47,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 91,
  OPENING_BRACKET: 89,
  STRING_VALUE: 84,
}, {
  AT: -54,
  CLOSING_PAREN: -54,
  DOLLAR: -54,
}, {
  OPENING_PAREN: 135,
  AT: -73,
  CLOSING_PAREN: -73,
  DOLLAR: -73,
}, {
  AT: -37,
  CLOSING_PAREN: -37,
  DOLLAR: -37,
  CLOSING_BRACKET: -37,
  NUMBER: -37,
  STRING_VALUE: -37,
  BLOCK_STRING_VALUE: -37,
  OPENING_BRACKET: -37,
  OPENING_BRACE: -37,
  NAME: -37,
  FRAGMENT: -37,
  ON: -37,
  CLOSING_BRACE: -37,
}, {
  BLOCK_STRING_VALUE: 85,
  CLOSING_BRACKET: 136,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 117,
  OPENING_BRACKET: 115,
  STRING_VALUE: 84,
}, {
  CLOSING_BRACKET: -39,
  NUMBER: -39,
  STRING_VALUE: -39,
  BLOCK_STRING_VALUE: -39,
  OPENING_BRACKET: -39,
  OPENING_BRACE: -39,
  NAME: -39,
  FRAGMENT: -39,
  ON: -39,
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
  FRAGMENT: -41,
  ON: -41,
  CLOSING_BRACE: -41,
}, {
  CLOSING_BRACE: 138,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_BRACE: -43,
  NAME: -43,
  FRAGMENT: -43,
  ON: -43,
}, {
  COLON: 140,
}, {
  CLOSING_BRACE: -93,
  NAME: -93,
  FRAGMENT: -93,
  ON: -93,
}, {
  AT: -55,
  CLOSING_PAREN: -55,
  DOLLAR: -55,
}, {
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  AT: -38,
  CLOSING_PAREN: -38,
  DOLLAR: -38,
  CLOSING_BRACKET: -38,
  NUMBER: -38,
  STRING_VALUE: -38,
  BLOCK_STRING_VALUE: -38,
  OPENING_BRACKET: -38,
  OPENING_BRACE: -38,
  NAME: -38,
  FRAGMENT: -38,
  ON: -38,
  CLOSING_BRACE: -38,
}, {
  CLOSING_BRACKET: -40,
  NUMBER: -40,
  STRING_VALUE: -40,
  BLOCK_STRING_VALUE: -40,
  OPENING_BRACKET: -40,
  OPENING_BRACE: -40,
  NAME: -40,
  FRAGMENT: -40,
  ON: -40,
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
  FRAGMENT: -42,
  ON: -42,
  CLOSING_BRACE: -42,
}, {
  CLOSING_BRACE: -44,
  NAME: -44,
  FRAGMENT: -44,
  ON: -44,
}, {
  BLOCK_STRING_VALUE: 85,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 117,
  OPENING_BRACKET: 115,
  STRING_VALUE: 84,
}, {
  CLOSING_PAREN: 145,
  FRAGMENT: 16,
  NAME: 15,
  ON: 17,
}, {
  CLOSING_PAREN: -74,
  NAME: -74,
  FRAGMENT: -74,
  ON: -74,
}, {
  COLON: 147,
}, {
  CLOSING_BRACE: -45,
  NAME: -45,
  FRAGMENT: -45,
  ON: -45,
}, {
  AT: -72,
  CLOSING_PAREN: -72,
  DOLLAR: -72,
}, {
  CLOSING_PAREN: -75,
  NAME: -75,
  FRAGMENT: -75,
  ON: -75,
}, {
  BLOCK_STRING_VALUE: 85,
  FRAGMENT: 16,
  NAME: 15,
  NUMBER: 82,
  ON: 17,
  OPENING_BRACE: 117,
  OPENING_BRACKET: 115,
  STRING_VALUE: 84,
}, {
  CLOSING_PAREN: -76,
  NAME: -76,
  FRAGMENT: -76,
  ON: -76,
}];
const gotos: Array<Gotos> = [
  {
    Definition: 3,
    DefinitionList: 2,
    Document: 1,
    ExecutableDefinition: 4,
    FragmentDefinition: 10,
    OperationDefinition: 5,
    OperationType: 6,
    SelectionSet: 8,
  },
  {},
  {
    Definition: 12,
    ExecutableDefinition: 4,
    FragmentDefinition: 10,
    OperationDefinition: 5,
    OperationType: 6,
    SelectionSet: 8,
  },
  {},
  {},
  {},
  {
    Name: 14,
    OperationNameOpt: 13,
  },
  {},
  {},
  {
    Alias: 22,
    Field: 20,
    FragmentSpread: 23,
    InlineFragment: 25,
    Name: 21,
    Selection: 19,
    SelectionList: 18,
  },
  {},
  {
    FragmentName: 26,
  },
  {},
  {
    VariableDefinitionsOpt: 28,
  },
  {},
  {},
  {},
  {},
  {
    Alias: 22,
    Field: 20,
    FragmentSpread: 23,
    InlineFragment: 25,
    Name: 21,
    Selection: 31,
  },
  {},
  {},
  {
    ArgumentsOpt: 32,
  },
  {
    Name: 35,
  },
  {},
  {
    FragmentName: 36,
    TypeConditionOpt: 37,
  },
  {},
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 40,
  },
  {
    Variable: 46,
    VariableDefinition: 45,
    VariableDefinitionList: 44,
  },
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 48,
  },
  {},
  {
    Argument: 50,
    ArgumentList: 49,
    Name: 51,
  },
  {
    ArgumentsOpt: 52,
  },
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 53,
  },
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 54,
  },
  {
    Name: 56,
    NamedType: 55,
  },
  {
    Name: 56,
    NamedType: 57,
  },
  {
    SelectionSet: 58,
  },
  {
    Directive: 59,
  },
  {},
  {
    Name: 60,
  },
  {
    Variable: 46,
    VariableDefinition: 62,
  },
  {},
  {},
  {
    Name: 64,
  },
  {
    SelectionSet: 66,
    SelectionSetOpt: 65,
  },
  {
    Argument: 68,
    Name: 51,
  },
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 70,
  },
  {},
  {
    SelectionSet: 71,
  },
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 72,
  },
  {},
  {},
  {
    ArgumentsOpt: 73,
  },
  {},
  {},
  {
    ListType: 76,
    Name: 56,
    NamedType: 75,
    NonNullType: 78,
    Type: 74,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValue: 88,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 79,
    Variable: 80,
  },
  {
    SelectionSet: 66,
    SelectionSetOpt: 92,
  },
  {},
  {
    SelectionSet: 93,
  },
  {},
  {
    DefaultValueOpt: 94,
  },
  {},
  {},
  {
    ListType: 76,
    Name: 56,
    NamedType: 75,
    NonNullType: 78,
    Type: 98,
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
    ListValue: 88,
    ListValueList: 100,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 101,
    Variable: 80,
  },
  {},
  {
    Name: 105,
    ObjectField: 104,
    ObjectFieldList: 103,
  },
  {},
  {},
  {
    DirectiveConst: 108,
    DirectiveConstList: 107,
    DirectivesConstOpt: 106,
  },
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 110,
  },
  {},
  {},
  {},
  {},
  {
    ListValue: 88,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 120,
    Variable: 80,
  },
  {},
  {},
  {
    Name: 105,
    ObjectField: 122,
  },
  {},
  {},
  {},
  {
    DirectiveConst: 124,
  },
  {},
  {
    Name: 125,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValueConst: 114,
    ListValueConstList: 127,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 128,
  },
  {},
  {
    Name: 132,
    ObjectFieldConst: 131,
    ObjectFieldConstList: 130,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValue: 88,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 133,
    Variable: 80,
  },
  {},
  {
    ArgumentsConstOpt: 134,
  },
  {},
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 137,
  },
  {},
  {},
  {
    Name: 132,
    ObjectFieldConst: 139,
  },
  {},
  {},
  {},
  {},
  {
    ArgumentConst: 142,
    ArgumentConstList: 141,
    Name: 143,
  },
  {},
  {},
  {},
  {},
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 144,
  },
  {
    ArgumentConst: 146,
    Name: 143,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 148,
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
  production: 'OperationNameOpt',
  pop: 1,
  action: r10,
}, {
  production: 'OperationNameOpt',
  pop: 0,
  action: r11,
}, {
  production: 'Name',
  pop: 1,
  action: r12,
}, {
  production: 'Name',
  pop: 1,
  action: r13,
}, {
  production: 'Name',
  pop: 1,
  action: r14,
}, {
  production: 'VariableDefinitionsOpt',
  pop: 3,
  action: r15,
}, {
  production: 'VariableDefinitionsOpt',
  pop: 0,
  action: r16,
}, {
  production: 'VariableDefinitionList',
  pop: 1,
  action: r17,
}, {
  production: 'VariableDefinitionList',
  pop: 2,
  action: r18,
}, {
  production: 'VariableDefinition',
  pop: 5,
  action: r19,
}, {
  production: 'Variable',
  pop: 2,
  action: r20,
}, {
  production: 'Type',
  pop: 1,
  action: r21,
}, {
  production: 'Type',
  pop: 1,
  action: r22,
}, {
  production: 'Type',
  pop: 1,
  action: r23,
}, {
  production: 'NamedType',
  pop: 1,
  action: r24,
}, {
  production: 'ListType',
  pop: 3,
  action: r25,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r26,
}, {
  production: 'NonNullType',
  pop: 2,
  action: r27,
}, {
  production: 'DefaultValueOpt',
  pop: 2,
  action: r28,
}, {
  production: 'DefaultValueOpt',
  pop: 0,
  action: r29,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r30,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r31,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r32,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r33,
}, {
  production: 'ValueConst',
  pop: 1,
  action: r34,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r35,
}, {
  production: 'NamedValue',
  pop: 1,
  action: r36,
}, {
  production: 'ListValueConst',
  pop: 2,
  action: r37,
}, {
  production: 'ListValueConst',
  pop: 3,
  action: r38,
}, {
  production: 'ListValueConstList',
  pop: 1,
  action: r39,
}, {
  production: 'ListValueConstList',
  pop: 2,
  action: r40,
}, {
  production: 'ObjectValueConst',
  pop: 2,
  action: r41,
}, {
  production: 'ObjectValueConst',
  pop: 3,
  action: r42,
}, {
  production: 'ObjectFieldConstList',
  pop: 1,
  action: r43,
}, {
  production: 'ObjectFieldConstList',
  pop: 2,
  action: r44,
}, {
  production: 'ObjectFieldConst',
  pop: 3,
  action: r45,
}, {
  production: 'DirectivesOpt',
  pop: 1,
  action: r46,
}, {
  production: 'DirectivesOpt',
  pop: 0,
  action: r47,
}, {
  production: 'DirectiveList',
  pop: 1,
  action: r48,
}, {
  production: 'DirectiveList',
  pop: 2,
  action: r49,
}, {
  production: 'Directive',
  pop: 3,
  action: r50,
}, {
  production: 'DirectivesConstOpt',
  pop: 1,
  action: r51,
}, {
  production: 'DirectivesConstOpt',
  pop: 0,
  action: r52,
}, {
  production: 'DirectiveConstList',
  pop: 1,
  action: r53,
}, {
  production: 'DirectiveConstList',
  pop: 2,
  action: r54,
}, {
  production: 'DirectiveConst',
  pop: 3,
  action: r55,
}, {
  production: 'SelectionSet',
  pop: 3,
  action: r56,
}, {
  production: 'SelectionSetOpt',
  pop: 1,
  action: r57,
}, {
  production: 'SelectionSetOpt',
  pop: 0,
  action: r58,
}, {
  production: 'SelectionList',
  pop: 1,
  action: r59,
}, {
  production: 'SelectionList',
  pop: 2,
  action: r60,
}, {
  production: 'Selection',
  pop: 1,
  action: r61,
}, {
  production: 'Selection',
  pop: 1,
  action: r62,
}, {
  production: 'Selection',
  pop: 1,
  action: r63,
}, {
  production: 'Field',
  pop: 4,
  action: r64,
}, {
  production: 'Field',
  pop: 5,
  action: r65,
}, {
  production: 'Alias',
  pop: 2,
  action: r66,
}, {
  production: 'ArgumentsOpt',
  pop: 3,
  action: r67,
}, {
  production: 'ArgumentsOpt',
  pop: 0,
  action: r68,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r69,
}, {
  production: 'ArgumentList',
  pop: 2,
  action: r70,
}, {
  production: 'Argument',
  pop: 3,
  action: r71,
}, {
  production: 'ArgumentsConstOpt',
  pop: 3,
  action: r72,
}, {
  production: 'ArgumentsConstOpt',
  pop: 0,
  action: r73,
}, {
  production: 'ArgumentConstList',
  pop: 1,
  action: r74,
}, {
  production: 'ArgumentConstList',
  pop: 2,
  action: r75,
}, {
  production: 'ArgumentConst',
  pop: 3,
  action: r76,
}, {
  production: 'Value',
  pop: 1,
  action: r77,
}, {
  production: 'Value',
  pop: 1,
  action: r78,
}, {
  production: 'Value',
  pop: 1,
  action: r79,
}, {
  production: 'Value',
  pop: 1,
  action: r80,
}, {
  production: 'Value',
  pop: 1,
  action: r81,
}, {
  production: 'Value',
  pop: 1,
  action: r82,
}, {
  production: 'StringValue',
  pop: 1,
  action: r83,
}, {
  production: 'StringValue',
  pop: 1,
  action: r84,
}, {
  production: 'ListValue',
  pop: 2,
  action: r85,
}, {
  production: 'ListValue',
  pop: 3,
  action: r86,
}, {
  production: 'ListValueList',
  pop: 1,
  action: r87,
}, {
  production: 'ListValueList',
  pop: 2,
  action: r88,
}, {
  production: 'ObjectValue',
  pop: 2,
  action: r89,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r90,
}, {
  production: 'ObjectFieldList',
  pop: 1,
  action: r91,
}, {
  production: 'ObjectFieldList',
  pop: 2,
  action: r92,
}, {
  production: 'ObjectField',
  pop: 3,
  action: r93,
}, {
  production: 'FragmentDefinition',
  pop: 6,
  action: r94,
}, {
  production: 'FragmentName',
  pop: 1,
  action: r95,
}, {
  production: 'FragmentSpread',
  pop: 3,
  action: r96,
}, {
  production: 'InlineFragment',
  pop: 4,
  action: r97,
}, {
  production: 'TypeConditionOpt',
  pop: 2,
  action: r98,
}, {
  production: 'TypeConditionOpt',
  pop: 0,
  action: r99,
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
      // - TS2590: Expression produces a union type that is too complex to represent.
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
