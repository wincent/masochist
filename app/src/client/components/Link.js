import React from 'react';
import inBrowser from '../inBrowser';

import {Link as RouterLink} from 'react-router';

/**
 * Wrapper around <Link /> from react-router, which won't work when rendered to
 * HTML on static pages.
 */
const Link = ({to, children, ...props}) => {
  if (inBrowser) {
    return <RouterLink to={to} {...props}>{children}</RouterLink>;
  } else {
    return <a href={to} {...props}>{children}</a>;
  }
};

export default Link;
