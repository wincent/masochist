/**
 * @flow
 */

import Promise from 'bluebird';
import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Page from '../models/Page';

function loadPages(keys: Array<string>): Promise<Array<Object | Error>> {
  const promises = keys
    .map(key => ({
      file: key,
      subdirectory: 'pages',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => new Page(data)));
  return Promise.all(promises);
}

export default function getPageLoader() {
  return new DataLoader(loadPages);
}
