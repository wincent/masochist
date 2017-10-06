/**
 * @flow
 */

import DateTimeType from '../types/DateTimeType';

const timestampFields = {
  createdAt: {
    description: 'When the content was first created',
    type: DateTimeType,
  },
  updatedAt: {
    description: 'When the content was last updated',
    type: DateTimeType,
  },
};

export default timestampFields;
