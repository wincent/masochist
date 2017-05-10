import React from 'react';
import {graphql} from 'react-relay';

import TagsIndex from '../../client/components/TagsIndex';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query TagsRouteQuery(
      $count: Int!
    ) {
      viewer {
        ... on User {
          ...TagsIndex_viewer
        }
      }
    }
  `,
  () => ({
    count: 2 ** 31 - 1,
  }),
  data => <TagsIndex viewer={data.viewer} />,
);
