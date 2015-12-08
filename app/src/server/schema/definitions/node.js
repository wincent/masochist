import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

const registeredTypes = {};

export function registerType(type) {
  registeredTypes[type.name] = type;
  return type;
}

export const {nodeField, nodeInterface} = nodeDefinitions(
  function resolveObjectFromID(globalId, {rootValue}) {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'Article') {
      return rootValue.loaders.articleLoader.load(id);
    } else if (type === 'Page') {
      return rootValue.loaders.pageLoader.load(id);
    } else if (type === 'Post') {
      return rootValue.loaders.postLoader.load(id);
    } else if (type === 'Snippet') {
      return rootValue.loaders.snippetLoader.load(id);
    } else if (type === 'Tag') {
      return rootValue.loaders.tagLoader.load(id);
    } else if (type === 'User') {
      return rootValue.loaders.userLoader.load(id);
    } else {
      return null;
    }
  },
  function resolveGraphQLTypeFromObject(object) {
    return registeredTypes[object.constructor.name] || null;
  },
);
