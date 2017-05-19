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
      ...PostsIndex
    }
  `,
  () => ({
    baseHeadingLevel: 2, // TODO: check this
    count: PostsIndex.PAGE_SIZE,
    cursor: null,
  }),
  data => <PostsIndex data={data} />,
);
