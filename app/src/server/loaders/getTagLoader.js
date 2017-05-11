/**
 * @flow
 */

import DataLoader from 'dataloader';
import redis from '../../common/redis';
import {array} from '../../common/checks';
import {loadContent} from '../loadContent';
import Tag from '../models/Tag';

async function loadTags(keys: Array<string>): Promise<Array<Object | Error>> {
  const queries = keys.map(key => (
    [
      'ZREVRANGE',
      'tag:' + key,
      0,
      -1,
    ]
  ));
  const results = await redis.multi(queries);
  return results.map((result, i) => new Tag({
    id: keys[i],
    count: array(result).length,
    name: keys[i],
    taggables: result,
  }));
}

export default function getTagLoader() {
  return new DataLoader(loadTags);
}
