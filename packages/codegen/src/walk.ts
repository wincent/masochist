import {invariant, unreachable} from '@masochist/common';

import type {
  Argument,
  ArrayValue,
  AssignmentStatement,
  BinaryExpression,
  BitwiseNotExpression,
  BooleanValue,
  BreakStatement,
  CallExpression,
  ClassDeclaration,
  ClassExpression,
  ContinueStatement,
  Declaration,
  DecrementExpression,
  DocComment,
  EmptyStatement,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  Expression,
  ExpressionStatement,
  ForStatement,
  FunctionDeclaration,
  FunctionExpression,
  GetAccessor,
  Identifier,
  IfStatement,
  ImportStatement,
  IncrementExpression,
  IndexExpression,
  LabelStatement,
  LineComment,
  LogicalNotExpression,
  MemberExpression,
  MethodDefinition,
  NewExpression,
  Node,
  NullValue,
  NumberValue,
  ObjectProperty,
  ObjectValue,
  Pattern,
  Program,
  PropertyDeclaration,
  RawExpression,
  RawStatement,
  ReturnStatement,
  SpreadElement,
  Statement,
  StringValue,
  SwitchStatement,
  TernaryExpression,
  ThrowStatement,
  Type,
  UndefinedValue,
  WhileStatement,
  YieldExpression,
} from '@masochist/types';

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

  'Argument'?: (argument: Argument) => Argument | null | undefined;
  ['Argument:exit']?: (argument: Argument) => Argument | null | undefined;

  'AssignmentStatement'?: (
    assignment: AssignmentStatement,
  ) => Statement | null | undefined;
  ['AssignmentStatement:exit']?: (
    assignment: AssignmentStatement,
  ) => Statement | null | undefined;

  'ClassDeclaration'?: (
    declaration: ClassDeclaration,
  ) => Statement | null | undefined;
  ['ClassDeclaration:exit']?: (
    declaration: ClassDeclaration,
  ) => Statement | null | undefined;

  'ClassExpression'?: (
    expression: ClassExpression,
  ) => Expression | null | undefined;
  ['ClassExpression:exit']?: (
    expression: ClassExpression,
  ) => Expression | null | undefined;

  'DocComment'?: (comment: DocComment) => Statement | null | undefined;
  ['DocComment:exit']?: (comment: DocComment) => Statement | null | undefined;

  'ExportDefaultDeclaration'?: (
    declaration: ExportDefaultDeclaration,
  ) => Statement | null | undefined;
  ['ExportDefaultDeclaration:exit']?: (
    declaration: ExportDefaultDeclaration,
  ) => Statement | null | undefined;

  'ExportNamedDeclaration'?: (
    declaration: ExportNamedDeclaration,
  ) => Statement | null | undefined;
  ['ExportNamedDeclaration:exit']?: (
    declaration: ExportNamedDeclaration,
  ) => Statement | null | undefined;

  'FunctionDeclaration'?: (
    declaration: FunctionDeclaration,
  ) => Statement | null | undefined;
  ['FunctionDeclaration:exit']?: (
    declaration: FunctionDeclaration,
  ) => Statement | null | undefined;

  'FunctionExpression'?: (
    expression: FunctionExpression,
  ) => FunctionExpression | null | undefined;
  ['FunctionExpression:exit']?: (
    expression: FunctionExpression,
  ) => FunctionExpression | null | undefined;

  'ImportStatement'?: (
    statement: ImportStatement,
  ) => Statement | null | undefined;
  ['ImportStatement:exit']?: (
    statement: ImportStatement,
  ) => Statement | null | undefined;

  'MethodDefinition'?: (
    definition: MethodDefinition,
  ) => MethodDefinition | null | undefined;
  ['MethodDefinition:exit']?: (
    definition: MethodDefinition,
  ) => MethodDefinition | null | undefined;

  'Program'?: (program: Program) => Program | null | undefined;
  ['Program:exit']?: (program: Program) => Program | null | undefined;

  'PropertyDeclaration'?: (
    declaration: PropertyDeclaration,
  ) => PropertyDeclaration | null | undefined;
  ['PropertyDeclaration:exit']?: (
    declaration: PropertyDeclaration,
  ) => PropertyDeclaration | null | undefined;

  'RawStatement'?: (statement: RawStatement) => Statement | null | undefined;
  ['RawStatement:exit']?: (
    statement: RawStatement,
  ) => Statement | null | undefined;
};

