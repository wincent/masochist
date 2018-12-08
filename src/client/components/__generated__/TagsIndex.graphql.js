/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TagPreview$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TagsIndex$ref: FragmentReference;
export type TagsIndex = {|
  +tags: {|
    +count: number,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: any,
        +$fragmentRefs: TagPreview$ref,
      |}
    |}>,
  |},
  +$refType: TagsIndex$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TagsIndex",
  "type": "Root",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    }
  ],
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
                {
                  "kind": "FragmentSpread",
                  "name": "TagPreview",
                  "args": null
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
(node/*: any*/).hash = '1d4dedc78f56d53247f745fa7d4eb591';
module.exports = node;
