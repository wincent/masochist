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
      ...ArticlesIndex
    }
  `,
  () => ({
    count: ArticlesIndex.PAGE_SIZE,
    cursor: null,
  }),
  data => <ArticlesIndex data={data} />,
);
