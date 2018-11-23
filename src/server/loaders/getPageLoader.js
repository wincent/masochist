/**
 * @flow
 */

import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Page from '../models/Page';

function loadPages(
  keys: $ReadOnlyArray<string>,
): Promise<Array<Object | Error>> {
  const promises = keys
    .map(key => ({
      file: key,
      subdirectory: 'pages',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => data && new Page(data)));
  return Promise.all(promises);
}

// TODO: remove this workaround once the version of the babylon parser used in
// the webpack build no longer chokes on it being inline.
type T = ?Page;

export default function getPageLoader() {
  return new DataLoader<string, T>(loadPages);
}
