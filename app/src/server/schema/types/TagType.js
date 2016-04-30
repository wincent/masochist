import Promise from 'bluebird';
import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArraySlice,
  getOffsetWithDefault,
  globalIdField,
} from 'graphql-relay';
import {
  nodeInterface,
  registerType,
} from '../definitions/node';
import taggableConnection from '../fields/connections/taggableConnection';
import extractTypeAndId from '../../../common/extractTypeAndId';
import TagNameType from './TagNameType';

const TagType = registerType(new GraphQLObjectType({
  name: 'Tag',
  description: 'A tag',
  fields: {
    id: globalIdField('Tag'),
    name: {
      type: new GraphQLNonNull(TagNameType),
      description: "The tag's name",
      resolve: tag => tag.name,
    },
    count: {
      type: GraphQLInt,
      description: 'Count of items tagged with the tag',
      resolve: tag => tag.count,
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'URL for the tag',
      resolve: tag => `/tags/${tag.id}`,
    },
    taggables: {
      type: taggableConnection,
      description: 'Items tagged with a particular tag',
      args: connectionArgs,
      resolve: async (tag, args, context, {rootValue}) => {
        // Cap count to avoid abuse.
        const count = Math.max(args.first, 10);
        const offset = getOffsetWithDefault(args.after, -1) + 1;
        const {loaders} = rootValue;
        const promisedContent = tag.taggables
          .slice(offset, offset + count)
          .map(typeAndId => {
            // TODO: These should probably be globalIds, manual splitting is
            // probably a smell.
            const [type, id] = extractTypeAndId(typeAndId);
            switch (type) {
              case 'wiki':
                return loaders.Article.load(id);
              case 'blog':
                return loaders.Post.load(id);
              case 'pages':
                return loaders.Page.load(id);
              case 'snippets':
                return loaders.Snippet.load(id);
              default:
                // TODO throw here?
            }
          });
        return connectionFromPromisedArraySlice(
          Promise.all(promisedContent),
          args,
          {
            sliceStart: offset,
            arrayLength: tag.taggables.length,
          },
        );
      },
    },
  },
  interfaces: [nodeInterface],
}));

export default TagType;
