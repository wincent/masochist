import React from 'react';

import './LoadMoreButton.css';

export default class LoadMoreButton extends React.Component {
  static propTypes = {
    onLoadMore: React.PropTypes.func,
  };

  _handleLoadMore = event => {
    event.preventDefault();
    this.props.onLoadMore();
  }

  render() {
    return (
      <div className="load-more">
        <a
          className="button"
          href="#more"
          onClick={this._handleLoadMore}>
          Load more&hellip;
        </a>
      </div>
    );
  }
}
