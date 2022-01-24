import {Queue} from '@masochist/common';
import assert from 'assert';

interface Comparable<T> {
  compareTo(that: T): number;
}

export const RED = true;
export const BLACK = false;

export type Node<Tk, Tv> = {
  color: boolean;
  key: Tk;
  left: Node<Tk, Tv> | null;
  right: Node<Tk, Tv> | null;
  size: number;
  value: Tv;
};

// For tree printing (see `toString()`).

const BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT = '\u2510'; // ┐
const BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT = '\u250C'; // ┌
const BOX_DRAWINGS_LIGHT_HORIZONTAL = '\u2500'; // ─
const BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL = '\u2534'; // ┴
const BOX_DRAWINGS_LIGHT_UP_AND_LEFT = '\u2518'; // ┘
const BOX_DRAWINGS_LIGHT_UP_AND_RIGHT = '\u2514'; // └
const MINIMUM_KEY_LENGTH = 3;

/**
 * Left-leaning Red-Black BST with keys of type `Tk` and values of type `Tv`.
 *
 * This is based on the "2-3" variant described in Robert Sedgewick's,
 * "Left-leaning Red-Black Trees":
 *
 *     https://www.cs.princeton.edu/~rs/talks/LLRB/LLRB.pdf
 */
export default class RedBlackTree<Tk extends Comparable<Tk>, Tv> {
  _root: Node<Tk, Tv> | null;

  constructor() {
    this._root = null;
  }

  delete(key: Tk) {
    if (this.has(key)) {
      if (!this._isRed(this._root!.left) && !this._isRed(this._root!.right)) {
        this._root!.color = RED;
      }
      this._root = this._delete(this._root!, key);
      if (this._root) {
        this._root.color = BLACK;
      }
    }
  }

  deleteMin(): void {
    if (!this.isEmpty()) {
      this._root = this._deleteMin(this._root!);
      if (this._root) {
        this._root.color = BLACK;
      }
    }
  }

  entries(): Iterable<[Tk, Tv]> {
    const queue = new Queue<[Tk, Tv]>();
    this._iterable(
      this._root,
      (key, value) => queue.enqueue([key, value]),
      this.min()!,
      this.max()!,
    );
    return queue;
  }

  get(key: Tk): Tv | null {
    return this._get(this._root, key);
  }

  has(key: Tk): boolean {
    return this.get(key) !== null;
  }

  isEmpty(): boolean {
    return this._root === null;
  }

