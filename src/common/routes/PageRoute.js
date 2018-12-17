/**
 * @flow
 */

import React from 'react';
import {graphql} from 'react-relay';

import Link from '../../client/components/Link';
import Page from '../../client/components/Page';
import {makeNotFound} from '../NotFoundError';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query PageRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
      node(id: $id) {
        ... on Page {
          ...Page
          description
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
        return <Page data={node} />;
      } else {
        throw makeNotFound(
          `No page found with id: ${id}`,
          <p>
            Try inspecting <Link to="/tags/pages">the pages index</Link> and{' '}
            <Link to="/tags">the tags listing</Link>, or using{' '}
            <Link to="/search">the site search</Link>.
          </p>,
        );
      }
    },
    title: ({node}) => (node ? node.title : null),
    description: ({node}) => (node ? node.description : null),
  },
);
