import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import PrerenderedMarkup from './PrerenderedMarkup';
import Tags from './Tags';
import When from './When';

class Page extends React.Component {
  render() {
    const {page} = this.props;
    return (
      <article>
        <h1>
          <Link to={page.url}>
            {page.title}
          </Link>
        </h1>
        <When createdAt={page.createdAt} updatedAt={page.updatedAt} />
        <div>
          <PrerenderedMarkup html={page.body.html} />
        </div>
        <Tags tagged={page} />
      </article>
    );
  }
}

export default Relay.createContainer(Page, {
  initialVariables: {
    baseHeadingLevel: 2,
  },
  fragments: {
    page: () => Relay.QL`
      fragment on Page {
        id
        title
        createdAt
        updatedAt
        url
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
        ${Tags.getFragment('tagged')}
      }
    `,
  },
});
