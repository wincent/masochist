import React from 'react';
import ReactDOM from 'react-dom';
import {
  canonicalHost,
  canonicalScheme,
} from '../../common/config';
import stripTrailingSlash from '../../common/stripTrailingSlash';

class Like extends React.Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired,
  };

  componentDidMount() {
    const wrapper = ReactDOM.findDOMNode(this);
    if (wrapper) {
      FB.XFBML.parse(wrapper);
    }
  }

  render() {
    const {url} = this.props;
    if (stripTrailingSlash(window.location.pathname) !== url) {
      // We're probably on an index page; don't try to show widget.
      return null;
    }

    // Note the use of the wrapper div for use with `FB.XFBML.parse` above.
    return (
      <div>
        <div
          className="fb-like"
          data-href={canonicalScheme + canonicalHost + url}
          data-layout="button"
          data-action="like"
          data-show-faces="false"
          data-share="false"
        />
      </div>
    );
  }
}

export default Like;
