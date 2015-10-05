/**
 * @flow
 */

import Memcached from 'memcached';

const memcached = new Memcached('localhost:11211');

/**
 * Can manually force cache invalidation by bumping this.
 *
 * May one day consider using deployed hash instead.
 */
const CACHE_VERSION = '1';

/**
 * In __DEV__ we invalidate the cache automatically on boot (ie. when this
 * module is first evaluated), by using this time-dependent seed value.
 */
const STARTUP_SEED = Date.now().toString(36);

function getCacheBreaker(): string {
  if (__DEV__) {
    return STARTUP_SEED;
  } else {
    return CACHE_VERSION;
  }
}

// TODO: degrade more gracefully if memcached goes down (currently we just wait
// forever(?))
const Cache = {
  get(key: string, missCallback: Promise<value, Error>): Promise<value, Error> {
    key = key + getCacheBreaker();

    return new Promise((resolve, reject) => {
      memcached.get(key, (error, data) => {
        if (error) {
          reject(error);
        } else if (data) {
          resolve(data);
        } else {
          missCallback(key).then(
            result => {
              memcached.set(key, result, 0, error => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              });
            },
            reject,
          );
        }
      });
    });
  },
};

export default Cache;
