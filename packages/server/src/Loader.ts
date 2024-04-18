import {nullthrows} from '@masochist/common';

type BatchLoader<T, K> = (keys: Array<K>) => Promise<Array<T | Error>>;

/**
 * Lightweight Dataloader (https://github.com/graphql/dataloader) replacement.
 *
 * Abstracts over a batch loader function that takes an array of keys of type
 * `K` and returns (a Promise of) objects of type `T`.
 */
export default class Loader<T, K = string> {
  _cache: Map<K, T | Error>;
  _loader: BatchLoader<T, K>;
  _batch: Array<K> | null;

  constructor(loader: BatchLoader<T, K>) {
    this._cache = new Map();
    this._loader = loader;
    this._batch = null;
  }

  async load(key: K): Promise<T | Error> {
    const [result] = await this.loadMany([key]);
    return result;
  }

  loadMany(keys: Array<K>): Promise<Array<T | Error>> {
    return new Promise((resolve) => {
      if (this._batch) {
        // A microtask has been scheduled but not started yet; add to it.
        this._batch.push(...keys);
      } else {
        // Create a new batch.
        this._batch = [...keys];

        // Schedule it.
        queueMicrotask(async () => {
          const batch = nullthrows(this._batch);
          this._batch = null;

          const uncached = batch.filter((key) => !this._cache.has(key));
          if (uncached.length) {
            const results = await this._loader(uncached);
            if (results.length !== uncached.length) {
              throw new Error(
                `loadMany(): loader function returned count (${results.length}) did not match expected (${uncached.length})`,
              );
            }
            uncached.forEach((key, i) => {
              this._cache.set(key, results[i]);
            });
          }

          resolve(keys.map((key) => nullthrows(this._cache.get(key))));
        });
      }
    });
  }
}
