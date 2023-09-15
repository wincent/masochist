// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make graphql" instead
 *
 * @generated
 */
import {Lexer, Token} from './lex';
/**
 * r0: no production
 */
function r1($1) {
  return $1;
}
function r2($1) {
  return $1;
}
function r3($1) {
  return $1;
}
function r4(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2,
    rhs: $4,
  };
}
function r5(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2,
    rhs: $4,
  };
}
function r6($1, _$2, $3) {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1,
    rhs: $3,
  };
}
function r7($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r8() {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r9($1) {
  return $1;
}
function r10($1) {
  return $1;
}
function r11($1) {
  return $1;
}
function r12($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
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
function r17() {
  return {
    kind: 'ArrayValue',
    items: [],
  };
}
function r18(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r19($1) {
  return [$1];
}
function r20($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r21() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r22() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r23() {
  return {
    kind: 'NullValue',
  };
}
function r24($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r25(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r26($1) {
  return $1;
}
function r27(_$1, $2) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: [],
  };
}
function r28(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r29($1) {
  return [$1];
}
function r30($1, $2) {
  $1.push($2);
  return $1;
}
function r31($1) {
  return $1;
}
function r32($1) {
  return $1;
}
function r33($1, _$2, $3, _$4, _$5, $6) {
  return {
    kind: 'MethodDefinition',
    key: $1,
    value: {
      kind: 'FunctionExpression',
      arguments: $3,
      body: $6,
    },
  };
}
function r34($1) {
  return [$1];
}
function r35($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r36($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r37($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r38($1) {
  return [$1];
}
function r39($1, $2) {
  $1.push($2);
  return $1;
}
function r40($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
const actions = [
  {
    CLASS: {
      kind: 'Shift',
      state: 21,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 23,
    },
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    ['$']: {
      kind: 'Accept',
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 1,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 1,
    },
    CONST: {
      kind: 'Reduce',
      rule: 1,
    },
    LET: {
      kind: 'Reduce',
      rule: 1,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 1,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 1,
    },
    THIS: {
      kind: 'Reduce',
      rule: 1,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 1,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 1,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 1,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 1,
    },
    NULL: {
      kind: 'Reduce',
      rule: 1,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 26,
    },
    DOT: {
      kind: 'Shift',
      state: 27,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 8,
    },
    DOT: {
      kind: 'Reduce',
      rule: 8,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 8,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 8,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 9,
    },
    DOT: {
      kind: 'Reduce',
      rule: 9,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 9,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 9,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 9,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 7,
    },
    DOT: {
      kind: 'Reduce',
      rule: 7,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 7,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 7,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 7,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 7,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 7,
    },
    COLON: {
      kind: 'Reduce',
      rule: 7,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 10,
    },
    DOT: {
      kind: 'Reduce',
      rule: 10,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 10,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 10,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 10,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 11,
    },
    DOT: {
      kind: 'Reduce',
      rule: 11,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 11,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 11,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 13,
    },
    DOT: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 13,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 13,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 28,
    },
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 14,
    },
    DOT: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 14,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 14,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 14,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 21,
    },
    DOT: {
      kind: 'Reduce',
      rule: 21,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 21,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 21,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 21,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 22,
    },
    DOT: {
      kind: 'Reduce',
      rule: 22,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 22,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 22,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 22,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 15,
    },
    DOT: {
      kind: 'Reduce',
      rule: 15,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 15,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 15,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 15,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 23,
    },
    DOT: {
      kind: 'Reduce',
      rule: 23,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 23,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 23,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 23,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 16,
    },
    DOT: {
      kind: 'Reduce',
      rule: 16,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 16,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 16,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 16,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 24,
    },
    DOT: {
      kind: 'Reduce',
      rule: 24,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 24,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 24,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 24,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 2,
    },
    CONST: {
      kind: 'Reduce',
      rule: 2,
    },
    LET: {
      kind: 'Reduce',
      rule: 2,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 2,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 2,
    },
    THIS: {
      kind: 'Reduce',
      rule: 2,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 2,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 2,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 2,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 2,
    },
    NULL: {
      kind: 'Reduce',
      rule: 2,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 3,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 3,
    },
    CONST: {
      kind: 'Reduce',
      rule: 3,
    },
    LET: {
      kind: 'Reduce',
      rule: 3,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 3,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 3,
    },
    THIS: {
      kind: 'Reduce',
      rule: 3,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 3,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 3,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 3,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 3,
    },
    NULL: {
      kind: 'Reduce',
      rule: 3,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    DEFAULT: {
      kind: 'Shift',
      state: 32,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 33,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 34,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 17,
    },
    DOT: {
      kind: 'Reduce',
      rule: 17,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 17,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 17,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 17,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 37,
    },
    COMMA: {
      kind: 'Shift',
      state: 38,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 27,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 19,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 19,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 21,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 27,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 44,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 27,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 12,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 12,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 12,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 18,
    },
    DOT: {
      kind: 'Reduce',
      rule: 18,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 18,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 18,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 18,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 46,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 25,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 25,
    },
    CONST: {
      kind: 'Reduce',
      rule: 25,
    },
    LET: {
      kind: 'Reduce',
      rule: 25,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 25,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 25,
    },
    THIS: {
      kind: 'Reduce',
      rule: 25,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 25,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 25,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 25,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 25,
    },
    NULL: {
      kind: 'Reduce',
      rule: 25,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 25,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 26,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 26,
    },
    CONST: {
      kind: 'Reduce',
      rule: 26,
    },
    LET: {
      kind: 'Reduce',
      rule: 26,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 26,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 26,
    },
    THIS: {
      kind: 'Reduce',
      rule: 26,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 26,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 26,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 26,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 26,
    },
    NULL: {
      kind: 'Reduce',
      rule: 26,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 26,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 27,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 27,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 53,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 6,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 6,
    },
    CONST: {
      kind: 'Reduce',
      rule: 6,
    },
    LET: {
      kind: 'Reduce',
      rule: 6,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 6,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 6,
    },
    THIS: {
      kind: 'Reduce',
      rule: 6,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 6,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 6,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 6,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 6,
    },
    NULL: {
      kind: 'Reduce',
      rule: 6,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 27,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 20,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 20,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 27,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 27,
    },
    CONST: {
      kind: 'Reduce',
      rule: 27,
    },
    LET: {
      kind: 'Reduce',
      rule: 27,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 27,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 27,
    },
    THIS: {
      kind: 'Reduce',
      rule: 27,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 27,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 27,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 27,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 27,
    },
    NULL: {
      kind: 'Reduce',
      rule: 27,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 27,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 54,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 29,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 29,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 31,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 31,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 57,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 56,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 32,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 32,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 4,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 4,
    },
    CONST: {
      kind: 'Reduce',
      rule: 4,
    },
    LET: {
      kind: 'Reduce',
      rule: 4,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 4,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 4,
    },
    THIS: {
      kind: 'Reduce',
      rule: 4,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 4,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 4,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 4,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 4,
    },
    NULL: {
      kind: 'Reduce',
      rule: 4,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 5,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 5,
    },
    CONST: {
      kind: 'Reduce',
      rule: 5,
    },
    LET: {
      kind: 'Reduce',
      rule: 5,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 5,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 5,
    },
    THIS: {
      kind: 'Reduce',
      rule: 5,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 5,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 5,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 5,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 5,
    },
    NULL: {
      kind: 'Reduce',
      rule: 5,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 28,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 28,
    },
    CONST: {
      kind: 'Reduce',
      rule: 28,
    },
    LET: {
      kind: 'Reduce',
      rule: 28,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 28,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 28,
    },
    THIS: {
      kind: 'Reduce',
      rule: 28,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 28,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 28,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 28,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 28,
    },
    NULL: {
      kind: 'Reduce',
      rule: 28,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 28,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 30,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 30,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 62,
    },
    COMMA: {
      kind: 'Shift',
      state: 63,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 34,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 34,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 64,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 36,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 36,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 65,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 66,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 40,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 40,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 21,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 23,
    },
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 35,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 35,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 37,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 37,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 21,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 71,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 23,
    },
    FALSE: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 8,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 17,
    },
    NUMBER: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 12,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 38,
    },
    CONST: {
      kind: 'Reduce',
      rule: 38,
    },
    LET: {
      kind: 'Reduce',
      rule: 38,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 38,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 38,
    },
    THIS: {
      kind: 'Reduce',
      rule: 38,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 38,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 38,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 38,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 38,
    },
    NULL: {
      kind: 'Reduce',
      rule: 38,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 38,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 33,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 33,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 39,
    },
    CONST: {
      kind: 'Reduce',
      rule: 39,
    },
    LET: {
      kind: 'Reduce',
      rule: 39,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 39,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 39,
    },
    THIS: {
      kind: 'Reduce',
      rule: 39,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 39,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 39,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 39,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 39,
    },
    NULL: {
      kind: 'Reduce',
      rule: 39,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 39,
    },
  },
];
const gotos = [
  {
    ArrayValue: 11,
    AssignmentStatement: 2,
    BooleanValue: 13,
    ClassDeclaration: 20,
    ExportDefaultDeclaration: 22,
    Expression: 5,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
    Statement: 1,
  },
  {},
  {},
  {
    Identifier: 24,
  },
  {
    Identifier: 25,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayItemList: 29,
    ArrayValue: 11,
    BooleanValue: 13,
    Expression: 30,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
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
    Identifier: 31,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 11,
    BooleanValue: 13,
    Expression: 35,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
  },
  {
    ArrayValue: 11,
    BooleanValue: 13,
    Expression: 36,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
  },
  {},
  {},
  {},
  {},
  {
    ClassDeclaration: 41,
    Declaration: 40,
  },
  {
    ArrayValue: 11,
    BooleanValue: 13,
    Expression: 42,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
  },
  {
    ArrayValue: 11,
    BooleanValue: 13,
    Expression: 43,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
  },
  {},
  {},
  {},
  {
    ArrayValue: 11,
    BooleanValue: 13,
    Expression: 45,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
  },
  {
    ClassBodyList: 47,
    ClassBodyListItem: 48,
    Identifier: 50,
    MethodDefinition: 49,
    PropertyDeclaration: 51,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassBodyListItem: 55,
    Identifier: 50,
    MethodDefinition: 49,
    PropertyDeclaration: 51,
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
    Argument: 59,
    ArgumentList: 58,
    Identifier: 60,
  },
  {
    Identifier: 61,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 67,
    Identifier: 60,
  },
  {
    Identifier: 68,
  },
  {},
  {
    ArrayValue: 11,
    AssignmentStatement: 2,
    BooleanValue: 13,
    ClassDeclaration: 20,
    ExportDefaultDeclaration: 22,
    Expression: 5,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
    Statement: 70,
    StatementList: 69,
  },
  {},
  {},
  {
    ArrayValue: 11,
    AssignmentStatement: 2,
    BooleanValue: 13,
    ClassDeclaration: 20,
    ExportDefaultDeclaration: 22,
    Expression: 5,
    Identifier: 7,
    MemberExpression: 9,
    NullValue: 16,
    NumberValue: 18,
    PrimitiveValue: 10,
    Statement: 72,
  },
  {},
  {},
  {},
];
const rules = [
  {
    production: "Statement'",
    pop: 1,
    action: () => {} /* dummy placeholder */,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r1,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r2,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r3,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r4,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r5,
  },
  {
    production: 'AssignmentStatement',
    pop: 4,
    action: r6,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r7,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r8,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r9,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r10,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r11,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r12,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r13,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r14,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r15,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r16,
  },
  {
    production: 'ArrayValue',
    pop: 2,
    action: r17,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r18,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r19,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r20,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r21,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r22,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r23,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r24,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r25,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r26,
  },
  {
    production: 'ClassDeclaration',
    pop: 4,
    action: r27,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r28,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r29,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r30,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r31,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r32,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r33,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r34,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r35,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r36,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r37,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r38,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r39,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r40,
  },
];
const EOF = new Token('$', -1, -1, '');
export default function parseStatement(input) {
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
