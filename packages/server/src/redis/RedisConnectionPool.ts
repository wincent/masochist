import Pool from '../Pool';
import RedisClient from './RedisClient';

import type {Command} from './RedisClient';
import type {Response} from './RedisResponseParser';

const MAXIMUM_POOL_SIZE = 10;

export default class RedisConnectionPool {
  _pool: Pool<RedisClient>;

  constructor() {
    this._pool = new Pool(MAXIMUM_POOL_SIZE, () => new RedisClient({
      host: '127.0.0.1',
      port: 6379,
    }));
  }

  get client() {
    const withClient = async (
      callback: (client: RedisClient) => Promise<Response>,
    ) => {
      const pool = this._pool;
      const client = pool.next();
      const dispose = () => pool.remove(client);
      client.once('destroy', dispose);
      try {
        return await callback(client);
      } finally {
        client.removeListener('destroy', dispose);
      }
    };

    return {
      async command(name: Command, ...args: Array<string | number>) {
        return withClient((client: RedisClient) =>
          client.command(name, ...args)
        );
      },

      async multi(commands: Array<[Command, ...Array<string | number>]>) {
        return withClient((client: RedisClient) => client.multi(commands));
      },

      // Commands.
      //
      // Not a complete set, only the commands I actually use.

      // See: https://redis.io/commands/get
      get(key: string) {
        return this.command('GET', key);
      },
    };
  }
}
