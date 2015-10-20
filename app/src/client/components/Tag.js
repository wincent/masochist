import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

class Tag extends React.Component {
  render() {
    const {tag} = this.props;
    return (
      <article>
        <h1>
          <Link to={tag.url}>
            {tag.name}
          </Link>
        </h1>
        <p>{tag.count} items tagged with {tag.name}</p>
      </article>
    );
  }
}

export default Relay.createContainer(Tag, {
  initialVariables: {
    count: 10,
  },
  fragments: {
    // TODO add taggables connection here
    tag: () => Relay.QL`
      fragment on Tag {
        count
        id
        name
        url
      }
    `,
  },
});
