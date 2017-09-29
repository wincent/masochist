import React from 'react';
import {graphql} from 'react-relay';

import Snippet from '../../client/components/Snippet';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SnippetRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
      node(id: $id) {
        ... on Snippet {
          ...Snippet
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
    render: ({node}) => <Snippet data={node} />,
    title: ({node}) => (node ? node.title : null),
    description: ({node}) => (node ? node.description : null),
  },
);