  keys(): Iterable<Tk> {
    const queue = new Queue<Tk>();
    this._iterable(
      this._root,
      (key, _value) => queue.enqueue(key),
      this.min()!,
      this.max()!,
    );
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

  /**
   * Pretty-printed string representation, for debugging purposes.
   *
   * For simplicity, assumes that keys and values are of consistent lengths (ie.
   * because the tree is constructed from the bottom up, with half as many rows
   * in each higher level, we assume that keys in each successively higher level
   * are about the same size; _if_ they were more than double the size, the
   * layout will break).
   */
  toString(): string {
    if (this._root) {
      // Do breadth-first traversal of tree to produce a level-by-level
      // representation; eg. `[[1], [2, 3,], ...]`. Gaps where there are no
      // children are represented by `null`.
      let level = 0;
      const levels: Array<Array<Node<Tk, Tv> | null>> = [[this._root]];
      while (true) {
        const next: Array<Node<Tk, Tv> | null> = [];
        for (const node of levels[level]) {
          if (node) {
            next.push(node.left);
            next.push(node.right);
          } else {
            next.push(null, null);
          }
        }
        if (next.some(Boolean)) {
          levels.push(next);
          level++;
        } else {
          break;
        }
      }

      // Format rows from the bottom up; width of lower rows informs width of
      // upper rows.
      const output: Array<Array<string>> = [];
      for (let i = levels.length - 1; i >= 0; i--) {
        const current = levels[i];
        const previous = output[0];
        if (previous) {
          const left = current[i]?.left;
          const right = current[i]?.right;
          output.unshift(
            previous.map((item, j) => {
              const width = previous[j].length;
              let edges: Array<string> = [];
              if (j % 2 === 0) {
                // Left.
                if (item) {
                  edges.unshift(
                    left ? ' '.repeat(Math.floor(width / 2)) : '',
                    left ? BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT : '',
                    left
                      ? (left.color === RED
                          ? '*'
                          : BOX_DRAWINGS_LIGHT_HORIZONTAL
                        ).repeat(width - 2)
                      : '',
                    left && right
                      ? BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL
                      : left
                      ? BOX_DRAWINGS_LIGHT_UP_AND_LEFT
                      : right
                      ? BOX_DRAWINGS_LIGHT_UP_AND_RIGHT
                      : '',
                  );
                } else {
                  edges.unshift(' '.repeat(width));
                }
              } else {
                // Right.
                if (item) {
                  edges.unshift(
                    right
                      ? (right.color === RED
                          ? '*'
                          : BOX_DRAWINGS_LIGHT_HORIZONTAL
                        ).repeat(width - 2)
                      : '',
                    right ? BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT : '',
                    right ? ' '.repeat(Math.floor(width / 2)) : '',
                  );
                } else {
                  edges.unshift(' '.repeat(width));
                }
              }
              return edges.join('');
            }),
          );
        }
        output.unshift(
          current.map((item, j) => {
            const text = item?.key.toString() ?? '';
            if (j === 0) {
              // First child; needs indent.
              if (previous) {
                return (
                  ' ' +
                  text.padStart(previous[0].length + MINIMUM_KEY_LENGTH, ' ')
                );
              } else {
                return ' ' + text.padStart(MINIMUM_KEY_LENGTH, ' ');
              }
            } else if (j % 2) {
              // Right child; justify left.
              return ' ' + text.padEnd(MINIMUM_KEY_LENGTH, ' ');
            } else {
              // Left child; justify right.
              return text.padStart(MINIMUM_KEY_LENGTH, ' ') + ' ';
            }
          }),
        );
      }
      return output.map((line) => line.join('').trimEnd()).join('\n');
    } else {
      return '';
    }
  }

  values(): Iterable<Tv> {
    const queue = new Queue<Tv>();
    this._iterable(
      this._root,
      (_key, value) => queue.enqueue(value),
      this.min()!,
      this.max()!,
    );
    return queue;
  }

  get root(): Node<Tk, Tv> | null {
    return this._root;
  }

  get size(): number {
    return this._size(this._root);
  }

  _delete(h: Node<Tk, Tv>, key: Tk) {
    if (key.compareTo(h.key) < 0) {
      if (!this._isRed(h.left) && !this._isRed(h.left!.left)) {
        h = this._moveRedLeft(h);
      }
      h.left = this._delete(h.left!, key);
    } else {
      if (this._isRed(h.left)) {
        h = this._rotateRight(h);
      }
      if (key.compareTo(h.key) === 0 && h.right === null) {
        return null;
      }
      if (!this._isRed(h.right) && !this._isRed(h.right!.left)) {
        h = this._moveRedRight(h);
      }
      if (key.compareTo(h.key) === 0) {
        h.value = this._get(h.right, this._min(h.right!).key)!;
        h.key = this._min(h.right!).key;
        h.right = this._deleteMin(h.right!);
      } else {
        h.right = this._delete(h.right!, key);
      }
    }
    return this._rebalance(h);
  }

  _deleteMin(h: Node<Tk, Tv>): Node<Tk, Tv> | null {
    if (h.left === null) {
      return null;
    }
    if (!this._isRed(h.left) && !this._isRed(h.left.left)) {
      h = this._moveRedLeft(h);
    }
    h.left = this._deleteMin(h.left!);
    return this._rebalance(h);
  }

  _flipColors(h: Node<Tk, Tv>) {
    assert(h.left);
    assert(h.right);
    h.color = RED;
    h.left.color = BLACK;
    h.right.color = BLACK;
  }

  _get(h: Node<Tk, Tv> | null, key: Tk): Tv | null {
    if (h === null) {
      return null;
    }

    const comparison = key.compareTo(h.key);

    if (comparison < 0) {
      return this._get(h.left, key);
    } else if (comparison > 0) {
      return this._get(h.right, key);
    } else {
      return h.value;
    }
  }

  _isRed(x: Node<Tk, Tv> | null) {
    return x?.color === RED;
  }

  _iterable(
    x: Node<Tk, Tv> | null,
    enqueue: (key: Tk, value: Tv) => void,
    low: Tk,
    high: Tk,
  ) {
    if (x === null) {
      return;
    }
    const lowComparison = low.compareTo(x.key);
    const highComparison = high.compareTo(x.key);
    if (lowComparison < 0) {
      this._iterable(x.left, enqueue, low, high);
    }
    if (lowComparison <= 0 && highComparison >= 0) {
      enqueue(x.key, x.value);
    }
    if (highComparison > 0) {
      this._iterable(x.right, enqueue, low, high);
    }
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

  _moveRedLeft(h: Node<Tk, Tv>): Node<Tk, Tv> {
    this._flipColors(h);
    if (this._isRed(h.right?.left ?? null)) {
      h.right = this._rotateRight(h.right!);
      h = this._rotateLeft(h);
      this._flipColors(h);
    }
    return h;
  }

  _moveRedRight(h: Node<Tk, Tv>): Node<Tk, Tv> {
    this._flipColors(h);
    if (this._isRed(h.left?.left ?? null)) {
      h = this._rotateRight(h);
      this._flipColors(h);
    }
    return h;
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

    h = this._rebalance(h);

    return h;
  }

  /**
   * Applies various fixes on the way up.
   *
   * See: https://www.cs.princeton.edu/~rs/talks/LLRB/RedBlack.pdf
   */
  _rebalance(h: Node<Tk, Tv>) {
    if (this._isRed(h.right) && !this._isRed(h.left)) {
      h = this._rotateLeft(h); // Make right-leaning reds lean left.
    }
    if (this._isRed(h.left) && this._isRed(h.left!.left)) {
      h = this._rotateRight(h); // Balance temporary 4-node (two reds in a row).
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
    assert(h.right);
    const x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RED;
    x.size = h.size;
    h.size = this._size(h.left) + this._size(h.right) + 1;
    return x;
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
    assert(h.left);
    const x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RED;
    x.size = h.size;
    h.size = this._size(h.left) + this._size(h.right) + 1;
    return x;
  }

  _size(x: Node<Tk, Tv> | null): number {
    return x?.size ?? 0;
  }
}
