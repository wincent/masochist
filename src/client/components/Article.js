import PropTypes from 'prop-types';
import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import inBrowser from '../../common/inBrowser';
import Link from './Link';
import Metadata from './Metadata';
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
    const article = this.props.data;
    return (
      <article>
        <h1 className="article-header">
          <Link to={article.url}>{article.resolvedTitle || null}</Link>
          <a
            className="button"
            href={article.editURL}
            title="Edit this article on GitHub"
          >
            Edit
          </a>
        </h1>
        {article.redirect ? (
          <p className="redirect-info">Redirected from {article.title}</p>
        ) : null}
        <Metadata>
          <When data={article} />
        </Metadata>
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
      editURL
      url
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      ...Tags
      ...When
    }
  `,
);
