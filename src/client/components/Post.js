/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import Metadata from './Metadata';
import When from './When';

import type {Post as PostData} from './__generated__/Post.graphql';

class Post extends React.Component<{data: PostData}> {
  render() {
    const post = this.props.data;
    return (
      // post.url encode?
      <article>
        <h1>
          <Link to={post.url}>{post.title ?? 'Untitled'}</Link>
        </h1>
        <Metadata>
          <When data={post} />
          <span>{post.readTime} minute read</span>
        </Metadata>
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
      readTime
      ...Tags
      ...When
    }
  `,
);
