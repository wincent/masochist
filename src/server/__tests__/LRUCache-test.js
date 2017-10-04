import LRUCache from '../LRUCache';

let cache;

beforeEach(() => {
  cache = new LRUCache(3);
});

describe('get()', () => {
  it('returns undefined for unset keys', () => {
    expect(cache.get('foo')).toBe(undefined);
  });

  it('returns a previously set value', () => {
    cache.set('a', '#a');
    expect(cache.get('a')).toBe('#a');
  });
});

describe('has()', () => {
  it('returns false for missing keys', () => {
    expect(cache.has('foo')).toBe(false);
  });

  it('returns true for present keys', () => {
    cache.set('foo', 1);
    expect(cache.has('foo')).toBe(true);
  });
});

describe('set()', () => {
  it('evicts old items', () => {
    // Populate the cache.
    cache.set('a', '#a');
    cache.set('b', '#b');
    cache.set('c', '#c');
    expect(cache.has('a')).toBe(true);
    expect(cache.has('b')).toBe(true);
    expect(cache.has('c')).toBe(true);

    // Cause an eviction.
    cache.set('d', '#d');
    expect(cache.has('a')).toBe(false);
    expect(cache.has('b')).toBe(true);
    expect(cache.has('c')).toBe(true);
    expect(cache.has('d')).toBe(true);
  });
});
