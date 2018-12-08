/**
 * @flow
 * @relayHash 0eb96f28262b12740b0bdd2d9c656843
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getCanonicalURLForRequestQueryVariables = {|
  id: string
|};
export type getCanonicalURLForRequestQueryResponse = {|
  +node: ?{|
    +url?: string
  |}
|};
export type getCanonicalURLForRequestQuery = {|
  variables: getCanonicalURLForRequestQueryVariables,
  response: getCanonicalURLForRequestQueryResponse,
|};
*/


/*
query getCanonicalURLForRequestQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Article {
      url
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "InlineFragment",
  "type": "Article",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "getCanonicalURLForRequestQuery",
  "id": "getCanonicalURLForRequestQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "getCanonicalURLForRequestQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "getCanonicalURLForRequestQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '21b6dbe83df90a643ee78370d4f5c155';
module.exports = node;
