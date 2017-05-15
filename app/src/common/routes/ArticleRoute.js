import React from 'react';
import {graphql} from 'react-relay';

import Article from '../../client/components/Article';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query ArticleRouteQuery(
      $baseHeadingLevel: Int!
      $id: ID!
    ) {
      node(id: $id) {
        ... on Article {
          ...Article
          description
        }
      }
    }
  `,
  ({id}) => ({
    baseHeadingLevel: 2,
    id,
  }),
  data => <Article data={data.node} />,
  data => data.node.description,
);
