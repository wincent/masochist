import React from 'react';
import {graphql} from 'react-relay';

import Link from '../../client/components/Link';
import Snippet from '../../client/components/Snippet';
import NotFoundError from '../NotFoundError';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SnippetRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
      node(id: $id) {
        ... on Snippet {
          ...Snippet
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
        return <Snippet data={node} />;
      } else {
        throw new NotFoundError(
          `No snippet found with id: ${id}`,
          (
            <p>
              Try inspecting <Link to="/snippets">the snippets index</Link> and {' '}
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
