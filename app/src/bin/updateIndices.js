#!/usr/bin/env node

/**
 * Intended for use as a post-checkout or perhaps a post-receive hook.
 *
 * Builds up indices that can be queried like this:
 *
 * ```
 * redis-cli> zrevrange masochist:articles-index 0 10
 * ```
 */

'use strict';

import 'babel-core/polyfill';

import Promise from 'bluebird';
import nodegit from 'nodegit';
import path from 'path';
import memoize from '../common/memoize';
import {
  getKey,
  getClient,
} from '../common/redis';
import git from '../server/git';

process.on('unhandledRejection', reason => {
  throw reason;
});

const LAST_INDEXED_HASH = getKey('last-indexed-hash');

function log(format, ...args: Array<string>): void {
  const time = new Date().toLocaleTimeString();
  format = time + ': ' + format;
  console.log(format, ...args);
}

function extractFile(pathString: string, contentType: string): string {
  return pathString
    .slice(`content/${contentType}/`.length) // Strip prefix.
    .replace(/\.\w+$/, ''); // Strip extension.
}

const getWhatChanged = memoize(
  (range: string, subdirectory: string) => {
    // Custom log format (^@ here represents the NUL \0 byte):
    //
    // e31176b20bbb743c21c74a3a98128b759d62b999 1444055654 1444055654
    // :100644 100644 6535626... ec6d229... M^@app/src/bin/updateIndices.js^@^@
    // 50bc13b5bc01eecf3a07f89c85fd3bb769e6eec1 1444054911 1444054911
    // :100644 100644 12d2393... 600f5ef... M^@app/package.json^@
    return git(
      'log',
      '--pretty=format:%n%H %at %ct',
      '--raw',
      '-z',
      range,
      '--',
      path.relative(
        path.resolve(process.cwd()),
        path.resolve(__dirname, '..', '..', '..', 'content', subdirectory),
      ),
    );
  }
);

async function getIsAncestor(
  potentialAncestor: ?string, commit: string
): Promise<boolean> {
  if (potentialAncestor) {
    try {
      await git(
        'merge-base',
        '--is-ancestor',
        potentialAncestor,
        commit,
      );
      // Exit code 0 means it's an ancestor.
      return Promise.resolve(true);
    } catch(error) {
      // Exit code 1 means it's not an ancestor; other codes (not disinguished
      // here) mean other errors.
    }
  }
  return Promise.resolve(false);
}
async function getFileUpdates(range, callback) {
  await* [
    {
      contentType: 'wiki',
      orderBy: 'updatedAt',
    },
    {
      contentType: 'snippets',
      orderBy: 'createdAt',
    },
    {
      contentType: 'blog',
      orderBy: 'createdAt',
    },
  ].map(async ({contentType, orderBy}) => {
    log(`Getting ${contentType} changes in range: ${range}.`);
    const commits = await getWhatChanged(range, contentType);

    log(`Preparing ${contentType} index updates.`);
    const regExp = new RegExp(
      // Commit SHA, author date, committer date.
      '\\n[a-f0-9]{40} (\\d{1,10}) (\\d{1,10})\\n|' +

      // Modes.
      ':\\d{6} \\d{6} ' +

      // Before/after tree or blob.
      '[a-f0-9]+\\.\\.\\. [a-f0-9]+\\.\\.\\. ' +

      // Added, Deleted or Modified.
      '([ADM])\0' +

      // Path, optional commit terminator.
      '([^\0]+)\0\0?',

      'g'
    );

    let match;
    let updatedAt;
    let createdAt;
    while ((match = regExp.exec(commits))) {
      if (match[1] && match[2]) {
        updatedAt = match[1];
        createdAt = match[2];
      } else {
        const status = match[3];
        const file = extractFile(match[4], contentType);
        callback(file, status, createdAt, updatedAt, contentType, orderBy);
      }
    }
    if (regExp.lastIndex) {
      // We expect to get all the way to the end of the input, in which case
      // `lastIndex` should reset to 0.
      throw new Error('Failed to consume input');
    }
  });
}

(async () => {
  const client = getClient();
  const repo = await nodegit.Repository.open(path.resolve(__dirname, '../../../.git'));
  const head = (await repo.getReferenceCommit('content')).sha();
  const lastIndexedHash = await client.getAsync(LAST_INDEXED_HASH);
  if (head === lastIndexedHash) {
    console.log('Index already up-to-date at revision %s', head);
    process.exit(0);
  }

  // Produce createdAt/updatedAt ordered indices.
  const isAncestor = await getIsAncestor(lastIndexedHash, head);
  const range = isAncestor ? [lastIndexedHash, head].join('..') : head;
  const seenFiles = {};
  const updates = [];
  await getFileUpdates(
    range,
    (file, status, createdAt, updatedAt, contentType, orderBy) => {
      // For articles, we want our index ordered by "updated at", so we only
      // touch the index the first time we see each path in our (reverse-
      // chronological order traversal).
      //
      // For posts and snippets, we want "created at" ordering. We still use the
      // `seenFiles` map, though to handle sequences like [Add, Delete, Add]. In
      // that case, we:
      //
      // 1. See the most recent "Add":
      //   - Update the index.
      //   - Record that we've seen the file in `seenFiles`.
      // 2. See the preceding "Delete":
      //   - Ignore the change (don't update the index, as we know the file exists
      //     later on).
      // 3. See the original "Add":
      //   - Ignore the change (ie. we use the most recent creation date, not the
      //     original one).
      //
      // Note that this does the right thing for incremental updates too, such as
      // when we see only [Delete, Add] and therefore omit step 3 above.
      if (!seenFiles[file]) {
        const indexName = getKey(contentType + '-index');
        switch (status) {
          case 'A':
            updates.push(['zadd', indexName, createdAt, file]);
            seenFiles[file] = true;
            break;
          case 'D':
            updates.push(['zrem', indexName, file]);
            seenFiles[file] = orderBy === 'updatedAt';
            break;
          case 'M':
            if (orderBy === 'updatedAt') {
              updates.push(['zadd', indexName, updatedAt, file]);
              seenFiles[file] = true;
            }
            break;
          default:
            throw new Error(`Unrecognized status: '${status}'`);
            break;
        }
      }
    }
  );

  // All done.
  updates.push(['set', LAST_INDEXED_HASH, head]);
  log('Sending index updates to Redis.');
  await client.multi(updates).execAsync();
  log('Finished updating index for revision %s.', head);
  process.exit(0);
})();
