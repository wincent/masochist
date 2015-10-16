import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';
import cx from 'classnames';

import './Tags.css';

const TagLink = ({tag}) => (
  <li>
    <Link to={`/tags/${tag}`}>{tag}</Link>
  </li>
);

class Tags extends React.Component {
  render() {
    const {tags} = this.props.taggable;
    const classes = cx({
      ...this.props.classes,
      tags: true,
    });
    return (
      <ul className={classes}>
        {tags.map(tag => <TagLink key={tag} tag={tag} />)}
      </ul>
    );
  }
}

export default Relay.createContainer(Tags, {
  fragments: {
    taggable: () => Relay.QL`
      fragment on Taggable {
        tags
      }
    `,
  },
});
