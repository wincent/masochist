import RedBlackTree from './RedBlackTree';

import type {NFA, Transition} from './NFA/NFA';
import type {Node} from './RedBlackTree';

// Each node has a set of associated target states.
type IntervalPayload = Set<NFA>;

export class IntervalNode {
  /** Low value at the beginning of the range (inclusive). */
  low: number;

  /** High value at the end of the range (inclusive). */
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
      this.high = 0xffff;
    } else if (transition.kind === 'Atom') {
      this.low = transition.value.charCodeAt(0);
      this.high = this.low;
    } else if (transition.kind === 'Range') {
      this.low = transition.from.charCodeAt(0);
      this.high = transition.to.charCodeAt(0);
    } else {
      throw new Error('IntervalNode: Unreachable');
    }
    this.maximum = this.high;
  }

  compareTo(that: IntervalNode) {
    return this.low - that.low;
  }
}

export default class IntervalTree extends RedBlackTree<
  IntervalNode,
  IntervalPayload
> {
  _put(
    h: Node<IntervalNode, IntervalPayload> | null,
    key: IntervalNode,
    value: IntervalPayload,
  ) {
    const root = super._put(h, key, value);
    root.key.maximum = Math.max(
      root.key.high,
      root.left?.key?.maximum || 0,
      root.right?.key?.maximum || 0,
    );
    return root;
  }

  _rotateLeft(h: Node<IntervalNode, IntervalPayload>) {
    const newRoot = super._rotateLeft(h);
    const oldRoot = newRoot.left!;

    newRoot.key.maximum = oldRoot.key.maximum;
    oldRoot.key.maximum = Math.max(
      oldRoot.key.high,
      oldRoot.left?.key?.maximum || 0,
      oldRoot.right?.key?.maximum || 0,
    );

    return newRoot;
  }

  _rotateRight(h: Node<IntervalNode, IntervalPayload>) {
    const newRoot = super._rotateRight(h);
    const oldRoot = newRoot.right!;

    newRoot.key.maximum = oldRoot.key.maximum;
    oldRoot.key.maximum = Math.max(
      oldRoot.key.high,
      oldRoot.left?.key?.maximum || 0,
      oldRoot.right?.key?.maximum || 0,
    );

    return newRoot;
  }
}
