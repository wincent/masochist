import React from 'react';

export default class When extends React.Component {
  render() {
    const humanReadable = this.props.createdAt;
    return (
      <div>
        <time title={humanReadable} datetime={this.props.createdAt}>
          {humanReadable}
        </time>
      </div>
    );
  }
}
