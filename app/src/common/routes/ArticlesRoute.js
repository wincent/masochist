import React from 'react';
import {graphql} from 'react-relay';

import ArticlesIndex from '../../client/components/ArticlesIndex';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query ArticlesRouteQuery(
      $count: Int!
      # TODO: make cursors ID type
      $cursor: String
    ) {
      viewer {
        ... on User {
          ...ArticlesIndex_viewer
        }
      }
    }
  `,
  () => ({
    count: 10,
    cursor: null,
  }),
  data => <ArticlesIndex viewer={data.viewer} />,
);
