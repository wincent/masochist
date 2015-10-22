/**
 * @flow
 */

import DataLoader from 'dataloader';
import {
  getKey,
  getClient,
} from '../../common/redis';
import {loadContent} from '../loadContent';
import Tag from '../models/Tag';

async function loadTags(keys: Array<string>): Promise<Array<Object | Error>> {
  const client = getClient();
  const queries = keys.map(key => (
    [
      'zrevrange',
      getKey('tag:' + key),
      0,
      -1,
    ]
  ));
  const results = await client.multi(queries).execAsync();
  return results.map((result, i) => new Tag({
    id: keys[i],
    count: result.length,
    name: keys[i],
    taggables: result,
  }));
}

export default function getTagLoader() {
  return new DataLoader(loadTags);
}
