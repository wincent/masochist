/**
 * @flow
 * @relayHash 60eed6ce2295311893d19da30e414c78
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SnippetSourceRouteQueryResponse = {|
  +node: ?{|
    +source?: ?string;
  |};
|};
*/


/*
query SnippetSourceRouteQuery(
  $format: MARKUP_FORMAT_TYPE
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Snippet {
      source(format: $format)
    }
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "format",
        "type": "MARKUP_FORMAT_TYPE",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SnippetSourceRouteQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Snippet",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "format",
                    "variableName": "format",
                    "type": "MARKUP_FORMAT_TYPE"
                  }
                ],
                "name": "source",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root"
  },
  "id": "SnippetSourceRouteQuery",
  "kind": "Batch",
  "metadata": {},
  "name": "SnippetSourceRouteQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "format",
        "type": "MARKUP_FORMAT_TYPE",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SnippetSourceRouteQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Snippet",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "format",
                    "variableName": "format",
                    "type": "MARKUP_FORMAT_TYPE"
                  }
                ],
                "name": "source",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": null
};


if (__DEV__) {
  batch['text'] = "query SnippetSourceRouteQuery(\n  $format: MARKUP_FORMAT_TYPE\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Snippet {\n      source(format: $format)\n    }\n    id\n  }\n}\n";
}

module.exports = batch;
