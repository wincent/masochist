import RedisConnectionPool from './redis/RedisConnectionPool';

import type {Command} from './redis/RedisClient';

const pool = new RedisConnectionPool();

/**
 * Convenience singleton Redis interface.
 */
export default {
  get(key: string) {
    return pool.client.get(key);
  },

  multi(commands: Array<[Command, ...Array<string | number>]>) {
    return pool.client.multi(commands);
  },

  ping() {
    return pool.client.ping();
  },

  set(key: string, value: string) {
    return pool.client.set(key, value);
  },
};
