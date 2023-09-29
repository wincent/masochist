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
function r8($1: IfStatement): Statement {
  return $1;
}
function r9($1: ReturnStatement): Statement {
  return $1;
}
function r10($1: ThrowStatement): Statement {
  return $1;
}
function r11($1: WhileStatement): Statement {
  return $1;
}
function r12(
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
function r13(
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
function r14(
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
function r15(
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
function r16($1: Identifier, _$2: Token, $3: Expression): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1,
    rhs: $3,
  };
}
function r17($1: Identifier): Id {
  return $1;
}
function r18($1: Pattern): Id {
  return $1;
}
function r19($1: ArrayPattern): Pattern {
  return $1;
}
function r20($1: ObjectPattern): Pattern {
  return $1;
}
function r21(_$1: Token, $2: IdentifierList): ArrayPattern {
  return {
    kind: 'ArrayPattern',
    elements: $2,
  };
}
function r22($1: Identifier): IdentifierList {
  return [$1];
}
function r23($1: IdentifierList, _$2: Token, $3: Identifier): IdentifierList {
  $1.push($3);
  return $1;
}
function r24(_$1: Token, $2: ObjectPropertyList): ObjectPattern {
  return {
    kind: 'ObjectPattern',
    properties: $2,
  };
}
function r25($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r26($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r27(_$1: Token, $2: Expression): Expression {
  return $2;
}
function r28(): Expression {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r29($1: AssignmentExpression): Expression {
  return $1;
}
function r30($1: BinaryExpression): Expression {
  return $1;
}
function r31($1: CallExpression): Expression {
  return $1;
}
function r32($1: DecrementExpression): Expression {
  return $1;
}
function r33($1: IncrementExpression): Expression {
  return $1;
}
function r34($1: Identifier, _$2: Token, $3: Type): Expression {
  return {
    ...$1,
    cast: $3,
  };
}
function r35($1: Identifier): Expression {
  return $1;
}
function r36($1: IndexExpression): Expression {
  return $1;
}
function r37($1: LogicalNotExpression): Expression {
  return $1;
}
function r38($1: MemberExpression): Expression {
  return $1;
}
function r39($1: NewExpression): Expression {
  return $1;
}
function r40($1: ObjectValue): Expression {
  return $1;
}
function r41($1: PrimitiveValue): Expression {
  return $1;
}
function r42($1: Expression, _$2: Token, $3: Expression): AssignmentExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r43($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r44($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r45($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r46($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r47($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r48($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r49(
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
function r50($1: Expression, _$2: Token, $3: ExpressionList): CallExpression {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r51($1: Expression): ExpressionList {
  return [$1];
}
function r52($1: SpreadElement): ExpressionList {
  return [$1];
}
function r53($1: ExpressionList, _$2: Token, $3: Expression): ExpressionList {
  $1.push($3);
  return $1;
}
function r54(
  $1: ExpressionList,
  _$2: Token,
  $3: SpreadElement,
): ExpressionList {
  $1.push($3);
  return $1;
}
function r55(): ExpressionList {
  return [];
}
function r56(_$1: Token, $2: Expression): SpreadElement {
  return {
    kind: 'SpreadElement',
    expression: $2,
  };
}
function r57(_$1: Token, $2: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r58($1: Expression): DecrementExpression {
  return {
    kind: 'DecrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r59(_$1: Token, $2: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $2,
    position: 'prefix',
  };
}
function r60($1: Expression): IncrementExpression {
  return {
    kind: 'IncrementExpression',
    operand: $1,
    position: 'postfix',
  };
}
function r61($1: Expression, _$2: Token, $3: Expression): IndexExpression {
  return {
    kind: 'IndexExpression',
    index: $3,
    indexee: $1,
  };
}
function r62(_$1: Token, $2: Expression): LogicalNotExpression {
  return {
    kind: 'LogicalNotExpression',
    operand: $2,
  };
}
function r63($1: Expression, _$2: Token, $3: Identifier): MemberExpression {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r64(_$1: Token, $2: ObjectPropertyList): ObjectValue {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r65($1: ObjectProperty): ObjectPropertyList {
  return [$1];
}
function r66(
  $1: ObjectPropertyList,
  _$2: Token,
  $3: ObjectProperty,
): ObjectPropertyList {
  $1.push($3);
  return $1;
}
function r67(): ObjectPropertyList {
  return [];
}
function r68($1: Identifier, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r69($1: Identifier): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r70($1: NumberValue, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r71(
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
function r72($1: ArrayValue): PrimitiveValue {
  return $1;
}
function r73($1: BooleanValue): PrimitiveValue {
  return $1;
}
function r74($1: NullValue): PrimitiveValue {
  return $1;
}
function r75($1: NumberValue): PrimitiveValue {
  return $1;
}
function r76($1: StringValue): PrimitiveValue {
  return $1;
}
function r77(_$1: Token, $2: ExpressionList): ArrayValue {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r78(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r79(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r80(): NullValue {
  return {
    kind: 'NullValue',
  };
}
function r81($1: Token): NumberValue {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r82($1: Token): StringValue {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r83($1: GenericType): Type {
  return $1;
}
function r84($1: NamedType): Type {
  return $1;
}
function r85($1: TupleType): Type {
  return $1;
}
function r86($1: UnionType): Type {
  return $1;
}
function r87($1: Identifier, _$2: Token, $3: TypeList): GenericType {
  return {
    kind: 'GenericType',
    name: $1.name,
    parameters: $3,
  };
}
function r88($1: Type): TypeList {
  return [$1];
}
function r89($1: TypeList, _$2: Token, $3: Type): TypeList {
  $1.push($3);
  return $1;
}
function r90($1: Identifier): NamedType {
  return {
    kind: 'NamedType',
    name: $1.name,
  };
}
function r91($1: Token): NamedType {
  return {
    kind: 'NamedType',
    name: $1.contents,
  };
}
function r92(_$1: Token, $2: TypeList): TupleType {
  return {
    kind: 'TupleType',
    elements: $2,
  };
}
function r93($1: Type, _$2: Token, $3: Type): UnionType {
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
function r94(
  _$1: Token,
  _$2: Token,
  $3: Declaration,
): ExportDefaultDeclaration {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r95($1: ClassDeclaration): Declaration {
  return $1;
}
function r96(
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
function r97($1: ClassBodyListItem): ClassBodyList {
  return [$1];
}
function r98($1: ClassBodyList, $2: ClassBodyListItem): ClassBodyList {
  $1.push($2);
  return $1;
}
function r99(): ClassBodyList {
  return [];
}
function r100($1: GetAccessor): ClassBodyListItem {
  return $1;
}
function r101($1: MethodDefinition): ClassBodyListItem {
  return $1;
}
function r102($1: PropertyDeclaration): ClassBodyListItem {
  return $1;
}
function r103(
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
function r104(
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
function r105($1: Argument): ArgumentList {
  return [$1];
}
function r106($1: ArgumentList, _$2: Token, $3: Argument): ArgumentList {
  $1.push($3);
  return $1;
}
function r107(): ArgumentList {
  return [];
}
function r108($1: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r109($1: Identifier, _$2: Token, $3: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r110($1: Identifier, _$2: Token, $3: Identifier): PropertyDeclaration {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r111($1: Expression): ExpressionStatement {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r112(
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
function r113(
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
function r114(_$1: Token, $2: Expression): ThrowStatement {
  return {
    kind: 'ThrowStatement',
    expression: $2,
  };
}
function r115(): ReturnStatement {
  return {
    kind: 'ReturnStatement',
  };
}
function r116(_$1: Token, $2: Expression): ReturnStatement {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r117(
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
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
    state: 59,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 57,
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
    state: 59,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 57,
  },
}, {
  AS: {
    kind: 'Shift',
    state: 62,
  },
  ASSIGN: {
    kind: 'Shift',
    state: 61,
  },
  SEMICOLON: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 25,
  },
  AS: {
    kind: 'Reduce',
    rule: 25,
  },
  SEMICOLON: {
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 25,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 25,
  },
  OPENING_BRACKET: {
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
  COLON: {
    kind: 'Reduce',
    rule: 25,
  },
  OPENING_BRACE: {
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
  LESS_THAN: {
    kind: 'Reduce',
    rule: 25,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 25,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 25,
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
  LOGICAL_AND: {
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
  LESS_THAN: {
    kind: 'Reduce',
    rule: 26,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 26,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 26,
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
    state: 64,
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
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 65,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
    rule: 28,
  },
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 29,
  },
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 30,
  },
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 31,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 31,
  },
  LOGICAL_AND: {
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 32,
  },
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
    rule: 33,
  },
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
    rule: 36,
  },
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 37,
  },
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 39,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 39,
  },
  LOGICAL_AND: {
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 40,
  },
  LOGICAL_AND: {
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
    state: 88,
  },
  CLOSING_BRACE: {
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
    rule: 41,
  },
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
}, {
  SEMICOLON: {
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
    state: 92,
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
    rule: 55,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 55,
  },
}, {
  SEMICOLON: {
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 78,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 78,
  },
  LOGICAL_AND: {
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 79,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 79,
  },
  LOGICAL_AND: {
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
}, {
  SEMICOLON: {
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 80,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 80,
  },
  LOGICAL_AND: {
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 75,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 75,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 75,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 75,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 75,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 75,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 75,
  },
  DOT: {
    kind: 'Reduce',
    rule: 75,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 75,
  },
  MINUS: {
    kind: 'Reduce',
    rule: 75,
  },
  PLUS: {
    kind: 'Reduce',
    rule: 75,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 75,
  },
  STRICT_EQUALS: {
    kind: 'Reduce',
    rule: 75,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 75,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 75,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 75,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 75,
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
  LOGICAL_AND: {
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
  COLON: {
    kind: 'Reduce',
    rule: 81,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 76,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 76,
  },
  LOGICAL_AND: {
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
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 76,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 76,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 76,
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
  LOGICAL_AND: {
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
    state: 93,
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
    state: 94,
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 97,
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
    state: 99,
  },
  COLON: {
    kind: 'Shift',
    state: 98,
  },
}, {
  COLON: {
    kind: 'Reduce',
    rule: 17,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 17,
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
}, {
  COLON: {
    kind: 'Reduce',
    rule: 19,
  },
  ASSIGN: {
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
}, {
  COLON: {
    kind: 'Reduce',
    rule: 20,
  },
  ASSIGN: {
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
  NUMBER: {
    kind: 'Shift',
    state: 41,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 88,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 67,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 67,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 104,
  },
  COLON: {
    kind: 'Shift',
    state: 103,
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
    state: 110,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 112,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 114,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 10,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 111,
  },
  LET: {
    kind: 'Reduce',
    rule: 111,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 111,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 111,
  },
  IF: {
    kind: 'Reduce',
    rule: 111,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 111,
  },
  THROW: {
    kind: 'Reduce',
    rule: 111,
  },
  WHILE: {
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
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 111,
  },
  THIS: {
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
  BANG: {
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
  OPENING_BRACKET: {
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
  $: {
    kind: 'Reduce',
    rule: 111,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 111,
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
    state: 92,
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
    rule: 55,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 55,
  },
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 58,
  },
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
}, {
  SEMICOLON: {
    kind: 'Reduce',
    rule: 60,
  },
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 60,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 60,
  },
  OPENING_BRACKET: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 127,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
}, {
  AS: {
    kind: 'Shift',
    state: 62,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 35,
  },
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
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 128,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 129,
  },
  COMMA: {
    kind: 'Shift',
    state: 130,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 65,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 65,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 131,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 69,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 69,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 132,
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
    state: 134,
  },
  COMMA: {
    kind: 'Shift',
    state: 135,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 51,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 51,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 51,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 52,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 52,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 52,
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
  EXPORT: {
    kind: 'Reduce',
    rule: 115,
  },
  IF: {
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
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 138,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 139,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
    state: 110,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 112,
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
    state: 143,
  },
  COMMA: {
    kind: 'Shift',
    state: 144,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 22,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 22,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 145,
  },
  COMMA: {
    kind: 'Shift',
    state: 130,
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
    state: 110,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 112,
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
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 148,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 149,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 34,
  },
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
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 83,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 83,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 83,
  },
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 83,
  },
}, {
  LESS_THAN: {
    kind: 'Shift',
    state: 150,
  },
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
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 90,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 84,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 84,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 84,
  },
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 84,
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
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 91,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 85,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 85,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 85,
  },
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 85,
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
    state: 110,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 112,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 86,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 86,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 86,
  },
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 86,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 156,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 99,
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
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 94,
  },
  GET: {
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
  $: {
    kind: 'Reduce',
    rule: 94,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 94,
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
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 95,
  },
  GET: {
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
  $: {
    kind: 'Reduce',
    rule: 95,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 95,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 43,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
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
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 160,
  },
  COMMA: {
    kind: 'Shift',
    state: 135,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 161,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
  LOGICAL_AND: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 44,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 44,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 45,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 45,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
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
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
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
}, {
  ASSIGN: {
    kind: 'Reduce',
    rule: 46,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 46,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
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
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 47,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 47,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
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
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
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
    rule: 48,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Reduce',
    rule: 48,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
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
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 27,
  },
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
    state: 92,
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
    rule: 55,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 55,
  },
}, {
  SEMICOLON: {
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
    state: 88,
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
    state: 66,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 166,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
  LOGICAL_AND: {
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
    state: 92,
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
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 169,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
  CONST: {
    kind: 'Reduce',
    rule: 114,
  },
  LET: {
    kind: 'Reduce',
    rule: 114,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 114,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 114,
  },
  IF: {
    kind: 'Reduce',
    rule: 114,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 114,
  },
  THROW: {
    kind: 'Reduce',
    rule: 114,
  },
  WHILE: {
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
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 114,
  },
  THIS: {
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
  BANG: {
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
  OPENING_BRACKET: {
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
  $: {
    kind: 'Reduce',
    rule: 114,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 114,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 170,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 171,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 149,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 172,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
    rule: 24,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 24,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 174,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 149,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 175,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
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
    state: 110,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 112,
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
    state: 110,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 112,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 178,
  },
  COMMA: {
    kind: 'Shift',
    state: 179,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 149,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 88,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 88,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 88,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 180,
  },
  GET: {
    kind: 'Shift',
    state: 156,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 7,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 97,
  },
  GET: {
    kind: 'Reduce',
    rule: 97,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 97,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 100,
  },
  GET: {
    kind: 'Reduce',
    rule: 100,
  },
  IDENTIFIER: {
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
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 26,
  },
  COLON: {
    kind: 'Reduce',
    rule: 26,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 101,
  },
  GET: {
    kind: 'Reduce',
    rule: 101,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 101,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 184,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 183,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 50,
  },
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 61,
  },
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
  DECREMENT: {
    kind: 'Reduce',
    rule: 61,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 61,
  },
  OPENING_BRACKET: {
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
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 185,
  },
  COMMA: {
    kind: 'Shift',
    state: 135,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 66,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 66,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 68,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 68,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
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
    state: 186,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 53,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 53,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 53,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 54,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 54,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 54,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 187,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 188,
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
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 23,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 23,
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
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 93,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 93,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 93,
  },
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 93,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 179,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 191,
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
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 92,
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
    state: 110,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 112,
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
  IF: {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 96,
  },
  GET: {
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
  $: {
    kind: 'Reduce',
    rule: 96,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 96,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 98,
  },
  GET: {
    kind: 'Reduce',
    rule: 98,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 98,
  },
}, {
  OPENING_PAREN: {
    kind: 'Shift',
    state: 193,
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
    rule: 107,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 107,
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
    rule: 49,
  },
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 201,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 202,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 87,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 87,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 87,
  },
  LOGICAL_AND: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 87,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 149,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 89,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 89,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 89,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 203,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 204,
  },
  COMMA: {
    kind: 'Shift',
    state: 205,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 105,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 105,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 206,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 108,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 108,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 207,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 66,
  },
  DECREMENT: {
    kind: 'Shift',
    state: 69,
  },
  DOT: {
    kind: 'Shift',
    state: 72,
  },
  EQUALS: {
    kind: 'Shift',
    state: 76,
  },
  INCREMENT: {
    kind: 'Shift',
    state: 70,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 67,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 73,
  },
  MINUS: {
    kind: 'Shift',
    state: 74,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 71,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 68,
  },
  PLUS: {
    kind: 'Shift',
    state: 75,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 77,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 71,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 71,
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
    state: 208,
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
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
    state: 209,
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
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
  OPENING_BRACE: {
    kind: 'Shift',
    state: 210,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 211,
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
  ELSE: {
    kind: 'Shift',
    state: 214,
  },
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
  EXPORT: {
    kind: 'Reduce',
    rule: 113,
  },
  IF: {
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 106,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 106,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 109,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 109,
  },
}, {
  IF: {
    kind: 'Shift',
    state: 45,
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
    state: 218,
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
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
    state: 219,
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
    state: 45,
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
    state: 47,
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
    state: 49,
  },
  TRUE: {
    kind: 'Shift',
    state: 37,
  },
  WHILE: {
    kind: 'Shift',
    state: 51,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 112,
  },
  LET: {
    kind: 'Reduce',
    rule: 112,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 112,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 112,
  },
  IF: {
    kind: 'Reduce',
    rule: 112,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 112,
  },
  THROW: {
    kind: 'Reduce',
    rule: 112,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 112,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 112,
  },
  GET: {
    kind: 'Reduce',
    rule: 112,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 112,
  },
  THIS: {
    kind: 'Reduce',
    rule: 112,
  },
  DECREMENT: {
    kind: 'Reduce',
    rule: 112,
  },
  INCREMENT: {
    kind: 'Reduce',
    rule: 112,
  },
  BANG: {
    kind: 'Reduce',
    rule: 112,
  },
  NEW: {
    kind: 'Reduce',
    rule: 112,
  },
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 112,
  },
  OPENING_BRACKET: {
    kind: 'Reduce',
    rule: 112,
  },
  FALSE: {
    kind: 'Reduce',
    rule: 112,
  },
  TRUE: {
    kind: 'Reduce',
    rule: 112,
  },
  NULL: {
    kind: 'Reduce',
    rule: 112,
  },
  NUMBER: {
    kind: 'Reduce',
    rule: 112,
  },
  STRING_VALUE: {
    kind: 'Reduce',
    rule: 112,
  },
  $: {
    kind: 'Reduce',
    rule: 112,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 112,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 2,
    StatementList: 1,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 52,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
  },
  {},
  {},
  {
    ArrayPattern: 56,
    Id: 53,
    Identifier: 54,
    ObjectPattern: 58,
    Pattern: 55,
  },
  {
    ArrayPattern: 56,
    Id: 60,
    Identifier: 54,
    ObjectPattern: 58,
    Pattern: 55,
  },
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
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 78,
    Identifier: 79,
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
    Expression: 80,
    Identifier: 79,
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
    Expression: 81,
    Identifier: 79,
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
    Expression: 82,
    Identifier: 79,
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
    Expression: 83,
    Identifier: 79,
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
    Identifier: 86,
    NumberValue: 87,
    ObjectProperty: 85,
    ObjectPropertyList: 84,
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
    ExpressionList: 89,
    Identifier: 79,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 91,
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
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 95,
    Identifier: 79,
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
    Expression: 96,
    Identifier: 79,
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
    Identifier: 101,
    IdentifierList: 100,
  },
  {},
  {
    Identifier: 86,
    NumberValue: 87,
    ObjectProperty: 85,
    ObjectPropertyList: 102,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 105,
    Identifier: 79,
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
    GenericType: 107,
    Identifier: 108,
    NamedType: 109,
    TupleType: 111,
    Type: 106,
    UnionType: 113,
  },
  {},
  {
    ClassDeclaration: 116,
    Declaration: 115,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 117,
    Identifier: 79,
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
    Expression: 118,
    Identifier: 79,
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
    Expression: 90,
    ExpressionList: 119,
    Identifier: 79,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 91,
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
    Expression: 120,
    Identifier: 79,
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
    Identifier: 121,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 122,
    Identifier: 79,
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
    Expression: 123,
    Identifier: 79,
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
    Expression: 124,
    Identifier: 79,
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
    Identifier: 79,
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
    Identifier: 79,
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
    Expression: 133,
    Identifier: 79,
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
    Expression: 136,
    Identifier: 79,
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
    Identifier: 79,
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
    Expression: 140,
    Identifier: 79,
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
    GenericType: 107,
    Identifier: 108,
    NamedType: 109,
    TupleType: 111,
    Type: 141,
    UnionType: 113,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 142,
    Identifier: 79,
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
    GenericType: 107,
    Identifier: 108,
    NamedType: 109,
    TupleType: 111,
    Type: 146,
    UnionType: 113,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 147,
    Identifier: 79,
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
    GenericType: 107,
    Identifier: 108,
    NamedType: 109,
    TupleType: 111,
    Type: 152,
    TypeList: 151,
    UnionType: 113,
  },
  {},
  {
    ClassBodyList: 153,
    ClassBodyListItem: 154,
    GetAccessor: 155,
    Identifier: 158,
    MethodDefinition: 157,
    PropertyDeclaration: 159,
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
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 90,
    ExpressionList: 162,
    Identifier: 79,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 91,
    StringValue: 42,
  },
  {},
  {
    Identifier: 86,
    NumberValue: 87,
    ObjectProperty: 163,
  },
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 164,
    Identifier: 79,
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
    Expression: 165,
    Identifier: 79,
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
    Expression: 167,
    Identifier: 79,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    SpreadElement: 168,
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
  {
    Identifier: 173,
  },
  {},
  {},
  {},
  {},
  {
    GenericType: 107,
    Identifier: 108,
    NamedType: 109,
    TupleType: 111,
    Type: 176,
    UnionType: 113,
  },
  {
    GenericType: 107,
    Identifier: 108,
    NamedType: 109,
    TupleType: 111,
    Type: 152,
    TypeList: 177,
    UnionType: 113,
  },
  {},
  {},
  {
    ClassBodyListItem: 181,
    GetAccessor: 155,
    Identifier: 158,
    MethodDefinition: 157,
    PropertyDeclaration: 159,
  },
  {},
  {},
  {
    Identifier: 182,
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
    Expression: 189,
    Identifier: 79,
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
    Expression: 190,
    Identifier: 79,
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
    GenericType: 107,
    Identifier: 108,
    NamedType: 109,
    TupleType: 111,
    Type: 192,
    UnionType: 113,
  },
  {},
  {},
  {},
  {
    Argument: 195,
    ArgumentList: 194,
    Identifier: 196,
  },
  {
    Identifier: 197,
  },
  {},
  {
    ArrayValue: 33,
    AssignmentExpression: 17,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    DecrementExpression: 20,
    Expression: 198,
    Identifier: 79,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 2,
    StatementList: 199,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 2,
    StatementList: 200,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
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
    AssignmentStatement: 3,
    BinaryExpression: 18,
    BooleanValue: 35,
    CallExpression: 19,
    ClassDeclaration: 9,
    DecrementExpression: 20,
    ExportDefaultDeclaration: 11,
    Expression: 14,
    ExpressionStatement: 13,
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 52,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 52,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
  },
  {},
  {},
  {},
  {},
  {
    Argument: 212,
    Identifier: 196,
  },
  {
    Identifier: 213,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 2,
    StatementList: 215,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 2,
    StatementList: 216,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
  },
  {},
  {},
  {
    IfStatement: 217,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 52,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
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
    Identifier: 6,
    IfStatement: 44,
    IncrementExpression: 22,
    IndexExpression: 24,
    LogicalNotExpression: 25,
    MemberExpression: 27,
    NewExpression: 28,
    NullValue: 38,
    NumberValue: 40,
    ObjectValue: 30,
    PrimitiveValue: 32,
    ReturnStatement: 46,
    Statement: 52,
    StringValue: 42,
    ThrowStatement: 48,
    WhileStatement: 50,
  },
  {},
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
  production: 'Statement',
  pop: 1,
  action: r11,
}, {
  production: 'AssignmentStatement',
  pop: 7,
  action: r12,
}, {
  production: 'AssignmentStatement',
  pop: 5,
  action: r13,
}, {
  production: 'AssignmentStatement',
  pop: 7,
  action: r14,
}, {
  production: 'AssignmentStatement',
  pop: 5,
  action: r15,
}, {
  production: 'AssignmentStatement',
  pop: 4,
  action: r16,
}, {
  production: 'Id',
  pop: 1,
  action: r17,
}, {
  production: 'Id',
  pop: 1,
  action: r18,
}, {
  production: 'Pattern',
  pop: 1,
  action: r19,
}, {
  production: 'Pattern',
  pop: 1,
  action: r20,
}, {
  production: 'ArrayPattern',
  pop: 3,
  action: r21,
}, {
  production: 'IdentifierList',
  pop: 1,
  action: r22,
}, {
  production: 'IdentifierList',
  pop: 3,
  action: r23,
}, {
  production: 'ObjectPattern',
  pop: 3,
  action: r24,
}, {
  production: 'Identifier',
  pop: 1,
  action: r25,
}, {
  production: 'Identifier',
  pop: 1,
  action: r26,
}, {
  production: 'Expression',
  pop: 3,
  action: r27,
}, {
  production: 'Expression',
  pop: 1,
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
  pop: 3,
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
  production: 'AssignmentExpression',
  pop: 3,
  action: r42,
}, {
  production: 'BinaryExpression',
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
  production: 'NewExpression',
  pop: 5,
  action: r49,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r50,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r51,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r52,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r53,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r54,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r55,
}, {
  production: 'SpreadElement',
  pop: 2,
  action: r56,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r57,
}, {
  production: 'DecrementExpression',
  pop: 2,
  action: r58,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r59,
}, {
  production: 'IncrementExpression',
  pop: 2,
  action: r60,
}, {
  production: 'IndexExpression',
  pop: 4,
  action: r61,
}, {
  production: 'LogicalNotExpression',
  pop: 2,
  action: r62,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r63,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r64,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r65,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r66,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r67,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r68,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r69,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r70,
}, {
  production: 'ObjectProperty',
  pop: 5,
  action: r71,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r72,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r73,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r74,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r75,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r76,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r77,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r78,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r79,
}, {
  production: 'NullValue',
  pop: 1,
  action: r80,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r81,
}, {
  production: 'StringValue',
  pop: 1,
  action: r82,
}, {
  production: 'Type',
  pop: 1,
  action: r83,
}, {
  production: 'Type',
  pop: 1,
  action: r84,
}, {
  production: 'Type',
  pop: 1,
  action: r85,
}, {
  production: 'Type',
  pop: 1,
  action: r86,
}, {
  production: 'GenericType',
  pop: 4,
  action: r87,
}, {
  production: 'TypeList',
  pop: 1,
  action: r88,
}, {
  production: 'TypeList',
  pop: 3,
  action: r89,
}, {
  production: 'NamedType',
  pop: 1,
  action: r90,
}, {
  production: 'NamedType',
  pop: 1,
  action: r91,
}, {
  production: 'TupleType',
  pop: 3,
  action: r92,
}, {
  production: 'UnionType',
  pop: 3,
  action: r93,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r94,
}, {
  production: 'Declaration',
  pop: 1,
  action: r95,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r96,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r97,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r98,
}, {
  production: 'ClassBodyList',
  pop: 0,
  action: r99,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r100,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r101,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r102,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r103,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r104,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r105,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r106,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r107,
}, {
  production: 'Argument',
  pop: 1,
  action: r108,
}, {
  production: 'Argument',
  pop: 3,
  action: r109,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r110,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r111,
}, {
  production: 'IfStatement',
  pop: 9,
  action: r112,
}, {
  production: 'IfStatement',
  pop: 7,
  action: r113,
}, {
  production: 'ThrowStatement',
  pop: 3,
  action: r114,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r115,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r116,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r117,
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
