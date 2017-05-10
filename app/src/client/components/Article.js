import PropTypes from 'prop-types';
import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
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
    router: PropTypes.object,
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
        router.history.push(article.redirect);
        // TODO: if not in browser, will want to do a real redirect (or maybe
        // we're already handling that in the server module?)
        return null;
      } else if (article.redirect.substr(0, 1) === '/') {
        // Internal redirect.
        const {router} = this.context;
        router.history.replace(article.redirect);
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

export default createFragmentContainer(Article, {
  article: graphql`
    fragment Article_article on Article {
      title
      redirect
      resolvedTitle
      createdAt
      updatedAt
      url
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      ...Tags_tagged
    }
  `,
});
