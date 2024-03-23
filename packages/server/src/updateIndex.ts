// Run with `bun packages/server/src/updateIndex.ts` from repo root.

// We use tab as a separator so that we can locate the beginning of each commit
// in the `git-log` output (in our content repo, tab will never appear as a
// character in a filename).
const TAB_FORMAT = '%x09';

const AUTHOR_DATE_FORMAT = '%at';
const COMMITTER_DATE_FORMAT = '%ct';
const FORMAT = `${TAB_FORMAT}${AUTHOR_DATE_FORMAT} ${COMMITTER_DATE_FORMAT}`;

const ADDED_FILTER = 'A';
const DELETED_FILTER = 'D';
const MODIFIED_FILTER = 'M';
const DIFF_FILTER = `${ADDED_FILTER}${DELETED_FILTER}${MODIFIED_FILTER}`;

// We assume 10-digit UNIX timestamps (this assumption is good until
// 2286-11-20T17:46:40.000Z).
const TIMESTAMP_LENGTH = 10;

// Get commit listing in a format like:
//
//    \t1606985236 1606985249\0\n        | <tab>$timestamp $timestamp<nul><nl>
//    M\0blog/building-a-pc.md\0         | $status<nul>$path<nul>
//    D\0blog/connecting-computers.md\0  | $status<nul>$path<nul>
//    \t1595023637 1595023637\0\n        | <tab>$timestamp $timestamp<nul><nl>
//    A\0blog/social-media.md\0          | $status<nul>$path<nul>
//
const log = Bun.spawn([
  'git',
  'log',
  `--diff-filter=${DIFF_FILTER}`,
  `--format=${FORMAT}`,
  '--name-status',
  '--no-merges',
  '--no-renames',
  '--relative=content',
  '-z',
  '--',
  'content',
], {
  cwd: '../content',
});

// Note that we never have to worry about multi-byte UTF-8 characters getting
// cut at a chunk boundary because the input is all ASCII.
const content = new Map();
const decoder = new TextDecoder();
let pending = '';

// It appears that, in practice, most chunks consist of a single commit, but
// I've seen chunks that span more than one commit, and commits that span more
// than one chunk, so most of the code in the loop below is book-keeping to
// allow us to process one commit at a time, with some effort made to avoid
// producing a bunch of short-lived intermediate strings.
for await (const chunk of log.stdout) {
  let cursor = 0;
  const text = pending + decoder.decode(chunk);

  const commitIndex = text.indexOf('\t', cursor);
  if (commitIndex === -1) {
    // Haven't found start of next commit yet. Keep reading.
    pending = text;
    continue;
  } else if (commitIndex > 0) {
    // We've found the end of a commit.
    const commit = parseCommit(text, 0, commitIndex);
    console.log(commit);
  } else {
    const nextIndex = text.indexOf('\t', commitIndex + 1);
    if (nextIndex === -1) {
    } else {
    }
  } else {
  }

}

function getDateFromTimestamp(timestamp: string): Date {
  const seconds = parseInt(timestamp, 10);
  if (!Number.isInteger(seconds)) {
    throw new Error(
      `getDateFromTimestamp(): failed to parse timestamp from string ${
        JSON.stringify(timestamp)
      }`,
    );
  }
  const milliseconds = seconds * 1000;
  return new Date(milliseconds);
}

type Status = 'A' | 'D' | 'M';
type Commit = {
  authorDate: Date;
  committerDate: Date;
  paths: Array<[Status, string]>;
};

function parseCommit(input: string, startIndex: number, endIndex: number): Commit {
  const authorDate = getDateFromTimestamp(text.substr(startIndex + 1, TIMESTAMP_LENGTH));
  const committerDate = getDateFromTimestamp(
    text.substr(startIndex + TIMESTAMP_LENGTH + 2, TIMESTAMP_LENGTH),
  );
  const paths = [];
  // TODO: loop over remainder of string, scanning paths
  return {
    authorDate,
    committerDate,
    paths,
  };
}
