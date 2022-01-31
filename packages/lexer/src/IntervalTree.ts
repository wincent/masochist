import {invariant} from '@masochist/common';

import RedBlackTree from './RedBlackTree';

import type {Comparable, Node} from './RedBlackTree';

export class Interval<Tk extends Comparable<Tk>> {
  /** Low value at the beginning of the range (inclusive). */
  low: Tk;

  /** High value at the end of the range (inclusive). */
  high: Tk;

  /** Highest high value in this subtree. */
  maximum: Tk;

  constructor(low: Tk, high: Tk, maximum?: Tk) {
    invariant(low.compareTo(high) <= 0, '`low` must be <= `high`');
    invariant(
      maximum === undefined || maximum.compareTo(high) >= 0,
      '`maximum` must be >= `high`',
    );
    this.low = low;
    this.high = high;
    this.maximum = maximum ?? high;
  }

  compareTo(that: Interval<Tk>) {
    return this.low.compareTo(that.low);
  }

  toString() {
    if (this.low.compareTo(this.high)) {
      return `[${this.low.toString()},${this.high.toString()}]:${this.maximum.toString()}`;
    } else {
      return `[${this.low.toString()}]:${this.maximum.toString()}`;
    }
  }
}

export default class IntervalTree<
  Tk extends Comparable<Tk>,
  Tv,
> extends RedBlackTree<Interval<Tk>, Tv> {
  /**
   * Returns all key/value pairs overlapping with the supplied `interval`.
   */
  search(interval: Interval<Tk>): Array<[Interval<Tk>, Tv]> {
    return this._search(interval, this._root, []);
  }

  /**
   * Analogous to `Math.max`, but doesn't return `-Infinity` when called with no
   * arguments (throws an error instead).
   *
   * Note: named `_maxOf()` and not `_max()` in order to avoid clash with
   * standard RedBlackTree method of same name.
   */
  _maxOf(keys: Array<Tk | undefined>): Tk {
    // Would be nice if TS could refine the type here with a simple
    // `keys.filter(Boolean)`, but it can't, so we give it a little help.
    const filtered = keys.filter((key: Tk | undefined): key is Tk => !!key);
    invariant(filtered.length);

    let maximum = filtered[0];
    for (let i = 1; i < filtered.length; i++) {
      const other = filtered[i];
      if (maximum.compareTo(other) < 0) {
        maximum = other;
      }
    }
    return maximum;
  }

  _put(
    h: Node<Interval<Tk>, Tv> | null,
    key: Interval<Tk>,
    value: Tv,
  ): Node<Interval<Tk>, Tv> {
    const root = super._put(h, key, value);

    root.key.maximum = this._maxOf([
      root.key.high,
      root.left?.key.maximum,
      root.right?.key.maximum,
    ]);

    return root;
  }

  _rebalance(h: Node<Interval<Tk>, Tv>) {
    const node = super._rebalance(h);

    node.key.maximum = this._maxOf([
      node.key.high,
      node.left?.key.maximum,
      node.right?.key.maximum,
    ]);

    return node;
  }

  _rotateLeft(h: Node<Interval<Tk>, Tv>): Node<Interval<Tk>, Tv> {
    const newRoot = super._rotateLeft(h);
    const oldRoot = newRoot.left!;

    newRoot.key.maximum = oldRoot.key.maximum;
    oldRoot.key.maximum = this._maxOf([
      oldRoot.key.high,
      oldRoot.left?.key.maximum,
      oldRoot.right?.key.maximum,
    ]);

    return newRoot;
  }

  _rotateRight(h: Node<Interval<Tk>, Tv>) {
    const newRoot = super._rotateRight(h);
    const oldRoot = newRoot.right!;

    newRoot.key.maximum = oldRoot.key.maximum;
    oldRoot.key.maximum = this._maxOf([
      oldRoot.key.high,
      oldRoot.left?.key.maximum,
      oldRoot.right?.key.maximum,
    ]);

    return newRoot;
  }

  _search(
    interval: Interval<Tk>,
    h: Node<Interval<Tk>, Tv> | null,
    results: Array<[Interval<Tk>, Tv]>,
  ): Array<[Interval<Tk>, Tv]> {
    if (h) {
      if (interval.low.compareTo(h.key.maximum) > 0) {
        // Biggest value in `h` is too small to overlap with `interval`.
        return results;
      }

      // Search left children.
      this._search(interval, h.left, results);

      // Check `h` itself for overlap.
      if (
        h.key.low.compareTo(interval.high) <= 0 &&
        h.key.high.compareTo(interval.low) >= 0
      ) {
        results.push([h.key, h.value]);
      }

      if (interval.high.compareTo(h.key.low) < 0) {
        // Interval is too small to overlap with children on right.
        return results;
      }

      // Search right children.
      this._search(interval, h.right, results);
    }
    return results;
  }
}
