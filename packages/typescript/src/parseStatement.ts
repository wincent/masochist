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
  DocComment,
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
  LineComment,
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
function r6($1: DocComment): Statement {
  return $1;
}
function r7($1: ExportDefaultDeclaration): Statement {
  return $1;
}
function r8($1: ExpressionStatement): Statement {
  return $1;
}
function r9($1: ForStatement): Statement {
  return $1;
}
function r10($1: IfStatement): Statement {
  return $1;
}
function r11($1: LineComment): Statement {
  return $1;
}
function r12($1: ReturnStatement): Statement {
  return $1;
}
function r13($1: ThrowStatement): Statement {
  return $1;
}
function r14($1: WhileStatement): Statement {
  return $1;
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
    binding: 'const',
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
    binding: 'const',
    lhs: $2,
    rhs: $4,
  };
}
function r17(
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
function r18(
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
function r19($1: Identifier, _$2: Token, $3: Expression): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1,
    rhs: $3,
  };
}
function r20($1: Identifier): Id {
  return $1;
}
function r21($1: Pattern): Id {
  return $1;
}
function r22($1: ArrayPattern): Pattern {
  return $1;
}
function r23($1: ObjectPattern): Pattern {
  return $1;
}
function r24(_$1: Token, $2: IdentifierList): ArrayPattern {
  return {
    kind: 'ArrayPattern',
    elements: $2,
  };
}
function r25($1: Identifier): IdentifierList {
  return [$1];
}
function r26($1: IdentifierList, _$2: Token, $3: Identifier): IdentifierList {
  $1.push($3);
  return $1;
}
function r27(_$1: Token, $2: ObjectPropertyList): ObjectPattern {
  return {
    kind: 'ObjectPattern',
    properties: $2,
  };
}
function r28($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r29($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r30(_$1: Token, $2: Expression): Expression {
  return $2;
}
function r31($1: Expression): Expression {
  return {
    kind: 'NonNullExpression',
    expression: $1,
  };
}
function r32(): Expression {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r33($1: AssignmentExpression): Expression {
  return $1;
}
function r34($1: BinaryExpression): Expression {
  return $1;
}
function r35($1: CallExpression): Expression {
  return $1;
}
function r36($1: DecrementExpression): Expression {
  return $1;
}
function r37($1: IncrementExpression): Expression {
  return $1;
}
function r38($1: Identifier, _$2: Token, $3: Type): Expression {
  return {
    ...$1,
    cast: $3,
  };
}
function r39($1: Identifier): Expression {
  return $1;
}
function r40($1: IndexExpression): Expression {
  return $1;
}
function r41($1: LogicalNotExpression): Expression {
  return $1;
}
function r42($1: MemberExpression): Expression {
  return $1;
}
function r43($1: NewExpression): Expression {
  return $1;
}
function r44($1: ObjectValue): Expression {
  return $1;
}
function r45($1: PrimitiveValue): Expression {
  return $1;
}
function r46($1: Expression, _$2: Token, $3: Expression): AssignmentExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r47($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>',
    rhs: $3,
  };
}
function r48($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>=',
    rhs: $3,
  };
}
function r49($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<',
    rhs: $3,
  };
}
function r50($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<=',
    rhs: $3,
  };
}
function r51($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r52($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r53($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r54($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r55($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r56($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r57(
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
function r58($1: Expression, _$2: Token, $3: ExpressionList): CallExpression {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r59($1: Expression): ExpressionList {
  return [$1];
}
function r60($1: SpreadElement): ExpressionList {
  return [$1];
}
function r61($1: ExpressionList, _$2: Token, $3: Expression): ExpressionList {
  $1.push($3);
  return $1;
}
function r62(
  $1: ExpressionList,
  _$2: Token,
  $3: SpreadElement,
): ExpressionList {
  $1.push($3);
  return $1;
}
function r63(): ExpressionList {
  return [];
}
function r64(_$1: Token, $2: Expression): SpreadElement {
  return {
    kind: 'SpreadElement',
    expression: $2,
  };
}
function r65(_$1: Token, $2: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r66($1: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r67(_$1: Token, $2: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r68($1: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r69($1: Expression, _$2: Token, $3: Expression): IndexExpression {
  return {
    kind: 'IndexExpression',
    index: $3,
    indexee: $1,
  };
}
function r70(_$1: Token, $2: Expression): LogicalNotExpression {
  return {
    kind: 'LogicalNotExpression',
    operand: $2,
  };
}
function r71($1: Expression, _$2: Token, $3: Identifier): MemberExpression {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r72(_$1: Token, $2: ObjectPropertyList): ObjectValue {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r73($1: ObjectProperty): ObjectPropertyList {
  return [$1];
}
function r74(
  $1: ObjectPropertyList,
  _$2: Token,
  $3: ObjectProperty,
): ObjectPropertyList {
  $1.push($3);
  return $1;
}
function r75(): ObjectPropertyList {
  return [];
}
function r76($1: Identifier, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r77($1: Identifier): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r78($1: NumberValue, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r79(
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
function r80($1: ArrayValue): PrimitiveValue {
  return $1;
}
function r81($1: BooleanValue): PrimitiveValue {
  return $1;
}
function r82($1: NullValue): PrimitiveValue {
  return $1;
}
function r83($1: NumberValue): PrimitiveValue {
  return $1;
}
function r84($1: StringValue): PrimitiveValue {
  return $1;
}
function r85(_$1: Token, $2: ExpressionList): ArrayValue {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r86(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r87(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r88(): NullValue {
  return {
    kind: 'NullValue',
  };
}
function r89($1: Token): NumberValue {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r90($1: Token): StringValue {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r91($1: GenericType): Type {
  return $1;
}
function r92($1: NamedType): Type {
  return $1;
}
function r93($1: TupleType): Type {
  return $1;
}
function r94($1: UnionType): Type {
  return $1;
}
function r95($1: Identifier, _$2: Token, $3: TypeList): GenericType {
  return {
    kind: 'GenericType',
    name: $1.name,
    parameters: $3,
  };
}
function r96($1: Type): TypeList {
  return [$1];
}
function r97($1: TypeList, _$2: Token, $3: Type): TypeList {
  $1.push($3);
  return $1;
}
function r98($1: Identifier): NamedType {
  return {
    kind: 'NamedType',
    name: $1.name,
  };
}
function r99($1: Token): NamedType {
  return {
    kind: 'NamedType',
    name: $1.contents,
  };
}
function r100(_$1: Token, $2: TypeList): TupleType {
  return {
    kind: 'TupleType',
    elements: $2,
  };
}
function r101($1: Type, _$2: Token, $3: Type): UnionType {
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
function r102(
  _$1: Token,
  _$2: Token,
  $3: Declaration,
): ExportDefaultDeclaration {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r103($1: ClassDeclaration): Declaration {
  return $1;
}
function r104(
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
function r105($1: ClassBodyListItem): ClassBodyList {
  return [$1];
}
function r106($1: ClassBodyList, $2: ClassBodyListItem): ClassBodyList {
  $1.push($2);
  return $1;
}
function r107(): ClassBodyList {
  return [];
}
function r108($1: DocComment): ClassBodyListItem {
  return $1;
}
function r109($1: GetAccessor): ClassBodyListItem {
  return $1;
}
function r110($1: LineComment): ClassBodyListItem {
  return $1;
}
function r111($1: MethodDefinition): ClassBodyListItem {
  return $1;
}
function r112($1: PropertyDeclaration): ClassBodyListItem {
  return $1;
}
function r113($1: Token): DocComment {
  return {
    kind: 'DocComment',
    // TODO: parse internal structure here
    contents: [$1.contents],
  };
}
function r114(
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
function r115($1: Token): LineComment {
  return {
    kind: 'LineComment',
    contents: $1.contents.slice(2), // Strip leading "//".
  };
}
function r116(
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
function r117($1: Argument): ArgumentList {
  return [$1];
}
function r118($1: ArgumentList, _$2: Token, $3: Argument): ArgumentList {
  $1.push($3);
  return $1;
}
function r119(): ArgumentList {
  return [];
}
function r120($1: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r121($1: Identifier, _$2: Token, $3: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r122($1: Identifier, _$2: Token, $3: Identifier): PropertyDeclaration {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r123($1: Expression): ExpressionStatement {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r124(
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
function r125(_$1: Token, $2: VariableDeclaratorList): VariableDeclaration {
  return {
    kind: 'VariableDeclaration',
    binding: 'let',
    declarators: $2,
  };
}
function r126($1: VariableDeclarator): VariableDeclaratorList {
  return [$1];
}
function r127(
  $1: VariableDeclaratorList,
  $2: VariableDeclarator,
): VariableDeclaratorList {
  $1.push($2);
  return $1;
}
function r128($1: Id, _$2: Token, $3: Expression): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: $3,
  };
}
function r129($1: Id): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: null,
  };
}
function r130(
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
function r131(
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
function r132(_$1: Token, $2: Expression): ThrowStatement {
  return {
    kind: 'ThrowStatement',
    expression: $2,
  };
}
function r133(): ReturnStatement {
  return {
    kind: 'ReturnStatement',
  };
}
function r134(_$1: Token, $2: Expression): ReturnStatement {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r135(
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
    state: 28,
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
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
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
    state: 28,
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
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
    state: 65,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 63,
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
    state: 65,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 63,
  },
}, {
  AS: {
    kind: 'Shift',
    state: 68,
  },
  ASSIGN: {
    kind: 'Shift',
    state: 67,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 39,
  },
  BANG: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 28,
  },
  AS: {
    kind: 'Reduce',
    rule: 28,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 28,
  },
  BANG: {
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
  COLON: {
    kind: 'Reduce',
    rule: 28,
  },
  OPENING_BRACE: {
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
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 28,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 29,
  },
  AS: {
    kind: 'Reduce',
    rule: 29,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 29,
  },
  BANG: {
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
  COLON: {
    kind: 'Reduce',
    rule: 29,
  },
  OPENING_BRACE: {
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
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 29,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  CONST: {
    kind: 'Reduce',
    rule: 113,
  },
  LET: {
    kind: 'Reduce',
    rule: 113,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 113,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 113,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 113,
  },
  FOR: {
    kind: 'Reduce',
    rule: 113,
  },
  IF: {
    kind: 'Reduce',
    rule: 113,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 113,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 113,
  },
  THROW: {
    kind: 'Reduce',
    rule: 113,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 113,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 113,
  },
  GET: {
    kind: 'Reduce',
    rule: 113,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 113,
  },
  THIS: {
    kind: 'Reduce',
    rule: 113,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 113,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 113,
  },
  BANG: {
    kind: 'Reduce',
    rule: 113,
  },
  NEW: {
    kind: 'Reduce',
    rule: 113,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 113,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 113,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 113,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 113,
  },
  NULL: {
    kind: 'Reduce',
    rule: 113,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 113,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 113,
  },
  $: {
    kind: 'Reduce',
    rule: 113,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 113,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  DEFAULT: {
    kind: 'Shift',
    state: 70,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 71,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  SEMICOLON: {
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 44,
  },
  BANG: {
    kind: 'Reduce',
    rule: 44,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 44,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 44,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 44,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 44,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 44,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 44,
  },
  DOT: {
    kind: 'Reduce',
    rule: 44,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 44,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 44,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 44,
  },
  LOGICAL_AND: {
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
    state: 43,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 99,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 45,
  },
  BANG: {
    kind: 'Reduce',
    rule: 45,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 45,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 45,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 45,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 45,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 45,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 45,
  },
  DOT: {
    kind: 'Reduce',
    rule: 45,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 45,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 45,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 45,
  },
  LOGICAL_AND: {
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  REST: {
    kind: 'Shift',
    state: 103,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 63,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 63,
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
  COLON: {
    kind: 'Reduce',
    rule: 89,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
    state: 104,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 105,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  CONST: {
    kind: 'Reduce',
    rule: 115,
  },
  LET: {
    kind: 'Reduce',
    rule: 115,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 115,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 115,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 115,
  },
  FOR: {
    kind: 'Reduce',
    rule: 115,
  },
  IF: {
    kind: 'Reduce',
    rule: 115,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 115,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 115,
  },
  THROW: {
    kind: 'Reduce',
    rule: 115,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 115,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 115,
  },
  GET: {
    kind: 'Reduce',
    rule: 115,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 115,
  },
  THIS: {
    kind: 'Reduce',
    rule: 115,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 115,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 115,
  },
  BANG: {
    kind: 'Reduce',
    rule: 115,
  },
  NEW: {
    kind: 'Reduce',
    rule: 115,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 115,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 115,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 115,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 115,
  },
  NULL: {
    kind: 'Reduce',
    rule: 115,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 115,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 115,
  },
  $: {
    kind: 'Reduce',
    rule: 115,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 115,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 106,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 109,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
    state: 111,
  },
  COLON: {
    kind: 'Shift',
    state: 110,
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
    rule: 23,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 23,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 23,
  },
  GET: {
    kind: 'Reduce',
    rule: 23,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 23,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 23,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 23,
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
    state: 43,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 99,
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
  ASSIGN: {
    kind: 'Shift',
    state: 116,
  },
  COLON: {
    kind: 'Shift',
    state: 115,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
    state: 122,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 124,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 126,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 10,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  REST: {
    kind: 'Shift',
    state: 103,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 63,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 63,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 68,
  },
  BANG: {
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 143,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  AS: {
    kind: 'Shift',
    state: 68,
  },
  CLOSING_PAREN: {
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
  SEMICOLON: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
  SEMICOLON: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 144,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 145,
  },
  COMMA: {
    kind: 'Shift',
    state: 146,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 73,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 73,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 147,
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
  COLON: {
    kind: 'Shift',
    state: 148,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 150,
  },
  COMMA: {
    kind: 'Shift',
    state: 151,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  LET: {
    kind: 'Shift',
    state: 154,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 133,
  },
  LET: {
    kind: 'Reduce',
    rule: 133,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 133,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 133,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 133,
  },
  FOR: {
    kind: 'Reduce',
    rule: 133,
  },
  IF: {
    kind: 'Reduce',
    rule: 133,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 133,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 133,
  },
  THROW: {
    kind: 'Reduce',
    rule: 133,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 133,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 133,
  },
  GET: {
    kind: 'Reduce',
    rule: 133,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 133,
  },
  THIS: {
    kind: 'Reduce',
    rule: 133,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 133,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 133,
  },
  BANG: {
    kind: 'Reduce',
    rule: 133,
  },
  NEW: {
    kind: 'Reduce',
    rule: 133,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 133,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 133,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 133,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 133,
  },
  NULL: {
    kind: 'Reduce',
    rule: 133,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 133,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 133,
  },
  $: {
    kind: 'Reduce',
    rule: 133,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 133,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 156,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 157,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
    state: 122,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 124,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 161,
  },
  COMMA: {
    kind: 'Shift',
    state: 162,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 25,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 25,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 163,
  },
  COMMA: {
    kind: 'Shift',
    state: 146,
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
    state: 122,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 124,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 166,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 167,
  },
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
  LESS_THAN: {
    kind: 'Shift',
    state: 168,
  },
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
    state: 122,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 124,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 94,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 94,
  },
  BANG: {
    kind: 'Reduce',
    rule: 94,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 94,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 94,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 94,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 94,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 94,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 94,
  },
  DOT: {
    kind: 'Reduce',
    rule: 94,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 94,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 94,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 94,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 94,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 94,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 94,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 94,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 94,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 94,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 94,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 94,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 94,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 94,
  },
}, {
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  GET: {
    kind: 'Shift',
    state: 175,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 107,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  CONST: {
    kind: 'Reduce',
    rule: 103,
  },
  LET: {
    kind: 'Reduce',
    rule: 103,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 103,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 103,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 103,
  },
  FOR: {
    kind: 'Reduce',
    rule: 103,
  },
  IF: {
    kind: 'Reduce',
    rule: 103,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 103,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 103,
  },
  THROW: {
    kind: 'Reduce',
    rule: 103,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 103,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 103,
  },
  GET: {
    kind: 'Reduce',
    rule: 103,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 103,
  },
  THIS: {
    kind: 'Reduce',
    rule: 103,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 103,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 103,
  },
  BANG: {
    kind: 'Reduce',
    rule: 103,
  },
  NEW: {
    kind: 'Reduce',
    rule: 103,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 103,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 103,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 103,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 103,
  },
  NULL: {
    kind: 'Reduce',
    rule: 103,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 103,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 103,
  },
  $: {
    kind: 'Reduce',
    rule: 103,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 103,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 180,
  },
  COMMA: {
    kind: 'Shift',
    state: 151,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 181,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 71,
  },
  BANG: {
    kind: 'Reduce',
    rule: 71,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 71,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 71,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 71,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 71,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 71,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 71,
  },
  DOT: {
    kind: 'Reduce',
    rule: 71,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 71,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 71,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 71,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 71,
  },
  GET: {
    kind: 'Reduce',
    rule: 71,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 71,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
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
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 52,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 53,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
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
    kind: 'Reduce',
    rule: 53,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
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
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 54,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
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
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 55,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 55,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
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
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 56,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 56,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
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
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  REST: {
    kind: 'Shift',
    state: 103,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 63,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 63,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 72,
  },
  BANG: {
    kind: 'Reduce',
    rule: 72,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 72,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 72,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 72,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 72,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 72,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 72,
  },
  DOT: {
    kind: 'Reduce',
    rule: 72,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 72,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 72,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 72,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 72,
  },
  GET: {
    kind: 'Reduce',
    rule: 72,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 72,
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
    state: 43,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 99,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 186,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  REST: {
    kind: 'Shift',
    state: 103,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 64,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 64,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 64,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 189,
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
    state: 65,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 63,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 193,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 134,
  },
  LET: {
    kind: 'Reduce',
    rule: 134,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 134,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 134,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 134,
  },
  FOR: {
    kind: 'Reduce',
    rule: 134,
  },
  IF: {
    kind: 'Reduce',
    rule: 134,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 134,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 134,
  },
  THROW: {
    kind: 'Reduce',
    rule: 134,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 134,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 134,
  },
  GET: {
    kind: 'Reduce',
    rule: 134,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 134,
  },
  THIS: {
    kind: 'Reduce',
    rule: 134,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 134,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 134,
  },
  BANG: {
    kind: 'Reduce',
    rule: 134,
  },
  NEW: {
    kind: 'Reduce',
    rule: 134,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 134,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 134,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 134,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 134,
  },
  NULL: {
    kind: 'Reduce',
    rule: 134,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 134,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 134,
  },
  $: {
    kind: 'Reduce',
    rule: 134,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 134,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 132,
  },
  LET: {
    kind: 'Reduce',
    rule: 132,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 132,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 132,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 132,
  },
  FOR: {
    kind: 'Reduce',
    rule: 132,
  },
  IF: {
    kind: 'Reduce',
    rule: 132,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 132,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 132,
  },
  THROW: {
    kind: 'Reduce',
    rule: 132,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 132,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 132,
  },
  GET: {
    kind: 'Reduce',
    rule: 132,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 132,
  },
  THIS: {
    kind: 'Reduce',
    rule: 132,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 132,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 132,
  },
  BANG: {
    kind: 'Reduce',
    rule: 132,
  },
  NEW: {
    kind: 'Reduce',
    rule: 132,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 132,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 132,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 132,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 132,
  },
  NULL: {
    kind: 'Reduce',
    rule: 132,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 132,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 132,
  },
  $: {
    kind: 'Reduce',
    rule: 132,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 132,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 194,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 195,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 167,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 196,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 24,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 24,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 24,
  },
  GET: {
    kind: 'Reduce',
    rule: 24,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 24,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 24,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 24,
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
    rule: 27,
  },
  ASSIGN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 27,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 27,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 27,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 198,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 167,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 199,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 19,
  },
  LET: {
    kind: 'Reduce',
    rule: 19,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 19,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 19,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 19,
  },
  FOR: {
    kind: 'Reduce',
    rule: 19,
  },
  IF: {
    kind: 'Reduce',
    rule: 19,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 19,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 19,
  },
  THROW: {
    kind: 'Reduce',
    rule: 19,
  },
  WHILE: {
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
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 19,
  },
  THIS: {
    kind: 'Reduce',
    rule: 19,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 19,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 19,
  },
  BANG: {
    kind: 'Reduce',
    rule: 19,
  },
  NEW: {
    kind: 'Reduce',
    rule: 19,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 19,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 19,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 19,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 19,
  },
  NULL: {
    kind: 'Reduce',
    rule: 19,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 19,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 19,
  },
  $: {
    kind: 'Reduce',
    rule: 19,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 19,
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
    state: 122,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 124,
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
    state: 122,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 124,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 202,
  },
  COMMA: {
    kind: 'Shift',
    state: 203,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 167,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 96,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 96,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 96,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 204,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  GET: {
    kind: 'Shift',
    state: 175,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 105,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 105,
  },
  GET: {
    kind: 'Reduce',
    rule: 105,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 105,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 105,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 108,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 108,
  },
  GET: {
    kind: 'Reduce',
    rule: 108,
  },
  LINE_COMMENT: {
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
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 109,
  },
  GET: {
    kind: 'Reduce',
    rule: 109,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 109,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 109,
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
    rule: 29,
  },
  COLON: {
    kind: 'Reduce',
    rule: 29,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 110,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 110,
  },
  GET: {
    kind: 'Reduce',
    rule: 110,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 110,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 110,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 111,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 111,
  },
  GET: {
    kind: 'Reduce',
    rule: 111,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 111,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 111,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 208,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 207,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 112,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 112,
  },
  GET: {
    kind: 'Reduce',
    rule: 112,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 112,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 112,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 58,
  },
  BANG: {
    kind: 'Reduce',
    rule: 58,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 58,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 58,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 58,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 58,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 58,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 58,
  },
  DOT: {
    kind: 'Reduce',
    rule: 58,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 58,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 58,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 58,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 58,
  },
  GET: {
    kind: 'Reduce',
    rule: 58,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 58,
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
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 209,
  },
  COMMA: {
    kind: 'Shift',
    state: 151,
  },
}, {
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
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 78,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 78,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 210,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
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
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
    state: 65,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 63,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 125,
  },
}, {
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 126,
  },
  GET: {
    kind: 'Reduce',
    rule: 126,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 126,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 126,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 126,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 213,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 129,
  },
  GET: {
    kind: 'Reduce',
    rule: 129,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 129,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 129,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 129,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 214,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 215,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 26,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 26,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 18,
  },
  LET: {
    kind: 'Reduce',
    rule: 18,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 18,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 18,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 18,
  },
  FOR: {
    kind: 'Reduce',
    rule: 18,
  },
  IF: {
    kind: 'Reduce',
    rule: 18,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 18,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 18,
  },
  THROW: {
    kind: 'Reduce',
    rule: 18,
  },
  WHILE: {
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
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 18,
  },
  THIS: {
    kind: 'Reduce',
    rule: 18,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 18,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 18,
  },
  BANG: {
    kind: 'Reduce',
    rule: 18,
  },
  NEW: {
    kind: 'Reduce',
    rule: 18,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 18,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 18,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 18,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 18,
  },
  NULL: {
    kind: 'Reduce',
    rule: 18,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 18,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 18,
  },
  $: {
    kind: 'Reduce',
    rule: 18,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 18,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 101,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 101,
  },
  BANG: {
    kind: 'Reduce',
    rule: 101,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 101,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 101,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 101,
  },
  DOT: {
    kind: 'Reduce',
    rule: 101,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 101,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 101,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 101,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 101,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 101,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 101,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 101,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 101,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 101,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 101,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 101,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 101,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 101,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 203,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 218,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 100,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 100,
  },
  BANG: {
    kind: 'Reduce',
    rule: 100,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 100,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 100,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 100,
  },
  DOT: {
    kind: 'Reduce',
    rule: 100,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 100,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 100,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 100,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 100,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 100,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 100,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 100,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 100,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 100,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 100,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 100,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 100,
  },
  CLOSING_BRACE: {
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 100,
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
    state: 122,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 124,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 104,
  },
  LET: {
    kind: 'Reduce',
    rule: 104,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 104,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 104,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 104,
  },
  FOR: {
    kind: 'Reduce',
    rule: 104,
  },
  IF: {
    kind: 'Reduce',
    rule: 104,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 104,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 104,
  },
  THROW: {
    kind: 'Reduce',
    rule: 104,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 104,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 104,
  },
  GET: {
    kind: 'Reduce',
    rule: 104,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 104,
  },
  THIS: {
    kind: 'Reduce',
    rule: 104,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 104,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 104,
  },
  BANG: {
    kind: 'Reduce',
    rule: 104,
  },
  NEW: {
    kind: 'Reduce',
    rule: 104,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 104,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 104,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 104,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 104,
  },
  NULL: {
    kind: 'Reduce',
    rule: 104,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 104,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 104,
  },
  $: {
    kind: 'Reduce',
    rule: 104,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 104,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 106,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 106,
  },
  GET: {
    kind: 'Reduce',
    rule: 106,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 106,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 106,
  },
}, {
  OPENING_PAREN: {
    kind: 'Shift',
    state: 220,
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
    rule: 119,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 119,
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
    rule: 57,
  },
  BANG: {
    kind: 'Reduce',
    rule: 57,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 57,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 57,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 57,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 57,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 57,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 57,
  },
  DOT: {
    kind: 'Reduce',
    rule: 57,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 57,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 57,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 57,
  },
  LOGICAL_AND: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 57,
  },
  GET: {
    kind: 'Reduce',
    rule: 57,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 57,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 226,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 127,
  },
  GET: {
    kind: 'Reduce',
    rule: 127,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 127,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 127,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 127,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
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
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
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
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 230,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 231,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 95,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 95,
  },
  BANG: {
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
  LESS_THAN: {
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
    kind: 'Shift',
    state: 167,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 97,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 97,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 97,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 232,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 233,
  },
  COMMA: {
    kind: 'Shift',
    state: 234,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 117,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 117,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 235,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 120,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 120,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 236,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 79,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 79,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
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
    state: 25,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 128,
  },
  GET: {
    kind: 'Reduce',
    rule: 128,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 128,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 128,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 238,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 239,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  OPENING_BRACE: {
    kind: 'Shift',
    state: 240,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 241,
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
    rule: 122,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 122,
  },
  GET: {
    kind: 'Reduce',
    rule: 122,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 122,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 122,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 73,
  },
  BANG: {
    kind: 'Shift',
    state: 72,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 244,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 76,
  },
  DOT: {
    kind: 'Shift',
    state: 79,
  },
  EQUALS: {
    kind: 'Shift',
    state: 87,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 80,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 77,
  },
  LESS_THAN: {
    kind: 'Shift',
    state: 81,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Shift',
    state: 82,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 83,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 84,
  },
  MINUS: {
    kind: 'Shift',
    state: 85,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 78,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 75,
  },
  PLUS: {
    kind: 'Shift',
    state: 86,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  ELSE: {
    kind: 'Shift',
    state: 245,
  },
  CONST: {
    kind: 'Reduce',
    rule: 131,
  },
  LET: {
    kind: 'Reduce',
    rule: 131,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 131,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 131,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 131,
  },
  FOR: {
    kind: 'Reduce',
    rule: 131,
  },
  IF: {
    kind: 'Reduce',
    rule: 131,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 131,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 131,
  },
  THROW: {
    kind: 'Reduce',
    rule: 131,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 131,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 131,
  },
  GET: {
    kind: 'Reduce',
    rule: 131,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 131,
  },
  THIS: {
    kind: 'Reduce',
    rule: 131,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 131,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 131,
  },
  BANG: {
    kind: 'Reduce',
    rule: 131,
  },
  NEW: {
    kind: 'Reduce',
    rule: 131,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 131,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 131,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 131,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 131,
  },
  NULL: {
    kind: 'Reduce',
    rule: 131,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 131,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 131,
  },
  $: {
    kind: 'Reduce',
    rule: 131,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 131,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 135,
  },
  LET: {
    kind: 'Reduce',
    rule: 135,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 135,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 135,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 135,
  },
  FOR: {
    kind: 'Reduce',
    rule: 135,
  },
  IF: {
    kind: 'Reduce',
    rule: 135,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 135,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 135,
  },
  THROW: {
    kind: 'Reduce',
    rule: 135,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 135,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 135,
  },
  GET: {
    kind: 'Reduce',
    rule: 135,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 135,
  },
  THIS: {
    kind: 'Reduce',
    rule: 135,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 135,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 135,
  },
  BANG: {
    kind: 'Reduce',
    rule: 135,
  },
  NEW: {
    kind: 'Reduce',
    rule: 135,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 135,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 135,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 135,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 135,
  },
  NULL: {
    kind: 'Reduce',
    rule: 135,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 135,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 135,
  },
  $: {
    kind: 'Reduce',
    rule: 135,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 135,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
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
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
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
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 118,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 118,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 121,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 121,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 248,
  },
}, {
  IF: {
    kind: 'Shift',
    state: 49,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 250,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 251,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
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
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 130,
  },
  LET: {
    kind: 'Reduce',
    rule: 130,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 130,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 130,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 130,
  },
  FOR: {
    kind: 'Reduce',
    rule: 130,
  },
  IF: {
    kind: 'Reduce',
    rule: 130,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 130,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 130,
  },
  THROW: {
    kind: 'Reduce',
    rule: 130,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 130,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 130,
  },
  GET: {
    kind: 'Reduce',
    rule: 130,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 130,
  },
  THIS: {
    kind: 'Reduce',
    rule: 130,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 130,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 130,
  },
  BANG: {
    kind: 'Reduce',
    rule: 130,
  },
  NEW: {
    kind: 'Reduce',
    rule: 130,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 130,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 130,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 130,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 130,
  },
  NULL: {
    kind: 'Reduce',
    rule: 130,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 130,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 130,
  },
  $: {
    kind: 'Reduce',
    rule: 130,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 130,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 114,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 114,
  },
  GET: {
    kind: 'Reduce',
    rule: 114,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 114,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 114,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 116,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 116,
  },
  GET: {
    kind: 'Reduce',
    rule: 116,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 116,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 116,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 253,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 23,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  EXPORT: {
    kind: 'Shift',
    state: 14,
  },
  FALSE: {
    kind: 'Shift',
    state: 38,
  },
  FOR: {
    kind: 'Shift',
    state: 47,
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
    state: 49,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 25,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  LINE_COMMENT: {
    kind: 'Shift',
    state: 51,
  },
  NEW: {
    kind: 'Shift',
    state: 31,
  },
  NULL: {
    kind: 'Shift',
    state: 41,
  },
  NUMBER: {
    kind: 'Shift',
    state: 43,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 33,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 36,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 17,
  },
  RETURN: {
    kind: 'Shift',
    state: 53,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 45,
  },
  THIS: {
    kind: 'Shift',
    state: 18,
  },
  THROW: {
    kind: 'Shift',
    state: 55,
  },
  TRUE: {
    kind: 'Shift',
    state: 39,
  },
  WHILE: {
    kind: 'Shift',
    state: 57,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
}];
const gotos: Array<Gotos> = [
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 2,
    StatementList: 1,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 58,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {},
  {},
  {
    ArrayPattern: 62,
    Id: 59,
    Identifier: 60,
    ObjectPattern: 64,
    Pattern: 61,
  },
  {
    ArrayPattern: 62,
    Id: 66,
    Identifier: 60,
    ObjectPattern: 64,
    Pattern: 61,
  },
  {},
  {},
  {},
  {},
  {
    Identifier: 69,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 89,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 91,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 92,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 93,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 94,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {
    Identifier: 97,
    NumberValue: 98,
    ObjectProperty: 96,
    ObjectPropertyList: 95,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 101,
    ExpressionList: 100,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    SpreadElement: 102,
    StringValue: 44,
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
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 107,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 108,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    Identifier: 113,
    IdentifierList: 112,
  },
  {},
  {
    Identifier: 97,
    NumberValue: 98,
    ObjectProperty: 96,
    ObjectPropertyList: 114,
  },
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 117,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    GenericType: 119,
    Identifier: 120,
    NamedType: 121,
    TupleType: 123,
    Type: 118,
    UnionType: 125,
  },
  {},
  {
    ClassDeclaration: 128,
    Declaration: 127,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 129,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 130,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 101,
    ExpressionList: 131,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    SpreadElement: 102,
    StringValue: 44,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 132,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    Identifier: 133,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 134,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 135,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 136,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 137,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 138,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 139,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 140,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 141,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 142,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
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
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 149,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 152,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    VariableDeclaration: 153,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 155,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 158,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    GenericType: 119,
    Identifier: 120,
    NamedType: 121,
    TupleType: 123,
    Type: 159,
    UnionType: 125,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 160,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {},
  {
    GenericType: 119,
    Identifier: 120,
    NamedType: 121,
    TupleType: 123,
    Type: 164,
    UnionType: 125,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 165,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    GenericType: 119,
    Identifier: 120,
    NamedType: 121,
    TupleType: 123,
    Type: 170,
    TypeList: 169,
    UnionType: 125,
  },
  {},
  {
    ClassBodyList: 171,
    ClassBodyListItem: 172,
    DocComment: 173,
    GetAccessor: 174,
    Identifier: 178,
    LineComment: 176,
    MethodDefinition: 177,
    PropertyDeclaration: 179,
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
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 101,
    ExpressionList: 182,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    SpreadElement: 102,
    StringValue: 44,
  },
  {},
  {
    Identifier: 97,
    NumberValue: 98,
    ObjectProperty: 183,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 184,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 185,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 187,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    SpreadElement: 188,
    StringValue: 44,
  },
  {},
  {},
  {
    ArrayPattern: 62,
    Id: 192,
    Identifier: 60,
    ObjectPattern: 64,
    Pattern: 61,
    VariableDeclarator: 191,
    VariableDeclaratorList: 190,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    Identifier: 197,
  },
  {},
  {},
  {},
  {},
  {
    GenericType: 119,
    Identifier: 120,
    NamedType: 121,
    TupleType: 123,
    Type: 200,
    UnionType: 125,
  },
  {
    GenericType: 119,
    Identifier: 120,
    NamedType: 121,
    TupleType: 123,
    Type: 170,
    TypeList: 201,
    UnionType: 125,
  },
  {},
  {},
  {
    ClassBodyListItem: 205,
    DocComment: 173,
    GetAccessor: 174,
    Identifier: 178,
    LineComment: 176,
    MethodDefinition: 177,
    PropertyDeclaration: 179,
  },
  {},
  {},
  {},
  {
    Identifier: 206,
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
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 211,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayPattern: 62,
    Id: 192,
    Identifier: 60,
    ObjectPattern: 64,
    Pattern: 61,
    VariableDeclarator: 212,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 216,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 217,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {},
  {},
  {
    GenericType: 119,
    Identifier: 120,
    NamedType: 121,
    TupleType: 123,
    Type: 219,
    UnionType: 125,
  },
  {},
  {},
  {},
  {
    Argument: 222,
    ArgumentList: 221,
    Identifier: 223,
  },
  {
    Identifier: 224,
  },
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 225,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 227,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 2,
    StatementList: 228,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 2,
    StatementList: 229,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
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
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 237,
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    StringValue: 44,
  },
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 58,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 58,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {},
  {},
  {},
  {},
  {
    Argument: 242,
    Identifier: 223,
  },
  {
    Identifier: 243,
  },
  {},
  {},
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 2,
    StatementList: 246,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 2,
    StatementList: 247,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {},
  {},
  {},
  {
    IfStatement: 249,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 58,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 58,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 2,
    StatementList: 252,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {},
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    AssignmentStatement: 3,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    ClassDeclaration: 9,
    DecrementExpression: 22,
    DocComment: 11,
    ExportDefaultDeclaration: 13,
    Expression: 16,
    ExpressionStatement: 15,
    ForStatement: 46,
    Identifier: 6,
    IfStatement: 48,
    IncrementExpression: 24,
    IndexExpression: 26,
    LineComment: 50,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    PrimitiveValue: 34,
    ReturnStatement: 52,
    Statement: 58,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
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
  production: 'Statement',
  pop: 1,
  action: r13,
}, {
  production: 'Statement',
  pop: 1,
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
  pop: 7,
  action: r17,
}, {
  production: 'AssignmentStatement',
  pop: 5,
  action: r18,
}, {
  production: 'AssignmentStatement',
  pop: 4,
  action: r19,
}, {
  production: 'Id',
  pop: 1,
  action: r20,
}, {
  production: 'Id',
  pop: 1,
  action: r21,
}, {
  production: 'Pattern',
  pop: 1,
  action: r22,
}, {
  production: 'Pattern',
  pop: 1,
  action: r23,
}, {
  production: 'ArrayPattern',
  pop: 3,
  action: r24,
}, {
  production: 'IdentifierList',
  pop: 1,
  action: r25,
}, {
  production: 'IdentifierList',
  pop: 3,
  action: r26,
}, {
  production: 'ObjectPattern',
  pop: 3,
  action: r27,
}, {
  production: 'Identifier',
  pop: 1,
  action: r28,
}, {
  production: 'Identifier',
  pop: 1,
  action: r29,
}, {
  production: 'Expression',
  pop: 3,
  action: r30,
}, {
  production: 'Expression',
  pop: 2,
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
  pop: 1,
  action: r36,
}, {
  production: 'Expression',
  pop: 1,
  action: r37,
}, {
  production: 'Expression',
  pop: 3,
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
  production: 'Expression',
  pop: 1,
  action: r44,
}, {
  production: 'Expression',
  pop: 1,
  action: r45,
}, {
  production: 'AssignmentExpression',
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
  production: 'BinaryExpression',
  pop: 3,
  action: r55,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r56,
}, {
  production: 'NewExpression',
  pop: 5,
  action: r57,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r58,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r59,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r60,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r61,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r62,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r63,
}, {
  production: 'SpreadElement',
  pop: 2,
  action: r64,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r65,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r66,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r67,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r68,
}, {
  production: 'IndexExpression',
  pop: 4,
  action: r69,
}, {
  production: 'LogicalNotExpression',
  pop: 2,
  action: r70,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r71,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r72,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r73,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r74,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r75,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r76,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r77,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r78,
}, {
  production: 'ObjectProperty',
  pop: 5,
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
  production: 'PrimitiveValue',
  pop: 1,
  action: r83,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r84,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r85,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r86,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r87,
}, {
  production: 'NullValue',
  pop: 1,
  action: r88,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r89,
}, {
  production: 'StringValue',
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
  production: 'Type',
  pop: 1,
  action: r93,
}, {
  production: 'Type',
  pop: 1,
  action: r94,
}, {
  production: 'GenericType',
  pop: 4,
  action: r95,
}, {
  production: 'TypeList',
  pop: 1,
  action: r96,
}, {
  production: 'TypeList',
  pop: 3,
  action: r97,
}, {
  production: 'NamedType',
  pop: 1,
  action: r98,
}, {
  production: 'NamedType',
  pop: 1,
  action: r99,
}, {
  production: 'TupleType',
  pop: 3,
  action: r100,
}, {
  production: 'UnionType',
  pop: 3,
  action: r101,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r102,
}, {
  production: 'Declaration',
  pop: 1,
  action: r103,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r104,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r105,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r106,
}, {
  production: 'ClassBodyList',
  pop: 0,
  action: r107,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r108,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r109,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r110,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r111,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r112,
}, {
  production: 'DocComment',
  pop: 1,
  action: r113,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r114,
}, {
  production: 'LineComment',
  pop: 1,
  action: r115,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r116,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r117,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r118,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r119,
}, {
  production: 'Argument',
  pop: 1,
  action: r120,
}, {
  production: 'Argument',
  pop: 3,
  action: r121,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r122,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r123,
}, {
  production: 'ForStatement',
  pop: 11,
  action: r124,
}, {
  production: 'VariableDeclaration',
  pop: 2,
  action: r125,
}, {
  production: 'VariableDeclaratorList',
  pop: 1,
  action: r126,
}, {
  production: 'VariableDeclaratorList',
  pop: 2,
  action: r127,
}, {
  production: 'VariableDeclarator',
  pop: 3,
  action: r128,
}, {
  production: 'VariableDeclarator',
  pop: 1,
  action: r129,
}, {
  production: 'IfStatement',
  pop: 9,
  action: r130,
}, {
  production: 'IfStatement',
  pop: 7,
  action: r131,
}, {
  production: 'ThrowStatement',
  pop: 3,
  action: r132,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r133,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r134,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r135,
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
