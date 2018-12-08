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
declare export opaque type ArticlePreview$ref: FragmentReference;
export type ArticlePreview = {|
  +description: ?string,
  +title: ?string,
  +url: string,
  +$fragmentRefs: Tags$ref & When$ref,
  +$refType: ArticlePreview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ArticlePreview",
  "type": "Article",
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
(node/*: any*/).hash = '5a336274060a204df8c9d87e903097a5';
module.exports = node;
