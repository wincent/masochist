/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type feedPosts$ref: FragmentReference;
export type feedPosts = {|
  +posts: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +body: {|
          +html: string
        |},
        +createdAt: ?any,
        +title: ?string,
        +url: string,
      |}
    |}>
  |},
  +$refType: feedPosts$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "feedPosts",
  "type": "Root",
  "metadata": null,
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bfd16844113b748cd0d04d34cb599de4';
module.exports = node;
