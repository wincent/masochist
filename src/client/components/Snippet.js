/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

import type {Snippet as SnippetData} from './__generated__/Snippet.graphql';

class Snippet extends React.Component {
  props: {
    data: SnippetData,
  };

  render() {
    const snippet = this.props.data;
    return (
      // encode url?
      <article>
        <h1>
          <Link to={snippet.url}>{snippet.title}</Link>
        </h1>
        <When data={snippet} />
        <div>
          <TrustedPrerenderedMarkup html={snippet.body.html} />
        </div>
        <Tags data={snippet} />
      </article>
    );
  }
}

export default createFragmentContainer(
  Snippet,
  graphql`
    fragment Snippet on Snippet {
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      id
      url
      title
      ...Tags
      ...When
    }
  `,
);
