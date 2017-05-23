import React from 'react';
import {graphql} from 'react-relay';

import Snippet from '../../client/components/Snippet';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SnippetSourceRouteQuery($id: ID!) {
      node(id: $id) {
        ... on Snippet {
          source
        }
      }
    }
  `,
  ({id}) => ({id}),
  ({node}) => node.source,
);
