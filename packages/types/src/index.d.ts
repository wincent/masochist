// Shared type definitions extracted here in order to avoid circular
// dependencies.

// AST types.

export type Argument = {
  kind: 'Argument';
  name: string;
  // TODO: instead of using opaque strings, implement at least some basic
  // internal structure (enough to represent primitive types, object types etc)
  // although not urgently needed, because I am using type aliases everywhere
  // for now
  type?: string;
};

export type ArrayValue = {
  kind: 'ArrayValue';
  items: Array<Expression>;
};

export type AssignmentStatement = {
  kind: 'AssignmentStatement';
  binding: 'const' | 'let' | 'var' | null;
  // TODO: support proper expressions here (eg. `this.foo` MemberExpression)
  // (ie. destructuring etc, but not _all_ expressions; eg PrimitiveValue)
  lhs: Expression;
  type?: string;
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
  arguments: Array<Expression>;
};

export type ClassDeclaration = {
  kind: 'ClassDeclaration';
  id: string;
  // TODO: add superclass, if I ever need it
  body: Array<
    DocComment | GetAccessor | MethodDefinition | PropertyDeclaration
  >;
};

export type ClassExpression = {
  kind: 'ClassExpression';
  id: string;
  body: Array<
    DocComment | GetAccessor | MethodDefinition | PropertyDeclaration
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

export type FunctionDeclaration = {
  kind: 'FunctionDeclaration';
  name: string;
  arguments: Array<Argument>;
  body: Array<Statement>;
  type?: string;
};

export type FunctionExpression = {
  kind: 'FunctionExpression';
  arguments: Array<Argument>;
  name?: string;
  body: Array<Statement>;
  type?: string;
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
  index: Expression;
  indexee: Expression;
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

export type NewExpression = {
  kind: 'NewExpression';
  object: Expression;
  arguments: Array<Expression>;
};

export type Node =
  | Argument
  | Expression
  | MethodDefinition
  | GetAccessor
  | ObjectProperty
  | Program
  | PropertyDeclaration
  | Statement;

export type NullValue = {
  kind: 'NullValue';
};

export type NumberValue = {
  kind: 'NumberValue';
  value: number;
  base: Base;
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
  type: string;
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