import 'babel-polyfill';
import '../common/unhandledRejection';

import './normalize.css';
import './skeleton.css';

import {useRouterHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {RelayRouter} from 'react-router-relay';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routeConfig from '../common/routeConfig';

const history = useStandardScroll(useRouterHistory(createBrowserHistory))();

ReactDOM.render(
  <RelayRouter history={history} routes={routeConfig} />,
  document.getElementById('relay-root')
);
