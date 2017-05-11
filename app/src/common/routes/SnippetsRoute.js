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
      ...SnippetsIndex
    }
  `,
  () => ({
    baseHeadingLevel: 2,
    count: SnippetsIndex.PAGE_SIZE,
    cursor: null,
  }),
  data => <SnippetsIndex data={data} />,
);
