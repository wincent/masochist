import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

import './App.css';

export default class App extends React.Component {
  static contextTypes = {
    history: React.PropTypes.object,
  };

  _handleClick = event => {
    if (event.target.tagName === 'A') {
      let parent = event.target;
      while ((parent = parent.parentNode)) {
        if (parent.className === 'prerendered') {
          const {history} = this.context;
          const href = event.target.getAttribute('href');
          if (!href.match(/^\//)) {
            // Non-relative URL; let the browser handle it.
            return;
          }

          const location = history.createLocation(href);

          // NOTE: we're relying on `match` calling our callback synchronously,
          // so that we can `event.preventDefault()` if necessary.
          history.match(location, (error, redirectLocation, nextState) => {
            if (nextState) {
              event.preventDefault();
              history.pushState({}, href);
            }
          });

          // We either matched + transitioned, or we should fall through to
          // browser.
          return;
        }
      }
    }
  }

  componentDidMount() {
    document.getElementById('relay-root')
      .addEventListener('click', this._handleClick);
  }

  componentWillUnmount() {
    document.getElementById('relay-root')
      .removeEventListener('click', this._handleClick);
  }

  render() {
    const {children, routes} = this.props;
    return (
      <div className="app">
        <Nav routes={routes} />
        <section className="app-content container">
          {children}
        </section>
        <Footer />
      </div>
    );
  }
}
