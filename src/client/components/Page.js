/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import DocumentTitle from './DocumentTitle';
import HTTPError from './HTTPError';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import type {Page as PageData} from './__generated__/Page.graphql';

class Page extends React.Component {
  props: {
    data: PageData,
  };

  render() {
    const page = this.props.data;

    if (!page) {
      // TODO: once search is implemented, link to that here (and in the other
      // places we're rendering a 404) as well.
      return (
        <HTTPError code={404}>
          <p>
            Try inspecting  <Link to="/tags">the tags listing</Link> or using {' '}
            <Link to="/search">the site search</Link>.
          </p>
        </HTTPError>
      );
    }

    return (
      // may want to URL encode here too? page.url
      <DocumentTitle title={page.title}>
        <article>
          <h1>
            <Link to={page.url}>{page.title}</Link>
          </h1>
          <When data={page} />
          <div>
            <TrustedPrerenderedMarkup html={page.body.html} />
          </div>
          <Tags data={page} />
        </article>
      </DocumentTitle>
    );
  }
}

export default createFragmentContainer(
  Page,
  graphql`
    fragment Page on Page {
      id
      title
      url
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      ...Tags
      ...When
    }
  `,
);
