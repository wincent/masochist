/**
 * @flow
 */

import {GraphQLScalarType} from 'graphql';
import {Kind} from 'graphql/language';

const TagNameType = new GraphQLScalarType({
  name: 'TagName',
  description: 'A tag name',
  serialize: String,
  parseValue: String,
  parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  },
});

export default TagNameType;
