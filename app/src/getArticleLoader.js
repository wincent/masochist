/**
 * @flow
 */

'use strict';

import Promise from 'bluebird';
import DataLoader from 'dataloader';
import nodegit from 'nodegit';
import path from 'path';
import process from 'process';
import {Extensions} from './Markup';
import git from './git';

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

  // This is committer time, which is appropriate for articles (where recency of
  // update matters). For posts, creation order matters, so we'll go with
  // topological search (which workes because I imported old content in-order)
  // and we'll get creation date from the author date.
  const revs = await git(
    'rev-list',
    '--date-order',
    'content',
    '--',
    path.relative(
      path.resolve(process.cwd()),
      path.resolve(__dirname, '..', '..', 'content', 'wiki', `${key}.${extension}`),
    ),
  );
  const mostRecent = revs.slice(0, 40);
  const oldest = revs.trim().slice(-40);

  return Promise.resolve({
    id: key,
    title: key,
    body: blob.toString(),
    createdAt: oldest ?
      // Author date of earliest.
      new Date((await repo.getCommit(oldest)).author().when().time() * 1000) :
      null,
    updatedAt: mostRecent ?
      // Commit date of latest.
      (await repo.getCommit(mostRecent)).date() :
      null,
  });
}

async function loadArticles(keys: Array<string>): Promise<Array<Object | Error>> {
  return await* keys.map(loadArticle);
}

export default function getArticleLoader() {
  return new DataLoader(loadArticles);
}
