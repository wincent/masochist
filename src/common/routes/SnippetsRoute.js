/**
 * @flow
 */

import React from 'react';
import {graphql} from 'react-relay';

import SnippetsIndex from '../../client/components/SnippetsIndex';
import buildRoute from '../buildRoute';

export default buildRoute(
  graphql`
    query SnippetsRouteQuery(
      $baseHeadingLevel: Int!
      $count: Int!
      $cursor: String
    ) {
      ...SnippetsIndex
    }
  `,
  {
    variables: {
      baseHeadingLevel: 2,
      count: SnippetsIndex.PAGE_SIZE,
      cursor: null,
    },
    render: data => <SnippetsIndex data={data} />,
    title: 'snippets',
  },
);
