/**
 * @flow
 */

import DateTimeType from '../types/DateTimeType';

const timestampFields = {
  createdAt: {
    type: DateTimeType,
    resolve: (record: Object): ?Date => record.createdAt,
  },
  updatedAt: {
    type: DateTimeType,
    resolve: (record: Object): ?Date => record.updatedAt,
  },
};

export default timestampFields;
