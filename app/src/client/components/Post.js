import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import DocumentTitle from './DocumentTitle';
import HTTPError from './HTTPError';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

class Post extends React.Component {
  render() {
    const {post} = this.props;

    if (!post) {
      return (
        <HTTPError code={404}>
          <p>
            Try inspecting {' '}
            <Link to="/blog">the blog index</Link> and {' '}
            <Link to="/tags">the tags listing</Link>, or using {' '}
            <Link to="/search">the site search</Link>.
          </p>
        </HTTPError>
      );
    }

    return (
      // post.url encode?
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

export default createFragmentContainer(Post, {
  post: graphql`
    fragment Post_post on Post {
      id
      title
      createdAt
      updatedAt
      url
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      ...Tags_tagged
    }
  `,
});
