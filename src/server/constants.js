/**
 * @flow strict
 */

import getIndexNameForContentType from './getIndexNameForContentType';

export const HOST = 'wincent.com';
export const SCHEME = 'https://';

export const REPO =
  (__DEV__ && process.env.MASOCHIST_CONTENT_REPO) || '/var/masochist/content';

/**
 * Redis-related.
 */

export const LAST_INDEXED_HASH = 'last-indexed-hash';

/**
 * Can manually force cache invalidation by bumping this.
 */
export const REDIS_CACHE_VERSION = '6';

export const REDIS_KEY_PREFIX = 'masochist';

export const REDIS_BLOG_INDEX_KEY = getIndexNameForContentType('blog');
export const REDIS_SNIPPETS_INDEX_KEY = getIndexNameForContentType('snippets');
export const REDIS_TAGS_INDEX_KEY = getIndexNameForContentType('tags');
export const REDIS_WIKI_INDEX_KEY = getIndexNameForContentType('wiki');
