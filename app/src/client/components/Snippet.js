import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import DocumentTitle from './DocumentTitle';
import HTTPError from './HTTPError';
import Link from './Link';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';

// import './App.css';

class Snippet extends React.Component {
  render() {
    const snippet = this.props.data;

    if (!snippet) {
      return (
        <HTTPError code={404}>
          <p>
            Try inspecting {' '}
            <Link to="/snippets">the snippets index</Link> and {' '}
            <Link to="/tags">the tags listing</Link>, or using {' '}
            <Link to="/search">the site search</Link>.
          </p>
        </HTTPError>
      );
    }

    return (
      // encode url?
      (
        <DocumentTitle isLeaf={true} title={snippet.title}>
          <article>
            <h1>
              <Link to={snippet.url}>
                {snippet.title}
              </Link>
            </h1>
            <When createdAt={snippet.createdAt} updatedAt={snippet.updatedAt} />
            <div>
              <TrustedPrerenderedMarkup html={snippet.body.html} />
            </div>
            <Tags data={snippet} />
          </article>
        </DocumentTitle>
      )
    );
  }
}

export default createFragmentContainer(
  Snippet,
  graphql`
    fragment Snippet on Snippet {
      id
      url
      title
      createdAt
      updatedAt
      body {
        html(baseHeadingLevel: $baseHeadingLevel)
      }
      ...Tags
    }
  `,
);
