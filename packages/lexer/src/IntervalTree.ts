import RedBlackTree from './RedBlackTree';

import type {Transition} from './NFA/NFA';

// Each node has a set of associated target states.
// TODO: consider using actual NFA here instead of just number, because the code
// that will be making use of the tree is dealing with NFA instances, not
// TransitionTables.
type IntervalPayload = Set<number>;

export class IntervalNode {
  /** Low value at the beginning of the range (inclusive). */
  low: number;

  /** High value at the end of the range (exclusive). */
  high: number;

  /** Highest high value in this subtree. */
  maximum: number;

  /**
   * Note that we don't work with epsilon transitions (ie. no `null`
   * transitions); we expect those to be removed before using the `IntervalTree`
   * in `NFAToDFA()`.
   */
  constructor(transition: NonNullable<Transition>) {
    if (transition.kind === 'Anything') {
      this.low = 0x0000;
      this.high = 0xffff + 1;
    } else if (transition.kind === 'Atom') {
      this.low = transition.value.charCodeAt(0);
      this.high = this.low + 1;
    } else if (transition.kind === 'Range') {
      this.low = transition.from.charCodeAt(0);
      this.high = transition.to.charCodeAt(0) + 1;
    } else {
      throw new Error('IntervalNode: Unreachable');
    }
    this.maximum = this.high;
  }

  compareTo(that: IntervalNode) {
    if (this.low < that.low) {
      return -1;
    } else if (this.low > that.low) {
      return 1;
    } else {
      return 0;
    }
  }
}

export default class IntervalTree extends RedBlackTree<
  IntervalNode,
  IntervalPayload
> {}
