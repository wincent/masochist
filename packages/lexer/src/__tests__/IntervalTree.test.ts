import {dedent} from '@masochist/common';
import {beforeEach, describe, expect, it} from 'bun:test';

import IntervalTree, {Interval} from '../IntervalTree';
import ComparableString from './ComparableString';

describe('Interval', () => {
  it('can represent a range', () => {
    const a = new ComparableString('a');
    const z = new ComparableString('z');
    const {low, high, maximum} = {
      low: a,
      high: z,
      maximum: z,
    };
    const interval = new Interval(low, high, maximum);
    expect(interval.low).toEqual(a);
    expect(interval.high).toEqual(z);
    expect(interval.maximum).toEqual(z);
  });

  it('can represent a single point', () => {
    const foo = new ComparableString('foo');
    const {low, high, maximum} = {
      low: foo,
      high: foo,
      maximum: foo,
    };
    const interval = new Interval(low, high, maximum);
    expect(interval.low).toEqual(foo);
    expect(interval.high).toEqual(foo);
    expect(interval.maximum).toEqual(foo);
  });

  it('uses `high` as maximum value if omitted', () => {
    const a = new ComparableString('a');
    const z = new ComparableString('z');
    const interval = new Interval(a, z);
    expect(interval.maximum).toEqual(z);
  });

  it('enforces the requirement that `low` <= `high`', () => {
    const a = new ComparableString('a');
    const z = new ComparableString('z');
    const {low, high, maximum} = {
      low: z,
      high: a,
      maximum: z,
    };
    expect(() => new Interval(low, high, maximum)).toThrow(
      /`low` must be <= `high`/,
    );
  });

  it('enforces the requirement that `maximum` >= `high`', () => {
    const a = new ComparableString('a');
    const z = new ComparableString('z');
    const {low, high, maximum} = {
      low: a,
      high: z,
      maximum: a,
    };
    expect(() => new Interval(low, high, maximum)).toThrow(
      /`maximum` must be >= `high`/,
    );
  });

  describe('toString()', () => {
    it('represents a range', () => {
      const low = new ComparableString('a');
      const high = new ComparableString('c');
      const maximum = new ComparableString('z');
      const interval = new Interval(low, high, maximum);
      expect(interval.toString()).toBe('[a,c]:z');
    });

    it('represents a single point', () => {
      const low = new ComparableString('i');
      const high = new ComparableString('i');
      const maximum = new ComparableString('j');
      const interval = new Interval(low, high, maximum);
      expect(interval.toString()).toBe('[i]:j');
    });
  });
});

