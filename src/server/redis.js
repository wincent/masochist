/**
 * @flow
 */

import redis from 'redis';
import {promisify} from 'util';
import {string} from '../common/checks';
import {REDIS_CACHE_VERSION, REDIS_KEY_PREFIX} from '../server/constants';

redis.RedisClient.prototype.getAsync = promisify(
  redis.RedisClient.prototype.get,
);
redis.Multi.prototype.execAsync = promisify(redis.Multi.prototype.exec);

const redisClient = redis.createClient();

function prefixKey(key: string): string {
  return REDIS_KEY_PREFIX + ':' + REDIS_CACHE_VERSION + ':' + key;
}

export default {
  get(key: string): Promise<mixed> {
    return redisClient.getAsync(prefixKey(key));
  },

  multi(commands: Array<Array<mixed>>): Promise<Array<mixed>> {
    const commandsWithPrefixedKeys = commands.map(
      // No Flow support yet for tuples with varags..
      ([command, key, ...args]) => [command, prefixKey(string(key)), ...args],
    );
    return redisClient.multi(commandsWithPrefixedKeys).execAsync();
  },
};
