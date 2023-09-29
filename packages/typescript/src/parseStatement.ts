/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make typescript" instead
 *
 * @generated
 */
import type {Actions, Gotos} from '@masochist/types';
import {Lexer, Token} from './lex';

import type {
  Argument,
  ArrayPattern,
  ArrayValue,
  AssignmentStatement,
  BinaryExpression,
  BooleanValue,
  CallExpression,
  ClassDeclaration,
  Declaration,
  DecrementExpression,
  ExportDefaultDeclaration,
  Expression,
  ExpressionStatement,
  ForStatement,
  GenericType,
  GetAccessor,
  Identifier,
  IfStatement,
  IncrementExpression,
  IndexExpression,
  LogicalNotExpression,
  MemberExpression,
  MethodDefinition,
  NamedType,
  NewExpression,
  Node,
  NullValue,
  NumberValue,
  ObjectPattern,
  ObjectProperty,
  ObjectValue,
  Pattern,
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
  VariableDeclaration,
  VariableDeclarator,
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
type Id = Identifier | Pattern;
type IdentifierList = Array<Identifier>;
type ObjectPropertyList = Array<ObjectProperty>;
type StatementList = Array<Statement>;
type TypeList = Array<Type>;
type VariableDeclaratorList = Array<VariableDeclarator>;

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
function r8($1: ForStatement): Statement {
  return $1;
}
function r9($1: IfStatement): Statement {
  return $1;
}
function r10($1: ReturnStatement): Statement {
  return $1;
}
function r11($1: ThrowStatement): Statement {
  return $1;
}
function r12($1: WhileStatement): Statement {
  return $1;
}
function r13(
  _$1: Token,
  $2: Id,
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
function r14(
  _$1: Token,
  $2: Id,
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
function r15(
  _$1: Token,
  $2: Id,
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
function r16(
  _$1: Token,
  $2: Id,
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
function r17($1: Identifier, _$2: Token, $3: Expression): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1,
    rhs: $3,
  };
}
function r18($1: Identifier): Id {
  return $1;
}
function r19($1: Pattern): Id {
  return $1;
}
function r20($1: ArrayPattern): Pattern {
  return $1;
}
function r21($1: ObjectPattern): Pattern {
  return $1;
}
function r22(_$1: Token, $2: IdentifierList): ArrayPattern {
  return {
    kind: 'ArrayPattern',
    elements: $2,
  };
}
function r23($1: Identifier): IdentifierList {
  return [$1];
}
function r24($1: IdentifierList, _$2: Token, $3: Identifier): IdentifierList {
  $1.push($3);
  return $1;
}
function r25(_$1: Token, $2: ObjectPropertyList): ObjectPattern {
  return {
    kind: 'ObjectPattern',
    properties: $2,
  };
}
function r26($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r27($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r28(_$1: Token, $2: Expression): Expression {
  return $2;
}
function r29(): Expression {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r30($1: AssignmentExpression): Expression {
  return $1;
}
function r31($1: BinaryExpression): Expression {
  return $1;
}
function r32($1: CallExpression): Expression {
  return $1;
}
function r33($1: DecrementExpression): Expression {
  return $1;
}
function r34($1: IncrementExpression): Expression {
  return $1;
}
function r35($1: Identifier, _$2: Token, $3: Type): Expression {
  return {
    ...$1,
    cast: $3,
  };
}
function r36($1: Identifier): Expression {
  return $1;
}
function r37($1: IndexExpression): Expression {
  return $1;
}
function r38($1: LogicalNotExpression): Expression {
  return $1;
}
function r39($1: MemberExpression): Expression {
  return $1;
}
function r40($1: NewExpression): Expression {
  return $1;
}
function r41($1: ObjectValue): Expression {
  return $1;
}
function r42($1: PrimitiveValue): Expression {
  return $1;
}
function r43($1: Expression, _$2: Token, $3: Expression): AssignmentExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r44($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>',
    rhs: $3,
  };
}
function r45($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>=',
    rhs: $3,
  };
}
function r46($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<',
    rhs: $3,
  };
}
function r47($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<=',
    rhs: $3,
  };
}
function r48($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r49($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r50($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r51($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r52($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r53($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r54(
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
function r55($1: Expression, _$2: Token, $3: ExpressionList): CallExpression {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r56($1: Expression): ExpressionList {
  return [$1];
}
function r57($1: SpreadElement): ExpressionList {
  return [$1];
}
function r58($1: ExpressionList, _$2: Token, $3: Expression): ExpressionList {
  $1.push($3);
  return $1;
}
function r59(
  $1: ExpressionList,
  _$2: Token,
  $3: SpreadElement,
): ExpressionList {
  $1.push($3);
  return $1;
}
function r60(): ExpressionList {
  return [];
}
function r61(_$1: Token, $2: Expression): SpreadElement {
  return {
    kind: 'SpreadElement',
    expression: $2,
  };
}
function r62(_$1: Token, $2: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r63($1: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r64(_$1: Token, $2: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r65($1: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r66($1: Expression, _$2: Token, $3: Expression): IndexExpression {
  return {
    kind: 'IndexExpression',
    index: $3,
    indexee: $1,
  };
}
function r67(_$1: Token, $2: Expression): LogicalNotExpression {
  return {
    kind: 'LogicalNotExpression',
    operand: $2,
  };
}
function r68($1: Expression, _$2: Token, $3: Identifier): MemberExpression {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r69(_$1: Token, $2: ObjectPropertyList): ObjectValue {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r70($1: ObjectProperty): ObjectPropertyList {
  return [$1];
}
function r71(
  $1: ObjectPropertyList,
  _$2: Token,
  $3: ObjectProperty,
): ObjectPropertyList {
  $1.push($3);
  return $1;
}
function r72(): ObjectPropertyList {
  return [];
}
function r73($1: Identifier, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r74($1: Identifier): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r75($1: NumberValue, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r76(
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
function r77($1: ArrayValue): PrimitiveValue {
  return $1;
}
function r78($1: BooleanValue): PrimitiveValue {
  return $1;
}
function r79($1: NullValue): PrimitiveValue {
  return $1;
}
function r80($1: NumberValue): PrimitiveValue {
  return $1;
}
function r81($1: StringValue): PrimitiveValue {
  return $1;
}
function r82(_$1: Token, $2: ExpressionList): ArrayValue {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r83(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r84(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r85(): NullValue {
  return {
    kind: 'NullValue',
  };
}
function r86($1: Token): NumberValue {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r87($1: Token): StringValue {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r88($1: GenericType): Type {
  return $1;
}
function r89($1: NamedType): Type {
  return $1;
}
function r90($1: TupleType): Type {
  return $1;
}
function r91($1: UnionType): Type {
  return $1;
}
function r92($1: Identifier, _$2: Token, $3: TypeList): GenericType {
  return {
    kind: 'GenericType',
    name: $1.name,
    parameters: $3,
  };
}
function r93($1: Type): TypeList {
  return [$1];
}
function r94($1: TypeList, _$2: Token, $3: Type): TypeList {
  $1.push($3);
  return $1;
}
function r95($1: Identifier): NamedType {
  return {
    kind: 'NamedType',
    name: $1.name,
  };
}
function r96($1: Token): NamedType {
  return {
    kind: 'NamedType',
    name: $1.contents,
  };
}
function r97(_$1: Token, $2: TypeList): TupleType {
  return {
    kind: 'TupleType',
    elements: $2,
  };
}
function r98($1: Type, _$2: Token, $3: Type): UnionType {
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
function r99(
  _$1: Token,
  _$2: Token,
  $3: Declaration,
): ExportDefaultDeclaration {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r100($1: ClassDeclaration): Declaration {
  return $1;
}
function r101(
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
function r102($1: ClassBodyListItem): ClassBodyList {
  return [$1];
}
function r103($1: ClassBodyList, $2: ClassBodyListItem): ClassBodyList {
  $1.push($2);
  return $1;
}
function r104(): ClassBodyList {
  return [];
}
function r105($1: GetAccessor): ClassBodyListItem {
  return $1;
}
function r106($1: MethodDefinition): ClassBodyListItem {
  return $1;
}
function r107($1: PropertyDeclaration): ClassBodyListItem {
  return $1;
}
function r108(
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
function r109(
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
function r110($1: Argument): ArgumentList {
  return [$1];
}
function r111($1: ArgumentList, _$2: Token, $3: Argument): ArgumentList {
  $1.push($3);
  return $1;
}
function r112(): ArgumentList {
  return [];
}
function r113($1: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r114($1: Identifier, _$2: Token, $3: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r115($1: Identifier, _$2: Token, $3: Identifier): PropertyDeclaration {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r116($1: Expression): ExpressionStatement {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r117(
  _$1: Token,
  _$2: Token,
  $3: VariableDeclaration,
  _$4: Token,
  $5: Expression,
  _$6: Token,
  $7: Expression,
  _$8: Token,
  _$9: Token,
  $10: StatementList,
): ForStatement {
  return {
    kind: 'ForStatement',
    initializer: $3,
    condition: $5,
    update: $7,
    block: $10,
  };
}
function r118(_$1: Token, $2: VariableDeclaratorList): VariableDeclaration {
  return {
    kind: 'VariableDeclaration',
    binding: 'let',
    declarators: $2,
  };
}
function r119($1: VariableDeclarator): VariableDeclaratorList {
  return [$1];
}
function r120(
  $1: VariableDeclaratorList,
  $2: VariableDeclarator,
): VariableDeclaratorList {
  $1.push($2);
  return $1;
}
function r121($1: Id, _$2: Token, $3: Expression): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: $3,
  };
}
function r122($1: Id): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: null,
  };
}
function r123(
  _$1: Token,
  _$2: Token,
  $3: Expression,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
  _$7: Token,
  _$8: Token,
  $9: IfStatement,
): IfStatement {
  return {
    kind: 'IfStatement',
    consequents: [{
      kind: 'Consequent',
      condition: $3,
      block: $6,
    }, ...$9.consequents],
  };
}
function r124(
  _$1: Token,
  _$2: Token,
  $3: Expression,
  _$4: Token,
  _$5: Token,
  $6: StatementList,
): IfStatement {
  return {
    kind: 'IfStatement',
    consequents: [{
      kind: 'Consequent',
      condition: $3,
      block: $6,
    }],
  };
}
function r125(_$1: Token, $2: Expression): ThrowStatement {
  return {
    kind: 'ThrowStatement',
    expression: $2,
  };
}
function r126(): ReturnStatement {
  return {
    kind: 'ReturnStatement',
  };
}
function r127(_$1: Token, $2: Expression): ReturnStatement {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r128(
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
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
  $: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  $: {
    kind: 'Accept',
  },
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
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
  FOR: {
    kind: 'Reduce',
    rule: 1,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 1,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 1,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 1,
  },
  BANG: {
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
  FOR: {
    kind: 'Reduce',
    rule: 4,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 4,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 4,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 4,
  },
  BANG: {
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
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 61,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 59,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 61,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 59,
  },
}, {
  AS: {
    kind: 'Shift',
    state: 64,
  },
  ASSIGN: {
    kind: 'Shift',
    state: 63,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 36,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 36,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 36,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 36,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 36,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 36,
  },
  DOT: {
    kind: 'Reduce',
    rule: 36,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 36,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 36,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 36,
  },
  LOGICAL_AND: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 26,
  },
  AS: {
    kind: 'Reduce',
    rule: 26,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 26,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 26,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 26,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 26,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 26,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 26,
  },
  DOT: {
    kind: 'Reduce',
    rule: 26,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 26,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 26,
  },
  LESS_THAN_OR_EQUAL: {
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
  COLON: {
    kind: 'Reduce',
    rule: 26,
  },
  OPENING_BRACE: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 26,
  },
  GET: {
    kind: 'Reduce',
    rule: 26,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 26,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 27,
  },
  AS: {
    kind: 'Reduce',
    rule: 27,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 27,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 27,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 27,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 27,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 27,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 27,
  },
  DOT: {
    kind: 'Reduce',
    rule: 27,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 27,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 27,
  },
  LESS_THAN_OR_EQUAL: {
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
  COLON: {
    kind: 'Reduce',
    rule: 27,
  },
  OPENING_BRACE: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 27,
  },
  GET: {
    kind: 'Reduce',
    rule: 27,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 27,
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
  FOR: {
    kind: 'Reduce',
    rule: 5,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 5,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 5,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 5,
  },
  BANG: {
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
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
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
  FOR: {
    kind: 'Reduce',
    rule: 6,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 6,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 6,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 6,
  },
  BANG: {
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
    state: 66,
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
  FOR: {
    kind: 'Reduce',
    rule: 7,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 7,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 7,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 7,
  },
  BANG: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 67,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 29,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 29,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 29,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 29,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 29,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 29,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 29,
  },
  DOT: {
    kind: 'Reduce',
    rule: 29,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 29,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 29,
  },
  LESS_THAN_OR_EQUAL: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 29,
  },
  GET: {
    kind: 'Reduce',
    rule: 29,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 29,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 30,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 30,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 30,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 30,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 30,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 30,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 30,
  },
  DOT: {
    kind: 'Reduce',
    rule: 30,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 30,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 30,
  },
  LESS_THAN_OR_EQUAL: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 30,
  },
  GET: {
    kind: 'Reduce',
    rule: 30,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 30,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 31,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 31,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 31,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 31,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 31,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 31,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 31,
  },
  DOT: {
    kind: 'Reduce',
    rule: 31,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 31,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 31,
  },
  LESS_THAN_OR_EQUAL: {
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
    kind: 'Reduce',
    rule: 31,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 31,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 31,
  },
  STRICT_EQUALS: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 31,
  },
  GET: {
    kind: 'Reduce',
    rule: 31,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 31,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 32,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 32,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 32,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 32,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 32,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 32,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 32,
  },
  DOT: {
    kind: 'Reduce',
    rule: 32,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 32,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 32,
  },
  LESS_THAN_OR_EQUAL: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 32,
  },
  GET: {
    kind: 'Reduce',
    rule: 32,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 32,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 33,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 33,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 33,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 33,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 33,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 33,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 33,
  },
  DOT: {
    kind: 'Reduce',
    rule: 33,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 33,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 33,
  },
  LESS_THAN_OR_EQUAL: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 33,
  },
  GET: {
    kind: 'Reduce',
    rule: 33,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 33,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 34,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 34,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 34,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 34,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 34,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 34,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 34,
  },
  DOT: {
    kind: 'Reduce',
    rule: 34,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 34,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 34,
  },
  LESS_THAN_OR_EQUAL: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 34,
  },
  GET: {
    kind: 'Reduce',
    rule: 34,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 34,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 37,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 37,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 37,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 37,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 37,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 37,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 37,
  },
  DOT: {
    kind: 'Reduce',
    rule: 37,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 37,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 37,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 37,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 37,
  },
  GET: {
    kind: 'Reduce',
    rule: 37,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 37,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 38,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 38,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 38,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 38,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 38,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 38,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 38,
  },
  DOT: {
    kind: 'Reduce',
    rule: 38,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 38,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 38,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 38,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 38,
  },
  GET: {
    kind: 'Reduce',
    rule: 38,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 38,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 39,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 39,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 39,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 39,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 39,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 39,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 39,
  },
  DOT: {
    kind: 'Reduce',
    rule: 39,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 39,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 39,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 39,
  },
  LOGICAL_AND: {
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
  EQUALS: {
    kind: 'Reduce',
    rule: 39,
  },
  STRICT_EQUALS: {
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
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 39,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 39,
  },
  GET: {
    kind: 'Reduce',
    rule: 39,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 39,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 40,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 40,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 40,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 40,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 40,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 40,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 40,
  },
  DOT: {
    kind: 'Reduce',
    rule: 40,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 40,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 40,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 40,
  },
  LOGICAL_AND: {
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
  EQUALS: {
    kind: 'Reduce',
    rule: 40,
  },
  STRICT_EQUALS: {
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
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 40,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 40,
  },
  GET: {
    kind: 'Reduce',
    rule: 40,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 40,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 41,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 41,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 41,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 41,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 41,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 41,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 41,
  },
  DOT: {
    kind: 'Reduce',
    rule: 41,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 41,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 41,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 41,
  },
  LOGICAL_AND: {
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
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 41,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 41,
  },
  GET: {
    kind: 'Reduce',
    rule: 41,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 41,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 94,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 72,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 72,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 42,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 42,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 42,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 42,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 42,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 42,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 42,
  },
  DOT: {
    kind: 'Reduce',
    rule: 42,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 42,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 42,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 42,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 42,
  },
  GET: {
    kind: 'Reduce',
    rule: 42,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 42,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 77,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 77,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 77,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 77,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 77,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 77,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 77,
  },
  DOT: {
    kind: 'Reduce',
    rule: 77,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 77,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 77,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 77,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 77,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 77,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 77,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 77,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 77,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 77,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 77,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 77,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 77,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  REST: {
    kind: 'Shift',
    state: 98,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 60,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 60,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 78,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 78,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 78,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 78,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 78,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 78,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 78,
  },
  DOT: {
    kind: 'Reduce',
    rule: 78,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 78,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 78,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 78,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 78,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 78,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 78,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 78,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 78,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 78,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 78,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 78,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 78,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 78,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 83,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 83,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 83,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 83,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 83,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 83,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 83,
  },
  DOT: {
    kind: 'Reduce',
    rule: 83,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 83,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 83,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 83,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 83,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 83,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 83,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 83,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 83,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 83,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 83,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 83,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 83,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 83,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 83,
  },
  GET: {
    kind: 'Reduce',
    rule: 83,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 83,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 84,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 84,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 84,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 84,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 84,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 84,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 84,
  },
  DOT: {
    kind: 'Reduce',
    rule: 84,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 84,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 84,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 84,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 84,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 84,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 84,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 84,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 84,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 84,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 84,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 84,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 84,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 84,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 84,
  },
  GET: {
    kind: 'Reduce',
    rule: 84,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 84,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 79,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 79,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 79,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 79,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 79,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 79,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 79,
  },
  DOT: {
    kind: 'Reduce',
    rule: 79,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 79,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 79,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 79,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 79,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 79,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 79,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 79,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 79,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 79,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 79,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 79,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 79,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 79,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 85,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 85,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 85,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 85,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 85,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 85,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 85,
  },
  DOT: {
    kind: 'Reduce',
    rule: 85,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 85,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 85,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 85,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 85,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 85,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 85,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 85,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 85,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 85,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 85,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 85,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 85,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 85,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 85,
  },
  GET: {
    kind: 'Reduce',
    rule: 85,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 85,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 80,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 80,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 80,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 80,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 80,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 80,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 80,
  },
  DOT: {
    kind: 'Reduce',
    rule: 80,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 80,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 80,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 80,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 80,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 80,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 80,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 80,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 80,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 80,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 80,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 80,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 80,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 80,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 86,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 86,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 86,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 86,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 86,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 86,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 86,
  },
  DOT: {
    kind: 'Reduce',
    rule: 86,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 86,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 86,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 86,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 86,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 86,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 86,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 86,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 86,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 86,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 86,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 86,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 86,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 86,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 86,
  },
  GET: {
    kind: 'Reduce',
    rule: 86,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 86,
  },
  COLON: {
    kind: 'Reduce',
    rule: 86,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 81,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 81,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 81,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 81,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 81,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 81,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 81,
  },
  DOT: {
    kind: 'Reduce',
    rule: 81,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 81,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 81,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 81,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 81,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 81,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 81,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 81,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 81,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 81,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 81,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 81,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 81,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 81,
  },
  GET: {
    kind: 'Reduce',
    rule: 81,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 81,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 87,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 87,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 87,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 87,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 87,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 87,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 87,
  },
  DOT: {
    kind: 'Reduce',
    rule: 87,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 87,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 87,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 87,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 87,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 87,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 87,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 87,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 87,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 87,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 87,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 87,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 87,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 87,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 87,
  },
  GET: {
    kind: 'Reduce',
    rule: 87,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 87,
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
  FOR: {
    kind: 'Reduce',
    rule: 8,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 8,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 8,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 8,
  },
  BANG: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 99,
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
  FOR: {
    kind: 'Reduce',
    rule: 9,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 9,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 9,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 9,
  },
  BANG: {
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
    state: 100,
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
  FOR: {
    kind: 'Reduce',
    rule: 10,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 10,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 10,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 10,
  },
  BANG: {
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
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 101,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
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
  FOR: {
    kind: 'Reduce',
    rule: 11,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 11,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 11,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 11,
  },
  BANG: {
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
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
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
  FOR: {
    kind: 'Reduce',
    rule: 12,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 12,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 12,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 12,
  },
  BANG: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 104,
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
  FOR: {
    kind: 'Reduce',
    rule: 2,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 2,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 2,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 2,
  },
  BANG: {
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
    state: 106,
  },
  COLON: {
    kind: 'Shift',
    state: 105,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 18,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 18,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 18,
  },
  GET: {
    kind: 'Reduce',
    rule: 18,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 18,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 18,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 18,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 19,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 19,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 19,
  },
  GET: {
    kind: 'Reduce',
    rule: 19,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 19,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 19,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 19,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 20,
  },
  GET: {
    kind: 'Reduce',
    rule: 20,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 20,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 20,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 20,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 21,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 21,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 21,
  },
  GET: {
    kind: 'Reduce',
    rule: 21,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 21,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 21,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 21,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 94,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 72,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 72,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 111,
  },
  COLON: {
    kind: 'Shift',
    state: 110,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 119,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 121,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 116,
  },
  LET: {
    kind: 'Reduce',
    rule: 116,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 116,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 116,
  },
  FOR: {
    kind: 'Reduce',
    rule: 116,
  },
  IF: {
    kind: 'Reduce',
    rule: 116,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 116,
  },
  THROW: {
    kind: 'Reduce',
    rule: 116,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 116,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 116,
  },
  GET: {
    kind: 'Reduce',
    rule: 116,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 116,
  },
  THIS: {
    kind: 'Reduce',
    rule: 116,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 116,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 116,
  },
  BANG: {
    kind: 'Reduce',
    rule: 116,
  },
  NEW: {
    kind: 'Reduce',
    rule: 116,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 116,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 116,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 116,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 116,
  },
  NULL: {
    kind: 'Reduce',
    rule: 116,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 116,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 116,
  },
  $: {
    kind: 'Reduce',
    rule: 116,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 116,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  REST: {
    kind: 'Shift',
    state: 98,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 60,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 60,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 63,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 63,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 63,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 63,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 63,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 63,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 63,
  },
  DOT: {
    kind: 'Reduce',
    rule: 63,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 63,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 63,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 63,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 63,
  },
  GET: {
    kind: 'Reduce',
    rule: 63,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 63,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 65,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 65,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 65,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 65,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 65,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 65,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 65,
  },
  DOT: {
    kind: 'Reduce',
    rule: 65,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 65,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 65,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 65,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 65,
  },
  GET: {
    kind: 'Reduce',
    rule: 65,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 65,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 138,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  AS: {
    kind: 'Shift',
    state: 64,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 36,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 36,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 36,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 36,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 36,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 36,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 36,
  },
  DOT: {
    kind: 'Reduce',
    rule: 36,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 36,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 36,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 36,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 36,
  },
  GET: {
    kind: 'Reduce',
    rule: 36,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 36,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  SEMICOLON: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 62,
  },
  GET: {
    kind: 'Reduce',
    rule: 62,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 62,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  SEMICOLON: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 64,
  },
  GET: {
    kind: 'Reduce',
    rule: 64,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 64,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  SEMICOLON: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 67,
  },
  GET: {
    kind: 'Reduce',
    rule: 67,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 67,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 139,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 140,
  },
  COMMA: {
    kind: 'Shift',
    state: 141,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 70,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 70,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 142,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 74,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 74,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 143,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 145,
  },
  COMMA: {
    kind: 'Shift',
    state: 146,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 56,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 56,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 56,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 57,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 57,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 57,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  LET: {
    kind: 'Shift',
    state: 149,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 126,
  },
  LET: {
    kind: 'Reduce',
    rule: 126,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 126,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 126,
  },
  FOR: {
    kind: 'Reduce',
    rule: 126,
  },
  IF: {
    kind: 'Reduce',
    rule: 126,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 126,
  },
  THROW: {
    kind: 'Reduce',
    rule: 126,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 126,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 126,
  },
  GET: {
    kind: 'Reduce',
    rule: 126,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 126,
  },
  THIS: {
    kind: 'Reduce',
    rule: 126,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 126,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 126,
  },
  BANG: {
    kind: 'Reduce',
    rule: 126,
  },
  NEW: {
    kind: 'Reduce',
    rule: 126,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 126,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 126,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 126,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 126,
  },
  NULL: {
    kind: 'Reduce',
    rule: 126,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 126,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 126,
  },
  $: {
    kind: 'Reduce',
    rule: 126,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 126,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 151,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 152,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 119,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 156,
  },
  COMMA: {
    kind: 'Shift',
    state: 157,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 23,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 23,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 158,
  },
  COMMA: {
    kind: 'Shift',
    state: 141,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 119,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 161,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 162,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 35,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 35,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 35,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 35,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 35,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 35,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 35,
  },
  DOT: {
    kind: 'Reduce',
    rule: 35,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 35,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 35,
  },
  LESS_THAN_OR_EQUAL: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 35,
  },
  GET: {
    kind: 'Reduce',
    rule: 35,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 35,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 88,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 88,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 88,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 88,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 88,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 88,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 88,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 88,
  },
  DOT: {
    kind: 'Reduce',
    rule: 88,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 88,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 88,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 88,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 88,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 88,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 88,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 88,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 88,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 88,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 88,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 88,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 88,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 88,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 88,
  },
  GET: {
    kind: 'Reduce',
    rule: 88,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 88,
  },
}, {
  LESS_THAN: {
    kind: 'Shift',
    state: 163,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 95,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 95,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 95,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 95,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 95,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 95,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 95,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 95,
  },
  DOT: {
    kind: 'Reduce',
    rule: 95,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 95,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 95,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 95,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 95,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 95,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 95,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 95,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 95,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 95,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 95,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 95,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 95,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 89,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 89,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 89,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 89,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 89,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 89,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 89,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 89,
  },
  DOT: {
    kind: 'Reduce',
    rule: 89,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 89,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 89,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 89,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 89,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 89,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 89,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 89,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 89,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 89,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 89,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 89,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 89,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 89,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 89,
  },
  GET: {
    kind: 'Reduce',
    rule: 89,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 89,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 96,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 96,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 96,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 96,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 96,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 96,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 96,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 96,
  },
  DOT: {
    kind: 'Reduce',
    rule: 96,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 96,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 96,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 96,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 96,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 96,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 96,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 96,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 96,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 96,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 96,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 96,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 96,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 96,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 90,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 90,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 90,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 90,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 90,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 90,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 90,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 90,
  },
  DOT: {
    kind: 'Reduce',
    rule: 90,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 90,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 90,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 90,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 90,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 90,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 90,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 90,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 90,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 90,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 90,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 90,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 90,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 90,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 90,
  },
  GET: {
    kind: 'Reduce',
    rule: 90,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 90,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 119,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 91,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 91,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 91,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 91,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 91,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 91,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 91,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 91,
  },
  DOT: {
    kind: 'Reduce',
    rule: 91,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 91,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 91,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 91,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 91,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 91,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 91,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 91,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 91,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 91,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 91,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 91,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 91,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 91,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 91,
  },
  GET: {
    kind: 'Reduce',
    rule: 91,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 91,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 169,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 104,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 99,
  },
  LET: {
    kind: 'Reduce',
    rule: 99,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 99,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 99,
  },
  FOR: {
    kind: 'Reduce',
    rule: 99,
  },
  IF: {
    kind: 'Reduce',
    rule: 99,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 99,
  },
  THROW: {
    kind: 'Reduce',
    rule: 99,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 99,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 99,
  },
  GET: {
    kind: 'Reduce',
    rule: 99,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 99,
  },
  THIS: {
    kind: 'Reduce',
    rule: 99,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 99,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 99,
  },
  BANG: {
    kind: 'Reduce',
    rule: 99,
  },
  NEW: {
    kind: 'Reduce',
    rule: 99,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 99,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 99,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 99,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 99,
  },
  NULL: {
    kind: 'Reduce',
    rule: 99,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 99,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 99,
  },
  $: {
    kind: 'Reduce',
    rule: 99,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 99,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 100,
  },
  LET: {
    kind: 'Reduce',
    rule: 100,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 100,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 100,
  },
  FOR: {
    kind: 'Reduce',
    rule: 100,
  },
  IF: {
    kind: 'Reduce',
    rule: 100,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 100,
  },
  THROW: {
    kind: 'Reduce',
    rule: 100,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 100,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 100,
  },
  GET: {
    kind: 'Reduce',
    rule: 100,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 100,
  },
  THIS: {
    kind: 'Reduce',
    rule: 100,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 100,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 100,
  },
  BANG: {
    kind: 'Reduce',
    rule: 100,
  },
  NEW: {
    kind: 'Reduce',
    rule: 100,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 100,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 100,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 100,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 100,
  },
  NULL: {
    kind: 'Reduce',
    rule: 100,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 100,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 100,
  },
  $: {
    kind: 'Reduce',
    rule: 100,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 100,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 43,
  },
  GET: {
    kind: 'Reduce',
    rule: 43,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 43,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 44,
  },
  GET: {
    kind: 'Reduce',
    rule: 44,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 44,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 173,
  },
  COMMA: {
    kind: 'Shift',
    state: 146,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 174,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 68,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 68,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 68,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 68,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 68,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 68,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 68,
  },
  DOT: {
    kind: 'Reduce',
    rule: 68,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 68,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 68,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 68,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 68,
  },
  GET: {
    kind: 'Reduce',
    rule: 68,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 68,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 45,
  },
  GET: {
    kind: 'Reduce',
    rule: 45,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 45,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 46,
  },
  GET: {
    kind: 'Reduce',
    rule: 46,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 46,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 47,
  },
  GET: {
    kind: 'Reduce',
    rule: 47,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 47,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 48,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 48,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 48,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 48,
  },
  GET: {
    kind: 'Reduce',
    rule: 48,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 48,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 49,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 49,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 49,
  },
  GET: {
    kind: 'Reduce',
    rule: 49,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 49,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 50,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 50,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
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
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 50,
  },
  GET: {
    kind: 'Reduce',
    rule: 50,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 50,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 51,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 51,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
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
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 51,
  },
  GET: {
    kind: 'Reduce',
    rule: 51,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 51,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 52,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 52,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 52,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 52,
  },
  GET: {
    kind: 'Reduce',
    rule: 52,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 52,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 53,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 53,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 53,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 53,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 53,
  },
  GET: {
    kind: 'Reduce',
    rule: 53,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 53,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 28,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 28,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 28,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 28,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 28,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 28,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 28,
  },
  DOT: {
    kind: 'Reduce',
    rule: 28,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 28,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 28,
  },
  LESS_THAN_OR_EQUAL: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 28,
  },
  GET: {
    kind: 'Reduce',
    rule: 28,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 28,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  REST: {
    kind: 'Shift',
    state: 98,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 60,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 60,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 69,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 69,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 69,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 69,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 69,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 69,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 69,
  },
  DOT: {
    kind: 'Reduce',
    rule: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 69,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 69,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 69,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 69,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 69,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 69,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 69,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 69,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 69,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 69,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 69,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 69,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 69,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 69,
  },
  GET: {
    kind: 'Reduce',
    rule: 69,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 69,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 94,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 179,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 82,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 82,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 82,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 82,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 82,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 82,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 82,
  },
  DOT: {
    kind: 'Reduce',
    rule: 82,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 82,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 82,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 82,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 82,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 82,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 82,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 82,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 82,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 82,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 82,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 82,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 82,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 82,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 82,
  },
  GET: {
    kind: 'Reduce',
    rule: 82,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 82,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  REST: {
    kind: 'Shift',
    state: 98,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 61,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 61,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 61,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 182,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 61,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 59,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 186,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 127,
  },
  LET: {
    kind: 'Reduce',
    rule: 127,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 127,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 127,
  },
  FOR: {
    kind: 'Reduce',
    rule: 127,
  },
  IF: {
    kind: 'Reduce',
    rule: 127,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 127,
  },
  THROW: {
    kind: 'Reduce',
    rule: 127,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 127,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 127,
  },
  GET: {
    kind: 'Reduce',
    rule: 127,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 127,
  },
  THIS: {
    kind: 'Reduce',
    rule: 127,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 127,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 127,
  },
  BANG: {
    kind: 'Reduce',
    rule: 127,
  },
  NEW: {
    kind: 'Reduce',
    rule: 127,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 127,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 127,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 127,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 127,
  },
  NULL: {
    kind: 'Reduce',
    rule: 127,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 127,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 127,
  },
  $: {
    kind: 'Reduce',
    rule: 127,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 127,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 125,
  },
  LET: {
    kind: 'Reduce',
    rule: 125,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 125,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 125,
  },
  FOR: {
    kind: 'Reduce',
    rule: 125,
  },
  IF: {
    kind: 'Reduce',
    rule: 125,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 125,
  },
  THROW: {
    kind: 'Reduce',
    rule: 125,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 125,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 125,
  },
  GET: {
    kind: 'Reduce',
    rule: 125,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 125,
  },
  THIS: {
    kind: 'Reduce',
    rule: 125,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 125,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 125,
  },
  BANG: {
    kind: 'Reduce',
    rule: 125,
  },
  NEW: {
    kind: 'Reduce',
    rule: 125,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 125,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 125,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 125,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 125,
  },
  NULL: {
    kind: 'Reduce',
    rule: 125,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 125,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 125,
  },
  $: {
    kind: 'Reduce',
    rule: 125,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 125,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 187,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 188,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 162,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 189,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 22,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 22,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 22,
  },
  GET: {
    kind: 'Reduce',
    rule: 22,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 22,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 22,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 22,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 25,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 25,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 25,
  },
  GET: {
    kind: 'Reduce',
    rule: 25,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 25,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 25,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 25,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 191,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 162,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 192,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 17,
  },
  LET: {
    kind: 'Reduce',
    rule: 17,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 17,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 17,
  },
  FOR: {
    kind: 'Reduce',
    rule: 17,
  },
  IF: {
    kind: 'Reduce',
    rule: 17,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 17,
  },
  THROW: {
    kind: 'Reduce',
    rule: 17,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 17,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 17,
  },
  GET: {
    kind: 'Reduce',
    rule: 17,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 17,
  },
  THIS: {
    kind: 'Reduce',
    rule: 17,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 17,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 17,
  },
  BANG: {
    kind: 'Reduce',
    rule: 17,
  },
  NEW: {
    kind: 'Reduce',
    rule: 17,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 17,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 17,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 17,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 17,
  },
  NULL: {
    kind: 'Reduce',
    rule: 17,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 17,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 17,
  },
  $: {
    kind: 'Reduce',
    rule: 17,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 17,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 119,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 119,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 195,
  },
  COMMA: {
    kind: 'Shift',
    state: 196,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 162,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 93,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 93,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 93,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 197,
  },
  GET: {
    kind: 'Shift',
    state: 169,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 102,
  },
  GET: {
    kind: 'Reduce',
    rule: 102,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 102,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 105,
  },
  GET: {
    kind: 'Reduce',
    rule: 105,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 105,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 27,
  },
  COLON: {
    kind: 'Reduce',
    rule: 27,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 106,
  },
  GET: {
    kind: 'Reduce',
    rule: 106,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 106,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 201,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 200,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 107,
  },
  GET: {
    kind: 'Reduce',
    rule: 107,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 107,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 55,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 55,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 55,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 55,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 55,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 55,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 55,
  },
  DOT: {
    kind: 'Reduce',
    rule: 55,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 55,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 55,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 55,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 55,
  },
  GET: {
    kind: 'Reduce',
    rule: 55,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 55,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 66,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 66,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 66,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 66,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 66,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 66,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 66,
  },
  DOT: {
    kind: 'Reduce',
    rule: 66,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 66,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 66,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 66,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 66,
  },
  GET: {
    kind: 'Reduce',
    rule: 66,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 66,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 202,
  },
  COMMA: {
    kind: 'Shift',
    state: 146,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 71,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 71,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 73,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 73,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 75,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 75,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 203,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 58,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 58,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 58,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 59,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 59,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 59,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 61,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 59,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 118,
  },
}, {
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 119,
  },
  GET: {
    kind: 'Reduce',
    rule: 119,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 119,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 119,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 119,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 206,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 122,
  },
  GET: {
    kind: 'Reduce',
    rule: 122,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 122,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 122,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 122,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 207,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 208,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
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
  FOR: {
    kind: 'Reduce',
    rule: 14,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 14,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 14,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 14,
  },
  BANG: {
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
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 24,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 24,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 16,
  },
  LET: {
    kind: 'Reduce',
    rule: 16,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 16,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 16,
  },
  FOR: {
    kind: 'Reduce',
    rule: 16,
  },
  IF: {
    kind: 'Reduce',
    rule: 16,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 16,
  },
  THROW: {
    kind: 'Reduce',
    rule: 16,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 16,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 16,
  },
  GET: {
    kind: 'Reduce',
    rule: 16,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 16,
  },
  THIS: {
    kind: 'Reduce',
    rule: 16,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 16,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 16,
  },
  BANG: {
    kind: 'Reduce',
    rule: 16,
  },
  NEW: {
    kind: 'Reduce',
    rule: 16,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 16,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 16,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 16,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 16,
  },
  NULL: {
    kind: 'Reduce',
    rule: 16,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 16,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 16,
  },
  $: {
    kind: 'Reduce',
    rule: 16,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 16,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 98,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 98,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 98,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 98,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 98,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 98,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 98,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 98,
  },
  DOT: {
    kind: 'Reduce',
    rule: 98,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 98,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 98,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 98,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 98,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 98,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 98,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 98,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 98,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 98,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 98,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 98,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 98,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 98,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 98,
  },
  GET: {
    kind: 'Reduce',
    rule: 98,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 98,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 196,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 211,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 97,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 97,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 97,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 97,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 97,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 97,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 97,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 97,
  },
  DOT: {
    kind: 'Reduce',
    rule: 97,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 97,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 97,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 97,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 97,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 97,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 97,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 97,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 97,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 97,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 97,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 97,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 97,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 97,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 97,
  },
  GET: {
    kind: 'Reduce',
    rule: 97,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 97,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 117,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 119,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 101,
  },
  LET: {
    kind: 'Reduce',
    rule: 101,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 101,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 101,
  },
  FOR: {
    kind: 'Reduce',
    rule: 101,
  },
  IF: {
    kind: 'Reduce',
    rule: 101,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 101,
  },
  THROW: {
    kind: 'Reduce',
    rule: 101,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 101,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 101,
  },
  GET: {
    kind: 'Reduce',
    rule: 101,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 101,
  },
  THIS: {
    kind: 'Reduce',
    rule: 101,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 101,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 101,
  },
  BANG: {
    kind: 'Reduce',
    rule: 101,
  },
  NEW: {
    kind: 'Reduce',
    rule: 101,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 101,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 101,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 101,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 101,
  },
  NULL: {
    kind: 'Reduce',
    rule: 101,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 101,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 101,
  },
  $: {
    kind: 'Reduce',
    rule: 101,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 101,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 103,
  },
  GET: {
    kind: 'Reduce',
    rule: 103,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 103,
  },
}, {
  OPENING_PAREN: {
    kind: 'Shift',
    state: 213,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 112,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 112,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 54,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 54,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 54,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 54,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 54,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 54,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 54,
  },
  DOT: {
    kind: 'Reduce',
    rule: 54,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 54,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 54,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 54,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 54,
  },
  GET: {
    kind: 'Reduce',
    rule: 54,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 54,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 219,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 120,
  },
  GET: {
    kind: 'Reduce',
    rule: 120,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 120,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 120,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 120,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 223,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 224,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 92,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 92,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 92,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 92,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 92,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 92,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 92,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 92,
  },
  DOT: {
    kind: 'Reduce',
    rule: 92,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 92,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 92,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 92,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 92,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 92,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 92,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 92,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 92,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 92,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 92,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 92,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 92,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 92,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 162,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 94,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 94,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 94,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 225,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 226,
  },
  COMMA: {
    kind: 'Shift',
    state: 227,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 110,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 110,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 228,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 113,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 113,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 229,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 76,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 76,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 121,
  },
  GET: {
    kind: 'Reduce',
    rule: 121,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 121,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 121,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 231,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 232,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
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
  FOR: {
    kind: 'Reduce',
    rule: 13,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 13,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 13,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 13,
  },
  BANG: {
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
  FOR: {
    kind: 'Reduce',
    rule: 15,
  },
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 15,
  },
  GET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 15,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 15,
  },
  BANG: {
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
  OPENING_BRACE: {
    kind: 'Shift',
    state: 233,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 234,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 115,
  },
  GET: {
    kind: 'Reduce',
    rule: 115,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 115,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 237,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 71,
  },
  DOT: {
    kind: 'Shift',
    state: 74,
  },
  EQUALS: {
    kind: 'Shift',
    state: 82,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 69,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 75,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 72,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 77,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 79,
  },
  MINUS: {
    kind: 'Shift',
    state: 80,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 73,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 70,
  },
  PLUS: {
    kind: 'Shift',
    state: 81,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 83,
  },
}, {
  ELSE: {
    kind: 'Shift',
    state: 238,
  },
  CONST: {
    kind: 'Reduce',
    rule: 124,
  },
  LET: {
    kind: 'Reduce',
    rule: 124,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 124,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 124,
  },
  FOR: {
    kind: 'Reduce',
    rule: 124,
  },
  IF: {
    kind: 'Reduce',
    rule: 124,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 124,
  },
  THROW: {
    kind: 'Reduce',
    rule: 124,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 124,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 124,
  },
  GET: {
    kind: 'Reduce',
    rule: 124,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 124,
  },
  THIS: {
    kind: 'Reduce',
    rule: 124,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 124,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 124,
  },
  BANG: {
    kind: 'Reduce',
    rule: 124,
  },
  NEW: {
    kind: 'Reduce',
    rule: 124,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 124,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 124,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 124,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 124,
  },
  NULL: {
    kind: 'Reduce',
    rule: 124,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 124,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 124,
  },
  $: {
    kind: 'Reduce',
    rule: 124,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 124,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 128,
  },
  LET: {
    kind: 'Reduce',
    rule: 128,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 128,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 128,
  },
  FOR: {
    kind: 'Reduce',
    rule: 128,
  },
  IF: {
    kind: 'Reduce',
    rule: 128,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 128,
  },
  THROW: {
    kind: 'Reduce',
    rule: 128,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 128,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 128,
  },
  GET: {
    kind: 'Reduce',
    rule: 128,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 128,
  },
  THIS: {
    kind: 'Reduce',
    rule: 128,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 128,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 128,
  },
  BANG: {
    kind: 'Reduce',
    rule: 128,
  },
  NEW: {
    kind: 'Reduce',
    rule: 128,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 128,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 128,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 128,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 128,
  },
  NULL: {
    kind: 'Reduce',
    rule: 128,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 128,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 128,
  },
  $: {
    kind: 'Reduce',
    rule: 128,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 128,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 111,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 111,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 114,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 114,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 241,
  },
}, {
  IF: {
    kind: 'Shift',
    state: 47,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 243,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 244,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 123,
  },
  LET: {
    kind: 'Reduce',
    rule: 123,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 123,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 123,
  },
  FOR: {
    kind: 'Reduce',
    rule: 123,
  },
  IF: {
    kind: 'Reduce',
    rule: 123,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 123,
  },
  THROW: {
    kind: 'Reduce',
    rule: 123,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 123,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 123,
  },
  GET: {
    kind: 'Reduce',
    rule: 123,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 123,
  },
  THIS: {
    kind: 'Reduce',
    rule: 123,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 123,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 123,
  },
  BANG: {
    kind: 'Reduce',
    rule: 123,
  },
  NEW: {
    kind: 'Reduce',
    rule: 123,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 123,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 123,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 123,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 123,
  },
  NULL: {
    kind: 'Reduce',
    rule: 123,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 123,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 123,
  },
  $: {
    kind: 'Reduce',
    rule: 123,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 123,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 108,
  },
  GET: {
    kind: 'Reduce',
    rule: 108,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 108,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 109,
  },
  GET: {
    kind: 'Reduce',
    rule: 109,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 109,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 26,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 246,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 21,
  },
  EXPORT: {
    kind: 'Shift',
    state: 12,
  },
  FALSE: {
    kind: 'Shift',
    state: 36,
  },
  FOR: {
    kind: 'Shift',
    state: 45,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  IF: {
    kind: 'Shift',
    state: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 23,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 29,
  },
  NULL: {
    kind: 'Shift',
    state: 39,
  },
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 15,
  },
  RETURN: {
    kind: 'Shift',
    state: 49,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 43,
  },
  THIS: {
    kind: 'Shift',
    state: 16,
  },
  THROW: {
    kind: 'Shift',
    state: 51,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 53,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 117,
  },
  LET: {
    kind: 'Reduce',
    rule: 117,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 117,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 117,
  },
  FOR: {
    kind: 'Reduce',
    rule: 117,
  },
  IF: {
    kind: 'Reduce',
    rule: 117,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 117,
  },
  THROW: {
    kind: 'Reduce',
    rule: 117,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 117,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 117,
  },
  GET: {
    kind: 'Reduce',
    rule: 117,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 117,
  },
  THIS: {
    kind: 'Reduce',
    rule: 117,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 117,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 117,
  },
  BANG: {
    kind: 'Reduce',
    rule: 117,
  },
  NEW: {
    kind: 'Reduce',
    rule: 117,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 117,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 117,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 117,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 117,
  },
  NULL: {
    kind: 'Reduce',
    rule: 117,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 117,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 117,
  },
  $: {
    kind: 'Reduce',
    rule: 117,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 117,
  },
}];
const gotos: Array<Gotos> = [
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 2,
    StatementList: 1,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 54,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {},
  {},
  {
    ArrayPattern: 58,
    Id: 55,
    Identifier: 56,
    ObjectPattern: 60,
    Pattern: 57,
  },
  {
    ArrayPattern: 58,
    Id: 62,
    Identifier: 56,
    ObjectPattern: 60,
    Pattern: 57,
  },
  {},
  {},
  {},
  {},
  {
    Identifier: 65,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 84,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 86,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 87,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 88,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 89,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {
    Identifier: 92,
    NumberValue: 93,
    ObjectProperty: 91,
    ObjectPropertyList: 90,
  },
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 96,
    ExpressionList: 95,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 97,
    StringValue: 42,
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
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 102,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 103,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    Identifier: 108,
    IdentifierList: 107,
  },
  {},
  {
    Identifier: 92,
    NumberValue: 93,
    ObjectProperty: 91,
    ObjectPropertyList: 109,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 112,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    GenericType: 114,
    Identifier: 115,
    NamedType: 116,
    TupleType: 118,
    Type: 113,
    UnionType: 120,
  },
  {},
  {
    ClassDeclaration: 123,
    Declaration: 122,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 124,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 125,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 96,
    ExpressionList: 126,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 97,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 127,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    Identifier: 128,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 129,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 130,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 131,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 132,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 133,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 134,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 135,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 136,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 137,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
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
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 144,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 147,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    VariableDeclaration: 148,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 150,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 153,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    GenericType: 114,
    Identifier: 115,
    NamedType: 116,
    TupleType: 118,
    Type: 154,
    UnionType: 120,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 155,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {},
  {
    GenericType: 114,
    Identifier: 115,
    NamedType: 116,
    TupleType: 118,
    Type: 159,
    UnionType: 120,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 160,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    GenericType: 114,
    Identifier: 115,
    NamedType: 116,
    TupleType: 118,
    Type: 165,
    TypeList: 164,
    UnionType: 120,
  },
  {},
  {
    ClassBodyList: 166,
    ClassBodyListItem: 167,
    GetAccessor: 168,
    Identifier: 171,
    MethodDefinition: 170,
    PropertyDeclaration: 172,
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
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 96,
    ExpressionList: 175,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 97,
    StringValue: 42,
  },
  {},
  {
    Identifier: 92,
    NumberValue: 93,
    ObjectProperty: 176,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 177,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 178,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 180,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 181,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayPattern: 58,
    Id: 185,
    Identifier: 56,
    ObjectPattern: 60,
    Pattern: 57,
    VariableDeclarator: 184,
    VariableDeclaratorList: 183,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    Identifier: 190,
  },
  {},
  {},
  {},
  {},
  {
    GenericType: 114,
    Identifier: 115,
    NamedType: 116,
    TupleType: 118,
    Type: 193,
    UnionType: 120,
  },
  {
    GenericType: 114,
    Identifier: 115,
    NamedType: 116,
    TupleType: 118,
    Type: 165,
    TypeList: 194,
    UnionType: 120,
  },
  {},
  {},
  {
    ClassBodyListItem: 198,
    GetAccessor: 168,
    Identifier: 171,
    MethodDefinition: 170,
    PropertyDeclaration: 172,
  },
  {},
  {},
  {
    Identifier: 199,
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
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 204,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayPattern: 58,
    Id: 185,
    Identifier: 56,
    ObjectPattern: 60,
    Pattern: 57,
    VariableDeclarator: 205,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 209,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 210,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {},
  {},
  {
    GenericType: 114,
    Identifier: 115,
    NamedType: 116,
    TupleType: 118,
    Type: 212,
    UnionType: 120,
  },
  {},
  {},
  {},
  {
    Argument: 215,
    ArgumentList: 214,
    Identifier: 216,
  },
  {
    Identifier: 217,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 218,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 220,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 2,
    StatementList: 221,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 2,
    StatementList: 222,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
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
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 230,
    Identifier: 85,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    StringValue: 42,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 54,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 54,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {},
  {},
  {},
  {},
  {
    Argument: 235,
    Identifier: 216,
  },
  {
    Identifier: 236,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 2,
    StatementList: 239,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 2,
    StatementList: 240,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {},
  {},
  {},
  {
    IfStatement: 242,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 54,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 54,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 2,
    StatementList: 245,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {},
  {},
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    ForStatement: 44,
    Identifier: 6,
    IfStatement: 46,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 48,
    Statement: 54,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
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
  production: 'Statement',
  pop: 1,
  action: r11,
}, {
  production: 'Statement',
  pop: 1,
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
  pop: 7,
  action: r15,
}, {
  production: 'AssignmentStatement',
  pop: 5,
  action: r16,
}, {
  production: 'AssignmentStatement',
  pop: 4,
  action: r17,
}, {
  production: 'Id',
  pop: 1,
  action: r18,
}, {
  production: 'Id',
  pop: 1,
  action: r19,
}, {
  production: 'Pattern',
  pop: 1,
  action: r20,
}, {
  production: 'Pattern',
  pop: 1,
  action: r21,
}, {
  production: 'ArrayPattern',
  pop: 3,
  action: r22,
}, {
  production: 'IdentifierList',
  pop: 1,
  action: r23,
}, {
  production: 'IdentifierList',
  pop: 3,
  action: r24,
}, {
  production: 'ObjectPattern',
  pop: 3,
  action: r25,
}, {
  production: 'Identifier',
  pop: 1,
  action: r26,
}, {
  production: 'Identifier',
  pop: 1,
  action: r27,
}, {
  production: 'Expression',
  pop: 3,
  action: r28,
}, {
  production: 'Expression',
  pop: 1,
  action: r29,
}, {
  production: 'Expression',
  pop: 1,
  action: r30,
}, {
  production: 'Expression',
  pop: 1,
  action: r31,
}, {
  production: 'Expression',
  pop: 1,
  action: r32,
}, {
  production: 'Expression',
  pop: 1,
  action: r33,
}, {
  production: 'Expression',
  pop: 1,
  action: r34,
}, {
  production: 'Expression',
  pop: 3,
  action: r35,
}, {
  production: 'Expression',
  pop: 1,
  action: r36,
}, {
  production: 'Expression',
  pop: 1,
  action: r37,
}, {
  production: 'Expression',
  pop: 1,
  action: r38,
}, {
  production: 'Expression',
  pop: 1,
  action: r39,
}, {
  production: 'Expression',
  pop: 1,
  action: r40,
}, {
  production: 'Expression',
  pop: 1,
  action: r41,
}, {
  production: 'Expression',
  pop: 1,
  action: r42,
}, {
  production: 'AssignmentExpression',
  pop: 3,
  action: r43,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r44,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r45,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r46,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r47,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r48,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r49,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r50,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r51,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r52,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r53,
}, {
  production: 'NewExpression',
  pop: 5,
  action: r54,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r55,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r56,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r57,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r58,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r59,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r60,
}, {
  production: 'SpreadElement',
  pop: 2,
  action: r61,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r62,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r63,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r64,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r65,
}, {
  production: 'IndexExpression',
  pop: 4,
  action: r66,
}, {
  production: 'LogicalNotExpression',
  pop: 2,
  action: r67,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r68,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r69,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r70,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r71,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r72,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r73,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r74,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r75,
}, {
  production: 'ObjectProperty',
  pop: 5,
  action: r76,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r77,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r78,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r79,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r80,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r81,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r82,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r83,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r84,
}, {
  production: 'NullValue',
  pop: 1,
  action: r85,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r86,
}, {
  production: 'StringValue',
  pop: 1,
  action: r87,
}, {
  production: 'Type',
  pop: 1,
  action: r88,
}, {
  production: 'Type',
  pop: 1,
  action: r89,
}, {
  production: 'Type',
  pop: 1,
  action: r90,
}, {
  production: 'Type',
  pop: 1,
  action: r91,
}, {
  production: 'GenericType',
  pop: 4,
  action: r92,
}, {
  production: 'TypeList',
  pop: 1,
  action: r93,
}, {
  production: 'TypeList',
  pop: 3,
  action: r94,
}, {
  production: 'NamedType',
  pop: 1,
  action: r95,
}, {
  production: 'NamedType',
  pop: 1,
  action: r96,
}, {
  production: 'TupleType',
  pop: 3,
  action: r97,
}, {
  production: 'UnionType',
  pop: 3,
  action: r98,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r99,
}, {
  production: 'Declaration',
  pop: 1,
  action: r100,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r101,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r102,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r103,
}, {
  production: 'ClassBodyList',
  pop: 0,
  action: r104,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r105,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r106,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r107,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r108,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r109,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r110,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r111,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r112,
}, {
  production: 'Argument',
  pop: 1,
  action: r113,
}, {
  production: 'Argument',
  pop: 3,
  action: r114,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r115,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r116,
}, {
  production: 'ForStatement',
  pop: 11,
  action: r117,
}, {
  production: 'VariableDeclaration',
  pop: 2,
  action: r118,
}, {
  production: 'VariableDeclaratorList',
  pop: 1,
  action: r119,
}, {
  production: 'VariableDeclaratorList',
  pop: 2,
  action: r120,
}, {
  production: 'VariableDeclarator',
  pop: 3,
  action: r121,
}, {
  production: 'VariableDeclarator',
  pop: 1,
  action: r122,
}, {
  production: 'IfStatement',
  pop: 9,
  action: r123,
}, {
  production: 'IfStatement',
  pop: 7,
  action: r124,
}, {
  production: 'ThrowStatement',
  pop: 3,
  action: r125,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r126,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r127,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r128,
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
    } else if (action.kind === 'Accept') {
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
