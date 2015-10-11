import 'babel/polyfill';

import {toGlobalId} from 'graphql-relay';
import App from './components/App';
import Post from './components/Post';
import Posts from './components/Posts';
import Snippet from './components/Snippet';
import Snippets from './components/Snippets';
import AppQueries from './routes/AppQueries';
import PostQueries from './routes/PostQueries';
import PostsQueries from './routes/PostsQueries';
import SnippetQueries from './routes/SnippetQueries';
import SnippetsQueries from './routes/SnippetsQueries';
import {createHistory} from 'history';
import {Route, Router} from 'react-router';
import ReactRouterRelay from 'react-router-relay';
import React from 'react';
import ReactDOM from 'react-dom';

const history = createHistory();

function preparePostParams(params, route) {
  return {
    id: toGlobalId('Post', params.id),
  };
}

function prepareSnippetParams(params, route) {
  return {
    id: toGlobalId('Snippet', params.id),
  };
}

ReactDOM.render(
  <Router history={history} createElement={ReactRouterRelay.createElement}>
    <Route component={App} path="/" queries={AppQueries} />
    <Route component={Posts} path="/blog/" queries={PostsQueries} />
    <Route
      component={Post}
      path="/blog/:id"
      prepareParams={preparePostParams}
      queries={PostQueries}
    />
    <Route component={Snippets} path="/snippets/" queries={SnippetsQueries} />
    <Route
      component={Snippet}
      path="/snippets/:id"
      prepareParams={prepareSnippetParams}
      queries={SnippetQueries}
    />
  </Router>,
  document.getElementById('relay-root')
);
