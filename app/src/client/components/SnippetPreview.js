import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

class SnippetPreview extends React.Component {
  render() {
    const snippet = this.props.data;
    const {createdAt, description, title, updatedAt, url} = snippet;
    return (
      <tr>
        <td>
          <code>snippet</code>
        </td>
        <td>
          <Link title={description} to={url}>
            {title}
          </Link>
        </td>
        <td>
          <When createdAt={createdAt} updatedAt={updatedAt} />
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
      createdAt
      description
      title
      updatedAt
      url
      ...Tags
    }
  `,
);
