import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import PrerenderedMarkup from './PrerenderedMarkup';
import When from './When';

class Post extends React.Component {
  render() {
    const {post} = this.props;
    return (
      <article>
        <h1>
          <Link to={post.url}>
            {post.title}
          </Link>
        </h1>
        <When createdAt={post.createdAt} updatedAt={post.updatedAt} />
        <div>
          <PrerenderedMarkup html={this.props.post.body.html} />
        </div>
      </article>
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
        url
        tags
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
      }
    `,
  },
});
