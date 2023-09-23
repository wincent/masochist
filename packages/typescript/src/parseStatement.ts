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
function r6(_$1, $2) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r7(_$1, $2) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r8($1) {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1.lhs,
    rhs: $1.rhs,
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
function r16($1) {
  return $1;
}
function r17($1) {
  return $1;
}
function r18($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r19($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r20($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r21($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r22($1) {
  return [$1];
}
function r23($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r24() {
  return [];
}
function r25($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r26($1) {
  return $1;
}
function r27($1) {
  return $1;
}
function r28($1) {
  return $1;
}
function r29($1) {
  return $1;
}
function r30(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r31($1) {
  return [$1];
}
function r32($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r33() {
  return [];
}
function r34() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r35() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r36() {
  return {
    kind: 'NullValue',
  };
}
function r37($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r38(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r39($1) {
  return $1;
}
function r40(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r41($1) {
  return [$1];
}
function r42($1, $2) {
  $1.push($2);
  return $1;
}
function r43() {
  return [];
}
function r44($1) {
  return $1;
}
function r45($1) {
  return $1;
}
function r46($1, _$2, $3, _$4, _$5, $6) {
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
function r47($1) {
  return [$1];
}
function r48($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r49() {
  return [];
}
function r50($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r51($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r52($1) {
  return [$1];
}
function r53($1, $2) {
  $1.push($2);
  return $1;
}
function r54($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r55($1) {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r56() {
  return {
    kind: 'ReturnStatement',
  };
}
function r57(_$1, $2) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
const actions = [
  {
    CLASS: {
      kind: 'Shift',
      state: 25,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 27,
    },
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
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
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 34,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
    PLUS: {
      kind: 'Reduce',
      rule: 12,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 40,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 11,
    },
    MINUS: {
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
    PLUS: {
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
      rule: 13,
    },
    MINUS: {
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
    PLUS: {
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
      rule: 14,
    },
    MINUS: {
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
    PLUS: {
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
    MINUS: {
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
    PLUS: {
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
      rule: 9,
    },
    MINUS: {
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
    PLUS: {
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
      rule: 16,
    },
    MINUS: {
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
    PLUS: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 17,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 17,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 17,
    },
    DOT: {
      kind: 'Reduce',
      rule: 17,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 17,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 17,
    },
    CLOSING_PAREN: {
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
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 26,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 26,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 26,
    },
    DOT: {
      kind: 'Reduce',
      rule: 26,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 26,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 26,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 26,
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
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 33,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 33,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 27,
    },
    MINUS: {
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
    PLUS: {
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
      rule: 34,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 34,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 34,
    },
    DOT: {
      kind: 'Reduce',
      rule: 34,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 34,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 34,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 34,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 35,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 35,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 35,
    },
    DOT: {
      kind: 'Reduce',
      rule: 35,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 35,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 35,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 35,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 35,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 35,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 28,
    },
    MINUS: {
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
    PLUS: {
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
      rule: 36,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 36,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 36,
    },
    DOT: {
      kind: 'Reduce',
      rule: 36,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 36,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 36,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 36,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 36,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 36,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 29,
    },
    MINUS: {
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
    PLUS: {
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
      rule: 37,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 37,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 37,
    },
    DOT: {
      kind: 'Reduce',
      rule: 37,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 37,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 37,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 37,
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
      state: 12,
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
      state: 46,
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
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 47,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 49,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
    PLUS: {
      kind: 'Reduce',
      rule: 12,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 50,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
    PLUS: {
      kind: 'Reduce',
      rule: 12,
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
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 24,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 24,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 55,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 55,
    },
    CONST: {
      kind: 'Reduce',
      rule: 55,
    },
    LET: {
      kind: 'Reduce',
      rule: 55,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 55,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 55,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 55,
    },
    THIS: {
      kind: 'Reduce',
      rule: 55,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 55,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 55,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 55,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 55,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 55,
    },
    NULL: {
      kind: 'Reduce',
      rule: 55,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 55,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 57,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 12,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
    PLUS: {
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
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 58,
    },
    COMMA: {
      kind: 'Shift',
      state: 59,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
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
    OPENING_BRACE: {
      kind: 'Shift',
      state: 60,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 56,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 56,
    },
    CONST: {
      kind: 'Reduce',
      rule: 56,
    },
    LET: {
      kind: 'Reduce',
      rule: 56,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 56,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 56,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 56,
    },
    THIS: {
      kind: 'Reduce',
      rule: 56,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 56,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 56,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 56,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 56,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 56,
    },
    NULL: {
      kind: 'Reduce',
      rule: 56,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 56,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 63,
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
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 18,
    },
    CLOSING_PAREN: {
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
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 19,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 19,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
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
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 64,
    },
    COMMA: {
      kind: 'Shift',
      state: 65,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
    },
    CLOSING_PAREN: {
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
      rule: 25,
    },
    MINUS: {
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
    PLUS: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 20,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
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
    MINUS: {
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
    PLUS: {
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
      rule: 30,
    },
    MINUS: {
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
    PLUS: {
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
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 38,
    },
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 38,
    },
    THIS: {
      kind: 'Reduce',
      rule: 38,
    },
    RETURN: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 39,
    },
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 39,
    },
    THIS: {
      kind: 'Reduce',
      rule: 39,
    },
    RETURN: {
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
  {
    ['$']: {
      kind: 'Reduce',
      rule: 57,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 57,
    },
    CONST: {
      kind: 'Reduce',
      rule: 57,
    },
    LET: {
      kind: 'Reduce',
      rule: 57,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 57,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 57,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 57,
    },
    THIS: {
      kind: 'Reduce',
      rule: 57,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 57,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 57,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 57,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 57,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 57,
    },
    NULL: {
      kind: 'Reduce',
      rule: 57,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 57,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 21,
    },
    MINUS: {
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
    PLUS: {
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
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
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
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 73,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
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
      rule: 44,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 44,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 76,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 75,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 45,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 45,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 35,
    },
    DOT: {
      kind: 'Shift',
      state: 38,
    },
    MINUS: {
      kind: 'Shift',
      state: 36,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 37,
    },
    PLUS: {
      kind: 'Shift',
      state: 39,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 23,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 23,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 40,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 40,
    },
    CONST: {
      kind: 'Reduce',
      rule: 40,
    },
    LET: {
      kind: 'Reduce',
      rule: 40,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 40,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 40,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 40,
    },
    THIS: {
      kind: 'Reduce',
      rule: 40,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 40,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 40,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 40,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 40,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 40,
    },
    NULL: {
      kind: 'Reduce',
      rule: 40,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 40,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 42,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 42,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 49,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 49,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 81,
    },
    COMMA: {
      kind: 'Shift',
      state: 82,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 47,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 83,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 50,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 50,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 85,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 54,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 54,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 25,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 27,
    },
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 48,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 48,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 51,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 51,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 25,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 90,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 27,
    },
    FALSE: {
      kind: 'Shift',
      state: 18,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NULL: {
      kind: 'Shift',
      state: 21,
    },
    NUMBER: {
      kind: 'Shift',
      state: 23,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 16,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 19,
    },
  },
  {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 46,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 46,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 53,
    },
    CONST: {
      kind: 'Reduce',
      rule: 53,
    },
    LET: {
      kind: 'Reduce',
      rule: 53,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 53,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 53,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 53,
    },
    THIS: {
      kind: 'Reduce',
      rule: 53,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 53,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 53,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 53,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 53,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 53,
    },
    NULL: {
      kind: 'Reduce',
      rule: 53,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 53,
    },
  },
];
const gotos = [
  {
    ArrayValue: 15,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    ClassDeclaration: 24,
    ExportDefaultDeclaration: 26,
    Expression: 6,
    ExpressionStatement: 28,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
    ReturnStatement: 29,
    Statement: 1,
  },
  {},
  {},
  {
    ArrayValue: 15,
    AssignmentExpression: 31,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 32,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {
    ArrayValue: 15,
    AssignmentExpression: 33,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 32,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {},
  {},
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 41,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
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
    ArrayItemList: 43,
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 44,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
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
    Identifier: 45,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 48,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 51,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 52,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 54,
    ExpressionList: 53,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {
    Identifier: 55,
  },
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 56,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassDeclaration: 62,
    Declaration: 61,
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
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 66,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {
    ClassBodyList: 67,
    ClassBodyListItem: 68,
    Identifier: 70,
    MethodDefinition: 69,
    PropertyDeclaration: 71,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 15,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    Expression: 72,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
  },
  {},
  {
    ClassBodyListItem: 74,
    Identifier: 70,
    MethodDefinition: 69,
    PropertyDeclaration: 71,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 78,
    ArgumentList: 77,
    Identifier: 79,
  },
  {
    Identifier: 80,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 86,
    Identifier: 79,
  },
  {
    Identifier: 87,
  },
  {},
  {
    ArrayValue: 15,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    ClassDeclaration: 24,
    ExportDefaultDeclaration: 26,
    Expression: 6,
    ExpressionStatement: 28,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
    ReturnStatement: 29,
    Statement: 89,
    StatementList: 88,
  },
  {},
  {},
  {
    ArrayValue: 15,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 17,
    CallExpression: 10,
    ClassDeclaration: 24,
    ExportDefaultDeclaration: 26,
    Expression: 6,
    ExpressionStatement: 28,
    Identifier: 11,
    MemberExpression: 13,
    NullValue: 20,
    NumberValue: 22,
    PrimitiveValue: 14,
    ReturnStatement: 29,
    Statement: 91,
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
    pop: 3,
    action: r6,
  },
  {
    production: 'AssignmentStatement',
    pop: 3,
    action: r7,
  },
  {
    production: 'AssignmentStatement',
    pop: 2,
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
    production: 'Expression',
    pop: 1,
    action: r16,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r17,
  },
  {
    production: 'AssignmentExpression',
    pop: 3,
    action: r18,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r19,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r20,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r21,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r22,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r23,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r24,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r25,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r26,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r27,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r28,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r29,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r30,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r31,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r32,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r33,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r34,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r35,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r36,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r37,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r38,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r39,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r40,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r41,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r42,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r43,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r44,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r45,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r46,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r47,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r48,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r49,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r50,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r51,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r52,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r53,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r54,
  },
  {
    production: 'ExpressionStatement',
    pop: 2,
    action: r55,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r56,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r57,
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
