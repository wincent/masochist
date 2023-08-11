import {invariant} from '@masochist/common';

export type Node =
  | Argument
  | FunctionExpression
  | MethodDefinition
  | Program
  | PropertyDeclaration
  | Statement;

export type Argument = {
  kind: 'Argument';
  name: string;
  type?: string;
};

type ArrayValue = {
  kind: 'ArrayValue';
  items: Array<Expression>;
};

export type AssignmentStatement = {
  kind: 'AssignmentStatement';
  binding: 'const' | 'let' | 'var' | null;
  // Note: Could need to support destructuring etc in the future.
  // TODO: support proper expressions here (eg. `this.foo` MemberExpression) in addition to just identifier
  lhs: string;
  rhs: Expression;
};

// TODO: support more bases
type Base = 10 | 16;

type BinaryExpression = {
  kind: 'BinaryExpression';
  lexpr: Expression;
  operator: BinaryOperator;
  rexpr: Expression;
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
  | '+';

type BitwiseNotExpression = {
  kind: 'BitwiseNotExpression';
  operand: Expression;
};

type BooleanValue = {
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
  body: Array<DocComment | MethodDefinition | PropertyDeclaration>;
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

type DecrementExpression = {
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
  declaration: FunctionDeclaration; // Later on, may have other types here.
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
};

export type FunctionExpression = {
  kind: 'FunctionExpression';
  arguments: Array<Argument>;
  name?: string;
  body: Array<Statement>;
};

type Identifier = {
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
};

type IncrementExpression = {
  kind: 'IncrementExpression';
  operand: Expression;
  position: 'postfix' | 'prefix';
};

type IndexExpression = {
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

type LogicalNotExpression = {
  kind: 'LogicalNotExpression';
  operand: Expression;
};

type MemberExpression = {
  kind: 'MemberExpression';
  object: Expression;
  property: Expression;
};

export type MethodDefinition = {
  kind: 'MethodDefinition';
  key: Expression;
  value: FunctionExpression;
};

type NewExpression = {
  kind: 'NewExpression';
  object: Expression;
  arguments: Array<Expression>;
};

export type NullValue = {
  kind: 'NullValue';
};

type NumberValue = {
  kind: 'NumberValue';
  value: number;
  base: Base;
};

export type ObjectValue = {
  kind: 'ObjectValue';
  entries: Array<[number | string, Expression]>;
};

type PrimitiveValue =
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
type RawExpression = {
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

type TernaryExpression = {
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

type UndefinedValue = {
  kind: 'UndefinedValue';
};

type StringValue = {
  kind: 'StringValue';
  value: string;
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

type YieldExpression = {
  kind: 'YieldExpression';
  expression?: Expression;
};

/**
 * Convenience methods for building a JS/TS AST.
 * Doesn't actually parse JS snippets properly, but is capable of turning simple
 * snippets such as `const REJECT = -1` into an AST node.
 */
const ast = {
  argument(template: string): Argument {
    const index = template.indexOf(':');
    if (index === -1) {
      return {
        kind: 'Argument',
        name: template,
      };
    } else {
      const [name, type] = [
        template.slice(0, index).trim(),
        template.slice(index + 1).trim(),
      ];
      return {
        kind: 'Argument',
        name,
        type,
      };
    }
  },

  array(items: Array<Expression | string>): ArrayValue {
    return {
      kind: 'ArrayValue',
      items: items.map((item) => {
        if (typeof item === 'string') {
          return ast.expression(item);
        } else {
          return item;
        }
      }),
    };
  },

  assign(
    binding: 'const' | 'let' | 'var' | null,
    lhs: string,
    rhs: Expression | string | number,
  ): AssignmentStatement {
    if (typeof rhs === 'string') {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs,
        rhs: ast.expression(rhs),
      };
    } else if (typeof rhs === 'number') {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs,
        rhs: ast.number(rhs),
      };
    } else {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs,
        rhs,
      };
    }
  },

  binop(
    lexpr: Expression | string,
    operator: BinaryOperator,
    rexpr: Expression | string,
  ): BinaryExpression {
    return {
      kind: 'BinaryExpression',
      lexpr: typeof lexpr === 'string' ? ast.expression(lexpr) : lexpr,
      operator,
      rexpr: typeof rexpr === 'string' ? ast.expression(rexpr) : rexpr,
    };
  },

  call(
    callee: Expression | string,
    ...args: Array<Expression | string>
  ): CallExpression {
    return {
      kind: 'CallExpression',
      callee: typeof callee === 'string' ? ast.expression(callee) : callee,
      arguments: args.map((argument) => {
        return typeof argument === 'string'
          ? ast.expression(argument)
          : argument;
      }),
    };
  },

  comment(contents: string): LineComment {
    return {
      kind: 'LineComment',
      contents: ` ${contents}`,
    };
  },

  class(
    id: string,
    body: Array<DocComment | MethodDefinition | PropertyDeclaration>,
  ): ClassDeclaration {
    return {
      kind: 'ClassDeclaration',
      id,
      body,
    };
  },

  const(lhs: string, rhs: Expression | string | number): AssignmentStatement {
    return ast.assign('const', lhs, rhs);
  },

  break(label?: string): BreakStatement {
    if (label) {
      return {kind: 'BreakStatement', label};
    } else {
      return {kind: 'BreakStatement'};
    }
  },

  continue(label?: string): ContinueStatement {
    if (label) {
      return {kind: 'ContinueStatement', label};
    } else {
      return {kind: 'ContinueStatement'};
    }
  },

  docComment(...contents: Array<string>): DocComment {
    return {
      kind: 'DocComment',
      contents,
    };
  },

  equals(
    lexpr: Expression | string,
    rexpr: Expression | string,
  ): BinaryExpression {
    return ast.binop(lexpr, '===', rexpr);
  },

  expression(template: string): Expression {
    // eg. 1234
    if (/^\d+$/.test(template)) {
      return ast.number(parseInt(template));
    }

    // eg. _someIdentifier
    let match = template.match(/^[_a-z]\w*$/i);
    if (match) {
      return ast.identifier(template);
    }

    // eg. identifier[index]
    match = template.match(/^(\w+)\[(\w+)\]$/);
    if (match) {
      const indexee = match[1];
      const index = match[2];
      return ast.index(ast.identifier(indexee), ast.identifier(index));
    }

    // eg. foo.bar++
    match = template.match(/^([\w.]+)(?:\+\+)$/);
    if (match) {
      const name = match[1];
      return {
        kind: 'IncrementExpression',
        operand: {kind: 'Identifier', name},
        position: 'postfix',
      };
    }

    // eg. ++foo.bar
    match = template.match(/^(?:\+\+)([\w.]+)$/);
    if (match) {
      const name = match[1];
      return {
        kind: 'IncrementExpression',
        operand: {kind: 'Identifier', name},
        position: 'prefix',
      };
    }

    // eg. function()
    match = template.match(/^(\w+)\(\)$/);
    if (match) {
      return ast.call(match[1]);
    }

    // eg. someThing <= otherThing
    match = template.match(/^(\S+)\s*(<|<=|>=|\+|===)\s*(.+?)\s*$/);
    if (match) {
      const lexpr = match[1];
      const operator = match[2];
      invariant(
        operator === '<' ||
          operator === '<=' ||
          operator === '>=' ||
          operator === '+' ||
          operator === '===',
      );
      const rexpr = match[3];

      // eg. 1000
      match = rexpr.match(/^\d+$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: ast.number(parseInt(match[0])),
        };
      }

      // eg. 0x1234
      match = rexpr.match(/^0x[0-9a-f]+$/i);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: ast.number(parseInt(match[0], 16), 16),
        };
      }

      // eg. 'string'
      match = rexpr.match(/^'(.+)'$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: {kind: 'StringValue', value: match[1]},
        };
      }

      // eg. foo.bar
      match = rexpr.match(/^(\S+)\.(\S+)$/);
      if (match) {
        const object: Expression = {kind: 'Identifier', name: match[1]};
        const property: Expression = {kind: 'Identifier', name: match[2]};
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: {kind: 'MemberExpression', object, property},
        };
      }
    }

    // Last resort, almost certainly wrong...
    return ast.identifier(template);
  },

  function(
    name: string,
    args: Array<string>,
    statements: Array<Statement>,
  ): FunctionDeclaration {
    return {
      kind: 'FunctionDeclaration',
      name,
      arguments: args.map(ast.argument),
      body: statements,
    };
  },

  identifier(name: string): Identifier {
    return {kind: 'Identifier', name};
  },

  index(indexee: Expression, index: Expression): IndexExpression {
    return {kind: 'IndexExpression', indexee, index};
  },

  let(lhs: string, rhs: Expression | string | number): AssignmentStatement {
    return ast.assign('let', lhs, rhs);
  },

  member(
    object: Expression | string,
    property: Expression | string,
  ): MemberExpression {
    return {
      kind: 'MemberExpression',
      object: typeof object === 'string' ? ast.expression(object) : object,
      property:
        typeof property === 'string' ? ast.expression(property) : property,
    };
  },

  method(
    key: Expression | string,
    args: Array<string>,
    body: Array<Statement>,
  ): MethodDefinition {
    return {
      kind: 'MethodDefinition',
      key: typeof key === 'string' ? ast.expression(key) : key,
      value: {
        kind: 'FunctionExpression',
        arguments: args.map(ast.argument),
        body,
      },
    };
  },

  new(
    object: Expression | string,
    ...args: Array<Expression | string>
  ): NewExpression {
    if (typeof object === 'string') {
      object = ast.identifier(object);
    }
    return {
      kind: 'NewExpression',
      object,
      arguments: args.map((arg) => {
        return typeof arg === 'string' ? ast.expression(arg) : arg;
      }),
    };
  },

  number(value: number, base: Base = 10): NumberValue {
    return {kind: 'NumberValue', value, base};
  },

  object(entries: {[key: string]: Expression}): ObjectValue {
    return {
      kind: 'ObjectValue',
      entries: Object.entries(entries),
    };
  },

  program(statements: Array<Statement>): Program {
    return {
      kind: 'Program',
      statements,
    };
  },

  propertyDeclaration(name: string, type: string): PropertyDeclaration {
    return {
      kind: 'PropertyDeclaration',
      name,
      type,
    };
  },

  rawExpression(expression: string): RawExpression {
    return {
      kind: 'RawExpression',
      expression,
    };
  },

  rawStatement(statement: string): RawStatement {
    return {
      kind: 'RawStatement',
      statement,
    };
  },

  return(expression?: Expression | string): ReturnStatement {
    if (typeof expression === 'string') {
      return {
        kind: 'ReturnStatement',
        expression: ast.expression(expression),
      };
    } else if (expression) {
      return {
        kind: 'ReturnStatement',
        expression,
      };
    } else {
      return {kind: 'ReturnStatement'};
    }
  },

  statement(template: string): Statement {
    // eg. break
    // eg. break foo
    let match = template.match(/^break(?:\s+(\w+))?$/);
    if (match) {
      const label = match[1];
      return ast.break(label);
    }

    // eg. return
    // eg. return bar
    match = template.match(/^return(?:\s+(\w+))?$/);
    if (match) {
      const expression = match[1];
      if (expression) {
        return {
          kind: 'ReturnStatement',
          expression: ast.expression(expression),
        };
      } else {
        return {kind: 'ReturnStatement'};
      }
    }

    // eg. foo.bar++
    // eg. ++foo.bar
    match =
      template.match(/^([\w.]+)(\+\+)$/) || template.match(/^(\+\+)([\w.]+)$/);
    if (match) {
      return {
        kind: 'ExpressionStatement',
        expression: ast.expression(template),
      };
    }

    // eg. this.prop = something
    match = template.match(/^(this\.\w+)\s*=\s*(.+?)\s*$/);
    if (match) {
      const lhs = match[1];
      const rhs = ast.expression(match[2]);
      return {
        kind: 'AssignmentStatement',
        binding: null,
        lhs,
        rhs,
      };
    }

    match = template.match(/^(?:(const|let|var)\s+)?(\w+)\s*=\s*(.+?)\s*$/);
    if (match) {
      const binding = match[1];
      invariant(
        binding === 'const' ||
          binding === 'let' ||
          binding === 'var' ||
          binding === undefined,
      );
      const lhs = match[2];
      const rhs = ast.expression(match[3]);

      return {
        kind: 'AssignmentStatement',
        binding: binding ?? null,
        lhs,
        rhs,
      };
    }
    throw new Error(`Not implemented: ${template}`);
  },

  string(value: string): StringValue {
    return {kind: 'StringValue', value};
  },

  var(lhs: string, rhs: Expression | string | number): AssignmentStatement {
    return ast.assign('var', lhs, rhs);
  },

  while(condition: Expression, block: Array<Statement>): WhileStatement {
    return {
      kind: 'WhileStatement',
      condition,
      block,
    };
  },

  yield(expression: Expression | string): ExpressionStatement {
    return {
      kind: 'ExpressionStatement',
      expression: {
        kind: 'YieldExpression',
        expression:
          typeof expression === 'string'
            ? ast.expression(expression)
            : expression,
      },
    };
  },

  get empty(): EmptyStatement {
    return {kind: 'EmptyStatement'};
  },

  get false(): BooleanValue {
    return {kind: 'BooleanValue', value: false};
  },

  get null(): NullValue {
    return {kind: 'NullValue'};
  },

  get true(): BooleanValue {
    return {kind: 'BooleanValue', value: true};
  },
} as const;

export default ast;
