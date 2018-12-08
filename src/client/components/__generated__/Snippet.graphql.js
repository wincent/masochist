/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Tags$ref = any;
type When$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Snippet$ref: FragmentReference;
export type Snippet = {|
  +body: {|
    +html: string
  |},
  +id: string,
  +url: string,
  +title: ?string,
  +$fragmentRefs: Tags$ref & When$ref,
  +$refType: Snippet$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Snippet",
  "type": "Snippet",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "baseHeadingLevel",
      "type": "Int"
    }
  ],
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
          "args": [
            {
              "kind": "Variable",
              "name": "baseHeadingLevel",
              "variableName": "baseHeadingLevel",
              "type": "Int"
            }
          ],
          "storageKey": null
        }
      ]
    },
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
      "name": "url",
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
      "kind": "FragmentSpread",
      "name": "Tags",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "When",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b78e5b532c599d3eb6fffadefebcfc7b';
module.exports = node;
