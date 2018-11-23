/**
 * @flow
 */

import React from 'react';
import inBrowser from '../../common/inBrowser';

if (inBrowser) {
  require('./TagLozenge.css');
}

type Props = {
  type: string,
};

const TagLozenge = ({type}: Props) => {
  let href;
  switch (type) {
    case 'page':
      href = '/tags/pages';
      break;
    case 'snippet':
      href = '/tags/snippets';
      break;
    default:
      href = `/tags/${type}`;
  }
  return (
    <a className="lozenge" href={href}>
      <code>{type}</code>
    </a>
  );
};

export default TagLozenge;
