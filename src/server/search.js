/**
 * @flow
 */

import git, {GitError} from './git';

type SearchResult = {
  id: string,
  type: 'blog' | 'pages' | 'snippets' | 'wiki',
};

let corpus = null;

async function getCorpus(): Array<SearchResult> {
  if (!corpus) {
    const output = await git(
      'ls-tree',
      '-r', // Recurse.
      '-z', // NUL-terminate.
      '--name-only', // Ignore metadata.
      'content', // Branch.
      '--', // Subsequent arguments are paths.
      'content/blog',
      'content/pages',
      'content/snippets',
      'content/wiki',
    );
    corpus = [];
    const regExp = new RegExp(
      'content/' + // Prefix.
      '([^/]+)/' + // Content type.
        '([^\0]+)\\.\\w+\0', // Filename match + extension + terminator.
      'g', // Match repeatedly.
    );
    let match;
    while ((match = regExp.exec(output))) {
      corpus.push({
        id: match[2],
        type: match[1],
      });
    }
  }
  return corpus;
}

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
  const atoms = [];

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
    atoms.push(new RegExp(atom, 'i')); // For title-based search below.
  });
  if (!directories.length) {
    directories.push('content');
  }

  // Put title-based results in first, as they are likely more relevant.
  const results = new Map();
  let entries = await getCorpus();
  atoms.every(atom => {
    entries = entries.filter(entry => {
      const {id, type} = entry;
      return atom.test(id);
    });
    return entries.length;
  });
  entries.forEach(entry => {
    const {id, type} = entry;
    const key = `${type}/${id}`;
    results.set(key, entry);
  });

  // Now add content-based results.
  const head = (await git('rev-parse', 'content')).trim();
  const tree = (await git('show', '-s', '--format=%T', head)).trim();
  let hits = '';
  try {
    hits = await git(...args, tree, '--', ...directories);
  } catch (e) {
    // `git grep` returns an exit status of 1 to indicate "nothing found".
    if (!(e instanceof GitError) || e.code !== 1) {
      throw e;
    }
  }

  // Extract hits into a more usable format.
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
    const type = match[1];
    const id = match[2];
    const key = `${type}/${id}`;
    if (!results.has(key)) {
      results.set(key, {id, type});
    }
  }
  if (hits.length && (!results.size || regExp.lastIndex)) {
    throw new Error('Failed to consume input');
  }
  return Array.from(results.values());
});
