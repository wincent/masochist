/**
 * @flow
 */

import path from 'path';
import {toGlobalId} from 'graphql-relay';
import unpackContent from 'unpack-content';
import {object} from '../common/checks';
import Cache from './Cache';
import {Extensions} from './Markup';
import git from './git';

type LoaderOptions = {
  subdirectory: 'blog' | 'pages' | 'snippets' | 'wiki',
  file: string, // Filename without extension.
  commit?: string, // Commit at which to load the content.
};

const SubdirectoryToTypeName = {
  blog: 'Post',
  pages: 'Page',
  snippets: 'Snippet',
  wiki: 'Article',
};

export async function getTimestamps(oldest: string, mostRecent: string) {
  return {
    createdAt: oldest
      ? // Author date of earliest.
        new Date(
          (await git('show', '-s', '--format=%at', oldest)).trim() * 1000,
        )
      : null,
    updatedAt: mostRecent
      ? // Commit date of latest.
        new Date(
          (await git('show', '-s', '--format=%ct', mostRecent)).trim() * 1000,
        )
      : null,
  };
}

export function getTimestampsCacheKey(
  subdirectory: string,
  file: string,
  head: string,
): string {
  const typeName = SubdirectoryToTypeName[subdirectory];
  return toGlobalId(typeName, file) + ':' + head + ':timestamps';
}

function getFilenamesWithExtensions(subdirectory, file) {
  return Object.keys(Extensions).map(
    name => 'content/' + subdirectory + '/' + file + '.' + Extensions[name],
  );
}

export async function loadContent(options: LoaderOptions): Promise<*> {
  const {subdirectory, file} = options;
  const head = (await git('rev-parse', 'content')).trim();
  const commit = options.commit || head;
  const tree = (await git('show', '-s', '--format=%T', commit)).trim();

  // Content may exist under one (or none) of several possible extensions.
  let possibleNames;
  if (subdirectory === 'wiki' && file[0] && file[0].match(/\w/)) {
    // Given file "foo", we look for "foo" and "Foo".
    possibleNames = getFilenamesWithExtensions(
      subdirectory,
      file[0].toUpperCase() + file.slice(1),
    );
    possibleNames.push(
      ...getFilenamesWithExtensions(
        subdirectory,
        file[0].toLowerCase() + file.slice(1),
      ),
    );
  } else {
    possibleNames = getFilenamesWithExtensions(subdirectory, file);
  }

  let treeEntry = (await git(
    'ls-tree',
    '--full-tree',
    '-r',
    '-z',
    tree,
    '--',
    ...possibleNames,
  )).match(/^\d+ (\w+) ([0-9a-f]+)\t(.+)\.(.+?)(\0|$)/);

  if (!treeEntry) {
    return null;
  }

  const [match, type, hash, filename, extension] = treeEntry;
  if (type !== 'blob') {
    return null;
  }

  const normalizedFile = path.basename(filename, '.' + extension);
  const blob = await git('cat-file', 'blob', hash);
  const {body, tags, ...metadata} = unpackContent(blob);
  const cacheKey = getTimestampsCacheKey(subdirectory, normalizedFile, head);
  const timestamps: Object = object(
    await Cache.get(cacheKey, async () => {
      const revs = await git(
        'rev-list',
        'content',
        '--',
        filename + '.' + extension,
      );
      const mostRecent = revs.slice(0, 40);
      const oldest = revs.trim().slice(-40);

      return getTimestamps(oldest, mostRecent);
    }),
  );

  return {
    id: normalizedFile,
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
