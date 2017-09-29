/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import HTTPError from './HTTPError';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import type {Post as PostData} from './__generated__/Post.graphql';

class Post extends React.Component {
  props: {
    data: PostData,
  };

  render() {
    const post = this.props.data;

    if (!post) {
      return (
        <HTTPError code={404}>
          <p>
            Try inspecting <Link to="/blog">the blog index</Link> and {' '}
            <Link to="/tags">the tags listing</Link>, or using {' '}
            <Link to="/search">the site search</Link>.
          </p>
        </HTTPError>
      );
    }

    return (
      // post.url encode?
      <article>
        <h1>
          <Link to={post.url}>{post.title}</Link>
        </h1>
        <When data={post} />
        <div>
          <TrustedPrerenderedMarkup html={post.body.html} />
        </div>
        <Tags data={post} />
      </article>
    );
  }
}

export default createFragmentContainer(
  Post,
  graphql`
    fragment Post on Post {
      id
      title
      url
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      ...Tags
      ...When
    }
  `,
);
