/**
 * @noflow
 */

import {GraphQLInterfaceType, GraphQLNonNull} from 'graphql';
import DateTimeType from '../types/DateTimeType';
import HistoryType from '../types/HistoryType';

const versionedInterface = new GraphQLInterfaceType({
  name: 'Versioned',
  description: 'An object with history and timestamp fields',
  fields: {
    createdAt: {
      type: DateTimeType,
      description: 'When the content was first created',
    },
    history: {
      type: new GraphQLNonNull(HistoryType),
      description: 'Revision history for the object',
    },
    updatedAt: {
      type: DateTimeType,
      description: 'When the content was last updated',
    },
  },
});

export default versionedInterface;
