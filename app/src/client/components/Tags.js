import React from 'react';
import Relay from 'react-relay';

class Tags extends React.Component {
  render() {
    return (
      // TODO: use an icon here
      <div>
        Tags: {this.props.taggable.tags.join(' ')}
      </div>
    );
  }
}

export default Relay.createContainer(Tags, {
  fragments: {
    taggable: () => Relay.QL`
      fragment on Taggable {
        tags
      }
    `,
  },
});
