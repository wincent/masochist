'use strict';

import 'babel/polyfill';

import App from './components/App';
import AppQueries from './routes/AppQueries';
import {createHistory} from 'history';
import {Route, Router} from 'react-router';
import ReactRouterRelay from 'react-router-relay';

const history = createHistory();

ReactDOM.render(
  <Router history={history} createElement={ReactRouterRelay.createElement}>
    <Route path="/" component={App} queries={AppQueries} />
  </Router>,
  document.getElementById('relay-root')
);
