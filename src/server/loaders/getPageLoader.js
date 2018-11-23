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

export default function getPageLoader() {
  return new DataLoader(loadPages);
}
