/**
 * @flow
 */

import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Article from '../models/Article';

function loadArticles(
  keys: $ReadOnlyArray<string>,
): Promise<Array<Object | Error>> {
  const promises = keys
    .map(key => ({
      file: key,
      subdirectory: 'wiki',
    }))
    .map(loadContent)
    .map(dataPromise =>
      dataPromise.then(
        data =>
          data &&
          new Article({
            ...data,
            title: data.id,
          }),
      ),
    );
  return Promise.all(promises);
}

export default function getArticleLoader() {
  return new DataLoader<string, ?Article>(loadArticles);
}
