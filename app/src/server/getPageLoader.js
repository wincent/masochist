/**
 * @flow
 */

import DataLoader from 'dataloader';
import Page from './Page';
import {loadContent} from './loadContent';

async function loadPages(keys: Array<string>): Promise<Array<Object | Error>> {
  return await* keys
    .map(key => ({
      file: key,
      subdirectory: 'pages',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => new Page(data)));
}

export default function getPageLoader() {
  return new DataLoader(loadPages);
}
