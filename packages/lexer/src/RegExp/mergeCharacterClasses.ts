import {invariant} from '@masochist/common';

import RegExpTransformer from './RegExpTransformer';
import assertIsAtomOrRangeArray from './assertIsAtomOrRangeArray';
import normalizeCharacterClass from './normalizeCharacterClass';

import type {
  Alternate,
  Atom,
  CharacterClass,
  Node,
  Range,
} from './RegExpParser';

type State = unknown;

class CharacterClassMergeTransformer extends RegExpTransformer<State> {
  visitAlternate(node: Alternate, state: State): Node | undefined {
    let children = this.visitChildren(node.children, state);
    if (!children || !children.length) {
      return;
    }

    const characterClasses: Array<CharacterClass> = [];
    const others: Array<Node> = [];
    for (const child of children) {
      if (child.kind === 'CharacterClass') {
        if (child.negated) {
          throw new Error('checkNegated(): unexpected negated CharacterClass');
        }
        characterClasses.push(child);
      } else {
        others.push(child);
      }
    }
    if (characterClasses.length > 1) {
      const characterClass: CharacterClass = {
        kind: 'CharacterClass',
        children: characterClasses.reduce((acc: Array<Atom | Range>, cc) => {
          assertIsAtomOrRangeArray(cc.children);
          acc.push(...cc.children);
          return acc;
        }, []),
        negated: false,
      };
      children = others.concat([characterClass]);
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

// [abc]|[xyz] -> [abcxyz]
export default function mergeCharacterClasses(node: Node): Node {
  const transformed = new CharacterClassMergeTransformer(node).visit(undefined);
  invariant(transformed);
  return transformed;
}