describe('IntervalTree', () => {
  let tree: IntervalTree<ComparableString, number>;

  beforeEach(() => {
    tree = new IntervalTree();
  });

  describe('low-level RedBlackTree methods', () => {
    describe('deleteMin()', () => {
      it('can be called on an empty tree', () => {
        expect(() => tree.deleteMin()).not.toThrow();
      });

      it('removes the smallest item', () => {
        const AZ = range('A', 'Z');
        const j = item('j');
        const z = item('z');

        tree.put(z, 10);
        tree.put(AZ, 20);
        tree.put(j, 30);

        expect(tree.size).toBe(3);
        tree.deleteMin();
        expect(tree.size).toBe(2);
        expect(tree.has(AZ)).toBe(false);

        tree.deleteMin();
        expect(tree.size).toBe(1);
        expect(tree.has(j)).toBe(false);

        tree.deleteMin();
        expect(tree.empty).toBe(true);
        expect(tree.has(z)).toBe(false);
      });
    });

    describe('delete()', () => {
      it('does nothing if item does not exist', () => {
        const a = item('a');
        tree.put(a, 1);

        tree.delete(item('b'));
        expect(tree.size).toBe(1);
        expect(tree.has(a)).toBe(true);
      });

      it('removes an existing item', () => {
        const a = item('a');
        tree.put(a, 1);

        tree.delete(a);
        expect(tree.empty).toBe(true);
        expect(tree.has(a)).toBe(false);

        // Note that we can remove based on any match of `low` value.
        const x = item('x');
        tree.put(x, 10);
        tree.delete(range('x', 'z'));
        expect(tree.empty).toBe(true);
        expect(tree.has(x)).toBe(false);
      });

      it('updates the `maximum` metadata embedded in related keys', () => {
        // See `toString()` test below for a visual picture of the tree we're
        // working with here.
        tree.put(item('a'), 1);
        tree.put(item('0'), 2);
        tree.put(range('A', 'Z'), 3);
        tree.put(range('x', 'z'), 4);

        tree.delete(range('x', 'z'));

        let keys = [...tree.keys()];
        expect(keys.length).toBe(3);
        expect(keys[0].maximum).toEqual(new ComparableString('0'));
        expect(keys[1].maximum).toEqual(new ComparableString('a'));
        expect(keys[2].maximum).toEqual(new ComparableString('a'));

        tree.delete(item('a'));
        keys = [...tree.keys()];
        expect(keys.length).toBe(2);
        expect(keys[0].maximum).toEqual(new ComparableString('0'));
        expect(keys[1].maximum).toEqual(new ComparableString('Z'));

        tree.delete(range('A', 'Z'));
        keys = [...tree.keys()];
        expect(keys.length).toBe(1);
        expect(keys[0].maximum).toEqual(new ComparableString('0'));

        tree.delete(item('0'));
        keys = [...tree.keys()];
        expect(keys.length).toBe(0);
      });
    });

    describe('get()', () => {
      it('returns the value associated with existing keys', () => {
        const a = item('a');
        const XZ = range('X', 'Z');
        tree.put(a, 100);
        tree.put(XZ, 200);
        expect(tree.get(a)).toEqual(100);
        expect(tree.get(XZ)).toEqual(200);

        // Note that look-ups are by key (low) _value_, not by key _identity_.
        expect(tree.get(item('a'))).toEqual(100);
        expect(tree.get(range('X', 'Z'))).toEqual(200);

        // Note that `maximum` metadata has no effect on look-up.
        expect(tree.get(item('a', '}'))).toEqual(100);
        expect(tree.get(range('X', 'Z', '{'))).toEqual(200);

        // And even changing the range `high` point has no effect.
        expect(tree.get(range('X', 'Y'))).toEqual(200);
      });

      it('returns null for non-existent keys', () => {
        tree.put(item('a'), 100);
        expect(tree.get(item('c'))).toBe(null);

        // Note that trying to look up by something in the middle of a range
        // finds nothing (low-level `get()` doesn't work for this; need to use
        // high-level `search()`).
        tree.put(range('0', '9'), 50);
        expect(tree.get(item('5'))).toBe(null);
      });
    });

    describe('has()', () => {
      it('returns true for existing items', () => {
        const a = item('a');
        const AZ = range('A', 'Z');

        tree.put(a, 10);
        tree.put(AZ, 20);

        expect(tree.has(a)).toBe(true);
        expect(tree.has(AZ)).toBe(true);

        // Note that presence is determined by the `low` value of the key.
        expect(tree.has(item('A'))).toBe(true);
        expect(tree.has(range('A', 'C'))).toBe(true);
      });

      it('returns false for non-existent items', () => {
        tree.put(item('a'), 10);
        tree.put(range('A', 'Z'), 20);

        // No corresponding item.
        expect(tree.has(item('b'))).toBe(false);

        // Items and ranges that fall inside an existing range also don't get
        // picked up.
        expect(tree.has(item('M'))).toBe(false);
        expect(tree.has(range('J', 'K'))).toBe(false);
      });
    });

    describe('empty', () => {
      it('starts off true', () => {
        expect(tree.empty).toBe(true);
      });

      it('returns true when the tree is non-empty', () => {
        tree.put(item('a'), 10);
        expect(tree.empty).toBe(false);
      });
    });

    describe('max()', () => {
      it('starts off null', () => {
        expect(tree.max()).toBe(null);
      });

      it('returns the largest item, ordered by `low`', () => {
        const j = item('j');
        tree.put(j, 100);
        expect(tree.max()).toEqual(j);

        const az = range('a', 'z');
        tree.put(az, 10);
        expect(tree.max()).toEqual(j);

        const curly = item('{');
        tree.put(curly, 200);
        expect(tree.max()).toEqual(curly);
      });
    });

    describe('min()', () => {
      it('starts off null', () => {
        expect(tree.min()).toBe(null);
      });

      it('returns the smallest item, ordered by `low`', () => {
        const j = item('j');
        tree.put(j, 100);
        expect(tree.min()).toEqual(j);

        const az = range('a', 'z');
        tree.put(az, 10);
        expect(tree.min()).toEqual(az);

        const curly = item('{');
        tree.put(curly, 200);
        expect(tree.min()).toEqual(az);
      });
    });

    describe('put()', () => {
      it('overwrites existing keys', () => {
        const a = item('a');

        tree.put(a, 10);
        expect(tree.get(a)).toBe(10);

        tree.put(a, 20);
        expect(tree.get(a)).toBe(20);

        // Note that a range can overwrite an item.
        tree.put(range('a', 'z'), 30);
        expect(tree.get(a)).toBe(30);
      });

      it('updates `maximum` value embedded in keys', () => {
        // For a more visual look at what I'm testing here, see the picture in
        // the `toString()` test below.
        tree.put(item('a'), 1);
        let keys = [...tree.keys()];
        expect(keys.length).toBe(1);
        expect(keys[0].maximum).toEqual(new ComparableString('a'));

        tree.put(item('0'), 2);
        keys = [...tree.keys()];
        expect(keys.length).toBe(2);
        expect(keys[0].maximum).toEqual(new ComparableString('0'));
        expect(keys[1].maximum).toEqual(new ComparableString('a'));

        tree.put(range('A', 'Z'), 3);
        keys = [...tree.keys()];
        expect(keys.length).toBe(3);
        expect(keys[0].maximum).toEqual(new ComparableString('0'));
        expect(keys[1].maximum).toEqual(new ComparableString('a'));
        expect(keys[2].maximum).toEqual(new ComparableString('a'));

        tree.put(range('x', 'z'), 4);
        keys = [...tree.keys()];
        expect(keys.length).toBe(4);
        expect(keys[0].maximum).toEqual(new ComparableString('0'));
        expect(keys[1].maximum).toEqual(new ComparableString('z'));
        expect(keys[2].maximum).toEqual(new ComparableString('a'));
        expect(keys[3].maximum).toEqual(new ComparableString('z'));
      });
    });

    describe('search()', () => {
      it('returns nothing when the tree is empty', () => {
        expect(tree.search(item('a'))).toEqual([]);
      });

      it('returns nothing when there is no overlap', () => {
        tree.put(range('l', 'p'), 10);

        // Too far to the left.
        expect(tree.search(range('a', 'c'))).toEqual([]);
        expect(tree.search(item('a'))).toEqual([]);

        // Too far to the right.
        expect(tree.search(range('x', 'z'))).toEqual([]);
        expect(tree.search(item('z'))).toEqual([]);
      });

      it('returns an exactly matching item', () => {
        const g = item('g');
        tree.put(g, 10);
        expect(tree.search(g)).toEqual([[g, 10]]);
      });

      it('returns an exactly matching range', () => {
        const xz = range('x', 'z');
        tree.put(xz, 5);
        expect(tree.search(xz)).toEqual([[xz, 5]]);
      });

      it('returns a range when an item falls on its left edge', () => {
        const hl = range('h', 'l');
        tree.put(hl, 1);
        expect(tree.search(item('h'))).toEqual([[hl, 1]]);
      });

      it('returns a range when an item falls on its right edge', () => {
        const hl = range('h', 'l');
        tree.put(hl, 2);
        expect(tree.search(item('l'))).toEqual([[hl, 2]]);
      });

      it('returns a range when an item falls inside it', () => {
        const hl = range('h', 'l');
        tree.put(hl, 3);
        expect(tree.search(item('j'))).toEqual([[hl, 3]]);
      });

      it('returns multiple ranges coinciding with an item', () => {
        const az = range('a', 'z');
        const by = range('b', 'y');
        const cp = range('c', 'p');
        const lx = range('l', 'x');

        tree.put(az, 10);
        tree.put(by, 20);
        tree.put(cp, 30);
        tree.put(lx, 40);

        expect(tree.search(item('m'))).toEqual([[az, 10], [by, 20], [cp, 30], [
          lx,
          40,
        ]]);
      });

      it('returns a range overlapping with an interval to its left', () => {
        const ht = range('h', 't');
        tree.put(ht, 100);

        expect(tree.search(range('d', 'i'))).toEqual([[ht, 100]]);
        expect(tree.search(range('d', 'h'))).toEqual([[ht, 100]]);

        // Note the interval has to coincide, not merely "touch".
        expect(tree.search(range('d', 'g'))).toEqual([]);
      });

      it('returns a range overlapping with an interval to its right', () => {
        const ht = range('h', 't');
        tree.put(ht, 200);

        expect(tree.search(range('s', 'w'))).toEqual([[ht, 200]]);
        expect(tree.search(range('t', 'w'))).toEqual([[ht, 200]]);

        // Note the interval has to coincide, not merely "touch".
        expect(tree.search(range('u', 'w'))).toEqual([]);
      });

      it('returns a range overlapping with a smaller range inside it', () => {
        const sw = range('s', 'w');
        tree.put(sw, 0);

        expect(tree.search(range('u', 'v'))).toEqual([[sw, 0]]);
      });

      it('returns a range overlapping with a larger range around it', () => {
        const sw = range('s', 'w');
        tree.put(sw, 1);

        expect(tree.search(range('a', 'z'))).toEqual([[sw, 1]]);
      });

      it('returns multiple ranges coinciding with a range', () => {
        const AC = range('A', 'C');
        const az = range('a', 'z');
        const by = range('b', 'y');
        const cp = range('c', 'p');
        const lx = range('l', 'x');
        const wz = range('w', 'z');

        tree.put(AC, 0);
        tree.put(az, 10);
        tree.put(by, 20);
        tree.put(cp, 30);
        tree.put(lx, 40);
        tree.put(wz, 50);

        expect(tree.search(range('m', 'v'))).toEqual([[az, 10], [by, 20], [
          cp,
          30,
        ], [lx, 40]]);
      });
    });

    describe('toString()', () => {
      it('includes low/high/maximum in representation of keys', () => {
        tree.put(item('a'), 1);
        tree.put(item('0'), 2);
        tree.put(range('A', 'Z'), 3);
        tree.put(range('x', 'z'), 4);
        expect(tree.toString()).toBe(
          dedent`
             [A,Z]:z
            ┌───┴──┐
          [0]:0 [x,z]:z
           ┌┴┐    ┏┹──┐
           · ·  [a]:a ·
                 ┌┴┐
                 · ·
        ` + '\n',
        );
      });
    });

    describe('root', () => {
      it('returns the tree root', () => {
        tree.put(item('a'), 1);
        tree.put(item('z'), 2);
        expect(tree.root?.key).toEqual(item('z'));
      });

      it('returns null when the tree is empty', () => {
        expect(tree.root).toBe(null);
      });
    });

    describe('size', () => {
      it('returns the number of nodes in the tree', () => {
        expect(tree.size).toBe(0);
        tree.put(item('hello'), 10);
        expect(tree.size).toBe(1);
      });
    });
  });
});

// Convenience function that returns an interval containing a single item.
function item(value: string, maximum?: string): Interval<ComparableString> {
  return new Interval(
    new ComparableString(value),
    new ComparableString(value),
    new ComparableString(maximum ?? value),
  );
}

// Convenience function that returns an interval representing a range.
function range(
  low: string,
  high: string,
  maximum?: string,
): Interval<ComparableString> {
  return new Interval(
    new ComparableString(low),
    new ComparableString(high),
    new ComparableString(maximum ?? high),
  );
}
