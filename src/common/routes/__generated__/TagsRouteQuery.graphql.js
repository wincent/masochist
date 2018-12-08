/**
 * @flow
 * @relayHash c58e69b7637f076897d6ea3910a43b25
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TagsIndex$ref = any;
export type TagsRouteQueryVariables = {|
  count: number
|};
export type TagsRouteQueryResponse = {|
  +$fragmentRefs: TagsIndex$ref
|};
export type TagsRouteQuery = {|
  variables: TagsRouteQueryVariables,
  response: TagsRouteQueryResponse,
|};
*/


/*
query TagsRouteQuery(
  $count: Int!
) {
  ...TagsIndex
}

fragment TagsIndex on Root {
  tags(first: $count) {
    count
    edges {
      node {
        id
        name
        ...TagPreview
      }
    }
  }
}

fragment TagPreview on Tag {
  count
  name
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TagsRouteQuery",
  "id": "TagsRouteQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TagsRouteQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "TagsIndex",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TagsRouteQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tags",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }
        ],
        "concreteType": "TagConnection",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TagEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Tag",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b2894785b3848427728e79818c64635';
module.exports = node;
