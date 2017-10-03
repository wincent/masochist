/**
 * @flow
 */

import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import Link from './Link';
import inBrowser from '../../common/inBrowser';

if (inBrowser) {
  require('./Nav.css');
}

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

function getActiveRoutePrefix(path) {
  const match = path && path.match(/^(\/\w+)\b/);
  if (match) {
    return match[1];
  }

  // Must be at /, which is the same as /blog.
  return '/blog';
}

export default class Nav extends React.Component {
  props: {};
  state: {
    isOpen: boolean,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props: {}) {
    super(props);
    this.state = {isOpen: false};
  }

  _handleToggle = (event: SyntheticEvent) => {
    event.preventDefault();
    this.setState(({isOpen}) => ({isOpen: !isOpen}));
  };

  render() {
    const active = getActiveRoutePrefix(
      this.context.router.history.location.pathname,
    );
    return (
      <nav className={cx({'nav-open': this.state.isOpen})}>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Wincent
            </Link>
            <div className="nav-toggle-wrapper">
              <div className="nav-toggle" onClick={this._handleToggle}>
                {this.state.isOpen ? 'Close' : 'Open'}
              </div>
            </div>
          </li>
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
