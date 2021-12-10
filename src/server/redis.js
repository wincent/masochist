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

// TODO: remove these temporary tests...
// Run them with: yarn run babel-node src/server/redis.js

client.get('foo').then((result) => {
  console.log('GET foo', result);
});

// This will open a second client because the last one hasn't been created yet.
client
  .get('masochist:6:last-indexed-hash')
  .then((result) => {
    console.log('GET masochist:6:last-indexed-hash', result);
  })
  .then(async () => {
    // but this chained call will use an existing client
    let result = await client.zcard('masochist:6:wiki-index');
    console.log('ZCARD masochist:6:wiki-index', result);

    // and this will too, because of the await
    result = await client.get('bar');
    console.log('GET bar', result);

    result = await client.zrevrange('masochist:6:blog-index', 10, 20);
    console.log('ZREVRANGE masochist:6:blog-index 10 20', result);

    result = await client.multi([
      ['ZREVRANGE', 'masochist:6:tag:pcre', 0, -1],
      ['ZREVRANGE', 'masochist:6:tag:skype', 0, -1],
      ['ZREVRANGE', 'masochist:6:tag:try', 0, -1],
      ['ZREVRANGE', 'masochist:6:tag:znc', 0, -1],
    ]);
    console.log('multi (4 commands):', result);
  });
