import DataLoader from 'dataloader';
import {loadContent} from '../loadContent';
import Snippet from '../models/Snippet';

function loadSnippets(keys) {
  const promises = keys
    .map((key) => ({
      file: key,
      subdirectory: 'snippets',
    }))
    .map(loadContent)
    .map((dataPromise) =>
      dataPromise.then((data) => data && new Snippet(data)),
    );
  return Promise.all(promises);
}

export default function getSnippetLoader() {
  return new DataLoader(loadSnippets);
}
