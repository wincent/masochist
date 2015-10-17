import React from 'react';
import Relay from 'react-relay';
import Nav from './Nav';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
  render() {
    const {children, node, routes} = this.props;
    return (
      <div className="app">
        <Nav routes={routes} />
        <section className="app-content container">
          <Breadcrumbs node={node} routes={routes} />
          {children}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    node: () => Relay.QL`
      fragment on Node {
        ${Breadcrumbs.getFragment('node')}
      }
    `,
  },
});
