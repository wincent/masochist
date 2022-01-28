import {invariant} from '@masochist/common';

import IntervalTree, {IntervalNode} from '../IntervalTree';
import {NONE} from '../NFA/NFA';

import type {NFA} from '../NFA/NFA';
import type {Anything, Atom, Range} from '../RegExp/RegExpParser';

describe('IntervalTree', () => {
  let tree: IntervalTree;

  beforeEach(() => {
    tree = new IntervalTree();
  });

  describe('low-level RedBlackTree methods', () => {
    describe('isEmpty()', () => {
      it('starts off true', () => {
        expect(tree.isEmpty()).toBe(true);
      });
    });

    describe('max()', () => {
      it('starts off null', () => {
        expect(tree.max()).toBe(null);
      });
    });

    describe('min()', () => {
      it('starts off null', () => {
        expect(tree.min()).toBe(null);
      });
    });

    describe('put()', () => {
      it('can put an atom', () => {
        const s0 = state(0);
        tree.put(new IntervalNode(atom('x')), s0);
        expect(tree.isEmpty()).toBe(false);
        expect(tree.size).toBe(1);

        const keys = [...tree.keys()];
        expect(keys.length).toBe(1);

        const key = keys[0];
        expect(key).toBeInstanceOf(IntervalNode);
        expect(key.low).toBe(charCode('x'));
        expect(key.high).toBe(charCode('x'));
        expect(key.maximum).toBe(charCode('x'));

        const value = tree.get(key);
        expect(value).toEqual(s0);
      });

      it('can put a range', () => {
        const s0 = state(0);
        tree.put(new IntervalNode(range('a', 'z')), s0);
        expect(tree.isEmpty()).toBe(false);
        expect(tree.size).toBe(1);

        const keys = [...tree.keys()];
        expect(keys.length).toBe(1);

        const key = keys[0];
        expect(key).toBeInstanceOf(IntervalNode);
        expect(key.low).toBe(charCode('a'));
        expect(key.high).toBe(charCode('z'));
        expect(key.maximum).toBe(charCode('z'));

        const value = tree.get(key);
        expect(value).toEqual(s0);
      });

      it('can put an "Anything" range', () => {
        const s0 = state(0);
        tree.put(new IntervalNode(anything()), s0);
        expect(tree.isEmpty()).toBe(false);
        expect(tree.size).toBe(1);

        const keys = [...tree.keys()];
        expect(keys.length).toBe(1);

        const key = keys[0];
        expect(key).toBeInstanceOf(IntervalNode);
        expect(key.low).toBe(0x0000);
        expect(key.high).toBe(0xffff);
        expect(key.maximum).toBe(0xffff);

        const value = tree.get(key);
        expect(value).toEqual(s0);
      });

      it('can hold multiple values', () => {
        const s0 = state(0);
        const s1 = state(1);
        const s2 = state(1);
        tree.put(new IntervalNode(range('a', 'z')), s0);
        tree.put(new IntervalNode(range('A', 'Z')), s1);
        tree.put(new IntervalNode(range('0', '9')), s2);
        expect(tree.size).toBe(3);

        const keys = [...tree.keys()];
        expect(keys.length).toBe(3);

        expect(keys[0]).toBeInstanceOf(IntervalNode);
        expect(keys[0].low).toBe(charCode('0'));
        expect(keys[0].high).toBe(charCode('9'));
        expect(keys[0].maximum).toBe(charCode('9'));

        expect(keys[1]).toBeInstanceOf(IntervalNode);
        expect(keys[1].low).toBe(charCode('A'));
        expect(keys[1].high).toBe(charCode('Z'));
        expect(keys[1].maximum).toBe(charCode('z')); // Child has greater.

        expect(keys[2]).toBeInstanceOf(IntervalNode);
        expect(keys[2].low).toBe(charCode('a'));
        expect(keys[2].high).toBe(charCode('z'));
        expect(keys[2].maximum).toBe(charCode('z'));

        expect(tree.get(keys[0])).toEqual(s2);
        expect(tree.get(keys[1])).toEqual(s1);
        expect(tree.get(keys[2])).toEqual(s0);
      });

      it('overwrites values for an existing key', () => {
        const s0 = state(0);
        const s1 = state(1);
        tree.put(new IntervalNode(atom('x')), s0);
        tree.put(new IntervalNode(atom('x')), s1);
        expect(tree.size).toBe(1);

        const keys = [...tree.keys()];
        expect(keys.length).toBe(1);

        const key = keys[0];
        expect(key).toBeInstanceOf(IntervalNode);
        expect(key.low).toBe(charCode('x'));
        expect(key.high).toBe(charCode('x'));
        expect(key.maximum).toBe(charCode('x'));

        const value = tree.get(key);
        expect(value).toEqual(s1);
      });

      // TODO decide whether we want a higher-level insert() method that does
      // things like auto-extend existing ranges (i think we do...)
    });
  });

  it('can store overlapping items', () => {
    const tree = new IntervalTree();
    tree.put(new IntervalNode(atom('j')), state(1));
    tree.put(new IntervalNode(range('a', 'z')), state(2));

    // TODO: plan here is to create an insert() method for this that will:
    //
    // 1.  If given an atom or range, search for any intervals that match (exactly) or
    //     overlap with the value. If found, merge or split (by adjusting payload).
    // 2.  If no match/overlap, insert new value.
    // 3.  At end, should be able to traverse tree to extract all intervals.
    // 4.  Bonus points, may want to look for adjacent values and create
    //     extensions (eg. if we already store "a-d", and somebody wants to add
    //     "e", we should be able to change "a-d" to "a-e" instead of inserting
    //     a separate item; may have to remove then re-insert new to do this).
    //
    // To give concrete example from our `NFAToDFA()`:
    //
    // -  When procesing STRING_VALUE, we have:
    //    -   Range:#-[ going to state 1.
    //    -   Atom:n going to state 3.
    // -  Current code treats those as distinct, but there are actually
    //    overlapping and therefore non-deterministic, but we don't notice and
    //    therefore don't remove the non-determinism.
    // -  So, we have to convert those to:
    //    -   Range:#-m going to state 1.
    //    -   Atom:n going to states 1 and 3 (will remove determinism later).
    //    -   Range:o-[ going to state 1.
    // -  So, we store Range:#-[ in interval tree with value being set of target
    //    states (just 1).
    // -  Then we check Atom:n for overlap and find it. Given that target state 3
    //    is not in the set, we must split the range and reinsert it:
    //    -   If the target state was the same, because Atom:n is entirely inside
    //        the range, we coud just drop it because it is already covered.
    //    -   If the target state was she same but the overlap was partial (eg.
    //        because it was a Range that started inside the other instead of an
    //        Atom), we would remove the Range, extend it, and reinsert it.
    //    -   It the target state was the same and the new interval subsumed the
    //        other, we would just remove and replace it with the bigger
    //        interval.
    //    -   If the target state was different and the overlap was partial,
    //        we'd have to do a more complicated split; left hunk would go to
    //        original state, middle (intersecting) hunk would go to both
    //        states, and right hunk would go to new state.
    //    -   etc... possibly more combos here
    // -  Anyway, for the cited example, the split works like this:
    //    -   Remove interval from tree.
    //    -   Split into left (original target), middle (union targets), and
    //        right (new target); reinsert. By definition, none of those should
    //        overlap with existing items, because we're taking care to
    //        collapse/merge etc on ever instance of overlap/matching.
    // -  The more complicated cases are probably going to be things like ranges
    //    that overlap with multiple intervals; eg. maybe we're storing "a-z",
    //    "A-Z", "0-9" already, each targeting different sets of states, and
    //    along comes a new value like "." (`ANYTHING`) or something with full
    //    overlap of some of the intervals and partial or no overlap with others.
    //    -   In this case I think we just need to process them in order, one at
    //        a time.
  });
});

function anything(): Anything {
  return {kind: 'Anything'};
}

function atom(value: string): Atom {
  return {kind: 'Atom', value};
}

function charCode(string: string): number {
  invariant(string.length === 1);
  return string.charCodeAt(0);
}

function range(from: string, to: string): Range {
  return {kind: 'Range', from, to};
}

function state(...ids: Array<number>): Set<NFA> {
  return new Set(ids.map((id) => ({id, edges: [], flags: NONE})));
}
