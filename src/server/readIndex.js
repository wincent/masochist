import {array, number} from '../common/checks';
import redis from './redis';

export default (async function readIndex(name, count, offset) {
  const results = await redis.multi([
    ['ZRANGE', name, offset, offset + count - 1, 'REV'],
    ['ZCARD', name],
  ]);

  // Results is not an array, so we can't destructure it (although we can make
  // it into an array for the benefit of our callers).
  return [array(results[0]), number(results[1])];
});
