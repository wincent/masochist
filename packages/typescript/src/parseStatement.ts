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
function r4($1) {
  return $1;
}
function r5(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2,
    rhs: $4,
  };
}
function r6(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2,
    rhs: $4,
  };
}
function r7($1, _$2, $3) {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1,
    rhs: $3,
  };
}
function r8($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r9(_$1, $2) {
  return $2;
}
function r10() {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r11($1) {
  return $1;
}
function r12($1) {
  return $1;
}
function r13($1) {
  return $1;
}
function r14($1) {
  return $1;
}
function r15($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r16($1) {
  return [$1];
}
function r17($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r18() {
  return [];
}
function r19($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r20($1) {
  return $1;
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
function r24(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r25($1) {
  return [$1];
}
function r26($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r27() {
  return [];
}
function r28() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r29() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r30() {
  return {
    kind: 'NullValue',
  };
}
function r31($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r32(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r33($1) {
  return $1;
}
function r34(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r35($1) {
  return [$1];
}
function r36($1, $2) {
  $1.push($2);
  return $1;
}
function r37() {
  return [];
}
function r38($1) {
  return $1;
}
function r39($1) {
  return $1;
}
function r40($1, _$2, $3, _$4, _$5, $6) {
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
function r41($1) {
  return [$1];
}
function r42($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r43() {
  return [];
}
function r44($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r45($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r46($1) {
  return [$1];
}
function r47($1, $2) {
  $1.push($2);
  return $1;
}
function r48($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r49() {
  return {
    kind: 'ReturnStatement',
  };
}
function r50(_$1, $2) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
const actions = [
  {
    CLASS: {
      kind: 'Shift',
      state: 23,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 25,
    },
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    RETURN: {
      kind: 'Shift',
      state: 27,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
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
    RETURN: {
      kind: 'Reduce',
      rule: 1,
    },
    OPENING_PAREN: {
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
      state: 10,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 30,
    },
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 10,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 10,
    },
    DOT: {
      kind: 'Reduce',
      rule: 10,
    },
    CLOSING_PAREN: {
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 11,
    },
    DOT: {
      kind: 'Reduce',
      rule: 11,
    },
    CLOSING_PAREN: {
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
      rule: 12,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 12,
    },
    DOT: {
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
      rule: 8,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 8,
    },
    DOT: {
      kind: 'Reduce',
      rule: 8,
    },
    CLOSING_PAREN: {
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
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 8,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 8,
    },
    COLON: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 13,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 13,
    },
    DOT: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 14,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
    DOT: {
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
      rule: 20,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 20,
    },
    DOT: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 20,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 20,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 20,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 27,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 27,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 21,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 21,
    },
    DOT: {
      kind: 'Reduce',
      rule: 21,
    },
    CLOSING_PAREN: {
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
      rule: 28,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 28,
    },
    DOT: {
      kind: 'Reduce',
      rule: 28,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 28,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 28,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 28,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 28,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 29,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 29,
    },
    DOT: {
      kind: 'Reduce',
      rule: 29,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 29,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 29,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 29,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 29,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 22,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 22,
    },
    DOT: {
      kind: 'Reduce',
      rule: 22,
    },
    CLOSING_PAREN: {
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
      rule: 30,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 30,
    },
    DOT: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 30,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 30,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 30,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 23,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 23,
    },
    DOT: {
      kind: 'Reduce',
      rule: 23,
    },
    CLOSING_PAREN: {
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
      rule: 31,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 31,
    },
    DOT: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 31,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 31,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 31,
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
    RETURN: {
      kind: 'Reduce',
      rule: 2,
    },
    OPENING_PAREN: {
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
      state: 10,
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
    RETURN: {
      kind: 'Reduce',
      rule: 3,
    },
    OPENING_PAREN: {
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
      state: 37,
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
    RETURN: {
      kind: 'Reduce',
      rule: 4,
    },
    OPENING_PAREN: {
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
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 38,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 40,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 41,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 18,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 18,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 47,
    },
    COMMA: {
      kind: 'Shift',
      state: 48,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 25,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 25,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 49,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 49,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 49,
    },
    CONST: {
      kind: 'Reduce',
      rule: 49,
    },
    LET: {
      kind: 'Reduce',
      rule: 49,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 49,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 49,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 49,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 49,
    },
    THIS: {
      kind: 'Reduce',
      rule: 49,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 49,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 49,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 49,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 49,
    },
    NULL: {
      kind: 'Reduce',
      rule: 49,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 49,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 55,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 56,
    },
    COMMA: {
      kind: 'Shift',
      state: 57,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 16,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 16,
    },
  },
  {
    DOT: {
      kind: 'Reduce',
      rule: 19,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 19,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 19,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 19,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 19,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 19,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 9,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 9,
    },
    DOT: {
      kind: 'Reduce',
      rule: 9,
    },
    CLOSING_PAREN: {
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
      rule: 24,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 24,
    },
    DOT: {
      kind: 'Reduce',
      rule: 24,
    },
    CLOSING_PAREN: {
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
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 37,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 32,
    },
    CONST: {
      kind: 'Reduce',
      rule: 32,
    },
    LET: {
      kind: 'Reduce',
      rule: 32,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 32,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 32,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 32,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 32,
    },
    THIS: {
      kind: 'Reduce',
      rule: 32,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 32,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 32,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 32,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 32,
    },
    NULL: {
      kind: 'Reduce',
      rule: 32,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 32,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 33,
    },
    CONST: {
      kind: 'Reduce',
      rule: 33,
    },
    LET: {
      kind: 'Reduce',
      rule: 33,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 33,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 33,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 33,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 33,
    },
    THIS: {
      kind: 'Reduce',
      rule: 33,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 33,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 33,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 33,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 33,
    },
    NULL: {
      kind: 'Reduce',
      rule: 33,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 33,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 50,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 50,
    },
    CONST: {
      kind: 'Reduce',
      rule: 50,
    },
    LET: {
      kind: 'Reduce',
      rule: 50,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 50,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 50,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 50,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 50,
    },
    THIS: {
      kind: 'Reduce',
      rule: 50,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 50,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 50,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 50,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 50,
    },
    NULL: {
      kind: 'Reduce',
      rule: 50,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 50,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 64,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 65,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 7,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 7,
    },
    CONST: {
      kind: 'Reduce',
      rule: 7,
    },
    LET: {
      kind: 'Reduce',
      rule: 7,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 7,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 7,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 7,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 7,
    },
    THIS: {
      kind: 'Reduce',
      rule: 7,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 7,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 7,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 7,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 7,
    },
    NULL: {
      kind: 'Reduce',
      rule: 7,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 15,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 15,
    },
    DOT: {
      kind: 'Reduce',
      rule: 15,
    },
    CLOSING_PAREN: {
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
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 26,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 26,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 67,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 35,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 38,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 38,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 70,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 69,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 39,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 39,
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
    RETURN: {
      kind: 'Reduce',
      rule: 5,
    },
    OPENING_PAREN: {
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
    RETURN: {
      kind: 'Reduce',
      rule: 6,
    },
    OPENING_PAREN: {
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
      state: 32,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 31,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 17,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 17,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 34,
    },
    CONST: {
      kind: 'Reduce',
      rule: 34,
    },
    LET: {
      kind: 'Reduce',
      rule: 34,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 34,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 34,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 34,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 34,
    },
    THIS: {
      kind: 'Reduce',
      rule: 34,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 34,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 34,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 34,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 34,
    },
    NULL: {
      kind: 'Reduce',
      rule: 34,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 34,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 36,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 36,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 43,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 75,
    },
    COMMA: {
      kind: 'Shift',
      state: 76,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 41,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 41,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 77,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 44,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 44,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 78,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 79,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 48,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 48,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 23,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 25,
    },
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    RETURN: {
      kind: 'Shift',
      state: 27,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 42,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 42,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 45,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 45,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 23,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 84,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 25,
    },
    FALSE: {
      kind: 'Shift',
      state: 16,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 19,
    },
    NUMBER: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 14,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 6,
    },
    RETURN: {
      kind: 'Shift',
      state: 27,
    },
    THIS: {
      kind: 'Shift',
      state: 7,
    },
    TRUE: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 46,
    },
    CONST: {
      kind: 'Reduce',
      rule: 46,
    },
    LET: {
      kind: 'Reduce',
      rule: 46,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 46,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 46,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 46,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 46,
    },
    THIS: {
      kind: 'Reduce',
      rule: 46,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 46,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 46,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 46,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 46,
    },
    NULL: {
      kind: 'Reduce',
      rule: 46,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 46,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    CONST: {
      kind: 'Reduce',
      rule: 47,
    },
    LET: {
      kind: 'Reduce',
      rule: 47,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 47,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 47,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 47,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 47,
    },
    THIS: {
      kind: 'Reduce',
      rule: 47,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 47,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 47,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 47,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 47,
    },
    NULL: {
      kind: 'Reduce',
      rule: 47,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 47,
    },
  },
];
const gotos = [
  {
    ArrayValue: 13,
    AssignmentStatement: 2,
    BooleanValue: 15,
    CallExpression: 8,
    ClassDeclaration: 22,
    ExportDefaultDeclaration: 24,
    Expression: 5,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
    ReturnStatement: 26,
    Statement: 1,
  },
  {},
  {},
  {
    Identifier: 28,
  },
  {
    Identifier: 29,
  },
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 33,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayItemList: 34,
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 35,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
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
    Identifier: 36,
  },
  {},
  {},
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 39,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {},
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 42,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 44,
    ExpressionList: 43,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 45,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {},
  {},
  {},
  {},
  {
    ClassDeclaration: 51,
    Declaration: 50,
  },
  {},
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 53,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 54,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 58,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {
    ClassBodyList: 59,
    ClassBodyListItem: 60,
    Identifier: 62,
    MethodDefinition: 61,
    PropertyDeclaration: 63,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 66,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {},
  {
    ClassBodyListItem: 68,
    Identifier: 62,
    MethodDefinition: 61,
    PropertyDeclaration: 63,
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
  {
    Argument: 72,
    ArgumentList: 71,
    Identifier: 73,
  },
  {
    Identifier: 74,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 80,
    Identifier: 73,
  },
  {
    Identifier: 81,
  },
  {},
  {
    ArrayValue: 13,
    AssignmentStatement: 2,
    BooleanValue: 15,
    CallExpression: 8,
    ClassDeclaration: 22,
    ExportDefaultDeclaration: 24,
    Expression: 5,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
    ReturnStatement: 26,
    Statement: 83,
    StatementList: 82,
  },
  {},
  {},
  {
    ArrayValue: 13,
    AssignmentStatement: 2,
    BooleanValue: 15,
    CallExpression: 8,
    ClassDeclaration: 22,
    ExportDefaultDeclaration: 24,
    Expression: 5,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
    ReturnStatement: 26,
    Statement: 85,
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
    production: 'Statement',
    pop: 1,
    action: r4,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r5,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r6,
  },
  {
    production: 'AssignmentStatement',
    pop: 4,
    action: r7,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r8,
  },
  {
    production: 'Expression',
    pop: 3,
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
    production: 'Expression',
    pop: 1,
    action: r12,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r13,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r14,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r15,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r16,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r17,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r18,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r19,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r20,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r21,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r22,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r23,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r24,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r25,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r26,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r27,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r28,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r29,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r30,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r31,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r32,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r33,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r34,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r35,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r36,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r37,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r38,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r39,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r40,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r41,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r42,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r43,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r44,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r45,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r46,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r47,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r48,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r49,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r50,
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
