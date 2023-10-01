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
  EmptySlot,
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
  | DocComment
  | GetAccessor
  | LineComment
  | MethodDefinition
  | PropertyDeclaration;
type ExpressionList = Array<Expression | SpreadElement>;
type Id = Identifier | Pattern;
type IdentifierList = Array<Identifier | EmptySlot>;
type ObjectPropertyList = Array<ObjectProperty>;
type OptionalExpressionList = Array<Expression | SpreadElement | EmptySlot>;
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
function r26($1: Identifier): IdentifierList {
  return [$1];
}
function r27(): IdentifierList {
  return [{kind: 'EmptySlot'}];
}
function r28($1: IdentifierList, $2: Identifier): IdentifierList {
  $1.push($2);
  return $1;
}
function r29($1: IdentifierList, $2: Identifier): IdentifierList {
  $1.push($2);
  return $1;
}
function r30($1: IdentifierList): IdentifierList {
  $1.push({kind: 'EmptySlot'});
  return $1;
}
function r31(): IdentifierList {
  return [];
}
function r32(_$1: Token, $2: ObjectPropertyList): ObjectPattern {
  return {
    kind: 'ObjectPattern',
    properties: $2,
  };
}
function r33($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r34($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r35(_$1: Token, $2: Expression): Expression {
  return $2;
}
function r36($1: Expression): Expression {
  return {
    kind: 'NonNullExpression',
    expression: $1,
  };
}
function r37(): Expression {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r38($1: AssignmentExpression): Expression {
  return $1;
}
function r39($1: BinaryExpression): Expression {
  return $1;
}
function r40($1: CallExpression): Expression {
  return $1;
}
function r41($1: DecrementExpression): Expression {
  return $1;
}
function r42($1: IncrementExpression): Expression {
  return $1;
}
function r43($1: Identifier, _$2: Token, $3: Type): Expression {
  return {
    ...$1,
    cast: $3,
  };
}
function r44($1: Identifier): Expression {
  return $1;
}
function r45($1: IndexExpression): Expression {
  return $1;
}
function r46($1: LogicalNotExpression): Expression {
  return $1;
}
function r47($1: MemberExpression): Expression {
  return $1;
}
function r48($1: NewExpression): Expression {
  return $1;
}
function r49($1: ObjectValue): Expression {
  return $1;
}
function r50($1: PrimitiveValue): Expression {
  return $1;
}
function r51($1: Expression, _$2: Token, $3: Expression): AssignmentExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r52($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>',
    rhs: $3,
  };
}
function r53($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '>=',
    rhs: $3,
  };
}
function r54($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<',
    rhs: $3,
  };
}
function r55($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '<=',
    rhs: $3,
  };
}
function r56($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r57($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r58($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r59($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r60($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r61($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r62(
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
function r63($1: Expression, _$2: Token, $3: ExpressionList): CallExpression {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r64($1: Expression): ExpressionList {
  return [$1];
}
function r65($1: SpreadElement): ExpressionList {
  return [$1];
}
function r66($1: ExpressionList, _$2: Token, $3: Expression): ExpressionList {
  $1.push($3);
  return $1;
}
function r67(
  $1: ExpressionList,
  _$2: Token,
  $3: SpreadElement,
): ExpressionList {
  $1.push($3);
  return $1;
}
function r68(): ExpressionList {
  return [];
}
function r69(_$1: Token, $2: Expression): SpreadElement {
  return {
    kind: 'SpreadElement',
    expression: $2,
  };
}
function r70(_$1: Token, $2: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r71($1: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r72(_$1: Token, $2: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r73($1: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r74($1: Expression, _$2: Token, $3: Expression): IndexExpression {
  return {
    kind: 'IndexExpression',
    index: $3,
    indexee: $1,
  };
}
function r75(_$1: Token, $2: Expression): LogicalNotExpression {
  return {
    kind: 'LogicalNotExpression',
    operand: $2,
  };
}
function r76($1: Expression, _$2: Token, $3: Identifier): MemberExpression {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r77(_$1: Token, $2: ObjectPropertyList): ObjectValue {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r78($1: ObjectProperty): ObjectPropertyList {
  return [$1];
}
function r79(
  $1: ObjectPropertyList,
  _$2: Token,
  $3: ObjectProperty,
): ObjectPropertyList {
  $1.push($3);
  return $1;
}
function r80(): ObjectPropertyList {
  return [];
}
function r81($1: Identifier, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r82($1: Identifier): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r83($1: NumberValue, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r84(
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
function r85($1: ArrayValue): PrimitiveValue {
  return $1;
}
function r86($1: BooleanValue): PrimitiveValue {
  return $1;
}
function r87($1: NullValue): PrimitiveValue {
  return $1;
}
function r88($1: NumberValue): PrimitiveValue {
  return $1;
}
function r89($1: StringValue): PrimitiveValue {
  return $1;
}
function r90(_$1: Token, $2: OptionalExpressionList): ArrayValue {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r91($1: Expression): OptionalExpressionList {
  return [$1];
}
function r92($1: Expression): OptionalExpressionList {
  return [$1];
}
function r93($1: SpreadElement): OptionalExpressionList {
  return [$1];
}
function r94($1: SpreadElement): OptionalExpressionList {
  return [$1];
}
function r95(): OptionalExpressionList {
  return [{kind: 'EmptySlot'}];
}
function r96(
  $1: OptionalExpressionList,
  $2: Expression,
): OptionalExpressionList {
  $1.push($2);
  return $1;
}
function r97(
  $1: OptionalExpressionList,
  $2: Expression,
): OptionalExpressionList {
  $1.push($2);
  return $1;
}
function r98(
  $1: OptionalExpressionList,
  $2: SpreadElement,
): OptionalExpressionList {
  $1.push($2);
  return $1;
}
function r99(
  $1: OptionalExpressionList,
  $2: SpreadElement,
): OptionalExpressionList {
  $1.push($2);
  return $1;
}
function r100($1: OptionalExpressionList): OptionalExpressionList {
  $1.push({kind: 'EmptySlot'});
  return $1;
}
function r101(): OptionalExpressionList {
  return [];
}
function r102(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r103(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r104(): NullValue {
  return {
    kind: 'NullValue',
  };
}
function r105($1: Token): NumberValue {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r106($1: Token): StringValue {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r107($1: GenericType): Type {
  return $1;
}
function r108($1: NamedType): Type {
  return $1;
}
function r109($1: TupleType): Type {
  return $1;
}
function r110($1: UnionType): Type {
  return $1;
}
function r111($1: Identifier, _$2: Token, $3: TypeList): GenericType {
  return {
    kind: 'GenericType',
    name: $1.name,
    parameters: $3,
  };
}
function r112($1: Type): TypeList {
  return [$1];
}
function r113($1: TypeList, _$2: Token, $3: Type): TypeList {
  $1.push($3);
  return $1;
}
function r114($1: Identifier): NamedType {
  return {
    kind: 'NamedType',
    name: $1.name,
  };
}
function r115($1: Token): NamedType {
  return {
    kind: 'NamedType',
    name: $1.contents,
  };
}
function r116(_$1: Token, $2: TypeList): TupleType {
  return {
    kind: 'TupleType',
    elements: $2,
  };
}
function r117($1: Type, _$2: Token, $3: Type): UnionType {
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
function r118(
  _$1: Token,
  _$2: Token,
  $3: Declaration,
): ExportDefaultDeclaration {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r119($1: ClassDeclaration): Declaration {
  return $1;
}
function r120(
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
function r121($1: ClassBodyListItem): ClassBodyList {
  return [$1];
}
function r122($1: ClassBodyList, $2: ClassBodyListItem): ClassBodyList {
  $1.push($2);
  return $1;
}
function r123(): ClassBodyList {
  return [];
}
function r124($1: DocComment): ClassBodyListItem {
  return $1;
}
function r125($1: GetAccessor): ClassBodyListItem {
  return $1;
}
function r126($1: LineComment): ClassBodyListItem {
  return $1;
}
function r127($1: MethodDefinition): ClassBodyListItem {
  return $1;
}
function r128($1: PropertyDeclaration): ClassBodyListItem {
  return $1;
}
function r129($1: Token): DocComment {
  return {
    kind: 'DocComment',
    // TODO: parse internal structure here
    contents: [$1.contents],
  };
}
function r130(
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
function r131($1: Token): LineComment {
  return {
    kind: 'LineComment',
    contents: $1.contents.slice(2), // Strip leading "//".
  };
}
function r132(
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
function r133($1: Argument): ArgumentList {
  return [$1];
}
function r134($1: ArgumentList, _$2: Token, $3: Argument): ArgumentList {
  $1.push($3);
  return $1;
}
function r135(): ArgumentList {
  return [];
}
function r136($1: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r137($1: Identifier, _$2: Token, $3: Type): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3,
  };
}
function r138($1: Identifier, _$2: Token, $3: Type): PropertyDeclaration {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3,
  };
}
function r139($1: Expression): ExpressionStatement {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r140(
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
function r141(_$1: Token, $2: VariableDeclaratorList): VariableDeclaration {
  return {
    kind: 'VariableDeclaration',
    binding: 'let',
    declarators: $2,
  };
}
function r142($1: VariableDeclarator): VariableDeclaratorList {
  return [$1];
}
function r143(
  $1: VariableDeclaratorList,
  $2: VariableDeclarator,
): VariableDeclaratorList {
  $1.push($2);
  return $1;
}
function r144($1: Id, _$2: Token, $3: Expression): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: $3,
  };
}
function r145($1: Id): VariableDeclarator {
  return {
    kind: 'VariableDeclarator',
    lhs: $1,
    rhs: null,
  };
}
function r146(
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
function r147(
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
function r148(_$1: Token, $2: Expression): ThrowStatement {
  return {
    kind: 'ThrowStatement',
    expression: $2,
  };
}
function r149(): ReturnStatement {
  return {
    kind: 'ReturnStatement',
  };
}
function r150(_$1: Token, $2: Expression): ReturnStatement {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r151(
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
    rule: 44,
  },
  BANG: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 33,
  },
  AS: {
    kind: 'Reduce',
    rule: 33,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 33,
  },
  BANG: {
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
  COLON: {
    kind: 'Reduce',
    rule: 33,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 33,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 33,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 33,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 33,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 33,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 33,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 33,
  },
  NULL: {
    kind: 'Reduce',
    rule: 33,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 33,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 33,
  },
  REST: {
    kind: 'Reduce',
    rule: 33,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 33,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 33,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 34,
  },
  AS: {
    kind: 'Reduce',
    rule: 34,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 34,
  },
  BANG: {
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
  COLON: {
    kind: 'Reduce',
    rule: 34,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 34,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 34,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 34,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 34,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 34,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 34,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 34,
  },
  NULL: {
    kind: 'Reduce',
    rule: 34,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 34,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 34,
  },
  REST: {
    kind: 'Reduce',
    rule: 34,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 34,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 34,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 37,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 37,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 37,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 37,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 37,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 37,
  },
  NULL: {
    kind: 'Reduce',
    rule: 37,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 37,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 37,
  },
  REST: {
    kind: 'Reduce',
    rule: 37,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 37,
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
  COMMA: {
    kind: 'Reduce',
    rule: 38,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 38,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 38,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 38,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 38,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 38,
  },
  NULL: {
    kind: 'Reduce',
    rule: 38,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 38,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 38,
  },
  REST: {
    kind: 'Reduce',
    rule: 38,
  },
  CLOSING_BRACE: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 39,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 39,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 39,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 39,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 39,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 39,
  },
  NULL: {
    kind: 'Reduce',
    rule: 39,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 39,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 39,
  },
  REST: {
    kind: 'Reduce',
    rule: 39,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 39,
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
  COMMA: {
    kind: 'Reduce',
    rule: 40,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 40,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 40,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 40,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 40,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 40,
  },
  NULL: {
    kind: 'Reduce',
    rule: 40,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 40,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 40,
  },
  REST: {
    kind: 'Reduce',
    rule: 40,
  },
  CLOSING_BRACE: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 41,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 41,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 41,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 41,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 41,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 41,
  },
  NULL: {
    kind: 'Reduce',
    rule: 41,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 41,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 41,
  },
  REST: {
    kind: 'Reduce',
    rule: 41,
  },
  CLOSING_BRACE: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 42,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 42,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 42,
  },
  OPENING_BRACE: {
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
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 42,
  },
  REST: {
    kind: 'Reduce',
    rule: 42,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 42,
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
  COMMA: {
    kind: 'Reduce',
    rule: 45,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 45,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 45,
  },
  OPENING_BRACE: {
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
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 45,
  },
  REST: {
    kind: 'Reduce',
    rule: 45,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 45,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 46,
  },
  BANG: {
    kind: 'Reduce',
    rule: 46,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 46,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 46,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 46,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 46,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 46,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 46,
  },
  DOT: {
    kind: 'Reduce',
    rule: 46,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 46,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 46,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 46,
  },
  LOGICAL_AND: {
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 46,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 46,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 46,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 46,
  },
  OPENING_BRACE: {
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
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 46,
  },
  REST: {
    kind: 'Reduce',
    rule: 46,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 46,
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
    rule: 47,
  },
  BANG: {
    kind: 'Reduce',
    rule: 47,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 47,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 47,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 47,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 47,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 47,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 47,
  },
  DOT: {
    kind: 'Reduce',
    rule: 47,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 47,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 47,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 47,
  },
  LOGICAL_AND: {
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 47,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 47,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 47,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 47,
  },
  OPENING_BRACE: {
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
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 47,
  },
  REST: {
    kind: 'Reduce',
    rule: 47,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 47,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 48,
  },
  BANG: {
    kind: 'Reduce',
    rule: 48,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 48,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 48,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 48,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 48,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 48,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 48,
  },
  DOT: {
    kind: 'Reduce',
    rule: 48,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 48,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 48,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 48,
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 48,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 48,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 48,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 48,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 48,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 48,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 48,
  },
  NULL: {
    kind: 'Reduce',
    rule: 48,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 48,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 48,
  },
  REST: {
    kind: 'Reduce',
    rule: 48,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 48,
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
    rule: 49,
  },
  BANG: {
    kind: 'Reduce',
    rule: 49,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 49,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 49,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 49,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 49,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 49,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 49,
  },
  DOT: {
    kind: 'Reduce',
    rule: 49,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 49,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 49,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 49,
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 49,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 49,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 49,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 49,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 49,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 49,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 49,
  },
  NULL: {
    kind: 'Reduce',
    rule: 49,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 49,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 49,
  },
  REST: {
    kind: 'Reduce',
    rule: 49,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 49,
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
    rule: 80,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 80,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 50,
  },
  BANG: {
    kind: 'Reduce',
    rule: 50,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 50,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 50,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 50,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 50,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 50,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 50,
  },
  DOT: {
    kind: 'Reduce',
    rule: 50,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 50,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 50,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 50,
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 50,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 50,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 50,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 50,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 50,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 50,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 50,
  },
  NULL: {
    kind: 'Reduce',
    rule: 50,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 50,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 50,
  },
  REST: {
    kind: 'Reduce',
    rule: 50,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 50,
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
  COMMA: {
    kind: 'Reduce',
    rule: 85,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 85,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 85,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 85,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 85,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 85,
  },
  NULL: {
    kind: 'Reduce',
    rule: 85,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 85,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 85,
  },
  REST: {
    kind: 'Reduce',
    rule: 85,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 85,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 28,
  },
  COMMA: {
    kind: 'Shift',
    state: 104,
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
    rule: 101,
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
  COMMA: {
    kind: 'Reduce',
    rule: 86,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 86,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 86,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 86,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 86,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 86,
  },
  NULL: {
    kind: 'Reduce',
    rule: 86,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 86,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 86,
  },
  REST: {
    kind: 'Reduce',
    rule: 86,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 86,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 102,
  },
  BANG: {
    kind: 'Reduce',
    rule: 102,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 102,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 102,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 102,
  },
  DOT: {
    kind: 'Reduce',
    rule: 102,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 102,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 102,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 102,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 102,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 102,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 102,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 102,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 102,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 102,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 102,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 102,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 102,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 102,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 102,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 102,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 103,
  },
  BANG: {
    kind: 'Reduce',
    rule: 103,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 103,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 103,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 103,
  },
  DOT: {
    kind: 'Reduce',
    rule: 103,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 103,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 103,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 103,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 103,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 103,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 103,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 103,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 103,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 103,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 103,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 103,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 103,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 103,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 103,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 103,
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
  COMMA: {
    kind: 'Reduce',
    rule: 87,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 87,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 87,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 87,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 87,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 87,
  },
  NULL: {
    kind: 'Reduce',
    rule: 87,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 87,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 87,
  },
  REST: {
    kind: 'Reduce',
    rule: 87,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 87,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 104,
  },
  BANG: {
    kind: 'Reduce',
    rule: 104,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 104,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 104,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 104,
  },
  DOT: {
    kind: 'Reduce',
    rule: 104,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 104,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 104,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 104,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 104,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 104,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 104,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 104,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 104,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 104,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 104,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 104,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 104,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 104,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 104,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 104,
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
  COMMA: {
    kind: 'Reduce',
    rule: 88,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 88,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 88,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 88,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 88,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 88,
  },
  NULL: {
    kind: 'Reduce',
    rule: 88,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 88,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 88,
  },
  REST: {
    kind: 'Reduce',
    rule: 88,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 88,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 105,
  },
  BANG: {
    kind: 'Reduce',
    rule: 105,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 105,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 105,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 105,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 105,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 105,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 105,
  },
  DOT: {
    kind: 'Reduce',
    rule: 105,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 105,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 105,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 105,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 105,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 105,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 105,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 105,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 105,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 105,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 105,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 105,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 105,
  },
  THIS: {
    kind: 'Reduce',
    rule: 105,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 105,
  },
  GET: {
    kind: 'Reduce',
    rule: 105,
  },
  NEW: {
    kind: 'Reduce',
    rule: 105,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 105,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 105,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 105,
  },
  NULL: {
    kind: 'Reduce',
    rule: 105,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 105,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 105,
  },
  REST: {
    kind: 'Reduce',
    rule: 105,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 105,
  },
  COLON: {
    kind: 'Reduce',
    rule: 105,
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
  COMMA: {
    kind: 'Reduce',
    rule: 89,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 89,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 89,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 89,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 89,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 89,
  },
  NULL: {
    kind: 'Reduce',
    rule: 89,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 89,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 89,
  },
  REST: {
    kind: 'Reduce',
    rule: 89,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 89,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 106,
  },
  BANG: {
    kind: 'Reduce',
    rule: 106,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 106,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 106,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 106,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 106,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 106,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 106,
  },
  DOT: {
    kind: 'Reduce',
    rule: 106,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 106,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 106,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 106,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 106,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 106,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 106,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 106,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 106,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 106,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 106,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 106,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 106,
  },
  THIS: {
    kind: 'Reduce',
    rule: 106,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 106,
  },
  GET: {
    kind: 'Reduce',
    rule: 106,
  },
  NEW: {
    kind: 'Reduce',
    rule: 106,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 106,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 106,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 106,
  },
  NULL: {
    kind: 'Reduce',
    rule: 106,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 106,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 106,
  },
  REST: {
    kind: 'Reduce',
    rule: 106,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 106,
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
    state: 105,
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
    state: 106,
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
    state: 107,
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
    state: 110,
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
    state: 112,
  },
  COLON: {
    kind: 'Shift',
    state: 111,
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
  COMMA: {
    kind: 'Shift',
    state: 115,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 31,
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
    rule: 80,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 80,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 118,
  },
  COLON: {
    kind: 'Shift',
    state: 117,
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
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 128,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 139,
  },
  LET: {
    kind: 'Reduce',
    rule: 139,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 139,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 139,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 139,
  },
  FOR: {
    kind: 'Reduce',
    rule: 139,
  },
  IF: {
    kind: 'Reduce',
    rule: 139,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 139,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 139,
  },
  THROW: {
    kind: 'Reduce',
    rule: 139,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 139,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 139,
  },
  GET: {
    kind: 'Reduce',
    rule: 139,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 139,
  },
  THIS: {
    kind: 'Reduce',
    rule: 139,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 139,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 139,
  },
  BANG: {
    kind: 'Reduce',
    rule: 139,
  },
  NEW: {
    kind: 'Reduce',
    rule: 139,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 139,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 139,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 139,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 139,
  },
  NULL: {
    kind: 'Reduce',
    rule: 139,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 139,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 139,
  },
  $: {
    kind: 'Reduce',
    rule: 139,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 139,
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
  COMMA: {
    kind: 'Reduce',
    rule: 36,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 36,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 36,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 36,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 36,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 36,
  },
  NULL: {
    kind: 'Reduce',
    rule: 36,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 36,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 36,
  },
  REST: {
    kind: 'Reduce',
    rule: 36,
  },
  CLOSING_BRACE: {
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
    rule: 68,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 68,
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
  COMMA: {
    kind: 'Reduce',
    rule: 71,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 71,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 71,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 71,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 71,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 73,
  },
  BANG: {
    kind: 'Reduce',
    rule: 73,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 73,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 73,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 73,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 73,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 73,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 73,
  },
  DOT: {
    kind: 'Reduce',
    rule: 73,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 73,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 73,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 73,
  },
  LOGICAL_AND: {
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 73,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 73,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 73,
  },
  THIS: {
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
  REST: {
    kind: 'Reduce',
    rule: 73,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 73,
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
    state: 147,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 44,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 44,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 44,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 44,
  },
  OPENING_BRACE: {
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
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 44,
  },
  REST: {
    kind: 'Reduce',
    rule: 44,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 44,
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
  COMMA: {
    kind: 'Reduce',
    rule: 70,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 70,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 70,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 70,
  },
  CLOSING_BRACE: {
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
    rule: 72,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 72,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 72,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 72,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 72,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 72,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 72,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 72,
  },
  NULL: {
    kind: 'Reduce',
    rule: 72,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 72,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 72,
  },
  REST: {
    kind: 'Reduce',
    rule: 72,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 72,
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
    rule: 75,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 75,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 75,
  },
  CLOSING_BRACKET: {
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
  NEW: {
    kind: 'Reduce',
    rule: 75,
  },
  OPENING_BRACE: {
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
  REST: {
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
    state: 148,
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
    state: 149,
  },
  COMMA: {
    kind: 'Shift',
    state: 150,
  },
}, {
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
    state: 151,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 82,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 82,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 152,
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
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 154,
  },
  COMMA: {
    kind: 'Shift',
    state: 157,
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
  COMMA: {
    kind: 'Shift',
    state: 158,
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
    rule: 91,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 91,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 91,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 91,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 91,
  },
  NULL: {
    kind: 'Reduce',
    rule: 91,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 91,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 91,
  },
  REST: {
    kind: 'Reduce',
    rule: 91,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 159,
  },
  CLOSING_BRACKET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 93,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 93,
  },
  BANG: {
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
  REST: {
    kind: 'Reduce',
    rule: 93,
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 95,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 95,
  },
  BANG: {
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
  REST: {
    kind: 'Reduce',
    rule: 95,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 95,
  },
}, {
  LET: {
    kind: 'Shift',
    state: 162,
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
    rule: 149,
  },
  LET: {
    kind: 'Reduce',
    rule: 149,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 149,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 149,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 149,
  },
  FOR: {
    kind: 'Reduce',
    rule: 149,
  },
  IF: {
    kind: 'Reduce',
    rule: 149,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 149,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 149,
  },
  THROW: {
    kind: 'Reduce',
    rule: 149,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 149,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 149,
  },
  GET: {
    kind: 'Reduce',
    rule: 149,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 149,
  },
  THIS: {
    kind: 'Reduce',
    rule: 149,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 149,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 149,
  },
  BANG: {
    kind: 'Reduce',
    rule: 149,
  },
  NEW: {
    kind: 'Reduce',
    rule: 149,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 149,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 149,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 149,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 149,
  },
  NULL: {
    kind: 'Reduce',
    rule: 149,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 149,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 149,
  },
  $: {
    kind: 'Reduce',
    rule: 149,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 149,
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
    state: 164,
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
    state: 165,
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
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
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
    state: 169,
  },
  COMMA: {
    kind: 'Shift',
    state: 171,
  },
  GET: {
    kind: 'Shift',
    state: 8,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 172,
  },
  CLOSING_BRACKET: {
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
}, {
  CLOSING_BRACKET: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 27,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 173,
  },
  COMMA: {
    kind: 'Shift',
    state: 150,
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
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
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
    state: 176,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 177,
  },
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
  COMMA: {
    kind: 'Reduce',
    rule: 43,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 43,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 43,
  },
  OPENING_BRACE: {
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
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 43,
  },
  REST: {
    kind: 'Reduce',
    rule: 43,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 43,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 107,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 107,
  },
  BANG: {
    kind: 'Reduce',
    rule: 107,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 107,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 107,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 107,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 107,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 107,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 107,
  },
  DOT: {
    kind: 'Reduce',
    rule: 107,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 107,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 107,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 107,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 107,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 107,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 107,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 107,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 107,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 107,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 107,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 107,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 107,
  },
  THIS: {
    kind: 'Reduce',
    rule: 107,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 107,
  },
  GET: {
    kind: 'Reduce',
    rule: 107,
  },
  NEW: {
    kind: 'Reduce',
    rule: 107,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 107,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 107,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 107,
  },
  NULL: {
    kind: 'Reduce',
    rule: 107,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 107,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 107,
  },
  REST: {
    kind: 'Reduce',
    rule: 107,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 107,
  },
}, {
  LESS_THAN: {
    kind: 'Shift',
    state: 178,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 114,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 114,
  },
  BANG: {
    kind: 'Reduce',
    rule: 114,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 114,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 114,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 114,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 114,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 114,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 114,
  },
  DOT: {
    kind: 'Reduce',
    rule: 114,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 114,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 114,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 114,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 114,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 114,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 114,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 114,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 114,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 114,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 114,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 114,
  },
  THIS: {
    kind: 'Reduce',
    rule: 114,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 114,
  },
  GET: {
    kind: 'Reduce',
    rule: 114,
  },
  NEW: {
    kind: 'Reduce',
    rule: 114,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 114,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 114,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 114,
  },
  NULL: {
    kind: 'Reduce',
    rule: 114,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 114,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 114,
  },
  REST: {
    kind: 'Reduce',
    rule: 114,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 114,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 108,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 108,
  },
  BANG: {
    kind: 'Reduce',
    rule: 108,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 108,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 108,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 108,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 108,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 108,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 108,
  },
  DOT: {
    kind: 'Reduce',
    rule: 108,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 108,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 108,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 108,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 108,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 108,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 108,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 108,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 108,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 108,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 108,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 108,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 108,
  },
  THIS: {
    kind: 'Reduce',
    rule: 108,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 108,
  },
  GET: {
    kind: 'Reduce',
    rule: 108,
  },
  NEW: {
    kind: 'Reduce',
    rule: 108,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 108,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 108,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 108,
  },
  NULL: {
    kind: 'Reduce',
    rule: 108,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 108,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 108,
  },
  REST: {
    kind: 'Reduce',
    rule: 108,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 108,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 115,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 115,
  },
  BANG: {
    kind: 'Reduce',
    rule: 115,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 115,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 115,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 115,
  },
  DOT: {
    kind: 'Reduce',
    rule: 115,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 115,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 115,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 115,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 115,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 115,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 115,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 115,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 115,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 115,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 115,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 115,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 115,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 115,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 115,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 115,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 109,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 109,
  },
  BANG: {
    kind: 'Reduce',
    rule: 109,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 109,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 109,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 109,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 109,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 109,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 109,
  },
  DOT: {
    kind: 'Reduce',
    rule: 109,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 109,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 109,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 109,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 109,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 109,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 109,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 109,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 109,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 109,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 109,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 109,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 109,
  },
  THIS: {
    kind: 'Reduce',
    rule: 109,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 109,
  },
  GET: {
    kind: 'Reduce',
    rule: 109,
  },
  NEW: {
    kind: 'Reduce',
    rule: 109,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 109,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 109,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 109,
  },
  NULL: {
    kind: 'Reduce',
    rule: 109,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 109,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 109,
  },
  REST: {
    kind: 'Reduce',
    rule: 109,
  },
  CLOSING_BRACE: {
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
  NULL: {
    kind: 'Shift',
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 110,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 110,
  },
  BANG: {
    kind: 'Reduce',
    rule: 110,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 110,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 110,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 110,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 110,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 110,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 110,
  },
  DOT: {
    kind: 'Reduce',
    rule: 110,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 110,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 110,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 110,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 110,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 110,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 110,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 110,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 110,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 110,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 110,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 110,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 110,
  },
  THIS: {
    kind: 'Reduce',
    rule: 110,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 110,
  },
  GET: {
    kind: 'Reduce',
    rule: 110,
  },
  NEW: {
    kind: 'Reduce',
    rule: 110,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 110,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 110,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 110,
  },
  NULL: {
    kind: 'Reduce',
    rule: 110,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 110,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 110,
  },
  REST: {
    kind: 'Reduce',
    rule: 110,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 110,
  },
}, {
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  GET: {
    kind: 'Shift',
    state: 185,
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
    rule: 123,
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
  DOC_COMMENT: {
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
  LINE_COMMENT: {
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
}, {
  CONST: {
    kind: 'Reduce',
    rule: 119,
  },
  LET: {
    kind: 'Reduce',
    rule: 119,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 119,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 119,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 119,
  },
  FOR: {
    kind: 'Reduce',
    rule: 119,
  },
  IF: {
    kind: 'Reduce',
    rule: 119,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 119,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 119,
  },
  THROW: {
    kind: 'Reduce',
    rule: 119,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 119,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 119,
  },
  GET: {
    kind: 'Reduce',
    rule: 119,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 119,
  },
  THIS: {
    kind: 'Reduce',
    rule: 119,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 119,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 119,
  },
  BANG: {
    kind: 'Reduce',
    rule: 119,
  },
  NEW: {
    kind: 'Reduce',
    rule: 119,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 119,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 119,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 119,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 119,
  },
  NULL: {
    kind: 'Reduce',
    rule: 119,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 119,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 119,
  },
  $: {
    kind: 'Reduce',
    rule: 119,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 119,
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
    rule: 51,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 51,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 51,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 51,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 51,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 51,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 51,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 51,
  },
  NULL: {
    kind: 'Reduce',
    rule: 51,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 51,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 51,
  },
  REST: {
    kind: 'Reduce',
    rule: 51,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 51,
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
    rule: 52,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 52,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 52,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 52,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 52,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 52,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 52,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 52,
  },
  NULL: {
    kind: 'Reduce',
    rule: 52,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 52,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 52,
  },
  REST: {
    kind: 'Reduce',
    rule: 52,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 52,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 190,
  },
  COMMA: {
    kind: 'Shift',
    state: 191,
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 64,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 64,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 65,
  },
  COMMA: {
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
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 192,
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
    rule: 76,
  },
  BANG: {
    kind: 'Reduce',
    rule: 76,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 76,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 76,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 76,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 76,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 76,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 76,
  },
  DOT: {
    kind: 'Reduce',
    rule: 76,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 76,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 76,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 76,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 76,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 76,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 76,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 76,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 76,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 76,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 76,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 76,
  },
  CLOSING_BRACKET: {
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
  NEW: {
    kind: 'Reduce',
    rule: 76,
  },
  OPENING_BRACE: {
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
  REST: {
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
    rule: 53,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 53,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 53,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 53,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 53,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 53,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 53,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 53,
  },
  NULL: {
    kind: 'Reduce',
    rule: 53,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 53,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 53,
  },
  REST: {
    kind: 'Reduce',
    rule: 53,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 53,
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
    rule: 54,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 54,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 54,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 54,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 54,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 54,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 54,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 54,
  },
  NULL: {
    kind: 'Reduce',
    rule: 54,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 54,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 54,
  },
  REST: {
    kind: 'Reduce',
    rule: 54,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 54,
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
    rule: 55,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 55,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 55,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 55,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 55,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 55,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 55,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 55,
  },
  NULL: {
    kind: 'Reduce',
    rule: 55,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 55,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 55,
  },
  REST: {
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
    kind: 'Shift',
    state: 88,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 56,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 56,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 56,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 56,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 56,
  },
  OPENING_BRACE: {
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
  REST: {
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
    rule: 57,
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
    rule: 57,
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
    rule: 57,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 57,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 57,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 57,
  },
  THIS: {
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
  REST: {
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
    rule: 58,
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
    rule: 58,
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
  COMMA: {
    kind: 'Reduce',
    rule: 58,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 58,
  },
  THIS: {
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
  REST: {
    kind: 'Reduce',
    rule: 58,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 58,
  },
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 59,
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
    rule: 59,
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
  COMMA: {
    kind: 'Reduce',
    rule: 59,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 59,
  },
  THIS: {
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
  REST: {
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
    rule: 60,
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
    rule: 60,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 60,
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
    rule: 60,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 60,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 60,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 60,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 60,
  },
  THIS: {
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
  REST: {
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
    rule: 61,
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
    rule: 61,
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
    rule: 61,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 61,
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
    rule: 61,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 61,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 61,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 61,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 61,
  },
  THIS: {
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
  REST: {
    kind: 'Reduce',
    rule: 61,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 61,
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
  COMMA: {
    kind: 'Reduce',
    rule: 35,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 35,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 35,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 35,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 35,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 35,
  },
  NULL: {
    kind: 'Reduce',
    rule: 35,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 35,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 35,
  },
  REST: {
    kind: 'Reduce',
    rule: 35,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 35,
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
    rule: 68,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 68,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 77,
  },
  BANG: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 77,
  },
  CLOSING_BRACKET: {
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
  NEW: {
    kind: 'Reduce',
    rule: 77,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 77,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 77,
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
    state: 197,
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
  COMMA: {
    kind: 'Reduce',
    rule: 90,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 90,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 90,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 90,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 90,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 90,
  },
  NULL: {
    kind: 'Reduce',
    rule: 90,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 90,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 90,
  },
  REST: {
    kind: 'Reduce',
    rule: 90,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 90,
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
  COMMA: {
    kind: 'Shift',
    state: 198,
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
    rule: 97,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 97,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 97,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 97,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 97,
  },
  NULL: {
    kind: 'Reduce',
    rule: 97,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 97,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 97,
  },
  REST: {
    kind: 'Reduce',
    rule: 97,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 199,
  },
  CLOSING_BRACKET: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 99,
  },
  GET: {
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
  REST: {
    kind: 'Reduce',
    rule: 99,
  },
}, {
  CLOSING_BRACKET: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 100,
  },
  GET: {
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
  REST: {
    kind: 'Reduce',
    rule: 100,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 100,
  },
}, {
  CLOSING_BRACKET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 92,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 92,
  },
  BANG: {
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
  REST: {
    kind: 'Reduce',
    rule: 92,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 92,
  },
}, {
  CLOSING_BRACKET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 94,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 94,
  },
  BANG: {
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
  REST: {
    kind: 'Reduce',
    rule: 94,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 94,
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
  COMMA: {
    kind: 'Reduce',
    rule: 69,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 69,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 69,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 69,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 69,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 69,
  },
  NULL: {
    kind: 'Reduce',
    rule: 69,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 69,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 69,
  },
  REST: {
    kind: 'Reduce',
    rule: 69,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 69,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 200,
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
    state: 204,
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
    rule: 150,
  },
  LET: {
    kind: 'Reduce',
    rule: 150,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 150,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 150,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 150,
  },
  FOR: {
    kind: 'Reduce',
    rule: 150,
  },
  IF: {
    kind: 'Reduce',
    rule: 150,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 150,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 150,
  },
  THROW: {
    kind: 'Reduce',
    rule: 150,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 150,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 150,
  },
  GET: {
    kind: 'Reduce',
    rule: 150,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 150,
  },
  THIS: {
    kind: 'Reduce',
    rule: 150,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 150,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 150,
  },
  BANG: {
    kind: 'Reduce',
    rule: 150,
  },
  NEW: {
    kind: 'Reduce',
    rule: 150,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 150,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 150,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 150,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 150,
  },
  NULL: {
    kind: 'Reduce',
    rule: 150,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 150,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 150,
  },
  $: {
    kind: 'Reduce',
    rule: 150,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 150,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 148,
  },
  LET: {
    kind: 'Reduce',
    rule: 148,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 148,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 148,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 148,
  },
  FOR: {
    kind: 'Reduce',
    rule: 148,
  },
  IF: {
    kind: 'Reduce',
    rule: 148,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 148,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 148,
  },
  THROW: {
    kind: 'Reduce',
    rule: 148,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 148,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 148,
  },
  GET: {
    kind: 'Reduce',
    rule: 148,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 148,
  },
  THIS: {
    kind: 'Reduce',
    rule: 148,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 148,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 148,
  },
  BANG: {
    kind: 'Reduce',
    rule: 148,
  },
  NEW: {
    kind: 'Reduce',
    rule: 148,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 148,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 148,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 148,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 148,
  },
  NULL: {
    kind: 'Reduce',
    rule: 148,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 148,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 148,
  },
  $: {
    kind: 'Reduce',
    rule: 148,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 148,
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
    state: 205,
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
    state: 206,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 177,
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
    state: 207,
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
  COMMA: {
    kind: 'Shift',
    state: 208,
  },
  CLOSING_BRACKET: {
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
}, {
  CLOSING_BRACKET: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 30,
  },
}, {
  CLOSING_BRACKET: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 26,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 32,
  },
  ASSIGN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 32,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 32,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 32,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 209,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 177,
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
    state: 210,
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
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
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
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 213,
  },
  COMMA: {
    kind: 'Shift',
    state: 214,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 177,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 112,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 112,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 112,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 215,
  },
  DOC_COMMENT: {
    kind: 'Shift',
    state: 12,
  },
  GET: {
    kind: 'Shift',
    state: 185,
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
    rule: 121,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 121,
  },
  GET: {
    kind: 'Reduce',
    rule: 121,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 121,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 121,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 124,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 124,
  },
  GET: {
    kind: 'Reduce',
    rule: 124,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 124,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 124,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 125,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 125,
  },
  GET: {
    kind: 'Reduce',
    rule: 125,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 125,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 125,
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
    rule: 34,
  },
  COLON: {
    kind: 'Reduce',
    rule: 34,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 126,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 126,
  },
  GET: {
    kind: 'Reduce',
    rule: 126,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 126,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 126,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 127,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 127,
  },
  GET: {
    kind: 'Reduce',
    rule: 127,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 127,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 127,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 219,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 218,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 128,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 128,
  },
  GET: {
    kind: 'Reduce',
    rule: 128,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 128,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 128,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 63,
  },
  BANG: {
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
  COMMA: {
    kind: 'Reduce',
    rule: 63,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 63,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 63,
  },
  OPENING_BRACE: {
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
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 63,
  },
  REST: {
    kind: 'Reduce',
    rule: 63,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 63,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 74,
  },
  BANG: {
    kind: 'Reduce',
    rule: 74,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 74,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 74,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 74,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 74,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 74,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 74,
  },
  DOT: {
    kind: 'Reduce',
    rule: 74,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 74,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 74,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 74,
  },
  LOGICAL_AND: {
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 74,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 74,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 74,
  },
  THIS: {
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
  REST: {
    kind: 'Reduce',
    rule: 74,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 74,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 222,
  },
  COMMA: {
    kind: 'Shift',
    state: 191,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 79,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 79,
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
    rule: 81,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 81,
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
    rule: 83,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 83,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 223,
  },
}, {
  CLOSING_BRACKET: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 96,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 96,
  },
  BANG: {
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
  REST: {
    kind: 'Reduce',
    rule: 96,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 96,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 98,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 98,
  },
  THIS: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 98,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 98,
  },
  BANG: {
    kind: 'Reduce',
    rule: 98,
  },
  NEW: {
    kind: 'Reduce',
    rule: 98,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 98,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 98,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 98,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 98,
  },
  NULL: {
    kind: 'Reduce',
    rule: 98,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 98,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 98,
  },
  REST: {
    kind: 'Reduce',
    rule: 98,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 98,
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
    rule: 141,
  },
}, {
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 142,
  },
  GET: {
    kind: 'Reduce',
    rule: 142,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 142,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 142,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 142,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 226,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 145,
  },
  GET: {
    kind: 'Reduce',
    rule: 145,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 145,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 145,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 145,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 227,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 228,
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
  COMMA: {
    kind: 'Reduce',
    rule: 28,
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
    rule: 117,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 117,
  },
  BANG: {
    kind: 'Reduce',
    rule: 117,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 117,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 117,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 117,
  },
  DOT: {
    kind: 'Reduce',
    rule: 117,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 117,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 117,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 117,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 117,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 117,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 117,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 117,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 117,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 117,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 117,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 117,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 117,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 117,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 117,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 117,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 214,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 231,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 116,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 116,
  },
  BANG: {
    kind: 'Reduce',
    rule: 116,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 116,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 116,
  },
  OPENING_PAREN: {
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
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 116,
  },
  DOT: {
    kind: 'Reduce',
    rule: 116,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 116,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 116,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 116,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 116,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 116,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 116,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 116,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 116,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 116,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 116,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 116,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 116,
  },
  THIS: {
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
  NEW: {
    kind: 'Reduce',
    rule: 116,
  },
  OPENING_BRACE: {
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
  REST: {
    kind: 'Reduce',
    rule: 116,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 116,
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
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 120,
  },
  LET: {
    kind: 'Reduce',
    rule: 120,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 120,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 120,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 120,
  },
  FOR: {
    kind: 'Reduce',
    rule: 120,
  },
  IF: {
    kind: 'Reduce',
    rule: 120,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 120,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 120,
  },
  THROW: {
    kind: 'Reduce',
    rule: 120,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 120,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 120,
  },
  GET: {
    kind: 'Reduce',
    rule: 120,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 120,
  },
  THIS: {
    kind: 'Reduce',
    rule: 120,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 120,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 120,
  },
  BANG: {
    kind: 'Reduce',
    rule: 120,
  },
  NEW: {
    kind: 'Reduce',
    rule: 120,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 120,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 120,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 120,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 120,
  },
  NULL: {
    kind: 'Reduce',
    rule: 120,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 120,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 120,
  },
  $: {
    kind: 'Reduce',
    rule: 120,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 120,
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 233,
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
    rule: 135,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 135,
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
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 66,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 66,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 67,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 67,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 62,
  },
  BANG: {
    kind: 'Reduce',
    rule: 62,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 62,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 62,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 62,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 62,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 62,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 62,
  },
  DOT: {
    kind: 'Reduce',
    rule: 62,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 62,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 62,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 62,
  },
  LOGICAL_AND: {
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 62,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 62,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 62,
  },
  THIS: {
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
  REST: {
    kind: 'Reduce',
    rule: 62,
  },
  CLOSING_BRACE: {
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
    state: 239,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 143,
  },
  GET: {
    kind: 'Reduce',
    rule: 143,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 143,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 143,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 143,
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
    state: 243,
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
    state: 244,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 88,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 111,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 111,
  },
  BANG: {
    kind: 'Reduce',
    rule: 111,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 111,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 111,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 111,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 111,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 111,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 111,
  },
  DOT: {
    kind: 'Reduce',
    rule: 111,
  },
  GREATER_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 111,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 111,
  },
  LESS_THAN_OR_EQUAL: {
    kind: 'Reduce',
    rule: 111,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 111,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 111,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 111,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 111,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 111,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 111,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 111,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 111,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 111,
  },
  THIS: {
    kind: 'Reduce',
    rule: 111,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 111,
  },
  GET: {
    kind: 'Reduce',
    rule: 111,
  },
  NEW: {
    kind: 'Reduce',
    rule: 111,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 111,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 111,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 111,
  },
  NULL: {
    kind: 'Reduce',
    rule: 111,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 111,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 111,
  },
  REST: {
    kind: 'Reduce',
    rule: 111,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 111,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 177,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 113,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 113,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 113,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 245,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 246,
  },
  COMMA: {
    kind: 'Shift',
    state: 247,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 133,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 133,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 248,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 136,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 136,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 177,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 249,
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
    rule: 84,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 84,
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
    rule: 144,
  },
  GET: {
    kind: 'Reduce',
    rule: 144,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 144,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 144,
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
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 252,
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
    state: 253,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 254,
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
  NULL: {
    kind: 'Shift',
    state: 124,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 126,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 138,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 138,
  },
  GET: {
    kind: 'Reduce',
    rule: 138,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 138,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 138,
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
    state: 257,
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
    state: 258,
  },
  CONST: {
    kind: 'Reduce',
    rule: 147,
  },
  LET: {
    kind: 'Reduce',
    rule: 147,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 147,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 147,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 147,
  },
  FOR: {
    kind: 'Reduce',
    rule: 147,
  },
  IF: {
    kind: 'Reduce',
    rule: 147,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 147,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 147,
  },
  THROW: {
    kind: 'Reduce',
    rule: 147,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 147,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 147,
  },
  GET: {
    kind: 'Reduce',
    rule: 147,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 147,
  },
  THIS: {
    kind: 'Reduce',
    rule: 147,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 147,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 147,
  },
  BANG: {
    kind: 'Reduce',
    rule: 147,
  },
  NEW: {
    kind: 'Reduce',
    rule: 147,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 147,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 147,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 147,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 147,
  },
  NULL: {
    kind: 'Reduce',
    rule: 147,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 147,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 147,
  },
  $: {
    kind: 'Reduce',
    rule: 147,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 147,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 151,
  },
  LET: {
    kind: 'Reduce',
    rule: 151,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 151,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 151,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 151,
  },
  FOR: {
    kind: 'Reduce',
    rule: 151,
  },
  IF: {
    kind: 'Reduce',
    rule: 151,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 151,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 151,
  },
  THROW: {
    kind: 'Reduce',
    rule: 151,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 151,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 151,
  },
  GET: {
    kind: 'Reduce',
    rule: 151,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 151,
  },
  THIS: {
    kind: 'Reduce',
    rule: 151,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 151,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 151,
  },
  BANG: {
    kind: 'Reduce',
    rule: 151,
  },
  NEW: {
    kind: 'Reduce',
    rule: 151,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 151,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 151,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 151,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 151,
  },
  NULL: {
    kind: 'Reduce',
    rule: 151,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 151,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 151,
  },
  $: {
    kind: 'Reduce',
    rule: 151,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 151,
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
    rule: 134,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 134,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 177,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 137,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 137,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 261,
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
    state: 263,
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
    state: 264,
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
    rule: 146,
  },
  LET: {
    kind: 'Reduce',
    rule: 146,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 146,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 146,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 146,
  },
  FOR: {
    kind: 'Reduce',
    rule: 146,
  },
  IF: {
    kind: 'Reduce',
    rule: 146,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 146,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 146,
  },
  THROW: {
    kind: 'Reduce',
    rule: 146,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 146,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 146,
  },
  GET: {
    kind: 'Reduce',
    rule: 146,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 146,
  },
  THIS: {
    kind: 'Reduce',
    rule: 146,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 146,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 146,
  },
  BANG: {
    kind: 'Reduce',
    rule: 146,
  },
  NEW: {
    kind: 'Reduce',
    rule: 146,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 146,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 146,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 146,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 146,
  },
  NULL: {
    kind: 'Reduce',
    rule: 146,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 146,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 146,
  },
  $: {
    kind: 'Reduce',
    rule: 146,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 146,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 130,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 130,
  },
  GET: {
    kind: 'Reduce',
    rule: 130,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 130,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 130,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 132,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 132,
  },
  GET: {
    kind: 'Reduce',
    rule: 132,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 132,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 132,
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
    state: 266,
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
    rule: 140,
  },
  LET: {
    kind: 'Reduce',
    rule: 140,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 140,
  },
  DOC_COMMENT: {
    kind: 'Reduce',
    rule: 140,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 140,
  },
  FOR: {
    kind: 'Reduce',
    rule: 140,
  },
  IF: {
    kind: 'Reduce',
    rule: 140,
  },
  LINE_COMMENT: {
    kind: 'Reduce',
    rule: 140,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 140,
  },
  THROW: {
    kind: 'Reduce',
    rule: 140,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 140,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 140,
  },
  GET: {
    kind: 'Reduce',
    rule: 140,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 140,
  },
  THIS: {
    kind: 'Reduce',
    rule: 140,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 140,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 140,
  },
  BANG: {
    kind: 'Reduce',
    rule: 140,
  },
  NEW: {
    kind: 'Reduce',
    rule: 140,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 140,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 140,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 140,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 140,
  },
  NULL: {
    kind: 'Reduce',
    rule: 140,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 140,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 140,
  },
  $: {
    kind: 'Reduce',
    rule: 140,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 140,
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
    Identifier: 90,
    IncrementExpression: 24,
    IndexExpression: 26,
    LogicalNotExpression: 27,
    MemberExpression: 29,
    NewExpression: 30,
    NullValue: 40,
    NumberValue: 42,
    ObjectValue: 32,
    OptionalExpressionList: 100,
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
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 109,
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
    Identifier: 114,
    IdentifierList: 113,
  },
  {},
  {
    Identifier: 97,
    NumberValue: 98,
    ObjectProperty: 96,
    ObjectPropertyList: 116,
  },
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 119,
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
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 120,
    UnionType: 127,
  },
  {},
  {
    ClassDeclaration: 130,
    Declaration: 129,
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
    Expression: 131,
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
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 134,
    ExpressionList: 133,
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
    SpreadElement: 135,
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
    Identifier: 137,
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
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 143,
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
    Expression: 144,
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
    Expression: 145,
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
    Expression: 146,
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
    Expression: 153,
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
    SpreadElement: 156,
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
  {
    VariableDeclaration: 161,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 163,
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
    Expression: 166,
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
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 167,
    UnionType: 127,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 168,
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
    Identifier: 170,
  },
  {},
  {},
  {},
  {
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 174,
    UnionType: 127,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 175,
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
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 180,
    TypeList: 179,
    UnionType: 127,
  },
  {},
  {
    ClassBodyList: 181,
    ClassBodyListItem: 182,
    DocComment: 183,
    GetAccessor: 184,
    Identifier: 188,
    LineComment: 186,
    MethodDefinition: 187,
    PropertyDeclaration: 189,
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
  {},
  {},
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 134,
    ExpressionList: 193,
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
    SpreadElement: 135,
    StringValue: 44,
  },
  {},
  {
    Identifier: 97,
    NumberValue: 98,
    ObjectProperty: 194,
  },
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 195,
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
    Expression: 196,
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
  {
    ArrayPattern: 62,
    Id: 203,
    Identifier: 60,
    ObjectPattern: 64,
    Pattern: 61,
    VariableDeclarator: 202,
    VariableDeclaratorList: 201,
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
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 211,
    UnionType: 127,
  },
  {
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 180,
    TypeList: 212,
    UnionType: 127,
  },
  {},
  {},
  {
    ClassBodyListItem: 216,
    DocComment: 183,
    GetAccessor: 184,
    Identifier: 188,
    LineComment: 186,
    MethodDefinition: 187,
    PropertyDeclaration: 189,
  },
  {},
  {},
  {},
  {
    Identifier: 217,
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
    Expression: 220,
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
    SpreadElement: 221,
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
  {
    ArrayValue: 35,
    AssignmentExpression: 19,
    BinaryExpression: 20,
    BooleanValue: 37,
    CallExpression: 21,
    DecrementExpression: 22,
    Expression: 224,
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
    Id: 203,
    Identifier: 60,
    ObjectPattern: 64,
    Pattern: 61,
    VariableDeclarator: 225,
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
    Expression: 229,
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
    Expression: 230,
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
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 232,
    UnionType: 127,
  },
  {},
  {},
  {},
  {
    Argument: 235,
    ArgumentList: 234,
    Identifier: 236,
  },
  {
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 237,
    UnionType: 127,
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
    Expression: 238,
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
    Expression: 240,
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
    StatementList: 241,
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
    StatementList: 242,
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
    Expression: 250,
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
    Argument: 255,
    Identifier: 236,
  },
  {
    GenericType: 121,
    Identifier: 122,
    NamedType: 123,
    TupleType: 125,
    Type: 256,
    UnionType: 127,
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
    StatementList: 259,
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
    StatementList: 260,
    StringValue: 44,
    ThrowStatement: 54,
    WhileStatement: 56,
  },
  {},
  {},
  {},
  {
    IfStatement: 262,
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
    StatementList: 265,
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
  pop: 2,
  action: r26,
}, {
  production: 'IdentifierList',
  pop: 1,
  action: r27,
}, {
  production: 'IdentifierList',
  pop: 3,
  action: r28,
}, {
  production: 'IdentifierList',
  pop: 2,
  action: r29,
}, {
  production: 'IdentifierList',
  pop: 2,
  action: r30,
}, {
  production: 'IdentifierList',
  pop: 0,
  action: r31,
}, {
  production: 'ObjectPattern',
  pop: 3,
  action: r32,
}, {
  production: 'Identifier',
  pop: 1,
  action: r33,
}, {
  production: 'Identifier',
  pop: 1,
  action: r34,
}, {
  production: 'Expression',
  pop: 3,
  action: r35,
}, {
  production: 'Expression',
  pop: 2,
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
  pop: 3,
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
  production: 'Expression',
  pop: 1,
  action: r46,
}, {
  production: 'Expression',
  pop: 1,
  action: r47,
}, {
  production: 'Expression',
  pop: 1,
  action: r48,
}, {
  production: 'Expression',
  pop: 1,
  action: r49,
}, {
  production: 'Expression',
  pop: 1,
  action: r50,
}, {
  production: 'AssignmentExpression',
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
  production: 'BinaryExpression',
  pop: 3,
  action: r57,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r58,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r59,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r60,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r61,
}, {
  production: 'NewExpression',
  pop: 5,
  action: r62,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r63,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r64,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r65,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r66,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r67,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r68,
}, {
  production: 'SpreadElement',
  pop: 2,
  action: r69,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r70,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r71,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r72,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r73,
}, {
  production: 'IndexExpression',
  pop: 4,
  action: r74,
}, {
  production: 'LogicalNotExpression',
  pop: 2,
  action: r75,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r76,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r77,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r78,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r79,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r80,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r81,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r82,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r83,
}, {
  production: 'ObjectProperty',
  pop: 5,
  action: r84,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r85,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r86,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r87,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r88,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r89,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r90,
}, {
  production: 'OptionalExpressionList',
  pop: 1,
  action: r91,
}, {
  production: 'OptionalExpressionList',
  pop: 2,
  action: r92,
}, {
  production: 'OptionalExpressionList',
  pop: 1,
  action: r93,
}, {
  production: 'OptionalExpressionList',
  pop: 2,
  action: r94,
}, {
  production: 'OptionalExpressionList',
  pop: 1,
  action: r95,
}, {
  production: 'OptionalExpressionList',
  pop: 3,
  action: r96,
}, {
  production: 'OptionalExpressionList',
  pop: 2,
  action: r97,
}, {
  production: 'OptionalExpressionList',
  pop: 3,
  action: r98,
}, {
  production: 'OptionalExpressionList',
  pop: 2,
  action: r99,
}, {
  production: 'OptionalExpressionList',
  pop: 2,
  action: r100,
}, {
  production: 'OptionalExpressionList',
  pop: 0,
  action: r101,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r102,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r103,
}, {
  production: 'NullValue',
  pop: 1,
  action: r104,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r105,
}, {
  production: 'StringValue',
  pop: 1,
  action: r106,
}, {
  production: 'Type',
  pop: 1,
  action: r107,
}, {
  production: 'Type',
  pop: 1,
  action: r108,
}, {
  production: 'Type',
  pop: 1,
  action: r109,
}, {
  production: 'Type',
  pop: 1,
  action: r110,
}, {
  production: 'GenericType',
  pop: 4,
  action: r111,
}, {
  production: 'TypeList',
  pop: 1,
  action: r112,
}, {
  production: 'TypeList',
  pop: 3,
  action: r113,
}, {
  production: 'NamedType',
  pop: 1,
  action: r114,
}, {
  production: 'NamedType',
  pop: 1,
  action: r115,
}, {
  production: 'TupleType',
  pop: 3,
  action: r116,
}, {
  production: 'UnionType',
  pop: 3,
  action: r117,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r118,
}, {
  production: 'Declaration',
  pop: 1,
  action: r119,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r120,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r121,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r122,
}, {
  production: 'ClassBodyList',
  pop: 0,
  action: r123,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r124,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r125,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r126,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r127,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r128,
}, {
  production: 'DocComment',
  pop: 1,
  action: r129,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r130,
}, {
  production: 'LineComment',
  pop: 1,
  action: r131,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r132,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r133,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r134,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r135,
}, {
  production: 'Argument',
  pop: 1,
  action: r136,
}, {
  production: 'Argument',
  pop: 3,
  action: r137,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r138,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r139,
}, {
  production: 'ForStatement',
  pop: 11,
  action: r140,
}, {
  production: 'VariableDeclaration',
  pop: 2,
  action: r141,
}, {
  production: 'VariableDeclaratorList',
  pop: 1,
  action: r142,
}, {
  production: 'VariableDeclaratorList',
  pop: 2,
  action: r143,
}, {
  production: 'VariableDeclarator',
  pop: 3,
  action: r144,
}, {
  production: 'VariableDeclarator',
  pop: 1,
  action: r145,
}, {
  production: 'IfStatement',
  pop: 9,
  action: r146,
}, {
  production: 'IfStatement',
  pop: 7,
  action: r147,
}, {
  production: 'ThrowStatement',
  pop: 3,
  action: r148,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r149,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r150,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r151,
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
      // Use "as any" cast to suppress:
      // - TS2590: Expression produces a union type that is too complex to represent.
      // - TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
      stack.push([(code as any)(...popped), target]);
    }
  }
}
