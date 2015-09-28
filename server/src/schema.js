'use strict';

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import wikify from './wikify';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return wikify([{wikitext: "'''world'''"}]);
        }
      }
    }
  })
});

export default schema;
