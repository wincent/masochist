import React from 'react';
import {graphql} from 'react-relay';

import SnippetsIndex from '../../client/components/SnippetsIndex';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SnippetsRouteQuery(
      $baseHeadingLevel: Int!
      $count: Int!
      $cursor: String
    ) {
      viewer {
        ... on User {
          ...SnippetsIndex_viewer
        }
      }
    }
  `,
  () => ({
    baseHeadingLevel: 2,
    count: 3,
    cursor: null,
  }),
  data => <SnippetsIndex viewer={data.viewer} />,
);

// TODO: consider changing schema to not nest these root fields under viewer; in
// Relay Modern there is no problem with having connections at the top level.
