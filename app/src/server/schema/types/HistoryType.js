/**
 * @flow
 */

import {GraphQLObjectType, GraphQLString} from 'graphql';

const HistoryType = new GraphQLObjectType({
  description: 'Revision history for the object',
  name: 'History',
  fields: {
    // Later, may wish to expose revision information here directly
    // through a "revisions" connection instead of linking offsite.
    url: {
      type: GraphQLString,
      description: 'URL showing revision history for the object',
      resolve: history => history.url,
    },
  },
});

export default HistoryType;
