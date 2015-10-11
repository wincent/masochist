import React from 'react';
import Relay from 'react-relay';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi, {this.props.viewer.name}</h1>
        {this.props.children}
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
