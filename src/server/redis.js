/**
 * @flow
 */

import {createClient} from 'redis';
import {promisify} from 'util';
import {string} from '../common/checks';
import {REDIS_CACHE_VERSION, REDIS_KEY_PREFIX} from '../server/constants';

let sharedClient = null;

function getClient() {
  if (!sharedClient) {
    sharedClient = new Promise((resolve) => {
      const client = createClient();
      client.connect().then(() => resolve(client));
    });
  }
  return sharedClient;
}

let connected = false;

function prefixKey(key: string): string {
  return REDIS_KEY_PREFIX + ':' + REDIS_CACHE_VERSION + ':' + key;
}

export default {
  get(key: string): Promise<mixed> {
    return getClient().then((client) => client.get(prefixKey(key)));
  },

  multi(commands: Array<Array<mixed>>): Promise<Array<mixed>> {
    const commandsWithPrefixedKeys = commands.map(
      // No Flow support yet for tuples with varags..
      ([command, key, ...args]) => [command, prefixKey(string(key)), ...args],
    );
    return getClient().then((client) => client.multi(commandsWithPrefixedKeys).exec());
  },
};
