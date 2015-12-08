import {GraphQLUnionType} from 'graphql';
import ArticleType from './ArticleType';
import PageType from './PageType';
import PostType from './PostType';
import SnippetType from './SnippetType';

export default new GraphQLUnionType({
  name: 'Taggable',
  types: [
    ArticleType,
    PageType,
    PostType,
    SnippetType,
  ],
});
