import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

class ArticlePreview extends React.Component {
  render() {
    const article = this.props.data;
    return (
      <tr>
        <td>
          <code>wiki</code>
        </td>
        <td>
          <Link to={article.url}>
            {article.title}
          </Link>
        </td>
        <td>
          <When createdAt={article.createdAt} updatedAt={article.updatedAt} />
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
      title
      updatedAt
      url
      ...Tags
    }
  `,
);
