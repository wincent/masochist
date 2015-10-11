import React from 'react';
import Relay from 'react-relay';
import PrerenderedMarkup from './PrerenderedMarkup';


class Snippet extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.snippet.title}</h1>
        <div>
          <PrerenderedMarkup html={this.props.snippet.body.html} />
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
