import {invariant} from '@masochist/common';

import type {
  Argument,
  AssignmentStatement,
  BreakStatement,
  ClassDeclaration,
  ContinueStatement,
  DocComment,
  EmptyStatement,
  ExportDefaultDeclaration,
  ExpressionStatement,
  FunctionDeclaration,
  FunctionExpression,
  IfStatement,
  ImportStatement,
  LabelStatement,
  LineComment,
  MethodDefinition,
  Node,
  Program,
  PropertyDeclaration,
  RawStatement,
  ReturnStatement,
  SwitchStatement,
  Statement,
  ThrowStatement,
  WhileStatement,
} from './ast';

type Visitor = {
  // What visitor return values mean, for now:
  //
  // - `null` means delete (additionally, halts traversal);
  // - `undefined` means do nothing; and:
  // - returning the value (with a compatible type) replaces it.
  //
  // For now, "compatible" means that we let you return any `Statement` subtype
  // from visitors that visit `Statement` subtypes. We use this, for example, to
  // turn an `ExportDefaultDeclaration` into a `FunctionDeclaration`. In the
  // event that you return a different type from the pre-order visitor, we will
  // not call the post-order visitor with the wrong type.
  //
  // TODO: later on, consider doing similar things for `Expression` subtypes.

  Argument?: (argument: Argument) => Argument | null | undefined;
  ['Argument:exit']?: (argument: Argument) => Argument | null | undefined;

  ClassDeclaration?: (
    declaration: ClassDeclaration,
  ) => Statement | null | undefined;
  ['ClassDeclaration:exit']?: (
    declaration: ClassDeclaration,
  ) => Statement | null | undefined;

  DocComment?: (comment: DocComment) => Statement | null | undefined;
  ['DocComment:exit']?: (comment: DocComment) => Statement | null | undefined;

  ExportDefaultDeclaration?: (
    declaration: ExportDefaultDeclaration,
  ) => Statement | null | undefined;
  ['ExportDefaultDeclaration:exit']?: (
    declaration: ExportDefaultDeclaration,
  ) => Statement | null | undefined;

  FunctionDeclaration?: (
    declaration: FunctionDeclaration,
  ) => Statement | null | undefined;
  ['FunctionDeclaration:exit']?: (
    declaration: FunctionDeclaration,
  ) => Statement | null | undefined;

  FunctionExpression?: (
    expression: FunctionExpression,
  ) => FunctionExpression | null | undefined;
  ['FunctionExpression:exit']?: (
    expression: FunctionExpression,
  ) => FunctionExpression | null | undefined;

  ImportStatement?: (
    statement: ImportStatement,
  ) => Statement | null | undefined;
  ['ImportStatement:exit']?: (
    statement: ImportStatement,
  ) => Statement | null | undefined;

  MethodDefinition?: (
    definition: MethodDefinition,
  ) => MethodDefinition | null | undefined;
  ['MethodDefinition:exit']?: (
    definition: MethodDefinition,
  ) => MethodDefinition | null | undefined;

  Program?: (program: Program) => Program | null | undefined;
  ['Program:exit']?: (program: Program) => Program | null | undefined;

  PropertyDeclaration?: (
    declaration: PropertyDeclaration,
  ) => PropertyDeclaration | null | undefined;
  ['PropertyDeclaration:exit']?: (
    declaration: PropertyDeclaration,
  ) => PropertyDeclaration | null | undefined;
};

