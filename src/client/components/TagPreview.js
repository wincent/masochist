/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';

import type {TagPreview as TagPreviewData} from './__generated__/TagPreview.graphql';

class TagPreview extends React.Component {
  props: {
    data: TagPreviewData,
  };

  render() {
    const {count, name, url} = this.props.data;
    return (
      <tr>
        <td>
          <Link to={url}>{name}</Link>
        </td>
        <td>{count}</td>
      </tr>
    );
  }
}

export default createFragmentContainer(
  TagPreview,
  graphql`
    fragment TagPreview on Tag {
      count
      name
      url
    }
  `,
);