export default function walk(
  node: Node,
  visitor: Visitor,
): Node | null | undefined {
  if (node.kind === 'Argument') {
    return walkArgument(node, visitor);
  } else if (node.kind === 'ArrayValue') {
    return walkArrayValue(node, visitor);
  } else if (node.kind === 'AssignmentStatement') {
    return walkAssignmentStatement(node, visitor);
  } else if (node.kind === 'BinaryExpression') {
    return walkBinaryExpression(node, visitor);
  } else if (node.kind === 'BitwiseNotExpression') {
    return walkBitwiseNotExpression(node, visitor);
  } else if (node.kind === 'BooleanValue') {
    return walkBooleanValue(node, visitor);
  } else if (node.kind === 'BreakStatement') {
    return walkBreakStatement(node, visitor);
  } else if (node.kind === 'CallExpression') {
    return walkCallExpression(node, visitor);
  } else if (node.kind === 'ClassDeclaration') {
    return walkClassDeclaration(node, visitor);
  } else if (node.kind === 'ClassExpression') {
    return walkClassExpression(node, visitor);
  } else if (node.kind === 'ContinueStatement') {
    return walkContinueStatement(node, visitor);
  } else if (node.kind === 'DecrementExpression') {
    return walkDecrementExpression(node, visitor);
  } else if (node.kind === 'DocComment') {
    return walkDocComment(node, visitor);
  } else if (node.kind === 'EmptyStatement') {
    return walkEmptyStatement(node, visitor);
  } else if (node.kind === 'ExportDefaultDeclaration') {
    return walkExportDefaultDeclaration(node, visitor);
  } else if (node.kind === 'ExportNamedDeclaration') {
    return walkExportNamedDeclaration(node, visitor);
  } else if (node.kind === 'ExpressionStatement') {
    return walkExpressionStatement(node, visitor);
  } else if (node.kind === 'ForStatement') {
    return walkForStatement(node, visitor);
  } else if (node.kind === 'FunctionDeclaration') {
    return walkFunctionDeclaration(node, visitor);
  } else if (node.kind === 'FunctionExpression') {
    return walkFunctionExpression(node, visitor);
  } else if (node.kind === 'GetAccessor') {
    return walkGetAccessor(node, visitor);
  } else if (node.kind === 'Identifier') {
    return walkIdentifier(node, visitor);
  } else if (node.kind === 'IfStatement') {
    return walkIfStatement(node, visitor);
  } else if (node.kind === 'ImportStatement') {
    return walkImportStatement(node, visitor);
  } else if (node.kind === 'IncrementExpression') {
    return walkIncrementExpression(node, visitor);
  } else if (node.kind === 'IndexExpression') {
    return walkIndexExpression(node, visitor);
  } else if (node.kind === 'LabelStatement') {
    return walkLabelStatement(node, visitor);
  } else if (node.kind === 'LineComment') {
    return walkLineComment(node, visitor);
  } else if (node.kind === 'LogicalNotExpression') {
    return walkLogicalNotExpression(node, visitor);
  } else if (node.kind === 'MemberExpression') {
    return walkMemberExpression(node, visitor);
  } else if (node.kind === 'MethodDefinition') {
    return walkMethodDefinition(node, visitor);
  } else if (node.kind === 'NewExpression') {
    return walkNewExpression(node, visitor);
  } else if (node.kind === 'NullValue') {
    return walkNullValue(node, visitor);
  } else if (node.kind === 'NumberValue') {
    return walkNumberValue(node, visitor);
  } else if (node.kind === 'ObjectProperty') {
    return walkObjectProperty(node, visitor);
  } else if (node.kind === 'ObjectValue') {
    return walkObjectValue(node, visitor);
  } else if (
    node.kind === 'ArrayPattern' ||
    node.kind === 'ObjectPattern'
  ) {
    // Using a single implementation (a no-op for now!) for all `Pattern` nodes.
    return walkPattern(node, visitor);
  } else if (node.kind === 'Program') {
    return walkProgram(node, visitor);
  } else if (node.kind === 'PropertyDeclaration') {
    return walkPropertyDeclaration(node, visitor);
  } else if (node.kind === 'ReturnStatement') {
    return walkReturnStatement(node, visitor);
  } else if (node.kind === 'RawExpression') {
    return walkRawExpression(node, visitor);
  } else if (node.kind === 'RawStatement') {
    return walkRawStatement(node, visitor);
  } else if (node.kind === 'SpreadElement') {
    return walkSpreadElement(node, visitor);
  } else if (node.kind === 'StringValue') {
    return walkStringValue(node, visitor);
  } else if (node.kind === 'SwitchStatement') {
    return walkSwitchStatement(node, visitor);
  } else if (node.kind === 'TernaryExpression') {
    return walkTernaryExpression(node, visitor);
  } else if (node.kind === 'ThrowStatement') {
    return walkThrowStatement(node, visitor);
  } else if (
    node.kind === 'GenericType' ||
    node.kind === 'NamedType' ||
    node.kind === 'TupleType' ||
    node.kind === 'UnionType'
  ) {
    // Using a single implementation (a no-op for now!) for all `Type` nodes.
    return walkType(node, visitor);
  } else if (node.kind === 'UndefinedValue') {
    return walkUndefinedValue(node, visitor);
  } else if (node.kind === 'WhileStatement') {
    return walkWhileStatement(node, visitor);
  } else if (node.kind === 'YieldExpression') {
    return walkYieldExpression(node, visitor);
  } else {
    unreachable(node);
  }
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

function walkArrayValue(
  _value: ArrayValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkAssignmentStatement(
  statement: AssignmentStatement,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order.
  let changed = false;
  let newStatement = visitor.AssignmentStatement?.(statement);
  if (newStatement === null) {
    return null;
  } else if (newStatement === undefined) {
    newStatement = statement;
  } else if (newStatement.kind !== 'AssignmentStatement') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newStatement, visitor);
    assertIsStatement(replacement);
    if (replacement === undefined) {
      return newStatement;
    } else {
      return replacement;
    }
  } else {
    changed = true;
  }

  // Children.
  let newChild = walk(newStatement.lhs, visitor);
  if (newChild === null) {
    return null;
  } else if (newChild !== undefined) {
    assertIsId(newChild);
    newStatement.lhs = newChild;
    changed = true;
  }
  if (newStatement.type) {
    newChild = walk(newStatement.type, visitor);
    if (newChild === null) {
      // TODO: remove type (can I mutate?)
      changed = true;
    } else if (newChild !== undefined) {
      // TODO: replace type (can I mutate?)
      // TODO: assertIsType
      changed = true;
    }
  }
  newChild = walk(newStatement.rhs, visitor);
  if (newChild === null) {
    return null;
  } else if (newChild !== undefined) {
    assertIsExpression(newChild);
    newStatement.rhs = newChild;
    changed = true;
  }

  // Post-order.
  const finalStatement = visitor['AssignmentStatement:exit']?.(newStatement);
  if (finalStatement === null) {
    return null;
  } else if (finalStatement === undefined) {
    return changed ? newStatement : undefined;
  } else {
    return finalStatement;
  }
}

