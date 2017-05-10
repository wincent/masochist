import React from 'react';
import {graphql} from 'react-relay';

import PostsIndex from '../../client/components/PostsIndex';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query PostsRouteQuery(
      $baseHeadingLevel: Int!
      $count: Int!
      $cursor: String
    ) {
      viewer {
        ... on User {
          ...PostsIndex_viewer
        }
      }
    }
  `,
  () => ({
    baseHeadingLevel: 2, // TODO: check this
    count: 3,
    cursor: null,
  }),
  data => <PostsIndex viewer={data.viewer} />,
);
