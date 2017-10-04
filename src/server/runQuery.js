/**
 * @flow
 */

import {LAST_INDEXED_HASH} from './constants';
import {graphql} from 'graphql';
import getLoaders from './getLoaders';
import queryCache from './queryCache';
import redis from './redis';
import schema from './schema';

function getCache(hash: string) {
  return {
    hash,
    storage: new Map(),
  };
}

let cache = getCache('');

/**
 * Convenience wrapper around running an arbitrary GraphQL query.
 */
export default async function runQuery(id: string, variables: ?Object) {
  const query = queryCache.getQuery(id);

  const lastIndexedHash = await redis.get(LAST_INDEXED_HASH);
  if (cache.hash !== lastIndexedHash) {
    cache = getCache(lastIndexedHash);
  }
  const key = JSON.stringify({
    id,
    variables,
  });
  if (cache.storage.has(key)) {
    return cache.storage.get(key);
  } else {
    const result = await graphql(schema, query, {loaders: getLoaders()}, null, variables);
    cache.storage.set(key, result);
    return result;
  }
}
