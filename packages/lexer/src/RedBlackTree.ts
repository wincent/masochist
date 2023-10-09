import {Queue, invariant} from '@masochist/common';

export interface Comparable<T> {
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
 * For tree printing (see `toString()`).
 *
 * "HEAVY" variants are used to draw red links.
 * "LIGHT" variants are used to draw black links.
 */
const BOX_DRAWINGS_HEAVY_DOWN_AND_LEFT = '\u2513'; // ┓
const BOX_DRAWINGS_HEAVY_DOWN_AND_RIGHT = '\u250f'; // ┏
const BOX_DRAWINGS_HEAVY_HORIZONTAL = '\u2501'; // ━
const BOX_DRAWINGS_HEAVY_UP_AND_HORIZONTAL = '\u253b'; // ┻
const BOX_DRAWINGS_LEFT_LIGHT_AND_RIGHT_UP_HEAVY = '\u253a'; // ┺
const BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT = '\u2510'; // ┐
const BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT = '\u250C'; // ┌
const BOX_DRAWINGS_LIGHT_HORIZONTAL = '\u2500'; // ─
const BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL = '\u2534'; // ┴
const BOX_DRAWINGS_RIGHT_LIGHT_AND_LEFT_UP_HEAVY = '\u2539'; // ┹

const MIDDLE_DOT = '\u00b7'; // ·

/**
 * Left-leaning Red-Black BST with keys of type `Tk` and values of type `Tv`.
 *
 * This is based on the "2-3" variant described in Robert Sedgewick's,
 * "Left-leaning Red-Black Trees":
 *
 *     https://www.cs.princeton.edu/~rs/talks/LLRB/LLRB.pdf
 */
export default class RedBlackTree<Tk extends Comparable<Tk>, Tv extends {}> {
  _root: Node<Tk, Tv> | null;

  constructor() {
    this._root = null;
  }

  delete(key: Tk) {
    if (this.has(key)) {
      if (!isRed(this._root!.left) && !isRed(this._root!.right)) {
        this._root!.color = RED;
      }
      this._root = this._delete(this._root!, key);
      if (this._root) {
        this._root.color = BLACK;
      }
    }
  }

