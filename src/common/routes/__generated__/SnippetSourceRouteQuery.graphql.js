/**
 * @flow
 * @relayHash 70b413f8e294174ecff8638f3620662f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

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

module.exports = batch;
