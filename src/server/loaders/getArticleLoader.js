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

// TODO: remove this workaround once the version of the babylon parser used in
// the webpack build no longer chokes on it being inline.
type T = ?Article;

export default function getArticleLoader() {
  return new DataLoader<string, T>(loadArticles);
}
