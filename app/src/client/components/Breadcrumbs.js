/**
 * @flow
 */

import React from 'react';
import {Link} from 'react-router';

import './Breadcrumbs.css';

function flatten(array: string | Array<string>): Array {
  return [].concat(
    (Array.isArray(array) ? array.map(flatten) : array)
  );
}

export default class Breadcrumbs extends React.Component {
  render() {
    const crumbs = this.props.routes.reduce((crumbs, route) => {
      if (route.path === '/') {
        // TODO: unless current
        return <Link to="/">Home</Link>;
      } else if (route.path === 'blog') {
        return <span>Blog</span>;
      } else if (route.path === 'blog/:id') {
        return [
          <Link to="/blog">Blog</Link>,
          <Link to="#">Current</Link>,
        ];
      }
    }, []);
    return (
      <ul>
        {
          flatten(crumbs).map((crumb, index) => (
            <li key={index}>{crumb}</li>
          ))
        }
      </ul>
    );
  }
}
