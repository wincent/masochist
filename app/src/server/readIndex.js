/**
 * @flow
 */

import {number, string} from '../common/checks';
import redis from '../common/redis';

export type IndexResult = [number, string];

export default (async function readIndex(
  name: string,
  count: number,
  offset: number,
): Promise<IndexResult> {
  const results = await redis.multi([
    ['ZREVRANGE', name, offset, offset + count - 1],
    ['ZCARD', name],
  ]);

  // Results is not an array, so we can't destructure it (although we can make
  // it into an array for the benefit of our callers).
  return [number(results[0]), string(results[1])];
});
