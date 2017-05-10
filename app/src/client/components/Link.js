import PropTypes from 'prop-types';
import React from 'react';
import inBrowser from '../inBrowser';

const RouterLink = ({to, children, ...props}, context) => {
  // TODO: want to make sure we can match before we block... want offsite links to
  // work
  return (
    <a
      href={to}
      onClick={event => {
        event.preventDefault();
        context.router.history.push(to);
      }}
      {...props}>
      {children}
    </a>
  );
};
RouterLink.contextTypes = {router: PropTypes.object};

/**
 * Wrapper around <Link /> from react-router, which won't work when rendered to
 * HTML on static pages.
 * TODO: might just be able to use the same one everywhere; can just use
 * RouterLink for everything
 */
const Link = ({to, children, ...props}) => {
  if (inBrowser) {
    return <RouterLink to={to} {...props}>{children}</RouterLink>;
  } else {
    return <a href={to} {...props}>{children}</a>;
  }
};

export default Link;
