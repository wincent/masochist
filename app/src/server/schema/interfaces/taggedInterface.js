import {GraphQLInterfaceType, GraphQLList} from 'graphql';
import Article from '../../models/Article';
import Page from '../../models/Page';
import Post from '../../models/Post';
import Snippet from '../../models/Snippet';
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
  resolveType: object => {
    if (object instanceof Article) {
      return articleType;
    } else if (object instanceof Page) {
      return pageType;
    } else if (object instanceof Post) {
      return postType;
    } else if (object instanceof Snippet) {
      return snippetType;
    } else {
      return null;
    }
  },
});

export default taggedInterface;
