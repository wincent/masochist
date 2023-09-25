// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make typescript" instead
 *
 * @generated
 */
import {Lexer, Token} from './lex';

import type {
  Argument,
  ArrayValue,
  AssignmentStatement,
  BinaryExpression,
  BooleanValue,
  CallExpression,
  ClassDeclaration,
  Declaration,
  ExportDefaultDeclaration,
  Expression,
  ExpressionStatement,
  GetAccessor,
  Identifier,
  MemberExpression,
  MethodDefinition,
  NewExpression,
  NullValue,
  NumberValue,
  ObjectProperty,
  ObjectValue,
  PrimitiveValue,
  PropertyDeclaration,
  ReturnStatement,
  Statement,
  StringValue,
  WhileStatement,
} from '@masochist/codegen';
// TODO: beware self-import (in codegen, because we copy built
// parseStatement.ts to codegen package)

// Intermediate/local types.
type ArgumentList = Array<Argument>;
type AssignmentExpression = {
  kind: 'BinaryExpression';
  lhs: Expression;
  operator: '=';
  rhs: Expression;
};
type ClassBodyList = Array<ClassBodyListItem>;
type ClassBodyListItem =
  | GetAccessor
  | MethodDefinition
  | PropertyDeclaration;
type ExpressionList = Array<Expression>;
type ObjectPropertyList = Array<ObjectProperty>;
type StatementList = Array<Statement>;

