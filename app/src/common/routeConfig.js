import {toGlobalId} from 'graphql-relay';
import React from 'react';
import App from '../client/components/App';
import Article from '../client/components/Article';
import ArticlesIndex from '../client/components/ArticlesIndex';
import HTTPError from '../client/components/HTTPError';
import Page from '../client/components/Page';
import Post from '../client/components/Post';
import PostsIndex from '../client/components/PostsIndex';
import Progress from '../client/components/Progress';
import Search from '../client/components/Search';
import Snippet from '../client/components/Snippet';
import SnippetsIndex from '../client/components/SnippetsIndex';
import Tag from '../client/components/Tag';
import TagsIndex from '../client/components/TagsIndex';
import ArticleQueries from './routes/ArticleQueries';
import ArticlesIndexQueries from './routes/ArticlesIndexQueries';
import PageQueries from './routes/PageQueries';
import PostQueries from './routes/PostQueries';
import PostsIndexQueries from './routes/PostsIndexQueries';
import SearchQueries from './routes/SearchQueries';
import SnippetQueries from './routes/SnippetQueries';
import SnippetsQueries from './routes/SnippetsQueries';
import TagsIndexQueries from './routes/TagsIndexQueries';
import TagQueries from './routes/TagQueries';

/**
 * We use classical opaque GraphQL IDs internally ("Type:id", Base64-encoded)
 * but in our URLs we use human-readable ID strings, so we need this function to
 * convert for us.
 */
function getPrepareParams(contentType) {
  return (params, route) => ({id: toGlobalId(contentType, params.id)});
}

/**
 * Wiki articles are an extension to the above rule, because our internal IDs
 * use spaces while our URLs use underscores instead, to avoid ugly %20 URL
 * encoding in a user-visible place.
 */
function prepareArticleParams(params, route) {
  return {
    id: toGlobalId('Article', params.id.replace(/_/g, ' ')),
  };
}

/**
 * Tag pages are a special case as well, as we must support both "/tags/foo"
 * and "/tags/foo+bar".
 */
function prepareTagParams(params, route) {
  // TODO handle "foo+bar" case
  return {
    id: toGlobalId('Tag', params.id),
  };
}

// TODO: handle .txt on snippet
const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: PostsIndex,
      queries: PostsIndexQueries,
      renderLoading: () => <Progress />,
    },
    childRoutes: [
      {
        path: 'blog',
        component: PostsIndex,
        queries: PostsIndexQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: Post,
        path: 'blog/:id',
        prepareParams: getPrepareParams('Post'),
        queries: PostQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: Page,
        path: 'pages/:id',
        prepareParams: getPrepareParams('Page'),
        queries: PageQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: Search,
        path: 'search',
        queries: SearchQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: Search,
        path: 'search/:q',
        queries: SearchQueries,
      },
      {
        component: SnippetsIndex,
        path: 'snippets',
        queries: SnippetsQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: Snippet,
        path: 'snippets/:id',
        prepareParams: getPrepareParams('Snippet'),
        queries: SnippetQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: TagsIndex,
        path: 'tags',
        queries: TagsIndexQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: Tag,
        path: 'tags/:id',
        prepareParams: prepareTagParams,
        queries: TagQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: ArticlesIndex,
        path: 'wiki',
        queries: ArticlesIndexQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: Article,
        path: 'wiki/:id',
        prepareParams: prepareArticleParams,
        queries: ArticleQueries,
        renderLoading: () => <Progress />,
      },
      {
        component: HTTPError,
        path: '*',
      },
    ],
  },
];

export default routeConfig;
