import type {Expression, Program, Statement, SwitchCase} from './ast';

const TAB_WIDTH = 2;

export default function print(ast: Program) {
  return ast.statements
    .map((statement) => {
      return printStatement(statement, 0);
    })
    .join('');
}

function printExpression(expression: Expression, indent: number): string {
  if (expression.kind === 'ArrayValue') {
    return (
      '[' +
      expression.items.map((item) => printExpression(item, indent)).join(', ') +
      ']'
    );
  } else if (expression.kind === 'BinaryExpression') {
    return (
      printExpression(expression.lexpr, indent + 1) +
      ` ${expression.operator} ` +
      printExpression(expression.rexpr, indent + 1)
    );
  } else if (expression.kind === 'BooleanValue') {
    return expression.value ? 'true' : 'false';
  } else if (expression.kind === 'CallExpression') {
    return (
      printExpression(expression.callee, indent) +
      '(' +
      expression.arguments
        .map((argument) => {
          return printExpression(argument, indent);
        })
        .join(', ') +
      ')'
    );
  } else if (expression.kind === 'Identifier') {
    return expression.name;
  } else if (expression.kind === 'IndexExpression') {
    return (
      printExpression(expression.indexee, indent) +
      '[' +
      printExpression(expression.index, indent) +
      ']'
    );
  } else if (expression.kind === 'MemberExpression') {
    return (
      printExpression(expression.object, indent + 1) +
      (expression.property.kind === 'Identifier'
        ? `.${expression.property.name}`
        : `[${printExpression(expression.property, indent + 1)}]`)
    );
  } else if (expression.kind === 'NewExpression') {
    return (
      'new ' +
      printExpression(expression.object, indent) +
      (expression.arguments
        ? '(' +
          expression.arguments
            .map((argument) => printExpression(argument, indent))
            .join(', ') +
          ')'
        : '')
    );
  } else if (expression.kind === 'NullValue') {
    return 'null';
  } else if (expression.kind === 'NumberValue') {
    return expression.value.toString();
  } else if (expression.kind === 'ObjectValue') {
    return (
      '{\n' +
      expression.entries
        .map(([propertyName, value]) => {
          let property: string;
          if (typeof propertyName === 'number') {
            property = propertyName.toString();
          } else if (/^[a-z_][0-9a-z_]*$/i.test(propertyName)) {
            property = propertyName;
          } else {
            // TODO: use quote() instead of JSON.stringify()
            property = `[${JSON.stringify}]`;
          }
          if (value.kind === 'Identifier' && value.name === property) {
            // Use object property shorthand.
            return printIndent(indent + 1) + `${property},`;
          } else {
            return (
              printIndent(indent + 1) +
              `${property}: ${printExpression(value, indent + 1)},`
            );
          }
        })
        .join('\n') +
      '\n' +
      printIndent(indent) +
      '}'
    );
  } else if (expression.kind === 'StringValue') {
    // TODO: prefer single quotes; I have a quote() function for this elsewhere
    return JSON.stringify(expression.value);
  } else if (expression.kind === 'TernaryExpression') {
    return (
      // TODO: add smarts to use newlines if needed, and only use parens if
      // needed
      '(' +
      printExpression(expression.condition, indent + 1) +
      ' ? ' +
      printExpression(expression.consequent, indent + 1) +
      ' : ' +
      printExpression(expression.alternate, indent + 1) +
      ')'
    );
  } else if (expression.kind === 'UnaryExpression') {
    if (expression.operator === '!' || expression.operator === '~') {
      return expression.operator + printExpression(expression.operand, indent);
    } else if (expression.operator === '++' || expression.operator === '--') {
      return printExpression(expression.operand, indent) + expression.operator;
    }
  } else if (expression.kind === 'UndefinedValue') {
    return 'undefined';
  } else if (expression.kind === 'YieldExpression') {
    if (expression.expression) {
      return `yield ${printExpression(expression.expression, indent)}`;
    } else {
      return 'yield';
    }
  }
  throw new Error('printExpression(): Unreachable');
}

function printIndent(indent: number): string {
  return ' '.repeat(indent * TAB_WIDTH);
}

