import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

class ArticlePreview extends React.Component {
  render() {
    const article = this.props.data;
    const {createdAt, description, title, updatedAt, url} = article;
    return (
      <tr>
        <td>
          <code>wiki</code>
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
          <Tags classes={{left: true, compact: true}} data={article} />
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(
  ArticlePreview,
  graphql`
    fragment ArticlePreview on Article {
      createdAt
      description
      title
      updatedAt
      url
      ...Tags
    }
  `,
);
