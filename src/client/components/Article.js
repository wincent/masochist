/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import inBrowser from '../inBrowser';
import DocumentTitle from './DocumentTitle';
import HTTPError from './HTTPError';
import Link from './Link';
import RedirectError from '../../common/RedirectError';
import matchRoute from '../../common/matchRoute';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import type {MasochistRouter} from '../../common/createRouter';
import type {Article as ArticleData} from './__generated__/Article.graphql';

if (inBrowser) {
  require('./Article.css');
}

/**
 * Perform a redirect bypassing the client-side router.
 *
 * In the browser, manipulate `window.location`.
 *
 * On the server, issue a "301 Moved Permanently".
 */
function hardRedirect(target: string): null {
  if (inBrowser) {
    window.location = target;
    return null;
  }
  throw new RedirectError(target, 301);
}

/**
 * Perform a redirect via the client-side router.
 *
 * If the route in question cannot match, fall back to `hardRedirect()`.
 */
function softRedirect(target: string, router: MasochistRouter): null {
  if (matchRoute(target)) {
    // Let React finish rendering before running this; otherwise it will
    // complain "triggering nested component updates from render is not
    // allowed".
    Promise.resolve().then(() => router.history.replace(target));
    return null;
  }
  return hardRedirect(target);
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
            Try inspecting {' '}
            <Link to="/wiki">the wiki index</Link> and {' '}
            <Link to="/tags">the tags listing</Link>, or using {' '}
            <Link to="/search">the site search</Link>.
          </p>
        </HTTPError>
      );
    }

    const {redirect} = article;
    if (redirect) {
      if (redirect.match(/^https?:/)) {
        // External redirect.
        return hardRedirect(redirect);
      } else if (redirect.startsWith('/')) {
        // Internal redirect.
        return softRedirect(redirect, this.context.router);
      } else {
        // Nothing to do. `redirect` here is of the form "[[title]]" and the
        // other fields will have been appropriately "dereferenced" by
        // the GraphQL schema.
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
          {redirect
            ? <p className="redirect-info">Redirected from {article.title}</p>
            : null}
          <When data={article} />
          <div>
            <TrustedPrerenderedMarkup html={article.body.html} />
          </div>
          <Tags data={article} />
        </article>
      </DocumentTitle>
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
