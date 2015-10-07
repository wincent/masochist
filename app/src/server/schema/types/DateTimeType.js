import {GraphQLScalarType} from 'graphql';
import {Kind} from 'graphql/language';

function coerceDate(value) {
  if (value instanceof Date) {
    // 1. Stringify from object to: '"2015-10-04T00:31:05.300Z"'.
    // 2. Parse to unwrap back to string: "2015-10-04T00:31:05.300Z".
    return JSON.parse(JSON.stringify(value));
  } else {
    return null;
  }
}

const DateTimeType = new GraphQLScalarType({
  name: 'DateTime',
  description: 'A JSON-style (ISO 8601) date',
  serialize: coerceDate,
  parseValue: coerceDate,
  parseLiteral(valueAST) {
    if (valueAST.kind !== Kind.STRING) {
      return null;
    }
    const date = new Date(valueAST.value);
    if (isNaN(date.getTime())) {
      return null; // Invalid date.
    }
    if (valueAST.value !== coerceDate(date)) {
      return null; // Invalid date format.
    }
    return date;
  },
});

export default DateTimeType;
