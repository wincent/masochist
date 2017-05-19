import {GraphQLInterfaceType, GraphQLList} from 'graphql';

import TagNameType from '../types/TagNameType';

const taggedInterface = new GraphQLInterfaceType({
  name: 'Tagged',
  description: 'An object with a tags field',
  fields: {
    tags: {
      type: new GraphQLList(TagNameType),
      description: 'A list of tag names',
    },
  },
});

export default taggedInterface;
