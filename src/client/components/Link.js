import PropTypes from 'prop-types';
import React from 'react';
import matchRoute from '../../common/matchRoute';

const RouterLink = ({to, children, ...props}, context) => {};

/**
 * Router-aware link component.
 */
const Link = ({to, children, ...props}, context) => (
  <a
    href={to}
    onClick={event => {
      if (event.ctrlKey || event.metaKey) {
        // User holding a modifier; let the browser handle it.
        return;
      }
      if (matchRoute(to)) {
        event.preventDefault();
        context.router.history.push(to);
      }
    }}
    {...props}>
    {children}
  </a>
);

Link.contextTypes = {router: PropTypes.object};

export default Link;