function r0() {
  /* dummy placeholder */
}
function r1($1: Statement) {
  return [$1];
}
function r2($1: StatementList, $2: Statement) {
  $1.push($2);
  return $1;
}
function r3() {
  return [];
}
function r4($1: AssignmentStatement) {
  return $1;
}
function r5($1: ClassDeclaration) {
  return $1;
}
function r6($1: ExportDefaultDeclaration) {
  return $1;
}
function r7($1: ExpressionStatement) {
  return $1;
}
function r8($1: ReturnStatement) {
  return $1;
}
function r9($1: WhileStatement) {
  return $1;
}
function r10(_$1: Token, $2: AssignmentExpression) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r11(_$1: Token, $2: AssignmentExpression) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2.lhs,
    rhs: $2.rhs,
  };
}
function r12($1: AssignmentExpression) {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1.lhs,
    rhs: $1.rhs,
  };
}
function r13($1: Token) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r14($1: Token) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r15(_$1: Token, $2: Expression) {
  return $2;
}
function r16() {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r17($1: AssignmentExpression) {
  return $1;
}
function r18($1: BinaryExpression) {
  return $1;
}
function r19($1: CallExpression) {
  return $1;
}
function r20($1: Identifier) {
  return $1;
}
function r21($1: MemberExpression) {
  return $1;
}
function r22($1: NewExpression) {
  return $1;
}
function r23($1: ObjectValue) {
  return $1;
}
function r24($1: PrimitiveValue) {
  return $1;
}
function r25($1: Expression, _$2: Token, $3: Expression) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r26($1: Expression, _$2: Token, $3: Expression) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r27($1: Expression, _$2: Token, $3: Expression) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r28($1: Expression, _$2: Token, $3: Expression) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r29($1: Expression, _$2: Token, $3: Expression) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r30($1: Expression, _$2: Token, $3: Expression) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r31($1: Expression, _$2: Token, $3: Expression) {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r32(_$1: Token, $2: Expression, _$3: Token, $4: ExpressionList) {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r33($1: Expression, _$2: Token, $3: ExpressionList) {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r34($1: Expression) {
  return [$1];
}
function r35($1: ExpressionList, _$2: Token, $3: Expression) {
  $1.push($3);
  return $1;
}
function r36() {
  return [];
}
function r37($1: Expression, _$2: Token, $3: Identifier) {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r38(_$1: Token, $2: ObjectPropertyList) {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r39($1: ObjectProperty) {
  return [$1];
}
function r40($1: ObjectPropertyList, _$2: Token, $3: ObjectProperty) {
  $1.push($3);
  return $1;
}
function r41() {
  return [];
}
function r42($1: Identifier, _$2: Token, $3: Expression) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r43($1: Identifier) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r44($1: NumberValue, _$2: Token, $3: Expression) {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r45(
  _$1: Token,
  $2: Expression,
  _$3: Token,
  _$4: Token,
  $5: Expression,
) {
  return {
    kind: 'ObjectProperty',
    key: $2,
    value: $5,
    computed: true,
    shorthand: false,
  };
}
function r46($1: ArrayValue) {
  return $1;
}
function r47($1: BooleanValue) {
  return $1;
}
function r48($1: NullValue) {
  return $1;
}
function r49($1: NumberValue) {
  return $1;
}
function r50($1: StringValue) {
  return $1;
}
function r51(_$1: Token, $2: ExpressionList) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
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
function r55($1: Token) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r56($1: Token) {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r57(_$1: Token, _$2: Token, $3: Declaration) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r58($1: ClassDeclaration) {
  return $1;
}
function r59(_$1: Token, $2: Identifier, _$3: Token, $4: ClassBodyList) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r60($1: ClassBodyListItem) {
  return [$1];
}
function r61($1: ClassBodyList, $2: ClassBodyListItem) {
  $1.push($2);
  return $1;
}
function r62() {
  return [];
}
function r63($1: GetAccessor) {
  return $1;
}
function r64($1: MethodDefinition) {
  return $1;
}
function r65($1: PropertyDeclaration) {
  return $1;
}
function r66(
  _$1: Token,
  $2: Identifier,
  _$3: Token,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
) {
  return {
    kind: 'GetAccessor',
    name: $2.name,
    body: $6,
  };
}
function r67(
  $1: Identifier,
  _$2: Token,
  $3: ArgumentList,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
) {
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
function r68($1: Argument) {
  return [$1];
}
function r69($1: ArgumentList, _$2: Token, $3: Argument) {
  $1.push($3);
  return $1;
}
function r70() {
  return [];
}
function r71($1: Identifier) {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r72($1: Identifier, _$2: Token, $3: Identifier) {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r73($1: Identifier, _$2: Token, $3: Identifier) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r74($1: Expression) {
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
function r76(_$1: Token, $2: Expression) {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r77(
  _$1: Token,
  _$2: Token,
  $3: Expression,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
) {
  return {
    kind: 'WhileStatement',
    condition: $3,
    block: $6,
  };
}
const actions = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
    rule: 36,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 36,
  },
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
}, {
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
}, {
  DEFAULT: {
    kind: 'Shift',
    state: 67,
  },
}, {
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
}, {
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
}, {
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
}, {
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
}, {
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
  $: {
    kind: 'Reduce',
    rule: 74,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 74,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 46,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 82,
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
}, {
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
}, {
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
    state: 83,
  },
  PLUS: {
    kind: 'Shift',
    state: 52,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 54,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 84,
  },
  COMMA: {
    kind: 'Shift',
    state: 85,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 39,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 39,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 86,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 43,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 43,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 87,
  },
}, {
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
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 89,
  },
  COMMA: {
    kind: 'Shift',
    state: 90,
  },
}, {
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
    rule: 34,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 34,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 34,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 91,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
}, {
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
  GET: {
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
  $: {
    kind: 'Reduce',
    rule: 75,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 75,
  },
}, {
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
    state: 94,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 54,
  },
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 96,
  },
  COMMA: {
    kind: 'Shift',
    state: 90,
  },
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 46,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 101,
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
}, {
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
}, {
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
}, {
  GET: {
    kind: 'Shift',
    state: 106,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 62,
  },
}, {
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
  $: {
    kind: 'Reduce',
    rule: 57,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 57,
  },
}, {
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
  $: {
    kind: 'Reduce',
    rule: 58,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 58,
  },
}, {
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
  GET: {
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
  $: {
    kind: 'Reduce',
    rule: 76,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 76,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 46,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 110,
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
}, {
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
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 111,
  },
  COMMA: {
    kind: 'Shift',
    state: 90,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 40,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 40,
  },
}, {
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
}, {
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
}, {
  COLON: {
    kind: 'Shift',
    state: 112,
  },
}, {
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
    rule: 35,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 35,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 35,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 113,
  },
  GET: {
    kind: 'Shift',
    state: 106,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
}, {
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
}, {
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
}, {
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
}, {
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
}, {
  COLON: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 116,
  },
}, {
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
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 118,
  },
}, {
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
}, {
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
}, {
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
  $: {
    kind: 'Reduce',
    rule: 59,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 59,
  },
}, {
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
}, {
  OPENING_PAREN: {
    kind: 'Shift',
    state: 120,
  },
}, {
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
    rule: 70,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 70,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
}, {
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
}, {
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
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 126,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 127,
  },
  COMMA: {
    kind: 'Shift',
    state: 128,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 68,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 68,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 129,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 71,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 71,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 130,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 131,
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
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 132,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 133,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 73,
  },
  GET: {
    kind: 'Reduce',
    rule: 73,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 73,
  },
}, {
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
}, {
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
}, {
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
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 69,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 69,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 72,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 72,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 138,
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
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 139,
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
}, {
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
}, {
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
}];
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
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 65,
    ExpressionList: 64,
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
    Expression: 65,
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
    Identifier: 76,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 77,
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
    Expression: 88,
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
    ClassDeclaration: 93,
    Declaration: 92,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 95,
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
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 65,
    ExpressionList: 97,
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
    ObjectProperty: 98,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 57,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 99,
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
    Expression: 100,
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
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassBodyListItem: 114,
    GetAccessor: 105,
    Identifier: 108,
    MethodDefinition: 107,
    PropertyDeclaration: 109,
  },
  {},
  {},
  {
    Identifier: 115,
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
    Expression: 119,
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
    Argument: 122,
    ArgumentList: 121,
    Identifier: 123,
  },
  {
    Identifier: 124,
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
    StatementList: 125,
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
    Argument: 134,
    Identifier: 123,
  },
  {
    Identifier: 135,
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
    StatementList: 136,
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
    StatementList: 137,
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
const rules = [{
  production: "StatementList'",
  pop: 1,
  action: r0,
}, {
  production: 'StatementList',
  pop: 1,
  action: r1,
}, {
  production: 'StatementList',
  pop: 2,
  action: r2,
}, {
  production: 'StatementList',
  pop: 0,
  action: r3,
}, {
  production: 'Statement',
  pop: 1,
  action: r4,
}, {
  production: 'Statement',
  pop: 1,
  action: r5,
}, {
  production: 'Statement',
  pop: 1,
  action: r6,
}, {
  production: 'Statement',
  pop: 1,
  action: r7,
}, {
  production: 'Statement',
  pop: 1,
  action: r8,
}, {
  production: 'Statement',
  pop: 1,
  action: r9,
}, {
  production: 'AssignmentStatement',
  pop: 3,
  action: r10,
}, {
  production: 'AssignmentStatement',
  pop: 3,
  action: r11,
}, {
  production: 'AssignmentStatement',
  pop: 2,
  action: r12,
}, {
  production: 'Identifier',
  pop: 1,
  action: r13,
}, {
  production: 'Identifier',
  pop: 1,
  action: r14,
}, {
  production: 'Expression',
  pop: 3,
  action: r15,
}, {
  production: 'Expression',
  pop: 1,
  action: r16,
}, {
  production: 'Expression',
  pop: 1,
  action: r17,
}, {
  production: 'Expression',
  pop: 1,
  action: r18,
}, {
  production: 'Expression',
  pop: 1,
  action: r19,
}, {
  production: 'Expression',
  pop: 1,
  action: r20,
}, {
  production: 'Expression',
  pop: 1,
  action: r21,
}, {
  production: 'Expression',
  pop: 1,
  action: r22,
}, {
  production: 'Expression',
  pop: 1,
  action: r23,
}, {
  production: 'Expression',
  pop: 1,
  action: r24,
}, {
  production: 'AssignmentExpression',
  pop: 3,
  action: r25,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r26,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r27,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r28,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r29,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r30,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r31,
}, {
  production: 'NewExpression',
  pop: 5,
  action: r32,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r33,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r34,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r35,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r36,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r37,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r38,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r39,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r40,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r41,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r42,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r43,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r44,
}, {
  production: 'ObjectProperty',
  pop: 5,
  action: r45,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r46,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r47,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r48,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r49,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r50,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r51,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r52,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r53,
}, {
  production: 'NullValue',
  pop: 1,
  action: r54,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r55,
}, {
  production: 'StringValue',
  pop: 1,
  action: r56,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r57,
}, {
  production: 'Declaration',
  pop: 1,
  action: r58,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r59,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r60,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r61,
}, {
  production: 'ClassBodyList',
  pop: 0,
  action: r62,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r63,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r64,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r65,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r66,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r67,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r68,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r69,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r70,
}, {
  production: 'Argument',
  pop: 1,
  action: r71,
}, {
  production: 'Argument',
  pop: 3,
  action: r72,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r73,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r74,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r75,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r76,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r77,
}];
const EOF = new Token('$', -1, -1, '');
export default function parseStatement(input) {
  const stack = [[null, 0]];
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
