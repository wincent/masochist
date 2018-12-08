/**
 * @flow
 * @relayHash a06b70a59113adce89a3e9d592c6877d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type feedPosts$ref = any;
export type feedQueryVariables = {||};
export type feedQueryResponse = {|
  +$fragmentRefs: feedPosts$ref
|};
export type feedQuery = {|
  variables: feedQueryVariables,
  response: feedQueryResponse,
|};
*/


/*
query feedQuery {
  ...feedPosts
}

fragment feedPosts on Root {
  posts(first: 10) {
    edges {
      node {
        body {
          html
        }
        createdAt
        title
        url
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "feedQuery",
  "id": "feedQuery",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "feedQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "feedPosts",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "feedQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "posts",
        "storageKey": "posts(first:10)",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }
        ],
        "concreteType": "PostConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PostEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Post",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "body",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Markup",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "html",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
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
// prettier-ignore
(node/*: any*/).hash = 'ecd8bddb455ea6e8b7cbbca8ee67ed14';
module.exports = node;
