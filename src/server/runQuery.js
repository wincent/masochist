/**
 * @flow
 */

import {graphql} from 'graphql';
import getLoaders from './getLoaders';
import schema from './schema';

/**
 * Convenience wrapper around running an arbitrary GraphQL query.
 */
export default function runQuery(query: string, variables: ?Object) {
  return graphql(schema, query, {loaders: getLoaders()}, null, variables);
}
