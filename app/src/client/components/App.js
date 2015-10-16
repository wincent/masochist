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
        <Breadcrumbs routes={this.props.routes} />
        <h1>Hi, {this.props.viewer.name}</h1>
        <section className="app-content container">
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
