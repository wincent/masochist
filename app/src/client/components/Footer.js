import React from 'react';

import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="four columns">
              <h6>Column 1</h6>
            </div>
            <div className="four columns">
              <h6>Column 2</h6>
            </div>
            <div className="four columns">
              <h6>Contact</h6>
              <a href="mailto:greg@hurrell.net">greg@hurrell.net</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
