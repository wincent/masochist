import RedBlackTree from '../RedBlackTree';

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

  describe('SEARCHEXAMPLE', () => {
    let rbt: RedBlackTree<ComparableString, number>;

    beforeEach(() => {
      rbt = new RedBlackTree<ComparableString, number>();

      // From: https://algs4.cs.princeton.edu/33balanced/RedBlackBST.java.html
      [...'SEARCHEXAMPLE'].forEach((letter, i) => {
        rbt.put(new ComparableString(letter), i);
      });
    });

    it('reads out keys and values in key order', () => {
      const tuples = [...rbt.keys()].map((key: ComparableString) => {
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
  });
});
