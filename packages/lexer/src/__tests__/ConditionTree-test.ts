import {beforeEach, describe, expect, it} from '@jest/globals';
import {dedent, invariant} from '@masochist/common';

import ConditionTree, {CharCode} from '../ConditionTree';
import {Interval} from '../IntervalTree';
import {NONE} from '../NFA/NFA';

import type {NFA} from '../NFA/NFA';
import type {Anything, Atom, Range} from '../RegExp/RegExpParser';

describe('ConditionTree', () => {
  let tree: ConditionTree;

  beforeEach(() => {
    tree = new ConditionTree();
  });

  it('can store atoms', () => {
    const s0 = state(0);
    tree.add({on: atom('x'), to: s0});
    expect(tree.isEmpty()).toBe(false);
    expect(tree.size).toBe(1);

    const entries = [...tree.entries()];
    expect(entries.length).toBe(1);

    const [key, value] = entries[0];

    expect(key).toBeInstanceOf(Interval);
    expect(key.low).toEqual(charCode('x'));
    expect(key.high).toEqual(charCode('x'));
    expect(key.maximum).toEqual(charCode('x'));

    expect(value).toEqual(new Set([s0]));

    // When we add a duplicate condition leading to a different target, the Set
    // grows.
    const s1 = state(1);
    tree.add({on: atom('x'), to: s1});

    expect(tree.size).toBe(1);
    expect(tree.get(key)).toEqual(new Set([s0, s1]));
  });

  it('can store ranges', () => {
    const s0 = state(0);
    tree.add({on: range('a', 'z'), to: s0});
    expect(tree.isEmpty()).toBe(false);
    expect(tree.size).toBe(1);

    const entries = [...tree.entries()];
    expect(entries.length).toBe(1);

    const [key, value] = entries[0];
    expect(key).toBeInstanceOf(Interval);
    expect(key.low).toEqual(charCode('a'));
    expect(key.high).toEqual(charCode('z'));
    expect(key.maximum).toEqual(charCode('z'));

    expect(value).toEqual(new Set([s0]));

    // When we add a duplicate condition leading to a different target, the Set
    // grows.
    const s1 = state(1);
    tree.add({on: range('a', 'z'), to: s1});

    expect(tree.size).toBe(1);
    expect(tree.get(key)).toEqual(new Set([s0, s1]));
  });

  it('can store "Anything" ranges', () => {
    const s0 = state(0);
    tree.add({on: anything(), to: s0});
    expect(tree.isEmpty()).toBe(false);
    expect(tree.size).toBe(1);

    const entries = [...tree.entries()];
    expect(entries.length).toBe(1);

    const [key, value] = entries[0];
    expect(key).toBeInstanceOf(Interval);
    expect(key.low).toEqual(charCode(0x0000));
    expect(key.high).toEqual(charCode(0xffff));
    expect(key.maximum).toEqual(charCode(0xffff));

    expect(value).toEqual(new Set([s0]));

    // When we add a duplicate condition leading to a different target, the Set
    // grows.
    const s1 = state(1);
    tree.add({on: anything(), to: s1});

    expect(tree.size).toBe(1);
    expect(tree.get(key)).toEqual(new Set([s0, s1]));
  });

  it('can hold multiple values', () => {
    const s0 = state(0);
    const s1 = state(1);
    const s2 = state(1);
    tree.add({on: range('a', 'z'), to: s0});
    tree.add({on: range('A', 'Z'), to: s1});
    tree.add({on: range('0', '9'), to: s2});
    expect(tree.size).toBe(3);

    const keys = [...tree.keys()];
    expect(keys.length).toBe(3);

    expect(keys[0]).toBeInstanceOf(Interval);
    expect(keys[0].low).toEqual(charCode('0'));
    expect(keys[0].high).toEqual(charCode('9'));
    expect(keys[0].maximum).toEqual(charCode('9'));

    expect(keys[1]).toBeInstanceOf(Interval);
    expect(keys[1].low).toEqual(charCode('A'));
    expect(keys[1].high).toEqual(charCode('Z'));
    expect(keys[1].maximum).toEqual(charCode('z')); // Child has greater.

    expect(keys[2]).toBeInstanceOf(Interval);
    expect(keys[2].low).toEqual(charCode('a'));
    expect(keys[2].high).toEqual(charCode('z'));
    expect(keys[2].maximum).toEqual(charCode('z'));

    expect(tree.get(keys[0])).toEqual(new Set([s2]));
    expect(tree.get(keys[1])).toEqual(new Set([s1]));
    expect(tree.get(keys[2])).toEqual(new Set([s0]));
  });

  it('can store overlapping items', () => {
    // Specifically, it splits overlaps into overlapping and non-overlapping
    // parts, merging the former's targets together.
    const tree = new ConditionTree();
    const s0 = state(0);
    tree.add({on: range('#', '['), to: s0});
    const s1 = state(1);
    tree.add({on: range('0', '9'), to: s1});
    const s2 = state(2);
    tree.add({on: range('A', 'F'), to: s2});
    const s3 = state(3);
    tree.add({on: range('a', 'f'), to: s3});
    const s4 = state(4);
    tree.add({on: atom('b'), to: s4});
    const s5 = state(5);
    tree.add({on: atom('f'), to: s5});
    const s6 = state(6);
    tree.add({on: atom('n'), to: s6});
    const s7 = state(7);
    tree.add({on: atom('r'), to: s7});
    const s8 = state(8);
    tree.add({on: atom('t'), to: s8});

    expect(tree.toString()).toEqual(
      dedent`
                           [c,e]:t
                        ┏━━━━━━┹──────────────────┐
                    [A,F]:b                     [n]:t
              ┌─────────┴────────┐            ┌───┴──┐
          [0,9]:@              [a]:b        [f]:f  [t]:t
        ┌─────┴───┐           ┌──┴──────┐    ┌┴┐    ┏┹──┐
     [#,/]:/ [0x3a,@]:@ [G,0x5b]:0x5b [b]:b  · ·  [r]:r ·
       ┌┴┐      ┌┴┐          ┌┴┐       ┌┴┐         ┌┴┐
       · ·      · ·          · ·       · ·         · ·
    ` + '\n',
    );

    // Another way of visualizing this, with the help of `man ascii`:
    //
    // 0x23 - 0x5b = # - [                        0x23 - 0x2f = # - /
    // 0x30 - 0x39 = 0 - 9                        0x30 - 0x39 = 0 - 9
    // 0x41 - 0x46 = A - F        with            0x3a - 0x40 = : - @
    // 0x61 - 0x66 = a - f        overlaps        0x41 - 0x46 = A - F
    // 0x62        = b            removed:        0x47 - 0x5b = G - [
    // 0x66        = f                            0x61        = a
    // 0x6e        = n                            0x62        = b
    // 0x72        = r                            0x63 - 0x65 = c - e
    // 0x74        = t                            0x66        = f
    //                                            0x6e        = n
    //                                            0x72        = r
    //                                            0x74        = t

    expect(tree.size).toBe(12);

    const entries = [...tree.entries()];
    expect(entries[0][0].low).toEqual(charCode('#'));
    expect(entries[0][0].high).toEqual(charCode('/'));
    expect(entries[0][1]).toEqual(new Set([s0]));

    expect(entries[1][0].low).toEqual(charCode('0'));
    expect(entries[1][0].high).toEqual(charCode('9'));
    expect(entries[1][1]).toEqual(new Set([s0, s1]));

    expect(entries[2][0].low).toEqual(charCode(':'));
    expect(entries[2][0].high).toEqual(charCode('@'));
    expect(entries[2][1]).toEqual(new Set([s0]));

    expect(entries[3][0].low).toEqual(charCode('A'));
    expect(entries[3][0].high).toEqual(charCode('F'));
    expect(entries[3][1]).toEqual(new Set([s0, s2]));

    expect(entries[4][0].low).toEqual(charCode('G'));
    expect(entries[4][0].high).toEqual(charCode('['));
    expect(entries[4][1]).toEqual(new Set([s0]));

    expect(entries[5][0].low).toEqual(charCode('a'));
    expect(entries[5][0].high).toEqual(charCode('a'));
    expect(entries[5][1]).toEqual(new Set([s3]));

    expect(entries[6][0].low).toEqual(charCode('b'));
    expect(entries[6][0].high).toEqual(charCode('b'));
    expect(entries[6][1]).toEqual(new Set([s3, s4]));

    expect(entries[7][0].low).toEqual(charCode('c'));
    expect(entries[7][0].high).toEqual(charCode('e'));
    expect(entries[7][1]).toEqual(new Set([s3]));

    expect(entries[8][0].low).toEqual(charCode('f'));
    expect(entries[8][0].high).toEqual(charCode('f'));
    expect(entries[8][1]).toEqual(new Set([s3, s5]));

    expect(entries[9][0].low).toEqual(charCode('n'));
    expect(entries[9][0].high).toEqual(charCode('n'));
    expect(entries[9][1]).toEqual(new Set([s6]));

    expect(entries[10][0].low).toEqual(charCode('r'));
    expect(entries[10][0].high).toEqual(charCode('r'));
    expect(entries[10][1]).toEqual(new Set([s7]));

    expect(entries[11][0].low).toEqual(charCode('t'));
    expect(entries[11][0].high).toEqual(charCode('t'));
    expect(entries[11][1]).toEqual(new Set([s8]));
  });
});

// Convenience functions.

function anything(): Anything {
  return {kind: 'Anything'};
}

function atom(value: string): Atom {
  return {kind: 'Atom', value};
}

function charCode(charCodeish: number | string): CharCode {
  if (typeof charCodeish === 'number') {
    return new CharCode(charCodeish);
  } else {
    invariant(charCodeish.length === 1);
    return new CharCode(charCodeish.charCodeAt(0));
  }
}

function range(from: string, to: string): Range {
  return {kind: 'Range', from, to};
}

function state(id: number): NFA {
  return {id, edges: [], flags: NONE};
}

// function state(...ids: Array<number>): Set<NFA> {
//   return new Set(ids.map((id) => ({id, edges: [], flags: NONE})));
// }
