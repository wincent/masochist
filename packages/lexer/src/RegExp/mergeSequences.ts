import type {Node} from './RegExpParser';

// (foo)(bar) -> (foobar)
export default function mergeSequences(node: Node): Node {
  visit(node);
  return node;
}

// Doing this with simple mutation for now; later may decide to adopt an
// immutable style.
function mergeChildren(children: Array<Node>) {
  let previous: Node | null = null;

  // Walk backwards so we can mutate as we go without breaking indices.
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i];
    visit(child);
    if (child.kind === 'Sequence' && previous?.kind === 'Sequence') {
      // Merge two sequences together.
      children.splice(i, 2, ...child.children, ...previous.children);
    } else if (child.kind === 'Sequence' && previous) {
      // Merge suffix following a sequence with the sequence.
      children.splice(i, 2, ...child.children, previous);
    } else if (previous?.kind === 'Sequence') {
      // Merge prefix followed by a sequence with the sequence.
      children.splice(i, 2, child, ...previous.children);
    }
    previous = child;
  }
}

function visit(node: Node) {
  switch (node.kind) {
    case 'Alternate':
      for (const child of node.children) {
        visit(child);
      }
      break;
    case 'Repeat':
      visit(node.child);
      break;
    case 'Sequence':
      mergeChildren(node.children);
      break;
  }
}
