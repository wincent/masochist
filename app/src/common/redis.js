import Promise from 'bluebird';
import redis from 'redis';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const KEY_PREFIX = 'masochist';

/**
 * Can manually force cache invalidation by bumping this.
 */
const CACHE_VERSION = '2';

const client = redis.createClient();

export function getKey(key: string): string {
  return KEY_PREFIX + ':' + CACHE_VERSION + ':' + key;
}

export function getClient() {
  return client;
}
