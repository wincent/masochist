/**
 * @flow
 */

import DateTimeType from '../types/DateTimeType';

const timestampFields = {
  createdAt: {
    type: DateTimeType,
    resolve: record => record.createdAt,
  },
  updatedAt: {
    type: DateTimeType,
    resolve: record => record.updatedAt,
  },
};

export default timestampFields;
