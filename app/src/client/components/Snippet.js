import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import DocumentTitle from './DocumentTitle';
import TrustedPrerenderedMarkup from './TrustedPrerenderedMarkup';
import Tags from './Tags';
import When from './When';


class Snippet extends React.Component {
  render() {
    const {snippet} = this.props;
    return (
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
          <Tags tagged={snippet} />
        </article>
      </DocumentTitle>
    );
  }
}

export default Relay.createContainer(Snippet, {
  initialVariables: {
    baseHeadingLevel: 2,
  },
  fragments: {
    snippet: () => Relay.QL`
      fragment on Snippet {
        id
        url
        title
        createdAt
        updatedAt
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
        ${Tags.getFragment('tagged')}
      }
    `,
  },
});
