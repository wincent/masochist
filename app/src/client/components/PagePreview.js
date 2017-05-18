import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

class PagePreview extends React.Component {
  render() {
    const page = this.props.data;
    const {createdAt, description, history, title, updatedAt, url} = page;
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
          <When
            createdAt={createdAt}
            link={history.url}
            updatedAt={updatedAt}
          />
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
      createdAt
      description
      history {
        url
      }
      title
      updatedAt
      url
      ...Tags
    }
  `,
);
