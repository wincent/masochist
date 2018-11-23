/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import TagLozenge from './TagLozenge';
import When from './When';

import type {SnippetPreview as SnippetPreviewData} from './__generated__/SnippetPreview.graphql';

class SnippetPreview extends React.Component<{data: SnippetPreviewData}> {
  render() {
    const snippet = this.props.data;
    const {description, title, url} = snippet;
    return (
      <tr>
        <td>
          <TagLozenge type="snippet" />
        </td>
        <td>
          <Link title={description} to={url}>
            {title}
          </Link>
        </td>
        <td>
          <When data={snippet} />
        </td>
        <td>
          <Tags classes={{left: true, compact: true}} data={snippet} />
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(
  SnippetPreview,
  graphql`
    fragment SnippetPreview on Snippet {
      description
      title
      url
      ...Tags
      ...When
    }
  `,
);
