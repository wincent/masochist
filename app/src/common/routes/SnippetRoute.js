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
        }
      }
    }
  `,
  ({id}) => ({
    baseHeadingLevel: 2,
    id,
  }),
  data => <Snippet data={data.node} />,
);
