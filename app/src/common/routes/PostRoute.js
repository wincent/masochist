import React from 'react';
import {graphql} from 'react-relay';

import Post from '../../client/components/Post';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query PostRouteQuery(
      $baseHeadingLevel: Int!
      $id: ID!
    ) {
      node(id: $id) {
        __typename
        ... on Post {
          ...Post_post
        }
      }
    }
  `,
  ({id}) => ({
    baseHeadingLevel: 2,
    id,
  }),
  data => <Post post={data.node} />,
);
