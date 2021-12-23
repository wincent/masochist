import RegExpTransformer from './RegExpTransformer';
import invariant from '../invariant';

import type {Node, Sequence} from './RegExpParser';

type State = unknown;

class SequenceMergeTransformer extends RegExpTransformer<State> {
  visitSequence(node: Sequence, state: State): Node | undefined {
    let children = this.visitChildren(node.children, state);
    if (!children || !children.length) {
      return;
    }

    let previous: Node | null = null;

    // Walk backwards so we can mutate as we go without breaking indices.
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if (child.kind === 'Sequence' && previous?.kind === 'Sequence') {
        // Merge two sequences together.
        children = children === node.children ? children.slice() : children;
        children.splice(i, 2, ...child.children, ...previous.children);
      } else if (child.kind === 'Sequence' && previous) {
        // Merge suffix following a sequence with the sequence.
        children = children === node.children ? children.slice() : children;
        children.splice(i, 2, ...child.children, previous);
      } else if (previous?.kind === 'Sequence') {
        // Merge prefix followed by a sequence with the sequence.
        children = children === node.children ? children.slice() : children;
        children.splice(i, 2, child, ...previous.children);
      }
      previous = child;
    }

    return {
      ...node,
      children,
    };
  }
}

// (foo)(bar) -> (foobar)
export default function mergeSequences(node: Node): Node {
  const transformed = new SequenceMergeTransformer(node).visit(undefined);
  invariant(transformed);
  return transformed;
}
