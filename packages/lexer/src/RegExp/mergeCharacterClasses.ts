import normalizeCharacterClass from './normalizeCharacterClass';
import type {CharacterClass, Node} from './RegExpParser';

// [abc]|[xyz] -> [abcxyz]
export default function mergeCharacterClasses(node: Node): Node {
  visit(node);
  return node;
}

// Doing this with simple mutation for now; later may decide to adopt an
// immutable style.
function mergeChildren(children: Array<Node>) {
  let previous: Node | null = null;
  let merged = false;

  // Walk backwards so we can mutate as we go without breaking indices.
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i];
    visit(child);
    if (
      child.kind === 'CharacterClass' &&
      previous?.kind === 'CharacterClass'
    ) {
      // Merge two sequences together.
      checkNegated(child);
      checkNegated(previous);
      children.splice(i, 2, ...child.children, ...previous.children);
      merged = true;
    } else if (
      child.kind === 'CharacterClass' &&
      (previous?.kind === 'Atom' || previous?.kind === 'Range')
    ) {
      // Merge suffix following a character class into the character class.
      checkNegated(child);
      children.splice(i, 2, ...child.children, previous);
      merged = true;
    } else if (
      previous?.kind === 'CharacterClass' &&
      (child.kind === 'Atom' || child.kind === 'Range')
    ) {
      // Merge prefix followed by a character class into the character class.
      checkNegated(previous);
      children.splice(i, 2, child, ...previous.children);
      merged = true;
    }
    previous = child;
  }

  if (merged) {
    // Hack: construct a temporary class just for the purposes of normalizing
    // the children, then use the result to overwrite the old children.
    const normalized = normalizeCharacterClass({
      kind: 'CharacterClass',
      children,
      negated: false,
    });
    children.splice(0, children.length, ...normalized.children);
  }
}

function checkNegated({negated}: CharacterClass) {
  if (negated) {
    throw new Error('checkNegated(): unexpected negated CharacterClass');
  }
}

function visit(node: Node) {
  switch (node.kind) {
    case 'Alternate':
      mergeChildren(node.children);
      if (node.children.length === 1) {
        // TODO: unwrap if its the only thing left
      }
      break;
    case 'Repeat':
      visit(node.child);
      break;
    case 'Sequence':
      for (const child of node.children) {
        visit(child);
      }
      break;
  }
}
