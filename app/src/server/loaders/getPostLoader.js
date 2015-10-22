/**
 * @flow
 */

import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Post from '../models/Post';

async function loadPosts(keys: Array<string>): Promise<Array<Object | Error>> {
  return await* keys
    .map(key => ({
      file: key,
      subdirectory: 'blog',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => new Post(data)));
}

export default function getPostLoader() {
  return new DataLoader(loadPosts);
}
