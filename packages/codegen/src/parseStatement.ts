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
function r18($1) {
  return $1;
}
function r19($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r20($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r21($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r22(_$1, $2, _$3, $4) {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r23($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
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
function r27($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r28($1) {
  return $1;
}
function r29($1) {
  return $1;
}
function r30($1) {
  return $1;
}
function r31($1) {
  return $1;
}
function r32(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r33($1) {
  return [$1];
}
function r34($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r35() {
  return [];
}
function r36() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r37() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r38() {
  return {
    kind: 'NullValue',
  };
}
function r39($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r40(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r41($1) {
  return $1;
}
function r42(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r43($1) {
  return [$1];
}
function r44($1, $2) {
  $1.push($2);
  return $1;
}
function r45() {
  return [];
}
function r46($1) {
  return $1;
}
function r47($1) {
  return $1;
}
function r48($1, _$2, $3, _$4, _$5, $6) {
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
function r49($1) {
  return [$1];
}
function r50($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r51() {
  return [];
}
function r52($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r53($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
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
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r57($1) {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r58() {
  return {
    kind: 'ReturnStatement',
  };
}
function r59(_$1, $2) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
const actions = [
  {
    CLASS: {
      kind: 'Shift',
      state: 27,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 29,
    },
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 32,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 21,
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
    NEW: {
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
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 36,
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
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 42,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
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
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 18,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 18,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 18,
    },
    DOT: {
      kind: 'Reduce',
      rule: 18,
    },
    PLUS: {
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
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 38,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 38,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 38,
    },
    DOT: {
      kind: 'Reduce',
      rule: 38,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 38,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 38,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 38,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 31,
    },
    MINUS: {
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
    PLUS: {
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
      rule: 39,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 39,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 39,
    },
    DOT: {
      kind: 'Reduce',
      rule: 39,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 39,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 39,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 39,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 39,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 39,
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
    NEW: {
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
    NEW: {
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
      state: 49,
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
    NEW: {
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
    NEW: {
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
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 50,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 21,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 52,
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
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 53,
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
    NEW: {
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
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 26,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 26,
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
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
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
    NEW: {
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
      kind: 'Shift',
      state: 37,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 60,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
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
    ASSIGN: {
      kind: 'Shift',
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 61,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 62,
    },
    COMMA: {
      kind: 'Shift',
      state: 63,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
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
    OPENING_BRACE: {
      kind: 'Shift',
      state: 64,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 27,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 58,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 58,
    },
    CONST: {
      kind: 'Reduce',
      rule: 58,
    },
    LET: {
      kind: 'Reduce',
      rule: 58,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 58,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 58,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 58,
    },
    THIS: {
      kind: 'Reduce',
      rule: 58,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 58,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 58,
    },
    NEW: {
      kind: 'Reduce',
      rule: 58,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 58,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 58,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 58,
    },
    NULL: {
      kind: 'Reduce',
      rule: 58,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 67,
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
    NEW: {
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
    NEW: {
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
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 20,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
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
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 68,
    },
    COMMA: {
      kind: 'Shift',
      state: 69,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
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
      rule: 21,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
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
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
    CLOSING_PAREN: {
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
      rule: 32,
    },
    MINUS: {
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
    PLUS: {
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
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 45,
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
    NEW: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 41,
    },
    CONST: {
      kind: 'Reduce',
      rule: 41,
    },
    LET: {
      kind: 'Reduce',
      rule: 41,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 41,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 41,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 41,
    },
    THIS: {
      kind: 'Reduce',
      rule: 41,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 41,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 41,
    },
    NEW: {
      kind: 'Reduce',
      rule: 41,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 41,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 41,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 41,
    },
    NULL: {
      kind: 'Reduce',
      rule: 41,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 41,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 59,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 59,
    },
    CONST: {
      kind: 'Reduce',
      rule: 59,
    },
    LET: {
      kind: 'Reduce',
      rule: 59,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 59,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 59,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 59,
    },
    THIS: {
      kind: 'Reduce',
      rule: 59,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 59,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 59,
    },
    NEW: {
      kind: 'Reduce',
      rule: 59,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 59,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 59,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 59,
    },
    NULL: {
      kind: 'Reduce',
      rule: 59,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 59,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 23,
    },
    MINUS: {
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
    PLUS: {
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
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
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
      state: 21,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 78,
    },
    COMMA: {
      kind: 'Shift',
      state: 69,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
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
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 79,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 43,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 43,
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
    COLON: {
      kind: 'Shift',
      state: 82,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 81,
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
    ASSIGN: {
      kind: 'Shift',
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    MINUS: {
      kind: 'Shift',
      state: 38,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 41,
    },
    CLOSING_PAREN: {
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
      rule: 22,
    },
    MINUS: {
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
    PLUS: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 42,
    },
    CONST: {
      kind: 'Reduce',
      rule: 42,
    },
    LET: {
      kind: 'Reduce',
      rule: 42,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 42,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 42,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 42,
    },
    THIS: {
      kind: 'Reduce',
      rule: 42,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 42,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 42,
    },
    NEW: {
      kind: 'Reduce',
      rule: 42,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 42,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 42,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 42,
    },
    NULL: {
      kind: 'Reduce',
      rule: 42,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 42,
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 87,
    },
    COMMA: {
      kind: 'Shift',
      state: 88,
    },
  },
  {
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
    COLON: {
      kind: 'Shift',
      state: 89,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 52,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 52,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 90,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
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
      rule: 56,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 56,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 27,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 29,
    },
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 32,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 21,
    },
  },
  {
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 53,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 53,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 27,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 96,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 29,
    },
    FALSE: {
      kind: 'Shift',
      state: 20,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
    NEW: {
      kind: 'Shift',
      state: 15,
    },
    NULL: {
      kind: 'Shift',
      state: 23,
    },
    NUMBER: {
      kind: 'Shift',
      state: 25,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 32,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 21,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 54,
    },
    CONST: {
      kind: 'Reduce',
      rule: 54,
    },
    LET: {
      kind: 'Reduce',
      rule: 54,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 54,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 54,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 54,
    },
    THIS: {
      kind: 'Reduce',
      rule: 54,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 54,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 54,
    },
    NEW: {
      kind: 'Reduce',
      rule: 54,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 54,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 54,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 54,
    },
    NULL: {
      kind: 'Reduce',
      rule: 54,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 54,
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
    NEW: {
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
];
const gotos = [
  {
    ArrayValue: 17,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    ClassDeclaration: 26,
    ExportDefaultDeclaration: 28,
    Expression: 6,
    ExpressionStatement: 30,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
    ReturnStatement: 31,
    Statement: 1,
  },
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 33,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 34,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 35,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 34,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 43,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 45,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {},
  {},
  {
    ArrayItemList: 46,
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 47,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
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
    Identifier: 48,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 51,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 54,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 55,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 57,
    ExpressionList: 56,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    Identifier: 58,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 59,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassDeclaration: 66,
    Declaration: 65,
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
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 57,
    ExpressionList: 70,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 71,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ClassBodyList: 72,
    ClassBodyListItem: 73,
    Identifier: 75,
    MethodDefinition: 74,
    PropertyDeclaration: 76,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 44,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 77,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {},
  {},
  {
    ClassBodyListItem: 80,
    Identifier: 75,
    MethodDefinition: 74,
    PropertyDeclaration: 76,
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
    Argument: 84,
    ArgumentList: 83,
    Identifier: 85,
  },
  {
    Identifier: 86,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 92,
    Identifier: 85,
  },
  {
    Identifier: 93,
  },
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    ClassDeclaration: 26,
    ExportDefaultDeclaration: 28,
    Expression: 6,
    ExpressionStatement: 30,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
    ReturnStatement: 31,
    Statement: 95,
    StatementList: 94,
  },
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    ClassDeclaration: 26,
    ExportDefaultDeclaration: 28,
    Expression: 6,
    ExpressionStatement: 30,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
    ReturnStatement: 31,
    Statement: 97,
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
    production: 'Expression',
    pop: 1,
    action: r18,
  },
  {
    production: 'AssignmentExpression',
    pop: 3,
    action: r19,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r20,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r21,
  },
  {
    production: 'NewExpression',
    pop: 5,
    action: r22,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r23,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r24,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r25,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r26,
  },
  {
    production: 'MemberExpression',
    pop: 3,
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
    production: 'PrimitiveValue',
    pop: 1,
    action: r30,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r31,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r32,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r33,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r34,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r35,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r36,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r37,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r38,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r39,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r40,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r41,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r42,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r43,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r44,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r45,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r46,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r47,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r48,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r49,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r50,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r51,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r52,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r53,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r54,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r55,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r56,
  },
  {
    production: 'ExpressionStatement',
    pop: 2,
    action: r57,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r58,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r59,
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
