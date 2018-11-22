/**
 * @noflow
 */

import PropTypes from 'prop-types';
import React from 'react';

import type {Element} from 'react';

const StatusCodesToMessages = {
  '404': 'Not Found',
  '500': 'Internal Server Error',
};

export default class HTTPError extends React.Component {
  props: {
    children?: Element<*>,
    code: 404 | 500,
  };

  static defaultProps = {
    code: 404,
  };

  render() {
    const message = StatusCodesToMessages[this.props.code];
    return (
      <div>
        <h1>{message}</h1>
        {this.props.children}
        <p>
          Think you've found a problem? Please{' '}
          <a href="https://github.com/wincent/masochist/issues/new">
            report it
          </a>{' '}
          on the Masochist issue tracker.
        </p>
      </div>
    );
  }
}
