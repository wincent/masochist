// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make typescript" instead
 *
 * @generated
 */
import {Lexer, Token} from './lex';
function r0() {
  /* dummy placeholder */
}
function r1($1) {
  return [$1];
}
function r2($1, $2) {
  $1.push($2);
  return $1;
}
function r3() {
  return [];
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
function r7($1) {
  return $1;
}
function r8($1) {
  return $1;
}
function r9($1) {
  return $1;
}
function r10(_$1, $2) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r11(_$1, $2) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r12($1) {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1.lhs,
    rhs: $1.rhs,
  };
}
function r13($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r14($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r15(_$1, $2) {
  return $2;
}
function r16() {
  return {
    kind: 'Identifier',
    name: 'this',
  };
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
function r22($1) {
  return $1;
}
function r23($1) {
  return $1;
}
function r24($1) {
  return $1;
}
function r25($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r26($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r27($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r28($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r29($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r30($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r31($1, _$2, $3) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r32(_$1, $2, _$3, $4) {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r33($1, _$2, $3) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r34($1) {
  return [$1];
}
function r35($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r36() {
  return [];
}
function r37($1, _$2, $3) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r38(_$1, $2) {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r39($1) {
  return [$1];
}
function r40($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r41() {
  return [];
}
function r42($1, _$2, $3) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r43($1) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r44($1, _$2, $3) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r45(_$1, $2, _$3, _$4, $5) {
  return {
    kind: 'ObjectProperty',
    key: $2,
    value: $5,
    computed: true,
    shorthand: false,
  };
}
function r46($1) {
  return $1;
}
function r47($1) {
  return $1;
}
function r48($1) {
  return $1;
}
function r49($1) {
  return $1;
}
function r50($1) {
  return $1;
}
function r51(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r52($1) {
  return [$1];
}
function r53($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r54() {
  return [];
}
function r55() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r56() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r57() {
  return {
    kind: 'NullValue',
  };
}
function r58($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r59($1) {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r60(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r61($1) {
  return $1;
}
function r62(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r63($1) {
  return [$1];
}
function r64($1, $2) {
  $1.push($2);
  return $1;
}
function r65() {
  return [];
}
function r66($1) {
  return $1;
}
function r67($1) {
  return $1;
}
function r68($1) {
  return $1;
}
function r69(_$1, $2, _$3, _$4, _$5, $6) {
  return {
    kind: 'GetAccessor',
    name: $2.name,
    body: $6,
  };
}
function r70($1, _$2, $3, _$4, _$5, $6) {
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
function r71($1) {
  return [$1];
}
function r72($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r73() {
  return [];
}
function r74($1) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r75($1, _$2, $3) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
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
      state: 33,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
    },
    $: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    $: {
      kind: 'Accept',
    },
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 1,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 4,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 45,
    },
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
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 55,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
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
    COLON: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 13,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 13,
    },
    OPENING_BRACE: {
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
    COLON: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 14,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 14,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 14,
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
      rule: 22,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 22,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 22,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 22,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 22,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 22,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 23,
    },
    LOGICAL_AND: {
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
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 23,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 23,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 23,
    },
    EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 23,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 63,
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
    EQUALS: {
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
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 54,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 54,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 57,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 57,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 57,
    },
    DOT: {
      kind: 'Reduce',
      rule: 57,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 57,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 57,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 57,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 57,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 57,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 57,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 57,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 57,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 57,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 57,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 49,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 49,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 49,
    },
    DOT: {
      kind: 'Reduce',
      rule: 49,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 49,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 49,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 49,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 49,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 49,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 49,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 49,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 49,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 49,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 49,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 58,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 58,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 58,
    },
    DOT: {
      kind: 'Reduce',
      rule: 58,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 58,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 58,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 58,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 58,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 58,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 58,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 58,
    },
    COLON: {
      kind: 'Reduce',
      rule: 58,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 58,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 58,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 50,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 50,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 50,
    },
    DOT: {
      kind: 'Reduce',
      rule: 50,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 50,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 50,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 50,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 50,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 50,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 50,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 50,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 50,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 50,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 50,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 59,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 59,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 59,
    },
    DOT: {
      kind: 'Reduce',
      rule: 59,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 59,
    },
    MINUS: {
      kind: 'Reduce',
      rule: 59,
    },
    PLUS: {
      kind: 'Reduce',
      rule: 59,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 59,
    },
    STRICT_EQUALS: {
      kind: 'Reduce',
      rule: 59,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 59,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 59,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 59,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 59,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 59,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 5,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 6,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    DEFAULT: {
      kind: 'Shift',
      state: 67,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 7,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 8,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 68,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 9,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 9,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 70,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 2,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 71,
    },
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
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 72,
    },
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
  },
  {
    CONST: {
      kind: 'Reduce',
      rule: 12,
    },
    LET: {
      kind: 'Reduce',
      rule: 12,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 12,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 12,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 12,
    },
    THIS: {
      kind: 'Reduce',
      rule: 12,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 12,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 12,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 12,
    },
    GET: {
      kind: 'Reduce',
      rule: 12,
    },
    NEW: {
      kind: 'Reduce',
      rule: 12,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 12,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 12,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 12,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 12,
    },
    NULL: {
      kind: 'Reduce',
      rule: 12,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 12,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 12,
    },
    $: {
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
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
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
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 77,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 77,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 83,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 17,
    },
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 17,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 84,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 85,
    },
    COMMA: {
      kind: 'Shift',
      state: 86,
    },
  },
  {
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
      state: 87,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 43,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 88,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 90,
    },
    COMMA: {
      kind: 'Shift',
      state: 91,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 52,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 52,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 92,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 78,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 78,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    SEMICOLON: {
      kind: 'Shift',
      state: 95,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    CONST: {
      kind: 'Reduce',
      rule: 10,
    },
    LET: {
      kind: 'Reduce',
      rule: 10,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 10,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 10,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 10,
    },
    THIS: {
      kind: 'Reduce',
      rule: 10,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 10,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 10,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 10,
    },
    GET: {
      kind: 'Reduce',
      rule: 10,
    },
    NEW: {
      kind: 'Reduce',
      rule: 10,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 10,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 10,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 10,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 10,
    },
    NULL: {
      kind: 'Reduce',
      rule: 10,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 10,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 10,
    },
    $: {
      kind: 'Reduce',
      rule: 10,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 10,
    },
  },
  {
    CONST: {
      kind: 'Reduce',
      rule: 11,
    },
    LET: {
      kind: 'Reduce',
      rule: 11,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 11,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 11,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 11,
    },
    THIS: {
      kind: 'Reduce',
      rule: 11,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 11,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 11,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 11,
    },
    GET: {
      kind: 'Reduce',
      rule: 11,
    },
    NEW: {
      kind: 'Reduce',
      rule: 11,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 11,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 11,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 11,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 11,
    },
    NULL: {
      kind: 'Reduce',
      rule: 11,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 11,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 11,
    },
    $: {
      kind: 'Reduce',
      rule: 11,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
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
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
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
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
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
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 97,
    },
    COMMA: {
      kind: 'Shift',
      state: 98,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 37,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 27,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 27,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
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
      state: 49,
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
      kind: 'Reduce',
      rule: 28,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 29,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 29,
    },
    LOGICAL_AND: {
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
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 30,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 30,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 30,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 30,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
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
    ASSIGN: {
      kind: 'Reduce',
      rule: 31,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 31,
    },
    LOGICAL_AND: {
      kind: 'Reduce',
      rule: 31,
    },
    LOGICAL_OR: {
      kind: 'Reduce',
      rule: 31,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 31,
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
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
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
    EQUALS: {
      kind: 'Reduce',
      rule: 38,
    },
    STRICT_EQUALS: {
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 38,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 63,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 103,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
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
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 108,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 65,
    },
  },
  {
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
    GET: {
      kind: 'Reduce',
      rule: 60,
    },
    NEW: {
      kind: 'Reduce',
      rule: 60,
    },
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 60,
    },
    $: {
      kind: 'Reduce',
      rule: 60,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 60,
    },
  },
  {
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
    WHILE: {
      kind: 'Reduce',
      rule: 61,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 61,
    },
    GET: {
      kind: 'Reduce',
      rule: 61,
    },
    NEW: {
      kind: 'Reduce',
      rule: 61,
    },
    OPENING_BRACE: {
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
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 61,
    },
    $: {
      kind: 'Reduce',
      rule: 61,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
    },
  },
  {
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
    $: {
      kind: 'Reduce',
      rule: 79,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 79,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 112,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
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
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 114,
    },
    COMMA: {
      kind: 'Shift',
      state: 98,
    },
  },
  {
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
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
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
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 44,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 44,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 115,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 53,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 53,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 116,
    },
    GET: {
      kind: 'Shift',
      state: 108,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
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
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
    COLON: {
      kind: 'Reduce',
      rule: 14,
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
  {
    COLON: {
      kind: 'Shift',
      state: 120,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 119,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    GET: {
      kind: 'Reduce',
      rule: 68,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 121,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
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
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 32,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
  },
  {
    CONST: {
      kind: 'Reduce',
      rule: 62,
    },
    LET: {
      kind: 'Reduce',
      rule: 62,
    },
    CLASS: {
      kind: 'Reduce',
      rule: 62,
    },
    EXPORT: {
      kind: 'Reduce',
      rule: 62,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 62,
    },
    THIS: {
      kind: 'Reduce',
      rule: 62,
    },
    RETURN: {
      kind: 'Reduce',
      rule: 62,
    },
    WHILE: {
      kind: 'Reduce',
      rule: 62,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 62,
    },
    GET: {
      kind: 'Reduce',
      rule: 62,
    },
    NEW: {
      kind: 'Reduce',
      rule: 62,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 62,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 62,
    },
    FALSE: {
      kind: 'Reduce',
      rule: 62,
    },
    TRUE: {
      kind: 'Reduce',
      rule: 62,
    },
    NULL: {
      kind: 'Reduce',
      rule: 62,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 62,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 62,
    },
    $: {
      kind: 'Reduce',
      rule: 62,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 62,
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
    OPENING_PAREN: {
      kind: 'Shift',
      state: 123,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 73,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 73,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 46,
    },
    DOT: {
      kind: 'Shift',
      state: 49,
    },
    EQUALS: {
      kind: 'Shift',
      state: 53,
    },
    LOGICAL_AND: {
      kind: 'Shift',
      state: 47,
    },
    LOGICAL_OR: {
      kind: 'Shift',
      state: 50,
    },
    MINUS: {
      kind: 'Shift',
      state: 51,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 48,
    },
    PLUS: {
      kind: 'Shift',
      state: 52,
    },
    STRICT_EQUALS: {
      kind: 'Shift',
      state: 54,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 45,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 45,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 129,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 130,
    },
    COMMA: {
      kind: 'Shift',
      state: 131,
    },
  },
  {
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
    COLON: {
      kind: 'Shift',
      state: 132,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 74,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 74,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 133,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 134,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
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
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
  },
  {
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
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
    $: {
      kind: 'Reduce',
      rule: 80,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 80,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 3,
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
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 75,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 75,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 141,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 33,
    },
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 142,
    },
    CONST: {
      kind: 'Shift',
      state: 4,
    },
    EXPORT: {
      kind: 'Shift',
      state: 35,
    },
    FALSE: {
      kind: 'Shift',
      state: 24,
    },
    GET: {
      kind: 'Shift',
      state: 14,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 13,
    },
    LET: {
      kind: 'Shift',
      state: 5,
    },
    NEW: {
      kind: 'Shift',
      state: 17,
    },
    NULL: {
      kind: 'Shift',
      state: 27,
    },
    NUMBER: {
      kind: 'Shift',
      state: 29,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 19,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 22,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 8,
    },
    RETURN: {
      kind: 'Shift',
      state: 38,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 31,
    },
    THIS: {
      kind: 'Shift',
      state: 9,
    },
    TRUE: {
      kind: 'Shift',
      state: 25,
    },
    WHILE: {
      kind: 'Shift',
      state: 40,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 69,
    },
    GET: {
      kind: 'Reduce',
      rule: 69,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 69,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 70,
    },
    GET: {
      kind: 'Reduce',
      rule: 70,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 70,
    },
  },
];
const gotos = [
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 2,
    StatementList: 1,
    StringValue: 30,
    WhileStatement: 39,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 41,
    StringValue: 30,
    WhileStatement: 39,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 42,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 43,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 44,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 43,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 56,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
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
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 58,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {
    Identifier: 61,
    NumberValue: 62,
    ObjectProperty: 60,
    ObjectPropertyList: 59,
  },
  {},
  {},
  {
    ArrayItemList: 64,
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 65,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
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
    Identifier: 66,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 69,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 73,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 74,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 76,
    ExpressionList: 75,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    Identifier: 77,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 78,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 79,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 80,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 81,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 82,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
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
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 89,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {},
  {},
  {
    ClassDeclaration: 94,
    Declaration: 93,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 96,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
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
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 76,
    ExpressionList: 99,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {
    Identifier: 61,
    NumberValue: 62,
    ObjectProperty: 100,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 101,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 102,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 104,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {
    ClassBodyList: 105,
    ClassBodyListItem: 106,
    GetAccessor: 107,
    Identifier: 110,
    MethodDefinition: 109,
    PropertyDeclaration: 111,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 113,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassBodyListItem: 117,
    GetAccessor: 107,
    Identifier: 110,
    MethodDefinition: 109,
    PropertyDeclaration: 111,
  },
  {},
  {},
  {
    Identifier: 118,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 122,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    StringValue: 30,
  },
  {},
  {},
  {},
  {
    Argument: 125,
    ArgumentList: 124,
    Identifier: 126,
  },
  {
    Identifier: 127,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 2,
    StatementList: 128,
    StringValue: 30,
    WhileStatement: 39,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 41,
    StringValue: 30,
    WhileStatement: 39,
  },
  {},
  {},
  {
    Argument: 137,
    Identifier: 126,
  },
  {
    Identifier: 138,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 2,
    StatementList: 139,
    StringValue: 30,
    WhileStatement: 39,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 2,
    StatementList: 140,
    StringValue: 30,
    WhileStatement: 39,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 41,
    StringValue: 30,
    WhileStatement: 39,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    ClassDeclaration: 32,
    ExportDefaultDeclaration: 34,
    Expression: 7,
    ExpressionStatement: 36,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    ReturnStatement: 37,
    Statement: 41,
    StringValue: 30,
    WhileStatement: 39,
  },
  {},
  {},
];
const rules = [
  {
    production: "StatementList'",
    pop: 1,
    action: r0,
  },
  {
    production: 'StatementList',
    pop: 1,
    action: r1,
  },
  {
    production: 'StatementList',
    pop: 2,
    action: r2,
  },
  {
    production: 'StatementList',
    pop: 0,
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
    production: 'Statement',
    pop: 1,
    action: r7,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r8,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r9,
  },
  {
    production: 'AssignmentStatement',
    pop: 3,
    action: r10,
  },
  {
    production: 'AssignmentStatement',
    pop: 3,
    action: r11,
  },
  {
    production: 'AssignmentStatement',
    pop: 2,
    action: r12,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r13,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r14,
  },
  {
    production: 'Expression',
    pop: 3,
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
    production: 'Expression',
    pop: 1,
    action: r22,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r23,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r24,
  },
  {
    production: 'AssignmentExpression',
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
    production: 'BinaryExpression',
    pop: 3,
    action: r29,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r30,
  },
  {
    production: 'BinaryExpression',
    pop: 3,
    action: r31,
  },
  {
    production: 'NewExpression',
    pop: 5,
    action: r32,
  },
  {
    production: 'CallExpression',
    pop: 4,
    action: r33,
  },
  {
    production: 'ExpressionList',
    pop: 1,
    action: r34,
  },
  {
    production: 'ExpressionList',
    pop: 3,
    action: r35,
  },
  {
    production: 'ExpressionList',
    pop: 0,
    action: r36,
  },
  {
    production: 'MemberExpression',
    pop: 3,
    action: r37,
  },
  {
    production: 'ObjectValue',
    pop: 3,
    action: r38,
  },
  {
    production: 'ObjectPropertyList',
    pop: 1,
    action: r39,
  },
  {
    production: 'ObjectPropertyList',
    pop: 3,
    action: r40,
  },
  {
    production: 'ObjectPropertyList',
    pop: 0,
    action: r41,
  },
  {
    production: 'ObjectProperty',
    pop: 3,
    action: r42,
  },
  {
    production: 'ObjectProperty',
    pop: 1,
    action: r43,
  },
  {
    production: 'ObjectProperty',
    pop: 3,
    action: r44,
  },
  {
    production: 'ObjectProperty',
    pop: 5,
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
    production: 'PrimitiveValue',
    pop: 1,
    action: r48,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r49,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r50,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r51,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r52,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r53,
  },
  {
    production: 'ArrayItemList',
    pop: 0,
    action: r54,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r55,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r56,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r57,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r58,
  },
  {
    production: 'StringValue',
    pop: 1,
    action: r59,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r60,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r61,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r62,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r63,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r64,
  },
  {
    production: 'ClassBodyList',
    pop: 0,
    action: r65,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r66,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r67,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r68,
  },
  {
    production: 'GetAccessor',
    pop: 7,
    action: r69,
  },
  {
    production: 'MethodDefinition',
    pop: 7,
    action: r70,
  },
  {
    production: 'ArgumentList',
    pop: 1,
    action: r71,
  },
  {
    production: 'ArgumentList',
    pop: 3,
    action: r72,
  },
  {
    production: 'ArgumentList',
    pop: 0,
    action: r73,
  },
  {
    production: 'Argument',
    pop: 1,
    action: r74,
  },
  {
    production: 'Argument',
    pop: 3,
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
      // TODO: maybe show stack here?
      throw new Error('syntax error at symbol ' + token.name);
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
      stack.push([code(...popped), target]);
    }
  }
}
