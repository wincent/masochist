/**
 * @flow
 */

import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Article from '../models/Article';

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
