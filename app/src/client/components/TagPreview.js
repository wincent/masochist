import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

class TagPreview extends React.Component {
  // TODO: link to actual URL from schema
  render() {
    const {tag} = this.props;
    return (
      <tr>
        <td>
          <Link to={'/tags/' + tag.name}>
            {tag.name}
          </Link>
        </td>
        <td>
          {tag.count}
        </td>
      </tr>
    );
  }
}

export default Relay.createContainer(TagPreview, {
  fragments: {
    tag: () => Relay.QL`
      fragment on Tag {
        name
        count
      }
    `,
  },
});