export default function walk(
  node: Node,
  visitor: Visitor,
): Node | null | undefined {
  if (node.kind === 'Argument') {
    return walkArgument(node, visitor);
  } else if (node.kind === 'AssignmentStatement') {
    return walkAssignmentStatement(node, visitor);
  } else if (node.kind === 'BreakStatement') {
    return walkBreakStatement(node, visitor);
  } else if (node.kind === 'ClassDeclaration') {
    return walkClassDeclaration(node, visitor);
  } else if (node.kind === 'ContinueStatement') {
    return walkContinueStatement(node, visitor);
  } else if (node.kind === 'DocComment') {
    return walkDocComment(node, visitor);
  } else if (node.kind === 'EmptyStatement') {
    return walkEmptyStatement(node, visitor);
  } else if (node.kind === 'ExportDefaultDeclaration') {
    return walkExportDefaultDeclaration(node, visitor);
  } else if (node.kind === 'ExpressionStatement') {
    return walkExpressionStatement(node, visitor);
  } else if (node.kind === 'FunctionDeclaration') {
    return walkFunctionDeclaration(node, visitor);
  } else if (node.kind === 'FunctionExpression') {
    return walkFunctionExpression(node, visitor);
  } else if (node.kind === 'IfStatement') {
    return walkIfStatement(node, visitor);
  } else if (node.kind === 'ImportStatement') {
    return walkImportStatement(node, visitor);
  } else if (node.kind === 'LabelStatement') {
    return walkLabelStatement(node, visitor);
  } else if (node.kind === 'LineComment') {
    return walkLineComment(node, visitor);
  } else if (node.kind === 'MethodDefinition') {
    return walkMethodDefinition(node, visitor);
  } else if (node.kind === 'Program') {
    return walkProgram(node, visitor);
  } else if (node.kind === 'PropertyDeclaration') {
    return walkPropertyDeclaration(node, visitor);
  } else if (node.kind === 'ReturnStatement') {
    return walkReturnStatement(node, visitor);
  } else if (node.kind === 'RawStatement') {
    return walkRawStatement(node, visitor);
  } else if (node.kind === 'SwitchStatement') {
    return walkSwitchStatement(node, visitor);
  } else if (node.kind === 'ThrowStatement') {
    return walkThrowStatement(node, visitor);
  } else if (node.kind === 'WhileStatement') {
    return walkWhileStatement(node, visitor);
  } else {
    // Use TS to enforce exhaustiveness of this conditional.
    unreachable(node);
  }
}

function unreachable(_value: never): never {
  throw new Error('unreachable(): Unreachable code was reached');
}

function mapChildren<T>(
  children: Array<T>,
  callback: (child: T) => T | null | undefined,
): Array<T> {
  let changed = false;
  const newChildren: Array<T> = [];

  for (const child of children) {
    const transformed = callback(child);
    if (transformed === null) {
      // Will remove child.
      changed = true;
    } else if (transformed === undefined) {
      // Will do nothing to child.
      newChildren.push(child);
    } else {
      // Will replace child.
      changed = true;
      newChildren.push(transformed);
    }
  }

  return changed ? newChildren : children;
}

function walkArgument(
  argument: Argument,
  visitor: Visitor,
): Argument | null | undefined {
  // Pre-order.
  let changed = false;
  let newArgument = visitor.Argument?.(argument);
  if (newArgument === null) {
    return null;
  } else if (newArgument === undefined) {
    newArgument = argument;
  } else if (newArgument.kind !== 'Argument') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newArgument, visitor);
    assertIsArgument(replacement);
    return replacement;
  } else {
    changed = true;
  }

  // This is a leaf node, so no children to visit.

  // Post-order.
  const finalArgument = visitor['Argument:exit']?.(newArgument);
  if (finalArgument === null) {
    return null;
  } else if (finalArgument === undefined) {
    return changed ? newArgument : undefined;
  } else {
    return finalArgument;
  }
}

function walkAssignmentStatement(
  _statement: AssignmentStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkBreakStatement(
  _statement: BreakStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkClassDeclaration(
  declaration: ClassDeclaration,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order
  let changed = false;
  let newDeclaration = visitor.ClassDeclaration?.(declaration);
  if (newDeclaration === null) {
    return null;
  } else if (newDeclaration === undefined) {
    newDeclaration = declaration;
  } else if (newDeclaration.kind !== 'ClassDeclaration') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newDeclaration, visitor);
    assertIsStatement(replacement);
    return replacement;
  } else {
    changed = true;
  }

  // Children.
  const body = mapChildren(newDeclaration.body, (statement) => {
    const node = walk(statement, visitor);
    invariant(
      node === null ||
        node === undefined ||
        node.kind === 'DocComment' ||
        node.kind === 'PropertyDeclaration' ||
        node.kind === 'MethodDefinition',
      'ClassDeclaration body may only contain DocComment, PropertyDeclaration, MethodDefinition nodes',
    );
    return node;
  });
  if (body !== newDeclaration.body) {
    newDeclaration.body = body;
    changed = true;
  }

  // Post-order.
  const finalDeclaration = visitor['ClassDeclaration:exit']?.(newDeclaration);
  if (finalDeclaration === null) {
    return null;
  } else if (finalDeclaration === undefined) {
    return changed ? newDeclaration : undefined;
  } else {
    return finalDeclaration;
  }
}

function walkContinueStatement(
  _statement: ContinueStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkDocComment(
  comment: DocComment,
  visitor: Visitor,
): Statement | undefined | null {
  // Pre-order.
  let changed = false;
  let newComment = visitor.DocComment?.(comment);
  if (newComment === null) {
    return null;
  } else if (newComment === undefined) {
    newComment = comment;
  } else if (newComment.kind !== 'DocComment') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newComment, visitor);
    assertIsStatement(replacement);
    return replacement;
  } else {
    changed = true;
  }

  // This is a leaf node, so no children to visit.

  // Post-order.
  const finalComment = visitor['DocComment:exit']?.(newComment);
  if (finalComment === null) {
    return null;
  } else if (finalComment === undefined) {
    return changed ? newComment : undefined;
  } else {
    return finalComment;
  }
}

