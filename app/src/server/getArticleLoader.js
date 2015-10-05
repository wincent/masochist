/**
 * @flow
 */

'use strict';

import Promise from 'bluebird';
import DataLoader from 'dataloader';
import nodegit from 'nodegit';
import path from 'path';
import process from 'process';
import {toGlobalId} from 'graphql-relay';
import Article from './Article';
import Cache from './Cache';
import {Extensions} from './Markup';
import extractTags from './extractTags';
import git from './git';
import stripMetadata from './stripMetadata';

async function loadArticle(title): Promise {
  const id = toGlobalId('Article', title);
  const repo = await nodegit.Repository.open(path.resolve(__dirname, '../../../.git'));
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
      treeEntry = await tree.getEntry('content/wiki/' + title + '.' + extension);
      break;
    } catch(e) {
      // Keep looking.
    }
  }

  if (!treeEntry || !treeEntry.isBlob()) {
    return Promise.resolve(null);
  }

  const blob = (await treeEntry.getBlob()).toString();

  const metadata = await Cache.get(
    id + ':' + head.sha() + ':metadata',
    async cacheKey => {
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
          path.resolve(__dirname, '..', '..', '..', 'content', 'wiki', `${title}.${extension}`),
        ),
      );
      const mostRecent = revs.slice(0, 40);
      const oldest = revs.trim().slice(-40);
      const tags = extractTags(blob);

      return {
        createdAt: oldest ?
          // Author date of earliest.
          new Date((await repo.getCommit(oldest)).author().when().time() * 1000) :
          null,
        updatedAt: mostRecent ?
          // Commit date of latest.
          (await repo.getCommit(mostRecent)).date() :
          null,
        tags,
      };
      // BUG: created at is in pst, updated at in pdt (is that right?)
    }
  );

  return Promise.resolve(new Article({
    id,
    title,
    body: stripMetadata(blob),
    format: extension,

    // Need to handle real Date objects (cache miss), or stringified dates (read
    // from memcached).
    createdAt: metadata.createdAt ? new Date(metadata.createdAt) : null,
    updatedAt: metadata.updatedAt ? new Date(metadata.updatedAt) : null,
    tags: metadata.tags,
  }));
}

async function loadArticles(keys: Array<string>): Promise<Array<Object | Error>> {
  return await* keys.map(loadArticle);
}

export default function getArticleLoader() {
  return new DataLoader(loadArticles);
}
