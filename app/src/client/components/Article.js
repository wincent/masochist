import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import DocumentTitle from './DocumentTitle';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import './Article.css';

class Article extends React.Component {
  render() {
    const {article} = this.props;
    // TODO handle redirects
    return (
      <DocumentTitle isLeaf={true} title={article.title}>
        <article>
          <h1>
            <Link to={article.url}>
              {article.resolvedTitle}
            </Link>
          </h1>
          {
            article.redirect ?
              <p className="redirect-info">Redirected from {article.title}</p> :
              null
          }
          <When createdAt={article.createdAt} updatedAt={article.updatedAt} />
          <div>
            <TrustedPrerenderedMarkup html={article.body.html} />
          </div>
          <Tags tagged={article} />
        </article>
      </DocumentTitle>
    );
  }
}

export default Relay.createContainer(Article, {
  initialVariables: {
    baseHeadingLevel: 2,
  },
  fragments: {
    article: () => Relay.QL`
      fragment on Article {
        id
        title
        redirect
        resolvedTitle
        createdAt
        updatedAt
        url
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
        ${Tags.getFragment('tagged')}
      }
    `,
  },
});
