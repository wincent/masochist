/**
 * @flow
 * @relayHash f5a57bad698ac69a139cf4c6f7f93058
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type feedQueryResponse = {| |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "feedQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "feedPosts",
        "args": null
      }
    ],
    "type": "Root"
  },
  "id": "feedQuery",
  "kind": "Batch",
  "metadata": {},
  "name": "feedQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "feedQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }
        ],
        "concreteType": "PostConnection",
        "name": "posts",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Markup",
                    "name": "body",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "html",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "posts{\"first\":10}"
      }
    ]
  },
  "text": null
};


if (__DEV__) {
  batch['text'] = "query feedQuery {\n  ...feedPosts\n}\n\nfragment feedPosts on Root {\n  posts(first: 10) {\n    edges {\n      node {\n        body {\n          html\n        }\n        createdAt\n        title\n        url\n        id\n      }\n    }\n  }\n}\n";
}

module.exports = batch;
