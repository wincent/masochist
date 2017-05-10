import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

class PagePreview extends React.Component {
  render() {
    const {page} = this.props;
    const {createdAt, title, updatedAt, url} = page;
    return (
      <tr>
        <td>
          <code>page</code>
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
          <Tags classes={{left: true, compact: true}} tagged={page} />
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(PagePreview, {
  page: graphql`
    fragment PagePreview_page on Page {
      createdAt
      title
      updatedAt
      url
      ...Tags_tagged
    }
  `,
});
