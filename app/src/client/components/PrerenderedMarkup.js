import React from 'react';

export default class PrerenderedMarkup extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.html !== nextProps.html;
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.html}} />
    );
  }
}
