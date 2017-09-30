/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import inBrowser from '../inBrowser';
import HTTPError from './HTTPError';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import type {MasochistRouter} from '../../common/createRouter';
import type {Article as ArticleData} from './__generated__/Article.graphql';

if (inBrowser) {
  require('./Article.css');
}

class Article extends React.Component {
  props: {
    data: ArticleData,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  render() {
    const article = this.props.data;

    if (!article) {
      return (
        <HTTPError code={404}>
          <p>
            Try inspecting <Link to="/wiki">the wiki index</Link> and {' '}
            <Link to="/tags">the tags listing</Link>, or using {' '}
            <Link to="/search">the site search</Link>.
          </p>
        </HTTPError>
      );
    }

    return (
      <article>
        <h1>
          <Link to={article.url}>{article.resolvedTitle}</Link>
        </h1>
        {article.redirect ? (
          <p className="redirect-info">Redirected from {article.title}</p>
        ) : null}
        <When data={article} />
        <div>
          <TrustedPrerenderedMarkup html={article.body.html} />
        </div>
        <Tags data={article} />
      </article>
    );
  }
}

export default createFragmentContainer(
  Article,
  graphql`
    fragment Article on Article {
      title
      redirect
      resolvedTitle
      url
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      ...Tags
      ...When
    }
  `,
);
