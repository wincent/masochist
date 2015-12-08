import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import User from './models/User';
import {nodeField} from './schema/definitions/node';
import UserType from './schema/types/UserType';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      node: nodeField,
      viewer: {
        type: UserType,
        resolve: () => new User(),
      },
    }
  })
});
