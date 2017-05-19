/**
 * @flow
 */

import {toGlobalId} from 'graphql-relay';
import stripTrailingSlash from '../common/stripTrailingSlash';
import {object} from '../common/checks';
import {HOST, SCHEME} from './constants';
import runQuery from './runQuery';

import type {$Request} from 'express';

/**
 * Returns a canonical URL for the response, or null if there is not one.
 */
export default (async function getCanonicalURLForRequest(
  request: $Request,
): Promise<?string> {
  // We only look at path, ignoring query string params.
  const path = request.path;
  let canonical;
  let match;

  // Warning: beautiful code ahead!</irony>
  if (path === '/') {
    canonical = '/blog';
  } else if (stripTrailingSlash(path) === '/blog') {
    canonical = '/blog';
  } else if (path.match(/^\/blog\/.+/)) {
    canonical = path;
  } else if (path.match(/^\/pages\/.+/)) {
    canonical = path;
  } else if (stripTrailingSlash(path) === '/snippets') {
    canonical = '/snippets';
  } else if (path.match(/^\/snippets\/.+/)) {
    canonical = path;
  } else if (stripTrailingSlash(path) === '/wiki') {
    canonical = '/wiki';
  } else if ((match = path.match(/^\/wiki\/(.+)\/?/))) {
    const decoded = decodeURIComponent(match[1]);
    const id = toGlobalId('Article', decoded.replace(/_/g, ' '));
    const result = await runQuery(
      `
      query ArticleQuery($id: ID!) {
        node(id: $id) {
          ... on Article {
            url
          }
        }
      }`,
      {id},
    );

    if (result.data && result.data.node) {
      canonical = object(result.data.node).url;
    }
  }

  if (canonical) {
    return SCHEME + HOST + stripTrailingSlash(canonical);
  }

  return null;
});
