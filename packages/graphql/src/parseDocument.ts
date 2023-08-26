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
  $$ = {
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
  $$ = {
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
const actions = [
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 11,
    },
    NAME: {
      kind: 'Shift',
      state: 7,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    ['$']: {
      kind: 'Accept',
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 11,
    },
    NAME: {
      kind: 'Shift',
      state: 7,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 2,
    },
    NAME: {
      kind: 'Reduce',
      rule: 2,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 2,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 4,
    },
    NAME: {
      kind: 'Reduce',
      rule: 4,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 4,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 6,
    },
    NAME: {
      kind: 'Reduce',
      rule: 6,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 6,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 11,
    },
    AT: {
      kind: 'Reduce',
      rule: 11,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 9,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 9,
    },
    ON: {
      kind: 'Reduce',
      rule: 9,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 9,
    },
    AT: {
      kind: 'Reduce',
      rule: 9,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 9,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 8,
    },
    NAME: {
      kind: 'Reduce',
      rule: 8,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 8,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    ELLIPSIS: {
      kind: 'Shift',
      state: 24,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 5,
    },
    NAME: {
      kind: 'Reduce',
      rule: 5,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 5,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    NAME: {
      kind: 'Shift',
      state: 27,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 3,
    },
    NAME: {
      kind: 'Reduce',
      rule: 3,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 3,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 29,
    },
    AT: {
      kind: 'Reduce',
      rule: 16,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 16,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 10,
    },
    AT: {
      kind: 'Reduce',
      rule: 10,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 10,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 12,
    },
    AT: {
      kind: 'Reduce',
      rule: 12,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 12,
    },
    COLON: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 12,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 12,
    },
    NAME: {
      kind: 'Reduce',
      rule: 12,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 12,
    },
    ON: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 12,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 12,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 12,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 12,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 12,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 12,
    },
    BANG: {
      kind: 'Reduce',
      rule: 12,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 12,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 13,
    },
    AT: {
      kind: 'Reduce',
      rule: 13,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 13,
    },
    COLON: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 13,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 13,
    },
    NAME: {
      kind: 'Reduce',
      rule: 13,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 13,
    },
    ON: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 13,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 13,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 13,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 13,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 13,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 13,
    },
    BANG: {
      kind: 'Reduce',
      rule: 13,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
    AT: {
      kind: 'Reduce',
      rule: 14,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 14,
    },
    COLON: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 14,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 14,
    },
    NAME: {
      kind: 'Reduce',
      rule: 14,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 14,
    },
    ON: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 14,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 14,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 14,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 14,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 14,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 14,
    },
    BANG: {
      kind: 'Reduce',
      rule: 14,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 14,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 30,
    },
    ELLIPSIS: {
      kind: 'Shift',
      state: 24,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 59,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 59,
    },
    NAME: {
      kind: 'Reduce',
      rule: 59,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 59,
    },
    ON: {
      kind: 'Reduce',
      rule: 59,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 61,
    },
    NAME: {
      kind: 'Reduce',
      rule: 61,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 61,
    },
    ON: {
      kind: 'Reduce',
      rule: 61,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 34,
    },
    AT: {
      kind: 'Reduce',
      rule: 68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 68,
    },
    NAME: {
      kind: 'Reduce',
      rule: 68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 68,
    },
    ON: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 62,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 62,
    },
    NAME: {
      kind: 'Reduce',
      rule: 62,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 62,
    },
    ON: {
      kind: 'Reduce',
      rule: 62,
    },
  },
  {
    NAME: {
      kind: 'Shift',
      state: 27,
    },
    ON: {
      kind: 'Shift',
      state: 38,
    },
    AT: {
      kind: 'Reduce',
      rule: 99,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 99,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 63,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 63,
    },
    NAME: {
      kind: 'Reduce',
      rule: 63,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 63,
    },
    ON: {
      kind: 'Reduce',
      rule: 63,
    },
  },
  {
    ON: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    ON: {
      kind: 'Reduce',
      rule: 95,
    },
    AT: {
      kind: 'Reduce',
      rule: 95,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 95,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 95,
    },
    NAME: {
      kind: 'Reduce',
      rule: 95,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 95,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 56,
    },
    NAME: {
      kind: 'Reduce',
      rule: 56,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 56,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 56,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 56,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 56,
    },
    ON: {
      kind: 'Reduce',
      rule: 56,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 60,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 60,
    },
    NAME: {
      kind: 'Reduce',
      rule: 60,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 60,
    },
    ON: {
      kind: 'Reduce',
      rule: 60,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 47,
    },
    NAME: {
      kind: 'Reduce',
      rule: 47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 47,
    },
    ON: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 66,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 66,
    },
    ON: {
      kind: 'Reduce',
      rule: 66,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 34,
    },
    AT: {
      kind: 'Reduce',
      rule: 68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 68,
    },
    NAME: {
      kind: 'Reduce',
      rule: 68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 68,
    },
    ON: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 47,
    },
    NAME: {
      kind: 'Reduce',
      rule: 47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 47,
    },
    ON: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 46,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 46,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 46,
    },
    NAME: {
      kind: 'Reduce',
      rule: 46,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 46,
    },
    ON: {
      kind: 'Reduce',
      rule: 46,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 48,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 48,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 48,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 48,
    },
    NAME: {
      kind: 'Reduce',
      rule: 48,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 48,
    },
    ON: {
      kind: 'Reduce',
      rule: 48,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 61,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 17,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 17,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 63,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 58,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 58,
    },
    NAME: {
      kind: 'Reduce',
      rule: 58,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 58,
    },
    ON: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 67,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 69,
    },
    NAME: {
      kind: 'Reduce',
      rule: 69,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 69,
    },
    ON: {
      kind: 'Reduce',
      rule: 69,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 69,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 47,
    },
    NAME: {
      kind: 'Reduce',
      rule: 47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 47,
    },
    ON: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 96,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 96,
    },
    NAME: {
      kind: 'Reduce',
      rule: 96,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 96,
    },
    ON: {
      kind: 'Reduce',
      rule: 96,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 98,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 98,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 24,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 24,
    },
    BANG: {
      kind: 'Reduce',
      rule: 24,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 24,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 24,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 24,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 24,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 7,
    },
    NAME: {
      kind: 'Reduce',
      rule: 7,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 7,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 49,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 49,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 49,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 49,
    },
    NAME: {
      kind: 'Reduce',
      rule: 49,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 49,
    },
    ON: {
      kind: 'Reduce',
      rule: 49,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 34,
    },
    AT: {
      kind: 'Reduce',
      rule: 68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 68,
    },
    NAME: {
      kind: 'Reduce',
      rule: 68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 68,
    },
    ON: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 15,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 15,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 18,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 18,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 77,
    },
  },
  {
    COLON: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 20,
    },
    NAME: {
      kind: 'Reduce',
      rule: 20,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 20,
    },
    ON: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 20,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 20,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 20,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 20,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 20,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 20,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 20,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 64,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 64,
    },
    NAME: {
      kind: 'Reduce',
      rule: 64,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 64,
    },
    ON: {
      kind: 'Reduce',
      rule: 64,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 57,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 57,
    },
    NAME: {
      kind: 'Reduce',
      rule: 57,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 57,
    },
    ON: {
      kind: 'Reduce',
      rule: 57,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 67,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 67,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 67,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 67,
    },
    NAME: {
      kind: 'Reduce',
      rule: 67,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 67,
    },
    ON: {
      kind: 'Reduce',
      rule: 67,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 70,
    },
    NAME: {
      kind: 'Reduce',
      rule: 70,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 70,
    },
    ON: {
      kind: 'Reduce',
      rule: 70,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 58,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 58,
    },
    NAME: {
      kind: 'Reduce',
      rule: 58,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 58,
    },
    ON: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 97,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 97,
    },
    NAME: {
      kind: 'Reduce',
      rule: 97,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 97,
    },
    ON: {
      kind: 'Reduce',
      rule: 97,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 50,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 50,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 50,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 50,
    },
    NAME: {
      kind: 'Reduce',
      rule: 50,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 50,
    },
    ON: {
      kind: 'Reduce',
      rule: 50,
    },
  },
  {
    EQUALS: {
      kind: 'Shift',
      state: 95,
    },
    AT: {
      kind: 'Reduce',
      rule: 29,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 29,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 29,
    },
  },
  {
    BANG: {
      kind: 'Shift',
      state: 96,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 21,
    },
    AT: {
      kind: 'Reduce',
      rule: 21,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 21,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 21,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 21,
    },
  },
  {
    BANG: {
      kind: 'Shift',
      state: 97,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 22,
    },
    AT: {
      kind: 'Reduce',
      rule: 22,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 22,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 22,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 22,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 77,
    },
  },
  {
    EQUALS: {
      kind: 'Reduce',
      rule: 23,
    },
    AT: {
      kind: 'Reduce',
      rule: 23,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 23,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 23,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 23,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 71,
    },
    NAME: {
      kind: 'Reduce',
      rule: 71,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 71,
    },
    ON: {
      kind: 'Reduce',
      rule: 71,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 77,
    },
    NAME: {
      kind: 'Reduce',
      rule: 77,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 77,
    },
    ON: {
      kind: 'Reduce',
      rule: 77,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 77,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 77,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 77,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 77,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 77,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 77,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 77,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 77,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 78,
    },
    NAME: {
      kind: 'Reduce',
      rule: 78,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 78,
    },
    ON: {
      kind: 'Reduce',
      rule: 78,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 78,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 78,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 78,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 78,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 78,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 78,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 78,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 78,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 35,
    },
    NAME: {
      kind: 'Reduce',
      rule: 35,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 35,
    },
    ON: {
      kind: 'Reduce',
      rule: 35,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 35,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 35,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 35,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 35,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 35,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 35,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
    AT: {
      kind: 'Reduce',
      rule: 35,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 79,
    },
    NAME: {
      kind: 'Reduce',
      rule: 79,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 79,
    },
    ON: {
      kind: 'Reduce',
      rule: 79,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 79,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 79,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 79,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 79,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 79,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 79,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 79,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 79,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 83,
    },
    NAME: {
      kind: 'Reduce',
      rule: 83,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 83,
    },
    ON: {
      kind: 'Reduce',
      rule: 83,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 83,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 83,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 83,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 83,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 83,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 83,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 83,
    },
    AT: {
      kind: 'Reduce',
      rule: 83,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 83,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 84,
    },
    NAME: {
      kind: 'Reduce',
      rule: 84,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 84,
    },
    ON: {
      kind: 'Reduce',
      rule: 84,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 84,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 84,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 84,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 84,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 84,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 84,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 84,
    },
    AT: {
      kind: 'Reduce',
      rule: 84,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 80,
    },
    NAME: {
      kind: 'Reduce',
      rule: 80,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 80,
    },
    ON: {
      kind: 'Reduce',
      rule: 80,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 80,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 80,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 80,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 80,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 80,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 80,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 80,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 80,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 36,
    },
    NAME: {
      kind: 'Reduce',
      rule: 36,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 36,
    },
    ON: {
      kind: 'Reduce',
      rule: 36,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 36,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 36,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 36,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 36,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 36,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 36,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 36,
    },
    AT: {
      kind: 'Reduce',
      rule: 36,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 36,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 81,
    },
    NAME: {
      kind: 'Reduce',
      rule: 81,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 81,
    },
    ON: {
      kind: 'Reduce',
      rule: 81,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 81,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 81,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 81,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 81,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 81,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 81,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 81,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 81,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 99,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 82,
    },
    NAME: {
      kind: 'Reduce',
      rule: 82,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 82,
    },
    ON: {
      kind: 'Reduce',
      rule: 82,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 82,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 82,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 82,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 82,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 82,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 82,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 82,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 82,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 102,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 65,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 65,
    },
    NAME: {
      kind: 'Reduce',
      rule: 65,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 65,
    },
    ON: {
      kind: 'Reduce',
      rule: 65,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 94,
    },
    NAME: {
      kind: 'Reduce',
      rule: 94,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 94,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 94,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 109,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 52,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 52,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    EQUALS: {
      kind: 'Reduce',
      rule: 27,
    },
    AT: {
      kind: 'Reduce',
      rule: 27,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 27,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 27,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 27,
    },
  },
  {
    EQUALS: {
      kind: 'Reduce',
      rule: 26,
    },
    AT: {
      kind: 'Reduce',
      rule: 26,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 26,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 26,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 26,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 118,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 85,
    },
    NAME: {
      kind: 'Reduce',
      rule: 85,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 85,
    },
    ON: {
      kind: 'Reduce',
      rule: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 85,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 85,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 85,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 85,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 85,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 85,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 85,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 85,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 119,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 87,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 87,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 87,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 87,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 87,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 87,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 87,
    },
    NAME: {
      kind: 'Reduce',
      rule: 87,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 87,
    },
    ON: {
      kind: 'Reduce',
      rule: 87,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 89,
    },
    NAME: {
      kind: 'Reduce',
      rule: 89,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 89,
    },
    ON: {
      kind: 'Reduce',
      rule: 89,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 89,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 89,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 89,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 89,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 89,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 89,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 89,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 89,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 121,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 91,
    },
    NAME: {
      kind: 'Reduce',
      rule: 91,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 91,
    },
    ON: {
      kind: 'Reduce',
      rule: 91,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 123,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 19,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 19,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 109,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 51,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 51,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 53,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 53,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 53,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 28,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 28,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 28,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 30,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 30,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 30,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 30,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 30,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 30,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 30,
    },
    NAME: {
      kind: 'Reduce',
      rule: 30,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 30,
    },
    ON: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 30,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 31,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 31,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 31,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 31,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 31,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 31,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 31,
    },
    NAME: {
      kind: 'Reduce',
      rule: 31,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 31,
    },
    ON: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 31,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 32,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 32,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 32,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 32,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 32,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 32,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 32,
    },
    NAME: {
      kind: 'Reduce',
      rule: 32,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 32,
    },
    ON: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 32,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 33,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 33,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 33,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 33,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 33,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 33,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 33,
    },
    NAME: {
      kind: 'Reduce',
      rule: 33,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 33,
    },
    ON: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 33,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 126,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 34,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 34,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 34,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 34,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 34,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 34,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 34,
    },
    NAME: {
      kind: 'Reduce',
      rule: 34,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 34,
    },
    ON: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 34,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 129,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    BANG: {
      kind: 'Reduce',
      rule: 25,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 25,
    },
    AT: {
      kind: 'Reduce',
      rule: 25,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 25,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 25,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 25,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 86,
    },
    NAME: {
      kind: 'Reduce',
      rule: 86,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 86,
    },
    ON: {
      kind: 'Reduce',
      rule: 86,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 86,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 86,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 86,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 86,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 86,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 86,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 86,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 86,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 88,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 88,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 88,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 88,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 88,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 88,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 88,
    },
    NAME: {
      kind: 'Reduce',
      rule: 88,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 88,
    },
    ON: {
      kind: 'Reduce',
      rule: 88,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 90,
    },
    NAME: {
      kind: 'Reduce',
      rule: 90,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 90,
    },
    ON: {
      kind: 'Reduce',
      rule: 90,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 90,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 90,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 90,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 90,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 90,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 90,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 90,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 90,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 92,
    },
    NAME: {
      kind: 'Reduce',
      rule: 92,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 92,
    },
    ON: {
      kind: 'Reduce',
      rule: 92,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 54,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 54,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 54,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 135,
    },
    AT: {
      kind: 'Reduce',
      rule: 73,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 73,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 73,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 37,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 37,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 37,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 37,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 37,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 37,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 37,
    },
    NAME: {
      kind: 'Reduce',
      rule: 37,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 37,
    },
    ON: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 37,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 136,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 39,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 39,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 39,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 39,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 39,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 39,
    },
    NAME: {
      kind: 'Reduce',
      rule: 39,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 39,
    },
    ON: {
      kind: 'Reduce',
      rule: 39,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 41,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 41,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 41,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 41,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 41,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 41,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 41,
    },
    NAME: {
      kind: 'Reduce',
      rule: 41,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 41,
    },
    ON: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 41,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 138,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 43,
    },
    NAME: {
      kind: 'Reduce',
      rule: 43,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 43,
    },
    ON: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 140,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 93,
    },
    NAME: {
      kind: 'Reduce',
      rule: 93,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 93,
    },
    ON: {
      kind: 'Reduce',
      rule: 93,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 55,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 55,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 55,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 38,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 38,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 38,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 38,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 38,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 38,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 38,
    },
    NAME: {
      kind: 'Reduce',
      rule: 38,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 38,
    },
    ON: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 38,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 40,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 40,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 40,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 40,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 40,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 40,
    },
    NAME: {
      kind: 'Reduce',
      rule: 40,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 40,
    },
    ON: {
      kind: 'Reduce',
      rule: 40,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 42,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 42,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 42,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 42,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 42,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 42,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 42,
    },
    NAME: {
      kind: 'Reduce',
      rule: 42,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 42,
    },
    ON: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 42,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 44,
    },
    NAME: {
      kind: 'Reduce',
      rule: 44,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 44,
    },
    ON: {
      kind: 'Reduce',
      rule: 44,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 145,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 74,
    },
    NAME: {
      kind: 'Reduce',
      rule: 74,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 74,
    },
    ON: {
      kind: 'Reduce',
      rule: 74,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 147,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 45,
    },
    NAME: {
      kind: 'Reduce',
      rule: 45,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 45,
    },
    ON: {
      kind: 'Reduce',
      rule: 45,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 72,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 72,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 72,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 75,
    },
    NAME: {
      kind: 'Reduce',
      rule: 75,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 75,
    },
    ON: {
      kind: 'Reduce',
      rule: 75,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 76,
    },
    NAME: {
      kind: 'Reduce',
      rule: 76,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 76,
    },
    ON: {
      kind: 'Reduce',
      rule: 76,
    },
  },
];
const gotos = [
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
const rules = [
  {
    production: "Document'",
    pop: 1,
    action: () => {} /* dummy placeholder */,
  },
  {
    production: 'Document',
    pop: 1,
    action: r1,
  },
  {
    production: 'DefinitionList',
    pop: 1,
    action: r2,
  },
  {
    production: 'DefinitionList',
    pop: 2,
    action: r3,
  },
  {
    production: 'Definition',
    pop: 1,
    action: r4,
  },
  {
    production: 'Definition',
    pop: 1,
    action: r5,
  },
  {
    production: 'ExecutableDefinition',
    pop: 1,
    action: r6,
  },
  {
    production: 'OperationDefinition',
    pop: 5,
    action: r7,
  },
  {
    production: 'OperationDefinition',
    pop: 1,
    action: r8,
  },
  {
    production: 'OperationType',
    pop: 1,
    action: r9,
  },
  {
    production: 'OperationNameOpt',
    pop: 1,
    action: r10,
  },
  {
    production: 'OperationNameOpt',
    pop: 0,
    action: r11,
  },
  {
    production: 'Name',
    pop: 1,
    action: r12,
  },
  {
    production: 'Name',
    pop: 1,
    action: r13,
  },
  {
    production: 'Name',
    pop: 1,
    action: r14,
  },
  {
    production: 'VariableDefinitionsOpt',
    pop: 3,
    action: r15,
  },
  {
    production: 'VariableDefinitionsOpt',
    pop: 0,
    action: r16,
  },
  {
    production: 'VariableDefinitionList',
    pop: 1,
    action: r17,
  },
  {
    production: 'VariableDefinitionList',
    pop: 2,
    action: r18,
  },
  {
    production: 'VariableDefinition',
    pop: 5,
    action: r19,
  },
  {
    production: 'Variable',
    pop: 2,
    action: r20,
  },
  {
    production: 'Type',
    pop: 1,
    action: r21,
  },
  {
    production: 'Type',
    pop: 1,
    action: r22,
  },
  {
    production: 'Type',
    pop: 1,
    action: r23,
  },
  {
    production: 'NamedType',
    pop: 1,
    action: r24,
  },
  {
    production: 'ListType',
    pop: 3,
    action: r25,
  },
  {
    production: 'NonNullType',
    pop: 2,
    action: r26,
  },
  {
    production: 'NonNullType',
    pop: 2,
    action: r27,
  },
  {
    production: 'DefaultValueOpt',
    pop: 2,
    action: r28,
  },
  {
    production: 'DefaultValueOpt',
    pop: 0,
    action: r29,
  },
  {
    production: 'ValueConst',
    pop: 1,
    action: r30,
  },
  {
    production: 'ValueConst',
    pop: 1,
    action: r31,
  },
  {
    production: 'ValueConst',
    pop: 1,
    action: r32,
  },
  {
    production: 'ValueConst',
    pop: 1,
    action: r33,
  },
  {
    production: 'ValueConst',
    pop: 1,
    action: r34,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r35,
  },
  {
    production: 'NamedValue',
    pop: 1,
    action: r36,
  },
  {
    production: 'ListValueConst',
    pop: 2,
    action: r37,
  },
  {
    production: 'ListValueConst',
    pop: 3,
    action: r38,
  },
  {
    production: 'ListValueConstList',
    pop: 1,
    action: r39,
  },
  {
    production: 'ListValueConstList',
    pop: 2,
    action: r40,
  },
  {
    production: 'ObjectValueConst',
    pop: 2,
    action: r41,
  },
  {
    production: 'ObjectValueConst',
    pop: 3,
    action: r42,
  },
  {
    production: 'ObjectFieldConstList',
    pop: 1,
    action: r43,
  },
  {
    production: 'ObjectFieldConstList',
    pop: 2,
    action: r44,
  },
  {
    production: 'ObjectFieldConst',
    pop: 3,
    action: r45,
  },
  {
    production: 'DirectivesOpt',
    pop: 1,
    action: r46,
  },
  {
    production: 'DirectivesOpt',
    pop: 0,
    action: r47,
  },
  {
    production: 'DirectiveList',
    pop: 1,
    action: r48,
  },
  {
    production: 'DirectiveList',
    pop: 2,
    action: r49,
  },
  {
    production: 'Directive',
    pop: 3,
    action: r50,
  },
  {
    production: 'DirectivesConstOpt',
    pop: 1,
    action: r51,
  },
  {
    production: 'DirectivesConstOpt',
    pop: 0,
    action: r52,
  },
  {
    production: 'DirectiveConstList',
    pop: 1,
    action: r53,
  },
  {
    production: 'DirectiveConstList',
    pop: 2,
    action: r54,
  },
  {
    production: 'DirectiveConst',
    pop: 3,
    action: r55,
  },
  {
    production: 'SelectionSet',
    pop: 3,
    action: r56,
  },
  {
    production: 'SelectionSetOpt',
    pop: 1,
    action: r57,
  },
  {
    production: 'SelectionSetOpt',
    pop: 0,
    action: r58,
  },
  {
    production: 'SelectionList',
    pop: 1,
    action: r59,
  },
  {
    production: 'SelectionList',
    pop: 2,
    action: r60,
  },
  {
    production: 'Selection',
    pop: 1,
    action: r61,
  },
  {
    production: 'Selection',
    pop: 1,
    action: r62,
  },
  {
    production: 'Selection',
    pop: 1,
    action: r63,
  },
  {
    production: 'Field',
    pop: 4,
    action: r64,
  },
  {
    production: 'Field',
    pop: 5,
    action: r65,
  },
  {
    production: 'Alias',
    pop: 2,
    action: r66,
  },
  {
    production: 'ArgumentsOpt',
    pop: 3,
    action: r67,
  },
  {
    production: 'ArgumentsOpt',
    pop: 0,
    action: r68,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r69,
  },
  {
    production: 'ArgumentList',
    pop: 2,
    action: r70,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r71,
  },
  {
    production: 'ArgumentsConstOpt',
    pop: 3,
    action: r72,
  },
  {
    production: 'ArgumentsConstOpt',
    pop: 0,
    action: r73,
  },
  {
    production: 'ArgumentConstList',
    pop: 1,
    action: r74,
  },
  {
    production: 'ArgumentConstList',
    pop: 2,
    action: r75,
  },
  {
    production: 'ArgumentConst',
    pop: 3,
    action: r76,
  },
  {
    production: 'Value',
    pop: 1,
    action: r77,
  },
  {
    production: 'Value',
    pop: 1,
    action: r78,
  },
  {
    production: 'Value',
    pop: 1,
    action: r79,
  },
  {
    production: 'Value',
    pop: 1,
    action: r80,
  },
  {
    production: 'Value',
    pop: 1,
    action: r81,
  },
  {
    production: 'Value',
    pop: 1,
    action: r82,
  },
  {
    production: 'StringValue',
    pop: 1,
    action: r83,
  },
  {
    production: 'StringValue',
    pop: 1,
    action: r84,
  },
  {
    production: 'ListValue',
    pop: 2,
    action: r85,
  },
  {
    production: 'ListValue',
    pop: 3,
    action: r86,
  },
  {
    production: 'ListValueList',
    pop: 1,
    action: r87,
  },
  {
    production: 'ListValueList',
    pop: 2,
    action: r88,
  },
  {
    production: 'ObjectValue',
    pop: 2,
    action: r89,
  },
  {
    production: 'ObjectValue',
    pop: 3,
    action: r90,
  },
  {
    production: 'ObjectFieldList',
    pop: 1,
    action: r91,
  },
  {
    production: 'ObjectFieldList',
    pop: 2,
    action: r92,
  },
  {
    production: 'ObjectField',
    pop: 3,
    action: r93,
  },
  {
    production: 'FragmentDefinition',
    pop: 6,
    action: r94,
  },
  {
    production: 'FragmentName',
    pop: 1,
    action: r95,
  },
  {
    production: 'FragmentSpread',
    pop: 3,
    action: r96,
  },
  {
    production: 'InlineFragment',
    pop: 4,
    action: r97,
  },
  {
    production: 'TypeConditionOpt',
    pop: 2,
    action: r98,
  },
  {
    production: 'TypeConditionOpt',
    pop: 0,
    action: r99,
  },
];

const EOF = new Token('$', -1, -1, '');

export default function parse(input) {
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
