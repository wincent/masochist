import React from 'react';
import {Link} from 'react-router';

import './Footer.css';

const FooterLink = ({target, text}) => (
  <li>
    <Link to={target}>{text}</Link>
  </li>
);

const StaticFooterLink = ({target, text}) => (
  <li>
    <a href={target}>{text}</a>
  </li>
);

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="four columns">
              <h6>Site</h6>
              <ul>
                <FooterLink target="/blog" text="Blog" />
                <FooterLink target="/wiki" text="Wiki" />
                <FooterLink target="/snippets" text="Snippets" />
              </ul>
            </div>
            <div className="four columns">
              <h6>Legacy</h6>
              <ul>
                {/* TODO: copy the mirrors into /public in this repo, so I have everything in one place */}
                <StaticFooterLink target="https://wincent.com/products" text="Products" />
              </ul>
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
