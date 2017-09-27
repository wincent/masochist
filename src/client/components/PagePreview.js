/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

import type {PagePreview as PagePreviewData} from './__generated__/PagePreview.graphql';

class PagePreview extends React.Component {
  props: {
    data: PagePreviewData,
  };

  render() {
    const page = this.props.data;
    const {description, title, url} = page;
    return (
      <tr>
        <td>
          <code>page</code>
        </td>
        <td>
          <Link title={description} to={url}>
            {title}
          </Link>
        </td>
        <td>
          <When data={page} />
        </td>
        <td>
          <Tags classes={{left: true, compact: true}} data={page} />
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(
  PagePreview,
  graphql`
    fragment PagePreview on Page {
      description
      title
      url
      ...Tags
      ...When
    }
  `,
);
