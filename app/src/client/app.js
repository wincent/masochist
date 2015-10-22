import 'babel/polyfill';
import '../common/unhandledRejection';

import {toGlobalId} from 'graphql-relay';
import App from './components/App';
import Article from './components/Article';
import ArticlesIndex from './components/ArticlesIndex';
import Page from './components/Page';
import Post from './components/Post';
import PostsIndex from './components/PostsIndex';
import Snippet from './components/Snippet';
import SnippetsIndex from './components/SnippetsIndex';
import Tag from './components/Tag';
import TagsIndex from './components/TagsIndex';
import ArticleQueries from './routes/ArticleQueries';
import ArticlesIndexQueries from './routes/ArticlesIndexQueries';
import PageQueries from './routes/PageQueries';
import PostQueries from './routes/PostQueries';
import PostsIndexQueries from './routes/PostsIndexQueries';
import SnippetQueries from './routes/SnippetQueries';
import SnippetsQueries from './routes/SnippetsQueries';
import TagsIndexQueries from './routes/TagsIndexQueries';
import TagQueries from './routes/TagQueries';
import {createHistory} from 'history';
import {IndexRoute, Route, Router} from 'react-router';
import ReactRouterRelay from 'react-router-relay';
import React from 'react';
import ReactDOM from 'react-dom';

const history = createHistory();

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

ReactDOM.render(
  <Router history={history} createElement={ReactRouterRelay.createElement}>
    <Route component={App} path="/">
      <IndexRoute component={PostsIndex} queries={PostsIndexQueries} />
      <Route component={PostsIndex} path="blog" queries={PostsIndexQueries} />
      <Route
        component={Post}
        path="blog/:id"
        prepareParams={getPrepareParams('Post')}
        queries={PostQueries}
      />
      <Route
        component={Page}
        path="pages/:id"
        prepareParams={getPrepareParams('Page')}
        queries={PageQueries}
      />
      <Route component={SnippetsIndex} path="snippets" queries={SnippetsQueries} />
      <Route
        component={Snippet}
        path="snippets/:id"
        prepareParams={getPrepareParams('Snippet')}
        queries={SnippetQueries}
      />
      <Route component={TagsIndex} path="tags" queries={TagsIndexQueries} />
      <Route
        component={Tag}
        path="tags/:id"
        prepareParams={prepareTagParams}
        queries={TagQueries}
      />
      <Route component={ArticlesIndex} path="wiki" queries={ArticlesIndexQueries} />
      <Route
        component={Article}
        path="wiki/:id"
        prepareParams={prepareArticleParams}
        queries={ArticleQueries}
      />
    </Route>
  </Router>,
  document.getElementById('relay-root')
);
