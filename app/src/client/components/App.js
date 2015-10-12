import React from 'react';
import Relay from 'react-relay';
import Nav from './Nav';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Breadcrumbs routes={this.props.routes} />
        <h1>Hi, {this.props.viewer.name}</h1>
        {this.props.children}
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
