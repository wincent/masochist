import React from 'react';
import Relay from 'react-relay';
import Snippet from './Snippet';

class Snippets extends React.Component {
  _handleSeeMore = event => {
    event.preventDefault();
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    });
  }

  render() {
    return (
      <div>
        <h1>Snippets</h1>
        {
          this.props.viewer.snippets.edges.map(({node}) => (
            <Snippet key={node.id} snippet={node} />
          ))
        }
        {
          this.props.viewer.snippets.pageInfo.hasNextPage ?
            <a
              className="button"
              href="#more"
              onClick={this._handleSeeMore}>
              Load more&hellip;
            </a> :
            null
        }
      </div>
    );
  }
}

export default Relay.createContainer(Snippets, {
  initialVariables: {
    count: 3,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        snippets(first: $count) {
          edges {
            node {
              id
              ${Snippet.getFragment('snippet')}
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
  },
});
