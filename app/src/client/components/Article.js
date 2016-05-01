import React from 'react';
import Relay from 'react-relay';
import {match} from 'react-router';
import inBrowser from '../inBrowser';
import DocumentTitle from './DocumentTitle';
import HTTPError from './HTTPError';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

if (inBrowser) {
  require('./Article.css');
}

class Article extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
  };

  render() {
    const {article} = this.props;

    if (!article) {
      return (
        <HTTPError code={404}>
          <p>
            Try inspecting {' '}
            <Link to="/wiki">the wiki index</Link> and {' '}
            <Link to="/tags">the tags listing</Link>, or using {' '}
            <Link to="/search">the site search</Link>.
          </p>
        </HTTPError>
      );
    }

    if (article.redirect) {
      if (article.redirect.match(/^https?:/)) {
        // External redirect.
        window.location = article.redirect;
        return null;
      } else if (article.redirect.substr(0, 1) === '/') {
        // Internal redirect.
        const {router} = this.context;
        const location = router.createLocation(article.redirect);
        match({location}, (error, redirectLocation, renderProps) => {
          if (renderProps) {
            router.push({}, article.redirect);
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
