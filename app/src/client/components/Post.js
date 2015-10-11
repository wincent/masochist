import React from 'react';
import Relay from 'react-relay';
import PrerenderedMarkup from './PrerenderedMarkup';
import When from './When';

class Post extends React.Component {
  render() {
    const {post} = this.props;
    return (
      <div>
        <h1>{post.title}</h1>
        <When createdAt={post.createdAt} updatedAt={post.updatedAt} />
        <div>
          <PrerenderedMarkup html={this.props.post.body.html} />
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(Post, {
  initialVariables: {
    baseHeadingLevel: 2,
  },
  fragments: {
    post: () => Relay.QL`
      fragment on Post {
        id
        title
        createdAt
        updatedAt
        tags
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
      }
    `,
  },
});
