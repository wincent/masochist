import React from 'react';

import './ContentListing.css';

class ContentListing extends React.Component {
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
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default ContentListing;
