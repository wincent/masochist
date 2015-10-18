/**
 * @flow
 */

import DataLoader from 'dataloader';
import Snippet from './Snippet';
import loadContent from './loadContent';

async function loadSnippets(keys: Array<string>): Promise<Array<Object | Error>> {
  return await* keys
    .map(key => ({
      file: key,
      subdirectory: 'snippets',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => new Snippet(data)));
}

export default function getSnippetLoader() {
  return new DataLoader(loadSnippets);
}
