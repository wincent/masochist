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
  {
    variables: ({count}) => ({
      baseHeadingLevel: 2, // TODO: check this
      count: count || PostsIndex.PAGE_SIZE,
      cursor: null,
    }),
    render: data => <PostsIndex data={data} />,
    title: 'blog',
  },
);
