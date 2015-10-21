import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import Tags from './Tags';
import When from './When';

class ArticlePreview extends React.Component {
  render() {
    const {article} = this.props;
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
          <Tags classes={{left: true, compact: true}} tagged={article} />
        </td>
      </tr>
    );
  }
}

export default Relay.createContainer(ArticlePreview, {
  fragments: {
    article: () => Relay.QL`
      fragment on Article {
        createdAt
        title
        updatedAt
        url
        ${Tags.getFragment('tagged')}
      }
    `,
  },
});
