/**
 * @flow
 */

import React from 'react';
import {Link} from 'react-router';

import './Breadcrumbs.css';

function flatten(array: Array<mixed>): Array<mixed> {
  return array.reduce((result, item) => result.concat(item), []);
}

export default class Breadcrumbs extends React.Component {
  render() {
    const {routes} = this.props;
    const paths = routes.map(route => route.path).filter(path => path);
    const crumbs = paths.map(path => {
      let crumb;
      if (path === '/') {
        if (paths.length === 1) {
          return [
            <Link to="/">Home</Link>,
            <span>Blog</span>,
          ];
        } else {
          return <Link to="/">Home</Link>;
        }
      } else if (path === 'blog') {
        return <span>Blog</span>;
      } else if (path === 'blog/:id') {
        return [
          <Link to="/blog">Blog</Link>,
          <span>Current</span>, // TODO: get title
        ];
      } else if (path === 'pages/:id') {
        return [
          <Link to="/pages">Pages</Link>,
          <span>Current</span>, // TODO: get title
        ];
      } else if (path === 'snippets') {
        return <span>Snippets</span>;
      } else if (path === 'snippets/:id') {
        return [
          <Link to="/snippets">Snippets</Link>,
          <span>Current</span>, // TODO: get title
        ];
      } else if (path === 'wiki') {
        return <span>Wiki</span>;
      } else if (path === 'wiki/:id') {
        return [
          <Link to="/wiki">Wiki</Link>,
          <span>Current</span>, // TODO: get title
        ];
      }
    });
    return (
      <ul className="breadcrumbs">
        {
          flatten(crumbs).map((crumb, index) => (
            <li key={index}>{crumb}</li>
          ))
        }
      </ul>
    );
  }
}
