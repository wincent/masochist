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
declare export opaque type PagePreview$ref: FragmentReference;
export type PagePreview = {|
  +description: ?string,
  +title: ?string,
  +url: string,
  +$fragmentRefs: Tags$ref & When$ref,
  +$refType: PagePreview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PagePreview",
  "type": "Page",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
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
(node/*: any*/).hash = '3c983af16a8c98ad3efc9edb90499c81';
module.exports = node;
