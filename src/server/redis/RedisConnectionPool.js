import RedisClient from './RedisClient';

export default class RedisConnectionPool {
  constructor() {
    this._clients = [];
  }

  get client() {
    const clients = this._clients;
    return {
      command(name, ...args) {
        const client = clients.pop() || new RedisClient();
        return client.command(name, ...args).then((result) => {
          clients.push(client);
          return result;
        });
      },
      multi(commands) {
        const client = clients.pop() || new RedisClient();
        return client.multi(commands).then((result) => {
          clients.push(client);
          return result;
        });
      },

      // Commands.

      // See: https://redis.io/commands/get
      get(key) {
        return this.command('GET', key);
      },

      // See: https://redis.io/commands/set
      set(key, value) {
        return this.command('SET', key, value);
      },

      // See: https://redis.io/commands/zadd
      zadd(key, score, member) {
        return this.command('ZADD', key, score, member);
      },

      // See: https://redis.io/commands/zcard
      zcard(key) {
        return this.command('ZCARD', key);
      },

      // See: https://redis.io/commands/zincrby
      zincrby(key, increment, member) {
        return this.command('ZINCRBY', key, increment, member);
      },

      // See: https://redis.io/commands/zrem
      zrem(key, member) {
        return this.command('ZREM', key, member);
      },

      // See: https://redis.io/commands/zremrangebyscore
      zremrangebyscore(key, min, max) {
        return this.command('ZREMRANGEBYSCORE', key, min, max);
      },

      // ZREVRANGE is deprecated, so we translate it to ZRANGE.
      // See: https://redis.io/commands/zrevrange
      zrevrange(key, start, stop) {
        return this.command('ZRANGE', key, start, stop, 'REV');
      },
    };
  }
}
