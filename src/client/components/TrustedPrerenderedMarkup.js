/**
 * @flow
 */

import React from 'react';

export default class TrustedPrerenderedMarkup extends React.Component {
  props: {
    html: string,
  };

  shouldComponentUpdate(nextProps: {html: string}) {
    return this.props.html !== nextProps.html;
  }

  render() {
    return (
      <div
        className="prerendered"
        dangerouslySetInnerHTML={{__html: this.props.html}}
      />
    );
  }
}
