/**
 * @noflow
 */

import React from 'react';
import {graphql} from 'react-relay';

import Article from '../../client/components/Article';
import Link from '../../client/components/Link';
import ExternalRedirectError from '../ExternalRedirectError';
import InternalRedirectError from '../ExternalRedirectError';
import NotFoundError from '../NotFoundError';
import buildRoute from '../buildRoute';
import inBrowser from '../inBrowser';
import matchRoute from '../matchRoute';

/**
 * Perform a redirect bypassing the router.
 *
 * In the browser, manipulate `window.location`.
 *
 * On the server, issue a "301 Moved Permanently".
 */
function hardRedirect(target: string): null {
  if (inBrowser) {
    window.location = target;
    return null;
  }
  throw new ExternalRedirectError(target, 301);
}

/**
 * Perform a redirect via the client-side router.
 *
 * If the route in question cannot match, fall back to `hardRedirect()`.
 */
function softRedirect(target: string): null {
  if (matchRoute(target)) {
    throw new InternalRedirectError(target);
  }
  return hardRedirect(target);
}

export default buildRoute(
  graphql`
    query ArticleRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
      node(id: $id) {
        ... on Article {
          ...Article
          description
          redirect
          title
        }
      }
    }
  `,
  {
    variables: ({id}) => ({
      baseHeadingLevel: 2,
      id,
    }),
    render: ({node}, {id}) => {
      if (node) {
        const {redirect} = node;
        if (redirect) {
          if (redirect.match(/^https?:/)) {
            // External redirect.
            return hardRedirect(redirect);
          } else if (redirect.startsWith('/')) {
            // Internal redirect.
            return softRedirect(redirect);
          } else {
            // Nothing to do. `redirect` here is of the form "[[title]]" and the
            // other fields will have been appropriately "dereferenced" by
            // the GraphQL schema.
          }
        }
        return <Article data={node} />;
      } else {
        throw new NotFoundError(
          `No article found with id: ${id}`,
          (
            <p>
              Try inspecting <Link to="/wiki">the wiki index</Link> and {' '}
              <Link to="/tags">the tags listing</Link>, or using {' '}
              <Link to="/search">the site search</Link>.
            </p>
          ),
        );
      }
    },
    title: ({node}) => (node ? node.title : null),
    description: ({node}) => (node ? node.description : null),
  },
);
