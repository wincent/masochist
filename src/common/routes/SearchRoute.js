/**
 * @flow
 */

import React from 'react';
import {graphql} from 'react-relay';

import Search from '../../client/components/Search';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SearchRouteQuery($count: Int!, $cursor: String, $q: String!) {
      ...Search
    }
  `,
  {
    variables: ({count, q}) => ({
      count: count || Search.PAGE_SIZE,
      cursor: null,
      q: q || '',
    }),
    render: (data, {q}) => <Search q={q} data={data} />,
    title: (data, {q}) => q,
  },
);
