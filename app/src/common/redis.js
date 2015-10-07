import Promise from 'bluebird';
import redis from 'redis';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

export const KEY_PREFIX = 'masochist';

const client = redis.createClient();

export function getKey(key: string): string {
  return KEY_PREFIX + ':' + key;
}

export function getClient() {
  return client;
}
