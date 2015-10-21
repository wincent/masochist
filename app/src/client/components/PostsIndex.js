import React from 'react';
import Relay from 'react-relay';
import LoadMoreButton from './LoadMoreButton';
import Post from './Post';

class PostsIndex extends React.Component {
  // TODO: DRY up this pagination pattern
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
      <div>
        {
          this.props.viewer.posts.edges.map(({node}) => (
            <Post key={node.id} post={node} />
          ))
        }
        {
          this.props.viewer.posts.pageInfo.hasNextPage ?
            <LoadMoreButton
              isLoading={this.state.isLoading}
              onLoadMore={this._handleLoadMore}
            /> :
            null
        }
      </div>
    );
  }
}

export default Relay.createContainer(PostsIndex, {
  initialVariables: {
    count: 3,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        posts(first: $count) {
          edges {
            node {
              id
              ${Post.getFragment('post')}
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
