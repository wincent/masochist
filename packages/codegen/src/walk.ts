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
  Consequent,
  ContinueStatement,
  Declaration,
  DecrementExpression,
  DocComment,
  EmptySlot,
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
  NonNullExpression,
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
  VariableDeclaration,
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

  'ArrayValue'?: (value: ArrayValue) => Expression | null | undefined;
  ['ArrayValue:exit']?: (value: ArrayValue) => Expression | null | undefined;

  'AssignmentStatement'?: (
    assignment: AssignmentStatement,
  ) => Statement | null | undefined;
  ['AssignmentStatement:exit']?: (
    assignment: AssignmentStatement,
  ) => Statement | null | undefined;

  'CallExpression'?: (
    expression: CallExpression,
  ) => Expression | null | undefined;
  ['CallExpression:exit']?: (
    expression: CallExpression,
  ) => Expression | null | undefined;

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

  'Consequent'?: (
    consequent: Consequent,
  ) => Consequent | null | undefined;
  ['Consequent:exit']?: (
    consequent: Consequent,
  ) => Consequent | null | undefined;

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

  'ExpressionStatement'?: (
    statement: ExpressionStatement,
  ) => Statement | null | undefined;
  ['ExpressionStatement:exit']?: (
    statement: ExpressionStatement,
  ) => Statement | null | undefined;

  'ForStatement'?: (
    statement: ForStatement,
  ) => Statement | null | undefined;
  ['ForStatement:exit']?: (
    statement: ForStatement,
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

  'IfStatement'?: (
    statement: IfStatement,
  ) => Statement | null | undefined;
  ['IfStatement:exit']?: (
    statement: IfStatement,
  ) => Statement | null | undefined;

  'ImportStatement'?: (
    statement: ImportStatement,
  ) => Statement | null | undefined;
  ['ImportStatement:exit']?: (
    statement: ImportStatement,
  ) => Statement | null | undefined;

  'Identifier'?: (
    identifier: Identifier,
  ) => Identifier | null | undefined;
  ['Identifier:exit']?: (
    identifier: Identifier,
  ) => Identifier | null | undefined;

  'MethodDefinition'?: (
    definition: MethodDefinition,
  ) => MethodDefinition | null | undefined;
  ['MethodDefinition:exit']?: (
    definition: MethodDefinition,
  ) => MethodDefinition | null | undefined;

  'NonNullExpression'?: (
    expression: NonNullExpression,
  ) => Expression | null | undefined;
  ['NonNullExpression:exit']?: (
    expression: NonNullExpression,
  ) => Expression | null | undefined;

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

  'Type'?: (type: Type) => Type | null | undefined;
  ['Type:exit']?: (
    type: Type,
  ) => Type | null | undefined;

  'WhileStatement'?: (
    statement: WhileStatement,
  ) => Statement | null | undefined;
  ['WhileStatement:exit']?: (
    statement: WhileStatement,
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
  } else if (node.kind === 'Consequent') {
    return walkConsequent(node, visitor);
  } else if (node.kind === 'ContinueStatement') {
    return walkContinueStatement(node, visitor);
  } else if (node.kind === 'DecrementExpression') {
    return walkDecrementExpression(node, visitor);
  } else if (node.kind === 'DocComment') {
    return walkDocComment(node, visitor);
  } else if (node.kind === 'EmptySlot') {
    return walkEmptySlot(node, visitor);
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
  } else if (node.kind === 'NonNullExpression') {
    return walkNonNullExpression(node, visitor);
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
    // Using a single implementation for all `Type` nodes.
    return walkType(node, visitor);
  } else if (node.kind === 'UndefinedValue') {
    return walkUndefinedValue(node, visitor);
  } else if (node.kind === 'VariableDeclaration') {
    return walkVariableDeclaration(node, visitor);
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

  // Children.
  if (newArgument.type) {
    const newType = walk(newArgument.type, visitor);
    if (newType === null) {
      newArgument = {
        ...newArgument,
        type: undefined,
      };
      changed = true;
    } else if (newType !== undefined) {
      assertIsType(newType);
      newArgument = {
        ...newArgument,
        type: newType,
      };
      changed = true;
    }
  }

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
  value: ArrayValue,
  visitor: Visitor,
): Expression | SpreadElement | EmptySlot | null | undefined {
  // Pre-order
  let changed = false;
  let newValue = visitor.ArrayValue?.(value);
  if (newValue === null) {
    return null;
  } else if (newValue === undefined) {
    newValue = value;
  } else if (newValue.kind !== 'ArrayValue') {
    // Won't do post-order if node kind changes in pre-order; instead, walk
    // replacement.
    const replacement = walk(newValue, visitor);
    assertIsExpression(replacement);
    if (replacement === undefined) {
      return newValue;
    } else {
      return replacement;
    }
  } else {
    changed = true;
  }

  // Children.
  const items = mapChildren(newValue.items, (statement) => {
    const node = walk(statement, visitor);
    invariant(
      node == null ||
        isExpression(node) ||
        node.kind === 'EmptySlot' ||
        node.kind === 'SpreadElement',
    );
    return node;
  });
  if (items !== newValue.items) {
    newValue = {
      ...newValue,
      items,
    };
    changed = true;
  }

  // Post-order.
  const finalValue = visitor['ArrayValue:exit']?.(newValue);
  if (finalValue === null) {
    return null;
  } else if (finalValue === undefined) {
    return changed ? newValue : undefined;
  } else {
    return finalValue;
  }
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
      newStatement = {
        ...newStatement,
        type: undefined,
      };
      changed = true;
    } else if (newChild !== undefined) {
      assertIsType(newChild);
      newStatement = {
        ...newStatement,
        type: newChild,
      };
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
  expression: CallExpression,
  visitor: Visitor,
): Expression | null | undefined {
  // Pre-order
  let changed = false;
  let newExpression = visitor.CallExpression?.(expression);
  if (newExpression === null) {
    return null;
  } else if (newExpression === undefined) {
    newExpression = expression;
  } else if (newExpression.kind !== 'CallExpression') {
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
  const newCallee = walk(newExpression.callee, visitor);
  if (newCallee === null) {
    return null;
  } else if (newCallee !== undefined) {
    assertIsExpression(newCallee);
    newExpression = {
      ...newExpression,
      callee: newCallee,
    };
    changed = true;
  }
  const newArguments = mapChildren(newExpression.arguments, (arg) => {
    const node = walk(arg, visitor);
    invariant(
      node == null ||
        isExpression(node) ||
        node.kind === 'SpreadElement',
    );
    return node;
  });
  if (newArguments !== newExpression.arguments) {
    newExpression = {
      ...newExpression,
      arguments: newArguments,
    };
    changed = true;
  }

  // Post-order.
  const finalExpression = visitor['CallExpression:exit']?.(newExpression);
  if (finalExpression === null) {
    return null;
  } else if (finalExpression === undefined) {
    return changed ? newExpression : undefined;
  } else {
    return finalExpression;
  }
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
        node.kind === 'GetAccessor' ||
        node.kind === 'LineComment' ||
        node.kind === 'MethodDefinition' ||
        node.kind === 'PropertyDeclaration',
      'ClassDeclaration body may only contain DocComment, GetAccessor, LineComment, MethodDefinition, PropertyDeclaration nodes',
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
        node.kind === 'GetAccessor' ||
        node.kind === 'LineComment' ||
        node.kind === 'MethodDefinition' ||
        node.kind === 'PropertyDeclaration',
      'ClassExpression body may only contain DocComment, GetAccessor, LineComment, MethodDefinition, PropertyDeclaration nodes',
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

function walkConsequent(
  consequent: Consequent,
  visitor: Visitor,
): Consequent | null | undefined {
  // Pre-order
  let changed = false;
  let newConsequent = visitor.Consequent?.(consequent);
  if (newConsequent === null) {
    return null;
  } else if (newConsequent === undefined) {
    newConsequent = consequent;
  } else {
    assertIsConsequent(newConsequent);
    changed = true;
  }

  // Children.
  const newCondition = walk(newConsequent.condition, visitor);
  if (newCondition === null) {
    return null;
  } else if (newCondition !== undefined) {
    assertIsExpression(newCondition);
    newConsequent = {
      ...newConsequent,
      condition: newCondition,
    };
    changed = true;
  }
  const block = mapChildren(newConsequent.block, (statement) => {
    const node = walk(statement, visitor);
    assertIsStatement(node);
    return node;
  });
  if (block !== newConsequent.block) {
    newConsequent = {
      ...newConsequent,
      block,
    };
    changed = true;
  }

  // Post-order.
  const finalConsequent = visitor['Consequent:exit']?.(newConsequent);
  if (finalConsequent === null) {
    return null;
  } else if (finalConsequent === undefined) {
    return changed ? newConsequent : undefined;
  } else {
    return finalConsequent;
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

// Implementing this may be awkward because EmptySlot can appear in both
// ArrayValue and ArrayPattern contexts; in the former, we accept any of
// Expression or SpreadElement, but in the latter we accept only Identifier.
// That is, what should the return type for this method be?
function walkEmptySlot(
  _slot: EmptySlot,
  _visitor: Visitor,
): EmptySlot | null | undefined {
  return undefined; // Unimplemented.
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
  statement: ExpressionStatement,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order
  let changed = false;
  let newStatement = visitor.ExpressionStatement?.(statement);
  if (newStatement === null) {
    return null;
  } else if (newStatement === undefined) {
    newStatement = statement;
  } else if (newStatement.kind !== 'ExpressionStatement') {
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
  const newExpression = walk(newStatement.expression, visitor);
  if (newExpression === null) {
    return null;
  } else if (newExpression !== undefined) {
    assertIsExpression(newExpression);
    newStatement = {
      ...newStatement,
      expression: newExpression,
    };
    changed = true;
  }

  // Post-order.
  const finalStatement = visitor['ExpressionStatement:exit']?.(newStatement);
  if (finalStatement === null) {
    return null;
  } else if (finalStatement === undefined) {
    return changed ? newStatement : undefined;
  } else {
    return finalStatement;
  }
}

function walkForStatement(
  statement: ForStatement,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order
  let changed = false;
  let newStatement = visitor.ForStatement?.(statement);
  if (newStatement === null) {
    return null;
  } else if (newStatement === undefined) {
    newStatement = statement;
  } else if (newStatement.kind !== 'ForStatement') {
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
  const newInitializer = walk(newStatement.initializer, visitor);
  if (newInitializer === null) {
    // TODO: in future, `null` will mean remove (once initializer is optional)
    return null;
  } else if (newInitializer !== undefined) {
    invariant(newInitializer.kind === 'VariableDeclaration');
    newStatement = {
      ...newStatement,
      initializer: newInitializer,
    };
    changed = true;
  }
  const newCondition = walk(newStatement.condition, visitor);
  if (newCondition === null) {
    // TODO: in future, `null` will mean remove (once condition is optional)
    return null;
  } else if (newCondition !== undefined) {
    assertIsExpression(newCondition);
    newStatement = {
      ...newStatement,
      condition: newCondition,
    };
    changed = true;
  }
  const newUpdate = walk(newStatement.update, visitor);
  if (newUpdate === null) {
    // TODO: in future, `null` will mean remove (once update is optional)
    return null;
  } else if (newUpdate !== undefined) {
    assertIsExpression(newUpdate);
    newStatement = {
      ...newStatement,
      update: newUpdate,
    };
    changed = true;
  }
  const block = mapChildren(newStatement.block, (statement) => {
    const node = walk(statement, visitor);
    assertIsStatement(node);
    return node;
  });
  if (block !== newStatement.block) {
    newStatement = {
      ...newStatement,
      block,
    };
    changed = true;
  }

  // Post-order.
  const finalStatement = visitor['ForStatement:exit']?.(
    newStatement,
  );
  if (finalStatement === null) {
    return null;
  } else if (finalStatement === undefined) {
    return changed ? newStatement : undefined;
  } else {
    return finalStatement;
  }
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
  if (newDeclaration.type) {
    const newType = walk(newDeclaration.type, visitor);
    if (newType === null) {
      newDeclaration = {
        ...newDeclaration,
        type: undefined,
      };
      changed = true;
    } else if (newType !== undefined) {
      assertIsType(newType);
      newDeclaration = {
        ...newDeclaration,
        type: newType,
      };
      changed = true;
    }
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
  if (newExpression.type) {
    const newType = walk(newExpression.type, visitor);
    if (newType === null) {
      newExpression = {
        ...newExpression,
        type: undefined,
      };
      changed = true;
    } else if (newType !== undefined) {
      assertIsType(newType);
      newExpression = {
        ...newExpression,
        type: newType,
      };
      changed = true;
    }
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

// Note about the return type: Identifiers are used in several different
// contexts, so it is hard to permit a broader return type that Identifier here.
function walkIdentifier(
  identifier: Identifier,
  visitor: Visitor,
): Identifier | null | undefined {
  // Pre-order.
  let changed = false;
  let newIdentifier = visitor.Identifier?.(identifier);
  if (newIdentifier === null) {
    return null;
  } else if (newIdentifier === undefined) {
    newIdentifier = identifier;
  } else {
    changed = true;
  }

  // Children.
  if (newIdentifier.cast) {
    const newType = walk(newIdentifier.cast, visitor);
    if (newType === null) {
      newIdentifier = {
        ...newIdentifier,
        cast: undefined,
      };
      changed = true;
    } else if (newType !== undefined) {
      assertIsType(newType);
      newIdentifier = {
        ...newIdentifier,
        cast: newType,
      };
      changed = true;
    }
  }

  // Post-order.
  const finalIdentifier = visitor['Identifier:exit']?.(newIdentifier);
  if (finalIdentifier === null) {
    return null;
  } else if (finalIdentifier === undefined) {
    return changed ? newIdentifier : undefined;
  } else {
    return finalIdentifier;
  }
}

function walkIfStatement(
  statement: IfStatement,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order
  let changed = false;
  let newStatement = visitor.IfStatement?.(statement);
  if (newStatement === null) {
    return null;
  } else if (newStatement === undefined) {
    newStatement = statement;
  } else if (newStatement.kind !== 'IfStatement') {
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
  const consequents = mapChildren(newStatement.consequents, (consequent) => {
    const node = walk(consequent, visitor);
    assertIsConsequent(node);
    return node;
  });
  if (consequents !== newStatement.consequents) {
    newStatement = {
      ...newStatement,
      consequents,
    };
    changed = true;
  }
  if (newStatement.alternate) {
    const alternate = mapChildren(newStatement.alternate, (statement) => {
      const node = walk(statement, visitor);
      assertIsStatement(node);
      return node;
    });
    if (alternate !== newStatement.alternate) {
      newStatement = {
        ...newStatement,
        alternate,
      };
      changed = true;
    }
  }

  // Post-order.
  const finalStatement = visitor['IfStatement:exit']?.(
    newStatement,
  );
  if (finalStatement === null) {
    return null;
  } else if (finalStatement === undefined) {
    return changed ? newStatement : undefined;
  } else {
    return finalStatement;
  }
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

function walkNonNullExpression(
  expression: NonNullExpression,
  visitor: Visitor,
): Expression | null | undefined {
  // Pre-order
  let changed = false;
  let newExpression = visitor.NonNullExpression?.(expression);
  if (newExpression === null) {
    return null;
  } else if (newExpression === undefined) {
    newExpression = expression;
  } else if (newExpression.kind !== 'NonNullExpression') {
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
  const newChild = walk(newExpression.expression, visitor);
  if (newChild === null) {
    return null;
  } else if (newChild !== undefined) {
    assertIsExpression(newChild);
    newExpression.expression = newChild;
    changed = true;
  }

  // Post-order.
  const finalExpression = visitor['NonNullExpression:exit']?.(newExpression);
  if (finalExpression === null) {
    return null;
  } else if (finalExpression === undefined) {
    return changed ? newExpression : undefined;
  } else {
    return finalExpression;
  }
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

  // Children.
  if (newDeclaration.type) {
    const newType = walk(newDeclaration.type, visitor);
    if (newType !== undefined) {
      assertIsType(newType);
      newDeclaration = {
        ...newDeclaration,
        type: newType,
      };
      changed = true;
    }
  }

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
  type: Type,
  visitor: Visitor,
): Type | null | undefined {
  // Pre-order.
  let changed = false;
  let newType = visitor.Type?.(type);
  if (newType === null) {
    return null;
  } else if (newType === undefined) {
    newType = type;
  } else {
    changed = true;
  }

  // This is a leaf node, so no children to visit.
  // TODO: only for now... eventually we will visit structure of Type.

  // Post-order.
  const finalType = visitor['Type:exit']?.(newType);
  if (finalType === null) {
    return null;
  } else if (finalType === undefined) {
    return changed ? newType : undefined;
  } else {
    return finalType;
  }
}

function walkUndefinedValue(
  _value: UndefinedValue,
  _visitor: Visitor,
): Expression | null | undefined {
  return undefined; // Unimplemented.
}

function walkVariableDeclaration(
  _declaration: VariableDeclaration,
  _visitor: Visitor,
): VariableDeclaration | null | undefined {
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
  statement: WhileStatement,
  visitor: Visitor,
): Statement | null | undefined {
  // Pre-order
  let changed = false;
  let newStatement = visitor.WhileStatement?.(statement);
  if (newStatement === null) {
    return null;
  } else if (newStatement === undefined) {
    newStatement = statement;
  } else if (newStatement.kind !== 'WhileStatement') {
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
  const newCondition = walk(newStatement.condition, visitor);
  if (newCondition === null) {
    return null;
  } else if (newCondition !== undefined) {
    assertIsExpression(newCondition);
    newStatement = {
      ...newStatement,
      condition: newCondition,
    };
    changed = true;
  }
  const block = mapChildren(newStatement.block, (statement) => {
    const node = walk(statement, visitor);
    assertIsStatement(node);
    return node;
  });
  if (block !== newStatement.block) {
    newStatement = {
      ...newStatement,
      block,
    };
    changed = true;
  }

  // Post-order.
  const finalStatement = visitor['WhileStatement:exit']?.(newStatement);
  if (finalStatement === null) {
    return null;
  } else if (finalStatement === undefined) {
    return changed ? newStatement : undefined;
  } else {
    return finalStatement;
  }
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

function assertIsConsequent(
  node: Node | null | undefined,
): asserts node is Consequent | null | undefined {
  if (node != null) {
    invariant(node.kind === 'Consequent');
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
    node.kind === 'NonNullExpression' ||
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
        node.kind === 'ForStatement' ||
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

function assertIsType(node: Node | null | undefined): asserts node is Type {
  invariant(
    node && (
      node.kind === 'GenericType' ||
      node.kind === 'NamedType' ||
      node.kind === 'TupleType' ||
      node.kind === 'UnionType'
    ),
  );
}
