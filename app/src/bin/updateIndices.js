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
import '../common/devFallback';

import Promise from 'bluebird';
import nodegit from 'nodegit';
import path from 'path';
import memoize from '../common/memoize';
import {
  getKey,
  getClient,
} from '../common/redis';
// TODO: may have to move these to ../common
import Cache from '../server/Cache';
import {
  getTimestamps,
  getTimestampsCacheKey,
  loadContent,
} from '../server/loadContent';
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

function print(string: string): void {
  process.stdout.write(string);
}

function dot(): void {
  print('.');
}

function extractFile(pathString: string, contentType: string): string {
  return pathString
    .slice(`content/${contentType}/`.length) // Strip prefix.
    .replace(/\.\w+$/, ''); // Strip extension.
}

const getWhatChanged = memoize(
  async (range: string, subdirectory: string) => {
    log(`Getting ${subdirectory} changes in range: ${range}.`);

    // Custom log format (^@ here represents the NUL \0 byte):
    //
    // e31176b20bbb743c21c74a3a98128b759d62b999 1444055654 1444055654
    // :100644 100644 6535626... ec6d229... M^@app/src/bin/updateIndices.js^@^@
    // 50bc13b5bc01eecf3a07f89c85fd3bb769e6eec1 1444054911 1444054911
    // :100644 100644 12d2393... 600f5ef... M^@app/package.json^@
    return await git(
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
  log(`Preparing list of file updates.`);
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
    const commits = await getWhatChanged(range, contentType);

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

      'g'
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
        const file = extractFile(match[5], contentType);
        if (!status.match(/^[ADM]$/)) {
          throw new Error(`Unrecognized status: '${status}'`);
        }
        await callback({
          file,
          status,
          createdAt,
          updatedAt,
          commit,
          contentType,
          orderBy,
        });
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
    log('Index already up-to-date at revision %s', head);
    process.exit(0);
  }

  // Pre-seed timestamp metadata cache (without this, our `loadContent` calls
  // below will end up doing increasingly expensive `git-rev-list` operations
  // over and over again).
  log('Preparing timestamp cache for revision %s', head);
  const timestamps = {};
  await getFileUpdates(
    head,
    async ({file, status, contentType, commit}) => {
      dot();
      const id = contentType + ':' + file;
      if (!timestamps[id]) {
        timestamps[id] = {};
      }
      switch (status) {
        case 'A':
          timestamps[id].oldest = commit;
          break;
        case 'M':
          timestamps[id].mostRecent = timestamps[id].mostRecent || commit;
          break;
      }
    }
  );
  print('\n');

  // TODO make Cache.set (unconditional set)
  log('Writing timestamp cache for revision %s', head);
  await* Object.keys(timestamps).map(async id => {
    const [contentType, file] = id.split(/:/);
    const {oldest, mostRecent} = timestamps[id];
    const cacheKey = getTimestampsCacheKey(contentType, file, head);
    await Cache.get(
      cacheKey,
      async cacheKey => getTimestamps(repo, oldest, mostRecent),
    );
  });

  // Produce createdAt/updatedAt ordered indices.
  log('Creating ordered index');
  const isAncestor = await getIsAncestor(lastIndexedHash, head);
  const range = isAncestor ? [lastIndexedHash, head].join('..') : head;
  const updates = [];
  const seenFiles = {};
  await getFileUpdates(
    range,
    async ({file, status, createdAt, updatedAt, contentType, orderBy}) => {
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
      dot();
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
        }
      }
    }
  );
  print('\n');

  // Update tags.
  //
  // This update is relatively slow and expensive because it has to laod every
  // blob into memory, but on the bright side, it primes our memcached metadata
  // cache as a result.
  function addTag(tag, file, contentType, updatedAt) {
    const indexName = getKey('tags-index');
    updates.unshift(['zincrby', indexName, 1, tag]);

    const setName = getKey('tag:' + tag);
    updates.unshift([
      'zadd',
      setName,
      updatedAt ? updatedAt.getTime() : -1,
      contentType + ':' + file,
    ]);
  }

  function removeTag(tag, file, contentType, updatedAt) {
    const indexName = getKey('tags-index');
    updates.unshift(['zincrby', indexName, -1, tag]);

    const setName = getKey('tag:' + tag);
    updates.unshift([
      'srem',
      setName,
      updatedAt ? updatedAt.getTime() : -1,
      contentType + ':' + file,
    ]);
  }

  log('Creating tag sets');
  await getFileUpdates(
    range,
    async ({file, status, commit, contentType}) => {
      // Callback will be called in reverse-chronological order, so we use
      // `unshift` instead of `push` to handle cases like this:
      //
      //   1. Add article with tags "foo", "bar".
      //   2. Switch tag "bar" for "baz".
      //   3. Delete article.
      //
      // First thing we see is the deletion, then the edit then the addition, so
      // when we unshift our operations, our queue becomes:
      //
      //   1. Increment counts for "foo", "bar".
      //   2. Decrement count for "bar", increment count for "baz".
      //   3. Decrement counts for "foo", "baz".
      //
      dot();
      const {tags, updatedAt} = await loadContent({
        subdirectory: contentType,
        file,
        commit,
      });
      switch (status) {
        case 'A':
          // New file: add tags to index.
          tags.forEach(tag => addTag(tag, file, contentType, updatedAt));
          break;
        case 'D':
          // Deleted file: remove tags from index.
          tags.forEach(tag => removeTag(tag, file, contentType, updatedAt));
          break;
        case 'M':
          // Modified file: check before and after tags and apply updates, if
          // any.
          {
            const {tags: previousTags} = await loadContent({
              subdirectory: contentType,
              file,
              commit: commit + '~',
            });

            // Manual set intersection...
            const tagsSet = new Set(tags);
            const previousTagsSet = new Set(previousTags);
            for (let existing of tagsSet) {
              if (!previousTagsSet.has(existing)) {
                // Tag was added.
                addTag(existing, file, contentType, updatedAt);
              }
            }
            for (let previous of previousTagsSet) {
              if (!tagsSet.has(previous)) {
                // Tag was deleted.
                removeTag(previous, file, contentType, updatedAt);
              }
            }
          }
          break;
      }
    }
  );
  print('\n');

  // All done.
  updates.push(['set', LAST_INDEXED_HASH, head]);
  log('Sending index updates to Redis.');
  await client.multi(updates).execAsync();
  log('Finished updating index for revision %s.', head);
  process.exit(0);
})();
