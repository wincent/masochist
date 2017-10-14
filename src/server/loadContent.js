/**
 * @noflow
 */

import path from 'path';
import unpackContent from 'unpack-content';
import {object} from '../common/checks';
import toGlobalId from '../common/toGlobalId';
import Cache from './Cache';
import {Extensions} from './Markup';
import delay from './delay';
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

async function getWhatChanged(commit: string) {
  // Custom log format (^@ here represents the NUL \0 byte):
  //
  // e31176b20bbb743c21c74a3a98128b759d62b999 1444055654 1444055654
  // :100644 100644 6535626... ec6d229... M^@src/bin/updateIndices.js^@^@
  // 50bc13b5bc01eecf3a07f89c85fd3bb769e6eec1 1444054911 1444054911
  // :100644 100644 12d2393... 600f5ef... M^@package.json^@
  return await git(
    'log',
    '--pretty=format:%n%H %at %ct',
    '--raw',
    '-z',
    commit,
    '--',
    'content',
  );
}

const timestamps = {
  head: null,
  cache: {},
};

export async function loadContent(options: LoaderOptions): Promise<*> {
  const {subdirectory, file} = options;
  const head = (await git('rev-parse', 'content')).trim();
  const commit = options.commit || head;
  const tree = (await git('show', '-s', '--format=%T', commit)).trim();
  const cacheKey = getCacheKey(subdirectory, file, commit);

  while (timestamps.head === undefined) {
    // Another (parallel) load is initializing the cache.
    await delay(1000);
  }

  if (timestamps.head !== head) {
    // We are the first load for this HEAD; must initialize the cache.
    // We avoid repeated expensive calls to rev-list by building up an
    // in-memory index of everything up-front.
    timestamps.head = undefined;
    timestamps.cache = {};
    const commits = await getWhatChanged(head);

    // TODO: this is very similar to `getWhatChanged` in `updateIndices`;
    // de-dupe.
    const regExp = new RegExp(
      // Commit SHA, author date, committer date.
      '\\n([a-f0-9]{40}) (\\d{1,10}) (\\d{1,10})\\n|' +
        // Modes.
        ':\\d{6} \\d{6} ' +
        // Before/after tree or blob.
        '[a-f0-9]+\\.\\.\\. [a-f0-9]+\\.\\.\\. ' +
        // Added, Deleted or Modified.
        '([ADM])\0' +
        // Path, optional commit terminator.
        '([^\0]+)\0\0?',
      'g',
    );

    let match;
    let commit;
    let updatedAt;
    let createdAt;
    while ((match = regExp.exec(commits))) {
      if (match[1] && match[2] && match[3]) {
        commit = match[1];
        updatedAt = match[2];
        createdAt = match[3];
      } else {
        const status = match[4];
        const file = match[5];
        if (!status.match(/^[ADM]$/)) {
          throw new Error(`Unrecognized status: '${status}'`);
        }
        timestamps.cache[file] = timestamps.cache[file] || {};
        timestamps.cache[file].createdAt = Math.min(
          createdAt,
          timestamps.cache[file].createdAt || Infinity,
        );
        timestamps.cache[file].updatedAt = Math.max(
          updatedAt,
          timestamps.cache[file].updatedAt || -Infinity,
        );
      }
    }
    if (regExp.lastIndex) {
      // We expect to get all the way to the end of the input, in which case
      // `lastIndex` should reset to 0.
      throw new Error('Failed to consume input');
    }
    timestamps.head = head;
  }

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
    const entry = filename + '.' + extension;
    const createdAt = new Date(timestamps.cache[entry].createdAt * 1000);
    const updatedAt = new Date(timestamps.cache[entry].updatedAt * 1000);

    return {
      id: normalizedFile,
      body,
      format: extension,
      createdAt,
      updatedAt,
      tags,
      ...metadata,
    };
  });

  return content
    ? {
        ...content,

        // `new Date()` here to handle stringified dates (read from memcached).
        createdAt: new Date(content.createdAt),
        updatedAt: new Date(content.updatedAt),
      }
    : null;
}
