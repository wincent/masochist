import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Link from './Link';

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

export default createFragmentContainer(TagPreview, {
  tag: graphql`
    fragment TagPreview_tag on Tag {
      count
      name
      url
    }
  `,
});
