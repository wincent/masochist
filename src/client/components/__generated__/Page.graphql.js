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
declare export opaque type Page$ref: FragmentReference;
export type Page = {|
  +id: string,
  +title: ?string,
  +url: string,
  +body: {|
    +html: string
  |},
  +$fragmentRefs: Tags$ref & When$ref,
  +$refType: Page$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Page",
  "type": "Page",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
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
(node/*: any*/).hash = '8791b9b30ebc301971b8fa7186004ca5';
module.exports = node;
