import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

import './App.css';

export default class App extends React.Component {
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
