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
    operator: '&&',
    rhs: $3,
  };
}
function r21($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r22($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r23($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r24(_$1, $2, _$3, $4) {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r25($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
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
function r29($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
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
function r34(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r35($1) {
  return [$1];
}
function r36($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r37() {
  return [];
}
function r38() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r39() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r40() {
  return {
    kind: 'NullValue',
  };
}
function r41($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r42(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r43($1) {
  return $1;
}
function r44(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r45($1) {
  return [$1];
}
function r46($1, $2) {
  $1.push($2);
  return $1;
}
function r47() {
  return [];
}
function r48($1) {
  return $1;
}
function r49($1) {
  return $1;
}
function r50($1, _$2, $3, _$4, _$5, $6) {
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
function r51($1) {
  return [$1];
}
function r52($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r53() {
  return [];
}
function r54($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r55($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r56($1) {
  return [$1];
}
function r57($1, $2) {
  $1.push($2);
  return $1;
}
function r58($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r59($1) {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r60() {
  return {
    kind: 'ReturnStatement',
  };
}
function r61(_$1, $2) {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 44,
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 11,
    },
    MINUS: {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 13,
    },
    MINUS: {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 14,
    },
    MINUS: {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 15,
    },
    MINUS: {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 9,
    },
    MINUS: {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 16,
    },
    MINUS: {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 17,
    },
    MINUS: {
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 18,
    },
    MINUS: {
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
      rule: 30,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 30,
    },
    MINUS: {
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
      rule: 31,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 31,
    },
    MINUS: {
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
      rule: 38,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 38,
    },
    MINUS: {
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
      rule: 39,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 39,
    },
    MINUS: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 32,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 32,
    },
    MINUS: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 40,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 40,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 40,
    },
    DOT: {
      kind: 'Reduce',
      rule: 40,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 40,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 40,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 40,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 40,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 40,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 40,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 40,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 33,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 33,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 33,
    },
    DOT: {
      kind: 'Reduce',
      rule: 33,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 33,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 33,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 33,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 33,
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
      rule: 41,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 41,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 41,
    },
    DOT: {
      kind: 'Reduce',
      rule: 41,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 41,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 41,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 41,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 41,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 41,
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
      state: 51,
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
      state: 52,
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
      state: 54,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 12,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 55,
    },
    ASSIGN: {
      kind: 'Reduce',
      rule: 12,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
      rule: 28,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 28,
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
      kind: 'Shift',
      state: 37,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 64,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
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
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 12,
    },
    MINUS: {
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 65,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 66,
    },
    COMMA: {
      kind: 'Shift',
      state: 67,
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
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
    OPENING_BRACE: {
      kind: 'Shift',
      state: 68,
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
      rule: 60,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 60,
    },
    CONST: {
      kind: 'Reduce',
      rule: 60,
    },
    LET: {
      kind: 'Reduce',
      rule: 60,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 60,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 60,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 60,
    },
    THIS: {
      kind: 'Reduce',
      rule: 60,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 60,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 60,
    },
    NEW: {
      kind: 'Reduce',
      rule: 60,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 60,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 60,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 60,
    },
    NULL: {
      kind: 'Reduce',
      rule: 60,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 60,
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 71,
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
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
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 20,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 20,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
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
      state: 72,
    },
    COMMA: {
      kind: 'Shift',
      state: 73,
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
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
      rule: 29,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 29,
    },
    MINUS: {
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
      rule: 21,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 21,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
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
      rule: 22,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 22,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 22,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 23,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 23,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 23,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 23,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 10,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 10,
    },
    MINUS: {
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
      rule: 34,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 34,
    },
    MINUS: {
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
      rule: 47,
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
    ['$']: {
      kind: 'Reduce',
      rule: 43,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 43,
    },
    CONST: {
      kind: 'Reduce',
      rule: 43,
    },
    LET: {
      kind: 'Reduce',
      rule: 43,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 43,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 43,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 43,
    },
    THIS: {
      kind: 'Reduce',
      rule: 43,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 43,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 43,
    },
    NEW: {
      kind: 'Reduce',
      rule: 43,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 43,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 43,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 43,
    },
    NULL: {
      kind: 'Reduce',
      rule: 43,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 61,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
    },
    CONST: {
      kind: 'Reduce',
      rule: 61,
    },
    LET: {
      kind: 'Reduce',
      rule: 61,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 61,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 61,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 61,
    },
    THIS: {
      kind: 'Reduce',
      rule: 61,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 61,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 61,
    },
    NEW: {
      kind: 'Reduce',
      rule: 61,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 61,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 61,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 61,
    },
    NULL: {
      kind: 'Reduce',
      rule: 61,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 61,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 25,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 25,
    },
    MINUS: {
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
      state: 82,
    },
    COMMA: {
      kind: 'Shift',
      state: 73,
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
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
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
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 83,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
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
    COLON: {
      kind: 'Shift',
      state: 86,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 85,
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
    ASSIGN: {
      kind: 'Shift',
      state: 37,
    },
    DOT: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 38,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 41,
    },
    MINUS: {
      kind: 'Shift',
      state: 42,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 39,
    },
    PLUS: {
      kind: 'Shift',
      state: 43,
    },
    CLOSING_PAREN: {
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
      rule: 24,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 24,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 24,
    },
    PLUS: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 44,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 44,
    },
    CONST: {
      kind: 'Reduce',
      rule: 44,
    },
    LET: {
      kind: 'Reduce',
      rule: 44,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 44,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 44,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 44,
    },
    THIS: {
      kind: 'Reduce',
      rule: 44,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 44,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 44,
    },
    NEW: {
      kind: 'Reduce',
      rule: 44,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 44,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 44,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 44,
    },
    NULL: {
      kind: 'Reduce',
      rule: 44,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 44,
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
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
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 91,
    },
    COMMA: {
      kind: 'Shift',
      state: 92,
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
    COLON: {
      kind: 'Shift',
      state: 93,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 54,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 54,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 94,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 95,
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
      rule: 58,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 58,
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
      rule: 52,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 52,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 55,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 55,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 27,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 100,
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
    NEW: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 50,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 50,
    },
  },
  {
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
    AssignmentExpression: 46,
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
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
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
  {
    ArrayItemList: 48,
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 49,
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
    Identifier: 50,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 53,
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
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 56,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 57,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 59,
    ExpressionList: 58,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    Identifier: 60,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 61,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 62,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 63,
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
    ClassDeclaration: 70,
    Declaration: 69,
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
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 59,
    ExpressionList: 74,
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
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 75,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ClassBodyList: 76,
    ClassBodyListItem: 77,
    Identifier: 79,
    MethodDefinition: 78,
    PropertyDeclaration: 80,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 46,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 81,
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
    ClassBodyListItem: 84,
    Identifier: 79,
    MethodDefinition: 78,
    PropertyDeclaration: 80,
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
    Argument: 88,
    ArgumentList: 87,
    Identifier: 89,
  },
  {
    Identifier: 90,
  },
  {},
  {},
  {},
  {},
  {},
  {
    Argument: 96,
    Identifier: 89,
  },
  {
    Identifier: 97,
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
    Statement: 99,
    StatementList: 98,
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
    Statement: 101,
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
    production: 'BinaryExpression',
    pop: 3,
    action: r22,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r23,
  },
  {
    production: 'NewExpression',
    pop: 5,
    action: r24,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r25,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r26,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r27,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r28,
  },
  {
    production: 'MemberExpression',
    pop: 3,
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
    production: 'PrimitiveValue',
    pop: 1,
    action: r32,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r33,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r34,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r35,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r36,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r37,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r38,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r39,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r40,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r41,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r42,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r43,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r44,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r45,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r46,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r47,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r48,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r49,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r50,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r51,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r52,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r53,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r54,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r55,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r56,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r57,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r58,
  },
  {
    production: 'ExpressionStatement',
    pop: 2,
    action: r59,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r60,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r61,
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
