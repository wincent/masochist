// Run with `bun packages/server/src/updateIndex.ts` from repo root.

export {};

// We use tab as a separator so that we can locate the beginning of each commit
// in the `git-log` output (in our content repo, tab will never appear as a
// character in a filename).
const TAB_FORMAT = '%x09';

const NUL = '\0';

const FRONTMATTER_DELIMITER = '---';

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

// Again, good while Git's SHA-1-based addressing is around.
const BLOB_ID_LENGTH = 40;

const TAGS_KEY = 'tags: ';

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

let text = await new Response(log.stdout).text();

type Metadata = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  tags: Array<string>;
};

const content = new Map<string, Metadata>();

const tags = new Map<string, Array<string>>();

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

const read = (length: number) => {
  if (index + length >= text.length) {
    throw new Error(
      `Cannot read ${length} bytes from string length ${text.length} at index ${index}`,
    );
  }
  const substring = text.substr(index, length);
  index += length;
  return substring;
};

// Read a "line" (ie. text up to next newline or NUL byte).
const readLine = () => {
  const newline = text.indexOf('\n', index);
  const nul = text.indexOf(NUL, index);
  if (newline === -1 && nul === -1) {
    throw new Error(
      `readLine(): Failed to find newline or NUL searching from index ${index}`,
    );
  }
  const closest = Math.min(newline, nul);
  if (closest === index) {
    return '';
  } else {
    const line = text.slice(index, closest);
    index = closest;
    return line;
  }
};

// Consume one character.
const chomp = () => {
  if (index >= text.length) {
    throw new Error(
      `Cannot chomp at index ${index} in text of length ${text.length}`,
    );
  }
  return text[index++];
};

const getTimestamp = () => {
  const substring = read(TIMESTAMP_LENGTH);
  return getDateFromTimestamp(substring);
};

while (index < text.length) {
  expect('\t');
  const authorDate = getTimestamp();
  expect(' ');
  const committerDate = getTimestamp();
  expect(NUL);
  expect('\n');

  while (index < text.length) {
    const status = text[index];
    if (status === '\t') {
      break;
    }
    index++;
    expect(NUL);
    const endIndex = text.indexOf(NUL, index);
    if (endIndex === -1) {
      throw new Error(
        `Failed to find NUL delimiter searching from index ${index}`,
      );
    }
    const path = text.slice(index, endIndex);
    index = endIndex;
    expect(NUL);

    if (status === ADDED_FILTER) {
      if (content.has(path)) {
        content.get(path)!.createdAt = authorDate;
      } else {
        content.set(path, {
          updatedAt: committerDate,
          createdAt: authorDate,
          tags: [],
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
          tags: [],
        });
      }
    } else if (status === MODIFIED_FILTER) {
      if (content.has(path)) {
        // Nothing to do.
      } else {
        content.set(path, {
          createdAt: authorDate,
          updatedAt: committerDate,
          tags: [],
        });
      }
    } else {
      throw new Error(`Unexpected status ${status} at index ${index}`);
    }
  }
}

const files = Bun.spawn([
  'git',
  '-C',
  'content',
  'ls-files',
  '--format=%(objectname) %(path)',
  '-z',
  '--',
  ':!images',
], {
  cwd: '../content',
});

text = await new Response(files.stdout).text();
index = 0;

// Map from paths to blob IDs.
const blobs = new Map<string, string>();

// Map from blob IDs to paths.
const paths = new Map<string, Array<string>>();

while (index < text.length) {
  const endIndex = text.indexOf(NUL, index);
  if (endIndex === -1) {
    throw new Error(
      `Failed to find end delimiter searching from index ${index}`,
    );
  }
  const blob = text.substr(index, BLOB_ID_LENGTH);
  const path = text.slice(index + BLOB_ID_LENGTH + 1, endIndex);
  if (!content.has(path)) {
    throw new Error(`Failed to find path ${JSON.stringify(path)}`);
  }
  index = endIndex + 1;
  blobs.set(path, blob);
  if (paths.has(blob)) {
    paths.get(blob)!.push(path);
  } else {
    paths.set(blob, [path]);
  }
}

// Read all blobs in one fell swoop, effectively doing the equivalent of:
//
//    git -C content ls-files --format='%(objectname)' -z -- ':!images' |
//    git cat-file --batch='%(objectname)' -Z
//
// Note: The Git currently installed on Amazon Linux 2 (2.40.1) is too old for
// this, as it doesn't support the `-z` switch.
//
const cat = Bun.spawn(['git', 'cat-file', '--batch=%(objectname)', '-Z'], {
  cwd: '../content',
  stdin: 'pipe',
});

for (const blob of blobs.values()) {
  cat.stdin.write(`${blob}\0`);
}
cat.stdin.flush();
cat.stdin.end();

