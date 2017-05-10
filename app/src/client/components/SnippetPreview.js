import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

class SnippetPreview extends React.Component {
  render() {
    const {snippet} = this.props;
    const {createdAt, title, updatedAt, url} = snippet;
    return (
      <tr>
        <td>
          <code>snippet</code>
        </td>
        <td>
          <Link to={url}>
            {title}
          </Link>
        </td>
        <td>
          <When createdAt={createdAt} updatedAt={updatedAt} />
        </td>
        <td>
          <Tags classes={{left: true, compact: true}} tagged={snippet} />
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(SnippetPreview, {
  snippet: graphql`
    fragment SnippetPreview_snippet on Snippet {
      createdAt
      title
      updatedAt
      url
      ...Tags_tagged
    }
  `,
});