function walkEmptyStatement(
  _statement: EmptyStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkExportDefaultDeclaration(
  declaration: ExportDefaultDeclaration,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order.
  let changed = false;
  let newDeclaration = visitor.ExportDefaultDeclaration?.(declaration);
  if (newDeclaration === null) {
    return null;
  } else if (newDeclaration === undefined) {
    newDeclaration = declaration;
  } else if (newDeclaration.kind !== 'ExportDefaultDeclaration') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newDeclaration, visitor);
    assertIsStatement(replacement);
    return replacement;
  } else {
    changed = true;
  }

  // Children.
  const newChild = walk(newDeclaration.declaration, visitor);
  if (newChild === null) {
    return null;
  } else if (newChild !== undefined) {
    invariant(
      newChild.kind === 'FunctionDeclaration',
      `ExportDefaultDeclaration#declaration must be a FunctionDeclaration (was ${newChild.kind})`,
    );
    newDeclaration.declaration = newChild;
    changed = true;
  }

  // Post-order.
  const finalDeclaration =
    visitor['ExportDefaultDeclaration:exit']?.(newDeclaration);
  if (finalDeclaration === null) {
    return null;
  } else if (finalDeclaration === undefined) {
    return changed ? newDeclaration : undefined;
  } else {
    return finalDeclaration;
  }
}

function walkExpressionStatement(
  _tatement: ExpressionStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkFunctionDeclaration(
  declaration: FunctionDeclaration,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order
  let changed = false;
  let newDeclaration = visitor.FunctionDeclaration?.(declaration);
  if (newDeclaration === null) {
    return null;
  } else if (newDeclaration === undefined) {
    newDeclaration = declaration;
  } else if (newDeclaration.kind !== 'FunctionDeclaration') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newDeclaration, visitor);
    assertIsStatement(replacement);
    return replacement;
  } else {
    changed = true;
  }

  // Children.
  const args = mapChildren(newDeclaration.arguments, (argument) => {
    const node = walk(argument, visitor);
    assertIsArgument(node);
    return node;
  });
  if (args !== newDeclaration.arguments) {
    newDeclaration.arguments = args;
    changed = true;
  }
  const body = mapChildren(newDeclaration.body, (statement) => {
    const node = walk(statement, visitor);
    assertIsStatement(node);
    return node;
  });
  if (body !== newDeclaration.body) {
    newDeclaration.body = body;
    changed = true;
  }

  // Post-order.
  const finalDeclaration =
    visitor['FunctionDeclaration:exit']?.(newDeclaration);
  if (finalDeclaration === null) {
    return null;
  } else if (finalDeclaration === undefined) {
    return changed ? newDeclaration : undefined;
  } else {
    return finalDeclaration;
  }
}

function walkFunctionExpression(
  expression: FunctionExpression,
  visitor: Visitor,
): FunctionExpression | null | undefined {
  // Pre-order
  let changed = false;
  let newExpression = visitor.FunctionExpression?.(expression);
  if (newExpression === null) {
    return null;
  } else if (newExpression === undefined) {
    newExpression = expression;
  } else {
    changed = true;
  }

  // Children.
  const args = mapChildren(newExpression.arguments, (argument) => {
    const node = walk(argument, visitor);
    assertIsArgument(node);
    return node;
  });
  if (args !== newExpression.arguments) {
    newExpression.arguments = args;
    changed = true;
  }
  const body = mapChildren(newExpression.body, (statement) => {
    const node = walk(statement, visitor);
    assertIsStatement(node);
    return node;
  });
  if (body !== newExpression.body) {
    newExpression.body = body;
    changed = true;
  }

  // Post-order.
  const finalExpression = visitor['FunctionExpression:exit']?.(newExpression);
  if (finalExpression === null) {
    return null;
  } else if (finalExpression === undefined) {
    return changed ? newExpression : undefined;
  } else {
    return finalExpression;
  }
}

