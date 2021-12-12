/**
 *
 */

import stableStringify from '@wincent/stable-stringify';
import {LAST_INDEXED_HASH} from './constants';
import {graphql} from 'graphql';
import LRUCache from '../common/LRUCache';
import invariant from '../common/invariant';
import getLoaders from './getLoaders';
import queryCache from './queryCache';
import redis from './redis';
import schema from './schema';

function getCache(hash) {
  return {
    hash,
    storage: new LRUCache(),
  };
}

let cache = getCache('');

/**
 * Convenience wrapper around running an arbitrary GraphQL query.
 */
export default (async function runQuery(id, variables) {
  const query = queryCache.getQuery(id);

  const lastIndexedHash = String(await redis.get(LAST_INDEXED_HASH));
  if (cache.hash !== lastIndexedHash) {
    cache = getCache(lastIndexedHash);
  }
  const key = stableStringify({
    id,
    variables,
  });
  invariant(key, 'Expected non-void key');
  if (cache.storage.has(key)) {
    return cache.storage.get(key);
  } else {
    const result = await graphql(
      schema,
      query,
      {loaders: getLoaders()},
      null,
      variables,
    );
    cache.storage.set(key, result);
    return result;
  }
});
