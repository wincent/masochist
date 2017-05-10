import React from 'react';
import {graphql} from 'react-relay';

import Tag from '../../client/components/Tag';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query TagRouteQuery(
      $count: Int!
      $cursor: String
      $id: ID!
    ) {
      node(id: $id) {
        ... on Tag {
          ...Tag
        }
      }
    }
  `,
  ({id}) => ({
    count: 10,
    cursor: null,
    id,
  }),
  data => <Tag data={data.node} />,
);
