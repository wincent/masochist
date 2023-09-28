/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make typescript" instead
 *
 * @generated
 */
import type {Actions, Gotos} from '@masochist/types';
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
  GenericType,
  GetAccessor,
  Identifier,
  MemberExpression,
  MethodDefinition,
  NamedType,
  NewExpression,
  Node,
  NullValue,
  NumberValue,
  ObjectProperty,
  ObjectValue,
  PrimitiveValue,
  PropertyDeclaration,
  ReturnStatement,
  SpreadElement,
  Statement,
  StringValue,
  ThrowStatement,
  TupleType,
  Type,
  UnionType,
  WhileStatement,
} from '@masochist/types';

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
type ExpressionList = Array<Expression | SpreadElement>;
type ObjectPropertyList = Array<ObjectProperty>;
type StatementList = Array<Statement>;
type TypeList = Array<Type>;

type Production =
  | Node
  | ArgumentList
  | AssignmentExpression
  | ClassBodyList
  | ClassBodyListItem
  | ExpressionList
  | ObjectPropertyList
  | StatementList
  | TypeList;

// TODO: as isStatementList assertion?

function r0(): null {
  return null;
}
function r1($1: Statement): StatementList {
  return [$1];
}
function r2($1: StatementList, $2: Statement): StatementList {
  $1.push($2);
  return $1;
}
function r3(): StatementList {
  return [];
}
function r4($1: AssignmentStatement): Statement {
  return $1;
}
function r5($1: ClassDeclaration): Statement {
  return $1;
}
function r6($1: ExportDefaultDeclaration): Statement {
  return $1;
}
function r7($1: ExpressionStatement): Statement {
  return $1;
}
function r8($1: ReturnStatement): Statement {
  return $1;
}
function r9($1: ThrowStatement): Statement {
  return $1;
}
function r10($1: WhileStatement): Statement {
  return $1;
}
function r11(
  _$1: Token,
  $2: Expression,
  _$3: Token,
  $4: Type,
  _$5: Token,
  $6: Expression,
): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2,
    type: $4,
    rhs: $6,
  };
}
function r12(
  _$1: Token,
  $2: Expression,
  _$3: Token,
  $4: Expression,
): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2,
    rhs: $4,
  };
}
function r13(
  _$1: Token,
  $2: Expression,
  _$3: Token,
  $4: Type,
  _$5: Token,
  $6: Expression,
): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2,
    type: $4,
    rhs: $6,
  };
}
function r14(
  _$1: Token,
  $2: Expression,
  _$3: Token,
  $4: Expression,
): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2,
    rhs: $4,
  };
}
function r15($1: AssignmentExpression): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1.lhs,
    rhs: $1.rhs,
  };
}
function r16($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r17($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r18(_$1: Token, $2: Expression): Expression {
  return $2;
}
function r19(): Expression {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r20($1: AssignmentExpression): Expression {
  return $1;
}
function r21($1: BinaryExpression): Expression {
  return $1;
}
function r22($1: CallExpression): Expression {
  return $1;
}
function r23($1: Identifier, _$2: Token, $3: Type): Expression {
  return {
    ...$1,
    cast: $3,
  };
}
function r24($1: Identifier): Expression {
  return $1;
}
function r25($1: MemberExpression): Expression {
  return $1;
}
function r26($1: NewExpression): Expression {
  return $1;
}
function r27($1: ObjectValue): Expression {
  return $1;
}
function r28($1: PrimitiveValue): Expression {
  return $1;
}
function r29($1: Expression, _$2: Token, $3: Expression): AssignmentExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r30($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r31($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r32($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r33($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r34($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r35($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r36(
  _$1: Token,
  $2: Expression,
  _$3: Token,
  $4: ExpressionList,
): NewExpression {
  return {
    kind: 'NewExpression',
    object: $2,
    arguments: $4,
  };
}
function r37($1: Expression, _$2: Token, $3: ExpressionList): CallExpression {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r38($1: Expression): ExpressionList {
  return [$1];
}
function r39($1: SpreadElement): ExpressionList {
  return [$1];
}
function r40($1: ExpressionList, _$2: Token, $3: Expression): ExpressionList {
  $1.push($3);
  return $1;
}
function r41(
  $1: ExpressionList,
  _$2: Token,
  $3: SpreadElement,
): ExpressionList {
  $1.push($3);
  return $1;
}
function r42(): ExpressionList {
  return [];
}
function r43(_$1: Token, $2: Expression): SpreadElement {
  return {
    kind: 'SpreadElement',
    expression: $2,
  };
}
function r44($1: Expression, _$2: Token, $3: Identifier): MemberExpression {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r45(_$1: Token, $2: ObjectPropertyList): ObjectValue {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r46($1: ObjectProperty): ObjectPropertyList {
  return [$1];
}
function r47(
  $1: ObjectPropertyList,
  _$2: Token,
  $3: ObjectProperty,
): ObjectPropertyList {
  $1.push($3);
  return $1;
}
function r48(): ObjectPropertyList {
  return [];
}
function r49($1: Identifier, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r50($1: Identifier): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r51($1: NumberValue, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r52(
  _$1: Token,
  $2: Expression,
  _$3: Token,
  _$4: Token,
  $5: Expression,
): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $2,
    value: $5,
    computed: true,
    shorthand: false,
  };
}
function r53($1: ArrayValue): PrimitiveValue {
  return $1;
}
function r54($1: BooleanValue): PrimitiveValue {
  return $1;
}
function r55($1: NullValue): PrimitiveValue {
  return $1;
}
function r56($1: NumberValue): PrimitiveValue {
  return $1;
}
function r57($1: StringValue): PrimitiveValue {
  return $1;
}
function r58(_$1: Token, $2: ExpressionList): ArrayValue {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r59(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r60(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r61(): NullValue {
  return {
    kind: 'NullValue',
  };
}
function r62($1: Token): NumberValue {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r63($1: Token): StringValue {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r64($1: GenericType): Type {
  return $1;
}
function r65($1: NamedType): Type {
  return $1;
}
function r66($1: TupleType): Type {
  return $1;
}
function r67($1: UnionType): Type {
  return $1;
}
function r68($1: Identifier, _$2: Token, $3: TypeList): GenericType {
  return {
    kind: 'GenericType',
    name: $1.name,
    parameters: $3,
  };
}
function r69($1: Type): TypeList {
  return [$1];
}
function r70($1: TypeList, _$2: Token, $3: Type): TypeList {
  $1.push($3);
  return $1;
}
function r71($1: Identifier): NamedType {
  return {
    kind: 'NamedType',
    name: $1.name,
  };
}
function r72($1: Token): NamedType {
  return {
    kind: 'NamedType',
    name: $1.contents,
  };
}
function r73(_$1: Token, $2: TypeList): TupleType {
  return {
    kind: 'TupleType',
    elements: $2,
  };
}
function r74($1: Type, _$2: Token, $3: Type): UnionType {
  return ($1.kind === 'UnionType')
    ? {
      kind: 'UnionType',
      variants: [...$1.variants, $3],
    }
    : {
      kind: 'UnionType',
      variants: [$1, $3],
    };
}
function r75(
  _$1: Token,
  _$2: Token,
  $3: Declaration,
): ExportDefaultDeclaration {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r76($1: ClassDeclaration): Declaration {
  return $1;
}
function r77(
  _$1: Token,
  $2: Identifier,
  _$3: Token,
  $4: ClassBodyList,
): ClassDeclaration {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r78($1: ClassBodyListItem): ClassBodyList {
  return [$1];
}
function r79($1: ClassBodyList, $2: ClassBodyListItem): ClassBodyList {
  $1.push($2);
  return $1;
}
function r80(): ClassBodyList {
  return [];
}
function r81($1: GetAccessor): ClassBodyListItem {
  return $1;
}
function r82($1: MethodDefinition): ClassBodyListItem {
  return $1;
}
function r83($1: PropertyDeclaration): ClassBodyListItem {
  return $1;
}
function r84(
  _$1: Token,
  $2: Identifier,
  _$3: Token,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
): GetAccessor {
  return {
    kind: 'GetAccessor',
    name: $2.name,
    body: $6,
  };
}
function r85(
  $1: Identifier,
  _$2: Token,
  $3: ArgumentList,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
): MethodDefinition {
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
function r86($1: Argument): ArgumentList {
  return [$1];
}
function r87($1: ArgumentList, _$2: Token, $3: Argument): ArgumentList {
  $1.push($3);
  return $1;
}
function r88(): ArgumentList {
  return [];
}
function r89($1: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r90($1: Identifier, _$2: Token, $3: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r91($1: Identifier, _$2: Token, $3: Identifier): PropertyDeclaration {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r92($1: Expression): ExpressionStatement {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r93(_$1: Token, $2: Expression): ThrowStatement {
  return {
    kind: 'ThrowStatement',
    expression: $2,
  };
}
function r94(): ReturnStatement {
  return {
    kind: 'ReturnStatement',
  };
}
function r95(_$1: Token, $2: Expression): ReturnStatement {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r96(
  _$1: Token,
  _$2: Token,
  $3: Expression,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
): WhileStatement {
  return {
    kind: 'WhileStatement',
    condition: $3,
    block: $6,
  };
}
const actions: Array<Actions> = [{
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 1,
  },
  GET: {
    kind: 'Reduce',
    rule: 1,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 1,
  },
  THROW: {
    kind: 'Reduce',
    rule: 1,
  },
  WHILE: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 4,
  },
  GET: {
    kind: 'Reduce',
    rule: 4,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 4,
  },
  THROW: {
    kind: 'Reduce',
    rule: 4,
  },
  WHILE: {
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
    state: 47,
  },
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
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 57,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
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
  COLON: {
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
  COLON: {
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
  COLON: {
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
  AS: {
    kind: 'Shift',
    state: 59,
  },
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
  COLON: {
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
  AS: {
    kind: 'Reduce',
    rule: 16,
  },
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
  COLON: {
    kind: 'Reduce',
    rule: 16,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 16,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 16,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 16,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 16,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 16,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 16,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 16,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 16,
  },
}, {
  AS: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 17,
  },
  COLON: {
    kind: 'Reduce',
    rule: 17,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 17,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 17,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 17,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 17,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 17,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 17,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 17,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 17,
  },
}, {
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
  EQUALS: {
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
  COLON: {
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
  LOGICAL_AND: {
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
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 26,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 26,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 26,
  },
  EQUALS: {
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
  COLON: {
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
  COLON: {
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
    state: 65,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 48,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 48,
  },
}, {
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
  COLON: {
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
  COLON: {
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
  REST: {
    kind: 'Shift',
    state: 69,
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
    rule: 42,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 42,
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
  COLON: {
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
  COLON: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 60,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 60,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 60,
  },
  DOT: {
    kind: 'Reduce',
    rule: 60,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 60,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 60,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 60,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 60,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 60,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 60,
  },
  COLON: {
    kind: 'Reduce',
    rule: 60,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 60,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 60,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 60,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 60,
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
  COLON: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 61,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 61,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 61,
  },
  DOT: {
    kind: 'Reduce',
    rule: 61,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 61,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 61,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 61,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 61,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 61,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 61,
  },
  COLON: {
    kind: 'Reduce',
    rule: 61,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 61,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 61,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 61,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 61,
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
  COLON: {
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 62,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 62,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 62,
  },
  DOT: {
    kind: 'Reduce',
    rule: 62,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 62,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 62,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 62,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 62,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 62,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 62,
  },
  COLON: {
    kind: 'Reduce',
    rule: 62,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 62,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 62,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 62,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 62,
  },
}, {
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
  COLON: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 63,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 63,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 63,
  },
  DOT: {
    kind: 'Reduce',
    rule: 63,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 63,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 63,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 63,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 63,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 63,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 63,
  },
  COLON: {
    kind: 'Reduce',
    rule: 63,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 63,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 63,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 63,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 63,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 5,
  },
  GET: {
    kind: 'Reduce',
    rule: 5,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 5,
  },
  THROW: {
    kind: 'Reduce',
    rule: 5,
  },
  WHILE: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 6,
  },
  GET: {
    kind: 'Reduce',
    rule: 6,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 6,
  },
  THROW: {
    kind: 'Reduce',
    rule: 6,
  },
  WHILE: {
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
    state: 71,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 7,
  },
  GET: {
    kind: 'Reduce',
    rule: 7,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 7,
  },
  THROW: {
    kind: 'Reduce',
    rule: 7,
  },
  WHILE: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 8,
  },
  GET: {
    kind: 'Reduce',
    rule: 8,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 8,
  },
  THROW: {
    kind: 'Reduce',
    rule: 8,
  },
  WHILE: {
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
    state: 72,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 9,
  },
  GET: {
    kind: 'Reduce',
    rule: 9,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 9,
  },
  THROW: {
    kind: 'Reduce',
    rule: 9,
  },
  WHILE: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 10,
  },
  GET: {
    kind: 'Reduce',
    rule: 10,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 10,
  },
  THROW: {
    kind: 'Reduce',
    rule: 10,
  },
  WHILE: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 2,
  },
  GET: {
    kind: 'Reduce',
    rule: 2,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 2,
  },
  THROW: {
    kind: 'Reduce',
    rule: 2,
  },
  WHILE: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 77,
  },
  COLON: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 20,
  },
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 20,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 20,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 79,
  },
  COLON: {
    kind: 'Shift',
    state: 78,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 15,
  },
  LET: {
    kind: 'Reduce',
    rule: 15,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 15,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 15,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 15,
  },
  THIS: {
    kind: 'Reduce',
    rule: 15,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 15,
  },
  GET: {
    kind: 'Reduce',
    rule: 15,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 15,
  },
  THROW: {
    kind: 'Reduce',
    rule: 15,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 15,
  },
  NEW: {
    kind: 'Reduce',
    rule: 15,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 15,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 15,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 15,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 15,
  },
  NULL: {
    kind: 'Reduce',
    rule: 15,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 15,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 15,
  },
  $: {
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
  REST: {
    kind: 'Shift',
    state: 69,
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
    rule: 42,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 42,
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
    rule: 92,
  },
  LET: {
    kind: 'Reduce',
    rule: 92,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 92,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 92,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 92,
  },
  THIS: {
    kind: 'Reduce',
    rule: 92,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 92,
  },
  GET: {
    kind: 'Reduce',
    rule: 92,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 92,
  },
  THROW: {
    kind: 'Reduce',
    rule: 92,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 92,
  },
  NEW: {
    kind: 'Reduce',
    rule: 92,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 92,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 92,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 92,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 92,
  },
  NULL: {
    kind: 'Reduce',
    rule: 92,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 92,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 92,
  },
  $: {
    kind: 'Reduce',
    rule: 92,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 92,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 89,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
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
  NULL: {
    kind: 'Shift',
    state: 94,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 96,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 98,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 99,
  },
  COMMA: {
    kind: 'Shift',
    state: 100,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 46,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 46,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 101,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 50,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 50,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 102,
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
    state: 104,
  },
  COMMA: {
    kind: 'Shift',
    state: 105,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 38,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 38,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 38,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 39,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 39,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 39,
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
  OPENING_BRACE: {
    kind: 'Shift',
    state: 107,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 94,
  },
  LET: {
    kind: 'Reduce',
    rule: 94,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 94,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 94,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 94,
  },
  THIS: {
    kind: 'Reduce',
    rule: 94,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 94,
  },
  GET: {
    kind: 'Reduce',
    rule: 94,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 94,
  },
  THROW: {
    kind: 'Reduce',
    rule: 94,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 94,
  },
  NEW: {
    kind: 'Reduce',
    rule: 94,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 94,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 94,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 94,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 94,
  },
  NULL: {
    kind: 'Reduce',
    rule: 94,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 94,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 94,
  },
  $: {
    kind: 'Reduce',
    rule: 94,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 94,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 110,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 111,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
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
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  NULL: {
    kind: 'Shift',
    state: 94,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 96,
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
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  NULL: {
    kind: 'Shift',
    state: 94,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 96,
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
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
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
  COLON: {
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
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
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
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 30,
  },
  COLON: {
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
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 117,
  },
  COMMA: {
    kind: 'Shift',
    state: 105,
  },
}, {
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
  COLON: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 31,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 31,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 31,
  },
  COLON: {
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
    rule: 32,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 32,
  },
  LOGICAL_AND: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
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
  COLON: {
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 33,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 33,
  },
  LOGICAL_AND: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
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
  COLON: {
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 34,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 34,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 34,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 34,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 34,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 34,
  },
  COLON: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 35,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 35,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 35,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 35,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 35,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 35,
  },
  COLON: {
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
  COLON: {
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
  BITWISE_OR: {
    kind: 'Shift',
    state: 118,
  },
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
  COLON: {
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
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 64,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 64,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 64,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 64,
  },
  DOT: {
    kind: 'Reduce',
    rule: 64,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 64,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 64,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 64,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 64,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 64,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 64,
  },
  COLON: {
    kind: 'Reduce',
    rule: 64,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 64,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 64,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 64,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 64,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 64,
  },
}, {
  LESS_THAN: {
    kind: 'Shift',
    state: 119,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 71,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 71,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 71,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 71,
  },
  DOT: {
    kind: 'Reduce',
    rule: 71,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 71,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 71,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 71,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 71,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 71,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 71,
  },
  COLON: {
    kind: 'Reduce',
    rule: 71,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 71,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 71,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 71,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 71,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 71,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 65,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 65,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 65,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 65,
  },
  DOT: {
    kind: 'Reduce',
    rule: 65,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 65,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 65,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 65,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 65,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 65,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 65,
  },
  COLON: {
    kind: 'Reduce',
    rule: 65,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 65,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 65,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 65,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 65,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 65,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 72,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 72,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 72,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 72,
  },
  DOT: {
    kind: 'Reduce',
    rule: 72,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 72,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 72,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 72,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 72,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 72,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 72,
  },
  COLON: {
    kind: 'Reduce',
    rule: 72,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 72,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 72,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 72,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 72,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 72,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 66,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 66,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 66,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 66,
  },
  DOT: {
    kind: 'Reduce',
    rule: 66,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 66,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 66,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 66,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 66,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 66,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 66,
  },
  COLON: {
    kind: 'Reduce',
    rule: 66,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 66,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 66,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 66,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 66,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 66,
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
  NULL: {
    kind: 'Shift',
    state: 94,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 96,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 67,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 67,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 67,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 67,
  },
  DOT: {
    kind: 'Reduce',
    rule: 67,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 67,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 67,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 67,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 67,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 67,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 67,
  },
  COLON: {
    kind: 'Reduce',
    rule: 67,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 67,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 67,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 67,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 67,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 67,
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
  REST: {
    kind: 'Shift',
    state: 69,
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
    rule: 42,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 42,
  },
}, {
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
  COLON: {
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
    state: 65,
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
    state: 48,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 126,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
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
  COLON: {
    kind: 'Reduce',
    rule: 58,
  },
  CLOSING_PAREN: {
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
  REST: {
    kind: 'Shift',
    state: 69,
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
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 43,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 43,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 43,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 132,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 80,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 75,
  },
  GET: {
    kind: 'Reduce',
    rule: 75,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 75,
  },
  THROW: {
    kind: 'Reduce',
    rule: 75,
  },
  WHILE: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 76,
  },
  GET: {
    kind: 'Reduce',
    rule: 76,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 76,
  },
  THROW: {
    kind: 'Reduce',
    rule: 76,
  },
  WHILE: {
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
  CONST: {
    kind: 'Reduce',
    rule: 95,
  },
  LET: {
    kind: 'Reduce',
    rule: 95,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 95,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 95,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 95,
  },
  THIS: {
    kind: 'Reduce',
    rule: 95,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 95,
  },
  GET: {
    kind: 'Reduce',
    rule: 95,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 95,
  },
  THROW: {
    kind: 'Reduce',
    rule: 95,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 95,
  },
  NEW: {
    kind: 'Reduce',
    rule: 95,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 95,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 95,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 95,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 95,
  },
  NULL: {
    kind: 'Reduce',
    rule: 95,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 95,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 95,
  },
  $: {
    kind: 'Reduce',
    rule: 95,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 95,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 93,
  },
  LET: {
    kind: 'Reduce',
    rule: 93,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 93,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 93,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 93,
  },
  THIS: {
    kind: 'Reduce',
    rule: 93,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 93,
  },
  GET: {
    kind: 'Reduce',
    rule: 93,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 93,
  },
  THROW: {
    kind: 'Reduce',
    rule: 93,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 93,
  },
  NEW: {
    kind: 'Reduce',
    rule: 93,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 93,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 93,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 93,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 93,
  },
  NULL: {
    kind: 'Reduce',
    rule: 93,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 93,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 93,
  },
  $: {
    kind: 'Reduce',
    rule: 93,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 93,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 136,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 137,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 118,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 138,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  COLON: {
    kind: 'Reduce',
    rule: 29,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 139,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 118,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 140,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  COLON: {
    kind: 'Reduce',
    rule: 29,
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
  COLON: {
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
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  NULL: {
    kind: 'Shift',
    state: 94,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 96,
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
  NULL: {
    kind: 'Shift',
    state: 94,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 96,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 143,
  },
  COMMA: {
    kind: 'Shift',
    state: 144,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 118,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 69,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 69,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 69,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 145,
  },
  COMMA: {
    kind: 'Shift',
    state: 105,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 47,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 47,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 49,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 49,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 51,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 51,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 146,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 40,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 40,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 40,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 41,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 41,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 41,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 147,
  },
  GET: {
    kind: 'Shift',
    state: 132,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 78,
  },
  GET: {
    kind: 'Reduce',
    rule: 78,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 78,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 81,
  },
  GET: {
    kind: 'Reduce',
    rule: 81,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 81,
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
    rule: 17,
  },
  COLON: {
    kind: 'Reduce',
    rule: 17,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 82,
  },
  GET: {
    kind: 'Reduce',
    rule: 82,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 82,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 151,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 150,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 83,
  },
  GET: {
    kind: 'Reduce',
    rule: 83,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 83,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 152,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 12,
  },
  GET: {
    kind: 'Reduce',
    rule: 12,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 12,
  },
  THROW: {
    kind: 'Reduce',
    rule: 12,
  },
  WHILE: {
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
  CONST: {
    kind: 'Reduce',
    rule: 14,
  },
  LET: {
    kind: 'Reduce',
    rule: 14,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 14,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 14,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 14,
  },
  THIS: {
    kind: 'Reduce',
    rule: 14,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 14,
  },
  GET: {
    kind: 'Reduce',
    rule: 14,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 14,
  },
  THROW: {
    kind: 'Reduce',
    rule: 14,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 14,
  },
  NEW: {
    kind: 'Reduce',
    rule: 14,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 14,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 14,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 14,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 14,
  },
  NULL: {
    kind: 'Reduce',
    rule: 14,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 14,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 14,
  },
  $: {
    kind: 'Reduce',
    rule: 14,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 14,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 74,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 74,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 74,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 74,
  },
  DOT: {
    kind: 'Reduce',
    rule: 74,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 74,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 74,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 74,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 74,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 74,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 74,
  },
  COLON: {
    kind: 'Reduce',
    rule: 74,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 74,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 74,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 74,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 74,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 74,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 144,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 155,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 73,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 73,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 73,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 73,
  },
  DOT: {
    kind: 'Reduce',
    rule: 73,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 73,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 73,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 73,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 73,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 73,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 73,
  },
  COLON: {
    kind: 'Reduce',
    rule: 73,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 73,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 73,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 73,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 73,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 73,
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
  NULL: {
    kind: 'Shift',
    state: 94,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 96,
  },
}, {
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
  COLON: {
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
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 36,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 77,
  },
  GET: {
    kind: 'Reduce',
    rule: 77,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 77,
  },
  THROW: {
    kind: 'Reduce',
    rule: 77,
  },
  WHILE: {
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
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 79,
  },
  GET: {
    kind: 'Reduce',
    rule: 79,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 79,
  },
}, {
  OPENING_PAREN: {
    kind: 'Shift',
    state: 158,
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
    rule: 88,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 88,
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 164,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 165,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 68,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 68,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 68,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 68,
  },
  DOT: {
    kind: 'Reduce',
    rule: 68,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 68,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 68,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 68,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 68,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 68,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 68,
  },
  COLON: {
    kind: 'Reduce',
    rule: 68,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 68,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 68,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 68,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 68,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 68,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 118,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 70,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 70,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 70,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 48,
  },
  DOT: {
    kind: 'Shift',
    state: 51,
  },
  EQUALS: {
    kind: 'Shift',
    state: 55,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 49,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 53,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 50,
  },
  PLUS: {
    kind: 'Shift',
    state: 54,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 56,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 52,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 52,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 166,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 167,
  },
  COMMA: {
    kind: 'Shift',
    state: 168,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 86,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 86,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 169,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 89,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 89,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 170,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 171,
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 11,
  },
  GET: {
    kind: 'Reduce',
    rule: 11,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 11,
  },
  THROW: {
    kind: 'Reduce',
    rule: 11,
  },
  WHILE: {
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
  CONST: {
    kind: 'Reduce',
    rule: 13,
  },
  LET: {
    kind: 'Reduce',
    rule: 13,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 13,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 13,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 13,
  },
  THIS: {
    kind: 'Reduce',
    rule: 13,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 13,
  },
  GET: {
    kind: 'Reduce',
    rule: 13,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 13,
  },
  THROW: {
    kind: 'Reduce',
    rule: 13,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 13,
  },
  NEW: {
    kind: 'Reduce',
    rule: 13,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 13,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 13,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 13,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 13,
  },
  NULL: {
    kind: 'Reduce',
    rule: 13,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 13,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 13,
  },
  $: {
    kind: 'Reduce',
    rule: 13,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 13,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 172,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 173,
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
    rule: 91,
  },
  GET: {
    kind: 'Reduce',
    rule: 91,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 91,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 96,
  },
  LET: {
    kind: 'Reduce',
    rule: 96,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 96,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 96,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 96,
  },
  THIS: {
    kind: 'Reduce',
    rule: 96,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 96,
  },
  GET: {
    kind: 'Reduce',
    rule: 96,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 96,
  },
  THROW: {
    kind: 'Reduce',
    rule: 96,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 96,
  },
  NEW: {
    kind: 'Reduce',
    rule: 96,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 96,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 96,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 96,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 96,
  },
  NULL: {
    kind: 'Reduce',
    rule: 96,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 96,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 96,
  },
  $: {
    kind: 'Reduce',
    rule: 96,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 96,
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 87,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 87,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 90,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 90,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 178,
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 33,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 179,
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
  THROW: {
    kind: 'Shift',
    state: 40,
  },
  TRUE: {
    kind: 'Shift',
    state: 25,
  },
  WHILE: {
    kind: 'Shift',
    state: 42,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 84,
  },
  GET: {
    kind: 'Reduce',
    rule: 84,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 84,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 85,
  },
  GET: {
    kind: 'Reduce',
    rule: 85,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 85,
  },
}];
const gotos: Array<Gotos> = [
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
    ThrowStatement: 39,
    WhileStatement: 41,
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
    Statement: 43,
    StringValue: 30,
    ThrowStatement: 39,
    WhileStatement: 41,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 44,
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
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 46,
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
    AssignmentExpression: 45,
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
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 60,
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
    Identifier: 63,
    NumberValue: 64,
    ObjectProperty: 62,
    ObjectPropertyList: 61,
  },
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 67,
    ExpressionList: 66,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    SpreadElement: 68,
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
    Identifier: 70,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
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
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
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
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
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
    AssignmentExpression: 45,
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
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 67,
    ExpressionList: 82,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    SpreadElement: 68,
    StringValue: 30,
  },
  {
    Identifier: 83,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 84,
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
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 85,
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
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 86,
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
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 87,
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
    AssignmentExpression: 45,
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
  {
    GenericType: 91,
    Identifier: 92,
    NamedType: 93,
    TupleType: 95,
    Type: 90,
    UnionType: 97,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 103,
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
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 106,
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
    ClassDeclaration: 109,
    Declaration: 108,
  },
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 112,
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
    GenericType: 91,
    Identifier: 92,
    NamedType: 93,
    TupleType: 95,
    Type: 113,
    UnionType: 97,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 114,
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
    GenericType: 91,
    Identifier: 92,
    NamedType: 93,
    TupleType: 95,
    Type: 115,
    UnionType: 97,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 116,
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
  {},
  {},
  {},
  {
    GenericType: 91,
    Identifier: 92,
    NamedType: 93,
    TupleType: 95,
    Type: 121,
    TypeList: 120,
    UnionType: 97,
  },
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 67,
    ExpressionList: 122,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    SpreadElement: 68,
    StringValue: 30,
  },
  {},
  {
    Identifier: 63,
    NumberValue: 64,
    ObjectProperty: 123,
  },
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 124,
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
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 125,
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
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 127,
    Identifier: 12,
    MemberExpression: 15,
    NewExpression: 16,
    NullValue: 26,
    NumberValue: 28,
    ObjectValue: 18,
    PrimitiveValue: 20,
    SpreadElement: 128,
    StringValue: 30,
  },
  {},
  {
    ClassBodyList: 129,
    ClassBodyListItem: 130,
    GetAccessor: 131,
    Identifier: 134,
    MethodDefinition: 133,
    PropertyDeclaration: 135,
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
    GenericType: 91,
    Identifier: 92,
    NamedType: 93,
    TupleType: 95,
    Type: 141,
    UnionType: 97,
  },
  {
    GenericType: 91,
    Identifier: 92,
    NamedType: 93,
    TupleType: 95,
    Type: 121,
    TypeList: 142,
    UnionType: 97,
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
    ClassBodyListItem: 148,
    GetAccessor: 131,
    Identifier: 134,
    MethodDefinition: 133,
    PropertyDeclaration: 135,
  },
  {},
  {},
  {
    Identifier: 149,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 153,
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
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 154,
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
  {
    GenericType: 91,
    Identifier: 92,
    NamedType: 93,
    TupleType: 95,
    Type: 156,
    UnionType: 97,
  },
  {},
  {
    ArrayValue: 21,
    AssignmentExpression: 45,
    BinaryExpression: 10,
    BooleanValue: 23,
    CallExpression: 11,
    Expression: 157,
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
    Argument: 160,
    ArgumentList: 159,
    Identifier: 161,
  },
  {
    Identifier: 162,
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
    StatementList: 163,
    StringValue: 30,
    ThrowStatement: 39,
    WhileStatement: 41,
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
    Statement: 43,
    StringValue: 30,
    ThrowStatement: 39,
    WhileStatement: 41,
  },
  {},
  {},
  {},
  {},
  {
    Argument: 174,
    Identifier: 161,
  },
  {
    Identifier: 175,
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
    StatementList: 176,
    StringValue: 30,
    ThrowStatement: 39,
    WhileStatement: 41,
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
    StatementList: 177,
    StringValue: 30,
    ThrowStatement: 39,
    WhileStatement: 41,
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
    Statement: 43,
    StringValue: 30,
    ThrowStatement: 39,
    WhileStatement: 41,
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
    Statement: 43,
    StringValue: 30,
    ThrowStatement: 39,
    WhileStatement: 41,
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
  production: 'Statement',
  pop: 1,
  action: r10,
}, {
  production: 'AssignmentStatement',
  pop: 7,
  action: r11,
}, {
  production: 'AssignmentStatement',
  pop: 5,
  action: r12,
}, {
  production: 'AssignmentStatement',
  pop: 7,
  action: r13,
}, {
  production: 'AssignmentStatement',
  pop: 5,
  action: r14,
}, {
  production: 'AssignmentStatement',
  pop: 2,
  action: r15,
}, {
  production: 'Identifier',
  pop: 1,
  action: r16,
}, {
  production: 'Identifier',
  pop: 1,
  action: r17,
}, {
  production: 'Expression',
  pop: 3,
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
  pop: 3,
  action: r23,
}, {
  production: 'Expression',
  pop: 1,
  action: r24,
}, {
  production: 'Expression',
  pop: 1,
  action: r25,
}, {
  production: 'Expression',
  pop: 1,
  action: r26,
}, {
  production: 'Expression',
  pop: 1,
  action: r27,
}, {
  production: 'Expression',
  pop: 1,
  action: r28,
}, {
  production: 'AssignmentExpression',
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
  production: 'BinaryExpression',
  pop: 3,
  action: r32,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r33,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r34,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r35,
}, {
  production: 'NewExpression',
  pop: 5,
  action: r36,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r37,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r38,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r39,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r40,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r41,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r42,
}, {
  production: 'SpreadElement',
  pop: 2,
  action: r43,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r44,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r45,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r46,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r47,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r48,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r49,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r50,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r51,
}, {
  production: 'ObjectProperty',
  pop: 5,
  action: r52,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r53,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r54,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r55,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r56,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r57,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r58,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r59,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r60,
}, {
  production: 'NullValue',
  pop: 1,
  action: r61,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r62,
}, {
  production: 'StringValue',
  pop: 1,
  action: r63,
}, {
  production: 'Type',
  pop: 1,
  action: r64,
}, {
  production: 'Type',
  pop: 1,
  action: r65,
}, {
  production: 'Type',
  pop: 1,
  action: r66,
}, {
  production: 'Type',
  pop: 1,
  action: r67,
}, {
  production: 'GenericType',
  pop: 4,
  action: r68,
}, {
  production: 'TypeList',
  pop: 1,
  action: r69,
}, {
  production: 'TypeList',
  pop: 3,
  action: r70,
}, {
  production: 'NamedType',
  pop: 1,
  action: r71,
}, {
  production: 'NamedType',
  pop: 1,
  action: r72,
}, {
  production: 'TupleType',
  pop: 3,
  action: r73,
}, {
  production: 'UnionType',
  pop: 3,
  action: r74,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r75,
}, {
  production: 'Declaration',
  pop: 1,
  action: r76,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r77,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r78,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r79,
}, {
  production: 'ClassBodyList',
  pop: 0,
  action: r80,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r81,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r82,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r83,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r84,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r85,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r86,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r87,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r88,
}, {
  production: 'Argument',
  pop: 1,
  action: r89,
}, {
  production: 'Argument',
  pop: 3,
  action: r90,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r91,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r92,
}, {
  production: 'ThrowStatement',
  pop: 3,
  action: r93,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r94,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r95,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r96,
}];
const EOF = new Token('$', -1, -1, '');
export default function parseStatement(input: string) {
  const stack: Array<[Production | Token | null, number]> = [[null, 0]];
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
      const {production, pop, action: code} = rules[action.rule];
      const popped: Array<Production | Token | null> = [];
      for (let i = 0; i < pop; i++) {
        const [node] = stack.pop()!;
        popped[pop - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
      const target = gotos[next][production];
      // "as any" cast here suppresses:
      // - TS2590: Expression produces a union type that is too complex to represent.
      // - TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
      stack.push([(code as any)(...popped), target]);
    }
  }
}
