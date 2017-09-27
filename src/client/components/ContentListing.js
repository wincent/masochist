/**
 * @flow
 */

import React from 'react';
import inBrowser from '../inBrowser';

if (inBrowser) {
  require('./ContentListing.css');
}

export default class ContentListing extends React.Component {
  render() {
    return (
      <table className="content-listing u-full-width">
        <thead>
          <tr>
            <th>What</th>
            <th>Title</th>
            <th>When</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}
