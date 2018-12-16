/**
 * @flow
 */

import React from 'react';

import HTTPError from '../client/components/HTTPError';
import markupExtensions from './markupExtensions';
import ArticleRoute from './routes/ArticleRoute';
import ArticlesRoute from './routes/ArticlesRoute';
import PageRoute from './routes/PageRoute';
import PostRoute from './routes/PostRoute';
import PostsRoute from './routes/PostsRoute';
import SearchRoute from './routes/SearchRoute';
import SnippetSourceRoute from './routes/SnippetSourceRoute';
import SnippetRoute from './routes/SnippetRoute';
import SnippetsRoute from './routes/SnippetsRoute';
import TagsRoute from './routes/TagsRoute';
import TagRoute from './routes/TagRoute';
import toGlobalId from './toGlobalId';

/**
 * We use classical opaque GraphQL IDs internally ("Type:id", Base64-encoded)
 * but in our URLs we use human-readable ID strings, so we need this function to
 * convert for us.
 */
function getPrepareParams(contentType) {
  return params => ({
    ...params,
    id: toGlobalId(contentType, params.id),
  });
}

/**
 * Wiki articles are an extension to the above rule, because our internal IDs
 * use spaces while our URLs use underscores instead, to avoid ugly %20 URL
 * encoding in a user-visible place.
 */
function prepareArticleParams(params) {
  return {
    ...params,
    id: toGlobalId('Article', params.id.replace(/_/g, ' ')),
    // TODO: figure out if I need to do i need to do anything special here?
  };
}

/**
 * Tag pages are a special case as well, as we must support both "/tags/foo"
 * and "/tags/foo+bar".
 */
function prepareTagParams(params) {
  // TODO: handle "foo+bar" case (this is the only reason this is a separate
  // function).
  return {
    ...params,
    id: toGlobalId('Tag', params.id),
  };
}

export default [
  {
    path: '/',
    ...PostsRoute,
  },
  {
    path: '/blog',
    ...PostsRoute,
  },
  {
    path: '/blog/:id',
    prepare: getPrepareParams('Post'),
    ...PostRoute,
  },
  {
    path: '/pages/:id',
    prepare: getPrepareParams('Page'),
    ...PageRoute,
  },
  {
    path: '/search',
    ...SearchRoute,
  },
  {
    path: '/search/:q',
    ...SearchRoute,
  },
  {
    path: '/snippets',
    ...SnippetsRoute,
  },
  {
    path: `/snippets/:id.:format(${markupExtensions.join('|')})`,
    prepare: getPrepareParams('Snippet'),
    ...SnippetSourceRoute,
  },
  {
    path: '/snippets/:id',
    prepare: getPrepareParams('Snippet'),
    ...SnippetRoute,
  },
  {
    path: '/tags',
    ...TagsRoute,
  },
  {
    path: '/tags/:id',
    prepare: prepareTagParams,
    ...TagRoute,
  },
  {
    path: '/wiki',
    ...ArticlesRoute,
  },
  {
    path: '/wiki/:id',
    prepare: prepareArticleParams,
    ...ArticleRoute,
  },
  {
    // Catch-all.
    path: '*',
    action() {
      // TODO: test this is actually getting hit
      // (once we have client-side link handling)
      return {
        component: <HTTPError code={404} />,
      };
    },
  },
];
