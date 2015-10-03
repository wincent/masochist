/**
 * @flow
 */

'use strict';

import Promise from 'bluebird';
import DataLoader from 'dataloader';
import nodegit from 'nodegit';
import path from 'path';
import {Extensions} from './Markup';

async function loadArticle(key): Promise {
  const repo = await nodegit.Repository.open(path.resolve(__dirname, '../../.git'));
  const head = await repo.getReferenceCommit('content');
  const tree = await head.getTree();

  // Could also do a binary/interpolation search of `tree.entries -> path` under
  // the "content/wiki" tree but for now, use trial and error to check for
  // extensions.
  let extension;
  let treeEntry;
  const extensions = Object.keys(Extensions);
  for (let i = 0; i < extensions.length; i++) {
    extension = Extensions[extensions[i]];
    try {
      treeEntry = await tree.getEntry('content/wiki/' + key + '.' + extension);
      break;
    } catch(e) {
      // Keep looking.
    }
  }

  if (!treeEntry || !treeEntry.isBlob()) {
    return Promise.resolve(null);
  }

  const blob = await treeEntry.getBlob();

  // Commit#history is dead slow, and so is Revwalk.
  // TODO: try it using dumb callbacks, or promises
  let last = null;
  let earliest = null;
  const revwalk = nodegit.Revwalk.create(repo);
  revwalk.push(head.id());

  // This is committer time, which is appropriate for articles (where recency of
  // update matters). For posts, creation order matters, so we'll go with
  // topological search (which workes because I imported old content in-order)
  // and we'll get creation date from the author date.
  revwalk.sorting(nodegit.Revwalk.SORT.TIME);

  let current = head;
  while (current) {
    const diffList = await current.getDiff();
    for (let i = 0; i < diffList.length; i++) {
      const found = (await diffList[i].patches()).find(patch => {
        return (
          patch.oldFile().path() === 'content/wiki/' + key + '.' + extension ||
          patch.newFile().path() === 'content/wiki/' + key + '.' + extension
        );
      });
      if (found) {
        earliest = current;
        if (!last) {
          last = current;
        }
        break;
      }
    }
    const sha = await revwalk.next();
    if (!sha) {
      break;
    }
    current = await repo.getCommit(sha);
  }

  return Promise.resolve({
    id: key,
    title: key,
    body: blob.toString(),
    createdAt: new Date(earliest.author().when().time() * 1000), // Author date of earliest.
    updatedAt: last.date(), // Commit date of latest.
  });
}

async function loadArticles(keys: Array<string>): Promise<Array<Object | Error>> {
  return await* keys.map(loadArticle);
}

export default function getArticleLoader() {
  return new DataLoader(loadArticles);
}
