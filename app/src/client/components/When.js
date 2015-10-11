import React from 'react';
import Time from './Time';

export default class When extends React.Component {
  render() {
    return (
      <div>
        <Time datetime={this.props.createdAt} />
      </div>
    );
  }
}
