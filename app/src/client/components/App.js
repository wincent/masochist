import React from 'react';
import Relay from 'react-relay';
import Nav from './Nav';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav routes={this.props.routes} />
        <section className="app-content container">
          <Breadcrumbs routes={this.props.routes} />
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name
      }
    `,
  },
});
