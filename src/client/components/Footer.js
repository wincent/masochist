/**
 * @noflow
 */

import React from 'react';
import inBrowser from '../../common/inBrowser';
import Link from './Link';

if (inBrowser) {
  require('./Footer.css');
}

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
                <FooterLink target="/tags" text="Tags" />
                <FooterLink target="/search" text="Search" />
              </ul>
            </div>
            <div className="four columns">
              <h6>External</h6>
              <ul>
                <StaticFooterLink
                  target="https://github.com/wincent"
                  text="GitHub"
                />
                <StaticFooterLink
                  target="https://twitter.com/wincent"
                  text="Twitter"
                />
                <StaticFooterLink
                  target="https://facebook.com/glh"
                  text="Facebook"
                />
                <StaticFooterLink
                  target="https://www.linkedin.com/in/greghurrell"
                  text="LinkedIn"
                />
                <StaticFooterLink
                  target="https://keybase.io/wincent"
                  text="Keybase"
                />
              </ul>
            </div>
            <div className="four columns">
              <h6>Colophon</h6>
              <p>
                {'Crafted lovingly by '}
                <a href="mailto:greg@hurrell.net">Greg Hurrell</a>
                {' using '}
                <a href="https://facebook.github.io/react/">React</a>
                {', '}
                <a href="https://facebook.github.io/relay/">Relay</a>
                {' and '}
                <a href="http://graphql.org/">GraphQL</a>
                {' (with help from '}
                <a href="https://git-scm.com/">Git</a>
                {', '}
                <a href="http://redis.io/">Redis</a>
                {' and '}
                <a href="https://github.com/vim/vim">Vim</a>
                {').'}
              </p>
              {/* TODO link to /pages/legal here */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
