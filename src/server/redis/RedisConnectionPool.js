import RedisClient from './RedisClient';

class PeekableSet extends Set {
  // Meh. In typical usage, there will be no errors, and we'll use the same
  // client over and over...
  peek() {
    for (const item of this) {
      return item;
    }
    return null;
  }
}

export default class RedisConnectionPool {
  constructor() {
    this._clients = new PeekableSet();
  }

  get client() {
    const withClient = async (callback) => {
      const clients = this._clients;
      const client = clients.peek() || new RedisClient();
      const dispose = () => clients.delete(client);
      client.once('destroy', dispose);
      try {
        const result = await callback(client);
        clients.add(client);
        return result;
      } finally {
        client.removeListener('destroy', dispose);
      }
    };

    return {
      async command(name, ...args) {
        return withClient((client) => client.command(name, ...args));
      },

      async multi(commands) {
        return withClient((client) => client.multi(commands));
      },

      // Commands.
      //
      // Not a complete set, only the commands I actually use.

      // See: https://redis.io/commands/get
      get(key) {
        return this.command('GET', key);
      },
    };
  }
}