function walkBinaryExpression(
  _expression: BinaryExpression,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkBitwiseNotExpression(
  _expression: BitwiseNotExpression,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkBooleanValue(
  _value: BooleanValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkBreakStatement(
  _statement: BreakStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkCallExpression(
  _expression: CallExpression,
  _visitor: Visitor,
): Expression | null | undefined {
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
    if (replacement === undefined) {
      return newDeclaration;
    } else {
      return replacement;
    }
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

function walkClassExpression(
  expression: ClassExpression,
  visitor: Visitor,
): Expression | null | undefined {
  // Pre-order
  let changed = false;
  let newExpression = visitor.ClassExpression?.(expression);
  if (newExpression === null) {
    return null;
  } else if (newExpression === undefined) {
    newExpression = expression;
  } else if (newExpression.kind !== 'ClassExpression') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newExpression, visitor);
    assertIsExpression(replacement);
    if (replacement === undefined) {
      return newExpression;
    } else {
      return replacement;
    }
  } else {
    changed = true;
  }

  // Children.
  const body = mapChildren(newExpression.body, (statement) => {
    const node = walk(statement, visitor);
    invariant(
      node === null ||
        node === undefined ||
        node.kind === 'DocComment' ||
        node.kind === 'PropertyDeclaration' ||
        node.kind === 'MethodDefinition',
      'ClassExpression body may only contain DocComment, PropertyDeclaration, MethodDefinition nodes',
    );
    return node;
  });
  if (body !== newExpression.body) {
    newExpression.body = body;
    changed = true;
  }

  // Post-order.
  const finalExpression = visitor['ClassExpression:exit']?.(newExpression);
  if (finalExpression === null) {
    return null;
  } else if (finalExpression === undefined) {
    return changed ? newExpression : undefined;
  } else {
    return finalExpression;
  }
}

function walkContinueStatement(
  _statement: ContinueStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkDecrementExpression(
  _expression: DecrementExpression,
  _visitor: Visitor,
): Expression | null | undefined {
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
    if (replacement === undefined) {
      return newComment;
    } else {
      return replacement;
    }
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
    if (replacement === undefined) {
      return newDeclaration;
    } else {
      return replacement;
    }
  } else {
    changed = true;
  }

  // Children.
  const newChild = walk(newDeclaration.declaration, visitor);
  if (newChild === null) {
    return null;
  } else if (newChild !== undefined) {
    assertIsDeclaration(newChild);
    newDeclaration.declaration = newChild;
    changed = true;
  }

  // Post-order.
  const finalDeclaration = visitor['ExportDefaultDeclaration:exit']?.(
    newDeclaration,
  );
  if (finalDeclaration === null) {
    return null;
  } else if (finalDeclaration === undefined) {
    return changed ? newDeclaration : undefined;
  } else {
    return finalDeclaration;
  }
}

function walkExportNamedDeclaration(
  declaration: ExportNamedDeclaration,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order.
  let changed = false;
  let newDeclaration = visitor.ExportNamedDeclaration?.(declaration);
  if (newDeclaration === null) {
    return null;
  } else if (newDeclaration === undefined) {
    newDeclaration = declaration;
  } else if (newDeclaration.kind !== 'ExportNamedDeclaration') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newDeclaration, visitor);
    assertIsStatement(replacement);
    if (replacement === undefined) {
      return newDeclaration;
    } else {
      return replacement;
    }
  } else {
    changed = true;
  }

  // Children.
  const newChild = walk(newDeclaration.declaration, visitor);
  if (newChild === null) {
    return null;
  } else if (newChild !== undefined) {
    assertIsDeclaration(newChild);
    newDeclaration.declaration = newChild;
    changed = true;
  }

  // Post-order.
  const finalDeclaration = visitor['ExportNamedDeclaration:exit']?.(
    newDeclaration,
  );
  if (finalDeclaration === null) {
    return null;
  } else if (finalDeclaration === undefined) {
    return changed ? newDeclaration : undefined;
  } else {
    return finalDeclaration;
  }
}

function walkExpressionStatement(
  _statement: ExpressionStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkForStatement(
  _statement: ForStatement,
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
    if (replacement === undefined) {
      return newDeclaration;
    } else {
      return replacement;
    }
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
  const finalDeclaration = visitor['FunctionDeclaration:exit']?.(
    newDeclaration,
  );
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

function walkGetAccessor(
  _accessor: GetAccessor,
  _visitor: Visitor,
): GetAccessor | null | undefined {
  return undefined; // Unimplemented.
}

function walkIdentifier(
  _identifier: Identifier,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkIfStatement(
  _statement: IfStatement,
  _visitor: Visitor,
): Statement | null | undefined {
  return undefined; // Unimplemented.
}

function walkIncrementExpression(
  _expression: IncrementExpression,
  _visitor: Visitor,
): Expression | null | undefined {
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
    if (replacement === undefined) {
      return newStatement;
    } else {
      return replacement;
    }
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

function walkIndexExpression(
  _expression: IndexExpression,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
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

function walkLogicalNotExpression(
  _expression: LogicalNotExpression,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkMemberExpression(
  _expression: MemberExpression,
  _visitor: Visitor,
): Expression | null | undefined {
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

function walkNewExpression(
  _expression: NewExpression,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkNullValue(
  _value: NullValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkNumberValue(
  _value: NumberValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkObjectProperty(
  _value: ObjectProperty,
  _visitor: Visitor,
): ObjectProperty | null | undefined {
  return undefined; // Unimplemented.
}

function walkObjectValue(
  _value: ObjectValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
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
  const finalDeclaration = visitor['PropertyDeclaration:exit']?.(
    newDeclaration,
  );
  if (finalDeclaration === null) {
    return null;
  } else if (finalDeclaration === undefined) {
    return changed ? newDeclaration : undefined;
  } else {
    return finalDeclaration;
  }
}

function walkSpreadElement(
  _element: SpreadElement,
  _visitor: Visitor,
): Expression | SpreadElement | null | undefined {
  return undefined; // Unimplemented.
}

function walkStringValue(
  _value: StringValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkType(
  _type: Type,
  _visitor: Visitor,
): Type | null | undefined {
  return undefined; // Unimplemented.
}

function walkUndefinedValue(
  _value: UndefinedValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkPattern(
  _pattern: Pattern,
  _visitor: Visitor,
): Pattern | null | undefined {
  return undefined; // Unimplemented.
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

function walkRawExpression(
  _expression: RawExpression,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkRawStatement(
  statement: RawStatement,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order.
  let changed = false;
  let newStatement = visitor.RawStatement?.(statement);
  if (newStatement === null) {
    return null;
  } else if (newStatement === undefined) {
    newStatement = statement;
  } else if (newStatement.kind !== 'RawStatement') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newStatement, visitor);
    assertIsStatement(replacement);
    if (replacement === undefined) {
      return newStatement;
    } else {
      return replacement;
    }
  } else {
    changed = true;
  }

  // This is a leaf node, so no children to visit.

  // Post-order.
  const finalStatement = visitor['RawStatement:exit']?.(newStatement);
  if (finalStatement === null) {
    return null;
  } else if (finalStatement === undefined) {
    return changed ? newStatement : undefined;
  } else {
    return finalStatement;
  }
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

function walkTernaryExpression(
  _expression: TernaryExpression,
  _visitor: Visitor,
): Expression | null | undefined {
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

function walkYieldExpression(
  _expression: YieldExpression,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function assertIsArgument(
  node: Node | null | undefined,
): asserts node is Argument | null | undefined {
  if (node != null) {
    invariant(node.kind === 'Argument');
  }
}

function assertIsDeclaration(
  node: Node | null | undefined,
): asserts node is Declaration | null | undefined {
  if (node != null) {
    invariant(
      node.kind === 'ClassDeclaration' || node.kind === 'FunctionDeclaration',
    );
  }
}

export function isExpression(node: Node): node is Expression {
  return (
    node.kind === 'BinaryExpression' ||
    node.kind === 'CallExpression' ||
    node.kind === 'ClassExpression' ||
    node.kind === 'FunctionExpression' ||
    node.kind === 'Identifier' ||
    node.kind === 'IndexExpression' ||
    node.kind === 'MemberExpression' ||
    node.kind === 'NewExpression' ||
    node.kind === 'ArrayValue' ||
    node.kind === 'BooleanValue' ||
    node.kind === 'NullValue' ||
    node.kind === 'NumberValue' ||
    node.kind === 'ObjectValue' ||
    node.kind === 'StringValue' ||
    node.kind === 'UndefinedValue' ||
    node.kind === 'RawExpression' ||
    node.kind === 'TernaryExpression' ||
    node.kind === 'BitwiseNotExpression' ||
    node.kind === 'DecrementExpression' ||
    node.kind === 'IncrementExpression' ||
    node.kind === 'LogicalNotExpression' ||
    node.kind === 'YieldExpression'
  );
}

function assertIsExpression(
  node: Node | null | undefined,
): asserts node is Expression {
  if (node != null) {
    invariant(isExpression(node));
  }
}

// "Id" here is a shorthand for things that can appear on the LHS of assignment
// statements (ie. of Identifier or Pattern types).
export function assertIsId(
  node: Node | null | undefined,
): asserts node is Identifier | Pattern {
  if (node != null) {
    invariant(
      node.kind === 'ArrayPattern' ||
        node.kind === 'Identifier' ||
        node.kind === 'ObjectPattern',
    );
  }
}

export function assertIsStatement(
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
        node.kind === 'ExportNamedDeclaration' ||
        node.kind === 'ExpressionStatement' ||
        node.kind === 'FunctionDeclaration' ||
        node.kind === 'IfStatement' ||
        node.kind === 'ImportStatement' ||
        node.kind === 'LabelStatement' ||
        node.kind === 'LineComment' ||
        node.kind === 'RawStatement' ||
        node.kind === 'ReturnStatement' ||
        node.kind === 'SwitchStatement' ||
        node.kind === 'ThrowStatement' ||
        node.kind === 'WhileStatement',
    );
  }
}
