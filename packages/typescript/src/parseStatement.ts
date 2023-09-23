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
function r5($1) {
  return $1;
}
function r6(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2,
    rhs: $4,
  };
}
function r7(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2,
    rhs: $4,
  };
}
function r8($1, _$2, $3) {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1,
    rhs: $3,
  };
}
function r9($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r10(_$1, $2) {
  return $2;
}
function r11() {
  return {
    kind: 'Identifier',
    name: 'this',
  };
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
function r15($1) {
  return $1;
}
function r16($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r17($1) {
  return [$1];
}
function r18($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r19() {
  return [];
}
function r20($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
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
  return $1;
}
function r25(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r26($1) {
  return [$1];
}
function r27($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r28() {
  return [];
}
function r29() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r30() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r31() {
  return {
    kind: 'NullValue',
  };
}
function r32($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r33(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r34($1) {
  return $1;
}
function r35(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r36($1) {
  return [$1];
}
function r37($1, $2) {
  $1.push($2);
  return $1;
}
function r38() {
  return [];
}
function r39($1) {
  return $1;
}
function r40($1) {
  return $1;
}
function r41($1, _$2, $3, _$4, _$5, $6) {
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
function r42($1) {
  return [$1];
}
function r43($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r44() {
  return [];
}
function r45($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r46($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r47($1) {
  return [$1];
}
function r48($1, $2) {
  $1.push($2);
  return $1;
}
function r49($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r50($1) {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r51() {
  return {
    kind: 'ReturnStatement',
  };
}
function r52(_$1, $2) {
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
      state: 28,
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 1,
    },
    THIS: {
      kind: 'Reduce',
      rule: 1,
    },
    RETURN: {
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
      state: 31,
    },
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 34,
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 9,
    },
    COLON: {
      kind: 'Reduce',
      rule: 9,
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    SEMICOLON: {
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
      rule: 28,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 28,
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    SEMICOLON: {
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
    SEMICOLON: {
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
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 32,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 32,
    },
    DOT: {
      kind: 'Reduce',
      rule: 32,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 32,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 32,
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 2,
    },
    THIS: {
      kind: 'Reduce',
      rule: 2,
    },
    RETURN: {
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 3,
    },
    THIS: {
      kind: 'Reduce',
      rule: 3,
    },
    RETURN: {
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
      state: 39,
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 4,
    },
    THIS: {
      kind: 'Reduce',
      rule: 4,
    },
    RETURN: {
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 5,
    },
    THIS: {
      kind: 'Reduce',
      rule: 5,
    },
    RETURN: {
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
      state: 40,
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
      state: 42,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
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
      rule: 19,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 19,
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 50,
    },
    THIS: {
      kind: 'Reduce',
      rule: 50,
    },
    RETURN: {
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
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 49,
    },
    COMMA: {
      kind: 'Shift',
      state: 50,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
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
    OPENING_BRACE: {
      kind: 'Shift',
      state: 51,
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
      rule: 51,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 51,
    },
    CONST: {
      kind: 'Reduce',
      rule: 51,
    },
    LET: {
      kind: 'Reduce',
      rule: 51,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 51,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 51,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 51,
    },
    THIS: {
      kind: 'Reduce',
      rule: 51,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 51,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 51,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 51,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 51,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 51,
    },
    NULL: {
      kind: 'Reduce',
      rule: 51,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 51,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 54,
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
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 57,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 58,
    },
    COMMA: {
      kind: 'Shift',
      state: 59,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
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
    DOT: {
      kind: 'Reduce',
      rule: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
    },
    ASSIGN: {
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
    SEMICOLON: {
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
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 25,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 25,
    },
    DOT: {
      kind: 'Reduce',
      rule: 25,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 25,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 25,
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
      rule: 38,
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 33,
    },
    THIS: {
      kind: 'Reduce',
      rule: 33,
    },
    RETURN: {
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 34,
    },
    THIS: {
      kind: 'Reduce',
      rule: 34,
    },
    RETURN: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 52,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 52,
    },
    CONST: {
      kind: 'Reduce',
      rule: 52,
    },
    LET: {
      kind: 'Reduce',
      rule: 52,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 52,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 52,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 52,
    },
    THIS: {
      kind: 'Reduce',
      rule: 52,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 52,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 52,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 52,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 52,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 52,
    },
    NULL: {
      kind: 'Reduce',
      rule: 52,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 52,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 66,
    },
  },
  {
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 67,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 8,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 8,
    },
    CONST: {
      kind: 'Reduce',
      rule: 8,
    },
    LET: {
      kind: 'Reduce',
      rule: 8,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 8,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 8,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 8,
    },
    THIS: {
      kind: 'Reduce',
      rule: 8,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 8,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 8,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 8,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 8,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 8,
    },
    NULL: {
      kind: 'Reduce',
      rule: 8,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 16,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 16,
    },
    DOT: {
      kind: 'Reduce',
      rule: 16,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 16,
    },
    CLOSING_PAREN: {
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
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
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
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 69,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
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
    COLON: {
      kind: 'Shift',
      state: 72,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 71,
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 6,
    },
    THIS: {
      kind: 'Reduce',
      rule: 6,
    },
    RETURN: {
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 7,
    },
    THIS: {
      kind: 'Reduce',
      rule: 7,
    },
    RETURN: {
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
    DOT: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 32,
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
    ['$']: {
      kind: 'Reduce',
      rule: 35,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
    CONST: {
      kind: 'Reduce',
      rule: 35,
    },
    LET: {
      kind: 'Reduce',
      rule: 35,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 35,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 35,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 35,
    },
    THIS: {
      kind: 'Reduce',
      rule: 35,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 35,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 35,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 35,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 35,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 35,
    },
    NULL: {
      kind: 'Reduce',
      rule: 35,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 35,
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 77,
    },
    COMMA: {
      kind: 'Shift',
      state: 78,
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
    COLON: {
      kind: 'Shift',
      state: 79,
    },
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
    SEMICOLON: {
      kind: 'Shift',
      state: 80,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 81,
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
      rule: 49,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 49,
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
      state: 28,
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
      rule: 43,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 46,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 46,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 23,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 86,
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
      state: 28,
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 47,
    },
    THIS: {
      kind: 'Reduce',
      rule: 47,
    },
    RETURN: {
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
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 41,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 41,
    },
  },
  {
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 48,
    },
    THIS: {
      kind: 'Reduce',
      rule: 48,
    },
    RETURN: {
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
    ExpressionStatement: 26,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
    ReturnStatement: 27,
    Statement: 1,
  },
  {},
  {},
  {
    Identifier: 29,
  },
  {
    Identifier: 30,
  },
  {},
  {
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
  {
    ArrayItemList: 36,
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 37,
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
    Identifier: 38,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 41,
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
    Expression: 44,
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
    Expression: 46,
    ExpressionList: 45,
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
    Expression: 47,
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
  {
    ClassDeclaration: 53,
    Declaration: 52,
  },
  {},
  {},
  {
    ArrayValue: 13,
    BooleanValue: 15,
    CallExpression: 8,
    Expression: 55,
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
    Expression: 56,
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
    Expression: 60,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {
    ClassBodyList: 61,
    ClassBodyListItem: 62,
    Identifier: 64,
    MethodDefinition: 63,
    PropertyDeclaration: 65,
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
    Expression: 68,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
  },
  {},
  {
    ClassBodyListItem: 70,
    Identifier: 64,
    MethodDefinition: 63,
    PropertyDeclaration: 65,
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
    Argument: 74,
    ArgumentList: 73,
    Identifier: 75,
  },
  {
    Identifier: 76,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 82,
    Identifier: 75,
  },
  {
    Identifier: 83,
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
    ExpressionStatement: 26,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
    ReturnStatement: 27,
    Statement: 85,
    StatementList: 84,
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
    ExpressionStatement: 26,
    Identifier: 9,
    MemberExpression: 11,
    NullValue: 18,
    NumberValue: 20,
    PrimitiveValue: 12,
    ReturnStatement: 27,
    Statement: 87,
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
    production: 'Statement',
    pop: 1,
    action: r5,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r6,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r7,
  },
  {
    production: 'AssignmentStatement',
    pop: 4,
    action: r8,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r9,
  },
  {
    production: 'Expression',
    pop: 3,
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
    production: 'Expression',
    pop: 1,
    action: r15,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r16,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r17,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r18,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r19,
  },
  {
    production: 'MemberExpression',
    pop: 3,
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
    production: 'PrimitiveValue',
    pop: 1,
    action: r24,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r25,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r26,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r27,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r28,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r29,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r30,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r31,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r32,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r33,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r34,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r35,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r36,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r37,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r38,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r39,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r40,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r41,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r42,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r43,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r44,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r45,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r46,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r47,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r48,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r49,
  },
  {
    production: 'ExpressionStatement',
    pop: 2,
    action: r50,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r51,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r52,
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