function walkIfStatement(
  _statement: IfStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkImportStatement(
  statement: ImportStatement,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order.
  let changed = false;
  let newStatement = visitor.ImportStatement?.(statement);
  if (newStatement === null) {
    return null;
  } else if (newStatement === undefined) {
    newStatement = statement;
  } else if (newStatement.kind !== 'ImportStatement') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newStatement, visitor);
    assertIsStatement(replacement);
    return replacement;
  } else {
    changed = true;
  }

  // This is a leaf node, so no children to visit.

  // Post-order.
  const finalStatement = visitor['ImportStatement:exit']?.(newStatement);
  if (finalStatement === null) {
    return null;
  } else if (finalStatement === undefined) {
    return changed ? newStatement : undefined;
  } else {
    return finalStatement;
  }
}

function walkLabelStatement(
  _statement: LabelStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkLineComment(
  _statement: LineComment,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkMethodDefinition(
  definition: MethodDefinition,
  visitor: Visitor,
): MethodDefinition | null | undefined {
  // Pre-order
  let changed = false;
  let newDefinition = visitor.MethodDefinition?.(definition);
  if (newDefinition === null) {
    return null;
  } else if (newDefinition === undefined) {
    newDefinition = definition;
  } else {
    changed = true;
  }

  // Children.
  const newValue = walk(newDefinition.value, visitor);
  if (newValue === null) {
    return null;
  } else if (newValue !== undefined) {
    invariant(
      newValue.kind === 'FunctionExpression',
      `MethodDefinition#value must be a FunctionExpression (was ${newValue.kind})`,
    );
    newDefinition.value = newValue;
    changed = true;
  }

  // Post-order.
  const finalDefinition = visitor['MethodDefinition:exit']?.(newDefinition);
  if (finalDefinition === null) {
    return null;
  } else if (finalDefinition === undefined) {
    return changed ? newDefinition : undefined;
  } else {
    return finalDefinition;
  }
}

function walkPropertyDeclaration(
  declaration: PropertyDeclaration,
  visitor: Visitor,
): PropertyDeclaration | null | undefined {
  // Pre-order.
  let changed = false;
  let newDeclaration = visitor.PropertyDeclaration?.(declaration);
  if (newDeclaration === null) {
    return null;
  } else if (newDeclaration === undefined) {
    newDeclaration = declaration;
  } else {
    changed = true;
  }

  // This is a leaf node, so no children to visit.

  // Post-order.
  const finalDeclaration =
    visitor['PropertyDeclaration:exit']?.(newDeclaration);
  if (finalDeclaration === null) {
    return null;
  } else if (finalDeclaration === undefined) {
    return changed ? newDeclaration : undefined;
  } else {
    return finalDeclaration;
  }
}

function assertIsArgument(
  node: Node | null | undefined,
): asserts node is Argument | null | undefined {
  if (node != null) {
    invariant(node.kind === 'Argument');
  }
}

function assertIsStatement(
  node: Node | null | undefined,
): asserts node is Statement | null | undefined {
  if (node != null) {
    invariant(
      node.kind === 'AssignmentStatement' ||
        node.kind === 'BreakStatement' ||
        node.kind === 'ClassDeclaration' ||
        node.kind === 'ContinueStatement' ||
        node.kind === 'DocComment' ||
        node.kind === 'EmptyStatement' ||
        node.kind === 'ExportDefaultDeclaration' ||
        node.kind === 'ExpressionStatement' ||
        node.kind === 'FunctionDeclaration' ||
        node.kind === 'IfStatement' ||
        node.kind === 'ImportStatement' ||
        node.kind === 'LabelStatement' ||
        node.kind === 'LineComment' ||
        node.kind === 'ReturnStatement' ||
        node.kind === 'SwitchStatement' ||
        node.kind === 'ThrowStatement' ||
        node.kind === 'WhileStatement',
    );
  }
}

function walkProgram(
  program: Program,
  visitor: Visitor,
): Program | null | undefined {
  // Pre-order
  let changed = false;
  let newProgram = visitor.Program?.(program);
  if (newProgram === null) {
    return null;
  } else if (newProgram === undefined) {
    newProgram = program;
  } else {
    changed = true;
  }

  // Children.
  const statements = mapChildren(newProgram.statements, (statement) => {
    const node = walk(statement, visitor);
    assertIsStatement(node);
    return node;
  });
  if (statements !== newProgram.statements) {
    newProgram.statements = statements;
    changed = true;
  }

  // Post-order.
  const finalProgram = visitor['Program:exit']?.(newProgram);
  if (finalProgram === null) {
    return null;
  } else if (finalProgram === undefined) {
    return changed ? newProgram : undefined;
  } else {
    return finalProgram;
  }
}

function walkRawStatement(
  _statement: RawStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkReturnStatement(
  _statement: ReturnStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkSwitchStatement(
  _statement: SwitchStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkThrowStatement(
  _statement: ThrowStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkWhileStatement(
  _statement: WhileStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}
