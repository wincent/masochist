/**
 * @flow
 */

import git from './git';

opaque type CommitLog = string;

export default function getWhatChanged(
  revisions: string,
  path: string,
): Promise<CommitLog> {
  // Custom log format (^@ here represents the NUL \0 byte):
  //
  // e31176b20bbb743c21c74a3a98128b759d62b999 1444055654 1444055654
  // :100644 100644 6535626... ec6d229... M^@src/bin/updateIndices.js^@^@
  // 50bc13b5bc01eecf3a07f89c85fd3bb769e6eec1 1444054911 1444054911
  // :100644 100644 12d2393... 600f5ef... M^@package.json^@
  return git(
    'log',
    '--pretty=format:%n%H %at %ct',
    '--raw',
    '-z',
    revisions,
    '--',
    path,
  );
}

export async function forEachCommit(
  commits: CommitLog,
  callback: ({
    commit: string,
    createdAt: string,
    file: string,
    status: 'A' | 'D' | 'M',
    updatedAt: string,
  }) => Promise<void> | void,
): Promise<void> {
  // Create a new RegExp for every caller so that any concurrent callers
  // don't end up sharing state.
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
        throw new Error(`getWhatChanged: Unrecognized status: '${status}'.`);
      }
      if (!commit || !createdAt || !file || !updatedAt) {
        throw new Error(
          'getWhatChanged: Failed to extract all of: commit, createdAt, file, updatedAt.',
        );
      }
      await callback({
        commit,
        createdAt,
        file,
        status,
        updatedAt,
      });
    }
  }
  if (regExp.lastIndex) {
    // We expect to get all the way to the end of the input, in which case
    // `lastIndex` should reset to 0.
    throw new Error('getWhatChanged: Failed to consume input.');
  }
}
