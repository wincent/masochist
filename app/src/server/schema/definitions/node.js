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
    const loader = rootValue.loaders[type];
    return loader.load(id) || null;
  },
  function resolveGraphQLTypeFromObject(object) {
    return registeredTypes[object.constructor.name] || null;
  },
);
