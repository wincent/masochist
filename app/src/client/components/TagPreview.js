import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

class TagPreview extends React.Component {
  render() {
    const {count, name, url} = this.props.tag;
    return (
      <tr>
        <td>
          <Link to={url}>
            {name}
          </Link>
        </td>
        <td>
          {count}
        </td>
      </tr>
    );
  }
}

export default Relay.createContainer(TagPreview, {
  fragments: {
    tag: () => Relay.QL`
      fragment on Tag {
        count
        name
        url
      }
    `,
  },
});
