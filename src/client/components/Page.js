import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';
import Metadata from './Metadata';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

class Page extends React.Component {
  render() {
    const page = this.props.data;
    return (
      // may want to URL encode here too? page.url
      <article>
        <h1>
          <Link to={page.url}>{page.title ?? 'Untitled'}</Link>
        </h1>
        <Metadata>
          <When data={page} />
        </Metadata>
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
