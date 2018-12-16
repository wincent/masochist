/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';

import type {ChildrenArray, Node as ReactNode} from 'react';

const StatusCodesToMessages = {
  '404': 'Not Found',
  '500': 'Internal Server Error',
};

type Props = {
  children?: $ReadOnlyArray<ChildrenArray<ReactNode>>,
  code: 404 | 500,
};

export default class HTTPError extends React.Component<Props> {
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
