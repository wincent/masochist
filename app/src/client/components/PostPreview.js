import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import Link from './Link';
import Tags from './Tags';
import When from './When';

class PostPreview extends React.Component {
  render() {
    const {post} = this.props;
    const {createdAt, title, updatedAt, url} = post;
    return (
      <tr>
        <td>
          <code>blog</code>
        </td>
        <td>
          <Link to={url}>
            {title}
          </Link>
        </td>
        <td>
          <When createdAt={createdAt} updatedAt={updatedAt} />
        </td>
        <td>
          <Tags classes={{left: true, compact: true}} tagged={post} />
        </td>
      </tr>
    );
  }
}

export default createFragmentContainer(PostPreview, {
  post: graphql`
    fragment PostPreview_post on Post {
      createdAt
      title
      updatedAt
      url
      ...Tags_tagged
    }
  `,
});
