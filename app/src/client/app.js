import 'babel/polyfill';

import {toGlobalId} from 'graphql-relay';
import App from './components/App';
import Article from './components/Article';
import Articles from './components/Articles';
import Post from './components/Post';
import Posts from './components/Posts';
import Snippet from './components/Snippet';
import Snippets from './components/Snippets';
import ArticleQueries from './routes/ArticleQueries';
import ArticlesQueries from './routes/ArticlesQueries';
import PostQueries from './routes/PostQueries';
import PostsQueries from './routes/PostsQueries';
import SnippetQueries from './routes/SnippetQueries';
import SnippetsQueries from './routes/SnippetsQueries';
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
 * use spaces while our URLs use underscores instead, to avoind ugly %20 URL
 * encoding in a user-visible place.
 */
function prepareArticleParams(params, route) {
  return {
    id: toGlobalId('Article', params.id.replace(/_/g, ' ')),
  };
}

ReactDOM.render(
  <Router history={history} createElement={ReactRouterRelay.createElement}>
    <Route component={App} path="/">
      <IndexRoute component={Posts} queries={PostsQueries} />
      <Route component={Articles} path="wiki" queries={ArticlesQueries} />
      <Route
        component={Article}
        path="wiki/:id"
        prepareParams={prepareArticleParams}
        queries={ArticleQueries}
      />
      <Route component={Posts} path="blog" queries={PostsQueries} />
      <Route
        component={Post}
        path="blog/:id"
        prepareParams={getPrepareParams('Post')}
        queries={PostQueries}
      />
      <Route component={Snippets} path="snippets" queries={SnippetsQueries} />
      <Route
        component={Snippet}
        path="snippets/:id"
        prepareParams={getPrepareParams('Snippet')}
        queries={SnippetQueries}
      />
    </Route>
  </Router>,
  document.getElementById('relay-root')
);
