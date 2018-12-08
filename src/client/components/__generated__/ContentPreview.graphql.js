/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ArticlePreview$ref = any;
type PagePreview$ref = any;
type PostPreview$ref = any;
type SnippetPreview$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ContentPreview$ref: FragmentReference;
export type ContentPreview = {|
  +__typename: string,
  +$fragmentRefs: ArticlePreview$ref & PagePreview$ref & PostPreview$ref & SnippetPreview$ref,
  +$refType: ContentPreview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ContentPreview",
  "type": "Content",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArticlePreview",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PagePreview",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PostPreview",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SnippetPreview",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '00ea83defaf95816e60f5810272407ca';
module.exports = node;
