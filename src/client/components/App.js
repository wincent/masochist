import PropTypes from 'prop-types';
import React from 'react';
import DocumentTitle from './DocumentTitle';
import Nav from './Nav';
import Footer from './Footer';
import inBrowser from '../inBrowser';

import matchRoute from '../../common/matchRoute';

if (inBrowser) {
  require('./App.css');
}

export default class App extends React.Component {
  static propTypes = {
    router: PropTypes.object,
  };

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
  _handleClick = event => {
    let href = null;
    let element = event.target;
    while (element) {
      if (element.tagName === 'A') {
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
      element = element.parentNode;
    }
  };

  componentDidMount() {
    document
      .getElementById('relay-root')
      .addEventListener('click', this._handleClick);
  }

  componentWillUnmount() {
    document
      .getElementById('relay-root')
      .removeEventListener('click', this._handleClick);
  }

  render() {
    const {children} = this.props;
    return (
      <DocumentTitle title="wincent.com">
        <div className="app">
          <Nav />
          <section className="app-content container">
            {children}
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}
