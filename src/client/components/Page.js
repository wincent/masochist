/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import type {Page as PageData} from './__generated__/Page.graphql';

class Page extends React.Component<{data: PageData}> {
  render() {
    const page = this.props.data;
    return (
      // may want to URL encode here too? page.url
      <article>
        <h1>
          <Link to={page.url}>{page.title ?? 'Untitled'}</Link>
        </h1>
        <When data={page} />
        <div>
          <TrustedPrerenderedMarkup html={page.body.html} />
        </div>
        <Tags data={page} />
      </article>
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
