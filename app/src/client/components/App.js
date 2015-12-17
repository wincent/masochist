import React from 'react';
import DocumentTitle from './DocumentTitle';
import Nav from './Nav';
import Footer from './Footer';
import inBrowser from '../inBrowser';

if (inBrowser) {
  require('./App.css');
}

export default class App extends React.Component {
  static contextTypes = {
    history: React.PropTypes.object,
  };

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

        const {history} = this.context;
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
      element = element.parentNode;
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
      <DocumentTitle title="wincent.com">
        <div className="app">
          <Nav routes={routes} />
          <section className="app-content container">
            {children}
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}
