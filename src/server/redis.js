import {string} from '../common/checks';
import RedisConnectionPool from './redis/RedisConnectionPool';
import {REDIS_CACHE_VERSION, REDIS_KEY_PREFIX} from '../server/constants';

const {client} = new RedisConnectionPool();

function prefixKey(key) {
  return REDIS_KEY_PREFIX + ':' + REDIS_CACHE_VERSION + ':' + key;
}

export default {
  get(key) {
    return client.get(prefixKey(key));
  },

  multi(commands) {
    const commandsWithPrefixedKeys = commands.map(([command, key, ...args]) => [
      command,
      prefixKey(string(key)),
      ...args,
    ]);
    return client.multi(commandsWithPrefixedKeys);
  },
};
