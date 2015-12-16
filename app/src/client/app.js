import 'babel-polyfill';
import '../common/unhandledRejection';

import './normalize.css';
import './skeleton.css';

import {createHistory} from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import {RelayRouter} from 'react-router-relay';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';
import routeConfig from '../common/routeConfig';

const history = useStandardScroll(createHistory)();

ReactDOM.render(
  <RelayRouter history={history} routes={routeConfig} />,
  document.getElementById('relay-root')
);
