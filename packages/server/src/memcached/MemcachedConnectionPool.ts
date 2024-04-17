import Pool from '../Pool';
import MemcachedClient from './MemcachedClient';

import type {Config} from '../Client';

type Response = string | void;

const MAXIMUM_POOL_SIZE = 10;

const DEFAULT_CONFIG: Config = {
  host: '127.0.0.1',
  port: 11211,
} as const;

export default class MemcachedClientPool {
  _pool: Pool<MemcachedClient>;

  constructor(config: Partial<Config> | undefined = undefined) {
    this._pool = new Pool(MAXIMUM_POOL_SIZE, () =>
      new MemcachedClient({
        ...DEFAULT_CONFIG,
        ...config,
      }));
  }

  get client() {
    const withClient = async (
      callback: (client: MemcachedClient) => Promise<Response>,
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

    // We are using the text memcached protocol. There is also a binary
    // protocol, but if we use that, we can't usefully inherit from `Client`
    // (which assumes a line-based protocol). The performance benefit seems
    // marginal anyway, so we're not losing out on much.
    //
    // See: https://github.com/memcached/memcached/blob/master/doc/protocol.txt
    // See: https://github.com/memcached/memcached/blob/master/doc/protocol-binary.txt
    return {
      // Commands.
      //
      // Not a complete set, only the commands I actually use.

      get(key: string) {
        return withClient((client: MemcachedClient) => client.get(key));
      },

      set(key: string, value: string) {
        return withClient((client: MemcachedClient) => client.set(key, value));
      },
    };
  }
}
