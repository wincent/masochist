/**
 * @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import inBrowser from '../../common/inBrowser';
import Link from './Link';
import cx from 'classnames';

import type {Tags as TagsData} from './__generated__/Tags.graphql';

if (inBrowser) {
  require('./Tags.css');
}

const TagLink = ({tag}) => (
  <li>
    <Link to={`/tags/${tag}`}>{tag}</Link>
  </li>
);

type Props = {
  classes?: {[string]: boolean},
  data: TagsData,
};

function Tags({classes, data: {tags}}: Props) {
  return (
    <ul className={cx({...classes, tags: true})}>
      {tags.map(tag => (
        <TagLink key={tag} tag={tag} />
      ))}
    </ul>
  );
}

export default createFragmentContainer(
  Tags,
  graphql`
    fragment Tags on Tagged {
      tags
    }
  `,
);
