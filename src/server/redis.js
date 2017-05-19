/**
 * @flow
 */

import Promise from 'bluebird';
import redis from 'redis';
import {string} from '../common/checks';
import {REDIS_CACHE_VERSION, REDIS_KEY_PREFIX} from '../server/constants';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient();

function prefixKey(key: string): string {
  return REDIS_KEY_PREFIX + ':' + REDIS_CACHE_VERSION + ':' + key;
}

export default {
  get(key: string): mixed {
    return redisClient.getAsync(prefixKey(key));
  },

  multi(commands: Array<Array<mixed>>): Array<mixed> {
    const commandsWithPrefixedKeys = commands.map(
      // No Flow support yet for tuples with varags..
      ([command, key, ...args]) => [command, prefixKey(string(key)), ...args],
    );
    return redisClient.multi(commandsWithPrefixedKeys).execAsync();
  },
};
