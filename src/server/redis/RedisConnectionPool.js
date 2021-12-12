import RedisClient from './RedisClient';

export default class RedisConnectionPool {
  constructor() {
    this._clients = [];
  }

  get client() {
    const clients = this._clients;
    return {
      async command(name, ...args) {
        const client = clients.pop() || new RedisClient();
        const result = await client.command(name, ...args);
        clients.push(client);
        return result;
      },
      async multi(commands) {
        const client = clients.pop() || new RedisClient();
        const result = await client.multi(commands);
        clients.push(client);
        return result;
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
