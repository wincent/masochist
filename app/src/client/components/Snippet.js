import React from 'react';
import Relay from 'react-relay';
import PrerenderedMarkup from './PrerenderedMarkup';
import When from './When';


class Snippet extends React.Component {

  render() {
    const {snippet} = this.props;
    return (
      <div>
        <h1>{snippet.title}</h1>
        <When createdAt={snippet.createdAt} updatedAt={snippet.updatedAt} />
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
