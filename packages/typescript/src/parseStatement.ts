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
function r20($1) {
  return $1;
}
function r21($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r22($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r23($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r24($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r25($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r26($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r27($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r28(_$1, $2, _$3, $4) {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r29($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r30($1) {
  return [$1];
}
function r31($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r32() {
  return [];
}
function r33($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r34(_$1, $2) {
  return {
    kind: 'ObjectValue',
    properties: $2,
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
function r38($1, _$2, $3) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r39($1) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r40($1, _$2, $3) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r41(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'ObjectProperty',
    key: $2,
    value: $5,
    computed: true,
    shorthand: false,
  };
}
function r42($1) {
  return $1;
}
function r43($1) {
  return $1;
}
function r44($1) {
  return $1;
}
function r45($1) {
  return $1;
}
function r46($1) {
  return $1;
}
function r47(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r48($1) {
  return [$1];
}
function r49($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r50() {
  return [];
}
function r51() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r52() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r53() {
  return {
    kind: 'NullValue',
  };
}
function r54($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r55($1) {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r56(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r57($1) {
  return $1;
}
function r58(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
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
function r62($1) {
  return $1;
}
function r63($1) {
  return $1;
}
function r64($1, _$2, $3, _$4, _$5, $6) {
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
function r65($1) {
  return [$1];
}
function r66($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r67() {
  return [];
}
function r68($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r69($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r70($1) {
  return [$1];
}
function r71($1, $2) {
  $1.push($2);
  return $1;
}
function r72() {
  return [];
}
function r73($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r74($1) {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r75() {
  return {
    kind: 'ReturnStatement',
  };
}
function r76(_$1, $2) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r77(_$1, _$2, $3, _$4, _$5, $6) {
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
      state: 31,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 33,
    },
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 36,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    WHILE: {
      kind: 'Shift',
      state: 38,
    },
  },
  {
    $: {
      kind: 'Accept',
    },
  },
  {
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 42,
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
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
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
    CLOSING_BRACE: {
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
    CLOSING_BRACE: {
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
    CLOSING_BRACE: {
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
    CLOSING_BRACE: {
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
    COLON: {
      kind: 'Reduce',
      rule: 10,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 10,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 10,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 10,
    },
    OPENING_BRACE: {
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
    CLOSING_BRACE: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 18,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 19,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 60,
    },
    CLOSING_BRACE: {
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
      rule: 20,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 20,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 20,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 20,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 20,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 20,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 42,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 50,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 50,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 51,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 51,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 51,
    },
    DOT: {
      kind: 'Reduce',
      rule: 51,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 51,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 51,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 51,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 51,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 51,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 51,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 51,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 51,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 51,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 51,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 52,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 52,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 52,
    },
    DOT: {
      kind: 'Reduce',
      rule: 52,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 52,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 52,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 52,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 52,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 52,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 52,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 52,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 52,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 52,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 52,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 44,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 53,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 53,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 53,
    },
    DOT: {
      kind: 'Reduce',
      rule: 53,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 53,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 53,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 53,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 53,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 53,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 53,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 53,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 53,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 53,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 53,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 45,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 45,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 45,
    },
    DOT: {
      kind: 'Reduce',
      rule: 45,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 45,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 45,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 45,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 45,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 45,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 45,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 45,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 45,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 45,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 45,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 54,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 54,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 54,
    },
    DOT: {
      kind: 'Reduce',
      rule: 54,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 54,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 54,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 54,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 54,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 54,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 54,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 54,
    },
    COLON: {
      kind: 'Reduce',
      rule: 54,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 54,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 54,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 54,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 46,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 46,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 46,
    },
    DOT: {
      kind: 'Reduce',
      rule: 46,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 46,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 46,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 46,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 46,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 46,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 46,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 46,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 46,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 46,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 46,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 55,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 55,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 55,
    },
    DOT: {
      kind: 'Reduce',
      rule: 55,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 55,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 55,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 55,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 55,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 55,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 55,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 55,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 55,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 55,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 55,
    },
  },
  {
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
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
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    DEFAULT: {
      kind: 'Shift',
      state: 64,
    },
  },
  {
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 65,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 67,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 68,
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
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 69,
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
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 9,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 32,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 32,
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
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    $: {
      kind: 'Reduce',
      rule: 74,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 74,
    },
    CONST: {
      kind: 'Reduce',
      rule: 74,
    },
    LET: {
      kind: 'Reduce',
      rule: 74,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 74,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 74,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 74,
    },
    THIS: {
      kind: 'Reduce',
      rule: 74,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 74,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 74,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 74,
    },
    NEW: {
      kind: 'Reduce',
      rule: 74,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 74,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 74,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 74,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 74,
    },
    NULL: {
      kind: 'Reduce',
      rule: 74,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 74,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 74,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 80,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 81,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 82,
    },
    COMMA: {
      kind: 'Shift',
      state: 83,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 35,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 84,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 39,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 39,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 85,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 87,
    },
    COMMA: {
      kind: 'Shift',
      state: 88,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 48,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 48,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 89,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 31,
    },
  },
  {
    $: {
      kind: 'Reduce',
      rule: 75,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 75,
    },
    CONST: {
      kind: 'Reduce',
      rule: 75,
    },
    LET: {
      kind: 'Reduce',
      rule: 75,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 75,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 75,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 75,
    },
    THIS: {
      kind: 'Reduce',
      rule: 75,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 75,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 75,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 75,
    },
    NEW: {
      kind: 'Reduce',
      rule: 75,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 75,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 75,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 75,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 75,
    },
    NULL: {
      kind: 'Reduce',
      rule: 75,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 75,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 75,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 92,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    $: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
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
    CLOSING_BRACE: {
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
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
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
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 22,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 94,
    },
    COMMA: {
      kind: 'Shift',
      state: 95,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 33,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 23,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 23,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
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
    CLOSING_BRACE: {
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
      state: 46,
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
      state: 45,
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
    CLOSING_BRACE: {
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
      state: 46,
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
      kind: 'Reduce',
      rule: 25,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 25,
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
    CLOSING_BRACE: {
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
      state: 46,
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
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 26,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 27,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 27,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 27,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 27,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 27,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    CLOSING_PAREN: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 34,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 60,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 100,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 47,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 47,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 47,
    },
    DOT: {
      kind: 'Reduce',
      rule: 47,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 47,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 47,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 47,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 47,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 47,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 47,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 47,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 47,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 47,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
    },
  },
  {
    $: {
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
    WHILE: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 56,
    },
  },
  {
    $: {
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
    WHILE: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 57,
    },
  },
  {
    $: {
      kind: 'Reduce',
      rule: 76,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 76,
    },
    CONST: {
      kind: 'Reduce',
      rule: 76,
    },
    LET: {
      kind: 'Reduce',
      rule: 76,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 76,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 76,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 76,
    },
    THIS: {
      kind: 'Reduce',
      rule: 76,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 76,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 76,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 76,
    },
    NEW: {
      kind: 'Reduce',
      rule: 76,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 76,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 76,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 76,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 76,
    },
    NULL: {
      kind: 'Reduce',
      rule: 76,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 76,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 76,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 107,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
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
    EQUALS: {
      kind: 'Reduce',
      rule: 29,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 29,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 109,
    },
    COMMA: {
      kind: 'Shift',
      state: 95,
    },
  },
  {
    CLOSING_BRACE: {
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
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    CLOSING_BRACE: {
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
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    CLOSING_BRACE: {
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
      state: 110,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 49,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 49,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 111,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 59,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 59,
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
    COLON: {
      kind: 'Shift',
      state: 114,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 113,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 63,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 63,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 115,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 28,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
  },
  {
    $: {
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
    WHILE: {
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
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 60,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 60,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 67,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 67,
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
      state: 31,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 33,
    },
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 36,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    WHILE: {
      kind: 'Shift',
      state: 38,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 72,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 43,
    },
    DOT: {
      kind: 'Shift',
      state: 46,
    },
    EQUALS: {
      kind: 'Shift',
      state: 50,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 44,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 47,
    },
    MINUS: {
      kind: 'Shift',
      state: 48,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 45,
    },
    PLUS: {
      kind: 'Shift',
      state: 49,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    CLOSING_BRACE: {
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
      kind: 'Shift',
      state: 123,
    },
    COMMA: {
      kind: 'Shift',
      state: 124,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 65,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 65,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 125,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 68,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 126,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 31,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 127,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 33,
    },
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 36,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    WHILE: {
      kind: 'Shift',
      state: 38,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 70,
    },
    CONST: {
      kind: 'Reduce',
      rule: 70,
    },
    LET: {
      kind: 'Reduce',
      rule: 70,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 70,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 70,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 70,
    },
    THIS: {
      kind: 'Reduce',
      rule: 70,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 70,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 70,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 70,
    },
    NEW: {
      kind: 'Reduce',
      rule: 70,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 70,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 70,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 70,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 70,
    },
    NULL: {
      kind: 'Reduce',
      rule: 70,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 70,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 70,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 129,
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
      rule: 73,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 73,
    },
  },
  {
    $: {
      kind: 'Reduce',
      rule: 77,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 77,
    },
    CONST: {
      kind: 'Reduce',
      rule: 77,
    },
    LET: {
      kind: 'Reduce',
      rule: 77,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 77,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 77,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 77,
    },
    THIS: {
      kind: 'Reduce',
      rule: 77,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 77,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 77,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 77,
    },
    NEW: {
      kind: 'Reduce',
      rule: 77,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 77,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 77,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 77,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 77,
    },
    NULL: {
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
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 71,
    },
    CONST: {
      kind: 'Reduce',
      rule: 71,
    },
    LET: {
      kind: 'Reduce',
      rule: 71,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 71,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 71,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 71,
    },
    THIS: {
      kind: 'Reduce',
      rule: 71,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 71,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 71,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 71,
    },
    NEW: {
      kind: 'Reduce',
      rule: 71,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 71,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 71,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 71,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 71,
    },
    NULL: {
      kind: 'Reduce',
      rule: 71,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 71,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 71,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 31,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 33,
    },
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 36,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    WHILE: {
      kind: 'Shift',
      state: 38,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 72,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 66,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 66,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 69,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 69,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 31,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 133,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 33,
    },
    FALSE: {
      kind: 'Shift',
      state: 22,
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
      state: 25,
    },
    NUMBER: {
      kind: 'Shift',
      state: 27,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 20,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 36,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 29,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 23,
    },
    WHILE: {
      kind: 'Shift',
      state: 38,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 64,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 64,
    },
  },
];
const gotos = [
  {
    ArrayValue: 19,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    ClassDeclaration: 30,
    ExportDefaultDeclaration: 32,
    Expression: 6,
    ExpressionStatement: 34,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    ReturnStatement: 35,
    Statement: 1,
    StringValue: 28,
    WhileStatement: 37,
  },
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 39,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 40,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 41,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 40,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 53,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 55,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {
    Identifier: 58,
    NumberValue: 59,
    ObjectProperty: 57,
    ObjectPropertyList: 56,
  },
  {},
  {},
  {
    ArrayItemList: 61,
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 62,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
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
  {
    Identifier: 63,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 66,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 70,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 71,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 73,
    ExpressionList: 72,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    Identifier: 74,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 75,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 76,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 77,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 78,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 79,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
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
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 86,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {},
  {},
  {
    ClassDeclaration: 91,
    Declaration: 90,
  },
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 93,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
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
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 73,
    ExpressionList: 96,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {
    Identifier: 58,
    NumberValue: 59,
    ObjectProperty: 97,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 98,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 99,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 101,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {
    ClassBodyList: 102,
    ClassBodyListItem: 103,
    Identifier: 105,
    MethodDefinition: 104,
    PropertyDeclaration: 106,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 108,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassBodyListItem: 112,
    Identifier: 105,
    MethodDefinition: 104,
    PropertyDeclaration: 106,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 54,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    Expression: 116,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    StringValue: 28,
  },
  {},
  {},
  {
    Argument: 118,
    ArgumentList: 117,
    Identifier: 119,
  },
  {
    Identifier: 120,
  },
  {
    ArrayValue: 19,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    ClassDeclaration: 30,
    ExportDefaultDeclaration: 32,
    Expression: 6,
    ExpressionStatement: 34,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    ReturnStatement: 35,
    Statement: 122,
    StatementList: 121,
    StringValue: 28,
    WhileStatement: 37,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    ClassDeclaration: 30,
    ExportDefaultDeclaration: 32,
    Expression: 6,
    ExpressionStatement: 34,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    ReturnStatement: 35,
    Statement: 128,
    StringValue: 28,
    WhileStatement: 37,
  },
  {},
  {},
  {
    Argument: 130,
    Identifier: 119,
  },
  {
    Identifier: 131,
  },
  {},
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    ClassDeclaration: 30,
    ExportDefaultDeclaration: 32,
    Expression: 6,
    ExpressionStatement: 34,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    ReturnStatement: 35,
    Statement: 122,
    StatementList: 132,
    StringValue: 28,
    WhileStatement: 37,
  },
  {},
  {},
  {
    ArrayValue: 19,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 21,
    CallExpression: 10,
    ClassDeclaration: 30,
    ExportDefaultDeclaration: 32,
    Expression: 6,
    ExpressionStatement: 34,
    Identifier: 11,
    MemberExpression: 13,
    NewExpression: 14,
    NullValue: 24,
    NumberValue: 26,
    ObjectValue: 16,
    PrimitiveValue: 18,
    ReturnStatement: 35,
    Statement: 128,
    StringValue: 28,
    WhileStatement: 37,
  },
  {},
];
const rules = [
  {
    production: "Statement'",
    pop: 1,
    action: () => {}, /* dummy placeholder */
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
    production: 'Expression',
    pop: 1,
    action: r20,
  },
  {
    production: 'AssignmentExpression',
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
    production: 'BinaryExpression',
    pop: 3,
    action: r27,
  },
  {
    production: 'NewExpression',
    pop: 5,
    action: r28,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r29,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r30,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r31,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r32,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r33,
  },
  {
    production: 'ObjectValue',
    pop: 3,
    action: r34,
  },
  {
    production: 'ObjectPropertyList',
    pop: 1,
    action: r35,
  },
  {
    production: 'ObjectPropertyList',
    pop: 3,
    action: r36,
  },
  {
    production: 'ObjectPropertyList',
    pop: 0,
    action: r37,
  },
  {
    production: 'ObjectProperty',
    pop: 3,
    action: r38,
  },
  {
    production: 'ObjectProperty',
    pop: 1,
    action: r39,
  },
  {
    production: 'ObjectProperty',
    pop: 3,
    action: r40,
  },
  {
    production: 'ObjectProperty',
    pop: 5,
    action: r41,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r42,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r43,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r44,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r45,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r46,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r47,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r48,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r49,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r50,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r51,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r52,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r53,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r54,
  },
  {
    production: 'StringValue',
    pop: 1,
    action: r55,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r56,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r57,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r58,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r59,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r60,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r61,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r62,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r63,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r64,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r65,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r66,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r67,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r68,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r69,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r70,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r71,
  },
  {
    production: 'StatementList',
    pop: 0,
    action: r72,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r73,
  },
  {
    production: 'ExpressionStatement',
    pop: 2,
    action: r74,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r75,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r76,
  },
  {
    production: 'WhileStatement',
    pop: 7,
    action: r77,
  },
];
const EOF = new Token('$', -1, -1, '');
export default function parseStatement(input) {
  const stack = [
    [
      null,
      0,
    ],
  ];
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
