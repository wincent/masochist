import React from 'react';
import Relay from 'react-relay';
import LoadMoreButton from './LoadMoreButton';
import Post from './Post';

class Posts extends React.Component {
  _handleLoadMore = () => {
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
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
            <LoadMoreButton onLoadMore={this._handleLoadMore} /> :
            null
        }
      </div>
    );
  }
}

export default Relay.createContainer(Posts, {
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
