import {GraphQLInterfaceType, GraphQLList, GraphQLNonNull} from 'graphql';

import TagNameType from '../types/TagNameType';

const taggedInterface = new GraphQLInterfaceType({
  name: 'Tagged',
  description: 'An object with a tags field',
  fields: {
    tags: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(TagNameType)),
      ),
      description: 'A list of tag names',
    },
  },
});

export default taggedInterface;
