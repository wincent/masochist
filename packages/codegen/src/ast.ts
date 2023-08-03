import {invariant} from '@masochist/common';

type ArrayValue = {
  kind: 'ArrayValue';
  items: Array<Expression>;
};

type AssignmentStatement = {
  kind: 'AssignmentStatement';
  binding: 'const' | 'let' | 'var' | null;
  // Note: Could need to support destructuring etc in the future.
  // TODO: support proper expressions here (eg. `this.foo` MemberExpression) in addition to just identifier
  lhs: string;
  rhs: Expression;
};

type BinaryExpression = {
  kind: 'BinaryExpression';
  lexpr: Expression;
  operator:
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
  rexpr: Expression;
};

type BooleanValue = {
  kind: 'BooleanValue';
  value: boolean;
};

type BreakStatement = {
  kind: 'BreakStatement';
  label?: string;
};

type CallExpression = {
  kind: 'CallExpression';
  callee: Expression;
  arguments: Array<Expression>;
};

type ClassDeclaration = {
  kind: 'ClassDeclaration';
  id: string;
  // TODO: add superclass, if I ever need it
  body: Array<MethodDefinition | PropertyDeclaration>;
};

type Consequent = {
  kind: 'Consequent';
  condition: Expression;
  block: Array<Statement>;
};

type ContinueStatement = {
  kind: 'ContinueStatement';
  label?: string;
};

type DocComment = {
  kind: 'DocComment';
  contents: Array<string>;
};

type EmptyStatement = {
  kind: 'EmptyStatement';
};

export type Expression =
  | BinaryExpression
  | CallExpression
  | Identifier
  | IndexExpression
  | MemberExpression
  | NewExpression
  | PrimitiveValue
  | TernaryExpression
  | UnaryExpression
  | YieldExpression;

type ExportDefaultDeclaration = {
  kind: 'ExportDefaultDeclaration';
  declaration: FunctionDeclaration; // Later on, may have other types here.
};

type ExpressionStatement = {
  kind: 'ExpressionStatement';
  expression: Expression;
};

type FunctionDeclaration = {
  kind: 'FunctionDeclaration';
  name: string;
  arguments: Array<string>;
  body: Array<Statement>;
};

export type FunctionExpression = {
  kind: 'FunctionExpression';
  arguments: Array<string>;
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

type ImportStatement = {
  kind: 'ImportStatement';
  specifiers: Array<ImportDefaultSpecifier | ImportSpecifier>;
  source: StringValue;
};

type IndexExpression = {
  kind: 'IndexExpression';
  index: Expression;
  indexee: Expression;
};

type LabelStatement = {
  kind: 'LabelStatement';
  label: string;
  statement: Statement;
};

type LineComment = {
  kind: 'LineComment';
  contents: string;
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

type NullValue = {
  kind: 'NullValue';
};

type NumberValue = {
  kind: 'NumberValue';
  value: number;
};

type ObjectValue = {
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

type ReturnStatement = {
  kind: 'ReturnStatement';
  expression?: Expression;
};

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

type UnaryExpression = {
  kind: 'UnaryExpression';
  operator:
    | '!'
    | '++' // TODO: distinguish pre and postfix operators
    | '--'
    | '~';
  operand: Expression;
};

type UndefinedValue = {
  kind: 'UndefinedValue';
};

type StringValue = {
  kind: 'StringValue';
  value: string;
};

type ThrowStatement = {
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
  assign(
    binding: 'const' | 'let' | 'var' | null,
    lhs: string,
    rhs: Expression | number,
  ): AssignmentStatement {
    if (typeof rhs === 'number') {
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

  binop(lexpr: Expression, operator: '<', rexpr: Expression): BinaryExpression {
    return {
      kind: 'BinaryExpression',
      lexpr,
      operator,
      rexpr,
    };
  },

  call(
    callee: Expression | string,
    ...args: Array<Expression>
  ): CallExpression {
    return {
      kind: 'CallExpression',
      callee: typeof callee === 'string' ? ast.expression(callee) : callee,
      arguments: args,
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
    body: Array<MethodDefinition | PropertyDeclaration>,
  ): ClassDeclaration {
    return {
      kind: 'ClassDeclaration',
      id,
      body,
    };
  },

  const(lhs: string, rhs: Expression | number): AssignmentStatement {
    return ast.assign('const', lhs, rhs);
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

  expression(template: string): Expression {
    if (/^\d+$/.test(template)) {
      return ast.number(parseInt(template));
    }

    let match = template.match(/^[_a-z]\w*$/i);
    if (match) {
      return ast.identifier(template);
    }

    match = template.match(/^(\w+)\[(\w+)\]$/);
    if (match) {
      const indexee = match[1];
      const index = match[2];
      return ast.index(ast.identifier(indexee), ast.identifier(index));
    }

    match = template.match(/^(\w+)\(\)$/);
    if (match) {
      return ast.call(match[1]);
    }

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

      match = rexpr.match(/^\d+$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: {kind: 'NumberValue', value: parseInt(match[0])},
        };
      }

      match = rexpr.match(/^'(.+)'$/);
      if (match) {
        return {
          kind: 'BinaryExpression',
          lexpr: {kind: 'Identifier', name: lexpr},
          operator,
          rexpr: {kind: 'StringValue', value: match[1]},
        };
      }

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
      arguments: args,
      body: statements,
    };
  },

  identifier(name: string): Identifier {
    return {kind: 'Identifier', name};
  },

  index(indexee: Expression, index: Expression): IndexExpression {
    return {kind: 'IndexExpression', indexee, index};
  },

  let(lhs: string, rhs: Expression | number): AssignmentStatement {
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
        arguments: args,
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

  number(value: number): NumberValue {
    return {kind: 'NumberValue', value};
  },

  object(entries: {[key: string]: Expression}): ObjectValue {
    return {
      kind: 'ObjectValue',
      entries: Object.entries(entries),
    };
  },

  propertyDeclaration(name: string, type: string): PropertyDeclaration {
    return {
      kind: 'PropertyDeclaration',
      name,
      type,
    };
  },

  statement(template: string): Statement {
    let match = template.match(/^break(?:\s+(\w+))?$/);
    if (match) {
      const label = match[1];
      if (label) {
        return {kind: 'BreakStatement', label};
      } else {
        return {kind: 'BreakStatement'};
      }
    }

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

    match = template.match(/^([\w.]+)(\+\+)$/);
    if (match) {
      const name = match[1];
      const operator = match[2];
      invariant(operator === '++');
      return {
        kind: 'ExpressionStatement',
        expression: {
          kind: 'UnaryExpression',
          operator,
          operand: {kind: 'Identifier', name},
        },
      };
    }

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

  var(lhs: string, rhs: Expression | number): AssignmentStatement {
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

  get break(): BreakStatement {
    return {kind: 'BreakStatement'};
  },

  get empty(): EmptyStatement {
    return {kind: 'EmptyStatement'};
  },

  get false(): BooleanValue {
    return {kind: 'BooleanValue', value: false};
  },

  get true(): BooleanValue {
    return {kind: 'BooleanValue', value: true};
  },

  get return(): ReturnStatement {
    return {kind: 'ReturnStatement'};
  },
} as const;

export default ast;
