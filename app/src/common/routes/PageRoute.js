import React from 'react';
import {graphql} from 'react-relay';

import Page from '../../client/components/Page';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query PageRouteQuery(
      $baseHeadingLevel: Int!
      $id: ID!
    ) {
      node(id: $id) {
        ... on Page {
          ...Page_page
        }
      }
    }
  `,
  ({id}) => ({
    baseHeadingLevel: 2,
    id,
  }),
  data => <Page page={data.node} />,
);
