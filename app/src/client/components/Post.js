import React from 'react';
import Relay from 'react-relay';
import DocumentTitle from './DocumentTitle';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

class Post extends React.Component {
  render() {
    const {post} = this.props;
    return (
      <DocumentTitle isLeaf={true} title={post.title}>
        <article>
          <h1>
            <Link to={post.url}>
              {post.title}
            </Link>
          </h1>
          <When createdAt={post.createdAt} updatedAt={post.updatedAt} />
          <div>
            <TrustedPrerenderedMarkup html={post.body.html} />
          </div>
          <Tags tagged={post} />
        </article>
      </DocumentTitle>
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
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
        ${Tags.getFragment('tagged')}
      }
    `,
  },
});
