import Promise from 'bluebird';
import redis from 'redis';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const KEY_PREFIX = 'masochist';

/**
 * Can manually force cache invalidation by bumping this.
 *
 * NOTE: if you update this, you need to update the version in the wikiserve
 * project as well.
 */
const CACHE_VERSION = '2';

const client = redis.createClient();

export function getKey(key: string): string {
  return KEY_PREFIX + ':' + CACHE_VERSION + ':' + key;
}

export function getClient() {
  return client;
}
