import {describe, expect, it} from 'bun:test';

import Pool from '../Pool';

describe('Pool', () => {
  function getPool() {
    let member = 0;
    const addMember = () => member++;
    return {
      pool: new Pool(5, addMember),
      get nextMember() {
        return member;
      },
    };
  }

  it('requires a positive size', () => {
    expect(() => new Pool(-1, () => true)).toThrow(/size must be positive/);
    expect(() => new Pool(0, () => true)).toThrow(/size must be positive/);
    expect(() => new Pool(1, () => true)).not.toThrow();
  });

  it('returns `size` members in least-recently used order', () => {
    const {pool} = getPool();

    // First time around the pool.
    expect(pool.next()).toBe(0);
    expect(pool.next()).toBe(1);
    expect(pool.next()).toBe(2);
    expect(pool.next()).toBe(3);
    expect(pool.next()).toBe(4);

    // Second time around the pool.
    expect(pool.next()).toBe(0);
    expect(pool.next()).toBe(1);
    expect(pool.next()).toBe(2);
    expect(pool.next()).toBe(3);
    expect(pool.next()).toBe(4);
  });

  describe('next()', () => {
    it('creates items lazily', () => {
      const instance = getPool();
      expect(instance.nextMember).toBe(0);
      expect(instance.pool.next()).toBe(0); // Pool now contains `0`.
      expect(instance.nextMember).toBe(1);
      instance.pool.remove(1); // At this point, member `1` doesn't exist yet.
      expect(instance.pool.next()).toBe(1); // Pool now contains `0`, `1`.
      expect(instance.nextMember).toBe(2);
    });
  });

  describe('remove()', () => {
    it('does nothing if item is not in pool', () => {
      const {pool} = getPool();

      expect(() => pool.remove(100)).not.toThrow();
    });

    it('removes an item from the pool', () => {
      const {pool} = getPool();

      // Fill the pool.
      expect(pool.next()).toBe(0);
      expect(pool.next()).toBe(1);
      expect(pool.next()).toBe(2);
      expect(pool.next()).toBe(3);
      expect(pool.next()).toBe(4);

      // Remove some items, causing the pool to be non-full.
      pool.remove(2);
      pool.remove(4);

      // Observe how pool refills.
      expect(pool.next()).toBe(5);
      expect(pool.next()).toBe(6);
      expect(pool.next()).toBe(0);
      expect(pool.next()).toBe(1);
      expect(pool.next()).toBe(3);
    });
  });
});
