import React from 'react';
import {graphql} from 'react-relay';

import Post from '../../client/components/Post';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query PostRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
      node(id: $id) {
        ... on Post {
          ...Post
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
    render: ({node}) => <Post data={node} />,
    title: ({node}) => (node ? node.title : null),
    description: ({node}) => (node ? node.description : null),
  },
);
