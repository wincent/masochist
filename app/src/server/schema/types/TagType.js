/**
 * @flow
 */

import {GraphQLScalarType} from 'graphql';
import {Kind} from 'graphql/language';

const TagType = new GraphQLScalarType({
  name: 'Tag',
  description: 'A tag',
  serialize: String,
  parseValue: String,
  parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  }
});

export default TagType;
