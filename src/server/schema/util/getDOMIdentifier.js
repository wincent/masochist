import {toGlobalId} from 'graphql-relay';

/**
 * GraphQL IDs are Base64 encoded, so possible "special" characters are "=",
 * "+" and "/".
 *
 * DOM IDs can use "-", "_", ":" and ".".
 *
 * See:
 *
 * - https://en.wikipedia.org/wiki/Base64
 * - https://stackoverflow.com/a/1077111/2103996
 */
const GRAPHQL_SPECIAL_CHAR_TO_DOM_SPECIAL_CHAR = {
  '=': '_',
  '+': ':',
  '/': '.',
};

/**
 * Transforms a GraphQL ID into a form safe for use as a DOM ID.
 *
 * Example:
 *
 *    UG9zdDpjb25uZWN0aW5nLWNvbXB1dGVycw== becomes
 *    UG9zdDpjb25uZWN0aW5nLWNvbXB1dGVycw__
 */
export default function getDOMIdentifier(typeName, id) {
  return toGlobalId(typeName, id).replace(/[=/+]/g, (char) => {
    return GRAPHQL_SPECIAL_CHAR_TO_DOM_SPECIAL_CHAR[char];
  });
}
