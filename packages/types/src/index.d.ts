// Shared type definitions extracted here in order to avoid circular
// dependencies.

// AST types.

export type Argument = {
  kind: 'Argument';
  name: string;
  type?: Type;
};

export type ArrayPattern = {
  kind: 'ArrayPattern';
  elements: Array<Identifier | EmptySlot>;
};

export type ArrayValue = {
  kind: 'ArrayValue';
  items: Array<Expression | SpreadElement | EmptySlot>;
};

export type AssignmentStatement = {
  kind: 'AssignmentStatement';
  binding: 'const' | 'let' | 'var' | null;
  lhs: Identifier | Pattern;
  type?: Type;
  rhs: Expression;
};

// TODO: support more bases
type Base = 10 | 16;

export type BinaryExpression = {
  kind: 'BinaryExpression';
  lhs: Expression;
  operator: BinaryOperator;
  rhs: Expression;
};

type BinaryOperator =
  | '!='
  | '!=='
  | '&&'
  | '<'
  | '<='
  | '=='
  | '==='
  | '>'
  | '>='
  | '||'
  | '+'
  | '-'
  | '=';

export type BitwiseNotExpression = {
  kind: 'BitwiseNotExpression';
  operand: Expression;
};

export type BooleanValue = {
  kind: 'BooleanValue';
  value: boolean;
};

export type BreakStatement = {
  kind: 'BreakStatement';
  label?: string;
};

export type CallExpression = {
  kind: 'CallExpression';
  callee: Expression;
  arguments: Array<Expression | SpreadElement>;
};

export type ClassDeclaration = {
  kind: 'ClassDeclaration';
  id: string;
  // TODO: add superclass, if I ever need it
  body: Array<
    | DocComment
    | GetAccessor
    | LineComment
    | MethodDefinition
    | PropertyDeclaration
  >;
};

export type ClassExpression = {
  kind: 'ClassExpression';
  id: string;
  body: Array<
    | DocComment
    | GetAccessor
    | LineComment
    | MethodDefinition
    | PropertyDeclaration
  >;
};

// Better AST might be
// IfStatement
//    Condition
//    Consequent (Array<Statement>)
//    Alternate (can be another IfStatement, for `else if`, or Array<Statement>,
//    for `else`)
// The name "Consequent" sucks.
export type Consequent = {
  kind: 'Consequent';
  condition: Expression;
  block: Array<Statement>;
};

export type ContinueStatement = {
  kind: 'ContinueStatement';
  label?: string;
};

export type Declaration = ClassDeclaration | FunctionDeclaration;

export type DecrementExpression = {
  kind: 'DecrementExpression';
  operand: Expression;
  position: 'postfix' | 'prefix';
};

export type DocComment = {
  kind: 'DocComment';
  contents: Array<string>;
};

export type EmptySlot = {
  kind: 'EmptySlot';
};

export type EmptyStatement = {
  kind: 'EmptyStatement';
};

export type Expression =
  | BinaryExpression
  | CallExpression
  | ClassExpression
  | FunctionExpression
  | Identifier
  | IndexExpression
  | MemberExpression
  | NonNullExpression
  | NewExpression
  | PrimitiveValue
  | RawExpression
  | TernaryExpression
  | UnaryExpression
  | YieldExpression;

export type ExportDefaultDeclaration = {
  kind: 'ExportDefaultDeclaration';
  declaration: Declaration;
};

export type ExportNamedDeclaration = {
  kind: 'ExportNamedDeclaration';
  declaration: Declaration;
};

export type ExpressionStatement = {
  kind: 'ExpressionStatement';
  expression: Expression;
};

export type ForStatement = {
  kind: 'ForStatement';
  initializer: VariableDeclaration; // TODO: | null;
  condition: Expression; // TODO: | null;
  update: Expression; // TODO: | null;
  block: Array<Statement>;
};

export type FunctionDeclaration = {
  kind: 'FunctionDeclaration';
  name: string;
  arguments: Array<Argument>;
  body: Array<Statement>;
  type?: Type;
};

export type FunctionExpression = {
  kind: 'FunctionExpression';
  arguments: Array<Argument>;
  name?: string;
  body: Array<Statement>;
  type?: Type;
};

// eg. T<K>
export type GenericType = {
  kind: 'GenericType';
  name: string;
  parameters: Array<Type>;
};

// TODO: instead of name: string, allow Expression (because you can write `get
// ['somethingComputed']() { ... }` too).
export type GetAccessor = {
  kind: 'GetAccessor';
  name: string;
  body: Array<Statement>;
};

export type Identifier = {
  kind: 'Identifier';
  name: string;
  // Adding `cast` to all expression types would be a pain, so I'm only going to
  // do it on an as-needed basis. For now, that means just here.
  cast?: Type;
};

export type IfStatement = {
  kind: 'IfStatement';
  consequents: Array<Consequent>;
  alternate?: Array<Statement>;
};

/**
 * eg.
 *
 *      import foo from 'foo';
 *             ^^^
 */
type ImportDefaultSpecifier = {
  kind: 'ImportDefaultSpecifier';
  identifier: Identifier;
};

/**
 * eg.
 *
 *      import {foo, bar as baz} from 'qux';
 *              ^^^  ^^^^^^^^^^
 */
type ImportSpecifier = {
  kind: 'ImportSpecifier';
  imported: Identifier;
  local: Identifier;
};

export type ImportStatement = {
  kind: 'ImportStatement';
  specifiers: Array<ImportDefaultSpecifier | ImportSpecifier>;
  source: StringValue;
  type: boolean;
};

export type IncrementExpression = {
  kind: 'IncrementExpression';
  operand: Expression;
  position: 'postfix' | 'prefix';
};

