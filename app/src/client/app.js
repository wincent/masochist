import 'babel/polyfill';

import {toGlobalId} from 'graphql-relay';
import App from './components/App';
import Snippet from './components/Snippet';
import Snippets from './components/Snippets';
import AppQueries from './routes/AppQueries';
import SnippetQueries from './routes/SnippetQueries';
import SnippetsQueries from './routes/SnippetsQueries';
import {createHistory} from 'history';
import {Route, Router} from 'react-router';
import ReactRouterRelay from 'react-router-relay';
import React from 'react';
import ReactDOM from 'react-dom';

const history = createHistory();

function prepareSnippetParams(params, route) {
  return {
    id: toGlobalId('Snippet', params.id),
  };
}

ReactDOM.render(
  <Router history={history} createElement={ReactRouterRelay.createElement}>
    <Route component={App} path="/" queries={AppQueries} />
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
