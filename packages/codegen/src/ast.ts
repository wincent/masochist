import {invariant} from '@masochist/common';

import parseStatement from './parseStatement';
import quote from './quote';

// TODO make a **simple** JS parser with this tooling so I can do a better job
// of the functions in here that take templates, instead of using regexps.

export type Node =
  | Argument
  | Expression
  | MethodDefinition
  | ObjectProperty
  | Program
  | PropertyDeclaration
  | Statement;

export type Argument = {
  kind: 'Argument';
  name: string;
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
  body: Array<DocComment | MethodDefinition | PropertyDeclaration>;
};

export type ClassExpression = {
  kind: 'ClassExpression';
  id: string;
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
};

export type FunctionExpression = {
  kind: 'FunctionExpression';
  arguments: Array<Argument>;
  name?: string;
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
        lhs: ast.expression(lhs), // TODO: limit this, not all expressions OK
        rhs: ast.expression(rhs),
      };
    } else if (typeof rhs === 'number') {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs: ast.expression(lhs), // TODO: limit this, not all expressions OK
        rhs: ast.number(rhs),
      };
    } else {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs: ast.expression(lhs), // TODO: limit this, not all expressions OK
        rhs,
      };
    }
  },

  binop(
    lhs: Expression | string,
    operator: BinaryOperator,
    rhs: Expression | string,
  ): BinaryExpression {
    return {
      kind: 'BinaryExpression',
      lhs: typeof lhs === 'string' ? ast.expression(lhs) : lhs,
      operator,
      rhs: typeof rhs === 'string' ? ast.expression(rhs) : rhs,
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

  classExpression(
    id: string,
    body: Array<DocComment | MethodDefinition | PropertyDeclaration>,
  ): ClassExpression {
    return {
      kind: 'ClassExpression',
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

  default(declaration: Declaration): ExportDefaultDeclaration {
    return {
      kind: 'ExportDefaultDeclaration',
      declaration,
    };
  },

  docComment(...contents: Array<string>): DocComment {
    return {
      kind: 'DocComment',
      contents,
    };
  },

  equals(lhs: Expression | string, rhs: Expression | string): BinaryExpression {
    return ast.binop(lhs, '===', rhs);
  },

  export(declaration: Declaration): ExportNamedDeclaration {
    return {
      kind: 'ExportNamedDeclaration',
      declaration,
    };
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
      const lhs = match[1];
      const operator = match[2];
      invariant(
        operator === '<' ||
          operator === '<=' ||
          operator === '>=' ||
          operator === '+' ||
          operator === '===',
      );
      const rhs = match[3];

      // eg. 1000
      match = rhs.match(/^\d+$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lhs: {kind: 'Identifier', name: lhs},
          operator,
          rhs: ast.number(parseInt(match[0])),
        };
      }

      // eg. 0x1234
      match = rhs.match(/^0x[0-9a-f]+$/i);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lhs: {kind: 'Identifier', name: lhs},
          operator,
          rhs: ast.number(parseInt(match[0], 16), 16),
        };
      }

      // eg. 'string'
      match = rhs.match(/^'(.+)'$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lhs: {kind: 'Identifier', name: lhs},
          operator,
          rhs: {kind: 'StringValue', value: match[1]},
        };
      }

      // eg. foo.bar
      match = rhs.match(/^(\S+)\.(\S+)$/);
      if (match) {
        const object: Expression = {kind: 'Identifier', name: match[1]};
        const property: Expression = {kind: 'Identifier', name: match[2]};
        return {
          kind: 'BinaryExpression',
          lhs: {kind: 'Identifier', name: lhs},
          operator,
          rhs: {kind: 'MemberExpression', object, property},
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

  /**
   * eg.
   *
   *    import('a', 'b')      -> import a from 'b'
   *    import('{a}', 'b')    -> import {a} from 'b'
   *    import('{a, b}', 'c') -> import {a, b} from 'c'
   */
  import(specifiers: string, source: string): ImportStatement {
    const match = specifiers.match(/^\s*\{\s*(.+)\s*\}\s*$/);
    if (match) {
      return {
        kind: 'ImportStatement',
        specifiers: match[1].split(/\s*,\s*/).map((specifier) => {
          return {
            kind: 'ImportSpecifier',
            // TODO: support `{foo as bar}`
            imported: ast.identifier(specifier),
            local: ast.identifier(specifier),
          };
        }),
        source: ast.string(source),
      };
    } else {
      return {
        kind: 'ImportStatement',
        specifiers: [
          {
            kind: 'ImportDefaultSpecifier',
            identifier: ast.identifier(specifiers),
          },
        ],
        source: ast.string(source),
      };
    }
  },

  index(indexee: Expression, index: Expression): IndexExpression {
    return {kind: 'IndexExpression', indexee, index};
  },

  let(lhs: string, rhs: Expression | string | number): AssignmentStatement {
    return ast.assign('let', lhs, rhs);
  },

  member(
    object: Expression | string,
    property: Identifier | string,
  ): MemberExpression {
    return {
      kind: 'MemberExpression',
      object: typeof object === 'string' ? ast.expression(object) : object,
      property: typeof property === 'string'
        ? ast.identifier(property)
        : property,
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
      properties: Object.entries(entries).map(([key, value]) => {
        return {
          kind: 'ObjectProperty',
          key: {
            kind: 'Identifier',
            name: key,
          },
          value,
          computed: false,
          shorthand: false,
        };
      }),
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

  statementV2(source: string): Statement {
    // TODO: fix types - need to extend our grammar DSL to allow me to write
    // type declarations in it, and annotate productions.
    return parseStatement(source) as any;
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
    match = template.match(/^([\w.]+)(\+\+)$/) ||
      template.match(/^(\+\+)([\w.]+)$/);
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
        lhs: ast.identifier(lhs),
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
        lhs: ast.expression(lhs),
        rhs,
      };
    }
    throw new Error(`Not implemented: ${template}`);
  },

  string(value: string): StringValue {
    return {kind: 'StringValue', value: quote(value)};
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
        expression: typeof expression === 'string'
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

  get undefined(): UndefinedValue {
    return {kind: 'UndefinedValue'};
  },
} as const;

export default ast;
