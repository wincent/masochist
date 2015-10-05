#!/usr/bin/env node

/**
 * Intended for use as a post-checkout or perhaps a post-receive hook.
 */

'use strict';

import 'babel-core/polyfill';

import Promise from 'bluebird';
import redis from 'redis';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

process.on('unhandledRejection', reason => {
  throw reason;
});

(async () => {
  const client = redis.createClient();

  await client.zaddAsync('testset', 3000, 'too big');
  await client.zaddAsync('testset', 1000, 'this one');
  await client.zaddAsync('testset', 2000, 'blah thing');

  const result = await client.zrevrangeAsync('testset', -2, -1);
  process.exit(0);
})();
