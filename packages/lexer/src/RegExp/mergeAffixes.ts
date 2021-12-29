import RegExpTransformer from './RegExpTransformer';
import invariant from '../invariant';

import type {Alternate, Node} from './RegExpParser';

type State = unknown;

class AffixMergeTransformer extends RegExpTransformer<State> {
  // TODO, implement, maybe...
  // (not sure if it is worth it because no human should write the kind of
  // regexp that this optimizer would fix)
}

// foobaz|foobar -> foo(baz|bar)
// foo|foobar -> foo(bar)?
//               node that (bar|) gets simplified to (bar)?
export default function mergeAffixes(node: Node): Node {
  const transformed = new AffixMergeTransformer(node).visit(undefined);
  invariant(transformed);
  return transformed;
}
