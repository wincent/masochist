import React from 'react';
import Relay from 'react-relay';

class Snippet extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.snippet.title}</h1>
      </div>
    );
  }
}

export default Relay.createContainer(Snippet, {
  fragments: {
    snippet: () => Relay.QL`
      fragment on Snippet {
        id
        title
        createdAt
        updatedAt
        tags
        body {
          html(baseHeadingLevel: 2)
        }
      }
    `,
  },
});
