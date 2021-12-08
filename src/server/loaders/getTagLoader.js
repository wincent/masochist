/**
 * @flow
 */

import DataLoader from 'dataloader';
import {array} from '../../common/checks';
import Tag from '../models/Tag';
import redis from '../redis';

async function loadTags(
  keys: $ReadOnlyArray<string>,
): Promise<Array<Object | Error>> {
  const queries = keys.map(key => ['ZREVRANGE', 'tag:' + key, 0, -1]);
  const results = await redis.multi(queries);
  return results.map(
    (result, i) =>
      new Tag({
        id: keys[i],
        count: array(result).length,
        name: keys[i],
        taggables: result,
      }),
  );
}

export default function getTagLoader() {
  return new DataLoader<string, Tag>(loadTags);
}
