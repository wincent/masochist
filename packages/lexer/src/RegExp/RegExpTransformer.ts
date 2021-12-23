import assertIsAtomOrRangeArray from './assertIsAtomOrRangeArray';

import type {
  Alternate,
  Anything,
  Atom,
  CharacterClass,
  Node,
  Range,
  Repeat,
  Sequence,
} from './RegExpParser';

export default class RegExpTransformer<T> {
  #node: Node;

  constructor(node: Node) {
    this.#node = node;
  }

  // TODO: make all these methods return stuff
  // if return `null`/`undefined`, delete the node
  // if return something new, replace the node
  // if return same thing, leave node untouched

  visit(state: T): Node | undefined {
    return this.visitNode(this.#node, state);
  }

  visitAlternate(node: Alternate, state: T): Node | undefined {
    const newChildren = this.visitChildren(node.children, state);
    if (newChildren === node.children) {
      return node;
    } else if (newChildren) {
      return {
        ...node,
        children: newChildren,
      };
    } else {
      return;
    }
  }

  visitAnything(node: Anything, _state: T): Node | undefined {
    return node;
  }

  visitAtom(node: Atom, _state: T): Node | undefined {
    return node;
  }

  visitCharacterClass(node: CharacterClass, state: T): Node | undefined {
    const newChildren = this.visitChildren(node.children, state);
    if (newChildren === node.children) {
      return node;
    } else if (newChildren) {
      assertIsAtomOrRangeArray(newChildren);
      return {
        ...node,
        children: newChildren,
      };
    } else {
      return;
    }
  }

  visitChildren(children: Array<Node>, state: T): Array<Node> | undefined {
    let newChildren: Array<Node> | undefined;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const newNode = this.visitNode(child, state);
      if (!newNode) {
        // Drop node.
        newChildren = newChildren ? newChildren : children.slice(0, i);
      } else if (newNode !== child) {
        // Replace node.
        newChildren = newChildren || children.slice(0, i);
        newChildren.push(newNode);
      } else if (newChildren) {
        // Keep node.
        newChildren.push(newNode);
      }
    }
    if (newChildren) {
      if (newChildren.length) {
        return newChildren;
      } else {
        return;
      }
    } else {
      return children;
    }
  }

  visitNode(node: Node, state: T): Node | undefined {
    switch (node.kind) {
      case 'Alternate':
        return this.visitAlternate(node, state);
      case 'Anything':
        return this.visitAnything(node, state);
      case 'Atom':
        return this.visitAtom(node, state);
      case 'CharacterClass':
        return this.visitCharacterClass(node, state);
      case 'Range':
        return this.visitRange(node, state);
      case 'Repeat':
        return this.visitRepeat(node, state);
      case 'Sequence':
        return this.visitSequence(node, state);
    }
  }

  visitRange(node: Range, _state: T): Node | undefined {
    return node;
  }

  visitRepeat(node: Repeat, state: T): Node | undefined {
    const newNode = this.visitNode(node.child, state);
    if (!newNode) {
      // We have to drop the whole repeat.
      return;
    } else if (newNode !== node.child) {
      // Replace it.
      return {
        ...node,
        child: newNode,
      };
    } else {
      // No changes.
      return node;
    }
  }

  visitSequence(node: Sequence, state: T): Node | undefined {
    const newChildren = this.visitChildren(node.children, state);
    if (newChildren === node.children) {
      return node;
    } else if (newChildren) {
      return {
        ...node,
        children: newChildren,
      };
    } else {
      return;
    }
  }
}
