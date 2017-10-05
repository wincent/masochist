/**
 * @noflow
 */

import path from 'path';
import unpackContent from 'unpack-content';
import {object} from '../common/checks';
import toGlobalId from '../common/toGlobalId';
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

export function getCacheKey(
  subdirectory: string,
  file: string,
  head: string,
): string {
  const typeName = SubdirectoryToTypeName[subdirectory];
  return toGlobalId(typeName, file) + ':' + head + ':content';
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
  const cacheKey = getCacheKey(subdirectory, file, head);

  // Note at this point we haven't confirmed the canonical file name, so if we
  // get called again with a non-canonical name that points to the same content
  // we will load it again.
  const content = await Cache.get(cacheKey, async () => {
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

    // This is the most expensive part by far. On my local machine, I can
    // do all the Git and filesystem operations in about 50ms each (find the
    // HEAD, get the tree object, find the matching blob, read the timestamps),
    // but finding the oldest rev currently takes about 3,500ms with the current
    // repo history. We do this in parallel, but it still ends up being painful:
    // almost 4 seconds to load 10 snippets, for example.
    const revs = await git(
      'rev-list',
      'content',
      '--',
      filename + '.' + extension,
    );

    const mostRecent = revs.slice(0, 40);
    const oldest = revs.trim().slice(-40);
    const timestamps = await getTimestamps(oldest, mostRecent);

    return {
      id: normalizedFile,
      body,
      format: extension,

      // `new Date()` here to handle real Date objects (cache miss), or
      // stringified dates (read from memcached).
      createdAt: timestamps.createdAt || null,
      updatedAt: timestamps.updatedAt || null,
      tags,
      ...metadata,
    };
  });

  return {
    ...content,

    // `new Date()` here to handle stringified dates (read from memcached).
    createdAt: content.createdAt ? new Date(content.createdAt) : null,
    updatedAt: content.updatedAt ? new Date(content.updatedAt) : null,
  };
}
