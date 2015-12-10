import React from 'react';
import Relay from 'react-relay';
import Comments from './Comments';
import DocumentTitle from './DocumentTitle';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import './Article.css';

class Article extends React.Component {
  static contextTypes = {
    history: React.PropTypes.object,
  };

  render() {
    const {article} = this.props;

    if (article.redirect) {
      if (article.redirect.match(/^https?:/)) {
        // External redirect.
        window.location = article.redirect;
        return null;
      } else if (article.redirect.substr(0, 1) === '/') {
        // Internal redirect.
        const {history} = this.context;
        const location = history.createLocation(article.redirect);
        history.match(location, (error, redirectLocation, nextState) => {
          if (nextState) {
            history.pushState({}, article.redirect);
          } else {
            window.location = article.redirect;
          }
        });
        return null;
      }
    }

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
          <Comments url={article.url} />
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
