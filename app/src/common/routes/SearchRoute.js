import React from 'react';
import {graphql} from 'react-relay';

import Search from '../../client/components/Search';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SearchRouteQuery(
      $count: Int!
      $cursor: String
      $q: String!
    ) {
      ...Search
    }
  `,
  ({q}) => ({
    count: 10,
    cursor: null,
    q: q || '',
  }),
  (data, {q}) => <Search q={q} data={data} />,
);
