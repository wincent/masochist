import React from 'react';
import Relay from 'react-relay';

// TODO: rename this component (it's not just for wikitext, but for trusted
// HTML)
import Wikitext from './Wikitext';

class Snippet extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.snippet.title}</h1>
        <div>
          <Wikitext html={this.props.snippet.body.html} />
        </div>
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
