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
function r6($1) {
  return $1;
}
function r7(_$1, $2) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r8(_$1, $2) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r9($1) {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1.lhs,
    rhs: $1.rhs,
  };
}
function r10($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r11(_$1, $2) {
  return $2;
}
function r12() {
  return {
    kind: 'Identifier',
    name: 'this',
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
function r17($1) {
  return $1;
}
function r18($1) {
  return $1;
}
function r19($1) {
  return $1;
}
function r20($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r21($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r22($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r23($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r24($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r25($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r26($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r27(_$1, $2, _$3, $4) {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r28($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r29($1) {
  return [$1];
}
function r30($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r31() {
  return [];
}
function r32($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r33($1) {
  return $1;
}
function r34($1) {
  return $1;
}
function r35($1) {
  return $1;
}
function r36($1) {
  return $1;
}
function r37(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r38($1) {
  return [$1];
}
function r39($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r40() {
  return [];
}
function r41() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r42() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r43() {
  return {
    kind: 'NullValue',
  };
}
function r44($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r45(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r46($1) {
  return $1;
}
function r47(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r48($1) {
  return [$1];
}
function r49($1, $2) {
  $1.push($2);
  return $1;
}
function r50() {
  return [];
}
function r51($1) {
  return $1;
}
function r52($1) {
  return $1;
}
function r53($1, _$2, $3, _$4, _$5, $6) {
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
function r54($1) {
  return [$1];
}
function r55($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r56() {
  return [];
}
function r57($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r58($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r59($1) {
  return [$1];
}
function r60($1, $2) {
  $1.push($2);
  return $1;
}
function r61() {
  return [];
}
function r62($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r63($1) {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r64() {
  return {
    kind: 'ReturnStatement',
  };
}
function r65(_$1, $2) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r66(_$1, _$2, $3, _$4, _$5, $6) {
  return {
    kind: 'WhileStatement',
    condition: $3,
    block: $6,
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
    WHILE: {
      kind: 'Shift',
      state: 34,
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
    WHILE: {
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
      state: 38,
    },
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
    EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 48,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
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
    EQUALS: {
      kind: 'Reduce',
      rule: 12,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 14,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 15,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 16,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 10,
    },
    STRICT_EQUALS: {
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
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 10,
    },
    COLON: {
      kind: 'Reduce',
      rule: 10,
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
    EQUALS: {
      kind: 'Reduce',
      rule: 17,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 18,
    },
    STRICT_EQUALS: {
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
      rule: 19,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 19,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 19,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 19,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 19,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 33,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 34,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 41,
    },
    STRICT_EQUALS: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 42,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 42,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 42,
    },
    DOT: {
      kind: 'Reduce',
      rule: 42,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 42,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 42,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 42,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 42,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 42,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 42,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 42,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 35,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 35,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 35,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 35,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 35,
    },
    STRICT_EQUALS: {
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
      rule: 43,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 43,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 43,
    },
    DOT: {
      kind: 'Reduce',
      rule: 43,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 43,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 43,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 43,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 43,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 43,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 43,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 43,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 43,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 36,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 36,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 36,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 36,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 36,
    },
    STRICT_EQUALS: {
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
      rule: 44,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 44,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 44,
    },
    DOT: {
      kind: 'Reduce',
      rule: 44,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 44,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 44,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 44,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 44,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 44,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 44,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 44,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 44,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 44,
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
    WHILE: {
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
    WHILE: {
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
      state: 55,
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
    WHILE: {
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
    WHILE: {
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
      state: 56,
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
    WHILE: {
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
    OPENING_PAREN: {
      kind: 'Shift',
      state: 58,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 59,
    },
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
    EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 60,
    },
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
    EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 9,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 9,
    },
    CONST: {
      kind: 'Reduce',
      rule: 9,
    },
    LET: {
      kind: 'Reduce',
      rule: 9,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 9,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 9,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 9,
    },
    THIS: {
      kind: 'Reduce',
      rule: 9,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 9,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 9,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 9,
    },
    NEW: {
      kind: 'Reduce',
      rule: 9,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 9,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 9,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 9,
    },
    NULL: {
      kind: 'Reduce',
      rule: 9,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 9,
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
      rule: 31,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 31,
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
      rule: 63,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 63,
    },
    CONST: {
      kind: 'Reduce',
      rule: 63,
    },
    LET: {
      kind: 'Reduce',
      rule: 63,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 63,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 63,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 63,
    },
    THIS: {
      kind: 'Reduce',
      rule: 63,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 63,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 63,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 63,
    },
    NEW: {
      kind: 'Reduce',
      rule: 63,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 63,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 63,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 63,
    },
    NULL: {
      kind: 'Reduce',
      rule: 63,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 63,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 71,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 13,
    },
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
    EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
    STRICT_EQUALS: {
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
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 72,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 73,
    },
    COMMA: {
      kind: 'Shift',
      state: 74,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
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
    OPENING_BRACE: {
      kind: 'Shift',
      state: 75,
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
      rule: 64,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 64,
    },
    CONST: {
      kind: 'Reduce',
      rule: 64,
    },
    LET: {
      kind: 'Reduce',
      rule: 64,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 64,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 64,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 64,
    },
    THIS: {
      kind: 'Reduce',
      rule: 64,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 64,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 64,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 64,
    },
    NEW: {
      kind: 'Reduce',
      rule: 64,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 64,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 64,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 64,
    },
    NULL: {
      kind: 'Reduce',
      rule: 64,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 64,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 78,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
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
    WHILE: {
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
    WHILE: {
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
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
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
      rule: 21,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 21,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 21,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
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
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 80,
    },
    COMMA: {
      kind: 'Shift',
      state: 81,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
    },
    CLOSING_PAREN: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 32,
    },
    STRICT_EQUALS: {
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
      rule: 22,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 22,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
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
      state: 42,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 23,
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
      state: 41,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 23,
    },
    STRICT_EQUALS: {
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
      rule: 24,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 24,
    },
    LOGICAL_AND: {
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
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 24,
    },
    STRICT_EQUALS: {
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
      rule: 25,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 25,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 25,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 25,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
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
      rule: 26,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 26,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 26,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 26,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
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
    EQUALS: {
      kind: 'Reduce',
      rule: 11,
    },
    STRICT_EQUALS: {
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
      rule: 37,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 37,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 37,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 37,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 37,
    },
    STRICT_EQUALS: {
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
      rule: 50,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 45,
    },
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 45,
    },
    THIS: {
      kind: 'Reduce',
      rule: 45,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 45,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 45,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 45,
    },
    NEW: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 46,
    },
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
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 46,
    },
    THIS: {
      kind: 'Reduce',
      rule: 46,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 46,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 46,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 46,
    },
    NEW: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 65,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 65,
    },
    CONST: {
      kind: 'Reduce',
      rule: 65,
    },
    LET: {
      kind: 'Reduce',
      rule: 65,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 65,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 65,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 65,
    },
    THIS: {
      kind: 'Reduce',
      rule: 65,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 65,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 65,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 65,
    },
    NEW: {
      kind: 'Reduce',
      rule: 65,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 65,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 65,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 65,
    },
    NULL: {
      kind: 'Reduce',
      rule: 65,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 65,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 89,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 28,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 28,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 28,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 28,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 28,
    },
    STRICT_EQUALS: {
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
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 91,
    },
    COMMA: {
      kind: 'Shift',
      state: 81,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
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
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 92,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
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
      rule: 51,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 51,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 95,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 94,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 52,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 52,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 96,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 39,
    },
    DOT: {
      kind: 'Shift',
      state: 42,
    },
    EQUALS: {
      kind: 'Shift',
      state: 46,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 40,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 43,
    },
    MINUS: {
      kind: 'Shift',
      state: 44,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 41,
    },
    PLUS: {
      kind: 'Shift',
      state: 45,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 47,
    },
    CLOSING_PAREN: {
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
      rule: 27,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 27,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 27,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 27,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 27,
    },
    STRICT_EQUALS: {
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
    ['$']: {
      kind: 'Reduce',
      rule: 47,
    },
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
    WHILE: {
      kind: 'Reduce',
      rule: 47,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 47,
    },
    NEW: {
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
      rule: 49,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 49,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 56,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 56,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
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
    WHILE: {
      kind: 'Shift',
      state: 34,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 103,
    },
    COMMA: {
      kind: 'Shift',
      state: 104,
    },
  },
  {
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
    COLON: {
      kind: 'Shift',
      state: 105,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 57,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 57,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 106,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 27,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 107,
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
    WHILE: {
      kind: 'Shift',
      state: 34,
    },
  },
  {
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
    WHILE: {
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
    OPENING_BRACE: {
      kind: 'Shift',
      state: 109,
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
      rule: 62,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 62,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 66,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 66,
    },
    CONST: {
      kind: 'Reduce',
      rule: 66,
    },
    LET: {
      kind: 'Reduce',
      rule: 66,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 66,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 66,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 66,
    },
    THIS: {
      kind: 'Reduce',
      rule: 66,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 66,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 66,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 66,
    },
    NEW: {
      kind: 'Reduce',
      rule: 66,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 66,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 66,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 66,
    },
    NULL: {
      kind: 'Reduce',
      rule: 66,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 66,
    },
  },
  {
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
    WHILE: {
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
    WHILE: {
      kind: 'Shift',
      state: 34,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 58,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 27,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 113,
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
    WHILE: {
      kind: 'Shift',
      state: 34,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 53,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 53,
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
    WhileStatement: 33,
  },
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 35,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 36,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 37,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 36,
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
    AssignmentExpression: 50,
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
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
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
  {
    ArrayItemList: 52,
    ArrayValue: 17,
    AssignmentExpression: 50,
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
  {},
  {},
  {},
  {},
  {
    Identifier: 54,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
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
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
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
    AssignmentExpression: 50,
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
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 64,
    ExpressionList: 63,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    Identifier: 65,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 66,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 67,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 68,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 69,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 70,
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
    ClassDeclaration: 77,
    Declaration: 76,
  },
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 79,
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
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 64,
    ExpressionList: 82,
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
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 83,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 22,
    NumberValue: 24,
    PrimitiveValue: 16,
  },
  {
    ClassBodyList: 84,
    ClassBodyListItem: 85,
    Identifier: 87,
    MethodDefinition: 86,
    PropertyDeclaration: 88,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 17,
    AssignmentExpression: 50,
    BinaryExpression: 9,
    BooleanValue: 19,
    CallExpression: 10,
    Expression: 90,
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
    ClassBodyListItem: 93,
    Identifier: 87,
    MethodDefinition: 86,
    PropertyDeclaration: 88,
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
    Argument: 98,
    ArgumentList: 97,
    Identifier: 99,
  },
  {
    Identifier: 100,
  },
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
    Statement: 102,
    StatementList: 101,
    WhileStatement: 33,
  },
  {},
  {},
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
    Statement: 108,
    WhileStatement: 33,
  },
  {},
  {},
  {
    Argument: 110,
    Identifier: 99,
  },
  {
    Identifier: 111,
  },
  {},
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
    Statement: 102,
    StatementList: 112,
    WhileStatement: 33,
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
    Statement: 108,
    WhileStatement: 33,
  },
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
    production: 'Statement',
    pop: 1,
    action: r6,
  },
  {
    production: 'AssignmentStatement',
    pop: 3,
    action: r7,
  },
  {
    production: 'AssignmentStatement',
    pop: 3,
    action: r8,
  },
  {
    production: 'AssignmentStatement',
    pop: 2,
    action: r9,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r10,
  },
  {
    production: 'Expression',
    pop: 3,
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
    production: 'Expression',
    pop: 1,
    action: r19,
  },
  {
    production: 'AssignmentExpression',
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
    production: 'BinaryExpression',
    pop: 3,
    action: r24,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r25,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r26,
  },
  {
    production: 'NewExpression',
    pop: 5,
    action: r27,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r28,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r29,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r30,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r31,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r32,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r33,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r34,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r35,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r36,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r37,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r38,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r39,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r40,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r41,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r42,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r43,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r44,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r45,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r46,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r47,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r48,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r49,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r50,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r51,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r52,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r53,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r54,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r55,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r56,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r57,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r58,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r59,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r60,
  },
  {
    production: 'StatementList',
    pop: 0,
    action: r61,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r62,
  },
  {
    production: 'ExpressionStatement',
    pop: 2,
    action: r63,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r64,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r65,
  },
  {
    production: 'WhileStatement',
    pop: 7,
    action: r66,
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
        // TODO: make this a static, not a runtime, check
        throw new Error(
          'to use static parser must provide semantic action for every production',
        );
      }
    }
  }
}
