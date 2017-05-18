/**
 * @flow
 */

import DateTimeType from '../types/DateTimeType';

const timestampFields = {
  createdAt: {
    description: 'When the content was first created',
    type: DateTimeType,
    resolve: (record: Object): ?Date => record.createdAt,
  },
  updatedAt: {
    description: 'When the content was last updated',
    type: DateTimeType,
    resolve: (record: Object): ?Date => record.updatedAt,
  },
};

export default timestampFields;
