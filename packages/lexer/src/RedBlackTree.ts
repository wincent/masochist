import {Queue} from '@masochist/common';
import assert from 'assert';

interface Comparable<T> {
  compareTo(that: T): number;
}

const RED = true;
const BLACK = false;

export type Node<Tk, Tv> = {
  color: boolean;
  key: Tk;
  left: Node<Tk, Tv> | null;
  right: Node<Tk, Tv> | null;
  size: number;
  value: Tv;
};

/**
 * Left-leaning Red-Black BST with keys of type `Tk` and values of type `Tv`.
 */
export default class RedBlackTree<Tk extends Comparable<Tk>, Tv> {
  _root: Node<Tk, Tv> | null;

  constructor() {
    this._root = null;
  }

  get(key: Tk): Tv | null {
    let x = this._root;

    while (x !== null) {
      const comparison = key.compareTo(x.key);

      if (comparison < 0) {
        x = x.left;
      }

      if (comparison > 0) {
        x = x!.right;
      }

      if (comparison === 0) {
        return x!.value;
      }
    }

    return null;
  }

  isEmpty(): boolean {
    return this._root === null;
  }

  keys(): Iterable<Tk> {
    const queue = new Queue<Tk>();

    if (this.isEmpty()) {
      return queue;
    }

    this._keys(this._root!, queue, this.min()!, this.max()!);

    return queue;
  }

  /**
   * Returns the largest key in the tree.
   */
  max(): Tk | null {
    return this.isEmpty() ? null : this._max(this._root!).key;
  }

  /**
   * Returns the smallest key in the tree.
   */
  min(): Tk | null {
    return this.isEmpty() ? null : this._min(this._root!).key;
  }

  put(key: Tk, value: Tv) {
    this._root = this._put(this._root, key, value);
    this._root.color = BLACK;
  }

  get size(): number {
    return this._size(this._root);
  }

  _flipColors(h: Node<Tk, Tv>) {
    assert(!this._isRed(h));
    assert(this._isRed(h.left));
    assert(this._isRed(h.right));
    h.color = RED;
    h.left!.color = BLACK;
    h.right!.color = BLACK;
  }

  _isRed(x: Node<Tk, Tv> | null) {
    return !!(x && x.color === RED);
  }

  _keys(x: Node<Tk, Tv> | null, queue: Queue<Tk>, lo: Tk, hi: Tk) {
    if (x === null) {
      return;
    }
    const lowComparison = lo.compareTo(x.key);
    const highComparison = hi.compareTo(x.key);
    if (lowComparison < 0) {
      this._keys(x.left, queue, lo, hi);
    }
    if (lowComparison <= 0 && highComparison >= 0) {
      queue.enqueue(x.key);
    }
    if (highComparison > 0) {
      this._keys(x.right, queue, lo, hi);
    }
  }

  _max(x: Node<Tk, Tv>): Node<Tk, Tv> {
    return x.right === null ? x : this._max(x.right);
  }

  _min(x: Node<Tk, Tv>): Node<Tk, Tv> {
    return x.left === null ? x : this._min(x.left);
  }

  _put(h: Node<Tk, Tv> | null, key: Tk, value: Tv): Node<Tk, Tv> {
    if (!h) {
      return {
        color: RED,
        key,
        left: null,
        right: null,
        size: 1,
        value,
      };
    }

    // Standard BST insertion.

    const comparison = key.compareTo(h.key);

    if (comparison < 0) {
      h.left = this._put(h.left, key, value);
    } else if (comparison > 0) {
      h.right = this._put(h.right, key, value);
    } else {
      h.value = value;
    }

    // Red-Black rebalancing.

    if (this._isRed(h.right) && !this._isRed(h.left)) {
      h = this._rotateLeft(h); // Lean left.
    }

    if (this._isRed(h.left) && this._isRed(h.left!.left)) {
      h = this._rotateRight(h); // Balance temporary 4-node.
    }

    if (this._isRed(h.left) && this._isRed(h.right)) {
      this._flipColors(h); // Split temporary 4-node.
    }

    h.size = this._size(h.left) + this._size(h.right) + 1;

    return h;
  }

  /**
   * Left rotation of subtree rooted at 10:
   *
   *       10              20        ie. - right child, 20, moves "up" to become
   *      /  \            /  \             new root
   *     5    20  ---->  10  25          - old root, 10,  moves "down" to become
   *         /  \       / \                left child of new root
   *       15    25    5  15             - left child of 20 (15) gets reparented
   *                                       to become right child of old root
   */
  _rotateLeft(h: Node<Tk, Tv>): Node<Tk, Tv> {
    assert(this._isRed(h.right));
    const x = h.right;
    h.right = x!.left;
    x!.left = h;
    x!.color = h.color;
    h.color = RED;
    x!.size = h.size;
    h.size = this._size(h.left) + this._size(h.right) + 1;
    return x!;
  }

  /**
   * Right rotation of subtree rooted at 20:
   *
   *        20             10       ie. - left child, 10, moves "up" to become
   *       /  \           /  \            new root
   *      10  25  ---->  5   20         - old root, 20, moves "down" to become
   *     / \                /  \          right child of new root
   *    5  15              15  25       - right child of 10 (15) gets reparented
   *                                      to become left child of old root
   */
  _rotateRight(h: Node<Tk, Tv>): Node<Tk, Tv> {
    assert(this._isRed(h.left));
    const x = h.left;
    h.left = x!.right;
    x!.right = h;
    x!.color = h.color;
    h.color = RED;
    x!.size = h.size;
    h.size = this._size(h.left) + this._size(h.right) + 1;
    return x!;
  }

  _size(x: Node<Tk, Tv> | null): number {
    return x === null ? 0 : x.size;
  }
}
