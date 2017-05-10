/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule ContentPreview_node.graphql
 * @generated SignedSource<<7782efdfe510abb906498d8f510e799c>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ContentPreview_node = {
  __typename: string;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContentPreview_node",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArticlePreview_article",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PagePreview_page",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PostPreview_post",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SnippetPreview_snippet",
      "args": null
    }
  ],
  "type": "Content"
};

module.exports = fragment;
