/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import TagLozenge from './TagLozenge';
import Tags from './Tags';
import When from './When';

import type {PostPreview as PostPreviewData} from './__generated__/PostPreview.graphql';

class PostPreview extends React.Component<{data: PostPreviewData}> {
  render() {
    const post = this.props.data;
    const {description, title, url} = post;
    return (
      <tr>
        <td>
          <TagLozenge type="blog" />
        </td>
        <td>
          <Link title={description} to={url}>
            {title}
          </Link>
        </td>
        <td>
          <When data={post} />
        </td>
        <td>
          <Tags classes={{left: true, compact: true}} data={post} />
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(
  PostPreview,
  graphql`
    fragment PostPreview on Post {
      description
      title
      url
      ...Tags
      ...When
    }
  `,
);
