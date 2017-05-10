import React from 'react';
import {graphql} from 'react-relay';

import TagsIndex from '../../client/components/TagsIndex';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query TagsRouteQuery(
      $count: Int!
    ) {
      ...TagsIndex
    }
  `,
  () => ({
    count: 2 ** 31 - 1,
  }),
  data => <TagsIndex data={data} />,
);
