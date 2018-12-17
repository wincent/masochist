/**
 * @flow
 */

import PropTypes from 'prop-types';
import * as React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Progress from './Progress';
import inBrowser from '../../common/inBrowser';
import matchRoute from '../../common/matchRoute';

if (inBrowser) {
  require('./App.css');
  require('highlight.js/styles/default.css');
}

type Props = {
  children: React.Node,
  router: $FlowFixMe,
  showProgress?: boolean,
};

export default class App extends React.Component<Props> {
  static childContextTypes = {
    router: PropTypes.object,
  };

  getChildContext() {
    return {
      router: this.props.router,
    };
  }

  /**
   * Special handling of links in pre-rendered content.
   *
   * These aren't React components, so we can't rely on the behavior in the
   * `<Link>` component. Instead, we check to see whether they link looks like a
   * relative one that should be handled by the router, and if so, we hand it
   * off to the router; otherwise, the browser handles it.
   */
  _handleClick = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    let href = null;
    let element = event.target;
    if (!(element instanceof HTMLElement)) {
      return;
    }
    while (element) {
      if (element instanceof HTMLAnchorElement) {
        href = element.getAttribute('href');
      }
      if (element.className === 'prerendered') {
        if (!href || !href.match(/^\//)) {
          // Not a relative URL; let the browser handle it.
          return;
        }
        if (event.ctrlKey || event.metaKey) {
          // User holding a modifier; let the browser handle it.
          return;
        }

        if (matchRoute(href)) {
          // Looks like something the router can handle.
          event.preventDefault();
          this.props.router.history.push(href);
        }

        // We either matched + transitioned, or we should fall through to
        // browser.
        return;
      }
      element = element.parentElement;
    }
  };

  _handleMouseOver = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    let element = event.target;
    if (!(element instanceof HTMLElement)) {
      return;
    }
    while (element) {
      if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute('href');
        if (!href || !href.match(/^\//)) {
          // Not a relatve URL; let the browser handle it.
          return;
        }
        let route = matchRoute(href);
        if (route) {
          this.props.router.resolve({pathname: href, prefetch: true});
        }
        return;
      }
      element = element.parentNode;
    }
  };

  render() {
    const {children, showProgress} = this.props;
    return (
      <div
        className="app"
        onClick={this._handleClick}
        onMouseOver={this._handleMouseOver}
      >
        <Nav />
        <section className="app-content container">
          {showProgress ? <Progress /> : null}
          {children}
        </section>
        <Footer />
      </div>
    );
  }
}
