import {GraphQLList, GraphQLNonNull} from 'graphql';
import TagNameType from '../types/TagNameType';

const tagsField = {
  tags: {
    // TODO: make this tags{name}?
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TagNameType))),
  },
};

export default tagsField;
