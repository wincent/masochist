#!/usr/bin/env node

/**
 * Intended for use as a post-receive hook.
 *
 * Builds up indices that can be queried like this (eg. to get a list of the 10
 * most recently updated wiki articles):
 *
 * ```
 * redis-cli> ZREVRANGE masochist:2:wiki-index 0 10
 * ```
 */

import '../common/unhandledRejection';
import '../server/configureNpm';

import Promise from 'bluebird';
import os from 'os';
import path from 'path';
import extractTypeAndId from '../common/extractTypeAndId';
import memoize from '../common/memoize';
import Cache from '../server/Cache';
import {LAST_INDEXED_HASH, REDIS_TAGS_INDEX_KEY} from '../server/constants';
import getIndexNameForContentType from '../server/getIndexNameForContentType';
import getWhatChanged, {forEachCommit} from '../server/getWhatChanged';
import git from '../server/git';
import {getTimestamps, getCacheKey, loadContent} from '../server/loadContent';
import redis from '../server/redis';

/**
 * Rather than printing out one long line (which will get buffered inside our
 * post-receive hook, preventing the user from seeing any progress until the
 * end) break it up over lines with explicit hard line breaks.
 *
 * Logging any message (with `log()`) resets the column counter to 0.
 */
const maxColumnCount = parseInt(process.stdout.columns || 80, 10);
let columnCount = 0;
function dot(): void {
  columnCount++;
  print('.');
  if (columnCount > maxColumnCount) {
    columnCount = 0;
    print('\n');
  }
}

function log(format, ...args: Array<string>): void {
  const time = new Date().toLocaleTimeString();
  format = time + ': ' + format;
  console.log(format, ...args);
  columnCount = 0;
}

function print(string: string): void {
  process.stdout.write(string);
}

function extractFile(pathString: string, contentType: string): string {
  return pathString
    .slice(`content/${contentType}/`.length) // Strip prefix.
    .replace(/\.\w+$/, ''); // Strip extension.
}

const getChanges = memoize(getWhatChanged);

async function getIsAncestor(
  potentialAncestor: ?string,
  commit: string,
): Promise<boolean> {
  if (potentialAncestor) {
    try {
      await git('merge-base', '--is-ancestor', potentialAncestor, commit);
      // Exit code 0 means it's an ancestor.
      return Promise.resolve(true);
    } catch (error) {
      // Exit code 1 means it's not an ancestor; other codes (not disinguished
      // here) mean other errors.
    }
  }
  return Promise.resolve(false);
}

async function parallelForEach(collection, callback, count = os.cpus().length) {
  let id = 0;
  const jobs = {};
  while (collection.length) {
    for (
      let i = 0,
      capacity = count - Object.keys(jobs).length,
      max = Math.min(capacity, collection.length);
      i < max;
      i++
    ) {
      const item = collection.pop();
      const job = id++;
      jobs[job] = new Promise((resolve, reject) => {
        callback(item).then(() => {
          delete jobs[job];
          resolve();
        });
      });
    }

    // Wait until one of the jobs is done.
    await Promise.race(Object.values(jobs));
  }

  // Let any remaining jobs finish.
  await Promise.all(Object.values(jobs));
}

async function getFileUpdates(range, callback) {
  log(`Preparing list of file updates in ${range}.`);
  return parallelForEach(
    [
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
      {
        contentType: 'pages',
        orderBy: 'updatedAt', // Arbitrary (there is no indexed view of pages).
      },
    ],
    (async ({contentType, orderBy}) => {
      const subdirectory = path.join('content', contentType);
      const commits = await getChanges(range, subdirectory);
      await forEachCommit(
        commits,
        async ({commit, createdAt, file, status, updatedAt}) => {
          await callback({
            commit,
            contentType,
            createdAt,
            file: extractFile(file, contentType),
            orderBy,
            status,
            updatedAt,
          });
        },
      );
    })
  );
}

(async () => {
  const head = (await git('rev-parse', 'content')).trim();
  const lastIndexedHash = await redis.get(LAST_INDEXED_HASH);
  if (head === lastIndexedHash) {
    log('Index already up-to-date at revision %s', head);
    process.exit(0);
  }

  // Produce createdAt/updatedAt ordered indices.
  log('Creating ordered index');
  const isAncestor = await getIsAncestor(lastIndexedHash, head);
  const range = isAncestor ? [lastIndexedHash, head].join('..') : head;
  const updates = [];
  const seenFiles = {};
  await getFileUpdates(
    range,
    ({file, status, createdAt, updatedAt, contentType, orderBy}) => {
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
        const indexName = getIndexNameForContentType(contentType);
        switch (status) {
          case 'A':
            updates.push(['ZADD', indexName, createdAt, file]);
            seenFiles[file] = true;
            break;
          case 'D':
            updates.push(['ZREM', indexName, file]);
            seenFiles[file] = orderBy === 'updatedAt';
            break;
          case 'M':
            if (orderBy === 'updatedAt') {
              updates.push(['ZADD', indexName, updatedAt, file]);
              seenFiles[file] = true;
            }
            break;
        }
      }
    },
  );
  print('\n');

  // Update tags.
  //
  // These updates are relatively slow and expensive because they have to
  // load every blob into memory, but on the bright side, they prime our
  // memcached metadata cache as a result.

  function addTag(tag, file, contentType, updatedAt) {
    updates.unshift(['ZINCRBY', REDIS_TAGS_INDEX_KEY, 1, tag]);
    const setName = 'tag:' + tag;
    updates.unshift([
      'ZADD',
      setName,
      updatedAt ? updatedAt.getTime() : -1,
      contentType + ':' + file,
    ]);
  }

  function removeTag(tag, file, contentType, updatedAt) {
    updates.unshift(['ZINCRBY', REDIS_TAGS_INDEX_KEY, -1, tag]);
    const setName = 'tag:' + tag;
    updates.unshift(['ZREM', setName, contentType + ':' + file]);
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
      // First thing we see is the deletion, then the edit, then the addition,
      // so when we unshift our operations, our queue becomes:
      //
      //   1. Increment counts for "foo", "bar".
      //   2. Decrement count for "bar", increment count for "baz".
      //   3. Decrement counts for "foo", "baz".
      //
      dot();
      const {tags, updatedAt} = await loadContent({
        subdirectory: contentType,
        file,
        commit: status === 'D' ? commit + '~' : commit,
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
    },
  );
  print('\n');

  // In case any tag removals caused a tag's count to drop to 0.
  updates.unshift(['ZREMRANGEBYSCORE', REDIS_TAGS_INDEX_KEY, '-inf', 0]);

  // All done.
  updates.push(['SET', LAST_INDEXED_HASH, head]);
  log('Sending index updates to Redis.');
  await redis.multi(updates);
  log('Finished updating index for revision %s.', head);
  process.exit(0);
})();