// At the time of writing, we're reading in about 9 MB of text. Format is:
//
//    <blob><nul><contents><nul>
//    <blob><nul><contents><nul>
//    ...
//    <blob><nul><contents><nul>
//
// (Newlines above are for readability only. They don't appear in the actual
// output.)
//
// This works because there are no NUL bytes in the content, as you can verify
// with the following (which would print any lines containing NUL, but prints
// nothing):
//
//    git -C content ls-files --format='%(objectname)' -- ':!images' |
//    git cat-file --batch='%(objectname)' |
//    perl -ne '/\000/ and print;'
//
// Additionally, we're assuming "well-formed" content (every object has
// frontmatter, and there are no edge cases like frontmatter headers that don't
// end with a trailing newline).
//
text = await new Response(cat.stdout).text();

index = 0;
while (index < text.length) {
  const blob = read(BLOB_ID_LENGTH);
  if (!paths.has(blob)) {
    throw new Error(`Unrecognized blob ID ${JSON.stringify(blob)}`);
  }
  expect(NUL);
  let line;
  let seenDelimiter = false;
  while (line = readLine()) {
    chomp();
    if (!seenDelimiter && line !== FRONTMATTER_DELIMITER) {
      throw new Error('Missing frontmatter!');
    } else if (!seenDelimiter) {
      seenDelimiter = true;
    } else if (seenDelimiter && line === FRONTMATTER_DELIMITER) {
      break; // That's the end of the frontmatter.
    } else if (seenDelimiter) {
      if (line.startsWith(TAGS_KEY)) {
        const tagNames = line.slice(TAGS_KEY.length).split(/\s+/);
        for (let path of paths.get(blob)!) {
          content.get(path)!.tags = tagNames;
          for (const name of tagNames) {
            if (!tags.has(name)) {
              tags.set(name, []);
            }
            const tagged = tags.get(name)!;
            tagged.push(path);
          }
        }
      }
    }
  }
  const next = text.indexOf(NUL, index);
  if (next === -1) {
    throw new Error(
      `Failed to find NUL delimiter searching from index ${index}`,
    );
  } else {
    index = next + 1;
  }
}

// TODO:
//
// to delete all tags:
//   redis-cli KEYS "masochist:6:tag:*" | xargs redis-cli DEL
//
// or faster (fewer forks) and safer (without KEYS):
//
//   redis-cli --scan --pattern 'masochist:6:tag:*' |
//     perl -pe 's/"/\\"/g;s/^/DEL "/;s/$/"/;' |
//     redis-cli --pipe
//
// whatever we do here, I think we want to pipe it in to redis-cli as it's going
// to be running from a git commit hook and it makes it easy to debug (i can
// inspect the commands)
//
// https://redis.io/docs/manual/patterns/bulk-loading/
// https://redis.io/docs/manual/pipelining/

// Clear sorted sets.
for (let kind of ['blog', 'pages', 'snippets', 'tags', 'wiki']) {
  console.log(`ZREMRANGEBYSCORE masochist:6:${kind}-index 0 -1`);
}

// Repopulate blog-index, pages-index, snippets-index, wiki-index.
for (let [item, metadata] of content.entries()) {
  const kind = getKindForItem(item);
  const score = getScoreForMetadata(metadata, kind);
  const member = item
    .replace(/^[^/]+\//, '') // Strip prefix.
    .replace(/\.[^.]+$/, ''); // Strip extension.
  console.log(
    `ZADD masochist:6:${kind}-index ${score} ${quoteMemberName(member)}`,
  );
}

// Repopulate tags-index.
for (let [tag, taggeds] of tags.entries()) {
  const count = taggeds.length;
  console.log(`ZADD masochist:6:tags-index ${count} ${quoteMemberName(tag)}`);
  for (let tagged of taggeds) {
    const kind = getKindForItem(tagged);
    const score = content.get(tagged)?.updatedAt.getTime();
    const member = kind + ':' + tagged
      .replace(/^[^/]+\//, '') // Strip prefix.
      .replace(/\.[^.]+$/, ''); // Strip extension.
    console.log(
      `ZADD masochist:6:tag:${tag} ${score} ${quoteMemberName(member)}`,
    );
  }
}

function getKindForItem(item: string): 'blog' | 'pages' | 'snippets' | 'wiki' {
  if (item.startsWith('blog/')) {
    return 'blog';
  } else if (item.startsWith('pages/')) {
    return 'pages';
  } else if (item.startsWith('snippets/')) {
    return 'snippets';
  } else if (item.startsWith('wiki/')) {
    return 'wiki';
  } else {
    throw new Error(
      `getKindForItem(): Cannot determine item kind for ${
        JSON.stringify(item)
      }`,
    );
  }
}

function getScoreForMetadata(
  metadata: Metadata,
  kind: 'blog' | 'pages' | 'snippets' | 'wiki',
): number {
  if (kind === 'blog' || kind === 'snippets') {
    return metadata.createdAt.getTime();
  } else {
    return metadata.updatedAt.getTime();
  }
}

function quoteMemberName(item: string): string {
  return `"${item.replace(/"/g, '\\"')}"`;
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
