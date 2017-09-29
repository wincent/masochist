import React from 'react';
import {graphql} from 'react-relay';

import Article from '../../client/components/Article';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query ArticleRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
      node(id: $id) {
        ... on Article {
          ...Article
          description
          title
        }
      }
    }
  `,
  {
    variables: ({id}) => ({
      baseHeadingLevel: 2,
      id,
    }),
    render: ({node}) => <Article data={node} />,
    title: ({node}) => (node ? node.title : null),
    description: ({node}) => (node ? node.description : null),
  },
);
