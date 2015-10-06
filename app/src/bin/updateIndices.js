#!/usr/bin/env node

/**
 * Intended for use as a post-checkout or perhaps a post-receive hook.
 */

'use strict';

import 'babel-core/polyfill';

import Promise from 'bluebird';
import nodegit from 'nodegit';
import path from 'path';
import redis from 'redis';
import git from '../server/git';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

process.on('unhandledRejection', reason => {
  throw reason;
});

const KEY_PREFIX = 'masochist';
const LAST_INDEXED_HASH = KEY_PREFIX + ':last-indexed-hash';
const ARTICLES_INDEX = KEY_PREFIX + ':articles-index';

function log(format, ...args: Array<string>): void {
  const time = new Date().toLocaleTimeString();
  format = time + ': ' + format;
  console.log(format, ...args);
}

function extractTitle(pathString: string): string {
  return pathString
    .slice('content/wiki/'.length) // Strip prefix.
    .replace(/\.\w+$/, ''); // Strip extension.
}

function getWhatChanged(range): Promise {
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
      path.resolve(__dirname, '..', '..', '..', 'content', 'wiki'),
    ),
  );
}

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

(async () => {
  const client = redis.createClient();
  const repo = await nodegit.Repository.open(path.resolve(__dirname, '../../../.git'));
  const head = (await repo.getReferenceCommit('content')).sha();
  const lastIndexedHash = await client.getAsync(LAST_INDEXED_HASH);
  if (head === lastIndexedHash) {
    console.log('Index already up-to-date at revision %s', head);
    process.exit(0);
  }

  const isAncestor = await getIsAncestor(lastIndexedHash, head);
  const range = isAncestor ? [lastIndexedHash, head].join('..') : head;
  log('Getting changes in range: %s.', range);
  const commits = await getWhatChanged(range);

  log('Preparing index updates.');
  const regExp = new RegExp(
    '\\n[a-f0-9]{40} (\\d{1,10}) (\\d{1,10})\\n|' + // Commit SHA, author date, committer date.
    ':\\d{6} \\d{6} ' + // Modes.
    '[a-f0-9]+\\.\\.\\. [a-f0-9]+\\.\\.\\. ' + // Before/after tree or blob.
    '([ADM])\0' + // Added, Deleted or Moved.
    '([^\0]+)\0\0?', // Path, optional commit terminator.
    'g'
  );

  const seenTitles = {};
  const updates = [];
  let match;
  let updatedAt;
  let createdAt;
  while ((match = regExp.exec(commits))) {
    if (match[1] && match[2]) {
      updatedAt = match[1];
      createdAt = match[2];
    } else {
      // For articles, we want our index ordered by "updated at", so we only
      // touch the index the first time we see each path.
      const status = match[3];
      const title = extractTitle(match[4]);
      if (!(title in seenTitles)) {
        seenTitles[title] = true;
        switch (status) {
          case 'A':
            updates.push(['zadd', ARTICLES_INDEX, createdAt, title]);
            break;
          case 'D':
            updates.push(['zrem', ARTICLES_INDEX, title]);
            break;
          case 'M':
            updates.push(['zadd', ARTICLES_INDEX, updatedAt, title]);
            break;
          default:
            throw new Error(`Unrecognized status: '${status}'`);
            break;
        }
      }
    }
  }
  if (regExp.lastIndex) {
    // We expect to get all the way to the end of the input, in which case
    // `lastIndex` should reset to 0.
    throw new Error('Failed to consume input');
  }

  updates.push(['set', LAST_INDEXED_HASH, head]);
  log('Sending index updates to Redis.');
  await client.multi(updates).execAsync();
  log('Finished updating index for revision %s.', head);
  process.exit(0);
})();
