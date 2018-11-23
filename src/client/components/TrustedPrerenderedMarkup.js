/**
 * @flow
 */

import React from 'react';

type Props = {
  html: string,
};

// TODO: make this stateless functional (and probably others) -- will need
// React.memo(fn)
export default class TrustedPrerenderedMarkup extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
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
