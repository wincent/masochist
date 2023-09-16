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
function r9() {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r10($1) {
  return $1;
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
function r14($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r15($1) {
  return [$1];
}
function r16($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r17() {
  return [];
}
function r18($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r19($1) {
  return $1;
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
function r23(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r24($1) {
  return [$1];
}
function r25($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r26() {
  return [];
}
function r27() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r28() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r29() {
  return {
    kind: 'NullValue',
  };
}
function r30($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r31(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r32($1) {
  return $1;
}
function r33(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r34($1) {
  return [$1];
}
function r35($1, $2) {
  $1.push($2);
  return $1;
}
function r36() {
  return [];
}
function r37($1) {
  return $1;
}
function r38($1) {
  return $1;
}
function r39($1, _$2, $3, _$4, _$5, $6) {
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
function r40($1) {
  return [$1];
}
function r41($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r42() {
  return [];
}
function r43($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r44($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r45($1) {
  return [$1];
}
function r46($1, $2) {
  $1.push($2);
  return $1;
}
function r47($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r48() {
  return {
    kind: 'ReturnStatement',
  };
}
function r49(_$1, $2) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
const actions = [
  {
    CLASS: {
      kind: 'Shift',
      state: 22,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 24,
    },
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    RETURN: {
      kind: 'Shift',
      state: 26,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
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
      state: 9,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 29,
    },
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 9,
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
    CLOSING_PAREN: {
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 11,
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
    CLOSING_PAREN: {
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 12,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 19,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 19,
    },
    DOT: {
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 19,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 20,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 27,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 27,
    },
    DOT: {
      kind: 'Reduce',
      rule: 27,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 27,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 27,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 27,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 27,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 28,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 21,
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
    CLOSING_PAREN: {
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
    CLOSING_PAREN: {
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 30,
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
      state: 9,
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
      state: 35,
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
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 36,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 38,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
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
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 44,
    },
    COMMA: {
      kind: 'Shift',
      state: 45,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 24,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 24,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 46,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 22,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 48,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 48,
    },
    CONST: {
      kind: 'Reduce',
      rule: 48,
    },
    LET: {
      kind: 'Reduce',
      rule: 48,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 48,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 48,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 48,
    },
    THIS: {
      kind: 'Reduce',
      rule: 48,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 48,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 48,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 48,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 48,
    },
    NULL: {
      kind: 'Reduce',
      rule: 48,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 48,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 49,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 53,
    },
    COMMA: {
      kind: 'Shift',
      state: 54,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 15,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 15,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
    },
    ASSIGN: {
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 18,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 36,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 31,
    },
    CONST: {
      kind: 'Reduce',
      rule: 31,
    },
    LET: {
      kind: 'Reduce',
      rule: 31,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 31,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 31,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 31,
    },
    THIS: {
      kind: 'Reduce',
      rule: 31,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 31,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 31,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 31,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 31,
    },
    NULL: {
      kind: 'Reduce',
      rule: 31,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 31,
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
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 61,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 62,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
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
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 64,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 34,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 34,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 37,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 37,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 67,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 66,
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
      state: 31,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 30,
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 72,
    },
    COMMA: {
      kind: 'Shift',
      state: 73,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 40,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 40,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 74,
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
    SEMICOLON: {
      kind: 'Shift',
      state: 75,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 76,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 22,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 24,
    },
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    RETURN: {
      kind: 'Shift',
      state: 26,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
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
    CLASS: {
      kind: 'Shift',
      state: 22,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 81,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 24,
    },
    FALSE: {
      kind: 'Shift',
      state: 15,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 9,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 18,
    },
    NUMBER: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 13,
    },
    RETURN: {
      kind: 'Shift',
      state: 26,
    },
    THIS: {
      kind: 'Shift',
      state: 6,
    },
    TRUE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 45,
    },
    CONST: {
      kind: 'Reduce',
      rule: 45,
    },
    LET: {
      kind: 'Reduce',
      rule: 45,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 45,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 45,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 45,
    },
    THIS: {
      kind: 'Reduce',
      rule: 45,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 45,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 45,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 45,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 45,
    },
    NULL: {
      kind: 'Reduce',
      rule: 45,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 45,
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
];
const gotos = [
  {
    ArrayValue: 12,
    AssignmentStatement: 2,
    BooleanValue: 14,
    CallExpression: 7,
    ClassDeclaration: 21,
    ExportDefaultDeclaration: 23,
    Expression: 5,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
    ReturnStatement: 25,
    Statement: 1,
  },
  {},
  {},
  {
    Identifier: 27,
  },
  {
    Identifier: 28,
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
    ArrayItemList: 32,
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 33,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
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
    Identifier: 34,
  },
  {},
  {},
  {},
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 37,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {},
  {},
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 40,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 42,
    ExpressionList: 41,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 43,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {},
  {},
  {},
  {
    ClassDeclaration: 48,
    Declaration: 47,
  },
  {},
  {},
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 50,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 51,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 55,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {
    ClassBodyList: 56,
    ClassBodyListItem: 57,
    Identifier: 59,
    MethodDefinition: 58,
    PropertyDeclaration: 60,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 12,
    BooleanValue: 14,
    CallExpression: 7,
    Expression: 63,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
  },
  {},
  {
    ClassBodyListItem: 65,
    Identifier: 59,
    MethodDefinition: 58,
    PropertyDeclaration: 60,
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
    Argument: 69,
    ArgumentList: 68,
    Identifier: 70,
  },
  {
    Identifier: 71,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 77,
    Identifier: 70,
  },
  {
    Identifier: 78,
  },
  {},
  {
    ArrayValue: 12,
    AssignmentStatement: 2,
    BooleanValue: 14,
    CallExpression: 7,
    ClassDeclaration: 21,
    ExportDefaultDeclaration: 23,
    Expression: 5,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
    ReturnStatement: 25,
    Statement: 80,
    StatementList: 79,
  },
  {},
  {},
  {
    ArrayValue: 12,
    AssignmentStatement: 2,
    BooleanValue: 14,
    CallExpression: 7,
    ClassDeclaration: 21,
    ExportDefaultDeclaration: 23,
    Expression: 5,
    Identifier: 8,
    MemberExpression: 10,
    NullValue: 17,
    NumberValue: 19,
    PrimitiveValue: 11,
    ReturnStatement: 25,
    Statement: 82,
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
    production: 'CallExpression',
    pop: 4,
    action: r14,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r15,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r16,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r17,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r18,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
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
    production: 'ArrayValue',
    pop: 3,
    action: r23,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r24,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r25,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r26,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r27,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r28,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r29,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r30,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r31,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r32,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r33,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r34,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r35,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r36,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r37,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r38,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r39,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r40,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r41,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r42,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r43,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r44,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r45,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r46,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r47,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r48,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r49,
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
