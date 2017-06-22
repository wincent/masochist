/**
 * @flow
 */

import git, {GitError} from './git';

type SearchResult = {
  id: string,
  type: string,
};

/**
 * For ease of use, be liberal in what filters we accept.
 */
const NORMALIZED_FILTERS = {
  article: 'wiki',
  articles: 'wiki',
  page: 'pages',
  post: 'blog',
  posts: 'blog',
  snippet: 'snippets',
};

function getFilter(atom: string): ?string {
  const filter = atom.match(/^type:(\w+)$/);
  if (filter) {
    const match = filter[1];
    const normalized = NORMALIZED_FILTERS[match] || match;
    return `content/${normalized}`;
  }
  return null;
}

/**
 * Uses `git grep` to search the content repo.
 */
export default (async function search(q: string): Promise<Array<SearchResult>> {
  const args = [
    'grep',
    '-I', // Ignore binary files.
    '-P', // Use Perl-compatible regular expressions.
    '-i', // Ignore case.
    '-l', // List matching file-names rather than the matches themselves.
    '-z', // Use NUL byte as file-name separator.
    '--all-match', // Multiple patterns must all match.
    '--full-name', // Always print paths relative to top of repo.
  ];

  // Empty search pattern returns nothing.
  const trimmed = q.trim();
  if (!trimmed) {
    return [];
  }

  const directories = [];

  trimmed.split(/\s+/).forEach(atom => {
    const filter = getFilter(atom);
    if (filter) {
      directories.push(filter);
      return;
    }
    args.push(
      '-e', // Flag that next param is a search pattern.
      atom,
    );
  });
  if (!directories.length) {
    directories.push('content');
  }

  const head = (await git('rev-parse', 'content')).trim();
  const tree = (await git('show', '-s', '--format=%T', head)).trim();
  let hits = '';
  try {
    hits = await git(...args, tree, '--', ...directories);
  } catch (e) {
    // `git grep` returns an exit status of 1 to indicate "nothing found".
    if (e instanceof GitError && e.code === 1) {
      return [];
    }
    throw e;
  }

  // Extract hits into a more usable format.
  const results = [];
  const regExp = new RegExp(
    // Tree SHA + separator.
    '[a-f0-9]{40}:' +
      // Prefix.
      'content/' +
      // Content type.
      '([^/]+)/' +
      // Filename match + extension + terminator.
      '([^\0]+)\\.\\w+\0',
    // Match repeatedly.
    'g',
  );
  let match;
  while ((match = regExp.exec(hits))) {
    results.push({
      id: match[2],
      type: match[1],
    });
  }
  if (hits.length && (!results.length || regExp.lastIndex)) {
    throw new Error('Failed to consume input');
  }
  return results;
});
