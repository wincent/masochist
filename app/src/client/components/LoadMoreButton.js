import React from 'react';

import './LoadMoreButton.css';

export default class LoadMoreButton extends React.Component {
  static propTypes = {
    onLoadMore: React.PropTypes.func.isRequired,
    isLoading: React.PropTypes.bool,
  };

  _handleLoadMore = event => {
    event.preventDefault();
    this.props.onLoadMore();
  }

  render() {
    const {isLoading} = this.props;
    return (
      <div className="load-more">
        <button
          disabled={isLoading}
          href="#more"
          onClick={this._handleLoadMore}>
          {isLoading ? 'Loading' : 'Load more'}&hellip;
        </button>
      </div>
    );
  }
}