export type IndexExpression = {
  kind: 'IndexExpression';
  indexee: Expression;
  index: Expression;
};

export type LabelStatement = {
  kind: 'LabelStatement';
  label: string;
  statement: Statement;
};

export type LineComment = {
  kind: 'LineComment';
  contents: string;
};

export type LogicalNotExpression = {
  kind: 'LogicalNotExpression';
  operand: Expression;
};

export type MemberExpression = {
  kind: 'MemberExpression';
  object: Expression;
  property: Identifier;
};

export type MethodDefinition = {
  kind: 'MethodDefinition';
  key: Expression;
  value: FunctionExpression;
};

// eg. T
export type NamedType = {
  kind: 'NamedType';
  name: string;
};

export type NonNullExpression = {
  kind: 'NonNullExpression';
  expression: Expression;
};

export type NewExpression = {
  kind: 'NewExpression';
  object: Expression;
  arguments: Array<Expression | SpreadElement>;
};

export type Node =
  | Argument
  | Consequent
  | EmptySlot
  | Expression
  | MethodDefinition
  | GetAccessor
  | ObjectProperty
  | Pattern
  | Program
  | PropertyDeclaration
  | SpreadElement
  | Statement
  | Type
  | VariableDeclaration;

export type NullValue = {
  kind: 'NullValue';
};

export type NumberValue = {
  kind: 'NumberValue';
  value: number;
  base: Base;
};

export type ObjectPattern = {
  kind: 'ObjectPattern';
  // Note: re-using `ObjectProperty` here although there are a number of things
  // it has that can't be applied in the context of `ObjectPattern` (like
  // computed or number keys, or NumberValue etc).
  properties: Array<ObjectProperty>;
};

export type ObjectValue = {
  kind: 'ObjectValue';
  properties: Array<ObjectProperty>;
};

export type ObjectProperty = {
  kind: 'ObjectProperty';
  key: Identifier | NumberValue | Expression;
  value: Expression;
  computed: boolean;
  shorthand: boolean;
  // TODO: support object methods
  // method: boolean,
};

export type Pattern =
  | ArrayPattern
  | ObjectPattern;

export type PrimitiveValue =
  | ArrayValue
  | BooleanValue
  | NullValue
  | NumberValue
  | ObjectValue
  | StringValue
  | UndefinedValue;

export type Program = {
  kind: 'Program';
  statements: Array<Statement>;
};

export type PropertyDeclaration = {
  kind: 'PropertyDeclaration';
  name: string;
  type: Type;
};

/**
 * An escape hatch for emittng raw text in an expression position without having
 * to implement full support for it in this module or in the printer.
 */
export type RawExpression = {
  kind: 'RawExpression';
  expression: string;
};

/**
 * An escape hatch for emittng raw text in a statement position without having
 * to implement full support for it in this module or in the printer.
 */
export type RawStatement = {
  kind: 'RawStatement';
  statement: string;
};

export type ReturnStatement = {
  kind: 'ReturnStatement';
  expression?: Expression;
};

export type SpreadElement = {
  kind: 'SpreadElement';
  expression: Expression;
};

// Note that DocComment and LineComment could technically appear anywhere,
// but we only allow them in statement positions.
export type Statement =
  | AssignmentStatement
  | BreakStatement
  | ClassDeclaration
  | ContinueStatement
  | DocComment
  | EmptyStatement
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | ExpressionStatement
  | ForStatement
  | FunctionDeclaration
  | IfStatement
  | ImportStatement
  | LabelStatement
  | LineComment
  | RawStatement
  | ReturnStatement
  | SwitchStatement
  | ThrowStatement
  | WhileStatement;

export type SwitchCase = {
  kind: 'SwitchCase';
  determinant: Expression | null;
  block: Array<Statement>;
};

export type SwitchStatement = {
  kind: 'SwitchStatement';
  cases: Array<SwitchCase>;
  condition: Expression;
};

export type TernaryExpression = {
  kind: 'TernaryExpression';
  condition: Expression;
  consequent: Expression;
  alternate: Expression;
};

type UnaryExpression =
  | BitwiseNotExpression
  | DecrementExpression
  | IncrementExpression
  | LogicalNotExpression;

export type UndefinedValue = {
  kind: 'UndefinedValue';
};

export type StringValue = {
  kind: 'StringValue';
  value: string; // `value` must already be quoted/delimited.
};

export type ThrowStatement = {
  kind: 'ThrowStatement';
  expression: Expression;
};

// eg. [T, U]
export type TupleType = {
  kind: 'TupleType';
  elements: Array<Type>;
};

export type Type =
  | GenericType
  | NamedType
  | TupleType
  | UnionType;

// eg. T | U
export type UnionType = {
  kind: 'UnionType';
  variants: Array<Type>;
};

export type VariableDeclaration = {
  kind: 'VariableDeclaration';
  binding: 'const' | 'let' | 'var' | null;
  declarators: Array<VariableDeclarator>;
};

export type VariableDeclarator = {
  kind: 'VariableDeclarator';
  lhs: Identifier | Pattern;
  rhs: Expression | null;
};

export type WhileStatement = {
  kind: 'WhileStatement';
  condition: Expression;
  block: Array<Statement>;
};

export type YieldExpression = {
  kind: 'YieldExpression';
  expression?: Expression;
};

// Parse table types.

export type Action =
  | {
    kind: 'Accept';
  }
  | {
    kind: 'Reduce';
    rule: number;
  }
  | {
    kind: 'Shift';
    state: number;
  };

export type Actions = {
  [terminal: string]: Action;
};

export type Gotos = {
  [nonTerminal: string]: number;
};
