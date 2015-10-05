/**
 * @flow
 */

import Promise from 'bluebird';
import DataLoader from 'dataloader';

function loadSnippets(keys: Array<string>): Promise<Array<Object | Error>> {
  return Promise.resolve([
    {
      id: 'x',
    },
    {
      id: 'y',
    },
  ]);
}

export default function getSnippetLoader() {
  return new DataLoader(loadSnippets);
}
