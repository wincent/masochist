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

export default class RegExpVisitor<T> {
  #node: Node;

  constructor(node: Node) {
    this.#node = node;
  }

  visit(state: T) {
    this.visitNode(this.#node, state);
  }

  visitAlternate(node: Alternate, state: T) {
    for (const child of node.children) {
      this.visitNode(child, state);
    }
  }

  visitAnything(_node: Anything, _state: T) {}

  visitAtom(_node: Atom, _state: T) {}

  visitCharacterClass(node: CharacterClass, state: T) {
    for (const child of node.children) {
      this.visitNode(child, state);
    }
  }

  visitNode(node: Node, state: T) {
    switch (node.kind) {
      case 'Alternate':
        this.visitAlternate(node, state);
        break;
      case 'Anything':
        this.visitAnything(node, state);
        break;
      case 'Atom':
        this.visitAtom(node, state);
        break;
      case 'CharacterClass':
        this.visitCharacterClass(node, state);
        break;
      case 'Range':
        this.visitRange(node, state);
        break;
      case 'Repeat':
        this.visitRepeat(node, state);
        break;
      case 'Sequence':
        this.visitSequence(node, state);
        break;
    }
  }

  visitRange(_node: Range, _state: T) {}

  visitRepeat(node: Repeat, state: T) {
    this.visitNode(node.child, state);
  }

  visitSequence(node: Sequence, state: T) {
    for (const child of node.children) {
      this.visitNode(child, state);
    }
  }
}
