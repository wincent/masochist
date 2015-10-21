import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import Tags from './Tags';
import When from './When';

class PagePreview extends React.Component {
  render() {
    const {page} = this.props;
    const {createdAt, title, updatedAt, url} = page;
    return (
      <tr>
        <td>
          <code>page</code>
        </td>
        <td>
          <Link to={url}>ost
            {title}
          </Link>
        </td>
        <td>
          <When createdAt={createdAt} updatedAt={updatedAt} />
        </td>
        <td>
          <Tags classes={{left: true, compact: true}} tagged={page} />
        </td>
      </tr>
    );
  }
}

export default Relay.createContainer(PagePreview, {
  fragments: {
    page: () => Relay.QL`
      fragment on Page {
        createdAt
        title
        updatedAt
        url
        ${Tags.getFragment('tagged')}
      }
    `,
  },
});
