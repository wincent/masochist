/**
 *
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Metadata from './Metadata';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

class Snippet extends React.Component {
  render() {
    const snippet = this.props.data;
    return (
      // encode url?
      <article>
        <h1>
          <Link to={snippet.url}>{snippet.title ?? 'Untitled'}</Link>
        </h1>
        <Metadata>
          <When data={snippet} />
        </Metadata>
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
