/**
 * @flow
 */

import React from 'react';
import {graphql} from 'react-relay';

import TagsIndex from '../../client/components/TagsIndex';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query TagsRouteQuery($count: Int!) {
      ...TagsIndex
    }
  `,
  {
    variables: {
      count: 2 ** 31 - 1,
    },
    render: data => <TagsIndex data={data} />,
    title: 'tags',
  },
);
