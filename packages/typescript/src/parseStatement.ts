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
function r11($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r12(_$1, $2) {
  return $2;
}
function r13() {
  return {
    kind: 'Identifier',
    name: 'this',
  };
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
function r21($1) {
  return $1;
}
function r22($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r23($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r24($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r25($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r26($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r27($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r28($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r29(_$1, $2, _$3, $4) {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r30($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
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
function r34($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r35(_$1, $2) {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r36($1) {
  return [$1];
}
function r37($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r38() {
  return [];
}
function r39($1, _$2, $3) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r40($1) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r41($1, _$2, $3) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r42(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'ObjectProperty',
    key: $2,
    value: $5,
    computed: true,
    shorthand: false,
  };
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
function r47($1) {
  return $1;
}
function r48(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
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
function r52() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r53() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r54() {
  return {
    kind: 'NullValue',
  };
}
function r55($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r56($1) {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r57(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r58($1) {
  return $1;
}
function r59(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r60($1) {
  return [$1];
}
function r61($1, $2) {
  $1.push($2);
  return $1;
}
function r62() {
  return [];
}
function r63($1) {
  return $1;
}
function r64($1) {
  return $1;
}
function r65($1) {
  return $1;
}
function r66(_$1, $2, _$3, _$4, _$5, $6) {
  return {
    kind: 'GetAccessor',
    name: $2.name,
    body: $6,
  };
}
function r67($1, _$2, $3, _$4, _$5, $6) {
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
function r68($1) {
  return [$1];
}
function r69($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r70() {
  return [];
}
function r71($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r72($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r73($1) {
  return [$1];
}
function r74($1, $2) {
  $1.push($2);
  return $1;
}
function r75() {
  return [];
}
function r76($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r77($1) {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r78() {
  return {
    kind: 'ReturnStatement',
  };
}
function r79(_$1, $2) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r80(_$1, _$2, $3, _$4, _$5, $6) {
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
      state: 32,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 34,
    },
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
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
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 37,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    WHILE: {
      kind: 'Shift',
      state: 39,
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
    GET: {
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
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 43,
    },
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
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 53,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
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
    EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 13,
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
    COLON: {
      kind: 'Reduce',
      rule: 11,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 11,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 11,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 11,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 11,
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
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
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
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 61,
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
      kind: 'Reduce',
      rule: 21,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 21,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 21,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 21,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 21,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 21,
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
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 51,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 51,
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
    COLON: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 56,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 56,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 56,
    },
    DOT: {
      kind: 'Reduce',
      rule: 56,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 56,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 56,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 56,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 56,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 56,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 56,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 56,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 56,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 56,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 56,
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
    GET: {
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
    GET: {
      kind: 'Shift',
      state: 13,
    },
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
    GET: {
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
      state: 65,
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
    GET: {
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
    GET: {
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
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 66,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
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
    GET: {
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
      state: 68,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 69,
    },
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
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 70,
    },
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
    GET: {
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
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 33,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 33,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
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
    GET: {
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
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 81,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 14,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 82,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 83,
    },
    COMMA: {
      kind: 'Shift',
      state: 84,
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
    COLON: {
      kind: 'Shift',
      state: 85,
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
      state: 86,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 88,
    },
    COMMA: {
      kind: 'Shift',
      state: 89,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    OPENING_BRACE: {
      kind: 'Shift',
      state: 90,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 32,
    },
  },
  {
    $: {
      kind: 'Reduce',
      rule: 78,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 78,
    },
    CONST: {
      kind: 'Reduce',
      rule: 78,
    },
    LET: {
      kind: 'Reduce',
      rule: 78,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 78,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 78,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 78,
    },
    THIS: {
      kind: 'Reduce',
      rule: 78,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 78,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 78,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 78,
    },
    GET: {
      kind: 'Reduce',
      rule: 78,
    },
    NEW: {
      kind: 'Reduce',
      rule: 78,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 78,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 78,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 78,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 78,
    },
    NULL: {
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
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 93,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
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
    GET: {
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
    GET: {
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
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 23,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
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
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 95,
    },
    COMMA: {
      kind: 'Shift',
      state: 96,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 24,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 24,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
      state: 47,
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
      state: 46,
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
      state: 47,
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
      kind: 'Reduce',
      rule: 26,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 26,
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
      state: 47,
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
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
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
      rule: 28,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 28,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 28,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 28,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
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
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    CLOSING_PAREN: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 61,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 101,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 48,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 48,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 48,
    },
    DOT: {
      kind: 'Reduce',
      rule: 48,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 48,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 48,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 48,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 48,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 48,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 48,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 48,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 48,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 48,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 48,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 106,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 62,
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
    GET: {
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
    GET: {
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
    $: {
      kind: 'Reduce',
      rule: 79,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 79,
    },
    CONST: {
      kind: 'Reduce',
      rule: 79,
    },
    LET: {
      kind: 'Reduce',
      rule: 79,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 79,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 79,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 79,
    },
    THIS: {
      kind: 'Reduce',
      rule: 79,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 79,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 79,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 79,
    },
    GET: {
      kind: 'Reduce',
      rule: 79,
    },
    NEW: {
      kind: 'Reduce',
      rule: 79,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 79,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 79,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 79,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 79,
    },
    NULL: {
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
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 110,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    EQUALS: {
      kind: 'Reduce',
      rule: 30,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 30,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 112,
    },
    COMMA: {
      kind: 'Shift',
      state: 96,
    },
  },
  {
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
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    COLON: {
      kind: 'Shift',
      state: 113,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 114,
    },
    GET: {
      kind: 'Shift',
      state: 106,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 60,
    },
    GET: {
      kind: 'Reduce',
      rule: 60,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 60,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 63,
    },
    GET: {
      kind: 'Reduce',
      rule: 63,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 63,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 11,
    },
    COLON: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 64,
    },
    GET: {
      kind: 'Reduce',
      rule: 64,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 64,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 118,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 117,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 65,
    },
    GET: {
      kind: 'Reduce',
      rule: 65,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 65,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 119,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
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
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    NEW: {
      kind: 'Shift',
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
  },
  {
    $: {
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
    WHILE: {
      kind: 'Reduce',
      rule: 59,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 59,
    },
    GET: {
      kind: 'Reduce',
      rule: 59,
    },
    NEW: {
      kind: 'Reduce',
      rule: 59,
    },
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 59,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
    },
    GET: {
      kind: 'Reduce',
      rule: 61,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 61,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 121,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 70,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 70,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 32,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 34,
    },
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
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
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 37,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    WHILE: {
      kind: 'Shift',
      state: 39,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 75,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 44,
    },
    DOT: {
      kind: 'Shift',
      state: 47,
    },
    EQUALS: {
      kind: 'Shift',
      state: 51,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 45,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 48,
    },
    MINUS: {
      kind: 'Shift',
      state: 49,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 46,
    },
    PLUS: {
      kind: 'Shift',
      state: 50,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 52,
    },
    CLOSING_BRACE: {
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
      kind: 'Shift',
      state: 128,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 129,
    },
    COMMA: {
      kind: 'Shift',
      state: 130,
    },
  },
  {
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
    COLON: {
      kind: 'Shift',
      state: 131,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 71,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 71,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 132,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 32,
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
      state: 34,
    },
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
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
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 37,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    WHILE: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 73,
    },
    CONST: {
      kind: 'Reduce',
      rule: 73,
    },
    LET: {
      kind: 'Reduce',
      rule: 73,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 73,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 73,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 73,
    },
    THIS: {
      kind: 'Reduce',
      rule: 73,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 73,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 73,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 73,
    },
    GET: {
      kind: 'Reduce',
      rule: 73,
    },
    NEW: {
      kind: 'Reduce',
      rule: 73,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 73,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 73,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 73,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 73,
    },
    NULL: {
      kind: 'Reduce',
      rule: 73,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 73,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 73,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 135,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 136,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 13,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 12,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 76,
    },
    GET: {
      kind: 'Reduce',
      rule: 76,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 76,
    },
  },
  {
    $: {
      kind: 'Reduce',
      rule: 80,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 80,
    },
    CONST: {
      kind: 'Reduce',
      rule: 80,
    },
    LET: {
      kind: 'Reduce',
      rule: 80,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 80,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 80,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 80,
    },
    THIS: {
      kind: 'Reduce',
      rule: 80,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 80,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 80,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 80,
    },
    GET: {
      kind: 'Reduce',
      rule: 80,
    },
    NEW: {
      kind: 'Reduce',
      rule: 80,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 80,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 80,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 80,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 80,
    },
    NULL: {
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
  },
  {
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
    GET: {
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
    CLASS: {
      kind: 'Shift',
      state: 32,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 34,
    },
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
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
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 37,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    WHILE: {
      kind: 'Shift',
      state: 39,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 75,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 32,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 34,
    },
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
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
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 37,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    WHILE: {
      kind: 'Shift',
      state: 39,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 75,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 72,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 72,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 32,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 141,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 34,
    },
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
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
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 37,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    WHILE: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 32,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 142,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 34,
    },
    FALSE: {
      kind: 'Shift',
      state: 23,
    },
    GET: {
      kind: 'Shift',
      state: 13,
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
      state: 16,
    },
    NULL: {
      kind: 'Shift',
      state: 26,
    },
    NUMBER: {
      kind: 'Shift',
      state: 28,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 18,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 21,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 7,
    },
    RETURN: {
      kind: 'Shift',
      state: 37,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 30,
    },
    THIS: {
      kind: 'Shift',
      state: 8,
    },
    TRUE: {
      kind: 'Shift',
      state: 24,
    },
    WHILE: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 66,
    },
    GET: {
      kind: 'Reduce',
      rule: 66,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 66,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 67,
    },
    GET: {
      kind: 'Reduce',
      rule: 67,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 67,
    },
  },
];
const gotos = [
  {
    ArrayValue: 20,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    ClassDeclaration: 31,
    ExportDefaultDeclaration: 33,
    Expression: 6,
    ExpressionStatement: 35,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    ReturnStatement: 36,
    Statement: 1,
    StringValue: 29,
    WhileStatement: 38,
  },
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 40,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 41,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 42,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 41,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 54,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
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
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 56,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {
    Identifier: 59,
    NumberValue: 60,
    ObjectProperty: 58,
    ObjectPropertyList: 57,
  },
  {},
  {},
  {
    ArrayItemList: 62,
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 63,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
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
    Identifier: 64,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 67,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 71,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 72,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 74,
    ExpressionList: 73,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    Identifier: 75,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 76,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 77,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 78,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 79,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 80,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
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
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 87,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {},
  {},
  {
    ClassDeclaration: 92,
    Declaration: 91,
  },
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 94,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
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
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 74,
    ExpressionList: 97,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {
    Identifier: 59,
    NumberValue: 60,
    ObjectProperty: 98,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 99,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 100,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 102,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {
    ClassBodyList: 103,
    ClassBodyListItem: 104,
    GetAccessor: 105,
    Identifier: 108,
    MethodDefinition: 107,
    PropertyDeclaration: 109,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 111,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassBodyListItem: 115,
    GetAccessor: 105,
    Identifier: 108,
    MethodDefinition: 107,
    PropertyDeclaration: 109,
  },
  {},
  {},
  {
    Identifier: 116,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 55,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    Expression: 120,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    StringValue: 29,
  },
  {},
  {},
  {},
  {
    Argument: 123,
    ArgumentList: 122,
    Identifier: 124,
  },
  {
    Identifier: 125,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    ClassDeclaration: 31,
    ExportDefaultDeclaration: 33,
    Expression: 6,
    ExpressionStatement: 35,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    ReturnStatement: 36,
    Statement: 127,
    StatementList: 126,
    StringValue: 29,
    WhileStatement: 38,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    ClassDeclaration: 31,
    ExportDefaultDeclaration: 33,
    Expression: 6,
    ExpressionStatement: 35,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    ReturnStatement: 36,
    Statement: 134,
    StringValue: 29,
    WhileStatement: 38,
  },
  {},
  {},
  {},
  {
    Argument: 137,
    Identifier: 124,
  },
  {
    Identifier: 138,
  },
  {},
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    ClassDeclaration: 31,
    ExportDefaultDeclaration: 33,
    Expression: 6,
    ExpressionStatement: 35,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    ReturnStatement: 36,
    Statement: 127,
    StatementList: 139,
    StringValue: 29,
    WhileStatement: 38,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    ClassDeclaration: 31,
    ExportDefaultDeclaration: 33,
    Expression: 6,
    ExpressionStatement: 35,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    ReturnStatement: 36,
    Statement: 127,
    StatementList: 140,
    StringValue: 29,
    WhileStatement: 38,
  },
  {},
  {},
  {
    ArrayValue: 20,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    ClassDeclaration: 31,
    ExportDefaultDeclaration: 33,
    Expression: 6,
    ExpressionStatement: 35,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    ReturnStatement: 36,
    Statement: 134,
    StringValue: 29,
    WhileStatement: 38,
  },
  {
    ArrayValue: 20,
    AssignmentExpression: 5,
    AssignmentStatement: 2,
    BinaryExpression: 9,
    BooleanValue: 22,
    CallExpression: 10,
    ClassDeclaration: 31,
    ExportDefaultDeclaration: 33,
    Expression: 6,
    ExpressionStatement: 35,
    Identifier: 11,
    MemberExpression: 14,
    NewExpression: 15,
    NullValue: 25,
    NumberValue: 27,
    ObjectValue: 17,
    PrimitiveValue: 19,
    ReturnStatement: 36,
    Statement: 134,
    StringValue: 29,
    WhileStatement: 38,
  },
  {},
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
    production: 'Identifier',
    pop: 1,
    action: r11,
  },
  {
    production: 'Expression',
    pop: 3,
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
    production: 'Expression',
    pop: 1,
    action: r21,
  },
  {
    production: 'AssignmentExpression',
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
    production: 'BinaryExpression',
    pop: 3,
    action: r28,
  },
  {
    production: 'NewExpression',
    pop: 5,
    action: r29,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r30,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r31,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r32,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r33,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r34,
  },
  {
    production: 'ObjectValue',
    pop: 3,
    action: r35,
  },
  {
    production: 'ObjectPropertyList',
    pop: 1,
    action: r36,
  },
  {
    production: 'ObjectPropertyList',
    pop: 3,
    action: r37,
  },
  {
    production: 'ObjectPropertyList',
    pop: 0,
    action: r38,
  },
  {
    production: 'ObjectProperty',
    pop: 3,
    action: r39,
  },
  {
    production: 'ObjectProperty',
    pop: 1,
    action: r40,
  },
  {
    production: 'ObjectProperty',
    pop: 3,
    action: r41,
  },
  {
    production: 'ObjectProperty',
    pop: 5,
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
    production: 'PrimitiveValue',
    pop: 1,
    action: r47,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r48,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r49,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r50,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r51,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r52,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r53,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r54,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r55,
  },
  {
    production: 'StringValue',
    pop: 1,
    action: r56,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r57,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r58,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r59,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r60,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r61,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r62,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r63,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r64,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r65,
  },
  {
    production: 'GetAccessor',
    pop: 7,
    action: r66,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r67,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r68,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r69,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r70,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r71,
  },
  {
    production: 'Argument',
    pop: 3,
    action: r72,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r73,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r74,
  },
  {
    production: 'StatementList',
    pop: 0,
    action: r75,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r76,
  },
  {
    production: 'ExpressionStatement',
    pop: 2,
    action: r77,
  },
  {
    production: 'ReturnStatement',
    pop: 2,
    action: r78,
  },
  {
    production: 'ReturnStatement',
    pop: 3,
    action: r79,
  },
  {
    production: 'WhileStatement',
    pop: 7,
    action: r80,
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
