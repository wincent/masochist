/**
 * @flow
 */

import {GraphQLInterfaceType, GraphQLObjectType, GraphQLString} from 'graphql';
import HistoryType from '../types/HistoryType';

const versionedInterface = new GraphQLInterfaceType({
  name: 'Versioned',
  description: 'An object with a history field',
  fields: {
    history: {
      type: HistoryType,
      description: 'Revision history for the object',
    },
  },
});

export default versionedInterface;
