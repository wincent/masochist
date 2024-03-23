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
  ':!content/images',
], {
  cwd: '../content',
});

const text = await new Response(log.stdout).text();

const content = new Map<string, {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}>();

let index = 0;

const expect = (char: string) => {
  if (text[index] !== char) {
    throw new Error(
      `Expected ${JSON.stringify(char)} at index ${index} but got ${
        JSON.stringify(text[index])
      }`,
    );
  }
  index++;
};

const getTimestamp = () => {
  const timestamp = getDateFromTimestamp(text.substr(index, TIMESTAMP_LENGTH));
  index += TIMESTAMP_LENGTH;
  return timestamp;
};

while (index < text.length) {
  expect('\t');
  const authorDate = getTimestamp();
  expect(' ');
  const committerDate = getTimestamp();
  expect('\0');
  expect('\n');

  while (index < text.length) {
    const status = text[index];
    if (status === '\t') {
      break;
    }
    index++;
    expect('\0');
    const endIndex = text.indexOf('\0', index);
    if (endIndex === -1) {
      throw new Error(
        `Failed to find NUL delimiter searching from index ${index}`,
      );
    }
    const path = text.slice(index, endIndex);
    index = endIndex;
    expect('\0');

    if (status === ADDED_FILTER) {
      if (content.has(path)) {
        content.get(path).createdAt = authorDate;
      } else {
        content.set(path, {
          updatedAt: committerDate,
          createdAt: authorDate,
        });
      }
    } else if (status === DELETED_FILTER) {
      if (content.has(path)) {
        // Nothing to do.
      } else {
        content.set(path, {
          createdAt: authorDate,
          updatedAt: committerDate,
          deletedAt: committerDate,
        });
      }
    } else if (status === MODIFIED_FILTER) {
      if (content.has(path)) {
        // Nothing to do.
      } else {
        content.set(path, {
          createdAt: authorDate,
          updatedAt: committerDate,
        });
      }
    } else {
      throw new Error(`Unexpected status ${status} at index ${index}`);
    }
  }
}

console.log(content);

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
