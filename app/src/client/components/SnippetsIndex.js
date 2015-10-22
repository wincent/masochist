import React from 'react';
import Relay from 'react-relay';
import DocumentTitle from './DocumentTitle';
import Snippet from './Snippet';
import LoadMoreButton from './LoadMoreButton';

class SnippetsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    }, ({ready, done, error, aborted}) => {
      this.setState({isLoading: !ready && !(done || error || aborted)});
    });
  }

  render() {
    return (
      <DocumentTitle title="snippets">
        <div>
          {
            this.props.viewer.snippets.edges.map(({node}) => (
              <Snippet key={node.id} snippet={node} />
            ))
          }
          {
            this.props.viewer.snippets.pageInfo.hasNextPage ?
              <LoadMoreButton
                isLoading={this.state.isLoading}
                onLoadMore={this._handleLoadMore}
              /> :
              null
          }
        </div>
      </DocumentTitle>
    );
  }
}

export default Relay.createContainer(SnippetsIndex, {
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
