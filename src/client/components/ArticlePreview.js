import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

import type {ArticlePreview as ArticlePreviewData} from './__generated__/ArticlePreview.graphql';

class ArticlePreview extends React.Component {
  props: {
    data: ArticlePreviewData,
  };

  render() {
    const article = this.props.data;
    const {description, title, url} = article;
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
          <When data={article} />
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
      description
      title
      url
      ...Tags
      ...When
    }
  `,
);
