import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import inBrowser from '../inBrowser';
import Link from './Link';
import cx from 'classnames';

if (inBrowser) {
  require('./Tags.css');
}

const TagLink = ({tag}) => (
  <li>
    <Link to={`/tags/${tag}`}>{tag}</Link>
  </li>
);

class Tags extends React.Component {
  render() {
    const {tags} = this.props.data;
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

export default createFragmentContainer(
  Tags,
  graphql`
    fragment Tags on Tagged {
      tags
    }
  `,
);
