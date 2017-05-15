import React from 'react';
import {graphql} from 'react-relay';

import Snippet from '../../client/components/Snippet';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SnippetRouteQuery(
      $baseHeadingLevel: Int!
      $id: ID!
    ) {
      node(id: $id) {
        ... on Snippet {
          ...Snippet
          description
        }
      }
    }
  `,
  ({id}) => ({
    baseHeadingLevel: 2,
    id,
  }),
  ({node}) => <Snippet data={node} />,
  ({node}) => (node ? node.description : null),
);
