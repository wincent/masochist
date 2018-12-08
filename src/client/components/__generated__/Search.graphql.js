/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ContentPreview$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Search$ref: FragmentReference;
export type Search = {|
  +search: {|
    +count: number,
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +$fragmentRefs: ContentPreview$ref
      |},
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
    |},
  |},
  +$refType: Search$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Search",
  "type": "Root",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "search"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "q",
      "type": "String"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "search",
      "name": "__Search_search_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "q",
          "variableName": "q",
          "type": "String"
        }
      ],
      "concreteType": "SearchResultConnection",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "count",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "SearchResultEdge",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": null,
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "ContentPreview",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3a2bf4cd58be9c652544e7f9e464dc2d';
module.exports = node;
