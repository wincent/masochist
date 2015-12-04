/**
 * @flow
 */

import process from 'process';
import {toGlobalId} from 'graphql-relay';
import Cache from '../common/Cache';
import {Extensions} from './Markup';
import git from './git';
import unpackContent from './unpackContent';

type LoaderOptions = {
  subdirectory: 'wiki' | 'blog' | 'snippets';
  file: string; // Filename without extension.
  commit?: string; // Commit at which to load the content.
}

const SubdirectoryToTypeName = {
  blog: 'Post',
  pages: 'Page',
  snippets: 'Snippet',
  wiki: 'Article',
};

export async function getTimestamps(
  oldest: string,
  mostRecent: string
) {
  return {
    createdAt: oldest ?
      // Author date of earliest.
      new Date((await git('show', '-s', '--format=%at', oldest)).trim() * 1000) :
      null,
    updatedAt: mostRecent ?
      // Commit date of latest.
      new Date((await git('show', '-s', '--format=%ct', mostRecent)).trim() * 1000) :
      null,
  };
}

export function getTimestampsCacheKey(subdirectory, file, head) {
  const typeName = SubdirectoryToTypeName[subdirectory];
  return toGlobalId(typeName, file) + ':' + head + ':timestamps';
}

export async function loadContent(options: LoaderOptions): Promise {
  const {subdirectory, file} = options;
  const head = (await git('rev-parse', 'content')).trim();
  const commit = options.commit || head;
  const tree = (await git('show', '-s', '--format=%T', commit)).trim();

  // Content may exist under one (or none) or several possible extensions.
  const possibleNames = Object.keys(Extensions).map(name => (
    'content/' + subdirectory + '/' + file + '.' + Extensions[name]
  ));
  let treeEntry = (await git(
    'ls-tree',
    '--full-tree',
    '-r',
    tree,
    '--',
    ...possibleNames
  )).match(/^\d+ (\w+) ([0-9a-f]+)\t(.+)\.(.+?)(\n|$)/);

  if (!treeEntry) {
    return null;
  }

  const [match, type, hash, filename, extension] = treeEntry;
  if (type !== 'blob') {
    return null;
  }

  const blob = await git('cat-file', 'blob', hash);
  const {body, tags, ...metadata} = unpackContent(blob);
  const cacheKey = getTimestampsCacheKey(subdirectory, file, head);
  const timestamps = await Cache.get(
    cacheKey,
    async cacheKey => {
      const revs = await git(
        'rev-list',
        'content',
        '--',
        filename + '.' + extension,
      );
      const mostRecent = revs.slice(0, 40);
      const oldest = revs.trim().slice(-40);

      return getTimestamps(oldest, mostRecent);
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
