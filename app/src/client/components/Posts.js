import React from 'react';
import Relay from 'react-relay';
import Post from './Post';

class Posts extends React.Component {
  _handleSeeMore = event => {
    event.preventDefault();
    this.props.relay.setVariables({
      count: this.props.relay.variables.count + 10,
    });
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <ul>
          {
            this.props.viewer.posts.edges.map(edge => {
              const post = edge.node;
              return (
                <li key={post.id}>
                  <Post post={post} />
                </li>
              );
            })
          }
        </ul>
        {
          this.props.viewer.posts.pageInfo.hasNextPage ?
            <a href="#more" onClick={this._handleSeeMore}>Load more&hellip;</a> :
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
        name
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
