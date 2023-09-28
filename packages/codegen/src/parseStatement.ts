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
  IfStatement,
  LogicalNotExpression,
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
function r13(
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
function r14(
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
function r15(
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
function r16($1: AssignmentExpression): AssignmentStatement {
  return {
    kind: 'AssignmentStatement',
    binding: null,
    lhs: $1.lhs,
    rhs: $1.rhs,
  };
}
function r17($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r18($1: Token): Identifier {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r19(_$1: Token, $2: Expression): Expression {
  return $2;
}
function r20(): Expression {
  return {
    kind: 'Identifier',
    name: 'this',
  };
}
function r21($1: AssignmentExpression): Expression {
  return $1;
}
function r22($1: BinaryExpression): Expression {
  return $1;
}
function r23($1: CallExpression): Expression {
  return $1;
}
function r24($1: Identifier, _$2: Token, $3: Type): Expression {
  return {
    ...$1,
    cast: $3,
  };
}
function r25($1: Identifier): Expression {
  return $1;
}
function r26($1: LogicalNotExpression): Expression {
  return $1;
}
function r27($1: MemberExpression): Expression {
  return $1;
}
function r28($1: NewExpression): Expression {
  return $1;
}
function r29($1: ObjectValue): Expression {
  return $1;
}
function r30($1: PrimitiveValue): Expression {
  return $1;
}
function r31($1: Expression, _$2: Token, $3: Expression): AssignmentExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '=',
    rhs: $3,
  };
}
function r32($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '&&',
    rhs: $3,
  };
}
function r33($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '||',
    rhs: $3,
  };
}
function r34($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '-',
    rhs: $3,
  };
}
function r35($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '+',
    rhs: $3,
  };
}
function r36($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '==',
    rhs: $3,
  };
}
function r37($1: Expression, _$2: Token, $3: Expression): BinaryExpression {
  return {
    kind: 'BinaryExpression',
    lhs: $1,
    operator: '===',
    rhs: $3,
  };
}
function r38(
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
function r39($1: Expression, _$2: Token, $3: ExpressionList): CallExpression {
  return {
    kind: 'CallExpression',
    callee: $1,
    arguments: $3,
  };
}
function r40($1: Expression): ExpressionList {
  return [$1];
}
function r41($1: SpreadElement): ExpressionList {
  return [$1];
}
function r42($1: ExpressionList, _$2: Token, $3: Expression): ExpressionList {
  $1.push($3);
  return $1;
}
function r43(
  $1: ExpressionList,
  _$2: Token,
  $3: SpreadElement,
): ExpressionList {
  $1.push($3);
  return $1;
}
function r44(): ExpressionList {
  return [];
}
function r45(_$1: Token, $2: Expression): SpreadElement {
  return {
    kind: 'SpreadElement',
    expression: $2,
  };
}
function r46(_$1: Token, $2: Expression): LogicalNotExpression {
  return {
    kind: 'LogicalNotExpression',
    operand: $2,
  };
}
function r47($1: Expression, _$2: Token, $3: Identifier): MemberExpression {
  return {
    kind: 'MemberExpression',
    object: $1,
    property: $3,
  };
}
function r48(_$1: Token, $2: ObjectPropertyList): ObjectValue {
  return {
    kind: 'ObjectValue',
    properties: $2,
  };
}
function r49($1: ObjectProperty): ObjectPropertyList {
  return [$1];
}
function r50(
  $1: ObjectPropertyList,
  _$2: Token,
  $3: ObjectProperty,
): ObjectPropertyList {
  $1.push($3);
  return $1;
}
function r51(): ObjectPropertyList {
  return [];
}
function r52($1: Identifier, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r53($1: Identifier): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $1,
    computed: false,
    shorthand: true,
  };
}
function r54($1: NumberValue, _$2: Token, $3: Expression): ObjectProperty {
  return {
    kind: 'ObjectProperty',
    key: $1,
    value: $3,
    computed: false,
    shorthand: false,
  };
}
function r55(
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
function r56($1: ArrayValue): PrimitiveValue {
  return $1;
}
function r57($1: BooleanValue): PrimitiveValue {
  return $1;
}
function r58($1: NullValue): PrimitiveValue {
  return $1;
}
function r59($1: NumberValue): PrimitiveValue {
  return $1;
}
function r60($1: StringValue): PrimitiveValue {
  return $1;
}
function r61(_$1: Token, $2: ExpressionList): ArrayValue {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r62(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r63(): BooleanValue {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r64(): NullValue {
  return {
    kind: 'NullValue',
  };
}
function r65($1: Token): NumberValue {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r66($1: Token): StringValue {
  return {
    kind: 'StringValue',
    value: $1.contents,
  };
}
function r67($1: GenericType): Type {
  return $1;
}
function r68($1: NamedType): Type {
  return $1;
}
function r69($1: TupleType): Type {
  return $1;
}
function r70($1: UnionType): Type {
  return $1;
}
function r71($1: Identifier, _$2: Token, $3: TypeList): GenericType {
  return {
    kind: 'GenericType',
    name: $1.name,
    parameters: $3,
  };
}
function r72($1: Type): TypeList {
  return [$1];
}
function r73($1: TypeList, _$2: Token, $3: Type): TypeList {
  $1.push($3);
  return $1;
}
function r74($1: Identifier): NamedType {
  return {
    kind: 'NamedType',
    name: $1.name,
  };
}
function r75($1: Token): NamedType {
  return {
    kind: 'NamedType',
    name: $1.contents,
  };
}
function r76(_$1: Token, $2: TypeList): TupleType {
  return {
    kind: 'TupleType',
    elements: $2,
  };
}
function r77($1: Type, _$2: Token, $3: Type): UnionType {
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
function r78(
  _$1: Token,
  _$2: Token,
  $3: Declaration,
): ExportDefaultDeclaration {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r79($1: ClassDeclaration): Declaration {
  return $1;
}
function r80(
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
function r81($1: ClassBodyListItem): ClassBodyList {
  return [$1];
}
function r82($1: ClassBodyList, $2: ClassBodyListItem): ClassBodyList {
  $1.push($2);
  return $1;
}
function r83(): ClassBodyList {
  return [];
}
function r84($1: GetAccessor): ClassBodyListItem {
  return $1;
}
function r85($1: MethodDefinition): ClassBodyListItem {
  return $1;
}
function r86($1: PropertyDeclaration): ClassBodyListItem {
  return $1;
}
function r87(
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
function r88(
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
function r89($1: Argument): ArgumentList {
  return [$1];
}
function r90($1: ArgumentList, _$2: Token, $3: Argument): ArgumentList {
  $1.push($3);
  return $1;
}
function r91(): ArgumentList {
  return [];
}
function r92($1: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
  };
}
function r93($1: Identifier, _$2: Token, $3: Identifier): Argument {
  return {
    kind: 'Argument',
    name: $1.name,
    type: $3.name,
  };
}
function r94($1: Identifier, _$2: Token, $3: Identifier): PropertyDeclaration {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
function r95($1: Expression): ExpressionStatement {
  return {
    kind: 'ExpressionStatement',
    expression: $1,
  };
}
function r96(
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
function r97(_$1: Token, $2: Expression): ThrowStatement {
  return {
    kind: 'ThrowStatement',
    expression: $2,
  };
}
function r98(): ReturnStatement {
  return {
    kind: 'ReturnStatement',
  };
}
function r99(_$1: Token, $2: Expression): ReturnStatement {
  return {
    kind: 'ReturnStatement',
    expression: $2,
  };
}
function r100(
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
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
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
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 51,
  },
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
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 61,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
  COLON: {
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
  AS: {
    kind: 'Shift',
    state: 63,
  },
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
  AS: {
    kind: 'Reduce',
    rule: 18,
  },
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
  OPENING_BRACE: {
    kind: 'Reduce',
    rule: 18,
  },
  LESS_THAN: {
    kind: 'Reduce',
    rule: 18,
  },
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 18,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 18,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
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
  COLON: {
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
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 70,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  REST: {
    kind: 'Shift',
    state: 74,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 44,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 44,
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
    state: 76,
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
    state: 77,
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
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 78,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
    state: 81,
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
    state: 83,
  },
  COLON: {
    kind: 'Shift',
    state: 82,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 21,
  },
  SEMICOLON: {
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
    kind: 'Shift',
    state: 85,
  },
  COLON: {
    kind: 'Shift',
    state: 84,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 16,
  },
  THIS: {
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  REST: {
    kind: 'Shift',
    state: 74,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 44,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 44,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
    state: 52,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 95,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
    state: 100,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 102,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 46,
  },
  COLON: {
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
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 104,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 105,
  },
  COMMA: {
    kind: 'Shift',
    state: 106,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 49,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 49,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 107,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 53,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 53,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 108,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 110,
  },
  COMMA: {
    kind: 'Shift',
    state: 111,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 113,
  },
}, {
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  CONST: {
    kind: 'Reduce',
    rule: 98,
  },
  LET: {
    kind: 'Reduce',
    rule: 98,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 98,
  },
  EXPORT: {
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
  IF: {
    kind: 'Reduce',
    rule: 98,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 98,
  },
  THROW: {
    kind: 'Reduce',
    rule: 98,
  },
  WHILE: {
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
  $: {
    kind: 'Reduce',
    rule: 98,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 98,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 117,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 118,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
    state: 100,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 102,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
    state: 100,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 102,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  SEMICOLON: {
    kind: 'Reduce',
    rule: 31,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 31,
  },
  COLON: {
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
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
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
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 124,
  },
  COMMA: {
    kind: 'Shift',
    state: 111,
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
  COLON: {
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
    rule: 33,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Reduce',
    rule: 33,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
    state: 55,
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
    kind: 'Reduce',
    rule: 34,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
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
    state: 55,
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
    kind: 'Reduce',
    rule: 35,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
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
    rule: 36,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
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
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
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
  ASSIGN: {
    kind: 'Reduce',
    rule: 37,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
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
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
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
  BITWISE_OR: {
    kind: 'Shift',
    state: 125,
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
  LESS_THAN: {
    kind: 'Shift',
    state: 126,
  },
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 75,
  },
  COLON: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 75,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 69,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 69,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 69,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 69,
  },
  DOT: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 69,
  },
  COLON: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 69,
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
    state: 100,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 102,
  },
}, {
  BITWISE_OR: {
    kind: 'Reduce',
    rule: 70,
  },
  ASSIGN: {
    kind: 'Reduce',
    rule: 70,
  },
  LOGICAL_AND: {
    kind: 'Reduce',
    rule: 70,
  },
  OPENING_PAREN: {
    kind: 'Reduce',
    rule: 70,
  },
  DOT: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 70,
  },
  COLON: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 70,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  REST: {
    kind: 'Shift',
    state: 74,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 44,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 44,
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
  COLON: {
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
    state: 31,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 70,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 133,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  REST: {
    kind: 'Shift',
    state: 74,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 45,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 45,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 45,
  },
}, {
  GET: {
    kind: 'Shift',
    state: 139,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 83,
  },
}, {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 78,
  },
  GET: {
    kind: 'Reduce',
    rule: 78,
  },
  IF: {
    kind: 'Reduce',
    rule: 78,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 78,
  },
  THROW: {
    kind: 'Reduce',
    rule: 78,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 78,
  },
  BANG: {
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
}, {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 79,
  },
  GET: {
    kind: 'Reduce',
    rule: 79,
  },
  IF: {
    kind: 'Reduce',
    rule: 79,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 79,
  },
  THROW: {
    kind: 'Reduce',
    rule: 79,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 79,
  },
  BANG: {
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
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 143,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
    rule: 97,
  },
  LET: {
    kind: 'Reduce',
    rule: 97,
  },
  CLASS: {
    kind: 'Reduce',
    rule: 97,
  },
  EXPORT: {
    kind: 'Reduce',
    rule: 97,
  },
  OPENING_PAREN: {
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
  IF: {
    kind: 'Reduce',
    rule: 97,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 97,
  },
  THROW: {
    kind: 'Reduce',
    rule: 97,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 97,
  },
  BANG: {
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
  OPENING_BRACKET: {
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
  $: {
    kind: 'Reduce',
    rule: 97,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 97,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 144,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 145,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 125,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 146,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  COLON: {
    kind: 'Reduce',
    rule: 31,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 147,
  },
  BITWISE_OR: {
    kind: 'Shift',
    state: 125,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 148,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  COLON: {
    kind: 'Reduce',
    rule: 31,
  },
}, {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 39,
  },
  COLON: {
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
    state: 100,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 102,
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
    state: 100,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 102,
  },
}, {
  CLOSING_BRACKET: {
    kind: 'Shift',
    state: 151,
  },
  COMMA: {
    kind: 'Shift',
    state: 152,
  },
}, {
  BITWISE_OR: {
    kind: 'Shift',
    state: 125,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 72,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 72,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 72,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 153,
  },
  COMMA: {
    kind: 'Shift',
    state: 111,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 50,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 50,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
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
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 54,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 54,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 154,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 42,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 42,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 42,
  },
}, {
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
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 155,
  },
  GET: {
    kind: 'Shift',
    state: 139,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
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
    rule: 18,
  },
  COLON: {
    kind: 'Reduce',
    rule: 18,
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
}, {
  COLON: {
    kind: 'Shift',
    state: 159,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 158,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 86,
  },
  GET: {
    kind: 'Reduce',
    rule: 86,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 86,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 160,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 161,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 77,
  },
  COLON: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 77,
  },
}, {
  COMMA: {
    kind: 'Shift',
    state: 152,
  },
  GREATER_THAN: {
    kind: 'Shift',
    state: 164,
  },
}, {
  BITWISE_OR: {
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
  SEMICOLON: {
    kind: 'Reduce',
    rule: 76,
  },
  COLON: {
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
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 76,
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
    state: 100,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 102,
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
  COLON: {
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
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
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
}, {
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
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 80,
  },
  GET: {
    kind: 'Reduce',
    rule: 80,
  },
  IF: {
    kind: 'Reduce',
    rule: 80,
  },
  RETURN: {
    kind: 'Reduce',
    rule: 80,
  },
  THROW: {
    kind: 'Reduce',
    rule: 80,
  },
  WHILE: {
    kind: 'Reduce',
    rule: 80,
  },
  BANG: {
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
  OPENING_PAREN: {
    kind: 'Shift',
    state: 167,
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
    rule: 91,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 91,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 174,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  SEMICOLON: {
    kind: 'Shift',
    state: 175,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
}, {
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
    kind: 'Shift',
    state: 125,
  },
  CLOSING_BRACKET: {
    kind: 'Reduce',
    rule: 73,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 73,
  },
  GREATER_THAN: {
    kind: 'Reduce',
    rule: 73,
  },
}, {
  ASSIGN: {
    kind: 'Shift',
    state: 52,
  },
  DOT: {
    kind: 'Shift',
    state: 55,
  },
  EQUALS: {
    kind: 'Shift',
    state: 59,
  },
  LOGICAL_AND: {
    kind: 'Shift',
    state: 53,
  },
  LOGICAL_OR: {
    kind: 'Shift',
    state: 56,
  },
  MINUS: {
    kind: 'Shift',
    state: 57,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 54,
  },
  PLUS: {
    kind: 'Shift',
    state: 58,
  },
  STRICT_EQUALS: {
    kind: 'Shift',
    state: 60,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 55,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 55,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 176,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Shift',
    state: 177,
  },
  COMMA: {
    kind: 'Shift',
    state: 178,
  },
}, {
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 89,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 89,
  },
}, {
  COLON: {
    kind: 'Shift',
    state: 179,
  },
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 92,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 92,
  },
}, {
  SEMICOLON: {
    kind: 'Shift',
    state: 180,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 181,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 182,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
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
    state: 183,
  },
}, {
  OPENING_BRACE: {
    kind: 'Shift',
    state: 184,
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
    rule: 94,
  },
  GET: {
    kind: 'Reduce',
    rule: 94,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 94,
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
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
  },
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 3,
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
  CLOSING_PAREN: {
    kind: 'Reduce',
    rule: 93,
  },
  COMMA: {
    kind: 'Reduce',
    rule: 93,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 189,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
  },
}, {
  BANG: {
    kind: 'Shift',
    state: 16,
  },
  CLASS: {
    kind: 'Shift',
    state: 35,
  },
  CLOSING_BRACE: {
    kind: 'Shift',
    state: 190,
  },
  CONST: {
    kind: 'Shift',
    state: 4,
  },
  EXPORT: {
    kind: 'Shift',
    state: 37,
  },
  FALSE: {
    kind: 'Shift',
    state: 26,
  },
  GET: {
    kind: 'Shift',
    state: 14,
  },
  IDENTIFIER: {
    kind: 'Shift',
    state: 13,
  },
  IF: {
    kind: 'Shift',
    state: 40,
  },
  LET: {
    kind: 'Shift',
    state: 5,
  },
  NEW: {
    kind: 'Shift',
    state: 19,
  },
  NULL: {
    kind: 'Shift',
    state: 29,
  },
  NUMBER: {
    kind: 'Shift',
    state: 31,
  },
  OPENING_BRACE: {
    kind: 'Shift',
    state: 21,
  },
  OPENING_BRACKET: {
    kind: 'Shift',
    state: 24,
  },
  OPENING_PAREN: {
    kind: 'Shift',
    state: 8,
  },
  RETURN: {
    kind: 'Shift',
    state: 42,
  },
  STRING_VALUE: {
    kind: 'Shift',
    state: 33,
  },
  THIS: {
    kind: 'Shift',
    state: 9,
  },
  THROW: {
    kind: 'Shift',
    state: 44,
  },
  TRUE: {
    kind: 'Shift',
    state: 27,
  },
  WHILE: {
    kind: 'Shift',
    state: 46,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 87,
  },
  GET: {
    kind: 'Reduce',
    rule: 87,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 87,
  },
}, {
  CLOSING_BRACE: {
    kind: 'Reduce',
    rule: 88,
  },
  GET: {
    kind: 'Reduce',
    rule: 88,
  },
  IDENTIFIER: {
    kind: 'Reduce',
    rule: 88,
  },
}];
const gotos: Array<Gotos> = [
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 2,
    StatementList: 1,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 47,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 48,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 50,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 62,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 64,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 65,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {
    Identifier: 68,
    NumberValue: 69,
    ObjectProperty: 67,
    ObjectPropertyList: 66,
  },
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 72,
    ExpressionList: 71,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    SpreadElement: 73,
    StringValue: 32,
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
    Identifier: 75,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 79,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 80,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 86,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 87,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 72,
    ExpressionList: 88,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    SpreadElement: 73,
    StringValue: 32,
  },
  {
    Identifier: 89,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 90,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 91,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 92,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 93,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 94,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {
    GenericType: 97,
    Identifier: 98,
    NamedType: 99,
    TupleType: 101,
    Type: 96,
    UnionType: 103,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 109,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 112,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {
    ClassDeclaration: 115,
    Declaration: 114,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 116,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 119,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    GenericType: 97,
    Identifier: 98,
    NamedType: 99,
    TupleType: 101,
    Type: 120,
    UnionType: 103,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 121,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    GenericType: 97,
    Identifier: 98,
    NamedType: 99,
    TupleType: 101,
    Type: 122,
    UnionType: 103,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 123,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
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
    GenericType: 97,
    Identifier: 98,
    NamedType: 99,
    TupleType: 101,
    Type: 128,
    TypeList: 127,
    UnionType: 103,
  },
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 72,
    ExpressionList: 129,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    SpreadElement: 73,
    StringValue: 32,
  },
  {},
  {
    Identifier: 68,
    NumberValue: 69,
    ObjectProperty: 130,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 131,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 132,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 134,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    SpreadElement: 135,
    StringValue: 32,
  },
  {},
  {
    ClassBodyList: 136,
    ClassBodyListItem: 137,
    GetAccessor: 138,
    Identifier: 141,
    MethodDefinition: 140,
    PropertyDeclaration: 142,
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
    GenericType: 97,
    Identifier: 98,
    NamedType: 99,
    TupleType: 101,
    Type: 149,
    UnionType: 103,
  },
  {
    GenericType: 97,
    Identifier: 98,
    NamedType: 99,
    TupleType: 101,
    Type: 128,
    TypeList: 150,
    UnionType: 103,
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
    ClassBodyListItem: 156,
    GetAccessor: 138,
    Identifier: 141,
    MethodDefinition: 140,
    PropertyDeclaration: 142,
  },
  {},
  {},
  {
    Identifier: 157,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 162,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 163,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {},
  {},
  {
    GenericType: 97,
    Identifier: 98,
    NamedType: 99,
    TupleType: 101,
    Type: 165,
    UnionType: 103,
  },
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 49,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    Expression: 166,
    Identifier: 12,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    StringValue: 32,
  },
  {},
  {},
  {},
  {
    Argument: 169,
    ArgumentList: 168,
    Identifier: 170,
  },
  {
    Identifier: 171,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 2,
    StatementList: 172,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 2,
    StatementList: 173,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
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
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 47,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 47,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {},
  {},
  {},
  {},
  {
    Argument: 185,
    Identifier: 170,
  },
  {
    Identifier: 186,
  },
  {},
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 2,
    StatementList: 187,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 2,
    StatementList: 188,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {},
  {},
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 47,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
  },
  {
    ArrayValue: 23,
    AssignmentExpression: 6,
    AssignmentStatement: 3,
    BinaryExpression: 10,
    BooleanValue: 25,
    CallExpression: 11,
    ClassDeclaration: 34,
    ExportDefaultDeclaration: 36,
    Expression: 7,
    ExpressionStatement: 38,
    Identifier: 12,
    IfStatement: 39,
    LogicalNotExpression: 15,
    MemberExpression: 17,
    NewExpression: 18,
    NullValue: 28,
    NumberValue: 30,
    ObjectValue: 20,
    PrimitiveValue: 22,
    ReturnStatement: 41,
    Statement: 47,
    StringValue: 32,
    ThrowStatement: 43,
    WhileStatement: 45,
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
  pop: 2,
  action: r16,
}, {
  production: 'Identifier',
  pop: 1,
  action: r17,
}, {
  production: 'Identifier',
  pop: 1,
  action: r18,
}, {
  production: 'Expression',
  pop: 3,
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
  pop: 3,
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
  production: 'Expression',
  pop: 1,
  action: r29,
}, {
  production: 'Expression',
  pop: 1,
  action: r30,
}, {
  production: 'AssignmentExpression',
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
  production: 'BinaryExpression',
  pop: 3,
  action: r36,
}, {
  production: 'BinaryExpression',
  pop: 3,
  action: r37,
}, {
  production: 'NewExpression',
  pop: 5,
  action: r38,
}, {
  production: 'CallExpression',
  pop: 4,
  action: r39,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r40,
}, {
  production: 'ExpressionList',
  pop: 1,
  action: r41,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r42,
}, {
  production: 'ExpressionList',
  pop: 3,
  action: r43,
}, {
  production: 'ExpressionList',
  pop: 0,
  action: r44,
}, {
  production: 'SpreadElement',
  pop: 2,
  action: r45,
}, {
  production: 'LogicalNotExpression',
  pop: 2,
  action: r46,
}, {
  production: 'MemberExpression',
  pop: 3,
  action: r47,
}, {
  production: 'ObjectValue',
  pop: 3,
  action: r48,
}, {
  production: 'ObjectPropertyList',
  pop: 1,
  action: r49,
}, {
  production: 'ObjectPropertyList',
  pop: 3,
  action: r50,
}, {
  production: 'ObjectPropertyList',
  pop: 0,
  action: r51,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r52,
}, {
  production: 'ObjectProperty',
  pop: 1,
  action: r53,
}, {
  production: 'ObjectProperty',
  pop: 3,
  action: r54,
}, {
  production: 'ObjectProperty',
  pop: 5,
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
  production: 'PrimitiveValue',
  pop: 1,
  action: r58,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r59,
}, {
  production: 'PrimitiveValue',
  pop: 1,
  action: r60,
}, {
  production: 'ArrayValue',
  pop: 3,
  action: r61,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r62,
}, {
  production: 'BooleanValue',
  pop: 1,
  action: r63,
}, {
  production: 'NullValue',
  pop: 1,
  action: r64,
}, {
  production: 'NumberValue',
  pop: 1,
  action: r65,
}, {
  production: 'StringValue',
  pop: 1,
  action: r66,
}, {
  production: 'Type',
  pop: 1,
  action: r67,
}, {
  production: 'Type',
  pop: 1,
  action: r68,
}, {
  production: 'Type',
  pop: 1,
  action: r69,
}, {
  production: 'Type',
  pop: 1,
  action: r70,
}, {
  production: 'GenericType',
  pop: 4,
  action: r71,
}, {
  production: 'TypeList',
  pop: 1,
  action: r72,
}, {
  production: 'TypeList',
  pop: 3,
  action: r73,
}, {
  production: 'NamedType',
  pop: 1,
  action: r74,
}, {
  production: 'NamedType',
  pop: 1,
  action: r75,
}, {
  production: 'TupleType',
  pop: 3,
  action: r76,
}, {
  production: 'UnionType',
  pop: 3,
  action: r77,
}, {
  production: 'ExportDefaultDeclaration',
  pop: 3,
  action: r78,
}, {
  production: 'Declaration',
  pop: 1,
  action: r79,
}, {
  production: 'ClassDeclaration',
  pop: 5,
  action: r80,
}, {
  production: 'ClassBodyList',
  pop: 1,
  action: r81,
}, {
  production: 'ClassBodyList',
  pop: 2,
  action: r82,
}, {
  production: 'ClassBodyList',
  pop: 0,
  action: r83,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r84,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r85,
}, {
  production: 'ClassBodyListItem',
  pop: 1,
  action: r86,
}, {
  production: 'GetAccessor',
  pop: 7,
  action: r87,
}, {
  production: 'MethodDefinition',
  pop: 7,
  action: r88,
}, {
  production: 'ArgumentList',
  pop: 1,
  action: r89,
}, {
  production: 'ArgumentList',
  pop: 3,
  action: r90,
}, {
  production: 'ArgumentList',
  pop: 0,
  action: r91,
}, {
  production: 'Argument',
  pop: 1,
  action: r92,
}, {
  production: 'Argument',
  pop: 3,
  action: r93,
}, {
  production: 'PropertyDeclaration',
  pop: 4,
  action: r94,
}, {
  production: 'ExpressionStatement',
  pop: 2,
  action: r95,
}, {
  production: 'IfStatement',
  pop: 7,
  action: r96,
}, {
  production: 'ThrowStatement',
  pop: 3,
  action: r97,
}, {
  production: 'ReturnStatement',
  pop: 2,
  action: r98,
}, {
  production: 'ReturnStatement',
  pop: 3,
  action: r99,
}, {
  production: 'WhileStatement',
  pop: 7,
  action: r100,
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
