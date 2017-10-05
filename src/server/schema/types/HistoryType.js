/**
 * @noflow
 */

import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

const HistoryType = new GraphQLObjectType({
  description: 'Revision history for the object',
  name: 'History',
  fields: {
    // Later, may wish to expose revision information here directly
    // through a "revisions" connection instead of linking offsite.
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'URL showing revision history for the object',
    },
  },
});

export default HistoryType;
