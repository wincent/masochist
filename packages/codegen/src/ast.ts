import {invariant} from '@masochist/common';

import parseStatement from './parseStatement';
import quote from './quote';

import type {
  Argument,
  ArrayValue,
  AssignmentStatement,
  Base,
  BinaryExpression,
  BinaryOperator,
  BooleanValue,
  BreakStatement,
  CallExpression,
  ClassDeclaration,
  ClassExpression,
  ContinueStatement,
  Declaration,
  DocComment,
  EmptyStatement,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  Expression,
  ExpressionStatement,
  FunctionDeclaration,
  GetAccessor,
  Identifier,
  ImportStatement,
  IndexExpression,
  LineComment,
  MemberExpression,
  MethodDefinition,
  NewExpression,
  NullValue,
  NumberValue,
  ObjectValue,
  Program,
  PropertyDeclaration,
  RawExpression,
  RawStatement,
  ReturnStatement,
  Statement,
  StringValue,
  Type,
  UndefinedValue,
  WhileStatement,
} from '@masochist/types';

// TODO make a **simple** JS parser with this tooling so I can do a better job
// of the functions in here that take templates, instead of using regexps.

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
    options?: {type?: Type},
  ): AssignmentStatement {
    if (typeof rhs === 'string') {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs: ast.expression(lhs), // TODO: limit this, not all expressions OK
        type: options?.type,
        rhs: ast.expression(rhs),
      };
    } else if (typeof rhs === 'number') {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs: ast.expression(lhs), // TODO: limit this, not all expressions OK
        type: options?.type,
        rhs: ast.number(rhs),
      };
    } else {
      return {
        kind: 'AssignmentStatement',
        binding,
        lhs: ast.expression(lhs), // TODO: limit this, not all expressions OK
        type: options?.type,
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
    body: Array<
      DocComment | GetAccessor | MethodDefinition | PropertyDeclaration
    >,
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

  function({name, arguments: args, type, body}: {
    name: string;
    arguments: Array<string>;
    body: Array<Statement>;
    type?: string;
  }): FunctionDeclaration {
    return {
      kind: 'FunctionDeclaration',
      name,
      arguments: args.map(ast.argument),
      type,
      body,
    };
  },

  identifier(name: string): Identifier {
    return {kind: 'Identifier', name};
  },

  /**
   * eg.
   *
   *    import('a', 'b')                 -> import a from 'b'
   *    import('{a}', 'b')               -> import {a} from 'b'
   *    import('{a, b}', 'c')            -> import {a, b} from 'c'
   *    import('{a}', 'b', {type: true}) -> import type {a} from 'b'
   */
  import(
    specifiers: string,
    source: string,
    options?: {type: boolean},
  ): ImportStatement {
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
        type: !!options?.type,
      };
    } else {
      return {
        kind: 'ImportStatement',
        specifiers: [{
          kind: 'ImportDefaultSpecifier',
          identifier: ast.identifier(specifiers),
        }],
        source: ast.string(source),
        type: !!options?.type,
      };
    }
  },

  importType(specifiers: string, source: string): ImportStatement {
    return ast.import(specifiers, source, {type: true});
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

  statements(source: string): Array<Statement> {
    // TODO: fix types - need to extend our grammar DSL to allow me to write
    // type declarations in it, and annotate productions.
    // TODO: consider renaming this to `parseStatements()`
    return parseStatement(source) as any;
  },

  // TODO: replace this with `statements()` above
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
