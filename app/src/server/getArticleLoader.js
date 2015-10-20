/**
 * @flow
 */

import DataLoader from 'dataloader';
import Article from './Article';
import {loadContent} from './loadContent';

async function loadArticles(keys: Array<string>): Promise<Array<Object | Error>> {
  return await* keys
    .map(key => ({
      file: key,
      subdirectory: 'wiki',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => new Article({
      ...data,
      title: data.id,
    })));
}

export default function getArticleLoader() {
  return new DataLoader(loadArticles);
}
