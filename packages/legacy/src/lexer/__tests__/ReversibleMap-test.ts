import {beforeEach, describe, expect, it} from '@jest/globals';

import ReversibleMap from '../ReversibleMap';

function call(fn: unknown) {
  if (typeof fn === 'function') {
    fn();
  } else {
    throw new Error('Expected a function');
  }
}

describe('ReversibleMap()', () => {
  let map: ReversibleMap<string, unknown>;

  beforeEach(() => {
    map = new ReversibleMap([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });

  describe('undo', () => {
    it('is a list of operations that reverse previous mutations', () => {
      map.set('d', 4);
      map.set('a', 0);
      map.delete('b');
      map.clear();

      expect(map.undo.length).toBe(4);

      expect([...map.entries()]).toEqual([]);

      call(map.undo[3]);

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['c', 3],
        ['d', 4],
      ]);

      call(map.undo[2]);

      expect([...map.entries()]).toEqual([
        ['a', 0],
        ['b', 2],
        ['c', 3],
        ['d', 4],
      ]);

      call(map.undo[1]);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
      ]);

      call(map.undo[0]);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]);
    });
  });

  describe('checkpoint()', () => {
    it('records a target for a future rollback', () => {
      map.set('d', 4);
      map.checkpoint();
      map.set('e', 5);
      map.checkpoint();
      map.set('f', 6);

      expect(map.undo.length).toBe(5);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
      ]);

      // Goes as far back as previous checkpoint (the 2nd) and removes it.
      map.rollback();

      expect(map.undo.length).toBe(3);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
      ]);

      // Goes to previous checkpoint (the 1st) and removes it.
      map.rollback();

      expect(map.undo.length).toBe(1);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
      ]);

      // Completely flushes the queue (no more checkpoints).
      map.rollback();

      expect(map.undo.length).toBe(0);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]);
    });

    it('removes the checkpoint if already at one', () => {
      map.set('d', 4);
      map.checkpoint();

      expect(map.undo.length).toBe(2);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
      ]);

      map.rollback();

      expect(map.undo.length).toBe(1);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
      ]);

      map.rollback();

      expect(map.undo.length).toBe(0);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ]);
    });
  });

  describe('commit()', () => {
    it('makes all pending changes final', () => {
      map.set('done', true);

      map.commit();

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['done', true],
      ]);

      map.rollback();

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['done', true],
      ]);
    });
  });

  describe('rollback()', () => {
    it('only performs a shallow rollback', () => {
      const deep: Array<string> = [];

      map.set('deep', deep);
      map.checkpoint();
      deep.push('stuff');
      map.set('other', null);

      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['deep', ['stuff']],
        ['other', null],
      ]);

      map.rollback();

      // Doesn't rollback mutation inside `deep` value.
      expect([...map.entries()]).toEqual([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['deep', ['stuff']],
      ]);
    });
  });
});
