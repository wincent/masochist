/**
 * @flow
 */

import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Post from '../models/Post';

function loadPosts(
  keys: $ReadOnlyArray<string>,
): Promise<Array<Object | Error>> {
  const promises = keys
    .map(key => ({
      file: key,
      subdirectory: 'blog',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => data && new Post(data)));
  return Promise.all(promises);
}

// TODO: remove this workaround once the version of the babylon parser used in
// the webpack build no longer chokes on it being inline.
type T = ?Post;

export default function getPostLoader() {
  // BUG: webpack can't parse this syntax
  return new DataLoader<string, T>(loadPosts);
}
