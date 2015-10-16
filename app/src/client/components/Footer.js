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
                {/* TODO: probably don't directly link do these from here but from somewhere less prominent */}
                <StaticFooterLink target="/issues.html" text="Issues" />
                <StaticFooterLink
                  target="http://www.wincent.com/a/news/"
                  text="Blog (2009)"
                />
                <StaticFooterLink
                  target="/products.html"
                  text="Products (2011)"
                />
                {/* TODO: see if we can mirror even this stuff, which would allow me to turn off Apache */}
                <StaticFooterLink
                  target="http://www.wincent.com/a/products/"
                  text="Products (2009)"
                />
                <StaticFooterLink target="/forums.html" text="Forums" />
              </ul>
            </div>
            <div className="four columns">
              <h6>Colophon</h6>
              <p>
                Crafted lovingly by
                {' '}<a href="mailto:greg@hurrell.net">Greg Hurrell</a>
                {' '}using
                {' '}<a href="https://facebook.github.io/react/">React</a>,
                {' '}<a href="https://facebook.github.io/relay/">Relay</a> and
                {' '}<a href="http://graphql.org/">GraphQL</a> (with help from
                {' '}<a href="https://git-scm.com/">Git</a>,
                {' '}<a href="http://redis.io/">Redis</a> and
                {' '}<a href="https://github.com/vim/vim">Vim</a>).
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
