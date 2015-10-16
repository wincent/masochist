import React from 'react';
import {Link} from 'react-router';
import cx from 'classnames';

import './Nav.css';

const NavLink = ({target, text, active}) => {
  const classNames = cx({
    active: active === target,
    'nav-link': true,
  });

  return (
    <li>
      <Link className={classNames} to={target}>
        {text}
      </Link>
    </li>
  );
};

function getActiveRoutePrefix(routes) {
  const path = routes && (routes.length >= 2) && routes[1].path;
  const match = path && path.match(/^(\w+)\b/);
  if (match) {
    return '/' + match[1];
  }

  // Must be at /, which is the same as /blog.
  return '/blog';
}

export default class Nav extends React.Component {
  render() {
    const active = getActiveRoutePrefix(this.props.routes);
    return (
      <nav>
        <ul>
          <NavLink target="/" text="Wincent" active={active} />
          <NavLink target="/blog" text="Blog" active={active} />
          <NavLink target="/wiki" text="Wiki" active={active} />
          <NavLink target="/snippets" text="Snippets" active={active} />
          <NavLink target="/tags" text="Tags" active={active} />
          <NavLink target="/search" text="Search" active={active} />
        </ul>
      </nav>
    );
  }
}
