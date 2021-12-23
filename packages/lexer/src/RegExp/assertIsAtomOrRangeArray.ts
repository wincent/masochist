import type {Atom, Node, Range} from './RegExpParser';

export default function assertIsAtomOrRangeArray(
  nodes: Array<Node>,
): asserts nodes is Array<Atom | Range> {
  for (const {kind} of nodes) {
    if (kind !== 'Atom' && kind !== 'Range') {
      throw new Error(`assertIsAtomOrRangeArray(): Unexpected ${kind}`);
    }
  }
}
