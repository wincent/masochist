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
  NonNullExpression,
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
function r29($1: Expression): Expression {
  return {
    kind: 'NonNullExpression',
    expression: $1,
  };
}
function r30(): Expression {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r31($1: AssignmentExpression): Expression {
  return $1;
}
function r32($1: BinaryExpression): Expression {
  return $1;
}
function r33($1: CallExpression): Expression {
  return $1;
}
function r34($1: DecrementExpression): Expression {
  return $1;
}
function r35($1: IncrementExpression): Expression {
  return $1;
}
function r36($1: Identifier, _$2: Token, $3: Type): Expression {
  return {
    ...$1,
    cast: $3,
  };
}
function r37($1: Identifier): Expression {
  return $1;
}
function r38($1: IndexExpression): Expression {
  return $1;
}
function r39($1: LogicalNotExpression): Expression {
  return $1;
}
function r40($1: MemberExpression): Expression {
  return $1;
}
function r41($1: NewExpression): Expression {
  return $1;
}
function r42($1: ObjectValue): Expression {
  return $1;
}
function r43($1: PrimitiveValue): Expression {
  return $1;
}
function r44($1: Expression, _$2: Token, $3: Expression): AssignmentExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r45($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>',
    rhs: $3,
  };
}
function r46($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>=',
    rhs: $3,
  };
}
function r47($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<',
    rhs: $3,
  };
}
function r48($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<=',
    rhs: $3,
  };
}
function r49($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r50($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r51($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r52($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r53($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r54($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r55(
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
function r56($1: Expression, _$2: Token, $3: ExpressionList): CallExpression {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r57($1: Expression): ExpressionList {
  return [$1];
}
function r58($1: SpreadElement): ExpressionList {
  return [$1];
}
function r59($1: ExpressionList, _$2: Token, $3: Expression): ExpressionList {
  $1.push($3);
  return $1;
}
function r60(
  $1: ExpressionList,
  _$2: Token,
  $3: SpreadElement,
): ExpressionList {
  $1.push($3);
  return $1;
}
function r61(): ExpressionList {
  return [];
}
function r62(_$1: Token, $2: Expression): SpreadElement {
  return {
    kind: 'SpreadElement',
    expression: $2,
  };
}
function r63(_$1: Token, $2: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r64($1: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r65(_$1: Token, $2: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r66($1: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r67($1: Expression, _$2: Token, $3: Expression): IndexExpression {
  return {
    kind: 'IndexExpression',
    index: $3,
    indexee: $1,
  };
}
function r68(_$1: Token, $2: Expression): LogicalNotExpression {
  return {
    kind: 'LogicalNotExpression',
    operand: $2,
  };
}
function r69($1: Expression, _$2: Token, $3: Identifier): MemberExpression {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r70(_$1: Token, $2: ObjectPropertyList): ObjectValue {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r71($1: ObjectProperty): ObjectPropertyList {
  return [$1];
}
function r72(
  $1: ObjectPropertyList,
  _$2: Token,
  $3: ObjectProperty,
): ObjectPropertyList {
  $1.push($3);
  return $1;
}
function r73(): ObjectPropertyList {
  return [];
}
function r74($1: Identifier, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r75($1: Identifier): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r76($1: NumberValue, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r77(
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
function r78($1: ArrayValue): PrimitiveValue {
  return $1;
}
function r79($1: BooleanValue): PrimitiveValue {
  return $1;
}
function r80($1: NullValue): PrimitiveValue {
  return $1;
}
function r81($1: NumberValue): PrimitiveValue {
  return $1;
}
function r82($1: StringValue): PrimitiveValue {
  return $1;
}
function r83(_$1: Token, $2: ExpressionList): ArrayValue {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r84(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r85(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r86(): NullValue {
  return {
    kind: 'NullValue',
  };
}
function r87($1: Token): NumberValue {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r88($1: Token): StringValue {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r89($1: GenericType): Type {
  return $1;
}
function r90($1: NamedType): Type {
  return $1;
}
function r91($1: TupleType): Type {
  return $1;
}
function r92($1: UnionType): Type {
  return $1;
}
function r93($1: Identifier, _$2: Token, $3: TypeList): GenericType {
  return {
    kind: 'GenericType',
    name: $1.name,
    parameters: $3,
  };
}
function r94($1: Type): TypeList {
  return [$1];
}
function r95($1: TypeList, _$2: Token, $3: Type): TypeList {
  $1.push($3);
  return $1;
}
function r96($1: Identifier): NamedType {
  return {
    kind: 'NamedType',
    name: $1.name,
  };
}
function r97($1: Token): NamedType {
  return {
    kind: 'NamedType',
    name: $1.contents,
  };
}
function r98(_$1: Token, $2: TypeList): TupleType {
  return {
    kind: 'TupleType',
    elements: $2,
  };
}
function r99($1: Type, _$2: Token, $3: Type): UnionType {
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
function r100(
  _$1: Token,
  _$2: Token,
  $3: Declaration,
): ExportDefaultDeclaration {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r101($1: ClassDeclaration): Declaration {
  return $1;
}
function r102(
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
function r103($1: ClassBodyListItem): ClassBodyList {
  return [$1];
}
function r104($1: ClassBodyList, $2: ClassBodyListItem): ClassBodyList {
  $1.push($2);
  return $1;
}
function r105(): ClassBodyList {
  return [];
}
function r106($1: GetAccessor): ClassBodyListItem {
  return $1;
}
function r107($1: MethodDefinition): ClassBodyListItem {
  return $1;
}
function r108($1: PropertyDeclaration): ClassBodyListItem {
  return $1;
}
function r109(
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
function r110(
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
function r111($1: Argument): ArgumentList {
  return [$1];
}
function r112($1: ArgumentList, _$2: Token, $3: Argument): ArgumentList {
  $1.push($3);
  return $1;
}
function r113(): ArgumentList {
  return [];
}
function r114($1: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r115($1: Identifier, _$2: Token, $3: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r116($1: Identifier, _$2: Token, $3: Identifier): PropertyDeclaration {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r117($1: Expression): ExpressionStatement {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r118(
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
function r119(_$1: Token, $2: VariableDeclaratorList): VariableDeclaration {
  return {
    kind: 'VariableDeclaration',
    binding: 'let',
    declarators: $2,
  };
}
function r120($1: VariableDeclarator): VariableDeclaratorList {
  return [$1];
}
function r121(
  $1: VariableDeclaratorList,
  $2: VariableDeclarator,
): VariableDeclaratorList {
  $1.push($2);
  return $1;
}
function r122($1: Id, _$2: Token, $3: Expression): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: $3,
  };
}
function r123($1: Id): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: null,
  };
}
function r124(
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
function r125(
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
function r126(_$1: Token, $2: Expression): ThrowStatement {
  return {
    kind: 'ThrowStatement',
    expression: $2,
  };
}
function r127(): ReturnStatement {
  return {
    kind: 'ReturnStatement',
  };
}
function r128(_$1: Token, $2: Expression): ReturnStatement {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r129(
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
    rule: 37,
  },
  BANG: {
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
  BANG: {
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
  BANG: {
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 67,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
    rule: 30,
  },
  BANG: {
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
  BANG: {
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
  BANG: {
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
  BANG: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 34,
  },
  BANG: {
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
    rule: 35,
  },
  BANG: {
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
    rule: 38,
  },
  BANG: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 39,
  },
  BANG: {
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
    rule: 40,
  },
  BANG: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 41,
  },
  BANG: {
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
    rule: 42,
  },
  BANG: {
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
    state: 95,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 43,
  },
  BANG: {
    kind: 'Reduce',
    rule: 43,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 43,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 43,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 43,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 43,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 43,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 43,
  },
  DOT: {
    kind: 'Reduce',
    rule: 43,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 43,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 43,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 43,
  },
  LOGICAL_AND: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 78,
  },
  BANG: {
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
    state: 99,
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
    rule: 61,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 61,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 79,
  },
  BANG: {
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
    rule: 84,
  },
  BANG: {
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
    rule: 85,
  },
  BANG: {
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
  BANG: {
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
  BANG: {
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 81,
  },
  BANG: {
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
  BANG: {
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
  COLON: {
    kind: 'Reduce',
    rule: 87,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 82,
  },
  BANG: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 88,
  },
  BANG: {
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
    state: 100,
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
    state: 101,
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
    state: 102,
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
    state: 105,
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
    state: 107,
  },
  COLON: {
    kind: 'Shift',
    state: 106,
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
    state: 95,
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
    state: 112,
  },
  COLON: {
    kind: 'Shift',
    state: 111,
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
    state: 118,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 120,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 122,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 10,
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 29,
  },
  BANG: {
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
    state: 99,
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
    rule: 61,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 61,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 64,
  },
  BANG: {
    kind: 'Reduce',
    rule: 64,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 64,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 64,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 64,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 64,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 64,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 64,
  },
  DOT: {
    kind: 'Reduce',
    rule: 64,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 64,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 64,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 64,
  },
  LOGICAL_AND: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 66,
  },
  BANG: {
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 139,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  AS: {
    kind: 'Shift',
    state: 64,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 37,
  },
  BANG: {
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
  SEMICOLON: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
  SEMICOLON: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
  SEMICOLON: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
  SEMICOLON: {
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 140,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 141,
  },
  COMMA: {
    kind: 'Shift',
    state: 142,
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
  COLON: {
    kind: 'Shift',
    state: 143,
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
    state: 144,
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
    state: 146,
  },
  COMMA: {
    kind: 'Shift',
    state: 147,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
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
    state: 150,
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 152,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 153,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
    state: 118,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 120,
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
    state: 157,
  },
  COMMA: {
    kind: 'Shift',
    state: 158,
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
    state: 159,
  },
  COMMA: {
    kind: 'Shift',
    state: 142,
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
    state: 118,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 120,
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 162,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 163,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 36,
  },
  BANG: {
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
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 89,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 89,
  },
  BANG: {
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
  LESS_THAN: {
    kind: 'Shift',
    state: 164,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 96,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 96,
  },
  BANG: {
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
  BANG: {
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
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 97,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 97,
  },
  BANG: {
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
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 91,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 91,
  },
  BANG: {
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
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  NULL: {
    kind: 'Shift',
    state: 118,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 120,
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
  BANG: {
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
  GET: {
    kind: 'Shift',
    state: 170,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 105,
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 174,
  },
  COMMA: {
    kind: 'Shift',
    state: 147,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 175,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 69,
  },
  BANG: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 49,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 49,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 50,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 51,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
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
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
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
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 52,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
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
    kind: 'Reduce',
    rule: 52,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
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
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 53,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
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
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 54,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 54,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
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
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 28,
  },
  BANG: {
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
    state: 99,
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
    rule: 61,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 61,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 70,
  },
  BANG: {
    kind: 'Reduce',
    rule: 70,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 70,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 70,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 70,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 70,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 70,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 70,
  },
  DOT: {
    kind: 'Reduce',
    rule: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 70,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 70,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 70,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 70,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 70,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 70,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 70,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 70,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 70,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 70,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 70,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 70,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 70,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 70,
  },
  GET: {
    kind: 'Reduce',
    rule: 70,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 70,
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
    state: 95,
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 180,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 83,
  },
  BANG: {
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
    state: 99,
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 62,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 62,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 62,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 183,
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 187,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 188,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 189,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 163,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 190,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
    state: 192,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 163,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 193,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
    state: 118,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 120,
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
    state: 118,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 120,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 196,
  },
  COMMA: {
    kind: 'Shift',
    state: 197,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 163,
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
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 198,
  },
  GET: {
    kind: 'Shift',
    state: 170,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
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
  COLON: {
    kind: 'Shift',
    state: 202,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 201,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 56,
  },
  BANG: {
    kind: 'Reduce',
    rule: 56,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 56,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 56,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 56,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 56,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 56,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 56,
  },
  DOT: {
    kind: 'Reduce',
    rule: 56,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 56,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 56,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 56,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 56,
  },
  GET: {
    kind: 'Reduce',
    rule: 56,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 56,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 67,
  },
  BANG: {
    kind: 'Reduce',
    rule: 67,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 67,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 67,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 67,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 67,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 67,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 67,
  },
  DOT: {
    kind: 'Reduce',
    rule: 67,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 67,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 67,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 67,
  },
  LOGICAL_AND: {
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
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 203,
  },
  COMMA: {
    kind: 'Shift',
    state: 147,
  },
}, {
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
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
  COLON: {
    kind: 'Shift',
    state: 204,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
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
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 60,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 60,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 60,
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
    rule: 119,
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
  ASSIGN: {
    kind: 'Shift',
    state: 207,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 123,
  },
  GET: {
    kind: 'Reduce',
    rule: 123,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 123,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 123,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 123,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 208,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 209,
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
    rule: 99,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 99,
  },
  BANG: {
    kind: 'Reduce',
    rule: 99,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 99,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 99,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 99,
  },
  DOT: {
    kind: 'Reduce',
    rule: 99,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 99,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 99,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 99,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 99,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 99,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 99,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 99,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 99,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 99,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 99,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 99,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 99,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 99,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 197,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 212,
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
  BANG: {
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
    state: 118,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 120,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 102,
  },
  LET: {
    kind: 'Reduce',
    rule: 102,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 102,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 102,
  },
  FOR: {
    kind: 'Reduce',
    rule: 102,
  },
  IF: {
    kind: 'Reduce',
    rule: 102,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 102,
  },
  THROW: {
    kind: 'Reduce',
    rule: 102,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 102,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 102,
  },
  GET: {
    kind: 'Reduce',
    rule: 102,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 102,
  },
  THIS: {
    kind: 'Reduce',
    rule: 102,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 102,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 102,
  },
  BANG: {
    kind: 'Reduce',
    rule: 102,
  },
  NEW: {
    kind: 'Reduce',
    rule: 102,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 102,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 102,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 102,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 102,
  },
  NULL: {
    kind: 'Reduce',
    rule: 102,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 102,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 102,
  },
  $: {
    kind: 'Reduce',
    rule: 102,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 102,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 104,
  },
  GET: {
    kind: 'Reduce',
    rule: 104,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 104,
  },
}, {
  OPENING_PAREN: {
    kind: 'Shift',
    state: 214,
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
    rule: 113,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 113,
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
    rule: 55,
  },
  BANG: {
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 220,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 121,
  },
  GET: {
    kind: 'Reduce',
    rule: 121,
  },
  OPENING_BRACKET: {
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 224,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 225,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 93,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 93,
  },
  BANG: {
    kind: 'Reduce',
    rule: 93,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 93,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 93,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 93,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 93,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 93,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 93,
  },
  DOT: {
    kind: 'Reduce',
    rule: 93,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 93,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 93,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 93,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 93,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 93,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 93,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 93,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 93,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 93,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 93,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 93,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 93,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 93,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 163,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 95,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 95,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 95,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 226,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 227,
  },
  COMMA: {
    kind: 'Shift',
    state: 228,
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
  COLON: {
    kind: 'Shift',
    state: 229,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 114,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 114,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 230,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 77,
  },
  COMMA: {
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
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 122,
  },
  GET: {
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
    state: 233,
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
    state: 234,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 235,
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
    rule: 116,
  },
  GET: {
    kind: 'Reduce',
    rule: 116,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 116,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 69,
  },
  BANG: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 238,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 72,
  },
  DOT: {
    kind: 'Shift',
    state: 75,
  },
  EQUALS: {
    kind: 'Shift',
    state: 83,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 70,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 73,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 78,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 79,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 80,
  },
  MINUS: {
    kind: 'Shift',
    state: 81,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 71,
  },
  PLUS: {
    kind: 'Shift',
    state: 82,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 84,
  },
}, {
  ELSE: {
    kind: 'Shift',
    state: 239,
  },
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
  CONST: {
    kind: 'Reduce',
    rule: 129,
  },
  LET: {
    kind: 'Reduce',
    rule: 129,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 129,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 129,
  },
  FOR: {
    kind: 'Reduce',
    rule: 129,
  },
  IF: {
    kind: 'Reduce',
    rule: 129,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 129,
  },
  THROW: {
    kind: 'Reduce',
    rule: 129,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 129,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 129,
  },
  GET: {
    kind: 'Reduce',
    rule: 129,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 129,
  },
  THIS: {
    kind: 'Reduce',
    rule: 129,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 129,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 129,
  },
  BANG: {
    kind: 'Reduce',
    rule: 129,
  },
  NEW: {
    kind: 'Reduce',
    rule: 129,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 129,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 129,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 129,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 129,
  },
  NULL: {
    kind: 'Reduce',
    rule: 129,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 129,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 129,
  },
  $: {
    kind: 'Reduce',
    rule: 129,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 129,
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
    rule: 112,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 112,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 115,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 115,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 242,
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
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 245,
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
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 110,
  },
  GET: {
    kind: 'Reduce',
    rule: 110,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 110,
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
    state: 247,
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
    rule: 118,
  },
  LET: {
    kind: 'Reduce',
    rule: 118,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 118,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 118,
  },
  FOR: {
    kind: 'Reduce',
    rule: 118,
  },
  IF: {
    kind: 'Reduce',
    rule: 118,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 118,
  },
  THROW: {
    kind: 'Reduce',
    rule: 118,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 118,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 118,
  },
  GET: {
    kind: 'Reduce',
    rule: 118,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 118,
  },
  THIS: {
    kind: 'Reduce',
    rule: 118,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 118,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 118,
  },
  BANG: {
    kind: 'Reduce',
    rule: 118,
  },
  NEW: {
    kind: 'Reduce',
    rule: 118,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 118,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 118,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 118,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 118,
  },
  NULL: {
    kind: 'Reduce',
    rule: 118,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 118,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 118,
  },
  $: {
    kind: 'Reduce',
    rule: 118,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 118,
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
    Expression: 85,
    Identifier: 86,
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
    Expression: 87,
    Identifier: 86,
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
    Expression: 88,
    Identifier: 86,
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
    Identifier: 86,
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
    Expression: 90,
    Identifier: 86,
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
    Identifier: 93,
    NumberValue: 94,
    ObjectProperty: 92,
    ObjectPropertyList: 91,
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
    Expression: 97,
    ExpressionList: 96,
    Identifier: 86,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 98,
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
    Expression: 103,
    Identifier: 86,
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
    Expression: 104,
    Identifier: 86,
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
    Identifier: 109,
    IdentifierList: 108,
  },
  {},
  {
    Identifier: 93,
    NumberValue: 94,
    ObjectProperty: 92,
    ObjectPropertyList: 110,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 113,
    Identifier: 86,
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
    GenericType: 115,
    Identifier: 116,
    NamedType: 117,
    TupleType: 119,
    Type: 114,
    UnionType: 121,
  },
  {},
  {
    ClassDeclaration: 124,
    Declaration: 123,
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
    Expression: 125,
    Identifier: 86,
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
    Expression: 126,
    Identifier: 86,
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
    Expression: 97,
    ExpressionList: 127,
    Identifier: 86,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 98,
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
    Expression: 128,
    Identifier: 86,
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
    Identifier: 129,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 130,
    Identifier: 86,
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
    Identifier: 86,
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
    Identifier: 86,
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
    Identifier: 86,
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
    Identifier: 86,
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
    Identifier: 86,
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
    Identifier: 86,
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
    Identifier: 86,
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
    Expression: 138,
    Identifier: 86,
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
    Expression: 145,
    Identifier: 86,
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
    Expression: 148,
    Identifier: 86,
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
    VariableDeclaration: 149,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 151,
    Identifier: 86,
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
    Expression: 154,
    Identifier: 86,
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
    GenericType: 115,
    Identifier: 116,
    NamedType: 117,
    TupleType: 119,
    Type: 155,
    UnionType: 121,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 156,
    Identifier: 86,
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
    GenericType: 115,
    Identifier: 116,
    NamedType: 117,
    TupleType: 119,
    Type: 160,
    UnionType: 121,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 161,
    Identifier: 86,
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
    GenericType: 115,
    Identifier: 116,
    NamedType: 117,
    TupleType: 119,
    Type: 166,
    TypeList: 165,
    UnionType: 121,
  },
  {},
  {
    ClassBodyList: 167,
    ClassBodyListItem: 168,
    GetAccessor: 169,
    Identifier: 172,
    MethodDefinition: 171,
    PropertyDeclaration: 173,
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
    Expression: 97,
    ExpressionList: 176,
    Identifier: 86,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 98,
    StringValue: 42,
  },
  {},
  {
    Identifier: 93,
    NumberValue: 94,
    ObjectProperty: 177,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 178,
    Identifier: 86,
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
    Expression: 179,
    Identifier: 86,
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
    Expression: 181,
    Identifier: 86,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 182,
    StringValue: 42,
  },
  {},
  {},
  {
    ArrayPattern: 58,
    Id: 186,
    Identifier: 56,
    ObjectPattern: 60,
    Pattern: 57,
    VariableDeclarator: 185,
    VariableDeclaratorList: 184,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    Identifier: 191,
  },
  {},
  {},
  {},
  {},
  {
    GenericType: 115,
    Identifier: 116,
    NamedType: 117,
    TupleType: 119,
    Type: 194,
    UnionType: 121,
  },
  {
    GenericType: 115,
    Identifier: 116,
    NamedType: 117,
    TupleType: 119,
    Type: 166,
    TypeList: 195,
    UnionType: 121,
  },
  {},
  {},
  {
    ClassBodyListItem: 199,
    GetAccessor: 169,
    Identifier: 172,
    MethodDefinition: 171,
    PropertyDeclaration: 173,
  },
  {},
  {},
  {
    Identifier: 200,
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
    Expression: 205,
    Identifier: 86,
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
    Id: 186,
    Identifier: 56,
    ObjectPattern: 60,
    Pattern: 57,
    VariableDeclarator: 206,
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
    Expression: 210,
    Identifier: 86,
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
    Expression: 211,
    Identifier: 86,
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
    GenericType: 115,
    Identifier: 116,
    NamedType: 117,
    TupleType: 119,
    Type: 213,
    UnionType: 121,
  },
  {},
  {},
  {},
  {
    Argument: 216,
    ArgumentList: 215,
    Identifier: 217,
  },
  {
    Identifier: 218,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 219,
    Identifier: 86,
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
    Expression: 221,
    Identifier: 86,
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
    StatementList: 222,
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
    StatementList: 223,
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
    Expression: 231,
    Identifier: 86,
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
    Argument: 236,
    Identifier: 217,
  },
  {
    Identifier: 237,
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
    StatementList: 240,
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
    StatementList: 241,
    StringValue: 42,
    ThrowStatement: 50,
    WhileStatement: 52,
  },
  {},
  {},
  {},
  {
    IfStatement: 243,
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
    StatementList: 246,
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
  pop: 2,
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
  pop: 1,
  action: r35,
}, {
  production: 'Expression',
  pop: 3,
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
  production: 'Expression',
  pop: 1,
  action: r43,
}, {
  production: 'AssignmentExpression',
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
  production: 'BinaryExpression',
  pop: 3,
  action: r54,
}, {
  production: 'NewExpression',
  pop: 5,
  action: r55,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r56,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r57,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r58,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r59,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r60,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r61,
}, {
  production: 'SpreadElement',
  pop: 2,
  action: r62,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r63,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r64,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r65,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r66,
}, {
  production: 'IndexExpression',
  pop: 4,
  action: r67,
}, {
  production: 'LogicalNotExpression',
  pop: 2,
  action: r68,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r69,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r70,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r71,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r72,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r73,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r74,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r75,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r76,
}, {
  production: 'ObjectProperty',
  pop: 5,
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
  production: 'PrimitiveValue',
  pop: 1,
  action: r82,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r83,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r84,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r85,
}, {
  production: 'NullValue',
  pop: 1,
  action: r86,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r87,
}, {
  production: 'StringValue',
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
  production: 'Type',
  pop: 1,
  action: r92,
}, {
  production: 'GenericType',
  pop: 4,
  action: r93,
}, {
  production: 'TypeList',
  pop: 1,
  action: r94,
}, {
  production: 'TypeList',
  pop: 3,
  action: r95,
}, {
  production: 'NamedType',
  pop: 1,
  action: r96,
}, {
  production: 'NamedType',
  pop: 1,
  action: r97,
}, {
  production: 'TupleType',
  pop: 3,
  action: r98,
}, {
  production: 'UnionType',
  pop: 3,
  action: r99,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r100,
}, {
  production: 'Declaration',
  pop: 1,
  action: r101,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r102,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r103,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r104,
}, {
  production: 'ClassBodyList',
  pop: 0,
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
  production: 'ClassBodyListItem',
  pop: 1,
  action: r108,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r109,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r110,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r111,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r112,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r113,
}, {
  production: 'Argument',
  pop: 1,
  action: r114,
}, {
  production: 'Argument',
  pop: 3,
  action: r115,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r116,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r117,
}, {
  production: 'ForStatement',
  pop: 11,
  action: r118,
}, {
  production: 'VariableDeclaration',
  pop: 2,
  action: r119,
}, {
  production: 'VariableDeclaratorList',
  pop: 1,
  action: r120,
}, {
  production: 'VariableDeclaratorList',
  pop: 2,
  action: r121,
}, {
  production: 'VariableDeclarator',
  pop: 3,
  action: r122,
}, {
  production: 'VariableDeclarator',
  pop: 1,
  action: r123,
}, {
  production: 'IfStatement',
  pop: 9,
  action: r124,
}, {
  production: 'IfStatement',
  pop: 7,
  action: r125,
}, {
  production: 'ThrowStatement',
  pop: 3,
  action: r126,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r127,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r128,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r129,
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