  deleteMin(): void {
    if (!this.empty) {
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

  get empty(): boolean {
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
    return this.empty ? null : this._max(this._root!).key;
  }

  /**
   * Returns the smallest key in the tree.
   */
  min(): Tk | null {
    return this.empty ? null : this._min(this._root!).key;
  }

  put(key: Tk, value: Tv) {
    this._root = this._put(this._root, key, value);
    this._root.color = BLACK;
  }

  /**
   * Pretty-printed string representation, for debugging purposes.
   *
   * There is probably an incredibly concise and elegant way to do this, but I'm
   * only smart enough to do the dumb and obvious thing, which is to recursively
   * break down the problem into subproblems, and combine the drawings for each
   * subtree into ever larger boxes, connecting those boxes with edges. This
   * won't necessarily yield the most densely packed diagrams, but it is easy to
   * reason about.
   */
  toString(): string {
    type Box = {
      width: number; // Not including trailing newline at the end of each line.
      height: number;
      label: string;
      left?: Box;
      right?: Box;
      toString: () => string;
    };

    function getBox(subtree: Node<Tk, Tv> | null): Box {
      if (subtree === null) {
        return {
          width: 1,
          height: 1,
          label: MIDDLE_DOT,
          toString() {
            return this.label + '\n';
          },
        };
      } else {
        const label = subtree.key.toString();
        const left = getBox(subtree.left);
        const right = getBox(subtree.right);
        const width = Math.max(label.length, left.width + right.width + 1);
        const height = Math.max(left.height, right.height) + 2;
        return {
          width,
          height,
          label,
          toString() {
            // _Where_ to draw the edges.
            const padding = Math.max(
              0,
              label.length - (left.width + right.width + 1),
            );
            const leftPadding = Math.floor(padding / 2);
            const rightPadding = Math.ceil(padding / 2);
            const leftIndex = Math.floor(left.width / 2) + leftPadding;
            const rightIndex = width - Math.ceil(right.width / 2) -
              rightPadding;
            const middleIndex = clamp(
              Math.floor(width / 2),
              leftIndex,
              rightIndex,
            );

            // _How_ to style the edges.
            const LEFT_HORIZONTAL = isRed(subtree.left)
              ? BOX_DRAWINGS_HEAVY_HORIZONTAL
              : BOX_DRAWINGS_LIGHT_HORIZONTAL;
            const LEFT_LINK = isRed(subtree.left)
              ? BOX_DRAWINGS_HEAVY_DOWN_AND_RIGHT
              : BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT;
            const RIGHT_HORIZONTAL = isRed(subtree.right)
              ? BOX_DRAWINGS_HEAVY_HORIZONTAL
              : BOX_DRAWINGS_LIGHT_HORIZONTAL;
            const RIGHT_LINK = isRed(subtree.right)
              ? BOX_DRAWINGS_HEAVY_DOWN_AND_LEFT
              : BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT;
            const UP_LINK = isRed(subtree.left) && isRed(subtree.right)
              ? BOX_DRAWINGS_HEAVY_UP_AND_HORIZONTAL
              : isRed(subtree.left)
              ? BOX_DRAWINGS_RIGHT_LIGHT_AND_LEFT_UP_HEAVY
              : isRed(subtree.right)
              ? BOX_DRAWINGS_LEFT_LIGHT_AND_RIGHT_UP_HEAVY
              : BOX_DRAWINGS_LIGHT_UP_AND_HORIZONTAL;

            return (
              [
                // Label.
                `${center(label, width)}`,

                // Edges.
                ' '.repeat(leftIndex) +
                LEFT_LINK +
                LEFT_HORIZONTAL.repeat(middleIndex - leftIndex - 1) +
                UP_LINK +
                RIGHT_HORIZONTAL.repeat(rightIndex - middleIndex - 1) +
                RIGHT_LINK +
                ' '.repeat(width - rightIndex - 1),

                // Subtrees.
                ...zip(
                  left.toString().replace(/\n$/, '').split('\n'),
                  right.toString().replace(/\n$/, '').split('\n'),
                ).map(([a, b]) => {
                  return center(
                    [a ?? ' '.repeat(left.width), b ?? ' '.repeat(right.width)]
                      .join(' '),
                    width,
                  );
                }),
              ].join('\n') + '\n'
            );
          },
        };
      }
    }

    return getBox(this._root)
      .toString()
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n');
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
      if (!isRed(h.left) && !isRed(h.left!.left)) {
        h = this._moveRedLeft(h);
      }
      h.left = this._delete(h.left!, key);
    } else {
      if (isRed(h.left)) {
        h = this._rotateRight(h);
      }
      if (key.compareTo(h.key) === 0 && h.right === null) {
        return null;
      }
      if (!isRed(h.right) && !isRed(h.right!.left)) {
        h = this._moveRedRight(h);
      }
      if (key.compareTo(h.key) === 0) {
        const x = this._min(h.right!);
        h.key = x.key;
        h.value = x.value;
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
    if (!isRed(h.left) && !isRed(h.left.left)) {
      h = this._moveRedLeft(h);
    }
    h.left = this._deleteMin(h.left!);
    return this._rebalance(h);
  }

  _flipColors(h: Node<Tk, Tv>) {
    invariant(h.left);
    invariant(h.right);
    h.color = !h.color;
    h.left.color = !h.left.color;
    h.right.color = !h.right.color;
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

  _max(x: Node<Tk, Tv>): Node<Tk, Tv> {
    return x.right === null ? x : this._max(x.right);
  }

  _min(x: Node<Tk, Tv>): Node<Tk, Tv> {
    return x.left === null ? x : this._min(x.left);
  }

  /**
   * Given red links to 20 and to 25:
   *
   *           20              25       ie. move red link to left child of 20
   *          /  \            /  \
   *             30  ---->  20   30
   *            /  \       /
   *           25
   */
  _moveRedLeft(h: Node<Tk, Tv>): Node<Tk, Tv> {
    this._flipColors(h);
    if (isRed(h.right?.left ?? null)) {
      h.right = this._rotateRight(h.right!);
      h = this._rotateLeft(h);
      this._flipColors(h);
    }
    return h;
  }

  /**
   * Given red links to 15 and 10:
   *
   *            20              15      ie. move red link to right child of 20
   *           /  \            /  \
   *          15  25  ---->  10   20
   *         /                      \
   *        10                      25
   */
  _moveRedRight(h: Node<Tk, Tv>): Node<Tk, Tv> {
    this._flipColors(h);
    if (isRed(h.left?.left ?? null)) {
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
    if (isRed(h.right) && !isRed(h.left)) {
      h = this._rotateLeft(h); // Make right-leaning reds lean left.
    }
    if (isRed(h.left) && isRed(h.left!.left)) {
      h = this._rotateRight(h); // Balance temporary 4-node (two reds in a row).
    }
    if (isRed(h.left) && isRed(h.right)) {
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
    invariant(h.right);
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
    invariant(h.left);
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

/**
 * Centers `line` within `width`.
 *
 * Tries to pad using an equal amount of whitespace on each side, but in the
 * event that the input cannot be exactly centered, biases to the left.
 *
 * @internal
 */
export function center(line: string, width: number) {
  invariant(width >= line.length);
  const space = width - line.length;
  const left = Math.floor(space / 2);
  const right = Math.round(space / 2);
  return ' '.repeat(left) + line + ' '.repeat(right);
}

/**
 * Clamps `value` between `lower` and `upper` limits (exclusive).
 *
 * For the most part, our `middleIndex` calculations leave the down-link in a
 * visually pleasing place (ie. as close as possible to the middle of the
 * label), but in some edge-case situations we wind up with the `middleIndex`
 * actually coinciding with the `leftIndex` or `rightIndex`.
 *
 * One fix would be to center the `middleIndex` between `leftIndex` and
 * `rightIndex` instead of the centering it in the label, but that ends up
 * looking bad for the common case.
 *
 * So, we use `clamp` as a special kludge just to make sure we never draw the
 * indices on top of each other. It saves us from errors in those rare cases,
 * while preserving the visually nice output for the non-rare cases.
 */
function clamp(value: number, lower: number, upper: number) {
  invariant(upper - lower >= 2);
  if (value <= lower) {
    return lower + 1;
  } else if (value >= upper) {
    return upper - 1;
  } else {
    return value;
  }
}

export function isRed<Tk, Tv>(x: Node<Tk, Tv> | null) {
  return x?.color === RED;
}

/**
 * Zips two arrays into a single array of tuples. If either array is longer than
 * the other, `null` values are inserted to extend the shorter array.
 *
 * @internal
 */
export function zip<T>(a: Array<T>, b: Array<T>): Array<[T | null, T | null]> {
  const zipped = new Array(Math.max(a.length, b.length));
  for (let i = 0; i < zipped.length; i++) {
    zipped[i] = [i < a.length ? a[i] : null, i < b.length ? b[i] : null];
  }
  return zipped;
}
