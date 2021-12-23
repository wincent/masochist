import RegExpTransformer from './RegExpTransformer';
import normalizeCharacterClass from './normalizeCharacterClass';
import invariant from '../invariant';

import type {Alternate, CharacterClass, Node} from './RegExpParser';

type State = unknown;

class CharacterClassMergeTransformer extends RegExpTransformer<State> {
  visitAlternate(node: Alternate, state: State): Node | undefined {
    let children = this.visitChildren(node.children, state);
    if (!children || !children.length) {
      return;
    }

    let previous: Node | null = null;

    // Walk backwards so we can mutate as we go without breaking indices.
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if (
        child.kind === 'CharacterClass' &&
        previous?.kind === 'CharacterClass'
      ) {
        // Merge two sequences together.
        checkNegated(child);
        checkNegated(previous);
        children = children === node.children ? children.slice() : children;
        children.splice(i, 2, {
          kind: 'CharacterClass',
          children: [...child.children, ...previous.children],
          negated: false,
        });
      } else if (
        child.kind === 'CharacterClass' &&
        (previous?.kind === 'Atom' || previous?.kind === 'Range')
      ) {
        // Merge suffix following a character class into the character class.
        checkNegated(child);
        children = children === node.children ? children.slice() : children;
        children.splice(i, 2, {
          kind: 'CharacterClass',
          children: [...child.children, previous],
          negated: false,
        });
      } else if (
        previous?.kind === 'CharacterClass' &&
        (child.kind === 'Atom' || child.kind === 'Range')
      ) {
        // Merge prefix followed by a character class into the character class.
        checkNegated(previous);
        children = children === node.children ? children.slice() : children;
        children.splice(i, 2, {
          kind: 'CharacterClass',
          children: [child, ...previous.children],
          negated: false,
        });
      }
      previous = child;
    }

    if (children !== node.children) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.kind === 'CharacterClass') {
          children[i] = normalizeCharacterClass(child);
        }
      }
    }

    if (!children.length) {
      return;
    } else if (children === node.children) {
      return node;
    } else if (children.length === 1) {
      // Unwrap if only one child left.
      return children[0];
    } else {
      return {
        ...node,
        children,
      };
    }
  }
}

function checkNegated({negated}: CharacterClass) {
  if (negated) {
    throw new Error('checkNegated(): unexpected negated CharacterClass');
  }
}

// [abc]|[xyz] -> [abcxyz]
export default function mergeCharacterClasses(node: Node): Node {
  const transformed = new CharacterClassMergeTransformer(node).visit(undefined);
  invariant(transformed);
  return transformed;
}
