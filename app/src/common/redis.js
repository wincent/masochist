/**
 * @flow
 */

import Promise from 'bluebird';
import redis from 'redis';
import common from '../../../shared/common';
import {string} from '../common/checks';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const KEY_PREFIX = common.redisKeyPrefix;;

/**
 * Can manually force cache invalidation by bumping this.
 *
 * NOTE: if you update this, you need to update the version in the wikiserve
 * project as well (by deploying).
 */
const CACHE_VERSION = common.redisCacheVersion;

const redisClient = redis.createClient();

function prefixKey(key: string): string {
  return KEY_PREFIX + ':' + CACHE_VERSION + ':' + key;
}

const client = {
  get(key: string): mixed {
    return redisClient.getAsync(prefixKey(key));
  },

  multi(commands: Array<Array<mixed>>): Array<mixed> {
    const commandsWithPrefixedKeys = commands.map(
      // No Flow support yet for tuples with varags..
      ([command, key, ...args]) => [command, prefixKey(string(key)), ...args]
    );
    return redisClient.multi(commandsWithPrefixedKeys).execAsync();
  },
};

export default client;
