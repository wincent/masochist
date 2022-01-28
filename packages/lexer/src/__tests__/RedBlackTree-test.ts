import assert from 'assert';

import RedBlackTree, {RED, center, zip} from '../RedBlackTree';

import type {Node} from '../RedBlackTree';

describe('RedBlackTree', () => {
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

  type Tv = number;
  type Tk = ComparableString;
  type NodeT = Node<Tk, Tv>;

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
      function isBST(h: NodeT | null, min: Tk, max: Tk): boolean {
        if (h === null) {
          return true;
        }
        if (h.key.compareTo(min) < 0 || h.key.compareTo(max) > 0) {
          return false;
        }
        return isBST(h.left, min, h.key) && isBST(h.right, h.key, max);
      }

      const min = rbt.min();
      assert(min);
      const max = rbt.max();
      assert(max);

      expect(isBST(rbt.root, min, max)).toBe(true);
    });

    it('is a 2-3-4 tree', () => {
      // ie. no red right links, and at most two left red links in a row on any
      // path.
      function is234(h: NodeT | null): boolean {
        if (h === null) {
          return true;
        }
        if (h.right?.color === RED) {
          return false;
        }
        if (
          h.color === RED &&
          h.left?.color === RED &&
          h.left?.left?.color === RED
        ) {
          return false;
        }
        return is234(h.left) && is234(h.right);
      }

      expect(is234(rbt.root)).toBe(true);
    });

    it('is balanced', () => {
      // ie. all paths (root to leaf) have the same number of black edges.
      function isBalanced(h: NodeT | null, blackCount: number): boolean {
        if (h === null) {
          return blackCount === 0;
        }
        if (h.color !== RED) {
          blackCount--;
        }
        return (
          isBalanced(h.left, blackCount) && isBalanced(h.right, blackCount)
        );
      }

      let blackCount = 0;
      let node = rbt.root;

      while (node) {
        if (node.color !== RED) {
          blackCount++;
        }
        node = node.left;
      }

      expect(isBalanced(rbt.root, blackCount)).toBe(true);
    });

    it('has correct size values', () => {
      function isSizeCorrect(h: NodeT | null): boolean {
        if (h === null) {
          return true;
        }
        if (h.size !== (h.left?.size ?? 0) + (h.right?.size ?? 0) + 1) {
          return false;
        }
        return isSizeCorrect(h.left) && isSizeCorrect(h.right);
      }

      expect(isSizeCorrect(rbt.root)).toBe(true);
    });

    // TODO: test other methods (eg. min(), max()) etc

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
      rbt.put(m, 100);
      expect(rbt.size).toBe(10);
      expect(rbt.get(m)).toBe(100);
    });

    describe('delete()', () => {
      it('allows keys to be deleted', () => {
        expect(rbt.size).toBe(10);

        // Delete something.
        const r = new ComparableString('R');
        rbt.delete(r);
        expect(rbt.size).toBe(9);
        expect(rbt.get(r)).toBe(null);

        // Deleting it again (idempotently).
        rbt.delete(r);
        expect(rbt.size).toBe(9);
        expect(rbt.get(r)).toBe(null);

        // Delete something else.
        const e = new ComparableString('E');
        rbt.delete(e);
        expect(rbt.size).toBe(8);
        expect(rbt.get(e)).toBe(null);

        // Delete something that's not there.
        const z = new ComparableString('Z');
        rbt.delete(z);
        expect(rbt.size).toBe(8);
        expect(rbt.get(e)).toBe(null);

        // Delete the rest in an arbitrary order...
        rbt.delete(new ComparableString('A'));
        expect(rbt.size).toBe(7);
        rbt.delete(new ComparableString('S'));
        expect(rbt.size).toBe(6);
        rbt.delete(new ComparableString('H'));
        expect(rbt.size).toBe(5);
        // rbt.delete(new ComparableString('C'));
        // expect(rbt.size).toBe(4);
        // rbt.delete(new ComparableString('X'));
        // expect(rbt.size).toBe(3);
        // rbt.delete(new ComparableString('M'));
        // expect(rbt.size).toBe(2);
        // rbt.delete(new ComparableString('P'));
        // expect(rbt.size).toBe(1);
        // rbt.delete(new ComparableString('L'));
        // expect(rbt.size).toBe(0);
        // expect(rbt.isEmpty()).toBe(true);
      });
    });

    describe('toString()', () => {
      it('stringifies an empty tree', () => {
        expect(new RedBlackTree<ComparableString, number>().toString()).toBe(
          '·\n',
        );
      });

      it('stringifies a one-node tree', () => {
        // Body.
      });

      it('stringifies SEARCHEXAMPLE', () => {
        expect(rbt.toString()).toBe(
          '          M\n' +
            '     ┌────┴─────┐\n' +
            '     E          R\n' +
            '  ┌──┴──┐    ┌──┴─┐\n' +
            '  C     L    P    X\n' +
            ' ┏┹─┐  ┏┹─┐ ┌┴┐  ┏┹─┐\n' +
            ' A  ·  H  · · ·  S  ·\n' +
            '┌┴┐   ┌┴┐       ┌┴┐\n' +
            '· ·   · ·       · ·\n',
        );
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
