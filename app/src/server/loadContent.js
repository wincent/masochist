/**
 * @flow
 */

import nodegit from 'nodegit';
import path from 'path';
import process from 'process';
import {toGlobalId} from 'graphql-relay';
import Cache from './Cache';
import {Extensions} from './Markup';
import git from './git';
import unpackContent from './unpackContent';

type LoaderOptions = {
  subdirectory: 'wiki' | 'blog' | 'snippets';
  file: string; // Filename without extension.
  commit?: string;
}

const SubdirectoryToTypeName = {
  blog: 'Post',
  snippets: 'Snippet',
  wiki: 'Article',
};

export default async function loadContent(options: LoaderOptions): Promise {
  const {subdirectory, file} = options;
  const repo = await nodegit.Repository.open(path.resolve(__dirname, '../../../.git'));
  const commit = options.commit ?
    await repo.getCommit(options.commit) :
    await repo.getReferenceCommit('content');
  const tree = await commit.getTree();

  // Could also do a binary/interpolation search of `tree.entries -> path` under
  // the "content/wiki" tree but for now, use trial and error to check for
  // extensions.
  let extension;
  let treeEntry;
  const extensions = Object.keys(Extensions);
  for (let i = 0; i < extensions.length; i++) {
    extension = Extensions[extensions[i]];
    try {
      treeEntry = await tree.getEntry(
        'content/' + subdirectory + '/' + file + '.' + extension
      );
      break;
    } catch(e) {
      // Keep looking.
    }
  }

  if (!treeEntry || !treeEntry.isBlob()) {
    return null;
  }

  const blob = (await treeEntry.getBlob()).toString();
  const {body, tags, ...metadata} = unpackContent(blob);
  const typeName = SubdirectoryToTypeName[subdirectory];
  const cacheKey = toGlobalId(typeName, file) + ':' + commit.sha() + ':metadata';
  const timestamps = await Cache.get(
    cacheKey,
    async cacheKey => {
      const revs = await git(
        'rev-list',
        'content',
        '--',
        path.relative(
          path.resolve(process.cwd()),
          path.resolve(__dirname, '..', '..', '..', 'content', subdirectory, `${file}.${extension}`),
        ),
      );
      const mostRecent = revs.slice(0, 40);
      const oldest = revs.trim().slice(-40);

      return {
        createdAt: oldest ?
          // Author date of earliest.
          new Date((await repo.getCommit(oldest)).author().when().time() * 1000) :
          null,
        updatedAt: mostRecent ?
          // Commit date of latest.
          (await repo.getCommit(mostRecent)).date() :
          null,
      };
    }
  );

  return {
    id: file,
    body,
    format: extension,

    // `new Date()` here to handle real Date objects (cache miss), or
    // stringified dates (read from memcached).
    createdAt: timestamps.createdAt ? new Date(timestamps.createdAt) : null,
    updatedAt: timestamps.updatedAt ? new Date(timestamps.updatedAt) : null,
    tags,
    ...metadata,
  };
}
