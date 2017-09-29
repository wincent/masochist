import React from 'react';
import {graphql} from 'react-relay';

import Page from '../../client/components/Page';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query PageRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
      node(id: $id) {
        ... on Page {
          ...Page
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
    render: ({node}) => <Page data={node} />,
    title: ({node}) => (node ? node.title : null),
    description: ({node}) => (node ? node.description : null),
  },
);
