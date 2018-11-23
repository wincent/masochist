/**
 * @flow
 */

import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Snippet from '../models/Snippet';

function loadSnippets(
  keys: $ReadOnlyArray<string>,
): Promise<Array<Object | Error>> {
  const promises = keys
    .map(key => ({
      file: key,
      subdirectory: 'snippets',
    }))
    .map(loadContent)
    .map(dataPromise => dataPromise.then(data => data && new Snippet(data)));
  return Promise.all(promises);
}

// TODO: remove this workaround once the version of the babylon parser used in
// the webpack build no longer chokes on it being inline.
type T = ?Snippet;

export default function getSnippetLoader() {
  return new DataLoader<string, T>(loadSnippets);
}