function printStatement(statement: Statement, indent: number): string {
  if (statement.kind === 'AssignmentStatement') {
    const binding = statement.binding ? `${statement.binding} ` : '';
    return (
      printIndent(indent) +
      binding +
      statement.lhs +
      ' = ' +
      printExpression(statement.rhs, indent + 1) +
      ';\n'
    );
  } else if (statement.kind === 'BreakStatement') {
    if (statement.label) {
      return printIndent(indent) + `break ${statement.label};\n`;
    } else {
      return printIndent(indent) + 'break;\n';
    }
  } else if (statement.kind === 'ContinueStatement') {
    if (statement.label) {
      return printIndent(indent) + `continue ${statement.label};\n`;
    } else {
      return printIndent(indent) + 'continue;\n';
    }
  } else if (statement.kind === 'ExportDefaultDeclaration') {
    return (
      printIndent(indent) +
      'export default ' +
      printStatement(statement.declaration, indent).trimStart()
    );
  } else if (statement.kind === 'ExpressionStatement') {
    return (
      printIndent(indent) +
      printExpression(statement.expression, indent) +
      ';\n'
    );
  } else if (statement.kind === 'FunctionDeclaration') {
    return (
      printIndent(indent) +
      'function ' +
      statement.name +
      '(' +
      statement.arguments.join(', ') +
      ') {\n' +
      statement.body
        .map((statement) => {
          return printStatement(statement, indent + 1);
        })
        .join('') +
      printIndent(indent) +
      '}\n'
    );
  } else if (statement.kind === 'IfStatement') {
    const lines = [];
    for (let i = 0; i < statement.consequents.length; i++) {
      const consequent = statement.consequents[i];
      const condition = printExpression(consequent.condition, indent);
      if (i === 0) {
        lines.push(printIndent(indent) + 'if (' + condition + ') {\n');
      } else {
        lines.push(printIndent(indent) + '} else if (' + condition + ') {\n');
      }
      lines.push(
        ...consequent.block.map((statement) => {
          return printStatement(statement, indent + 1);
        }),
      );
    }
    if (statement.alternate) {
      lines.push(printIndent(indent) + '} else {\n');
      lines.push(
        ...statement.alternate.map((alternate) => {
          return printStatement(alternate, indent + 1);
        }),
      );
    }
    lines.push(printIndent(indent) + '}\n');
    return lines.join('');
  } else if (statement.kind === 'LabelStatement') {
    return (
      printIndent(indent) +
      statement.label +
      ': ' +
      printStatement(statement.statement, indent).trimStart()
    );
  } else if (statement.kind === 'LineComment') {
    return printIndent(indent) + '//' + statement.contents + '\n';
  } else if (statement.kind === 'SwitchStatement') {
    return (
      printIndent(indent) +
      'switch (' +
      printExpression(statement.condition, indent) +
      ') {\n' +
      statement.cases
        .map((switchCase) => {
          return printSwitchCase(switchCase, indent + 1);
        })
        .join('') +
      printIndent(indent) +
      '}\n'
    );
  } else if (statement.kind === 'ThrowStatement') {
    return (
      printIndent(indent) +
      'throw ' +
      printExpression(statement.expression, indent) +
      ';\n'
    );
  } else if (statement.kind === 'WhileStatement') {
    return (
      printIndent(indent) +
      'while (' +
      printExpression(statement.condition, indent) +
      ') {\n' +
      statement.block
        .map((statement) => {
          return printStatement(statement, indent + 1);
        })
        .join('') +
      printIndent(indent) +
      '}\n'
    );
  }
  throw new Error('printStatement(): Unreachable');
}

// TODO: if declares any block-scoped variables, wrap in curlies
function printSwitchCase(switchCase: SwitchCase, indent: number): string {
  return (
    printIndent(indent) +
    (switchCase.determinant === null
      ? 'default'
      : 'case ' + printExpression(switchCase.determinant, indent)) +
    ':\n' +
    switchCase.block
      .map((statement) => {
        return printStatement(statement, indent + 1);
      })
      .join('')
  );
}
