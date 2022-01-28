import {dedent, invariant} from '@masochist/common';

import RedBlackTree, {center, isRed, zip} from '../RedBlackTree';

import type {Node} from '../RedBlackTree';

// Cheaty shorthands to make tests a little more concise.
type Tv = number;
type Tk = ComparableString;
type NodeT = Node<Tk, Tv>;

class ComparableString {
  _value: string;

  constructor(value: string) {
    this._value = value;
  }

  compareTo(that: ComparableString): number {
    if (this._value < that._value) {
      return -1;
    } else if (this._value > that._value) {
      return 1;
    } else {
      return 0;
    }
  }

  toString(): string {
    return this._value;
  }
}

describe('RedBlackTree', () => {
  describe('SEARCHEXAMPLE', () => {
    let rbt: RedBlackTree<Tk, Tv>;

    beforeEach(() => {
      rbt = new RedBlackTree<Tk, Tv>();

      // From: https://algs4.cs.princeton.edu/33balanced/RedBlackBST.java.html
      [...'SEARCHEXAMPLE'].forEach((letter, i) => {
        rbt.put(new ComparableString(letter), i);
      });
    });

    it('is a binary search tree', () => {
      expect(isBST(rbt)).toBe(true);
    });

    it('is a 2-3-4 tree', () => {
      expect(is234(rbt)).toBe(true);
    });

    it('is balanced', () => {
      expect(isBalanced(rbt)).toBe(true);
    });

    it('has correct size values', () => {
      expect(isSizeCorrect(rbt)).toBe(true);
    });

    it('reads out keys and values in key order', () => {
      const tuples = [...rbt.keys()].map((key: Tk) => {
        return [key.toString(), rbt.get(key)];
      });

      expect(tuples).toEqual([
        ['A', 8],
        ['C', 4],
        ['E', 12],
        ['H', 5],
        ['L', 11],
        ['M', 9],
        ['P', 10],
        ['R', 3],
        ['S', 0],
        ['X', 7],
      ]);
    });

    it('allows keys to be overwritten', () => {
      expect(rbt.size).toBe(10);
      const m = new ComparableString('M');
      put(rbt, m, 100);
      expect(rbt.size).toBe(10);
      expect(rbt.get(m)).toBe(100);
    });

    describe('delete()', () => {
      it('allows keys to be deleted', () => {
        expect(rbt.size).toBe(10);

        // Delete something.
        const r = new ComparableString('R');
        del(rbt, r);
        expect(rbt.size).toBe(9);
        expect(rbt.get(r)).toBe(null);

        // Deleting it again (idempotently).
        del(rbt, r);
        expect(rbt.size).toBe(9);
        expect(rbt.get(r)).toBe(null);

        // Delete something else.
        const e = new ComparableString('E');
        del(rbt, e);
        expect(rbt.size).toBe(8);
        expect(rbt.get(e)).toBe(null);

        // Delete something that's not there.
        const z = new ComparableString('Z');
        del(rbt, z);
        expect(rbt.size).toBe(8);
        expect(rbt.get(e)).toBe(null);

        // Delete the rest in an arbitrary order...
        del(rbt, new ComparableString('A'));
        expect(rbt.size).toBe(7);
        del(rbt, new ComparableString('S'));
        expect(rbt.size).toBe(6);
        del(rbt, new ComparableString('H'));
        expect(rbt.size).toBe(5);
        del(rbt, new ComparableString('C'));
        expect(rbt.size).toBe(4);
        del(rbt, new ComparableString('X'));
        expect(rbt.size).toBe(3);
        del(rbt, new ComparableString('M'));
        expect(rbt.size).toBe(2);
        del(rbt, new ComparableString('P'));
        expect(rbt.size).toBe(1);
        del(rbt, new ComparableString('L'));
        expect(rbt.size).toBe(0);
        expect(rbt.isEmpty()).toBe(true);
      });
    });

    describe('entries()', () => {
      it('returns an iterable of key/value tuples in key-order', () => {
        expect([...rbt.entries()]).toEqual([
          [new ComparableString('A'), 8],
          [new ComparableString('C'), 4],
          [new ComparableString('E'), 12],
          [new ComparableString('H'), 5],
          [new ComparableString('L'), 11],
          [new ComparableString('M'), 9],
          [new ComparableString('P'), 10],
          [new ComparableString('R'), 3],
          [new ComparableString('S'), 0],
          [new ComparableString('X'), 7],
        ]);
      });
    });

    describe('get()', () => {
      it('retrieves values corresponding to keys', () => {
        // Existing keys.
        expect(rbt.get(new ComparableString('S'))).toBe(0);
        expect(rbt.get(new ComparableString('E'))).toBe(12);
        expect(rbt.get(new ComparableString('A'))).toBe(8);

        // Non-existing keys.
        expect(rbt.get(new ComparableString('Z'))).toBe(null);
      });
    });

    describe('has()', () => {
      it('indicates the presence of keys', () => {
        // Existing keys.
        expect(rbt.has(new ComparableString('S'))).toBe(true);
        expect(rbt.has(new ComparableString('E'))).toBe(true);
        expect(rbt.has(new ComparableString('A'))).toBe(true);

        // Non-existing keys.
        expect(rbt.has(new ComparableString('Z'))).toBe(false);
      });
    });

    describe('isEmpty()', () => {
      it('returns false until empty', () => {
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('S'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('E'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('A'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('R'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('C'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('H'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('X'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('M'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('P'));
        expect(rbt.isEmpty()).toBe(false);
        del(rbt, new ComparableString('L'));
        expect(rbt.isEmpty()).toBe(true);
      });
    });

    describe('keys()', () => {
      it('returns an iterable of keys in order', () => {
        expect([...rbt.keys()]).toEqual([
          new ComparableString('A'),
          new ComparableString('C'),
          new ComparableString('E'),
          new ComparableString('H'),
          new ComparableString('L'),
          new ComparableString('M'),
          new ComparableString('P'),
          new ComparableString('R'),
          new ComparableString('S'),
          new ComparableString('X'),
        ]);
      });
    });

    describe('max()', () => {
      it('returns the largest key', () => {
        expect(rbt.max()).toEqual(new ComparableString('X'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('S'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('R'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('P'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('M'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('L'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('H'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('E'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('C'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toEqual(new ComparableString('A'));
        del(rbt, rbt.max()!);
        expect(rbt.max()).toBe(null);
      });
    });

    describe('min()', () => {
      it('returns the smallest key', () => {
        expect(rbt.min()).toEqual(new ComparableString('A'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('C'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('E'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('H'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('L'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('M'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('P'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('R'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('S'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toEqual(new ComparableString('X'));
        del(rbt, rbt.min()!);
        expect(rbt.min()).toBe(null);
      });
    });

    describe('toString()', () => {
      it('stringifies an empty tree', () => {
        expect(new RedBlackTree<ComparableString, number>().toString()).toBe(
          '·\n',
        );
      });

      it('stringifies a one-node tree', () => {
        const rbt = new RedBlackTree<ComparableString, number>();
        put(rbt, new ComparableString('X'), 1);
        expect(rbt.toString()).toBe(
          dedent`
           X
          ┌┴┐
          · ·
        ` + '\n',
        );
      });

      it('stringifies a two-node tree', () => {
        const rbt = new RedBlackTree<ComparableString, number>();
        put(rbt, new ComparableString('X'), 1);
        put(rbt, new ComparableString('Y'), 2);
        expect(rbt.toString()).toBe(
          dedent`
            Y
           ┏┹─┐
           X  ·
          ┌┴┐
          · ·
        ` + '\n',
        );
      });

      it('stringifies a three-node tree', () => {
        const rbt = new RedBlackTree<ComparableString, number>();
        put(rbt, new ComparableString('X'), 1);
        put(rbt, new ComparableString('Y'), 2);
        put(rbt, new ComparableString('Z'), 3);
        expect(rbt.toString()).toBe(
          dedent`
             Y
           ┌─┴─┐
           X   Z
          ┌┴┐ ┌┴┐
          · · · ·
        ` + '\n',
        );
      });

      it('stringifies SEARCHEXAMPLE', () => {
        expect(rbt.toString()).toBe(
          dedent`
                    M
               ┌────┴─────┐
               E          R
            ┌──┴──┐    ┌──┴─┐
            C     L    P    X
           ┏┹─┐  ┏┹─┐ ┌┴┐  ┏┹─┐
           A  ·  H  · · ·  S  ·
          ┌┴┐   ┌┴┐       ┌┴┐
          · ·   · ·       · ·
        ` + '\n',
        );
      });

      it('stringifies a tree with variable-length keys', () => {
        const rbt = new RedBlackTree<ComparableString, number>();
        put(rbt, new ComparableString('VERY-LONG'), 1);
        put(rbt, new ComparableString('A'), 2);
        put(rbt, new ComparableString('B'), 3);
        put(rbt, new ComparableString('SHORT'), 4);
        put(rbt, new ComparableString('C'), 5);
        put(rbt, new ComparableString('D'), 6);
        put(rbt, new ComparableString('EXTREMELY-LONG!'), 7);
        put(rbt, new ComparableString('AVERAGE'), 8);
        expect(rbt.toString()).toBe(
          dedent`
                            D
               ┌────────────┴─────┐
               B                SHORT
             ┌─┴───┐         ┌────┴───────┐
          AVERAGE  C  EXTREMELY-LONG! VERY-LONG
            ┏┹─┐  ┌┴┐       ┌┴┐          ┌┴┐
            A  ·  · ·       · ·          · ·
           ┌┴┐
           · ·
        ` + '\n',
        );
      });
    });

    describe('values()', () => {
      it('returns an iterable of values in key-order', () => {
        expect([...rbt.values()]).toEqual([8, 4, 12, 5, 11, 9, 10, 3, 0, 7]);
      });
    });
  });
});

describe('center()', () => {
  it('centers an empty string', () => {
    expect(center('', 10)).toBe(' '.repeat(10));
  });

  it('centers a string with no space on either side', () => {
    expect(center('foo', 3)).toBe('foo');
  });

  it('centers a string with one space on the right', () => {
    expect(center('foo', 4)).toBe('foo ');
  });

  it('centers a string with one space on each side', () => {
    expect(center('foo', 5)).toBe(' foo ');
  });

  it('centers a string with an equal number of spaces on each side', () => {
    expect(center('foo', 13)).toBe('     foo     ');
  });

  it('centers a string with an unequal number of spaces on each side', () => {
    expect(center('foo', 14)).toBe('     foo      ');
  });

  it('does not trim whitespace before figuring out how to center the string', () => {
    // We want the inner whitespace to be preserved because it may have
    // significance when stringifying subtrees.
    expect(center('    foo ', 14)).toBe('       foo    ');
  });
});

describe('zip()', () => {
  it('zips two empty arrays', () => {
    expect(zip([], [])).toEqual([]);
  });

  it('zips two equal length arrays', () => {
    expect(zip(['foo'], ['bar'])).toEqual([['foo', 'bar']]);
    expect(zip(['foo', 'baz'], ['bar', 'qux'])).toEqual([
      ['foo', 'bar'],
      ['baz', 'qux'],
    ]);
  });

  it('zips a shorter array with a longer one', () => {
    expect(zip([], ['foo'])).toEqual([[null, 'foo']]);
    expect(zip(['foo'], ['bar', 'baz', 'qux'])).toEqual([
      ['foo', 'bar'],
      [null, 'baz'],
      [null, 'qux'],
    ]);
  });

  it('zips a longer array with a shorter one', () => {
    expect(zip(['foo'], [])).toEqual([['foo', null]]);
    expect(zip(['foo', 'bar', 'baz'], ['qux'])).toEqual([
      ['foo', 'qux'],
      ['bar', null],
      ['baz', null],
    ]);
  });

  it('is polymorphic', () => {
    expect(zip([10, 20, 30], [2, 4, 8, 16])).toEqual([
      [10, 2],
      [20, 4],
      [30, 8],
      [null, 16],
    ]);
  });
});

/**
 * Performs various integrity checks on the supplied tree.
 */
function check(tree: RedBlackTree<Tk, Tv>): RedBlackTree<Tk, Tv> {
  if (!is234(tree)) {
    throw new Error('check(): not a 2-3-4 tree');
  }
  if (!isBST(tree)) {
    throw new Error('check(): not a BST');
  }
  if (!isBalanced(tree)) {
    throw new Error('check(): not balanced');
  }
  if (!isSizeCorrect(tree)) {
    throw new Error('check(): incorrect size');
  }
  return tree;
}

/**
 * Confirms `tree` is 2-3-4 tree.
 *
 * That is, it has no red right links, and at most two left red links in a row
 * on any path.
 */
function is234(tree: RedBlackTree<Tk, Tv>): boolean {
  function is(h: NodeT | null): boolean {
    if (h === null) {
      return true;
    }
    if (isRed(h.right)) {
      return false;
    }
    if (isRed(h) && isRed(h.left) && isRed(h.left?.left ?? null)) {
      return false;
    }
    return is(h.left) && is(h.right);
  }

  return is(tree.root);
}

function isBST(tree: RedBlackTree<Tk, Tv>): boolean {
  function is(h: NodeT | null, min: Tk, max: Tk): boolean {
    if (h === null) {
      return true;
    }
    if (h.key.compareTo(min) < 0 || h.key.compareTo(max) > 0) {
      return false;
    }
    return is(h.left, min, h.key) && is(h.right, h.key, max);
  }

  if (tree.isEmpty()) {
    return true;
  } else {
    const min = tree.min();
    invariant(min);
    const max = tree.max();
    invariant(max);
    return is(tree.root, min, max);
  }
}

/**
 * All paths (root to leaf) have the same number of black edges.
 */
function isBalanced(tree: RedBlackTree<Tk, Tv>): boolean {
  function is(h: NodeT | null, blackCount: number): boolean {
    if (h === null) {
      return blackCount === 0;
    }
    if (!isRed(h)) {
      blackCount--;
    }
    return is(h.left, blackCount) && is(h.right, blackCount);
  }

  let blackCount = 0;
  let node = tree.root;

  while (node) {
    if (!isRed(node)) {
      blackCount++;
    }
    node = node.left;
  }

  return is(tree.root, blackCount);
}

function isSizeCorrect(tree: RedBlackTree<Tk, Tv>): boolean {
  function is(h: NodeT | null): boolean {
    if (h === null) {
      return true;
    }
    if (h.size !== (h.left?.size ?? 0) + (h.right?.size ?? 0) + 1) {
      return false;
    }
    return is(h.left) && is(h.right);
  }

  return is(tree.root);
}

/**
 * Wrapper around `RedBlackTree.prototype.delete()` that verifies the tree's
 * integrity after the operation.
 */
function del(tree: RedBlackTree<Tk, Tv>, key: Tk) {
  tree.delete(key);
  check(tree);
}

/**
 * Wrapper around `RedBlackTree.prototype.put()` that verifies the tree's
 * integrity after the operation.
 */
function put(tree: RedBlackTree<Tk, Tv>, key: Tk, value: Tv) {
  tree.put(key, value);
  check(tree);
}
