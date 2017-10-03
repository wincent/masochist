/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import inBrowser from '../../common/inBrowser';

if (inBrowser) {
  require('./LoadMoreButton.css');
}

export default class LoadMoreButton extends React.Component {
  static propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  };

  _handleLoadMore = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.onLoadMore();
  };

  render() {
    const {isLoading} = this.props;
    return (
      <div className="load-more">
        <button
          disabled={isLoading}
          href="#more"
          onClick={this._handleLoadMore}>
          {isLoading ? 'Loading…' : 'Load more…'}
        </button>
      </div>
    );
  }
}
