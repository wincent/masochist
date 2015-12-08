import React from 'react';
import DocumentTitle from './DocumentTitle';

export default class NotFound extends React.Component {
  render() {
    return (
      <DocumentTitle title="404 Not Found">
        <div>
          <h1>404 Not Found</h1>
          <p>These aren't the droids you're looking for.</p>
          <p>
            If you think this is incorrect,
            please <a href="https://github.com/wincent/masochist/issues/new">
            create an issue</a> on the Masochist issue tracker.
          </p>
        </div>
      </DocumentTitle>
    );
  }
}
