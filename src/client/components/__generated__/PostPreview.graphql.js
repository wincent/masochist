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
declare export opaque type PostPreview$ref: FragmentReference;
export type PostPreview = {|
  +description: ?string,
  +title: ?string,
  +url: string,
  +$fragmentRefs: Tags$ref & When$ref,
  +$refType: PostPreview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PostPreview",
  "type": "Post",
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
(node/*: any*/).hash = '0caeaf19c9a8711510ba8d125ace88b5';
module.exports = node;
