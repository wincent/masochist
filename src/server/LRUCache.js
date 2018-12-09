/**
 * @flow
 */

const DEFAULT_CAPACITY = 128;

export default class LRUCache<TKey> {
  _capacity: number;
  _storage: Map<TKey, *>;

  constructor(capacity: number = DEFAULT_CAPACITY) {
    if (capacity <= 0) {
      throw new Error(`LRUCache: non-positive capacity ${capacity}`);
    }
    this._capacity = capacity;
    this._storage = new Map();
  }

  has(key: TKey): boolean {
    return this._storage.has(key);
  }

  get(key: TKey): mixed {
    // Bump item in LRU list by removing and re-adding it.
    if (this._storage.has(key)) {
      const value = this._storage.get(key);
      this._storage.delete(key);
      this._storage.set(key, value);
      return value;
    }
  }

  set(key: TKey, value: mixed): LRUCache<TKey> {
    // If necessary to stay under capacity, remove LRU items.
    if (this._storage.size >= this._capacity) {
      let countToRemove = this._storage.size - this._capacity;
      const keysToRemove = [];
      for (let [k, v] of this._storage) {
        keysToRemove.push(k);
        if (!countToRemove) {
          break;
        }
        countToRemove--;
      }
      keysToRemove.forEach(k => this._storage.delete(k));
    }

    // Add the new item.
    this._storage.set(key, value);
    return this;
  }
}
