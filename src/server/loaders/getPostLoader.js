/**
 * @flow
 */

import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Post from '../models/Post';

function loadPosts(keys: Array<string>): Promise<Array<Object | Error>> {
  const promises = keys
    .map(key => ({
      file: key,
      subdirectory: 'blog',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => data && new Post(data)));
  return Promise.all(promises);
}

export default function getPostLoader() {
  return new DataLoader(loadPosts);
}
