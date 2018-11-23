/**
 * @flow
 */

import React from 'react';
import inBrowser from '../../common/inBrowser';

if (inBrowser) {
  require('./LoadMoreButton.css');
}

type Props = {
  onLoadMore: () => void,
  isLoading: boolean,
};

export default class LoadMoreButton extends React.Component<Props> {
  _handleLoadMore = (event: SyntheticEvent<HTMLButtonElement>) => {
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
          onClick={this._handleLoadMore}
        >
          {isLoading ? 'Loading…' : 'Load more…'}
        </button>
      </div>
    );
  }
}
